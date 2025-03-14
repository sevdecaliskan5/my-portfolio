import React from "react";
import "../index.css";
import profileImage from "../img/image0.jpeg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Skills from "./Skills";

const ProfileCard = () => {
  return (
    <div className="">
      <div className="flex items-center gap-6 p-6 rounded-[12px]">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-1"
        />

        <div>
          <h1 className="text-5xl font-bold text-yellow-400 mb-3">
            Sevde Çalışkan
          </h1>
          <h2 className="text-3xl font-bold">
            Jr. Front-End Developer <span className="text-green-400"></span>
          </h2>
          <p className="text-gray-400 leading-5 tracking-wider max-w-md mt-2">
            I aim to create aesthetic and functional designs using modern web
            technologies. I enjoy crafting digital experiences that users can
            interact with and engage in. I make sure to secure my projects with
            tests to achieve the best results.
          </p>

          <div className="mt-4 flex gap-4">
            <NavLink to="/projects">
              <button className="bg-green-500 px-4 py-2 rounded-md text-white font-medium flex items-center gap-2 hover:bg-green-600 transition hover:scale-105">
                My Projects <FaArrowRight />
              </button>
            </NavLink>
            <NavLink to="/contact">
              <button className="bg-gray-700 px-4 py-2 rounded-md text-white font-medium flex items-center gap-2 hover:bg-gray-600 transition hover:scale-105">
                Get in Touch
              </button>
            </NavLink>
          </div>

          <div className="flex gap-4 mt-6 text-2xl text-gray-400">
            <a
              href="https://linkedin.com/in/sevdecaliskan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sevdecaliskan5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/sevdecaliskan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:ssevdecaliskan@gmail.com"
              className="hover:text-red-400 transition"
            >
              <IoIosMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
