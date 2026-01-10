// plik: utils/projectionCorrection.ts

export function calculateScaleFactor(latitude: number): number {
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
  baseScale: number = 1
): number {
  const originalFactor = calculateScaleFactor(originalLat);
  const newFactor = calculateScaleFactor(newLat);

  // **** OSTATECZNA POPRAWKA FORMULY SKALOWANIA ****
  // Aby kraj zmniejszał się bliżej równika i powiększał bliżej biegunów,
  // musimy pomnożyć przez stosunek newFactor do originalFactor.
  // Dzięki temu, jeśli newFactor jest mniejszy (bliżej równika), skala się zmniejsza.
  // Jeśli newFactor jest większy (bliżej biegunów), skala się zwiększa.
  return (baseScale * newFactor) / originalFactor;
}
