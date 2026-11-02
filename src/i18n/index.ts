import { ca, type Traduccions } from './ca';
import { en } from './en';
import { es } from './es';
import { IDIOMA_PER_DEFECTE, IDIOMES, type Idioma } from './rutes';

const traduccions: Record<Idioma, Traduccions> = { ca, es, en };

/** Textos d'un idioma. */
export function textos(idioma: Idioma): Traduccions {
  return traduccions[idioma];
}

/** Idioma actual a partir de `Astro.currentLocale`. */
export function idiomaActual(locale: string | undefined): Idioma {
  return (IDIOMES as readonly string[]).includes(locale ?? '') ? (locale as Idioma) : IDIOMA_PER_DEFECTE;
}

/** Substitueix `{clau}` pels valors donats. */
export function omple(text: string, valors: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (sencer, clau: string) => valors[clau] ?? sencer);
}

export type { Traduccions };
export * from './rutes';
