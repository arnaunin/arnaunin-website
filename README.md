# arnaunin-website

Web personal d'Arnau Nin: portada amb els serveis i els projectes, i la pàgina de **La Suite** (sistema per a restaurants). Feta amb [Astro](https://astro.build) (sortida estàtica), CSS propi i JavaScript mínim.

- **Idiomes:** català (per defecte, a `/`), castellà (`/es/`) i anglès (`/en/`).
- **Disseny aprovat:** a la carpeta [`disseny/`](disseny/) (maquetes i encàrrec). És la referència; la web no en fa servir cap fitxer.
- **Adreça actual:** <https://arnaunin.netlify.app>. **Domini previst:** `arnaunin.cat` (encara pendent de comprar).

## Arrencar-la en local

Cal **Node.js 22.23.4 o superior** i **pnpm 10** (`corepack enable` l'activa).

```bash
pnpm install
pnpm dev
```

S'obre a <http://localhost:4321>. Els canvis es veuen a l'instant.

Per comprovar la versió final, tal com es publicarà:

```bash
pnpm build     # comprova els tipus i compila a dist/
pnpm preview   # serveix dist/ a http://localhost:4321
```

`pnpm build` falla si hi ha errors de tipus; per exemple, si a una traducció li falta un text.

## On es canvia cada cosa

| Què | On |
|---|---|
| **Textos** en català | [`src/i18n/ca.ts`](src/i18n/ca.ts) |
| Textos en castellà i anglès | [`src/i18n/es.ts`](src/i18n/es.ts), [`src/i18n/en.ts`](src/i18n/en.ts) |
| **Textos provisionals** (els que eren entre claudàtors al disseny) | Bloc `provisional`, al principi de cada fitxer de textos |
| **Nom de La Suite** (provisional) | `NOM_SUITE` a [`src/config/lloc.ts`](src/config/lloc.ts) |
| Domini, telèfon, WhatsApp, correu, població | [`src/config/lloc.ts`](src/config/lloc.ts) |
| Adreça (slug) de cada pàgina i idioma | [`src/i18n/rutes.ts`](src/i18n/rutes.ts) |
| Colors, tipografies, radis, ombres i espais | [`src/styles/tokens.css`](src/styles/tokens.css) (l'únic fitxer amb colors) |
| Estils comuns (botons, títols, animacions) | [`src/styles/global.css`](src/styles/global.css) |
| Fotos i captures | [`src/assets/img/`](src/assets/img/) (Astro les converteix a AVIF/WebP) |
| Imatges per compartir i icona d'iPhone | `public/og/` i `public/apple-touch-icon.png` (vegeu més avall) |

Les claus dels textos que acaben en `Html` poden portar etiquetes (`<em>` per a la paraula destacada en cursiva).

### Estructura

```
src/
  config/       Dades generals (lloc.ts) i dades estructurades de schema.org
  i18n/         Textos (ca, es, en) i mapa de rutes
  styles/       Tokens i estils globals
  components/
    comu/       Capçalera, peu, icones, onades, avisos flotants, marca de La Suite…
    inici/      Seccions de la portada (hero, cinta, La Suite, projectes, sobre mi, contacte)
    suite/      Seccions de la pàgina de La Suite
  vistes/       Pàgines completes, comunes als tres idiomes
  pages/        Una línia per pàgina i idioma (només trien la vista)
  scripts/      Aparició de les seccions en fer scroll
scripts/        Generador de les imatges per compartir
disseny/        Disseny aprovat (referència)
```

### Afegir o reanomenar una pàgina

1. Afegeix-la al mapa de [`src/i18n/rutes.ts`](src/i18n/rutes.ts) amb l'adreça de cada idioma.
2. Crea els tres fitxers a `src/pages/` (`/`, `/es/`, `/en/`).

El selector d'idioma, els `hreflang` i el sitemap s'actualitzen sols.

## Elements preparats per més endavant

- **Widget de reserves:** a la pàgina de La Suite hi ha `<div id="widget-reserves">` amb una **vista prèvia estàtica** del formulari, marcada com a «Vista prèvia» ([`src/components/suite/Hero.astro`](src/components/suite/Hero.astro)). Quan el widget real estigui llest, se substitueix el contingut del `div` per l’etiqueta del web component i el seu `<script>`.
- **Imatges per compartir:** són PNG estàtics. Si canvia el text del hero o el domini, torna-les a generar:

  ```bash
  npm install -g playwright && npx playwright install chromium
  ```

  ```bash
  NODE_PATH="$(npm root -g)" node scripts/genera-imatges.mjs
  ```

## Formulari de contacte (Netlify Forms)

El formulari de la portada ja està preparat per a Netlify Forms: nom, correu, missatge, casella de privacitat obligatòria i un camp antispam ocult (`bot-field`). Amb JavaScript es valida de manera accessible i s'envia sense sortir de la pàgina; sense JavaScript, funciona igual i Netlify mostra la seva pàgina de confirmació.

En local no s'envia res (no hi ha Netlify), i el formulari mostra el missatge d'error. Un cop publicada:

1. Al tauler de Netlify, **Forms** → activa la detecció de formularis (*Enable form detection*) i torna a publicar.
2. Hi apareixerà el formulari **«contacte»** amb els missatges rebuts. Cada missatge porta el camp `idioma`.
3. Per rebre'ls per correu: **Forms** → **Form notifications** → *Add notification* → *Email notification*.

## Publicar-la a Netlify

Encara no està connectada. La configuració ja és a [`netlify.toml`](netlify.toml) (ordre de compilació, carpeta `dist`, versió de Node, 404 per idioma i capçaleres de seguretat).

1. A [app.netlify.com](https://app.netlify.com): **Add new site** → **Import an existing project** → GitHub → tria `arnaunin/arnaunin-website`.
2. Netlify llegeix `netlify.toml`; no cal canviar res. Branca de producció: `main`.
3. **Deploy**. En un parell de minuts tindràs la web a una adreça `*.netlify.app`.
4. Activa Netlify Forms (apartat anterior).
5. Quan compris `arnaunin.cat`: **Domain management** → **Add a domain** i segueix les instruccions de DNS. Netlify hi posa el certificat HTTPS sol.

Quan canviï el domini (per exemple, a `arnaunin.cat`), canvia només `DOMINI` a [`src/config/lloc.ts`](src/config/lloc.ts): la canònica, els `hreflang`, Open Graph, el sitemap, el `robots.txt` i les dades estructurades en depenen. Després torna a generar les imatges per compartir, que també hi mostren el domini.

## Pendent

- **Textos provisionals:** estudis, captures reals del sistema, plans i preus (bloc `provisional` dels fitxers de textos).
- **Textos legals:** són una base i s'han de revisar. Hi falten el nom complet, el NIF i l'adreça (també al bloc `provisional`), i cal confirmar el termini de conservació de les dades.
- **Traduccions al castellà i a l'anglès:** primera versió, pendent de revisió per una persona.
- Nom definitiu de La Suite i compra del domini.

## Criteris tècnics

- Tipografies Fraunces, Figtree i Syne **autoallotjades** amb `@fontsource` (res de Google en temps d'execució).
- La web **no fa servir galetes** ni analítica.
- Accessibilitat: contrast AA, focus visible, objectius tàctils de 44 px, menú mòbil amb teclat (Escape el tanca) i «reduir moviment» atura totes les animacions.
- L'aparició en fer scroll usa `IntersectionObserver` (funciona a Safari). Sense JavaScript, tot es veu.
