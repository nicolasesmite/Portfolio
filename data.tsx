import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUser,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

export const menuItems = [
  {
    id: 1,
    logo: <FaHome size={25} className="hover:scale-125" />,
    name: "Home",
  },
  {
    id: 2,
    logo: <FaUser size={25} className="hover:scale-125" />,
    name: "AboutMe",
  },
  {
    id: 3,
    logo: <FaUserGraduate size={25} className="hover:scale-125" />,
    name: "Certifications",
  },
  {
    id: 4,
    logo: <FaUserTie size={25} className="hover:scale-125" />,
    name: "Experience",
  },
];
