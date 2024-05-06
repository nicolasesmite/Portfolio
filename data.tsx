import Image from "next/image";
import jkmImg from "./JaKeMate.png";
import portofolioImg from "./portfolio.png";
import f1 from "./f1.png";
import {
  FaLinkedin,
  FaDownload,
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
  { id: 1, name: "Coderhouse", info: "Javascript , 2022" },

  { id: 2, name: "Coderhouse", info: "React JS, 2023" },
  {
    id: 3,
    name: "UTU Arias Balparda",
    info: "Bachiller Electro-Mecánica, 2017",
  },

  {
    id: 4,
    name: "Jóvenes a Programar-Ceibal",
    info: "Front-end development, 2022",
  },
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

export const projects = [
  {
    id: 1,
    image: (
      <Image
        width={300}
        height={200}
        alt="photo"
        src={jkmImg}
        className=" justify-center mb-3"
      />
    ),
    description:
      "E-commerce creado con React y diseñado con CSS puro. Utilización de Vite, Firebase database y Firebase Auth, Mui y Mercadopago.",
    linkDeploy: "https://ecommerce-nev.vercel.app/",
    linkGit: "https://github.com/nicolasesmite/Ecommerce-NEV",
  },
  {
    id: 2,
    image: (
      <Image
        width={300}
        height={100}
        alt="photo"
        src={portofolioImg}
        className=" justify-center mb-2"
      />
    ),
    description: "Portfolio realizado con Next Js y dise;ado con Tailwind.",
    linkDeploy: "https://ecommerce-nev.vercel.app/",
    linkGit: "https://github.com/nicolasesmite/Portfolio",
  },
  {
    id: 3,
    image: (
      <Image
        width={300}
        height={300}
        alt="photo"
        src={f1}
        className=" justify-center mb-6"
      />
    ),
    description:
      "Historico de Formula 1 y sus competiciones. Desarrollado con React. Consulta a Api.",

    linkGit: "https://github.com/nicolasesmite/F1-anaticos/",
  },
];

export const certifications = [
  {
    path: "https://www.credly.com/badges/60bdceb5-8e7b-4ace-ad21-5aeee15a21d3?source=linked_in_profile",
    name: "Google IT Support Certificate",
  },
  {
    path: "https://www.coursera.org/account/accomplishments/certificate/NP2NYHJZG68B",
    name: "Big Data: el impacto de los datos masivos en la sociedad actual",
  },
  {
    path: "https://www.coursera.org/account/accomplishments/certificate/QF8VWQLEPF6J",
    name: "Introducción a la programación con Python",
  },
  {
    path: "https://www.coursera.org/account/accomplishments/certificate/US4GLR8M86DW",
    name: "The Bits and Bytes of Computer Networking",
  },
];
