export const translations = {
  en: {
    // Header
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: "Hi, I'm Ebraam",
      title: 'Full Stack Engineer',
      subtitle: 'Building Digital Experiences',
      description: 'Crafting elegant solutions to complex problems. Specializing in modern web technologies, scalable architecture, and user-centric design.',
      subscriptionBadge: 'Dedicated Monthly Collaboration',
      subscriptionText: 'Subscribe for ongoing development and design support',
      viewWork: 'View My Work',
      getInTouch: 'Get in Touch',
    },
    // Skills Section
    skills: {
      title: 'Technical Skills',
      subtitle: 'A comprehensive toolkit for building modern, scalable applications',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps & Tools',
        aiMobile: 'AI Integrations & Mobile',
      },
    },
    // Projects Section
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of recent work showcasing modern web development and creative problem-solving',
      liveDemo: 'Live Demo',
      code: 'Code',
      viewAllProjects: 'View All Projects on GitHub',
      aira: {
        title: 'AIRA',
        description: 'AI powered extension + dashboard for recruiters. Increase recruiters productivity to scan CV\'s with AI reducing time wasting reading all the candidates CV.',
      },
      prevengo: {
        title: 'PrevenGo',
        description: 'Web app that creates quotes in zero time for freelancers or small business owners. PrevenGo is a quote generator that allows users to create and manage quotes for their clients easily.',
      },
      sancarlo: {
        title: 'San Carlo Traslochi',
        description: 'Next.js website built to improve SEO, performance, and organic traffic through server-side rendering and static generation.',
      },
    },
    // How It Works Section
    howItWorks: {
      badge: 'Simple and transparent process',
      title: 'How the Subscription Model Works',
      subtitle: 'The subscription model is new here in Italy. I\'ll guide you step by step to start working together in a simple and fast way.',
      steps: {
        step1: {
          title: 'Subscribe to a Plan',
          description: 'Choose the plan that best fits your needs and complete the subscription in just a few clicks.',
        },
        step2: {
          title: 'Receive Onboarding Email',
          description: 'After subscribing, you\'ll receive an email with instructions to give me access to your project repositories, messaging app (e.g. Slack), and task management tool (e.g. Linear).',
        },
        step3: {
          title: 'Assign Tasks',
          description: 'Create a development request from your task management app with all the necessary information to complete it. You\'ll receive an estimate before each work session, so you always know how long it will take.',
        },
        step4: {
          title: 'Receive Ready Code',
          description: 'I open a PR in your project repository. I deliver tested code ready for production.',
          badge: 'Unlimited revisions!',
        },
      },
      cta: {
        title: 'Ready to Get Started?',
        description: 'Choose the right plan and start receiving quality code in just a few days',
        button: 'View Available Plans',
      },
    },
    // Services Section
    services: {
      badge: 'Subscription-Based Development',
      title: 'Flexible Pricing Plans',
      subtitle: 'Choose a plan that fits your needs. Scale up or down anytime.',
      mostPopular: 'Most Popular',
      bookCall: 'Book a Call',
      plans: {
        weekly: {
          name: 'Weekly',
          hours: '1 active task at a time',
          description: 'Focused weekly development with clear priorities and fast execution',
          features: [
            'Single prioritized task in progress',
            'Bug fixes or small feature development',
            'Code reviews & refactoring',
            'Async communication',
            'Delivery within the week (scope-dependent)',
          ],
        },
        growth: {
          name: 'Growth',
          hours: 'Up to 2 active tasks in parallel',
          description: 'Continuous development for teams that need momentum and reliability',
          features: [
            'Prioritized backlog management',
            'Feature development & ongoing maintenance',
            'Performance optimization',
            'Technical consulting & architecture support',
            'Weekly sync call',
            'Slack/Discord integration',
          ],
        },
        landing: {
          name: 'Landing Page',
          hours: 'One-time project',
          description: 'Get your startup online with a high-converting landing page',
          features: [
            'Custom design & copywriting',
            'Responsive development',
            'SEO optimization',
            'Analytics integration',
            'Deployment & hosting setup',
          ],
        },
        mvp: {
          name: 'MVP',
          hours: 'Complete product delivery',
          description: 'Launch your product idea fast with a market-ready MVP',
          features: [
            'Product scoping & planning',
            'UI/UX prototype',
            'Full-stack development',
            '1st release deployment',
            'Technical documentation',
          ],
        },
      },
      whySubscription: {
        title: 'Why Subscription-Based Development?',
        benefits: {
          predictable: {
            title: 'Predictable Costs',
            description: 'No surprise invoices. Fixed monthly rate for ongoing development. You pay, I start immediately.',
          },
          fast: {
            title: 'Fast Turnaround',
            description: 'Quick iterations and regular deliveries. Stay agile and competitive.',
          },
          flexible: {
            title: 'Flexible Plans',
            description: 'Scale up or pause anytime. No long-term contracts required.',
          },
        },
      },
    },
    // GDPR & Cookie Consent
    gdpr: {
      bannerTitle: 'Cookie Preferences',
      bannerText: 'This website uses cookies for analytics to improve your experience. No personal data is shared with third parties for advertising. Read our',
      privacyLink: 'Privacy Policy',
      accept: 'Accept',
      reject: 'Reject All',
      privacyTitle: 'Privacy & Cookie Policy',
      privacy: {
        dataController: 'Data Controller',
        dataControllerText: 'Ebraam Saad — Freelance Full Stack Engineer, based in Milan, Italy. For any privacy-related inquiry, you can reach me at the contact details on this website.',
        whatWeCollect: 'What Data We Collect',
        whatWeCollectText: 'When you visit this website, we may collect:',
        collectedItems: [
          'Anonymous usage data via Firebase Analytics (pages visited, session duration, device type)',
          'Information you voluntarily provide through the contact form (name, email, message)',
          'Language preference stored locally in your browser (localStorage)',
        ],
        whyWeCollect: 'Purpose of Data Processing',
        whyWeCollectText: 'Analytics data is used solely to understand how visitors interact with the site and to improve its content and performance. Contact form data is used only to respond to your inquiry.',
        cookies: 'Cookies Used',
        cookiesText: 'This site uses the following cookies:',
        cookieItems: [
          'Firebase Analytics cookies (_ga, _gid) — to collect anonymous usage statistics. Only activated after your explicit consent.',
          'localStorage (language) — to remember your language preference. This is a technical necessity and does not track you.',
        ],
        thirdParty: 'Third-Party Services',
        thirdPartyText: 'We use Firebase (Google) for analytics and hosting. Firebase processes data in accordance with Google\'s privacy policies. No data is sold or shared with third parties for advertising.',
        yourRights: 'Your Rights (GDPR Art. 15–22)',
        yourRightsText: 'Under the GDPR, you have the right to:',
        rightsItems: [
          'Access your personal data',
          'Rectify inaccurate data',
          'Request erasure of your data',
          'Restrict or object to processing',
          'Data portability',
          'Withdraw consent at any time (by clearing cookies or contacting us)',
          'Lodge a complaint with the Italian Data Protection Authority (Garante della Privacy)',
        ],
        retention: 'Data Retention',
        retentionText: 'Analytics data is retained for 14 months. Contact form messages are kept only as long as necessary to respond and are then deleted.',
        contact: 'Contact',
        contactText: 'For privacy requests, contact me using the details in the Contact section of this website.',
        lastUpdated: 'Last updated: April 2026',
      },
    },
    // Contact Section
    contact: {
      title: "Let's Work Together",
      subtitle: 'Have a project in mind? Let\'s discuss how we can collaborate',
      cta: {
        title: 'Schedule a Call',
        description: 'The best way to discuss your project is over a video call. Click below to book a time that works for you.',
        button: 'Book a Call',
      },
      info: {
        title: 'Get in Touch',
        email: 'Email',
        location: 'Location',
        locationValue: 'Milan, Italy',
        connect: 'Connect with Me',
        availability: 'Currently Available',
        availabilityDesc: 'Open to new projects and collaborations',
      },
    },
  },
  it: {
    // Header
    nav: {
      home: 'Home',
      skills: 'Competenze',
      projects: 'Progetti',
      services: 'Servizi',
      contact: 'Contatti',
    },
    // Hero Section
    hero: {
      greeting: 'Ciao, sono Ebraam',
      title: 'Full Stack Engineer',
      subtitle: 'Costruisco Esperienze Digitali',
      description: 'Creo soluzioni eleganti per problemi complessi. Specializzato in tecnologie web moderne, architetture scalabili e design centrato sull\'utente.',
      subscriptionBadge: 'Collaborazione Mensile Dedicata',
      subscriptionText: 'Abbonati per supporto continuo nello sviluppo e nel design',
      viewWork: 'Vedi i Miei Lavori',
      getInTouch: 'Contattami',
    },
    // Skills Section
    skills: {
      title: 'Competenze Tecniche',
      subtitle: 'Un toolkit completo per costruire applicazioni moderne e scalabili',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps & Strumenti',
        aiMobile: 'Integrazioni AI & Mobile',
      },
    },
    // Projects Section
    projects: {
      title: 'Progetti in Evidenza',
      subtitle: 'Una selezione di lavori recenti che mostrano sviluppo web moderno e risoluzione creativa dei problemi',
      liveDemo: 'Demo Live',
      code: 'Codice',
      viewAllProjects: 'Vedi Tutti i Progetti su GitHub',
      aira: {
        title: 'AIRA',
        description: 'Estensione AI + dashboard per recruiter. Aumenta la produttività dei recruiter nello screening dei CV con l\'AI, riducendo il tempo perso nella lettura di tutti i CV dei candidati.',
      },
      prevengo: {
        title: 'PrevenGo',
        description: 'Web app che crea preventivi in tempo zero per freelancer o piccole imprese. PrevenGo è un generatore di preventivi che permette agli utenti di creare e gestire preventivi per i propri clienti facilmente.',
      },
      sancarlo: {
        title: 'San Carlo Traslochi',
        description: 'Sito Next.js costruito per migliorare SEO, performance e traffico organico attraverso server-side rendering e static generation.',
      },
    },
    // How It Works Section
    howItWorks: {
      badge: 'Processo semplice e trasparente',
      title: 'Come Funziona il Modello ad Abbonamento',
      subtitle: 'Il modello ad abbonamento è nuovo qui in Italia. Ti guiderò passo dopo passo per iniziare a lavorare insieme in modo semplice e veloce.',
      steps: {
        step1: {
          title: 'Sottoscrivi un Piano',
          description: 'Scegli il piano che meglio si adatta alle tue esigenze e completa l\'abbonamento in pochi click.',
        },
        step2: {
          title: 'Ricevi l\'Email di Onboarding',
          description: 'Dopo l\'abbonamento, riceverai un\'email con le istruzioni per darmi accesso ai tuoi repository del progetto, all\'app di messaggistica (es. Slack) e allo strumento di gestione task (es. Linear).',
        },
        step3: {
          title: 'Assegna i Task',
          description: 'Crea una richiesta di sviluppo dalla tua app di gestione task con tutte le informazioni necessarie per completarla. Riceverai una stima prima di ogni sessione di lavoro, così saprai sempre quanto tempo ci vorrà.',
        },
        step4: {
          title: 'Ricevi il Codice Pronto',
          description: 'Apro una PR nel repository del tuo progetto. Consegno codice testato e pronto per la produzione.',
          badge: 'Revisioni illimitate!',
        },
      },
      cta: {
        title: 'Pronto per Iniziare?',
        description: 'Scegli il piano giusto e inizia a ricevere codice di qualità in pochi giorni',
        button: 'Vedi i Piani Disponibili',
      },
    },
    // Services Section
    services: {
      badge: 'Sviluppo ad Abbonamento',
      title: 'Piani Tariffari Flessibili',
      subtitle: 'Scegli un piano che si adatta alle tue esigenze. Aumenta o riduci in qualsiasi momento.',
      mostPopular: 'Più Popolare',
      bookCall: 'Prenota una Chiamata',
      plans: {
        weekly: {
          name: 'Settimanale',
          hours: '1 task attivo alla volta',
          description: 'Sviluppo settimanale mirato con priorità chiare ed esecuzione rapida',
          features: [
            'Singolo task prioritario in corso',
            'Bug fix o sviluppo di piccole funzionalità',
            'Code review & refactoring',
            'Comunicazione asincrona',
            'Consegna entro la settimana (dipende dallo scope)',
          ],
        },
        growth: {
          name: 'Growth',
          hours: 'Fino a 2 task attivi in parallelo',
          description: 'Sviluppo continuo per team che hanno bisogno di slancio e affidabilità',
          features: [
            'Gestione backlog prioritizzato',
            'Sviluppo funzionalità e manutenzione continua',
            'Ottimizzazione delle performance',
            'Consulenza tecnica e supporto architetturale',
            'Chiamata di sincronizzazione settimanale',
            'Integrazione Slack/Discord',
          ],
        },
        landing: {
          name: 'Landing Page',
          hours: 'Progetto una tantum',
          description: 'Porta la tua startup online con una landing page ad alta conversione',
          features: [
            'Design personalizzato & copywriting',
            'Sviluppo responsive',
            'Ottimizzazione SEO',
            'Integrazione analytics',
            'Setup deployment e hosting',
          ],
        },
        mvp: {
          name: 'MVP',
          hours: 'Consegna prodotto completa',
          description: 'Lancia velocemente la tua idea di prodotto con un MVP pronto per il mercato',
          features: [
            'Scoping e pianificazione prodotto',
            'Prototipo UI/UX',
            'Sviluppo full-stack',
            'Deployment 1° release',
            'Documentazione tecnica',
          ],
        },
      },
      whySubscription: {
        title: 'Perché lo Sviluppo ad Abbonamento?',
        benefits: {
          predictable: {
            title: 'Costi Prevedibili',
            description: 'Nessuna fattura a sorpresa. Tariffa mensile fissa per lo sviluppo continuo. Tu paghi, io inizio subito.',
          },
          fast: {
            title: 'Consegna Rapida',
            description: 'Iterazioni veloci e consegne regolari. Rimani agile e competitivo.',
          },
          flexible: {
            title: 'Piani Flessibili',
            description: 'Aumenta o metti in pausa in qualsiasi momento. Nessun contratto a lungo termine richiesto.',
          },
        },
      },
    },
    // GDPR & Cookie Consent
    gdpr: {
      bannerTitle: 'Preferenze Cookie',
      bannerText: 'Questo sito utilizza cookie di analisi per migliorare la tua esperienza. Nessun dato personale viene condiviso con terze parti per scopi pubblicitari. Leggi la nostra',
      privacyLink: 'Informativa sulla Privacy',
      accept: 'Accetta',
      reject: 'Rifiuta Tutto',
      privacyTitle: 'Informativa Privacy e Cookie',
      privacy: {
        dataController: 'Titolare del Trattamento',
        dataControllerText: 'Ebraam Saad — Full Stack Engineer Freelance, con sede a Milano, Italia. Per qualsiasi richiesta relativa alla privacy, puoi contattarmi attraverso i recapiti presenti su questo sito.',
        whatWeCollect: 'Quali Dati Raccogliamo',
        whatWeCollectText: 'Quando visiti questo sito, potremmo raccogliere:',
        collectedItems: [
          'Dati anonimi di utilizzo tramite Firebase Analytics (pagine visitate, durata della sessione, tipo di dispositivo)',
          'Informazioni che fornisci volontariamente tramite il modulo di contatto (nome, email, messaggio)',
          'Preferenza lingua memorizzata localmente nel tuo browser (localStorage)',
        ],
        whyWeCollect: 'Finalità del Trattamento',
        whyWeCollectText: 'I dati analitici vengono utilizzati esclusivamente per capire come i visitatori interagiscono con il sito e per migliorarne contenuti e prestazioni. I dati del modulo di contatto sono usati solo per rispondere alla tua richiesta.',
        cookies: 'Cookie Utilizzati',
        cookiesText: 'Questo sito utilizza i seguenti cookie:',
        cookieItems: [
          'Cookie Firebase Analytics (_ga, _gid) — per raccogliere statistiche anonime di utilizzo. Attivati solo dopo il tuo consenso esplicito.',
          'localStorage (language) — per ricordare la tua preferenza di lingua. È una necessità tecnica e non ti traccia.',
        ],
        thirdParty: 'Servizi di Terze Parti',
        thirdPartyText: 'Utilizziamo Firebase (Google) per analytics e hosting. Firebase tratta i dati in conformità con le politiche sulla privacy di Google. Nessun dato viene venduto o condiviso con terze parti per scopi pubblicitari.',
        yourRights: 'I Tuoi Diritti (GDPR Art. 15–22)',
        yourRightsText: 'Ai sensi del GDPR, hai il diritto di:',
        rightsItems: [
          'Accedere ai tuoi dati personali',
          'Rettificare dati inesatti',
          'Richiedere la cancellazione dei tuoi dati',
          'Limitare o opporti al trattamento',
          'Portabilità dei dati',
          'Revocare il consenso in qualsiasi momento (cancellando i cookie o contattandoci)',
          'Presentare un reclamo al Garante per la Protezione dei Dati Personali',
        ],
        retention: 'Conservazione dei Dati',
        retentionText: 'I dati analitici vengono conservati per 14 mesi. I messaggi del modulo di contatto vengono mantenuti solo per il tempo necessario a rispondere e poi cancellati.',
        contact: 'Contatti',
        contactText: 'Per richieste relative alla privacy, contattami utilizzando i recapiti nella sezione Contatti di questo sito.',
        lastUpdated: 'Ultimo aggiornamento: Aprile 2026',
      },
    },
    // Contact Section
    contact: {
      title: 'Lavoriamo Insieme',
      subtitle: 'Hai un progetto in mente? Discutiamo di come possiamo collaborare',
      cta: {
        title: 'Programma una Chiamata',
        description: 'Il modo migliore per discutere del tuo progetto è tramite una videochiamata. Clicca qui sotto per prenotare un orario che funziona per te.',
        button: 'Prenota una Chiamata',
      },
      info: {
        title: 'Mettiti in Contatto',
        email: 'Email',
        location: 'Posizione',
        locationValue: 'Milano, Italia',
        connect: 'Connettiti con Me',
        availability: 'Attualmente Disponibile',
        availabilityDesc: 'Aperto a nuovi progetti e collaborazioni',
      },
    },
  },
};

export const useTranslation = (language) => {
  return translations[language] || translations.en;
};
