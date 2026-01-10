import { useState } from 'react';
import { Map } from './Map';
import { CountrySearch } from './CountrySearch';
import { CountryList } from './CountryList';
import { useCountryGeoJSON } from '../hooks/useCountryGeoJSON';
import { countries, Country } from '../data/countries';
import L from 'leaflet';

// INTERFEJS UPROSZCZONY - usunięto pole 'scale'
export interface SelectedCountry {
  code: string;
  name: string;
  color: string;
  area: number;
  originalLat: number;
  originalLng: number;
  position: { lat: number; lng: number };
}

const COLORS = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
  '#8b5cf6', '#ec4899', '#14b8a6', '#f97316',
];

export function TrueSizeMap() {
  const [selectedCountries, setSelectedCountries] = useState<SelectedCountry[]>([]);
  const [scaleMultiplier, setScaleMultiplier] = useState<number>(1);
  const { geoData, loading } = useCountryGeoJSON();

  const handleSelectCountry = (country: Country) => {
    if (selectedCountries.some(c => c.code === country.code)) return;

    const colorIndex = selectedCountries.length % COLORS.length;

    // Oblicz rzeczywisty środek z GeoJSON
    let realLat = country.coordinates[0];
    let realLng = country.coordinates[1];
    
    if (geoData) {
      const feature = geoData.features.find((f: any) => f.properties['ISO3166-1-Alpha-2'] === country.code);
      if (feature) {
        const tempLayer = L.geoJSON(feature as GeoJSON.Feature);
        const trueCenter = tempLayer.getBounds().getCenter();
        tempLayer.remove();
        realLat = trueCenter.lat;
        realLng = trueCenter.lng;
      }
    }

    const newCountry: SelectedCountry = {
      code: country.code,
      name: country.name,
      color: COLORS[colorIndex],
      area: country.area,
      originalLat: realLat,
      originalLng: realLng,
      position: {
        lat: realLat,
        lng: realLng,
      },
    };
    setSelectedCountries([...selectedCountries, newCountry]);
  };

  const handleCountryClick = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    if (country) handleSelectCountry(country);
  };

  // LOGIKA ZNACZNIE UPROSZCZONA - aktualizujemy tylko pozycję
  const handleCountryMove = (code: string, newPosition: { lat: number; lng: number }) => {
    setSelectedCountries(prev =>
      prev.map(country =>
        country.code === code ? { ...country, position: newPosition } : country
      )
    );
  };

  const handleRemoveCountry = (code: string) => {
    setSelectedCountries(selectedCountries.filter(c => c.code !== code));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Ładowanie danych mapy...</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#121212] flex flex-col">
      <header className="bg-[#1e1e1e] shadow-sm border-b border-gray-700 flex-shrink-0">
        <div className="px-4 py-3">
          <h1 className="text-2xl font-bold text-white">Rzeczywisty Rozmiar</h1>
          <p className="text-sm text-gray-400 mt-1">Porównaj rzeczywiste rozmiary krajów, przeciągając je po mapie</p>
        </div>
      </header>
      <div className="flex-1 flex min-h-0">
        <div className="flex-1 relative">
          {geoData && (
            // PRZEKAZUJEMY NOWY PROP - scaleMultiplier
            <Map
              selectedCountries={selectedCountries}
              onCountryClick={handleCountryClick}
              onCountryMove={handleCountryMove}
              geoData={geoData}
              scaleMultiplier={scaleMultiplier} 
            />
          )}
        </div>
        <div className="w-80 bg-[#1e1e1e] border-l border-gray-700 p-4 overflow-y-auto">
          <div className="space-y-4">
            <CountrySearch
              onSelectCountry={handleSelectCountry}
              selectedCountries={selectedCountries.map(c => c.code)}
            />
            <div className="bg-[#2a2a2a] border border-blue-900 rounded-lg p-4">
              <h3 className="font-semibold text-blue-300 mb-2">Jak korzystać</h3>
              <ul className="text-sm text-blue-200 space-y-1">
                <li>• Wyszukaj kraje powyżej</li>
                <li>• Kliknij kraje na mapie</li>
                <li>• Przeciągnij kraje, aby porównać rozmiary</li>
              </ul>
              <div className="mt-4">
                <label className="block text-sm font-medium text-blue-300 mb-1">Mnożnik skali</label>
                <input
                  type="range" min={0.5} max={2} step={0.05}
                  value={scaleMultiplier}
                  onChange={(e) => setScaleMultiplier(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-blue-300 mt-1">Obecna: x{scaleMultiplier.toFixed(2)}</div>
              </div>
            </div>
            <CountryList countries={selectedCountries} onRemove={handleRemoveCountry} />
          </div>
        </div>
      </div>
    </div>
  );
}
