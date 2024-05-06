import Image from "next/image";
import jkmImg from "./JaKeMate.png";
import portofolioImg from "./portfolio.png";
import f1 from "./f1.png";
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
        title="Certificates"
        color="white"
        size={20}
        className="hover:scale-125"
      />
    ),

    path: "/routes/certificates",
  },
  {
    id: 5,
    logo: (
      <FaLinkedin
        title="Contact"
        color="white"
        size={20}
        className="hover:scale-125"
      />
    ),

    path: "https://www.linkedin.com/in/nicolas-emanuel-esmite-valdez-b583631a2/",
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
  jobPosition: "Prosegur Alarms (support technician)",
  jobPeriod: "January 2021- February 2024",
  jobTasks: [
    "-Internal and External alarms support",
    "-Teamleader",
    "-Corporate application leader",
    "-Trainer",
    "-Analysis and scaling issues",
    "-Work with JIRA",
  ],
};

export const education = [
  { id: 1, name: "Coderhouse", info: "React JS, 2023" },
  { id: 2, name: "Coderhouse", info: "Javascript , 2022" },
  {
    id: 3,
    name: "Jóvenes a Programar-Ceibal",
    info: "Front-end development, 2022",
  },

  {
    id: 4,
    name: "UTU Arias Balparda",
    info: "Bachelor in electromechanics, 2017",
  },
];

export const languages = [
  {
    id: 1,
    language: "Spanish",
    level: " (Native)",
  },
  {
    id: 2,
    language: "English",
    level: " (Advanced)",
  },
  {
    id: 3,
    language: "Portuguese",
    level: " (Intermediate)",
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
      "E-commerce developed with React and designed with pure CSS. Implementation of Vite, Firebase database and Firebase Auth, Mui and Mercadopago.",
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
    description: "Portfolio developed with Next Js and designed with Tailwind.",
    linkDeploy: "https://nicolasesmite-portfolio.vercel.app/",
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
      "Formula 1 and competition history. Developed with React. Api query.",

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
    name: "Big Data: The impact of big data on today's society",
  },
  {
    path: "https://www.coursera.org/account/accomplishments/certificate/QF8VWQLEPF6J",
    name: "Python introduction",
  },
  {
    path: "https://www.coursera.org/account/accomplishments/certificate/US4GLR8M86DW",
    name: "The Bits and Bytes of Computer Networking",
  },
];
