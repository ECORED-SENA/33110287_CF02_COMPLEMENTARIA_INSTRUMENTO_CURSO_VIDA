export default {
  global: {
    componenteFormativo: 'Plan de cuidado en la atención integral',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre los <b>planes de cuidado</b>, a partir de los hallazgos aportados por los instrumentos de la valoración integral por curso de vida. El aprendiz estará en capacidad de aportar a la construcción del marco estratégico para el cuidado integral del individuo, la familia y la comunidad, según resultados de los instrumentos y el plan de cuidado mismo, así como analizar y trazar planes de mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Plan de cuidado en el marco de la valoración integral en salud',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Componentes del plan de cuidado - SERVIRE',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'S - Servicios sociales y atenciones a la familia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'E - Enfermedad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'R - Ruta de PMS',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'V - Vigilancia: reporte a condiciones objeto de vigilancia',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'I - Información en salud',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'R - Remisión a intervenciones colectivas',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'E - Educación para la salud',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de cuidado en el marco de la valoración integral en salud',
      referencia:
        'PAHOTV. (2016). <i>El abordaje de curso de vida para la salud pública</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VQI4BlslORk',
    },
    {
      tema: 'Componentes del plan de cuidado - SERVIRE',
      referencia:
        'OPS/OMS. (s.f.). <i>Campus Virtual de Salud Pública OPS/OMS</i>. [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/b0uusFJM9aY',
    },
    {
      tema: 'Componentes del plan de cuidado - SERVIRE',
      referencia: 'OPS. (s.f.). <i>Campus Virtual de Salud Pública</i>. OPS.',
      tipo: 'Página web',
      link: 'https://www.campusvirtualsp.org/es',
    },
    {
      tema: 'R - Remisión a intervenciones colectivas',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <i>Manual metodológico para la elaboración e implementación de las RIAS</i>.  MinSalud.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/Manual-metodologico-rias.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención en salud',
      significado:
        'son acciones de los proveedores de salud institucionales y comunitarios para la promoción de la salud, prevenir las enfermedades, recuperar la salud y rehabilitar el daño, ejecutando intervenciones a escala individual, familiar y comunitaria.',
    },
    {
      termino: 'Coevaluación',
      significado:
        'es muy interesante porque plantea una evaluación entre iguales, es decir, son los propios compañeros los que se evalúan entre ellos, valorando el grado de implicación, actitud e interés de los distintos integrantes del equipo.',
    },
    {
      termino: 'Curso de vida',
      significado:
        'es el estudio a largo plazo de los efectos en la salud o la enfermedad de la exposición a riesgos físicos o sociales durante la gestación, la infancia, la adolescencia, la juventud y la vida adulta.',
    },
    {
      termino: 'Enfoque',
      significado:
        'implica un método multidisciplinario para promover la salud y prevenir las enfermedades a través de un "sistema completo", en lugares o contextos sociales en los que las personas participan en actividades diarias.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'son cualquier característica o circunstancia detectable de una persona o grupo de personas que se sabe asociada con la probabilidad de estar especialmente expuesta a desarrollar o padecer un proceso mórbido, sus características se asocian a un cierto tipo de daño a la salud.',
    },
    {
      termino: 'Factores protectores',
      significado:
        'son aquellos que reducen la probabilidad de emitir conductas de riesgo o de tener consecuencias negativas cuando se involucran en ellas, estos factores cumplen una función beneficiosa o de protección en el estado de salud del individuo, ayudándolo a su adaptación al medio.',
    },
    {
      termino: 'Instrumento',
      significado:
        'es un paquete de atenciones y servicios universales mínimos y diferenciados para garantizar la integralidad de la política y la articulación de las atenciones dirigidas a la primera infancia (niñas y niños de 0 a 5 años), a sus familias, cuidadores principales y agentes educativos.',
    },
    {
      termino: 'Marco conceptual',
      significado:
        'es una forma de tener presente toda la información que se utilizará en el proyecto.',
    },
    {
      termino: 'Metodología',
      significado:
        'es una de las etapas específicas de un trabajo o proyecto que parte de una posición teórica y conduce una selección de técnicas concretas (o métodos) acerca del procedimiento destinado a la realización de tareas vinculadas a la investigación, el trabajo o el proyecto.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'ciencia que estudia la metodología y las técnicas que se aplican a la enseñanza y a la educación, especialmente la infantil.',
    },
    {
      termino: 'Plan de cuidado',
      significado:
        'es la protocolización de las actuaciones de enfermería según las necesidades de cuidados que presentan grupos de pacientes con un mismo diagnóstico médico, que una vez implantados y monitoreados permiten consolidar la evaluación como eje de mejora de las intervenciones.',
    },
    {
      termino: 'Rutas',
      significado:
        'es un paquete de atenciones y servicios universales mínimos y diferenciados para garantizar la integralidad de la política y la articulación de las atenciones dirigidas a la primera infancia (niñas y niños de 0 a 5 años), a sus familias, cuidadores principales y agentes educativos.',
    },
    {
      termino: 'Rutas integrales',
      significado:
        'las condiciones necesarias para asegurar la integralidad en la atención por parte de los agentes del sistema de salud (territorio, asegurador, prestador) y de otros sectores.',
    },
    {
      termino: 'Sistema sanitario',
      significado:
        'está constituido por diferentes instituciones, organismos y servicios, que a través de acciones planificadas y organizadas, llevan a cabo una variedad de programas de salud.',
    },
    {
      termino: 'Vida saludable',
      significado:
        'aquellos hábitos de la vida diaria que ayudan a mantenerse más sanos y con menos limitaciones funcionales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 3518 de 2006. [Ministerio de Salud y Protección Social]. Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. Octubre 9 de 2006.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Política de atención integral en salud. MinSalud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2015). ABECÉ Enfoque de curso de vida. MinSalud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ABCenfoqueCV.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2015). El autocuidado, clave para alcanzar la megameta. MinSalud.',
      link:
        'https://www.minsalud.gov.co/Paginas/El-autocuidado-clave-para-alcanzar-la-megameta.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Anexos test de valoración integral instrumentos. MinSalud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/anexo-instrumentos-valoracion-ruta-promocion.pdf',
    },
    {
      referencia: 'OPS. (s.f.). Curso de vida saludable. OPS.',
      link: 'https://www.paho.org/es/temas/curso-vida-saludable',
    },
    {
      referencia: 'OPS. (s.f.). Salud del niño. OPS.',
      link: 'https://www.paho.org/es/temas/salud-nino',
    },
    {
      referencia:
        'Resolución 3280 de 2018. [Ministerio de Salud y Protección Social].  Por la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203280%20de%2020183280.pdf',
    },
    {
      referencia:
        'Resolución 518 de 2015. [Ministerio de Salud y Protección Social]. Por la cual se dictan disposiciones en relación con la Gestión de la Salud Pública y se establecen directrices para la ejecución, seguimiento y evaluación del Plan de Salud Pública de Intervenciones Colectivas - PIC. Febrero 24 de 2015.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0518-de-2015.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Suralba Mosquera',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia – Centro de Servicios de Salud',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor metodológico',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Mary Jeans Palacio Camacho',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
