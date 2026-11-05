/**
 * English texts.
 *
 * ⚠️ PENDENT DE REVISIÓ: primera traducció feta a partir del català.
 * Cal que una persona la revisi abans de publicar la web.
 */
import { CORREU, NOM, NOM_SUITE, POBLACIO, TELEFON_VISIBLE } from '../config/lloc';
import type { Traduccions } from './ca';

export const en: Traduccions = {
  provisional: {
    legal: '[Base text pending review]',
    titular: '[Full name]',
    nif: '[Tax ID pending]',
    domicili: `[Address pending], ${POBLACIO}`,
    conservacio: '[12 months]',
  },

  meta: {
    inici: {
      titol: `${NOM} · Web developer in ${POBLACIO}`,
      descripcio:
        'Fast websites and custom systems for businesses in the Baix Penedès. Restaurant bookings, online shops and local SEO, in Catalan, Spanish and English.',
    },
    suite: {
      titol: `${NOM_SUITE} · System for restaurants · ${NOM}`,
      descripcio:
        'Bookings from your website at any time, live service on the iPad, your menu and a takeaway shop. No per-diner fees.',
    },
    avisLegal: { titol: `Legal notice · ${NOM}`, descripcio: `Legal information about ${NOM}’s website.` },
    privacitat: {
      titol: `Privacy policy · ${NOM}`,
      descripcio: 'How the personal data you send me through this website is handled.',
    },
    galetes: { titol: `Cookie policy · ${NOM}`, descripcio: 'This website does not use tracking cookies.' },
    noTrobada: { titol: `Page not found · ${NOM}`, descripcio: 'This page does not exist.' },
  },

  comu: {
    saltaContingut: 'Skip to content',
    navegacio: 'Main',
    idioma: 'Language',
    obreMenu: 'Open menu',
    tancaMenu: 'Close menu',
    nav: {
      inici: 'Home',
      restaurants: 'Restaurants',
      projectes: 'Projects',
      sobreMi: 'About me',
      contacte: 'Contact',
    },
    parlem: 'Let’s talk',
    demanaDemo: 'Book a demo',
    peu: {
      drets: `${NOM} · ${POBLACIO}`,
      legal: 'Legal',
      avisLegal: 'Legal notice',
      privacitat: 'Privacy',
      galetes: 'Cookies',
    },
    obreNovaFinestra: '(opens in a new window)',
  },

  inici: {
    hero: {
      ubicacio: `Web developer · ${POBLACIO}`,
      titolAbans: 'Websites and tools that work for you, ',
      titolDestacat: 'not vice versa',
      titolDespres: '.',
      entradeta:
        'I’m Arnau. I design and build fast websites and custom systems so your business wins customers and wastes less time on repetitive tasks.',
      botoPrincipal: 'Let’s talk about your project',
      botoSecundari: 'See my work →',
      maqueta: {
        url: 'www.yourbusiness.com',
        velocitatHtml: 'Loading<br>speed',
        avisTitol: 'New customer from the website',
        avisText: '“I’d like to ask for a quote…”',
      },
    },
    cinta: [
      'Websites for businesses',
      'Custom systems',
      'Restaurant bookings',
      'Online shops',
      'Local SEO',
      'Català · Castellano · English',
    ],
    suite: {
      subtitol: 'Suite of apps for restaurants',
      insignia: 'Main project',
      titolHtml:
        'Bookings, floor, menu and shop in a single system. <em>Built by a restaurateur</em>, designed for your service.',
      entradeta:
        'Optimised to move fast in the middle of service and built by someone who has lived the business from the inside: someone who knows what happens when the dining room is full and the phone won’t stop.',
      panell: {
        titolHtml: 'Your restaurant, open even when you’re <em>closed</em>.',
        text: 'Bookings from your website at any time, live service on the iPad, your menu and a takeaway shop. All in one place and with no per-diner fees.',
        funcions: ['Bookings', 'Floor plan', 'Reminders', 'Digital menu', 'Takeaway shop'],
        botoPrincipal: 'Discover the system →',
        botoSecundari: 'Book a demo',
      },
      cita: {
        text: '“I built the system I wish I’d had when I was waiting tables: your whole restaurant in one place, on the iPad.”',
        detall: 'It already runs every service at my family’s restaurant.',
      },
    },
    noRestaurant: {
      titol: 'Not a restaurant? I can help you too.',
      text: 'Websites that bring in customers and custom systems for any business: appointments, orders, inventory or whatever you need.',
      boto: 'Tell me about your case →',
    },
    projectes: {
      eyebrow: 'Other projects',
      titol: 'Work done, close to home.',
      visita: 'Visit the website',
      perPublicar: 'New website · going live soon',
      llista: [
        {
          id: 'barca',
          categoria: `Restaurant · ${POBLACIO}`,
          nom: 'La Barca de Ca l’Ardet',
          text: 'Website, takeaway shop and online bookings for a beach restaurant.',
          alt: 'Home page of the La Barca de Ca l’Ardet website',
          url: 'https://labarcadecalardet.com',
          /** La web nova encara no és al domini: es mostra «es publica aviat» en lloc de l’enllaç. */
          publicada: false,
        },
        {
          id: 'forum',
          categoria: `Business association · ${POBLACIO}`,
          nom: 'Fòrum Calafell',
          text: 'Website for the association that brings together more than 180 shops, restaurants and services: member directory, campaigns, news and a members’ area.',
          alt: 'Home page of the Fòrum Calafell website',
          url: 'https://forumcalafell.com',
          publicada: true,
        },
      ],
    },
    sobreMi: {
      eyebrow: 'About me',
      altFoto: NOM,
      titol: 'I’m Arnau. I turn business ideas into tools that work.',
      paragrafs: [
        `I’m a web developer and I live in ${POBLACIO}. I like to understand how each business works first and then build exactly what it needs: no generic templates or features you’ll never use.`,
        'I leave it up and running, I show you how to use it and, if you need anything, I’m just a WhatsApp away. In Catalan, Spanish or English.',
      ],
      dades: {
        estudis: 'Education',
        estudisValor: 'Master’s in full-stack web development',
        idiomes: 'Languages',
        idiomesValor: 'Català · Castellano · English',
      },
      serveisEyebrow: 'What I can do for you',
      serveis: [
        { icona: 'web', titol: 'Websites for businesses', text: 'Fast, easy to find on Google and in several languages.' },
        { icona: 'eina', titol: 'Custom systems', text: 'Bookings, orders, appointments or internal management, adapted to how you work.' },
        { icona: 'bossa', titol: 'Online shops', text: 'Takeaway orders or online sales, with no platform fees.' },
        { icona: 'escut', titol: 'Maintenance and support', text: 'Updates, changes and a person who answers when you need them.' },
      ],
    },
    contacte: {
      titol: 'Let’s talk about your business.',
      text: 'Tell me what you need and I’ll tell you how I can help. No strings attached.',
      whatsapp: 'Message me on WhatsApp',
      telefon: TELEFON_VISIBLE,
      correu: CORREU,
    },
    formulari: {
      etiqueta: 'Contact form',
      titol: 'Or send me a message',
      nom: 'Name',
      correu: 'Email',
      missatge: 'What do you need?',
      privacitatAbans: 'I have read and accept the ',
      privacitatEnllac: 'privacy policy',
      privacitatDespres: '.',
      avisDades: 'I’ll only use your details to reply to you. I don’t share them with anyone.',
      parany: 'Don’t fill in this field if you are a person',
      envia: 'Send',
      enviant: 'Sending…',
      errors: {
        nom: 'Please enter your name.',
        correu: 'Please enter a valid email address.',
        missatge: 'Tell me briefly what you need.',
        privacitat: 'You need to accept the privacy policy.',
        resum: 'Please check the highlighted fields.',
      },
      enviat: 'Thank you! I’ve received your message and will get back to you soon.',
      errorEnviament: 'The message could not be sent. Please try again or message me on WhatsApp.',
    },
  },

  suite: {
    hero: {
      subtitol: 'Suite of apps for restaurants',
      titolHtml: 'Your restaurant, open even when you’re <em>closed</em>.',
      entradeta:
        'Website and phone bookings in one place, and service under control from the iPad. No per-diner fees.',
      botoPrincipal: 'Book a demo',
      botoSecundari: 'Why I built it',
      resum: {
        titol: 'Your whole restaurant in one place, on the iPad.',
        punts: [
          'Website and phone bookings',
          'Live floor plan',
          'Email reminders',
          'Menu and takeaway shop',
        ],
      },
    },
    perQue: {
      eyebrow: 'Why I built it',
      titol: 'I come from a family of restaurateurs. I know the headaches from the dining room.',
      paragrafs: [
        `I grew up in my family’s restaurant in ${POBLACIO}, and worked there for years while I was studying. I’ve waited tables, answered the phone in the middle of service and juggled bookings in a notebook full of crossings-out.`,
        'When I started programming, the first thing I wanted to solve was these problems. This system wasn’t dreamed up in an office: it was built and tested in a real restaurant, service after service. It already runs every service at my family’s restaurant.',
      ],
      etSona: 'Sound familiar?',
      mals: [
        'The phone ringing just as ten plates go out.',
        'The notebook where nobody can read anyone else’s handwriting.',
        'A table of six that doesn’t show up on a Saturday.',
        '“Where did we put that group?”',
        'Paying fees for every customer who would have come anyway.',
      ],
    },
    queCanvia: {
      eyebrow: 'What changes',
      titol: 'Goodbye to the notebook and to “where did we put them?”.',
      fitxes: [
        {
          icona: 'rellotge',
          titol: 'Bookings at any time',
          text: 'Customers book from your website, even when the restaurant is closed. You don’t pick up the phone.',
        },
        {
          icona: 'sala',
          titol: 'Live service',
          text: 'Floor plan, arrivals, delays and free tables on the iPad or your phone, in real time.',
        },
        {
          icona: 'campana',
          titol: 'Fewer no-shows',
          text: 'Confirmation and reminder by email, with a link so customers can cancel.',
        },
        {
          icona: 'persones',
          titol: 'Know your customers',
          text: 'Visits, allergies and preferences for each customer. The data is yours, not a platform’s.',
        },
      ],
    },
    perDins: {
      eyebrow: 'In the middle of service',
      titol: 'The whole dining room at a glance.',
      text: 'Built for the busiest moments: when the room is full, the phone is ringing and there’s no time to look anything up in a notebook.',
      moments: [
        { titol: 'A customer arrives', text: 'You tap the table and that’s it. The whole team sees it instantly, on the iPad at the bar or on their phone.' },
        { titol: 'Someone calls to book', text: 'You add it in the same place as the website bookings. One list, no notebook.' },
        { titol: 'Someone can’t make it', text: 'They got the email reminder, cancelled with the link, and the table is free again.' },
      ],
      demo: 'Want to see it from the inside? I’ll give you a 15‑minute demo or send you a video.',
      enllac: 'Book it',
    },
    comFunciona: {
      eyebrow: 'How it works',
      titol: 'I set it up, so you don’t have to do a thing.',
      passos: [
        { titol: 'A visit to the restaurant', text: 'We look at how you work: rooms, tables, shifts and how bookings come in.' },
        { titol: 'Tailored setup', text: 'The floor plan, opening hours and booking rules, just the way you work.' },
        {
          titol: 'On your website',
          text: 'The booking form on your website, whatever it is. And if you don’t have one, I’ll build it.',
        },
        {
          titol: 'Training and support',
          text: 'An afternoon with the team, and the first month by your side to fine-tune whatever is needed.',
        },
      ],
    },
    moduls: {
      eyebrow: 'Modules',
      titol: 'Start with bookings and add only what you need.',
      llista: [
        { etiqueta: 'The core', titol: 'Bookings and floor plan', text: 'Website and phone bookings in one place, and the whole dining room live on the iPad.' },
        { etiqueta: '', titol: 'Menu on your website', text: 'Your menu on your website, easy to read on a phone.' },
        { etiqueta: 'Extra', titol: 'Takeaway shop', text: 'Takeaway orders from your website: one more sales channel, with no platform fees.' },
        { etiqueta: 'Made to measure', titol: 'New SEO-optimised website', text: 'If you don’t have one or want a new one, a made-to-measure website, fast and ready for local SEO.' },
      ],
      properament: {
        etiqueta: 'Coming soon',
        llista: [
          { titol: 'End-of-service checklist', text: 'A list of what the team needs to do before closing, so nothing is left undone.' },
          { titol: 'Staff clock-in', text: 'A record of the team’s hours.' },
          { titol: 'Orders during service', text: 'Paperless table orders.' },
        ],
      },
      condicions: 'The first 3 restaurants: launch terms and setup included. I’ll tell you the terms in the demo, no strings attached.',
      boto: 'Book a 15-minute demo',
    },
    crida: {
      titol: 'Want to see how it would work in your restaurant?',
      text: 'I’ll give you a fifteen-minute demo, at your restaurant or online. From one restaurateur to another.',
      whatsapp: 'Book a demo on WhatsApp',
      correu: 'Send me an email',
      assumpteCorreu: `${NOM_SUITE} demo`,
    },
  },

  noTrobada: {
    eyebrow: 'Error 404',
    titolHtml: 'This page has gone <em>missing</em>.',
    text: 'Maybe the link is old or there’s a typo in the address. Go back to the home page or message me if you were looking for something specific.',
    inici: 'Back to the home page',
    contacte: 'Message me on WhatsApp',
  },

  legal: {
    actualitzat: 'Last updated: November 2026',
    avisLegal: {
      titol: 'Legal notice',
      seccions: [
        {
          titol: 'Website owner',
          paragrafsHtml: [
            'In accordance with Spanish Law 34/2002 on information society services and e-commerce (LSSI), here are the details of the owner of this website:',
            `<strong>Owner:</strong> {titular}<br><strong>Tax ID (NIF):</strong> {nif}<br><strong>Address:</strong> {domicili}<br><strong>Email:</strong> <a href="mailto:${CORREU}">${CORREU}</a><br><strong>Phone:</strong> ${TELEFON_VISIBLE}<br><strong>Activity:</strong> design and development of websites and applications.`,
          ],
        },
        {
          titol: 'Terms of use',
          paragrafsHtml: [
            'Access to this website is free and implies acceptance of these terms. You agree to use it properly, in accordance with the law and in good faith.',
          ],
        },
        {
          titol: 'Intellectual property',
          paragrafsHtml: [
            'The texts, design, code and images on this website belong to the owner or are used with permission. Project screenshots are shown with the consent of the clients concerned. They may not be reproduced without prior authorisation.',
          ],
        },
        {
          titol: 'Liability and links',
          paragrafsHtml: [
            'I try to keep the information accurate and up to date, but I cannot guarantee that it is free of errors. This website contains links to third-party websites; I am not responsible for their content or policies.',
          ],
        },
        {
          titol: 'Applicable law',
          paragrafsHtml: ['These terms are governed by Spanish law.'],
        },
      ],
    },
    privacitat: {
      titol: 'Privacy policy',
      seccions: [
        {
          titol: 'Data controller',
          paragrafsHtml: [
            `{titular}, tax ID {nif}, address {domicili}. Contact: <a href="mailto:${CORREU}">${CORREU}</a>.`,
          ],
        },
        {
          titol: 'What data I process and why',
          paragrafsHtml: [
            'If you write to me through the contact form, I process your name, your email address and your message, only to answer your enquiry and, if you ask, to prepare a quote.',
            'If you contact me by WhatsApp, phone or email, I process the data you give me, for the same purpose.',
          ],
        },
        {
          titol: 'Legal basis',
          paragrafsHtml: [
            'Your consent, given by ticking the box on the form (Article 6(1)(a) GDPR), and taking steps at your request before entering into a contract (Article 6(1)(b) GDPR).',
          ],
        },
        {
          titol: 'How long I keep it',
          paragrafsHtml: [
            'For as long as needed to reply. If no business relationship follows, I delete it after {conservacio}. If one does, I keep it for as long as it lasts and for the periods required by law.',
          ],
        },
        {
          titol: 'Who else has access',
          paragrafsHtml: [
            'I do not share your data with anyone. The website is hosted by Netlify, Inc., which receives form messages as a data processor. Netlify is based in the United States; the transfer is made with the safeguards provided for in the GDPR (European Commission standard contractual clauses).',
          ],
        },
        {
          titol: 'Your rights',
          paragrafsHtml: [
            `You can request access to, rectification or erasure of your data, object to or restrict its processing, ask for data portability, and withdraw your consent at any time by writing to <a href="mailto:${CORREU}">${CORREU}</a>.`,
            'If you believe your rights have not been respected, you can lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es">www.aepd.es</a>).',
          ],
        },
      ],
    },
    galetes: {
      titol: 'Cookie policy',
      seccions: [
        {
          titol: 'This website does not use cookies',
          paragrafsHtml: [
            'There are no analytics, advertising or social media cookies, and your visit is not tracked. That’s why you are not asked for consent when you arrive.',
            'Fonts and images are hosted on this website itself: nothing is loaded from Google or other external services while you browse.',
          ],
        },
        {
          titol: 'Links to other websites',
          paragrafsHtml: [
            'If you open an external link (for example, WhatsApp or the project websites), those websites have their own cookie policies.',
          ],
        },
        {
          titol: 'Changes',
          paragrafsHtml: [
            'If a tool that uses non-essential cookies is ever added, this page will be updated and you will be asked for consent before it is switched on.',
          ],
        },
      ],
    },
  },
};
