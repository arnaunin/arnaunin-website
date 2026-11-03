/**
 * Dades generals de la web. Si canvia el domini, el telèfon o el nom de La Suite,
 * només cal canviar-ho aquí.
 */

/**
 * URL base de la web: l'ÚNIC lloc on es defineix.
 * En surten la canònica, els `hreflang`, `og:url`, `og:image`, el sitemap, el `robots.txt`,
 * les dades estructurades i el domini que es veu a les imatges per compartir.
 * Quan tinguem `arnaunin.cat`, canvia només aquesta línia (i torna a generar les imatges).
 */
export const DOMINI = 'https://arnaunin.netlify.app';

export const NOM = 'Arnau Nin';

/**
 * Nom del sistema per a restaurants. És PROVISIONAL: quan es triï el definitiu,
 * canvia'l només aquí i s'actualitzarà a tota la web i en els tres idiomes.
 */
export const NOM_SUITE = 'La Suite';

export const TELEFON = '+34620505353';
export const TELEFON_VISIBLE = '620 505 353';
export const WHATSAPP = 'https://wa.me/34620505353';
export const CORREU = 'ninbsnss92@gmail.com';

export const POBLACIO = 'Calafell';
export const COMARCA = 'Baix Penedès';

/**
 * Pàgines legals (avís legal, privacitat i galetes).
 * Estan AMAGADES fins que tinguem les dades del titular (nom, NIF i adreça).
 * Amb `false`: no es generen, el peu no hi enllaça i el formulari no mostra la
 * casella de privacitat (en el seu lloc hi ha una línia informativa breu).
 * Per tornar-les a mostrar, posa `true`.
 */
export const MOSTRA_PAGINES_LEGALS = false;

/** Formulari de contacte de la portada (Netlify Forms). */
export const MOSTRA_FORMULARI = true;

/** Nom del formulari a Netlify Forms (és el que veuràs al tauler de Netlify). */
export const NOM_FORMULARI = 'contacte';
