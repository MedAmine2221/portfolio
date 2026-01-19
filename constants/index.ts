import { Code, GraduationCap, Laptop, Smartphone } from "lucide-react";

import { siteConfig } from "@/config/site";

export const projects = [
  {
    index: 1,
    title: "Educap",
    description:
      "This educational mobile application allows students and parents to track absences and sanctions, as well as homework assignments. The app is also accessible to teachers, helping them manage student attendance, add and organize lessons, homework, and many other modules.",
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
    description:
      "A platform designed for administrators that enables analysis of past and current payer assessments and evidence requirements, guiding clinical trial design and market access strategy throughout the product lifecycle.",
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
    description:
      "Mohamed Amine's Portfolio Management App helps me manage all my clients who contact me through my portfolio. I can organize my appointments with a calendar, create Google Meet links for meetings, and automatically send confirmation, cancellation, or rescheduling emails. This app makes managing my schedule and client interactions much easier and more efficient.",
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
    description:
      "An intelligent goal management mobile application that allows you to break down your upcoming goals into tasks, with automatic email notifications sent when a task’s deadline is reached.",
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
    description:
      "Web application for monitoring the 'DAILY COMPASS APP' mobile application.",
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
    description: "Mobile application for managing skills and updating CVs.",
    lien: "",
    img: ["/quizzAppMobile.png", "/QuzzAppMobile2.png"],
    encours: false,
    githubLink: "https://github.com/MedAmine2221/MobileQuizz",
    skills: ["React Native", "Laravel", "git", "github"],
  },
  {
    index: 7,
    title: "QUIZ APP Web",
    description: "Web application for managing skills and updating CVs",
    lien: "",
    img: ["/quizzAppWeb.png", "/QuizzAppWeb2.png", "/QuizzAppWeb3.png"],
    encours: false,
    githubLink: "https://github.com/MedAmine2221/FrontQuizApp",
    skills: ["ReactJS", "Laravel", "git", "github"],
  },
];
export const experiences = [
  {
    date: "09-2025 — Present",
    title: "Part-time Lecturer",
    company: "ISSAT SO",
    location: "Sousse",
    badge: "CURRENT",
    icon: GraduationCap,
    gradient: "from-purple-500 to-indigo-600",
    items: [
      "Supervision of practical exercises and student projects (Programming, OOP).",
      "Facilitation of sessions focused on problem-solving and hands-on application",
      "Academic monitoring and student support",
    ],
    skills: ["JAVA", "POO"],
  },
  {
    date: "07-2024 — 07-2025",
    title: "Full Stack Developer",
    company: "WAIALYS DEV",
    location: "Sahloul",
    icon: Code,
    gradient: "from-pink-500 to-rose-600",
    items: [
      "Contributed to the development of SAAS MAI DE, a powerful SaaS platform that streamlines payer assessment analysis and supports clinical trial design and market access strategy across the product lifecycle.",
      "Participated in the development of components for Educap, an educational mobile application.",
      "Developed DentalFlow, a medical mobile application for a dental center, focusing on dental prosthetics.",
      "Developed Waialys Med, a medical mobile application.",
    ],
    skills: ["NextJS", "NestJS", "React Native", "Git", "Scrum"],
  },
  {
    date: "02-2024 — 06-2024",
    title: "Final-year engineering internship full stack developer",
    company: "WAIALYS DEV",
    location: "Sahloul",
    icon: Laptop,
    gradient: "from-cyan-500 to-blue-600",
    items: ["Development of a comprehensive business management application."],
    skills: ["NextJS", "NestJS", "Git", "Scrum"],
  },
  {
    date: "08-2023",
    title: "Summer internship Mobile Developer",
    company: "Relead",
    location: "Technopole Sousse",
    icon: Smartphone,
    gradient: "from-amber-500 to-orange-600",
    items: ["Development of a mobile application for employee management"],
    skills: ["Flask", "Flutter"],
  },
  {
    date: "08-2023",
    title: "Summer internship SpringBoot Developer",
    company: "Educanet",
    location: "Sahloul",
    icon: "",
    gradient: "from-amber-500 to-orange-600",
    items: [
      "Development of a web application for employee and training management.",
    ],
    skills: ["SpringBoot MVC", "HTML", "CSS", "Bootstrap"],
  },
  {
    date: "02-2021 — 05-2021",
    title: "Bachelor's Final Project",
    company: "Enova Robotics",
    location: "Tunisia",
    icon: Smartphone,
    gradient: "from-emerald-500 to-teal-600",
    items: ["Designed and developed a robot control application."],
    skills: ["Flask", "React Native"],
  },
];

