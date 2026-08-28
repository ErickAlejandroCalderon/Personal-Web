export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      education: 'Educación',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para oportunidades',
      name: 'Erick Alejandro',
      lastName: 'Calderón Álvarez',
      title: 'Ingeniero en Sistemas Computacionales en Formación.',
      downloadCV: 'Descargar CV',
      contact: 'Contacto',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Conoce un poco más sobre mi perfil profesional y valores.',
      description: 'Estudiante de séptimo semestre de Ingeniería en Sistemas Computacionales con sólida formación técnica y académica orientada al desarrollo de software full-stack, la administración de bases de datos y la implementación de sistemas distribuidos.',
      description2: 'Proactivo, analítico y con experiencia práctica en la resolución de problemas lógicos, configuración de infraestructura en entornos Linux y diseño de interfaces de usuario modernas. Cuento con un título técnico previo que respalda mis competencias en hardware y mantenimiento informático.',
      stats: {
        semester: '7mo',
        semesterLabel: 'Semestre',
        projects: '4+',
        projectsLabel: 'Proyectos',
        tech: '20+',
        techLabel: 'Tecnologías',
      },
      values: {
        teamwork: 'Trabajo en Equipo',
        teamworkDesc: 'Colaboración efectiva en proyectos de software.',
        analytical: 'Pensamiento Analítico',
        analyticalDesc: 'Resiliencia ante desafíos de depuración y lógica compleja.',
        selfLearning: 'Autoaprendizaje',
        selfLearningDesc: 'Adaptabilidad a nuevas tecnologías y frameworks.',
      },
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologías y herramientas con las que trabajo.',
      categories: {
        backend: {
          name: 'Backend & Propósito General',
          items: [
            { name: 'Java', level: 50 },
            { name: 'C#', level: 50 },
            { name: 'C / C++', level: 50 },
            { name: 'Python', level: 50 },
            { name: 'Node.js', level: 50 },
          ],
        },
        frontend: {
          name: 'Frontend & Web',
          items: [
            { name: 'JavaScript', level: 50 },
            { name: 'HTML5 / CSS3', level: 50 },
            { name: 'React', level: 50 },
            { name: 'Angular', level: 50 },
            { name: 'Tailwind CSS', level: 50 },
            { name: 'Bootstrap', level: 50 },
          ],
        },
        database: {
          name: 'Bases de Datos',
          items: [
            { name: 'MySQL / SQL', level: 50 },
            { name: 'MongoDB', level: 50 },
          ],
        },
        infrastructure: {
          name: 'Infraestructura & DevOps',
          items: [
            { name: 'Docker', level: 50 },
            { name: 'Linux / UNIX', level: 50 },
            { name: 'Git / GitHub', level: 50 },
            { name: 'Cisco Packet Tracer', level: 50 },
          ],
        },
        tools: {
          name: 'Herramientas & Diseño',
          items: [
            { name: 'Figma', level: 50 },
            { name: 'Postman', level: 50 },
          ],
        },
      },
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Algunos de los proyectos en los que he trabajado.',
      items: [
        {
          title: 'Sistema de Procesamiento Distribuido de Datos',
          description: 'Diseño y construcción de un sistema distribuido utilizando Node.js y Apache Kafka para procesar flujos masivos de datos con un volumen de 100,000 registros repartidos eficientemente en un clúster.',
          tags: ['Node.js', 'Apache Kafka', 'Docker', 'Docker Compose'],
        },
        {
          title: 'Servidor Nextcloud',
          description: 'Configuración integral de un servidor de almacenamiento en la nube privado sobre un entorno seguro, implementando políticas de seguridad robustas y automatización de respaldos periódicos.',
          tags: ['HTTPS', 'SSH', 'Nextcloud'],
        },
        {
          title: 'Calculadora de Costos de Envío (Terrabus)',
          description: 'Desarrollo de una plataforma para la empresa de transporte Terrabus, para automatizar la estimación de costos por peso y distancia, eliminando flujos manuales en Excel y optimizando la experiencia de usuario mediante interfaces responsivas y animaciones fluidas.',
          tags: ['React', 'Web Animations API', 'JavaScript', 'HTML/CSS'],
        },
        {
          title: 'PcElements — Punto de Venta',
          description: 'Análisis técnico, estimación de requerimientos y desarrollo de módulos CRUD esenciales para la gestión transaccional de inventario y ventas en un modelo de negocio enfocado al retail tecnológico.',
          tags: ['C#', 'MySQL'],
        },
      ],
    },
    education: {
      title: 'Educación',
      subtitle: 'Mi formación académica y profesional.',
      university: {
        period: '2023 — Presente',
        degree: 'Ingeniería en Sistemas Computacionales',
        school: 'Universidad Autónoma de Aguascalientes',
        details: [
          'Centro de Ciencias Básicas',
          'Cursando el 7mo semestre',
          'Enfoque: Arquitectura de software, redes, sistemas distribuidos, bases de datos e ingeniería de datos',
        ],
      },
      technical: {
        period: 'Titulado',
        degree: 'Técnico en Soporte y Mantenimiento de Equipo de Cómputo',
        school: 'Educación Media Superior CETis No. 155 Josefa Ortiz de Dominguez',
        details: [
          'Diagnóstico preventivo y correctivo de hardware',
          'Configuración de redes locales',
          'Soporte técnico estructurado',
        ],
      },
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Español', level: 'Nativo'},
        { name: 'Inglés', level: 'Intermedio (B1.2 MCER)', badge: 'B1.2'},
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: 'No dudes en contactarme a través de cualquiera de estos medios.',
      github: {
        label: 'GitHub',
        value: 'https://github.com/ErickAlejandroCalderon',
      },
      linkedin: {
        label: 'LinkedIn',
        value: 'linkedin.com/in/tu-perfil',
      },
      email: {
        label: 'Email',
        value: 'calderon.alvarez.erick.4b@gmail.com',
      },
      location: {
        label: 'Ubicación',
        value: 'Aguascalientes, Ags., México',
      },
    },
    footer: {
      made: 'Hecho',
      by: 'por Erick Calderón',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for opportunities',
      name: 'Erick Alejandro',
      lastName: 'Calderón Álvarez',
      title: 'Computer Systems Engineering Student.',
      downloadCV: 'Download CV',
      contact: 'Contact',
    },
    about: {
      title: 'About Me',
      subtitle: 'Learn more about my professional profile and values.',
      description: 'Seventh-semester Computer Systems Engineering student with solid technical and academic background in full-stack software development, database administration, and distributed systems implementation.',
      description2: 'Proactive, analytical, and with hands-on experience in logical problem-solving, infrastructure configuration in Linux environments, and modern user interface design. I hold a prior technical degree that supports my competencies in hardware and IT maintenance.',
      stats: {
        semester: '7th',
        semesterLabel: 'Semester',
        projects: '4+',
        projectsLabel: 'Projects',
        tech: '20+',
        techLabel: 'Technologies',
      },
      values: {
        teamwork: 'Teamwork',
        teamworkDesc: 'Effective collaboration in software projects.',
        analytical: 'Analytical Thinking',
        analyticalDesc: 'Resilience in debugging and complex logic challenges.',
        selfLearning: 'Self-Learning',
        selfLearningDesc: 'Adaptability to new technologies and frameworks.',
      },
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I work with.',
      categories: {
        backend: {
          name: 'Backend & General Purpose',
          items: [
            { name: 'Java', level: 50 },
            { name: 'C#', level: 50 },
            { name: 'C / C++', level: 50 },
            { name: 'Python', level: 50 },
            { name: 'Node.js', level: 50 },
          ],
        },
        frontend: {
          name: 'Frontend & Web',
          items: [
            { name: 'JavaScript', level: 50 },
            { name: 'HTML5 / CSS3', level: 50 },
            { name: 'React', level: 50 },
            { name: 'Angular', level: 50 },
            { name: 'Tailwind CSS', level: 50 },
            { name: 'Bootstrap', level: 50 },
          ],
        },
        database: {
          name: 'Databases',
          items: [
            { name: 'MySQL / SQL', level: 50 },
            { name: 'MongoDB', level: 50 },
          ],
        },
        infrastructure: {
          name: 'Infrastructure & DevOps',
          items: [
            { name: 'Docker', level: 50 },
            { name: 'Linux / UNIX', level: 50 },
            { name: 'Git / GitHub', level: 50 },
            { name: 'Cisco Packet Tracer', level: 50 },
          ],
        },
        tools: {
          name: 'Tools & Design',
          items: [
            { name: 'Figma', level: 50 },
            { name: 'Postman', level: 50 },
            { name: 'Font Awesome', level: 50 },
          ],
        },
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Some of the projects I have worked on.',
      items: [
        {
          title: 'Distributed Data Processing System',
          description: 'Design and construction of a distributed system using Node.js and Apache Kafka to process massive data streams with a volume of 100,000 records efficiently distributed across a cluster.',
          tags: ['Node.js', 'Apache Kafka', 'Docker', 'Docker Compose'],
        },
        {
          title: 'Nextcloud Server',
          description: 'Comprehensive configuration of a private cloud storage server on a secure environment, implementing robust security policies and automated periodic backups.',
          tags: ['HTTPS', 'SSH', 'Nextcloud'],
        },
        {
          title: 'Magic Draw — Web App',
          description: 'Development of an interactive web platform focused on user experience for organizing gift exchange dynamics ("Secret Santa") with advanced drag-and-drop mechanics.',
          tags: ['Bootstrap 5.3', 'Web Animations API', 'JavaScript', 'HTML/CSS'],
        },
        {
          title: 'PcElements — Point of Sale',
          description: 'Technical analysis, requirements estimation, and development of essential CRUD modules for transactional inventory and sales management in a technology retail business model.',
          tags: ['C#', 'MySQL'],
        },
      ],
    },
    education: {
      title: 'Education',
      subtitle: 'My academic and professional background.',
      university: {
        period: '2023 — Present',
        degree: 'Computer Systems Engineering',
        school: 'Universidad Autónoma de Aguascalientes',
        details: [
          'Center for Basic Sciences',
          'Currently in 7th semester (2023 Curriculum)',
          'Focus: Software architecture, networks, distributed systems, databases & data engineering',
        ],
      },
      technical: {
        period: 'Graduated',
        degree: 'Computer Equipment Support and Maintenance Technician',
        school: 'High School Education',
        details: [
          'Preventive and corrective hardware diagnostics',
          'Local network configuration',
          'Structured technical support',
        ],
      },
      languagesTitle: 'Languages',
      languages: [
        { name: 'Spanish', level: 'Native', badge: 'C2' },
        { name: 'English', level: 'Intermediate (B1.2 CEFR)', badge: 'B1.2' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Feel free to reach out through any of these channels.',
      github: {
        label: 'GitHub',
        value: 'github.com/tu-usuario',
      },
      linkedin: {
        label: 'LinkedIn',
        value: 'linkedin.com/in/tu-perfil',
      },
      email: {
        label: 'Email',
        value: 'erick@email.com',
      },
      location: {
        label: 'Location',
        value: 'Aguascalientes, Ags., Mexico',
      },
    },
    footer: {
      made: 'Made with',
      by: 'by Erick Calderón',
      rights: 'All rights reserved.',
    },
  },
};
