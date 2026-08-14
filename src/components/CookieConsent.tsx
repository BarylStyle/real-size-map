// Deklaracja globalna window.gtag — zdefiniowane w index.html przed tagami Google.
// Banner zgody RODO pochodzi z panelu Google AdSense (certyfikowany CMP).
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export {};
