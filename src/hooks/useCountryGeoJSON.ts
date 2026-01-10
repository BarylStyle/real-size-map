import { useState, useEffect } from 'react';

interface GeoJSONFeature {
  type: string;
  properties: {
    name?: string;
    [key: string]: unknown;
  };
  geometry: {
    type: string;
    coordinates: unknown;
  };
}

interface GeoJSONData {
  type: string;
  features: GeoJSONFeature[];
}

export function useCountryGeoJSON() {
  const [geoData, setGeoData] = useState<GeoJSONData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGeoData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading GeoJSON:', error);
        setLoading(false);
      });
  }, []);

  return { geoData, loading };
}
