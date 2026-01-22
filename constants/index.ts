import { Code, GraduationCap, Laptop, Smartphone } from "lucide-react";

export const projects = (t: any)=> [
  {
    index: 1,
    title: "Educap",
    description: t("projects.0.description"),
    lien: "https://play.google.com/store/apps/details?id=adn_expertise.educap&hl=fr",
    img: ["/educap0.png", "/educap1.png"],
    encours: false,
    githubLink: "",
    skills: [
      "React Native",
      "Nativewind",
      "redux toolkit",
      "git",
      "gitLab",
      "Scrum Methodology",
    ],
  },
  {
    index: 2,
    title: "MAIDE",
    description: t("projects.1.description"),
    lien: "https://fedsvc.myaccount.iqvia.com/authenticationendpoint/login.do?client_id=7J3GXYkcCCrRhoyZ6CZjHNvs0J4a&commonAuthCallerPath=%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=https%3A%2F%2Fback.mai-de.iqvia.com%2Foauth%2Fcallback%2F&response_type=code&scope=openid&tenantDomain=carbon.super&sessionDataKey=2b8c20f9-9f93-4f9b-a802-b8288d3acf34&relyingParty=7J3GXYkcCCrRhoyZ6CZjHNvs0J4a&type=oidc&sp=OIDC-RWS-HEOR-MAIDE&isSaaSApp=false&authenticators=IdentifierExecutor%3ALOCAL",
    img: [
      "https://i0.wp.com/pharmabharat.com/wp-content/uploads/2025/09/Samahita-Research-5.jpg",
    ],
    encours: false,
    githubLink: "",
    skills: ["NestJS", "ReactJS", "git", "github", "Scrum Methodology"],
  },
  {
    index: 3,
    title: "Mohamed Amine's Portfolio Managment APP",
    description: t("projects.2.description"),
    lien: "https://portfolio-management-app-ten.vercel.app/",
    img: [
      "/porfolioAppManagement.png",
      "/porfolioAppManagement2.png",
      "/porfolioAppManagement3.png",
      "/porfolioAppManagement4.png",
    ],
    encours: false,
    githubLink: "https://github.com/MedAmine2221/portfolio-management-app",
    skills: [
      "Next JS",
      "FireBase",
      "google API",
      "TailWind",
      "redux toolkit",
      "git",
      "gitHub",
    ],
  },
  {
    index: 4,
    title: "DAILY COMPASS APP",
    description: t("projects.3.description"),
    lien: "https://drive.google.com/file/d/1gzfmAVGVBBGpCuQR5eeoDEGn4fpWpS2Z/view?usp=sharing",
    img: [
      "/DailyCompassApp.png",
      "/DailyCompass.png",
      "/DailyCompass2.png",
      "/DailyCompass3.png",
    ],
    encours: false,
    githubLink: "https://github.com/MedAmine2221/daily-compass-app",
    skills: [
      "React Native",
      "NestJS",
      "Nativewind",
      "redux toolkit",
      "FireBase",
      "git",
      "github",
    ],
  },
  {
    index: 5,
    title: "DAILY COMPASS APP Management",
    description: t("projects.4.description"),
    lien: "",
    img: ["/inProgress.png"],
    encours: true,
    githubLink: "https://github.com/MedAmine2221/daily-compass-web-app-admin",
    skills: [
      "NextJS",
      "FireBase",
      "heroUI",
      "redux toolkit",
      "FireBase",
      "git",
      "github",
    ],
  },
  {
    index: 6,
    title: "QUIZ APP Mobile",
    description: t("projects.5.description"),
    lien: "",
    img: ["/quizzAppMobile.png", "/QuzzAppMobile2.png"],
    encours: false,
    githubLink: "https://github.com/MedAmine2221/MobileQuizz",
    skills: ["React Native", "Laravel", "git", "github"],
  },
  {
    index: 7,
    title: "QUIZ APP Web",
    description: t("projects.6.description"),
    lien: "",
    img: ["/quizzAppWeb.png", "/QuizzAppWeb2.png", "/QuizzAppWeb3.png"],
    encours: false,
    githubLink: "https://github.com/MedAmine2221/FrontQuizApp",
    skills: ["ReactJS", "Laravel", "git", "github"],
  },
];
export const experiences = (t: any) => [
  {
    date: t("experiences.0.date"),
    title: t("experiences.0.title"),
    company: "ISSAT SO",
    location: "Sousse",
    badge: t("experiences.0.badge"),
    icon: GraduationCap,
    gradient: "from-purple-500 to-indigo-600",
    items: [
      t("experiences.0.items.0"),
      t("experiences.0.items.1"),
      t("experiences.0.items.2"),
    ],
    skills: ["JAVA", "POO"],
  },
  {
    date: "07-2024 — 07-2025",
    title: t("experiences.1.title"),
    company: "WAIALYS DEV",
    location: "Sahloul",
    icon: Code,
    gradient: "from-pink-500 to-rose-600",
    items: [
      t("experiences.1.items.0"),
      t("experiences.1.items.1"),
      t("experiences.1.items.2"),
      t("experiences.1.items.3"),
    ],
    skills: ["NextJS", "NestJS", "React Native", "Git", "Scrum"],
  },
  {
    date: "02-2024 — 06-2024",
    title: t("experiences.2.title"),
    company: "WAIALYS DEV",
    location: "Sahloul",
    icon: Laptop,
    gradient: "from-cyan-500 to-blue-600",
    items: [t("experiences.2.items.0")],
    skills: ["NextJS", "NestJS", "Git", "Scrum"],
  },
  {
    date: "08-2023",
    title: t("experiences.3.title"),
    company: "Relead",
    location: "Technopole Sousse",
    icon: Smartphone,
    gradient: "from-amber-500 to-orange-600",
    items: [t("experiences.3.items.0")],
    skills: ["Flask", "Flutter"],
  },
  {
    date: "08-2023",
    title: t("experiences.4.title"),
    company: "Educanet",
    location: "Sahloul",
    icon: "",
    gradient: "from-amber-500 to-orange-600",
    items: [t("experiences.4.items.0")],
    skills: ["SpringBoot MVC", "HTML", "CSS", "Bootstrap"],
  },
  {
    date: "02-2021 — 05-2021",
    title: t("experiences.5.title"),
    company: "Enova Robotics",
    location: "Tunisia",
    icon: Smartphone,
    gradient: "from-emerald-500 to-teal-600",
    items: [t("experiences.5.items.0")],
    skills: ["Flask", "React Native"],
  },
];

