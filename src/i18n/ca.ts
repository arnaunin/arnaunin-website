/**
 * Textos en català (idioma per defecte). Són els textos aprovats del disseny.
 *
 * - Les claus acabades en `Html` poden portar etiquetes (`<em>`, `<a>`, `<strong>`).
 * - `es.ts` i `en.ts` han de tenir exactament les mateixes claus: si en falta
 *   alguna, `pnpm build` falla.
 * - El nom de La Suite surt de `src/config/lloc.ts` (NOM_SUITE).
 */
import { CORREU, NOM, NOM_SUITE, POBLACIO, TELEFON_VISIBLE } from '../config/lloc';

export const ca = {
  /**
   * TEXTOS PROVISIONALS (entre claudàtors al disseny).
   * Tots els textos pendents de la web són aquí, en aquest bloc.
   */
  provisional: {
    estudis: '[Els teus estudis]',
    legal: '[Text base pendent de revisió]',
    titular: '[Nom i cognoms complets]',
    nif: '[NIF pendent]',
    domicili: `[Adreça pendent], ${POBLACIO}`,
    conservacio: '[12 mesos]',
  },

  meta: {
    inici: {
      titol: `${NOM} · Desenvolupador web a ${POBLACIO}`,
      descripcio:
        'Webs ràpides i sistemes a mida per a negocis del Baix Penedès. Reserves per a restaurants, botigues en línia i SEO local, en català, castellà i anglès.',
    },
    suite: {
      titol: `${NOM_SUITE} · Sistema per a restaurants · ${NOM}`,
      descripcio:
        'Reserves des de la teva web a qualsevol hora, el servei en directe a l’iPad, la carta i la botiga per emportar. Sense comissions per comensal.',
    },
    avisLegal: { titol: `Avís legal · ${NOM}`, descripcio: `Informació legal del lloc web de ${NOM}.` },
    privacitat: {
      titol: `Política de privacitat · ${NOM}`,
      descripcio: 'Com es tracten les dades personals que m’envies a través d’aquesta web.',
    },
    galetes: { titol: `Política de galetes · ${NOM}`, descripcio: 'Aquesta web no fa servir galetes de seguiment.' },
    noTrobada: { titol: `Pàgina no trobada · ${NOM}`, descripcio: 'Aquesta pàgina no existeix.' },
  },

  comu: {
    saltaContingut: 'Salta al contingut',
    navegacio: 'Principal',
    idioma: 'Idioma',
    obreMenu: 'Obre el menú',
    tancaMenu: 'Tanca el menú',
    nav: {
      inici: 'Inici',
      restaurants: 'Restaurants',
      projectes: 'Projectes',
      sobreMi: 'Sobre mi',
      contacte: 'Contacte',
    },
    parlem: 'Parlem',
    demanaDemo: 'Demana una demo',
    peu: {
      drets: `${NOM} · ${POBLACIO}`,
      legal: 'Textos legals',
      avisLegal: 'Avís legal',
      privacitat: 'Privacitat',
      galetes: 'Galetes',
    },
    obreNovaFinestra: '(s’obre en una finestra nova)',
  },

  inici: {
    hero: {
      ubicacio: `Desenvolupador web · ${POBLACIO}`,
      titolAbans: 'Webs i eines que treballen per tu, ',
      titolDestacat: 'no al revés',
      titolDespres: '.',
      entradeta:
        'Sóc l’Arnau. Dissenyo i programo webs ràpides i sistemes a mida perquè el teu negoci guanyi clients i perdi menys temps en feines repetitives.',
      botoPrincipal: 'Parlem del teu projecte',
      botoSecundari: 'Mira la feina feta →',
      maqueta: {
        url: 'www.elteunegoci.cat',
        velocitatHtml: 'Velocitat<br>de càrrega',
        avisTitol: 'Nou client des de la web',
        avisText: '«Voldria demanar pressupost…»',
      },
    },
    cinta: [
      'Webs per a negocis',
      'Sistemes a mida',
      'Reserves per a restaurants',
      'Botigues en línia',
      'SEO local',
      'Català · Castellano · English',
    ],
    suite: {
      subtitol: 'Sistema d’aplicacions per a restaurants',
      insignia: 'Projecte principal',
      titolHtml:
        'Reserves, sala, carta i botiga en un sol sistema. <em>Fet per un hosteler</em>, pensat per al teu servei.',
      entradeta:
        'Optimitzat per anar ràpid en ple servei i construït per algú que ha viscut el negoci des de dins: sap què passa quan la sala és plena i el telèfon no para.',
      panell: {
        titolHtml: 'El teu restaurant, obert fins i tot quan <em>tanques</em>.',
        text: 'Reserves des de la teva web a qualsevol hora, el servei en directe a l’iPad, la carta i la botiga per emportar. Tot en un sol lloc i sense comissions per comensal.',
        funcions: ['Reserves', 'Pla de sala', 'Recordatoris', 'Carta digital', 'Botiga per emportar'],
        botoPrincipal: 'Descobreix el sistema →',
        botoSecundari: 'Demana una demo',
      },
      maqueta: {
        estat: 'Restaurant tancat',
        hora: '23:47',
        enDirecte: 'En directe',
        reservesDema: 'Reserves de demà',
        reserves: [
          { hora: '13:30', nom: 'Marta R.', detall: '4 pers. · Taula 7' },
          { hora: '14:00', nom: 'Jordi P.', detall: '2 pers. · Terrassa 3' },
          { hora: '14:30', nom: 'Família Soler', detall: '6 pers. · Taules 10+11' },
        ],
        avisTitol: 'Nova reserva per la web',
        avisText: 'Demà 21:00 · 4 persones',
      },
    },
    noRestaurant: {
      titol: 'No tens un restaurant? També t’hi puc ajudar.',
      text: 'Webs que porten clients i sistemes a mida per a qualsevol negoci: cites, comandes, inventari o el que necessitis.',
      boto: 'Explica’m el teu cas →',
    },
    projectes: {
      eyebrow: 'Altres projectes',
      titol: 'Feina feta, a prop de casa.',
      visita: 'Visita la web',
      llista: [
        {
          id: 'barca',
          categoria: `Restaurant · ${POBLACIO}`,
          nom: 'La Barca de Ca l’Ardet',
          text: 'Web, botiga per emportar i reserves en línia per a un restaurant de platja.',
          alt: 'Pàgina d’inici de la web de La Barca de Ca l’Ardet',
          url: 'https://labarcadecalardet.com',
        },
        {
          id: 'forum',
          categoria: `Associació empresarial · ${POBLACIO}`,
          nom: 'Fòrum Calafell',
          text: 'Web de l’associació que reuneix més de 180 comerços, restaurants i serveis: directori d’associats, campanyes, notícies i àrea de socis.',
          alt: 'Pàgina d’inici de la web del Fòrum Calafell',
          url: 'https://forumcalafell.com',
        },
      ],
    },
    sobreMi: {
      eyebrow: 'Sobre mi',
      altFoto: NOM,
      titol: 'Sóc l’Arnau. Converteixo idees de negoci en eines que funcionen.',
      paragrafs: [
        `Sóc desenvolupador web i visc a ${POBLACIO}. M’agrada entendre primer com treballa cada negoci i després construir just el que necessita: res de plantilles genèriques ni funcions que no faràs servir.`,
        'T’ho deixo funcionant, t’ensenyo a fer-ho servir i, si cal res, em tens a un WhatsApp. En català, castellà o anglès.',
      ],
      dades: {
        estudis: 'Estudis',
        eines: 'Eines',
        einesValor: 'Astro · Django · TypeScript · PostgreSQL',
        idiomes: 'Idiomes',
        idiomesValor: 'Català · Castellano · English',
      },
      serveisEyebrow: 'Què puc fer per tu',
      serveis: [
        { icona: 'web', titol: 'Webs per a negocis', text: 'Ràpides, fàcils de trobar a Google i en diversos idiomes.' },
        { icona: 'eina', titol: 'Sistemes a mida', text: 'Reserves, comandes, cites o gestió interna, adaptats a com treballes.' },
        { icona: 'bossa', titol: 'Botigues en línia', text: 'Comandes per emportar o venda en línia, sense comissions de plataformes.' },
        { icona: 'escut', titol: 'Manteniment i suport', text: 'Actualitzacions, canvis i una persona que respon quan la necessites.' },
      ],
    },
    contacte: {
      titol: 'Parlem del teu negoci.',
      text: 'Explica’m què necessites i et dic com t’hi puc ajudar. Sense compromís.',
      whatsapp: 'Escriu-me per WhatsApp',
      telefon: TELEFON_VISIBLE,
      correu: CORREU,
    },
    formulari: {
      etiqueta: 'Formulari de contacte',
      titol: 'O envia’m un missatge',
      nom: 'Nom',
      correu: 'Correu electrònic',
      missatge: 'Què necessites?',
      privacitatAbans: 'He llegit i accepto la ',
      privacitatEnllac: 'política de privacitat',
      privacitatDespres: '.',
      parany: 'No omplis aquest camp si ets una persona',
      envia: 'Envia',
      enviant: 'Enviant…',
      errors: {
        nom: 'Escriu el teu nom.',
        correu: 'Escriu un correu electrònic vàlid.',
        missatge: 'Explica’m breument què necessites.',
        privacitat: 'Cal que acceptis la política de privacitat.',
        resum: 'Revisa els camps marcats.',
      },
      enviat: 'Gràcies! He rebut el teu missatge i et respondré aviat.',
      errorEnviament: 'No s’ha pogut enviar el missatge. Torna-ho a provar o escriu-me per WhatsApp.',
    },
  },

  suite: {
    hero: {
      subtitol: 'Sistema d’aplicacions per a restaurants',
      titolHtml: 'El teu restaurant, obert fins i tot quan <em>tanques</em>.',
      entradeta:
        'Les reserves de la web i del telèfon en un sol lloc i el servei sota control des de l’iPad. Sense comissions per comensal. La vista prèvia del formulari de reserves és un exemple de com el veurien els teus clients.',
      botoPrincipal: 'Demana una demo',
      botoSecundari: 'Per què l’he fet',
      vistaPrevia: {
        etiqueta: 'Vista prèvia',
        descripcio: 'Exemple visual del formulari de reserves tal com el veurien els teus clients.',
        restaurant: 'El teu restaurant',
        titol: 'Reserva taula',
        dia: 'Dia',
        diaValor: 'Dissabte',
        persones: 'Persones',
        personesValor: '4 persones',
        hora: 'Hora',
        hores: ['13:00', '13:30', '14:00', '14:30'],
        horaTriada: '13:30',
        nom: 'Nom',
        nomValor: 'Marta R.',
        correu: 'Correu electrònic',
        correuValor: 'marta@example.com',
        boto: 'Confirma la reserva',
        nota: 'Rebràs la confirmació i un recordatori per correu.',
      },
    },
    perQue: {
      eyebrow: 'Per què l’he fet',
      titol: 'Vinc d’una família d’hostalers. Conec els mals de cap des de la sala.',
      paragrafs: [
        `He crescut al restaurant de la meva família, a ${POBLACIO}, i hi he treballat durant anys mentre estudiava. He servit taules, he agafat el telèfon enmig del servei i he quadrat reserves en una llibreta plena de guixades.`,
        'Quan vaig començar a programar, el primer que vaig voler resoldre van ser aquests problemes. Aquest sistema no l’ha pensat algú des d’una oficina: s’ha fet i s’ha provat en un restaurant de debò, servei rere servei. Ja funciona cada servei al restaurant de la meva família.',
      ],
      etSona: 'Et sona?',
      mals: [
        'El telèfon sonant just quan surten deu plats.',
        'La llibreta on ningú entén la lletra de l’altre.',
        'Una taula de sis que no es presenta un dissabte.',
        '«On l’havíem posat, aquest grup?»',
        'Pagar comissions per cada client que ja venia igualment.',
      ],
    },
    queCanvia: {
      eyebrow: 'Què canvia',
      titol: 'Adeu a la llibreta i als «on el vam posar?».',
      fitxes: [
        {
          icona: 'rellotge',
          titol: 'Reserves a qualsevol hora',
          text: 'Els clients reserven des de la teva web, fins i tot quan el restaurant és tancat. Tu no despenges el telèfon.',
        },
        {
          icona: 'sala',
          titol: 'El servei en directe',
          text: 'Pla de sala, arribades, retards i taules lliures a l’iPad o al mòbil, en temps real.',
        },
        {
          icona: 'campana',
          titol: 'Menys plantons',
          text: 'Confirmació i recordatori per correu, amb enllaç perquè el client pugui cancel·lar.',
        },
        {
          icona: 'persones',
          titol: 'Coneixes els teus clients',
          text: 'Visites, al·lèrgies i preferències de cada client. Les dades són teves, no d’una plataforma.',
        },
      ],
    },
    perDins: {
      eyebrow: 'El sistema per dins',
      titol: 'Tota la sala, d’un cop d’ull.',
      text: 'Quan arriba un client, toques la taula i ja està. Tot l’equip veu el mateix al moment, a l’iPad de la barra o al mòbil.',
      maqueta: {
        exemple: 'Exemple visual',
        dadesExemple: 'Dades d’exemple',
        torn: 'Dinar · Sala principal',
        ocupacio: '38 de 52 comensals',
        enDirecte: 'Servei en directe',
        persones: 'p.',
        asseguts: 'Asseguts',
        reservada: 'Reservada',
        lliure: 'Lliure',
        avisTitol: 'Ha arribat la taula 3',
        avisText: 'Família Soler · 4 persones',
      },
    },
    comFunciona: {
      eyebrow: 'Com funciona',
      titol: 'Ho configuro jo, perquè tu no hagis de fer res.',
      passos: [
        { titol: 'Visita al restaurant', text: 'Veiem com treballeu: sales, taules, torns i com entren les reserves.' },
        { titol: 'Configuració a mida', text: 'El pla de sala, els horaris i les regles de reserva, tal com treballeu.' },
        {
          titol: 'A la teva web',
          text: 'El formulari de reserves a la teva web, sigui quina sigui. I si no en tens, te’n faig una.',
        },
        {
          titol: 'Formació i acompanyament',
          text: 'Una tarda per a l’equip, i el primer mes al teu costat per ajustar el que calgui.',
        },
      ],
    },
    moduls: {
      eyebrow: 'Mòduls',
      titol: 'Comença per les reserves i afegeix només el que necessitis.',
      llista: [
        { etiqueta: 'El nucli', titol: 'Reserves i pla de sala', text: 'Les reserves de la web i del telèfon en un sol lloc, i tota la sala en directe a l’iPad.' },
        { etiqueta: '', titol: 'Carta a la web', text: 'La teva carta a la teva web, fàcil de llegir des del mòbil.' },
        { etiqueta: 'Extra', titol: 'Botiga per emportar', text: 'Comandes per emportar des de la teva web: un canal de venda més, sense comissions de plataformes.' },
        { etiqueta: 'A mida', titol: 'Web nova optimitzada per SEO', text: 'Si no en tens o la vols renovar, una web nova feta a mida, ràpida i preparada per al SEO local.' },
      ],
      properament: {
        etiqueta: 'Properament',
        llista: [
          { titol: 'Tancament de servei', text: 'Una llista del que l’equip ha de fer abans de tancar, perquè no es quedi res per fer.' },
          { titol: 'Fitxatge del personal', text: 'Registre d’hores de l’equip.' },
          { titol: 'Comandes durant el servei', text: 'Comandes de sala sense papers.' },
        ],
      },
      condicions: 'Els 3 primers restaurants: condicions de llançament i configuració inclosa. Et dic les condicions a la demo, sense compromís.',
      boto: 'Demana una demo de 15 minuts',
    },
    crida: {
      titol: 'Vols veure com funcionaria al teu restaurant?',
      text: 'Et faig una demo en quinze minuts, al teu restaurant o en línia. D’hosteler a hosteler.',
      whatsapp: 'Demana una demo per WhatsApp',
      correu: 'Envia’m un correu',
      assumpteCorreu: `Demo de ${NOM_SUITE}`,
    },
  },

  noTrobada: {
    eyebrow: 'Error 404',
    titolHtml: 'Aquesta pàgina s’ha <em>perdut</em>.',
    text: 'Potser l’enllaç és antic o hi ha una errada a l’adreça. Torna a l’inici o escriu-me si buscaves alguna cosa en concret.',
    inici: 'Torna a l’inici',
    contacte: 'Escriu-me per WhatsApp',
  },

  legal: {
    actualitzat: 'Última actualització: novembre de 2026',
    avisLegal: {
      titol: 'Avís legal',
      seccions: [
        {
          titol: 'Titular del lloc web',
          paragrafsHtml: [
            'En compliment de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI), t’informo de les dades del titular d’aquesta web:',
            `<strong>Titular:</strong> {titular}<br><strong>NIF:</strong> {nif}<br><strong>Domicili:</strong> {domicili}<br><strong>Correu electrònic:</strong> <a href="mailto:${CORREU}">${CORREU}</a><br><strong>Telèfon:</strong> ${TELEFON_VISIBLE}<br><strong>Activitat:</strong> disseny i desenvolupament de webs i aplicacions.`,
          ],
        },
        {
          titol: 'Condicions d’ús',
          paragrafsHtml: [
            'L’accés a aquesta web és gratuït i implica acceptar aquestes condicions. T’hi comprometes a fer-ne un ús correcte, d’acord amb la llei i la bona fe.',
          ],
        },
        {
          titol: 'Propietat intel·lectual',
          paragrafsHtml: [
            'Els textos, el disseny, el codi i les imatges d’aquesta web són del titular o s’hi fan servir amb permís. Les captures dels projectes es mostren amb el consentiment dels seus clients. No es poden reproduir sense autorització prèvia.',
          ],
        },
        {
          titol: 'Responsabilitat i enllaços',
          paragrafsHtml: [
            'Procuro que la informació sigui correcta i estigui actualitzada, però no puc garantir que no hi hagi errors. Aquesta web conté enllaços a webs de tercers; no em faig responsable del seu contingut ni de les seves polítiques.',
          ],
        },
        {
          titol: 'Legislació aplicable',
          paragrafsHtml: ['Aquestes condicions es regeixen per la legislació espanyola.'],
        },
      ],
    },
    privacitat: {
      titol: 'Política de privacitat',
      seccions: [
        {
          titol: 'Responsable del tractament',
          paragrafsHtml: [
            `{titular}, amb NIF {nif} i domicili a {domicili}. Contacte: <a href="mailto:${CORREU}">${CORREU}</a>.`,
          ],
        },
        {
          titol: 'Quines dades tracto i per a què',
          paragrafsHtml: [
            'Si m’escrius pel formulari de contacte, tracto el teu nom, el teu correu electrònic i el missatge que m’envies, només per respondre la teva consulta i, si ho demanes, preparar-te un pressupost.',
            'Si em contactes per WhatsApp, per telèfon o per correu, tracto les dades que tu mateix m’hi facilitis, amb la mateixa finalitat.',
          ],
        },
        {
          titol: 'Base legal',
          paragrafsHtml: [
            'El teu consentiment, que dones en marcar la casella del formulari (article 6.1.a del RGPD), i l’aplicació de mesures precontractuals a petició teva (article 6.1.b del RGPD).',
          ],
        },
        {
          titol: 'Quant de temps les conservo',
          paragrafsHtml: [
            'El temps necessari per respondre’t. Si no s’inicia cap relació comercial, les esborro passats {conservacio}. Si n’hi ha, les conservo mentre duri i durant els terminis que fixa la llei.',
          ],
        },
        {
          titol: 'Qui més hi té accés',
          paragrafsHtml: [
            'No cedeixo les teves dades a ningú. La web està allotjada a Netlify, Inc., que rep els missatges del formulari com a encarregat del tractament. Netlify és als Estats Units; la transferència es fa amb les garanties que preveu el RGPD (clàusules contractuals tipus de la Comissió Europea).',
          ],
        },
        {
          titol: 'Els teus drets',
          paragrafsHtml: [
            `Pots demanar l’accés, la rectificació o la supressió de les teves dades, oposar-te al tractament, limitar-lo o demanar-ne la portabilitat, i retirar el consentiment en qualsevol moment, escrivint a <a href="mailto:${CORREU}">${CORREU}</a>.`,
            'Si creus que no s’han respectat els teus drets, pots presentar una reclamació a l’Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es">www.aepd.es</a>).',
          ],
        },
      ],
    },
    galetes: {
      titol: 'Política de galetes',
      seccions: [
        {
          titol: 'Aquesta web no fa servir galetes',
          paragrafsHtml: [
            'No hi ha galetes d’analítica, de publicitat ni de xarxes socials, i no es fa cap seguiment de la teva visita. Per això no et demano cap consentiment en entrar.',
            'Les tipografies i les imatges s’allotgen a la mateixa web: no es carrega res de Google ni d’altres serveis externs mentre navegues.',
          ],
        },
        {
          titol: 'Enllaços a altres webs',
          paragrafsHtml: [
            'Si obres un enllaç extern (per exemple, WhatsApp o les webs dels projectes), aquelles webs tenen les seves pròpies polítiques de galetes.',
          ],
        },
        {
          titol: 'Canvis',
          paragrafsHtml: [
            'Si algun dia s’hi afegeix una eina que faci servir galetes no necessàries, s’actualitzarà aquesta pàgina i se’t demanarà el consentiment abans d’activar-la.',
          ],
        },
      ],
    },
  },
};

export type Traduccions = typeof ca;
