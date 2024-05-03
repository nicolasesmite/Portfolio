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
    logo: <FaHome color="white" size={20} className="hover:scale-125" />,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    logo: <FaUser color="white" size={20} className="hover:scale-125" />,
    name: "AboutMe",
    path: "/routes/aboutMe",
  },

  {
    id: 3,
    logo: <FaUserTie color="white" size={20} className="hover:scale-125" />,
    name: "Experience",
    path: "/routes/experience",
  },
  {
    id: 4,
    logo: <FaCode color="white" size={20} className="hover:scale-125" />,
    name: "Projects",
    path: "/routes/projects",
  },
  {
    id: 5,
    logo: (
      <FaUserGraduate color="white" size={20} className="hover:scale-125" />
    ),
    name: "Certifications",
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
