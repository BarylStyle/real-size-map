# Audyt Google AdSense - Problemy i Rozwiązania

## 🔴 KRYTYCZNE PROBLEMY

### 1. **robots.txt - ZŁY SITEMAP URL**
**Problem:** 
```
Sitemap: https://barylstyle.github.io/real-size-map/sitemap.xml
```
- Wskazuje na GitHub Pages, nie na rzeczywistyrozmiar.pl
- Google nie będzie indeksować właściwej domeny
- Boty szukają sitemap.xml na domenie docelowej

**Rozwiązanie:** Zmienić na:
```
Sitemap: https://www.rzeczywistyrozmiar.pl/sitemap.xml
```

---

### 2. **BRAK ads.txt**
**Problem:**
- Google AdSense wymaga pliku `ads.txt` w folderze public/
- Brak tego pliku to sygnał, że strona może być nielegalna/podejrzana
- Boty mogą traktować stronę jako nieautoryzowaną do wyświetlania reklam

**Rozwiązanie:** Stworzyć `public/ads.txt` z linią:
```
google.com, ca-pub-2385213603522792, DIRECT, f08c47fec0942fa0
```

---

### 3. **Canonical URL ma "www" ale strona działa bez "www"**
**Problem:**
```html
<link rel="canonical" href="https://www.rzeczywistyrozmiar.pl" />
```
- Strona działa na `rzeczywistyrozmiar.pl` (bez www)
- Canonical wskazuje na `www.rzeczywistyrozmiar.pl`
- To duplikacja treści z perspektywy Google

**Rozwiązanie:** Usunąć `www` z canonical:
```html
<link rel="canonical" href="https://rzeczywistyrozmiar.pl" />
```

---

### 4. **og:url i og:image wskazują na favicon.svg**
**Problem:**
```html
<meta property="og:image" content="/favicon.svg" />
<meta property="og:url" content="https://www.rzeczywistyrozmiar.pl" />
```
- og:image powinien być obrazek opengraph (1200x630px)
- favicon.svg nie spełnia wymogów i uniemożliwia preview na mediach społecznych
- Jest `og-image.svg` w public/, ale się go nie używa

**Rozwiązanie:** Dodać prawidłowy og:image:
```html
<meta property="og:image" content="/og-image.svg" />
```

---

### 5. **robots.txt - Brak User-agent dla specificznych botów**
**Problem:**
```
User-agent: *
Allow: /
```
- Bardzo minimalistyczne
- Brak info o crawl delay
- Google chciałby być pewny, że się go zapraszasz

**Rozwiązanie:** Rozszerzyć robots.txt:
```
User-agent: Googlebot
Disallow:

User-agent: *
Allow: /

Sitemap: https://rzeczywistyrozmiar.pl/sitemap.xml
```

---

## 🟡 ISTOTNE PROBLEMY

### 6. **Lang atrybut w HTML - "en" zamiast "pl"**
**Problem:**
```html
<html lang="en">
```
- Strona jest całkowicie po polsku
- Google widzi, że to angielska strona
- Może wpłynąć na indeksowanie i reklamy

**Rozwiązanie:** Zmienić na:
```html
<html lang="pl">
```

---

### 7. **Title w index.html - Angielski+ Polski MIX**
**Problem:**
```html
<title>True Size Map | Porównaj Prawdziwy Rozmiar Państw</title>
```
- Namieszanie języków
- Dla polskiego AdSense powinno być głównie po polsku

**Rozwiązanie:** Zmienić na:
```html
<title>Rzeczywisty Rozmiar Krajów - Interaktywna Mapa | Porównanie Wielkości Państw</title>
```

---

### 8. **og:title i twitter:title - Nieznajomy prefix "The True Size"**
**Problem:**
```html
<meta property="og:title" content="The True Size Map | Porównaj Prawdziwy Rozmiar Państw" />
```
- Duplikacja tytułu (jest już w `<title>`)
- "The True Size Map" dla polskiego Content nie ma sensu

**Rozwiązanie:** Zsynchronizować z głównym tytułem:
```html
<meta property="og:title" content="Rzeczywisty Rozmiar Krajów - Porównaj Wielkości Państw" />
```

---

### 9. **Brak hreflang dla różnych wersji jezykowych**
**Problem:**
- Strona istnieje na dwóch domenach: GitHub Pages + Vercel
- Brak hreflang tagów
- Google może indeksować duplikaty

**Rozwiązanie:** Dodać w `<head>`:
```html
<link rel="alternate" hreflang="en" href="https://rzeczywistyrozmiar.pl" />
<link rel="alternate" hreflang="pl" href="https://rzeczywistyrozmiar.pl" />
<link rel="alternate" hreflang="x-default" href="https://rzeczywistyrozmiar.pl" />
```

---

### 10. **Structured Data - aggregateRating to INVENTION**
**Problem:**
```json
"aggregateRating": {
  "ratingValue": "4.8",
  "ratingCount": "150"
}
```
- Google znać, że to fikcyjne dane
- Raczej bierze dane z rzeczywistych opinii (Google Reviews, itd)
- Może to być flagowane jako spam

**Rozwiązanie:** Usunąć aggregateRating

---

## 🟢 DO SPRAWDZENIA

### 11. **Vercel vs GitHub Pages Base Path**
Status: ✅ Dobrze - dynamiczne:
```typescript
base: process.env.GITHUB_ACTIONS ? '/real-size-map/' : '/'
```

### 12. **Google Analytics**
Status: ✅ Dodane warunkowo (na cookie consent)

### 13. **Privacy Policy**
Status: ✅ Istnieje pod /privacy-policy

### 14. **Cookie Consent**
Status: ✅ vanilla-cookieconsent

### 15. **Zawartość (About Section)**
Status: ✅ ~1200 słów polskiej treści

---

## PODSUMOWANIE ZADAŃ

| Priorytet | Zadanie | Status |
|-----------|---------|--------|
| 🔴 P0 | Utworzyć public/ads.txt | ❌ TODO |
| 🔴 P0 | Naprawić robots.txt sitemap | ❌ TODO |
| 🔴 P0 | Zmienić canonical bez www | ❌ TODO |
| 🟡 P1 | Naprawić og:image | ❌ TODO |
| 🟡 P1 | Zmienić lang na pl | ❌ TODO |
| 🟡 P1 | Polskojęzyczne title/og:title | ❌ TODO |
| 🟡 P1 | Usunąć fake aggregateRating | ❌ TODO |
| 🟡 P2 | Rozszerzyć robots.txt | ⏳ OPTIONAL |
| 🟡 P2 | Dodać hreflang | ⏳ OPTIONAL |

---

## SZYBKI CHECKLIST

- [ ] ads.txt created
- [ ] robots.txt updated
- [ ] Canonical fixed
- [ ] og:image fixed
- [ ] lang="pl" set
- [ ] Titles polished
- [ ] aggregateRating removed
- [ ] Tested on rzeczywistyrozmiar.pl
- [ ] Resubmitted to Google AdSense
