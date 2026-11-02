/**
 * Dades estructurades (schema.org) de la pàgina d'inici: Person i ProfessionalService.
 */
import { COMARCA, CORREU, DOMINI, NOM, POBLACIO, TELEFON } from './lloc';
import { rutes, type Idioma } from '../i18n/rutes';
import type { Traduccions } from '../i18n/ca';

export function dadesEstructurades(idioma: Idioma, t: Traduccions, imatge: string) {
  const url = new URL(rutes.inici[idioma], DOMINI).href;
  const persona = `${DOMINI}/#persona`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': persona,
        name: NOM,
        jobTitle: t.inici.hero.ubicacio.split(' · ')[0],
        url,
        image: imatge,
        email: `mailto:${CORREU}`,
        telephone: TELEFON,
        address: { '@type': 'PostalAddress', addressLocality: POBLACIO, addressRegion: 'Tarragona', addressCountry: 'ES' },
        knowsLanguage: ['ca', 'es', 'en'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${DOMINI}/#servei`,
        name: NOM,
        description: t.meta.inici.descripcio,
        url,
        image: imatge,
        email: CORREU,
        telephone: TELEFON,
        founder: { '@id': persona },
        address: { '@type': 'PostalAddress', addressLocality: POBLACIO, addressRegion: 'Tarragona', addressCountry: 'ES' },
        areaServed: [
          { '@type': 'City', name: POBLACIO },
          { '@type': 'AdministrativeArea', name: COMARCA },
        ],
        availableLanguage: ['ca', 'es', 'en'],
        knowsAbout: t.inici.cinta.slice(0, 5),
      },
    ],
  };
}
