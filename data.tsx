import path from "path";
import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUser,
  FaUserGraduate,
  FaUserTie,
  FaCode,
} from "react-icons/fa";

export const menuItems = [
  {
    id: 1,
    logo: <FaHome color="white" size={25} className="hover:scale-125" />,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    logo: <FaUser color="white" size={25} className="hover:scale-125" />,
    name: "AboutMe",
    path: "/aboutMe",
  },

  {
    id: 3,
    logo: <FaUserTie color="white" size={25} className="hover:scale-125" />,
    name: "Experience",
    path: "/experience",
  },
  {
    id: 4,
    logo: <FaCode color="white" size={25} className="hover:scale-125" />,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    logo: (
      <FaUserGraduate color="white" size={25} className="hover:scale-125" />
    ),
    name: "Certifications",
    path: "/certifications",
  },
];
