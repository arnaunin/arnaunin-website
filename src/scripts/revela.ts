/**
 * Aparició de les seccions en fer scroll.
 * Funciona a tots els navegadors (Safari inclòs) amb IntersectionObserver.
 * Si el navegador no en té, o l'usuari demana reduir el moviment, es mostra tot.
 */
const elements = document.querySelectorAll<HTMLElement>('.revela');
const reduir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduir || !('IntersectionObserver' in window)) {
  elements.forEach((el) => el.classList.add('visible'));
} else {
  const observador = new IntersectionObserver(
    (entrades) => {
      for (const entrada of entrades) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  elements.forEach((el) => observador.observe(el));
}
