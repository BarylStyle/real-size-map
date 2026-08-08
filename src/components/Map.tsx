import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { SelectedCountry } from './TrueSizeMap';
import { getTrueSizeScale } from '../utils/projectionCorrection';

interface MapProps {
  selectedCountries?: SelectedCountry[];
  onCountryClick: (countryCode: string) => void;
  onCountryMove: (code: string, newPosition: { lat: number; lng: number }) => void;
  geoData: GeoJSON.FeatureCollection;
  scaleMultiplier: number;
}

/** Zagnieżdżone tablice współrzędnych Leafletu — dowolnie głębokie (polygon, ring, hole). */
type Nested<T> = T | Nested<T>[];

function mapNested<In, Out>(coords: Nested<In>[], fn: (value: In) => Out): Nested<Out>[] {
  return coords.map(item =>
    Array.isArray(item) ? mapNested(item as Nested<In>[], fn) : fn(item as In)
  );
}

function collectPolygons(layer: L.Layer, out: L.Polygon[] = []): L.Polygon[] {
  if (layer instanceof L.Polygon) out.push(layer);
  else if (layer instanceof L.FeatureGroup) layer.eachLayer(child => collectPolygons(child, out));
  return out;
}

function MapEventHandler(props: MapProps) {
  const { selectedCountries = [], geoData, onCountryClick, onCountryMove, scaleMultiplier } = props;
  const map = useMap();
  const draggableLayersRef = useRef<Record<string, L.GeoJSON>>({});

  useEffect(() => {
    if (!geoData) return;
    const baseLayer = L.geoJSON(geoData, {
      style: { fillColor: '#e5e7eb', fillOpacity: 0.6, color: '#9ca3af', weight: 1 },
      onEachFeature: (feature, layer) => {
        layer.on({
          click: () => {
            const code = feature.properties?.['ISO3166-1-Alpha-2'];
            if (code) onCountryClick(code);
          },
        });
      },
    }).addTo(map);
    return () => { baseLayer.remove(); };
  }, [geoData, map, onCountryClick]);

  useEffect(() => {
    if (!geoData) return;

    Object.values(draggableLayersRef.current).forEach(layer => layer.remove());
    draggableLayersRef.current = {};

    const teardowns: (() => void)[] = [];

    selectedCountries.forEach(selected => {
      const feature = geoData.features.find(
        f => f.properties?.['ISO3166-1-Alpha-2'] === selected.code
      );
      if (!feature) return;

      const draggableLayer = L.geoJSON(feature, {
        style: { fillColor: selected.color, fillOpacity: 0.7, color: selected.color, weight: 2 }
      }).addTo(map);

      const polygons = collectPolygons(draggableLayer);

      // Każdy wielokąt zapamiętujemy jako współrzędne ekranowe względem własnego środka,
      // dzięki czemu przesuwanie sprowadza się do wyboru nowego środka i skali.
      const centeredCoords = polygons.map(polygon => {
        const center = map.project(
          L.geoJSON(polygon.toGeoJSON()).getBounds().getCenter(),
          map.getZoom()
        );
        return mapNested(polygon.getLatLngs() as Nested<L.LatLng>[], latlng =>
          map.project(latlng, map.getZoom()).subtract(center)
        );
      });

      const scaleAt = (lat: number) => getTrueSizeScale(selected.originalLat, lat, scaleMultiplier);

      const render = (centerPoint: L.Point, scale: number) => {
        polygons.forEach((polygon, index) => {
          polygon.setLatLngs(
            mapNested(centeredCoords[index], point =>
              map.unproject(centerPoint.add(point.multiplyBy(scale)), map.getZoom())
            ) as L.LatLngExpression[][]
          );
        });
      };

      // Pozycja ze stanu aplikacji jest źródłem prawdy — warstwa Leafletu bywa nieaktualna.
      render(
        map.project(selected.position, map.getZoom()),
        scaleAt(selected.position.lat)
      );

      const container = map.getContainer();
      const latLngFromPointer = (event: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        return map.containerPointToLatLng(
          L.point(event.clientX - rect.left, event.clientY - rect.top)
        );
      };

      const onPointerDown = (event: PointerEvent) => {
        event.preventDefault();
        map.dragging.disable();

        const shapeCenter = draggableLayer.getBounds().getCenter();
        const startScale = scaleAt(shapeCenter.lat);
        // Uchwyt kursora względem środka kraju, w skali niezależnej od szerokości.
        const grabOffset = map.project(latLngFromPointer(event), map.getZoom())
          .subtract(map.project(shapeCenter, map.getZoom()))
          .divideBy(startScale);

        const centerFor = (latlng: L.LatLng, scale: number) =>
          map.project(latlng, map.getZoom()).subtract(grabOffset.multiplyBy(scale));

        const onPointerMove = (moveEvent: PointerEvent) => {
          const latlng = latLngFromPointer(moveEvent);
          const scale = scaleAt(latlng.lat);
          requestAnimationFrame(() => render(centerFor(latlng, scale), scale));
        };

        const onPointerUp = (upEvent: PointerEvent) => {
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
          map.dragging.enable();

          const latlng = latLngFromPointer(upEvent);
          const scale = scaleAt(latlng.lat);
          onCountryMove(
            selected.code,
            map.unproject(centerFor(latlng, scale), map.getZoom())
          );
        };

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
      };

      polygons.forEach(polygon => {
        const element = polygon.getElement() as HTMLElement | undefined;
        if (!element) return;
        element.addEventListener('pointerdown', onPointerDown);
        teardowns.push(() => element.removeEventListener('pointerdown', onPointerDown));
      });

      draggableLayersRef.current[selected.code] = draggableLayer;
    });

    return () => {
      teardowns.forEach(teardown => teardown());
      Object.values(draggableLayersRef.current).forEach(layer => layer.remove());
      draggableLayersRef.current = {};
    };
  }, [geoData, map, onCountryClick, onCountryMove, selectedCountries, scaleMultiplier]);

  return null;
}

export function Map(props: MapProps) {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%', backgroundColor: '#1a1a1a' }} minZoom={2} maxZoom={8} maxBounds={[[-90, -180], [90, 180]]} maxBoundsViscosity={0.5}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>' />
      <MapEventHandler {...props} />
    </MapContainer>
  );
}
