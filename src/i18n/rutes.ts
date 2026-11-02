/**
 * Idiomes i rutes de la web.
 *
 * Cada pàgina té una ruta per idioma. El selector d'idioma, els enllaços `hreflang`
 * i el sitemap surten d'aquest mapa: si afegeixes o reanomenes una pàgina,
 * fes-ho aquí i crea el fitxer corresponent a `src/pages/`.
 */

export const IDIOMES = ['ca', 'es', 'en'] as const;
export type Idioma = (typeof IDIOMES)[number];
export const IDIOMA_PER_DEFECTE: Idioma = 'ca';

export const rutes = {
  inici: { ca: '/', es: '/es/', en: '/en/' },
  suite: { ca: '/restaurants/', es: '/es/restaurantes/', en: '/en/restaurants/' },
  avisLegal: { ca: '/avis-legal/', es: '/es/aviso-legal/', en: '/en/legal-notice/' },
  privacitat: { ca: '/privacitat/', es: '/es/privacidad/', en: '/en/privacy/' },
  galetes: { ca: '/galetes/', es: '/es/cookies/', en: '/en/cookies/' },
} as const satisfies Record<string, Record<Idioma, string>>;

export type Pagina = keyof typeof rutes;

/** Ruta d'una pàgina en un idioma, amb una àncora opcional (`#contacte`). */
export function ruta(pagina: Pagina, idioma: Idioma, ancora?: string): string {
  return rutes[pagina][idioma] + (ancora ? `#${ancora}` : '');
}

/** Busca a quina pàgina correspon un camí (`/es/restaurantes/` → `suite`). */
export function paginaDelCami(cami: string): { pagina: Pagina; idioma: Idioma } | undefined {
  const normalitzat = cami.endsWith('/') ? cami : `${cami}/`;
  for (const [pagina, perIdioma] of Object.entries(rutes) as [Pagina, Record<Idioma, string>][]) {
    for (const idioma of IDIOMES) {
      if (perIdioma[idioma] === normalitzat) return { pagina, idioma };
    }
  }
  return undefined;
}

/** Codi d'idioma per a `og:locale`. */
export const LOCALE_OG: Record<Idioma, string> = { ca: 'ca_ES', es: 'es_ES', en: 'en_GB' };
