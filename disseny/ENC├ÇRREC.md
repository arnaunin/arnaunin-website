# Encàrrec: web personal d'Arnau Nin

Aquesta carpeta és el disseny aprovat de la web. És la referència visual i de textos: s'ha de reproduir fidelment.

## Fitxers del disseny

| Fitxer | Què és |
|---|---|
| `Main.html` | Pàgina d'inici, escriptori (1440 px) |
| `Main-Tauleta.html` / `Main-Mobil.html` | La mateixa pàgina a 834 px i 390 px |
| `Restaurants.html` | Pàgina de La Suite (sistema per a restaurants), escriptori |
| `Restaurants-Tauleta.html` / `Restaurants-Mobil.html` | La mateixa pàgina a tauleta i mòbil |
| `Estils.html` | Guia d'estils: colors, tipografies, components, espais i animacions |
| `img/` | Foto de l'Arnau i captures dels projectes |

Són maquetes exportades d'una eina de disseny (estils en línia, etiquetes `<x-dc>` i `<helmet>`). Es poden obrir al navegador per veure-les, però **no s'han de copiar tal qual**: s'han de reconstruir com a components nets. Les versions de tauleta i mòbil només existeixen per mostrar com s'ha d'adaptar; a la web real ha de ser **una sola pàgina responsive**.

## Pila i criteris

- **Astro** (sortida estàtica), CSS propi amb variables (sense Bootstrap ni Tailwind). JavaScript mínim: només el menú mòbil, el formulari i l'aparició de seccions en fer scroll.
- **Tokens**: tots els colors, tipografies, radis i ombres de `Estils.html` com a variables CSS en un sol fitxer.
- **Tipografies autoallotjades** (Fraunces, Figtree i Syne via `@fontsource`), no carregades des de Google, per privacitat (RGPD) i velocitat.
- **Imatges** optimitzades amb `astro:assets` (AVIF/WebP, mides adequades, `loading="lazy"` excepte al hero).
- **Rendiment**: objectiu Lighthouse ≥ 95 a les quatre categories, en mòbil.
- **Accessibilitat**: contrast AA, focus visible, objectius tàctils de 44 px, `prefers-reduced-motion` atura totes les animacions, menú mòbil accessible amb teclat.
- **Animacions**: reproduir les del disseny (onades, entrada del hero, cinta de paraules, avisos flotants, lluentor de "LA SUITE", targetes que s'aixequen). L'aparició en fer scroll ha de funcionar a tots els navegadors, Safari inclòs (IntersectionObserver).

## Idiomes

- Català (per defecte, a `/`), castellà (`/es/`) i anglès (`/en/`), amb el sistema i18n d'Astro.
- Textos en fitxers de traducció, no escrits dins dels components.
- Fer una primera traducció al castellà i a l'anglès dels textos catalans del disseny i marcar-la com a pendent de revisió.
- Selector d'idioma funcional, `hreflang` i `lang` correctes.

## Pàgines

1. **Inici** (`/`): hero general, cinta de serveis, secció destacada de LA SUITE, bloc "No tens un restaurant?", altres projectes, sobre mi + serveis, contacte.
2. **La Suite** (`/restaurants/`, `/es/restaurantes/`, `/en/restaurants/`): seguir el disseny `Restaurants.html`.
3. **Avís legal**, **Privacitat** i **Galetes**: pàgines amb text base pendent de revisar.
4. **404** amb el mateix estil.

## Elements que han de quedar preparats

- **Widget de reserves**: a l'hero de La Suite, deixar el contenidor `<div id="widget-reserves">` amb l'aspecte de "espai reservat" del disseny. Més endavant s'hi inserirà un widget extern (un web component).
- **Formulari de contacte**: amb Netlify Forms (nom, correu, missatge, casella de privacitat obligatòria, camp antispam ocult), missatge d'enviament correcte i validació accessible.
- **WhatsApp**: enllaç `https://wa.me/34620505353`.
- **Textos provisionals** (entre claudàtors al disseny): estudis, plans i preus, captures del sistema, cita del restaurant. Deixa'ls centralitzats i fàcils de trobar.
- El nom "La Suite" és provisional: ha d'estar definit en un sol lloc.

## SEO

- Títol i descripció per pàgina i idioma, Open Graph i imatge per compartir.
- `sitemap.xml`, `robots.txt` i URL canònica.
- Dades estructurades (schema.org): `Person` i `ProfessionalService` amb àrea de servei Calafell / Baix Penedès.
- Domini previst: `arnaunin.cat` (encara pendent de comprar).

## Desplegament

- Preparat per a Netlify (`netlify.toml`). Encara no està connectat; deixa documentat a `README.md` com es fa.

## Criteris d'acabament

- `pnpm build` passa sense errors ni avisos.
- La web es veu igual que el disseny a 1440, 834 i 390 px, sense scroll horitzontal.
- Els tres idiomes funcionen i el formulari està llest per a Netlify.
- Lighthouse en mòbil ≥ 95 a les quatre categories.
- Un `README.md` explica com arrencar-la, on canviar els textos i com publicar-la.
