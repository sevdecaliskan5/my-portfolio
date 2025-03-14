import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { SiJavascript, SiCss3, SiTailwindcss } from "react-icons/si";
import { WiDaySunny } from "react-icons/wi";
import Skills from "./Skills";

const projects = [
  {
    title: "E-Commerce",
    description:
      "A front-end only e-commerce product listing page, where users can browse and filter products by categories. The app fetches product data from a public API and displays it in a responsive grid layout.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiCss3 size={20} color="#1572B6" /> },
      { icon: <SiTailwindcss size={20} color="#38BDF8" /> },
      { icon: <FaCartPlus size={20} color="#34D399" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },
  {
    title: "PizzaPal",
    description:
      "A React-based pizza order application where users can select pizzas, add toppings, and place an order. The app calculates the total price based on user selections.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { icon: <SiCss3 size={20} color="#1572B6" /> },
      { icon: <SiTailwindcss size={20} color="#38BDF8" /> },
    ],
    link: "https://github.com/sevdecaliskan5/fsweb-s8-challenge-pizza",
    imageUrl: "/images/PizzaPal.png",
  },
  {
    title: "Weather Forecast",
    description:
      "A weather forecast application that provides real-time weather data based on user location. It fetches data from an external API and presents it in an easy-to-read format.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { icon: <SiTailwindcss size={20} color="#38BDF8" /> },
      { icon: <WiDaySunny size={20} color="#FFCC00" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },

  {
    title: "FitTrack",
    description:
      "A fitness tracking app that allows users to log workouts, track progress, and set goals.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { icon: <SiTailwindcss size={20} color="#38BDF8" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },
  {
    title: "QuizMaster",
    description:
      "A quiz application that allows users to answer multiple-choice questions and get their results at the end.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { icon: <SiCss3 size={20} color="#1572B6" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },
  {
    title: "MovieFinder",
    description:
      "An app that allows users to search for movies using the OMDB API and view movie details.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { icon: <SiTailwindcss size={20} color="#38BDF8" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },
  {
    title: "RecipeSleuth",
    description:
      "A recipe search app where users can find recipes using the Edamam API based on ingredients they input.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { icon: <SiTailwindcss size={20} color="#38BDF8" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },
  {
    title: "Blogify",
    description:
      "A front-end blog platform where users can read blog posts and leave comments. The application displays blog posts dynamically and allows users to interact with the content.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiTailwindcss size={20} color="#38BDF8" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },
  {
    title: "ToDoMaster",
    description:
      "A simple to-do list application where users can add, edit, and delete tasks. It uses LocalStorage to persist data even after the browser is closed.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { icon: <SiCss3 size={20} color="#1572B6" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },
  {
    title: "CalcMaster",
    description:
      "A simple calculator app where users can perform basic mathematical operations like addition, subtraction, multiplication, and division. It provides an intuitive UI and real-time calculations.",
    technologies: [
      { icon: <FaReact size={20} color="#61DBFB" /> },
      { icon: <SiCss3 size={20} color="#1572B6" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
    ],
    link: "https://github.com/sevdecaliskan5m",
    imageUrl: "",
  },
  {
    title: "WeatherWatch",
    description:
      "A static weather application that shows weather information for a fixed location using the OpenWeatherMap API. It fetches data and displays it on the page.",
    technologies: [
      { icon: <SiCss3 size={20} color="#1572B6" /> },
      { icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { icon: <WiDaySunny size={20} color="#FFCC00" /> },
    ],
    link: "https://github.com/sevdecaliskan5",
    imageUrl: "",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 border-spacing-4 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 cursor-pointer relative"
        >
          <div className="relative group">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded-md group-hover:opacity-100 opacity-0 transition-opacity duration-300"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gray-800 bg-opacity-80 text-white rounded-md group-hover:opacity-0 opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="flex  gap-2 text-sm py-1 px-2 rounded-full "
                  >
                    {tech.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex justify-end gap-2 mt-4"
          >
            <FaGithub size={20} />
          </a>
        </div>
      ))}
      <Skills />
    </div>
  );
};

export default Projects;
