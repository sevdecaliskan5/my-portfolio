import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaReact,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiAxios, SiJest, SiCypress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const generateIcons = () => {
      const iconPositions = [
        {
          icon: <FaHtml5 size={30} className="text-[#e86028]" />,
          name: "HTML",
        },
        {
          icon: <FaCss3Alt size={30} className="text-[#2862e9]" />,
          name: "CSS",
        },
        { icon: <FaSass size={30} className="text-[#c66394]" />, name: "Sass" },
        {
          icon: <FaBootstrap size={30} className="text-[#7c10f2]" />,
          name: "Bootstrap",
        },
        {
          icon: <RiTailwindCssFill size={30} className="text-[#00bcff]" />,
          name: "Tailwind",
        },
        { icon: <FaFigma size={30} className="text-black" />, name: "Figma" },
        {
          icon: <FaReact size={30} className="text-[#77cee1]" />,
          name: "React",
        },
        {
          icon: <SiRedux size={30} className="text-[#8e6bc7]" />,
          name: "Redux",
        },
        {
          icon: <SiAxios size={30} className="text-[#671ddf]" />,
          name: "Axios",
        },
        {
          icon: <FaJsSquare size={30} className="text-yellow-500" />,
          name: "JavaScript",
        },
        {
          icon: <FaGithub size={30} className="text-gray-700" />,
          name: "GitHub",
        },

        { icon: <SiJest size={30} className="text-[#99415a]" />, name: "Jest" },

        {
          icon: <SiCypress size={30} className="text-[#68c0a0]" />,
          name: "Cypress",
        },
      ];

      return iconPositions.map((icon) => ({
        ...icon,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
    };

    setIcons(generateIcons());

    const interval = setInterval(() => {
      setIcons(generateIcons());
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            zIndex: 10,
            transition: "left 8s ease-in-out, top 8s ease-in-out",
            pointerEvents: "none",
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default Skills;