export const formations = [
  {
    index: 2,
    date: "09-2021 — 07-2024",
    title:
      "National Engineering Diploma in Software Engineering – Specialization: Software Architecture",
    company: "ISSAT SO",
    location: "Sousse",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    index: 1,
    date: "09-2018 — 06-2021",
    title: "Applied Bachelor's Degree in Industrial Computing",
    company: "ISSAT SO",
    location: "Sousse",
    gradient: "from-pink-500 to-rose-600",
  },
];

export const recommendations = [
  {
    username: "BOUSSADIA Marami",
    role: "Responsable RH",
    recomm: `J'ai eu le plaisir d'accompagner Mohamed Amine Lazreg lors de son stage chez Waialys Group, puis de le voir évoluer en tant que collaborateur au sein de notre équipe. Dès le début, il a fait preuve d'un grand professionnalisme, d'une capacité d'adaptation remarquable et d'un véritable engagement dans ses missions. Son sérieux, sa rigueur et sa capacité à travailler aussi bien de manière autonome qu'en équipe ont fortement contribué à la réussite de plusieurs projets.`,
    link: "https://www.linkedin.com/in/marami-boussadia-/",
  },
  {
    username: "Emna Ben fraj",
    role: "Business Developer",
    recomm: `J’ai eu l’occasion de travailler avec Mohamed amine et j’ai beaucoup apprécié sa rigueur, ses compétences techniques et son esprit d’équipe. Toujours disponible pour aider et partager ses connaissances, il a grandement contribué à la réussite de nos projets. Je le recommande vivement pour tout poste de développement.`,
    link: "https://www.linkedin.com/in/ben-fraj-emna/",
  },
  {
    username: "Hamza Khlifi",
    role: "Tech Lead",
    recomm: `J'ai eu le plaisir de collaborer avec Mohamed Amine depuis son stage de fin d'études (PFE) au sein de notre équipe. Ses compétences techniques et son engagement lui ont permis d'être recruté en tant que développeur JavaScript après son stage. Il a contribué de manière significative au développement de l'application mobile de notre projet principal.`,
    link: "https://www.linkedin.com/in/hamza-khlifi-a8577114b/",
  },
  {
    username: "Bourawi Khlifi",
    role: "Scrum Master",
    recomm: `J'ai eu l'occasion de suivre le parcours de Mohamed Amine depuis son intégration en tant que stagiaire PFE jusqu'à son poste actuel de développeur JavaScript. Grâce à sa motivation et à ses compétences techniques, il a rapidement su gagner la confiance de l'équipe. Toujours impliqué et orienté résultats, Mohamed Amine se distingue par sa rigueur, sa curiosité et son excellent esprit collaboratif.`,
    link: "https://www.linkedin.com/in/bouraoui-khlifi/",
  },
  {
    username: "Boufares Mohamed Amine",
    role: "Front-End Developer",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFdADQvXjN6nA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716299926231?e=1769040000&v=beta&t=Nn5E09Dr-gxPjB_ObAP0DzOQGlJkzTaRNZ3A4g5iATE",
    recomm: `J’ai eu l’occasion de travailler avec Mohamed Amine sur plusieurs projets frontend. Il fait preuve d’une grande volonté d’apprendre et d’une attitude positive et collaborative au sein de l’équipe. Bien qu’il soit encore en développement de ses compétences techniques en React, Next.js et TypeScript, il aborde les défis avec dévouement et volonté de progresser. Avec plus d’expérience, il a le potentiel de devenir un solide développeur frontend.`,
    link: "https://www.linkedin.com/in/mohamed-amine-boufares/",
  },
  {
    username: "Chamseddine Bouhouch",
    role: "Tech Lead",
    recomm: `I had the pleasure of working with Mohamed Amine, who consistently showed great potential and a strong eagerness to learn new skills. He contributed effectively to multiple frontend and mobile projects, bringing both technical value and fresh perspectives. Beyond his skills, he’s a genuinely good person who integrated seamlessly into the team and built strong relationships with colleagues.`,
    link: "https://www.linkedin.com/in/chamseddine-bouhouch/",
  },
  {
    username: "Taha Meskini",
    role: "Software Engineer",
    recomm: `I’ve had the opportunity to work alongside Amine since the beginning of our internship, and it has been a great experience. As a mobile developer, he consistently showed strong technical skills, dedication, and a real passion for building high-quality applications.
             Amine is a hardworking teammate who always goes the extra mile to solve problems and deliver results on time. His collaborative spirit and willingness to share knowledge made our teamwork both smooth and enjoyable.
             I highly recommend Amine for any role that requires a motivated and skilled mobile developer.`,
    link: "https://www.linkedin.com/in/taha-meskini-488ab9190/",
  },
];

export const STATIC_KNOWLEDGE = {
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
