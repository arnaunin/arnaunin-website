import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { DOMINI } from './src/config/lloc';
import { IDIOMES, paginaDelCami, rutes } from './src/i18n/rutes';

export default defineConfig({
  site: DOMINI,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    locales: [...IDIOMES],
    defaultLocale: 'ca',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Les 404 no han de sortir al sitemap.
      filter: (pagina) => !/\/404\/?$/.test(new URL(pagina).pathname),
      // Les rutes estan traduïdes (restaurants / restaurantes), així que els
      // enllaços entre idiomes es calculen amb el mapa de rutes.
      serialize(element) {
        const trobada = paginaDelCami(new URL(element.url).pathname);
        if (trobada) {
          element.links = IDIOMES.map((idioma) => ({
            lang: idioma,
            url: new URL(rutes[trobada.pagina][idioma], DOMINI).href,
          }));
        }
        return element;
      },
    }),
  ],
});
