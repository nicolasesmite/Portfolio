import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUser,
  FaUserGraduate,
  FaUserTie,
  FaCode,
  FaJira,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiVite,
  SiVercel,
  SiMui,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

export const menuItems = [
  {
    id: 1,
    logo: (
      <FaHome
        title="Home"
        color="white"
        size={20}
        className="hover:scale-125"
      />
    ),

    path: "/",
  },
  {
    id: 2,
    logo: (
      <FaUser
        title="About Me"
        color="white"
        size={20}
        className="hover:scale-125"
      />
    ),

    path: "/routes/aboutMe",
  },

  {
    id: 3,
    logo: (
      <FaUserTie
        title="Experience"
        color="white"
        size={20}
        className="hover:scale-125"
      />
    ),

    path: "/routes/experience",
  },
  {
    id: 4,
    logo: (
      <FaCode
        title="Projects"
        color="white"
        size={20}
        className="hover:scale-125"
      />
    ),
    name: "Projects",
    path: "/routes/projects",
  },
  {
    id: 5,
    logo: (
      <FaUserGraduate
        title="Certifications"
        color="white"
        size={20}
        className="hover:scale-125"
      />
    ),

    path: "/routes/certifications",
  },
];

export const languagesAndFrameworks = [
  {
    id: 1,
    logo: <SiReact size={30} className="hover:scale-125" />,
    path: "https://es.react.dev/",
  },
  {
    id: 2,
    logo: <SiJavascript size={30} className="hover:scale-125" />,
    path: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    id: 3,
    logo: <SiTypescript size={30} className="hover:scale-125" />,
    path: "https://www.typescriptlang.org/",
  },
  {
    id: 4,
    logo: <SiNextdotjs size={30} className="hover:scale-125" />,
    path: "https://nextjs.org/",
  },
  {
    id: 5,
    logo: <SiTailwindcss size={30} className="hover:scale-125" />,
    path: "https://tailwindcss.com/",
  },
];

export const tools = [
  {
    id: 1,
    logo: <FaGithub size={30} className="hover:scale-125" />,
    path: "https://github.com/",
  },
  {
    id: 2,
    logo: <SiVite size={30} className="hover:scale-125" />,
    path: "https://vitejs.dev/",
  },
  {
    id: 3,
    logo: <SiVercel size={30} className="hover:scale-125" />,
    path: "https://vercel.com/",
  },
  {
    id: 4,
    logo: <FaJira size={30} className="hover:scale-125" />,
    path: "https://www.atlassian.com/software/jira",
  },
  {
    id: 5,
    logo: <SiMui size={30} className="hover:scale-125" />,
    path: "https://mui.com/",
  },
  {
    id: 6,
    logo: <SiFirebase size={30} className="hover:scale-125" />,
    path: "https://firebase.google.com/",
  },
];

export const experience = {
  jobPosition: "Prosegur Alarmas (Técnico Remoto)",
  jobPeriod: "Enero 2021- Febrero 2024",
  jobTasks: [
    "-Soporte técnico de alarmas interno/externo",
    "-Líder de grupo",
    "-Referente de aplicación corporativa",
    "-Capacitador",
    "-Análisis y escalamiento de incidencias",
    "-Utilización de JIRA",
  ],
};

export const education = [
  {
    id: 1,
    name: "UTU Arias Balparda",
    info: "Bachiller Electro-Mecánica, 2017",
  },

  {
    id: 2,
    name: "Jóvenes a Programar-Ceibal",
    info: "Front-end development, 2022",
  },

  { id: 3, name: "Coderhouse", info: "Javascript , 2022" },

  { id: 4, name: "Coderhouse", info: "React JS, 2023" },
];

export const languages = [
  {
    id: 1,
    language: "Español",
    level: " (Nativo)",
  },
  {
    id: 2,
    language: "Inglés",
    level: " (Avanzado)",
  },
  {
    id: 3,
    language: "Portugués",
    level: " (Intermedio)",
  },
];
