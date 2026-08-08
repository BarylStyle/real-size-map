import { useState, useEffect } from 'react';

export function useCountryGeoJSON() {
  const [geoData, setGeoData] = useState<GeoJSON.FeatureCollection | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(setGeoData)
      .catch(error => {
        console.error('Error loading GeoJSON:', error);
      });
  }, []);

  return { geoData };
}