export const formations = (t: any) => [
  {
    index: 2,
    date: "09-2021 — 07-2024",
    title: t("formations.title_2"),
    company: "ISSAT SO",
    location: "Sousse",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    index: 1,
    date: "09-2018 — 06-2021",
    title: t("formations.title_1"),
    company: "ISSAT SO",
    location: "Sousse",
    gradient: "from-pink-500 to-rose-600",
  },
];

export const recommendations = (t: any) => [
  {
    username: "BOUSSADIA Marami",
    role: "Responsable RH",
    recomm: t("recomm.BOUSSADIA_Marami"),
    link: "https://www.linkedin.com/in/marami-boussadia-/",
  },
  {
    username: "Emna Ben fraj",
    role: "Business Developer",
    recomm: t("recomm.Emna_Ben_fraj"),
    link: "https://www.linkedin.com/in/ben-fraj-emna/",
  },
  {
    username: "Hamza Khlifi",
    role: "Tech Lead",
    recomm: t("recomm.Hamza_Khlifi"),
    link: "https://www.linkedin.com/in/hamza-khlifi-a8577114b/",
  },
  {
    username: "Bourawi Khlifi",
    role: "Scrum Master",
    recomm: t("recomm.Bourawi_Khlifi"),
    link: "https://www.linkedin.com/in/bouraoui-khlifi/",
  },
  {
    username: "Boufares Mohamed Amine",
    role: "Front-End Developer",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFdADQvXjN6nA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716299926231?e=1769040000&v=beta&t=Nn5E09Dr-gxPjB_ObAP0DzOQGlJkzTaRNZ3A4g5iATE",
    recomm: t("recomm.Boufares_Mohamed_Amine"),
    link: "https://www.linkedin.com/in/mohamed-amine-boufares/",
  },
  {
    username: "Chamseddine Bouhouch",
    role: "Tech Lead",
    recomm: t("recomm.Chamseddine_Bouhouch"),
    link: "https://www.linkedin.com/in/chamseddine-bouhouch/",
  },
  {
    username: "Taha Meskini",
    role: "Software Engineer",
    recomm: t("recomm.Taha_Meskini"),
    link: "https://www.linkedin.com/in/taha-meskini-488ab9190/",
  },
];

