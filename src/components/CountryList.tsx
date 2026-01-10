import { X, Move } from 'lucide-react';
import { SelectedCountry } from './TrueSizeMap';

interface CountryListProps {
  countries: SelectedCountry[];
  onRemove: (code: string) => void;
}

export function CountryList({ countries, onRemove }: CountryListProps) {
  if (countries.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-lg p-4">
      <h3 className="font-semibold text-white mb-3">Wybrane kraje</h3>
      <div className="space-y-2">
        {countries.map((country) => (
          <div
            key={country.code}
            className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#323232] transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: country.color }}
              />
              <div>
                <div className="font-medium text-white">{country.name}</div>
                <div className="text-sm text-gray-400">
                  {country.area.toLocaleString()} km²
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-xs text-gray-500 flex items-center">
                <Move className="w-3 h-3 mr-1" />
                Przeciągnij aby przenieść
              </div>
              <button
                onClick={() => onRemove(country.code)}
                className="p-1 hover:bg-red-100 rounded transition-colors"
                title="Usuń kraj"
              >
                <X className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
