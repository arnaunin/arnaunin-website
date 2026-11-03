/**
 * Textos en castellano.
 *
 * ⚠️ PENDENT DE REVISIÓ: primera traducció feta a partir del català.
 * Cal que una persona la revisi abans de publicar la web.
 */
import { CORREU, NOM, NOM_SUITE, POBLACIO, TELEFON_VISIBLE } from '../config/lloc';
import type { Traduccions } from './ca';

export const es: Traduccions = {
  provisional: {
    legal: '[Texto base pendiente de revisión]',
    titular: '[Nombre y apellidos completos]',
    nif: '[NIF pendiente]',
    domicili: `[Dirección pendiente], ${POBLACIO}`,
    conservacio: '[12 meses]',
  },

  meta: {
    inici: {
      titol: `${NOM} · Desarrollador web en ${POBLACIO}`,
      descripcio:
        'Webs rápidas y sistemas a medida para negocios del Baix Penedès. Reservas para restaurantes, tiendas online y SEO local, en catalán, castellano e inglés.',
    },
    suite: {
      titol: `${NOM_SUITE} · Sistema para restaurantes · ${NOM}`,
      descripcio:
        'Reservas desde tu web a cualquier hora, el servicio en directo en el iPad, la carta y la tienda para llevar. Sin comisiones por comensal.',
    },
    avisLegal: { titol: `Aviso legal · ${NOM}`, descripcio: `Información legal del sitio web de ${NOM}.` },
    privacitat: {
      titol: `Política de privacidad · ${NOM}`,
      descripcio: 'Cómo se tratan los datos personales que me envías a través de esta web.',
    },
    galetes: { titol: `Política de cookies · ${NOM}`, descripcio: 'Esta web no utiliza cookies de seguimiento.' },
    noTrobada: { titol: `Página no encontrada · ${NOM}`, descripcio: 'Esta página no existe.' },
  },

  comu: {
    saltaContingut: 'Saltar al contenido',
    navegacio: 'Principal',
    idioma: 'Idioma',
    obreMenu: 'Abrir el menú',
    tancaMenu: 'Cerrar el menú',
    nav: {
      inici: 'Inicio',
      restaurants: 'Restaurantes',
      projectes: 'Proyectos',
      sobreMi: 'Sobre mí',
      contacte: 'Contacto',
    },
    parlem: 'Hablemos',
    demanaDemo: 'Pide una demo',
    peu: {
      drets: `${NOM} · ${POBLACIO}`,
      legal: 'Textos legales',
      avisLegal: 'Aviso legal',
      privacitat: 'Privacidad',
      galetes: 'Cookies',
    },
    obreNovaFinestra: '(se abre en una ventana nueva)',
  },

  inici: {
    hero: {
      ubicacio: `Desarrollador web · ${POBLACIO}`,
      titolAbans: 'Webs y herramientas que trabajan para ti, ',
      titolDestacat: 'no al revés',
      titolDespres: '.',
      entradeta:
        'Soy Arnau. Diseño y programo webs rápidas y sistemas a medida para que tu negocio gane clientes y pierda menos tiempo en tareas repetitivas.',
      botoPrincipal: 'Hablemos de tu proyecto',
      botoSecundari: 'Mira el trabajo hecho →',
      maqueta: {
        url: 'www.tunegocio.es',
        velocitatHtml: 'Velocidad<br>de carga',
        avisTitol: 'Nuevo cliente desde la web',
        avisText: '«Quería pedir presupuesto…»',
      },
    },
    cinta: [
      'Webs para negocios',
      'Sistemas a medida',
      'Reservas para restaurantes',
      'Tiendas online',
      'SEO local',
      'Català · Castellano · English',
    ],
    suite: {
      subtitol: 'Sistema de aplicaciones para restaurantes',
      insignia: 'Proyecto principal',
      titolHtml:
        'Reservas, sala, carta y tienda en un solo sistema. <em>Hecho por un hostelero</em>, pensado para tu servicio.',
      entradeta:
        'Optimizado para ir rápido en pleno servicio y construido por alguien que ha vivido el negocio desde dentro: sabe qué pasa cuando la sala está llena y el teléfono no para.',
      panell: {
        titolHtml: 'Tu restaurante, abierto incluso cuando <em>cierras</em>.',
        text: 'Reservas desde tu web a cualquier hora, el servicio en directo en el iPad, la carta y la tienda para llevar. Todo en un solo lugar y sin comisiones por comensal.',
        funcions: ['Reservas', 'Plano de sala', 'Recordatorios', 'Carta digital', 'Tienda para llevar'],
        botoPrincipal: 'Descubre el sistema →',
        botoSecundari: 'Pide una demo',
      },
      cita: {
        text: '«He creado el sistema que me habría gustado tener cuando servía mesas: todo el restaurante en un solo lugar, en el iPad.»',
        detall: 'Ya funciona cada servicio en el restaurante de mi familia.',
      },
    },
    noRestaurant: {
      titol: '¿No tienes un restaurante? También puedo ayudarte.',
      text: 'Webs que traen clientes y sistemas a medida para cualquier negocio: citas, pedidos, inventario o lo que necesites.',
      boto: 'Cuéntame tu caso →',
    },
    projectes: {
      eyebrow: 'Otros proyectos',
      titol: 'Trabajo hecho, cerca de casa.',
      visita: 'Visita la web',
      perPublicar: 'Web nueva · se publica pronto',
      llista: [
        {
          id: 'barca',
          categoria: `Restaurante · ${POBLACIO}`,
          nom: 'La Barca de Ca l’Ardet',
          text: 'Web, tienda para llevar y reservas online para un restaurante de playa.',
          alt: 'Página de inicio de la web de La Barca de Ca l’Ardet',
          url: 'https://labarcadecalardet.com',
          /** La web nova encara no és al domini: es mostra «es publica aviat» en lloc de l’enllaç. */
          publicada: false,
        },
        {
          id: 'forum',
          categoria: `Asociación empresarial · ${POBLACIO}`,
          nom: 'Fòrum Calafell',
          text: 'Web de la asociación que reúne a más de 180 comercios, restaurantes y servicios: directorio de asociados, campañas, noticias y área de socios.',
          alt: 'Página de inicio de la web del Fòrum Calafell',
          url: 'https://forumcalafell.com',
          publicada: true,
        },
      ],
    },
    sobreMi: {
      eyebrow: 'Sobre mí',
      altFoto: NOM,
      titol: 'Soy Arnau. Convierto ideas de negocio en herramientas que funcionan.',
      paragrafs: [
        `Soy desarrollador web y vivo en ${POBLACIO}. Me gusta entender primero cómo trabaja cada negocio y después construir justo lo que necesita: nada de plantillas genéricas ni funciones que no vas a usar.`,
        'Te lo dejo funcionando, te enseño a usarlo y, si necesitas algo, me tienes a un WhatsApp. En catalán, castellano o inglés.',
      ],
      dades: {
        estudis: 'Estudios',
        estudisValor: 'Máster en desarrollo web full stack',
        eines: 'Herramientas',
        einesValor: 'Astro · Django · TypeScript · PostgreSQL',
        idiomes: 'Idiomas',
        idiomesValor: 'Català · Castellano · English',
      },
      serveisEyebrow: 'Qué puedo hacer por ti',
      serveis: [
        { icona: 'web', titol: 'Webs para negocios', text: 'Rápidas, fáciles de encontrar en Google y en varios idiomas.' },
        { icona: 'eina', titol: 'Sistemas a medida', text: 'Reservas, pedidos, citas o gestión interna, adaptados a cómo trabajas.' },
        { icona: 'bossa', titol: 'Tiendas online', text: 'Pedidos para llevar o venta online, sin comisiones de plataformas.' },
        { icona: 'escut', titol: 'Mantenimiento y soporte', text: 'Actualizaciones, cambios y una persona que responde cuando la necesitas.' },
      ],
    },
    contacte: {
      titol: 'Hablemos de tu negocio.',
      text: 'Cuéntame qué necesitas y te digo cómo puedo ayudarte. Sin compromiso.',
      whatsapp: 'Escríbeme por WhatsApp',
      telefon: TELEFON_VISIBLE,
      correu: CORREU,
    },
    formulari: {
      etiqueta: 'Formulario de contacto',
      titol: 'O envíame un mensaje',
      nom: 'Nombre',
      correu: 'Correo electrónico',
      missatge: '¿Qué necesitas?',
      privacitatAbans: 'He leído y acepto la ',
      privacitatEnllac: 'política de privacidad',
      privacitatDespres: '.',
      avisDades: 'Solo usaré tus datos para responderte. No los cedo a nadie.',
      parany: 'No rellenes este campo si eres una persona',
      envia: 'Enviar',
      enviant: 'Enviando…',
      errors: {
        nom: 'Escribe tu nombre.',
        correu: 'Escribe un correo electrónico válido.',
        missatge: 'Cuéntame brevemente qué necesitas.',
        privacitat: 'Tienes que aceptar la política de privacidad.',
        resum: 'Revisa los campos marcados.',
      },
      enviat: '¡Gracias! He recibido tu mensaje y te responderé pronto.',
      errorEnviament: 'No se ha podido enviar el mensaje. Vuelve a intentarlo o escríbeme por WhatsApp.',
    },
  },

  suite: {
    hero: {
      subtitol: 'Sistema de aplicaciones para restaurantes',
      titolHtml: 'Tu restaurante, abierto incluso cuando <em>cierras</em>.',
      entradeta:
        'Las reservas de la web y del teléfono en un solo lugar y el servicio bajo control desde el iPad. Sin comisiones por comensal.',
      botoPrincipal: 'Pide una demo',
      botoSecundari: 'Por qué lo he hecho',
      resum: {
        titol: 'Todo el restaurante en un solo lugar, en el iPad.',
        punts: [
          'Reservas de la web y del teléfono',
          'Plano de sala en directo',
          'Recordatorios por correo',
          'Carta y tienda para llevar',
        ],
      },
    },
    perQue: {
      eyebrow: 'Por qué lo he hecho',
      titol: 'Vengo de una familia de hosteleros. Conozco los quebraderos de cabeza desde la sala.',
      paragrafs: [
        `He crecido en el restaurante de mi familia, en ${POBLACIO}, y he trabajado en él durante años mientras estudiaba. He servido mesas, he cogido el teléfono en pleno servicio y he cuadrado reservas en una libreta llena de tachones.`,
        'Cuando empecé a programar, lo primero que quise resolver fueron estos problemas. Este sistema no lo ha pensado alguien desde una oficina: se ha hecho y se ha probado en un restaurante de verdad, servicio tras servicio. Ya funciona cada servicio en el restaurante de mi familia.',
      ],
      etSona: '¿Te suena?',
      mals: [
        'El teléfono sonando justo cuando salen diez platos.',
        'La libreta en la que nadie entiende la letra del otro.',
        'Una mesa de seis que no se presenta un sábado.',
        '«¿Dónde habíamos puesto a este grupo?»',
        'Pagar comisiones por cada cliente que ya venía igualmente.',
      ],
    },
    queCanvia: {
      eyebrow: 'Qué cambia',
      titol: 'Adiós a la libreta y a los «¿dónde lo pusimos?».',
      fitxes: [
        {
          icona: 'rellotge',
          titol: 'Reservas a cualquier hora',
          text: 'Los clientes reservan desde tu web, incluso cuando el restaurante está cerrado. Tú no descuelgas el teléfono.',
        },
        {
          icona: 'sala',
          titol: 'El servicio en directo',
          text: 'Plano de sala, llegadas, retrasos y mesas libres en el iPad o en el móvil, en tiempo real.',
        },
        {
          icona: 'campana',
          titol: 'Menos plantones',
          text: 'Confirmación y recordatorio por correo, con enlace para que el cliente pueda cancelar.',
        },
        {
          icona: 'persones',
          titol: 'Conoces a tus clientes',
          text: 'Visitas, alergias y preferencias de cada cliente. Los datos son tuyos, no de una plataforma.',
        },
      ],
    },
    perDins: {
      eyebrow: 'En pleno servicio',
      titol: 'Toda la sala, de un vistazo.',
      text: 'Pensado para los momentos de más trabajo: cuando la sala está llena, el teléfono suena y no hay tiempo para buscar nada en la libreta.',
      moments: [
        { titol: 'Llega un cliente', text: 'Tocas la mesa y listo. Todo el equipo lo ve al momento, en el iPad de la barra o en el móvil.' },
        { titol: 'Llaman para reservar', text: 'La apuntas en el mismo sitio que las reservas de la web. Una sola lista, sin libreta.' },
        { titol: 'Alguien no podrá venir', text: 'Ha recibido el recordatorio por correo, ha cancelado con el enlace y la mesa queda libre.' },
      ],
      demo: '¿Quieres verlo por dentro? Te hago una demo de 15 minutos o te envío un vídeo.',
      enllac: 'Pídela',
    },
    comFunciona: {
      eyebrow: 'Cómo funciona',
      titol: 'Lo configuro yo, para que tú no tengas que hacer nada.',
      passos: [
        { titol: 'Visita al restaurante', text: 'Vemos cómo trabajáis: salas, mesas, turnos y cómo entran las reservas.' },
        { titol: 'Configuración a medida', text: 'El plano de sala, los horarios y las reglas de reserva, tal como trabajáis.' },
        {
          titol: 'En tu web',
          text: 'El formulario de reservas en tu web, sea cual sea. Y si no tienes, te hago una.',
        },
        {
          titol: 'Formación y acompañamiento',
          text: 'Una tarde para el equipo, y el primer mes a tu lado para ajustar lo que haga falta.',
        },
      ],
    },
    moduls: {
      eyebrow: 'Módulos',
      titol: 'Empieza por las reservas y añade solo lo que necesites.',
      llista: [
        { etiqueta: 'El núcleo', titol: 'Reservas y plano de sala', text: 'Las reservas de la web y del teléfono en un solo lugar, y toda la sala en directo en el iPad.' },
        { etiqueta: '', titol: 'Carta en la web', text: 'Tu carta en tu web, fácil de leer desde el móvil.' },
        { etiqueta: 'Extra', titol: 'Tienda para llevar', text: 'Pedidos para llevar desde tu web: un canal de venta más, sin comisiones de plataformas.' },
        { etiqueta: 'A medida', titol: 'Web nueva optimizada para SEO', text: 'Si no tienes o quieres renovarla, una web nueva hecha a medida, rápida y preparada para el SEO local.' },
      ],
      properament: {
        etiqueta: 'Próximamente',
        llista: [
          { titol: 'Cierre de servicio', text: 'Una lista de lo que el equipo tiene que hacer antes de cerrar, para que no quede nada por hacer.' },
          { titol: 'Fichaje del personal', text: 'Registro de horas del equipo.' },
          { titol: 'Comandas durante el servicio', text: 'Comandas de sala sin papeles.' },
        ],
      },
      condicions: 'Los 3 primeros restaurantes: condiciones de lanzamiento y configuración incluida. Te cuento las condiciones en la demo, sin compromiso.',
      boto: 'Pide una demo de 15 minutos',
    },
    crida: {
      titol: '¿Quieres ver cómo funcionaría en tu restaurante?',
      text: 'Te hago una demo en quince minutos, en tu restaurante u online. De hostelero a hostelero.',
      whatsapp: 'Pide una demo por WhatsApp',
      correu: 'Envíame un correo',
      assumpteCorreu: `Demo de ${NOM_SUITE}`,
    },
  },

  noTrobada: {
    eyebrow: 'Error 404',
    titolHtml: 'Esta página se ha <em>perdido</em>.',
    text: 'Quizá el enlace es antiguo o hay un error en la dirección. Vuelve al inicio o escríbeme si buscabas algo en concreto.',
    inici: 'Volver al inicio',
    contacte: 'Escríbeme por WhatsApp',
  },

  legal: {
    actualitzat: 'Última actualización: noviembre de 2026',
    avisLegal: {
      titol: 'Aviso legal',
      seccions: [
        {
          titol: 'Titular del sitio web',
          paragrafsHtml: [
            'En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI), te informo de los datos del titular de esta web:',
            `<strong>Titular:</strong> {titular}<br><strong>NIF:</strong> {nif}<br><strong>Domicilio:</strong> {domicili}<br><strong>Correo electrónico:</strong> <a href="mailto:${CORREU}">${CORREU}</a><br><strong>Teléfono:</strong> ${TELEFON_VISIBLE}<br><strong>Actividad:</strong> diseño y desarrollo de webs y aplicaciones.`,
          ],
        },
        {
          titol: 'Condiciones de uso',
          paragrafsHtml: [
            'El acceso a esta web es gratuito e implica aceptar estas condiciones. Te comprometes a hacer un uso correcto de ella, de acuerdo con la ley y la buena fe.',
          ],
        },
        {
          titol: 'Propiedad intelectual',
          paragrafsHtml: [
            'Los textos, el diseño, el código y las imágenes de esta web son del titular o se usan con permiso. Las capturas de los proyectos se muestran con el consentimiento de sus clientes. No se pueden reproducir sin autorización previa.',
          ],
        },
        {
          titol: 'Responsabilidad y enlaces',
          paragrafsHtml: [
            'Procuro que la información sea correcta y esté actualizada, pero no puedo garantizar que no haya errores. Esta web contiene enlaces a webs de terceros; no me hago responsable de su contenido ni de sus políticas.',
          ],
        },
        {
          titol: 'Legislación aplicable',
          paragrafsHtml: ['Estas condiciones se rigen por la legislación española.'],
        },
      ],
    },
    privacitat: {
      titol: 'Política de privacidad',
      seccions: [
        {
          titol: 'Responsable del tratamiento',
          paragrafsHtml: [
            `{titular}, con NIF {nif} y domicilio en {domicili}. Contacto: <a href="mailto:${CORREU}">${CORREU}</a>.`,
          ],
        },
        {
          titol: 'Qué datos trato y para qué',
          paragrafsHtml: [
            'Si me escribes por el formulario de contacto, trato tu nombre, tu correo electrónico y el mensaje que me envías, solo para responder a tu consulta y, si lo pides, prepararte un presupuesto.',
            'Si me contactas por WhatsApp, por teléfono o por correo, trato los datos que tú mismo me facilites, con la misma finalidad.',
          ],
        },
        {
          titol: 'Base legal',
          paragrafsHtml: [
            'Tu consentimiento, que das al marcar la casilla del formulario (artículo 6.1.a del RGPD), y la aplicación de medidas precontractuales a petición tuya (artículo 6.1.b del RGPD).',
          ],
        },
        {
          titol: 'Cuánto tiempo los conservo',
          paragrafsHtml: [
            'El tiempo necesario para responderte. Si no se inicia ninguna relación comercial, los borro pasados {conservacio}. Si la hay, los conservo mientras dure y durante los plazos que fija la ley.',
          ],
        },
        {
          titol: 'Quién más tiene acceso',
          paragrafsHtml: [
            'No cedo tus datos a nadie. La web está alojada en Netlify, Inc., que recibe los mensajes del formulario como encargado del tratamiento. Netlify está en Estados Unidos; la transferencia se hace con las garantías que prevé el RGPD (cláusulas contractuales tipo de la Comisión Europea).',
          ],
        },
        {
          titol: 'Tus derechos',
          paragrafsHtml: [
            `Puedes solicitar el acceso, la rectificación o la supresión de tus datos, oponerte al tratamiento, limitarlo o pedir su portabilidad, y retirar el consentimiento en cualquier momento, escribiendo a <a href="mailto:${CORREU}">${CORREU}</a>.`,
            'Si crees que no se han respetado tus derechos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es">www.aepd.es</a>).',
          ],
        },
      ],
    },
    galetes: {
      titol: 'Política de cookies',
      seccions: [
        {
          titol: 'Esta web no utiliza cookies',
          paragrafsHtml: [
            'No hay cookies de analítica, de publicidad ni de redes sociales, y no se hace ningún seguimiento de tu visita. Por eso no te pido ningún consentimiento al entrar.',
            'Las tipografías y las imágenes se alojan en la propia web: no se carga nada de Google ni de otros servicios externos mientras navegas.',
          ],
        },
        {
          titol: 'Enlaces a otras webs',
          paragrafsHtml: [
            'Si abres un enlace externo (por ejemplo, WhatsApp o las webs de los proyectos), esas webs tienen sus propias políticas de cookies.',
          ],
        },
        {
          titol: 'Cambios',
          paragrafsHtml: [
            'Si algún día se añade una herramienta que use cookies no necesarias, se actualizará esta página y se te pedirá el consentimiento antes de activarla.',
          ],
        },
      ],
    },
  },
};
