import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { countries, Country } from '../data/countries';

interface CountrySearchProps {
  onSelectCountry: (country: Country) => void;
  selectedCountries: string[];
}

export function CountrySearch({ onSelectCountry, selectedCountries }: CountrySearchProps) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredCountries = countries
    .filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 10);

  const handleSelect = (country: Country) => {
    onSelectCountry(country);
    setSearch('');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Wyszukaj państwo..."
          className="w-full pl-10 pr-10 py-3 border border-gray-600 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {search && (
          <button
            onClick={() => {
              setSearch('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && search && filteredCountries.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {filteredCountries.map((country) => {
            const isSelected = selectedCountries.includes(country.code);
            return (
              <button
                key={country.code}
                onClick={() => handleSelect(country)}
                disabled={isSelected}
                className={`w-full text-left px-4 py-3 hover:bg-[#2a2a2a] border-b border-gray-700 last:border-b-0 transition-colors ${
                  isSelected ? 'opacity-50 cursor-not-allowed bg-[#2a2a2a]' : ''
                }`}
              >
                <div className="font-medium text-white">{country.name}</div>
                <div className="text-sm text-gray-400">
                  Area: {country.area.toLocaleString()} km²
                  {isSelected && ' (Już wybrane)'}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