export const STATIC_KNOWLEDGE = (siteConfig: any) => {
  return {
    developer: {
      name: "Mohamed Amine LAZREG",
      role: "Ingénieur informatique – Enseignant vacataire",
      contact: {
        email: "lazregamine258@gmail.com",
        phone: "+216 53 739 484",
        linkedin: siteConfig.links.linkedIn,
        github: siteConfig.links.github,
        facebook: siteConfig.links.facebook,
        instagram: siteConfig.links.instagram,
      },
      cv_summary: `Ingénieur en informatique et enseignant vacataire spécialisé dans les technologies web et mobiles. Expé-
                rience dans le développement d’applications réelles en entreprise et dans l’accompagnement d’étudiants
                sur les concepts fondamentaux : programmation orientée objet, développement frontend, méthodologies
                agiles et bonnes pratiques. Particulier intérêt pour la pédagogie active, la clarté de transmission et la
                création de supports structurés.`,
      skills: [
        "React.js, Next.js, Nest.js, Spring Boot, Flask, Laravel",
        "React Native, Flutter",
        "Java, JavaScript, TypeScript, Python, PHP",
        "MySQL, PostgreSQL",
        "Scrum, UML",
        "Git, Linux",
      ],
      experience: [
        `07/2024 – 07/2025 Développeur FullStack JS – Waialys DEV
        Participation au développement d’applications web et mobiles : Next.js, Nest.js,
        React Native.
        Collaboration avec des équipes pluridisciplinaires (Scrum).`,
        `02/2024 – 06/2024 Stage de fin d’études d’ingénieur – Waialys DEV
        Développement d’un outil interne de gestion (NestJS / NextJS).
        Initiation à la planification de sprints et aux revues de code.`,
        `08/2023 – 08/2023Stage d’été – Relead
        Développement mobile pour la gestion des employés et projets (Flutter / Flask).`,
        `08/2022 – 08/2022Stage d’été – Educanet Tunisie
        Application de gestion et formation des employés (Spring Boot MVC).`,
        `02/2021 – 05/2021Projet de fin d’études Licence – Enova Robotics
            Développement mobile (React Native) et backend (Flask).`,
      ],
      formation: [
        "2021 – 2024 Diplôme National d’Ingénieur en Informatique – ISSAT Sousse",
        "2018 – 2021 Licence en Informatique Industrielle – ISSAT Sousse",
        "2018 Baccalauréat en Sciences Expérimentales",
      ],
      projet: [
        {
          name: "Machine Learning",
          description:
            "détection d’objets avec TensorFlow, prédiction de prix immobiliers.",
        },
        {
          name: "Plateforme web/mobile de quiz et certification",
          description:
            "accessibilité pour utilisateurs malvoyants, certifications vérifiables, forum intégré. Web : React.js — Mobile : React Native — Backend : Laravel.",
        },
        {
          name: "to do mobile app",
          description:
            "Application de gestion des tâches qui utilise l'IA pour proposer une fragmentation des objectifs en tâches prioritaires",
        },
      ],
      langues: ["Français", "Anglais", "Arabe"],
      cv_file: siteConfig.links.cv,
    },
  };
};
