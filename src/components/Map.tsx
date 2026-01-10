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
  geoData: any;
  scaleMultiplier: number;
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

    selectedCountries.forEach(selected => {
      const feature = geoData.features.find((f: any) => f.properties['ISO3166-1-Alpha-2'] === selected.code);
      if (!feature) return;

      const draggableLayer = L.geoJSON(feature, {
        style: { fillColor: selected.color, fillOpacity: 0.7, color: selected.color, weight: 2 }
      }).addTo(map);
      
      const allPolygonLayers: L.Polygon[] = [];
      const allCenteredProjectedCoords: any[] = [];
      
      const findPolygons = (layer: L.Layer) => {
        if (layer instanceof L.Polygon) allPolygonLayers.push(layer);
        else if (layer instanceof L.FeatureGroup) layer.eachLayer(findPolygons);
      };
      findPolygons(draggableLayer);
      
      // --- POCZĄTEK OSTATECZNEJ POPRAWKI ---
      // ZAWSZE ufamy pozycji ze stanu aplikacji (`selected.position`) jako źródłu prawdy.
      // Nie pobieramy jej z warstwy Leaflet, która może być nieaktualna.
      const authoritativeCenter = selected.position;
      const featureProjectedCenter = map.project(authoritativeCenter, map.getZoom());
      // --- KONIEC OSTATECZNEJ POPRAWKI ---

      allPolygonLayers.forEach(polygon => {
        const tempLayer = L.geoJSON(polygon.toGeoJSON());
        const geometricCenterOfPolygon = tempLayer.getBounds().getCenter();
        const projectedGeometricCenter = map.project(geometricCenterOfPolygon, map.getZoom());

        const getCenteredProjected = (coords: any): any => {
          if (Array.isArray(coords) && Array.isArray(coords[0])) return coords.map(getCenteredProjected);
          return (coords as L.LatLng[]).map(latlng => map.project(latlng, map.getZoom()).subtract(projectedGeometricCenter));
        };
        allCenteredProjectedCoords.push(getCenteredProjected(polygon.getLatLngs()));
      });

      const initialScale = getTrueSizeScale(selected.originalLat, authoritativeCenter.lat, scaleMultiplier);
      allPolygonLayers.forEach((polygon, index) => {
        const reconstructLatLngs = (coords: any): any => {
          if (Array.isArray(coords) && Array.isArray(coords[0])) return coords.map(reconstructLatLngs);
          return (coords as L.Point[]).map(p => {
            const scaledPoint = featureProjectedCenter.add(p.multiplyBy(initialScale));
            return map.unproject(scaledPoint, map.getZoom());
          });
        };
        polygon.setLatLngs(reconstructLatLngs(allCenteredProjectedCoords[index]));
      });
      
      const startDrag = (e: L.LeafletMouseEvent) => {
        L.DomEvent.preventDefault(e.originalEvent);
        map.dragging.disable();

        const currentLayerBounds = draggableLayer.getBounds();
        const shapeCenterLatLng = currentLayerBounds.getCenter();
        const shapeCenterPoint = map.project(shapeCenterLatLng, map.getZoom());

        const clickPoint = map.project(e.latlng, map.getZoom());
        const startScale = getTrueSizeScale(selected.originalLat, shapeCenterLatLng.lat, scaleMultiplier);
        const offset = clickPoint.subtract(shapeCenterPoint).divideBy(startScale);

        const onPointerMove = (moveEvent: L.LeafletMouseEvent) => {
          const movePoint = map.project(moveEvent.latlng, map.getZoom());
          const newScale = getTrueSizeScale(selected.originalLat, moveEvent.latlng.lat, scaleMultiplier);
          const newCenterPoint = movePoint.subtract(offset.multiplyBy(newScale));

          requestAnimationFrame(() => {
            allPolygonLayers.forEach((polygon, index) => {
              const reconstructLatLngs = (coords: any): any => {
                if (Array.isArray(coords) && Array.isArray(coords[0])) return coords.map(reconstructLatLngs);
                return (coords as L.Point[]).map(p => {
                  const scaledPoint = newCenterPoint.add(p.multiplyBy(newScale));
                  return map.unproject(scaledPoint, map.getZoom());
                });
              };
              polygon.setLatLngs(reconstructLatLngs(allCenteredProjectedCoords[index]));
            });
          });
        };

        const endDrag = (upEvent: L.LeafletMouseEvent) => {
          map.dragging.enable();
          map.off('pointermove', onPointerMove);
          map.off('pointerup', endDrag);
          map.off('pointercancel', endDrag);

          const finalScale = getTrueSizeScale(selected.originalLat, upEvent.latlng.lat, scaleMultiplier);
          const finalCenterPoint = map.project(upEvent.latlng, map.getZoom()).subtract(offset.multiplyBy(finalScale));
          onCountryMove(selected.code, map.unproject(finalCenterPoint, map.getZoom()));
        };

        map.on('pointermove', onPointerMove);
        map.on('pointerup', endDrag);
        map.on('pointercancel', endDrag);
      };

      draggableLayer.on('pointerdown', startDrag);

      draggableLayersRef.current[selected.code] = draggableLayer;
    });

    return () => {
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
