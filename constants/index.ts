import { Code, GraduationCap, Laptop, Smartphone } from "lucide-react";

export const projects = [
  {
    index: 1,
    title: "Educap",
    description: "This educational mobile application allows students and parents to track absences and sanctions, as well as homework assignments. The app is also accessible to teachers, helping them manage student attendance, add and organize lessons, homework, and many other modules.",
    lien: "https://play.google.com/store/apps/details?id=adn_expertise.educap&hl=fr",
    img: "https://play-lh.googleusercontent.com/PfP4THlC0mF5YVonjtR401TRFStneEDTlqK7ln7k7GQN-jK9-BfehrjHXTbT9Aq4AmgqvHJBTV2oItB1d_Uh=w2560-h1440-rw",
    encours: false,
    githubLink: "",
    skills:[
      "React Native",
      "Nativewind",
      "redux toolkit",
      "git",
      "gitLab",
      "Scrum Methodology"
    ]
  },
  {
    index: 2,
    title: "MAIDE",
    description: "A platform designed for administrators that enables analysis of past and current payer assessments and evidence requirements, guiding clinical trial design and market access strategy throughout the product lifecycle.",
    lien: "https://fedsvc.myaccount.iqvia.com/authenticationendpoint/login.do?client_id=7J3GXYkcCCrRhoyZ6CZjHNvs0J4a&commonAuthCallerPath=%2Foauth2%2Fauthorize&forceAuth=false&passiveAuth=false&redirect_uri=https%3A%2F%2Fback.mai-de.iqvia.com%2Foauth%2Fcallback%2F&response_type=code&scope=openid&tenantDomain=carbon.super&sessionDataKey=2b8c20f9-9f93-4f9b-a802-b8288d3acf34&relyingParty=7J3GXYkcCCrRhoyZ6CZjHNvs0J4a&type=oidc&sp=OIDC-RWS-HEOR-MAIDE&isSaaSApp=false&authenticators=IdentifierExecutor%3ALOCAL",
    img: "https://i0.wp.com/pharmabharat.com/wp-content/uploads/2025/09/Samahita-Research-5.jpg",
    encours: false,
    githubLink: "",
    skills:[
      "NestJS",
      "ReactJS",
      "git",
      "github",
      "Scrum Methodology"
    ]
  },
  {
    index: 3,
    title: "DAILY COMPASS APP",
    description: "An intelligent goal management mobile application that allows you to break down your upcoming goals into tasks, with automatic email notifications sent when a task’s deadline is reached.",
    lien: "https://drive.google.com/file/d/1Q7bSl1-xnul99YIe3EyLTk_QkQ2b_V3V/view?usp=drive_link",
    img: "/DailyCompass.png",
    encours: false,
    githubLink: "https://github.com/MedAmine2221/daily-compass-app",
    skills:[
      "React Native",
      "NestJS",
      "Nativewind",
      "redux toolkit",
      "FireBase",
      "git",
      "github"
    ]
  },
  {
    index: 4,
    title: "DAILY COMPASS APP Management",
    description: "Web application for monitoring the 'DAILY COMPASS APP' mobile application.",
    lien: "",
    img: "",
    encours: true,
    githubLink: "https://github.com/MedAmine2221/daily-compass-web-app-admin",
    skills:[
      "NextJS",
      "FireBase",
      "heroUI",
      "redux toolkit",
      "FireBase",
      "git",
      "github"
    ]

  },
  {
    index: 5,
    title: "QUIZ APP Mobile",
    description: "Mobile application for managing skills and updating CVs.",
    lien: "",
    img: "",
    encours: false,
    githubLink: "https://github.com/MedAmine2221/MobileQuizz",
    skills:[
      "React Native",
      "Laravel",
      "git",
      "github"
    ]
  },
  {
    index: 6,
    title: "QUIZ APP Web",
    description: "Web application for managing skills and updating CVs",
    lien: "",
    img: "",
    encours: false,
    githubLink: "https://github.com/MedAmine2221/FrontQuizApp",
    skills:[
      "ReactJS",
      "Laravel",
      "git",
      "github"
    ]
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
    items: ["Development of a web application for employee and training management."],
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
]

export const formations = [
  {
    index: 2,
    date: "09-2021 — 07-2024",
    title: "National Engineering Diploma in Software Engineering – Specialization: Software Architecture",
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