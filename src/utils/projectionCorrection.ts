function calculateScaleFactor(latitude: number): number {
  const lat = Math.abs(latitude);
  const radLat = (lat * Math.PI) / 180;
  const cosLat = Math.cos(radLat);
  if (cosLat < 1e-9) {
    return 1e9; // Zapobiegaj dzieleniu przez zero blisko biegunów
  }
  return 1 / cosLat;
}

/**
 * Oblicza poprawny współczynnik skalowania potrzebny do kompensacji zniekształceń
 * mapy Merkatora, aby zachować wrażenie "prawdziwego rozmiaru".
 */
export function getTrueSizeScale(
  originalLat: number,
  newLat: number,
  baseScale: number
): number {
  // Kraj kurczy się bliżej równika i rośnie bliżej biegunów, więc skalujemy
  // stosunkiem współczynnika w nowej pozycji do współczynnika w pozycji źródłowej.
  return (baseScale * calculateScaleFactor(newLat)) / calculateScaleFactor(originalLat);
}
