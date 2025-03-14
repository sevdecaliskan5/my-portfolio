import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="navbar p-4 fixed top-0 w-full z-10">
      <ul className="flex justify-end gap-8">
        <li>
          <Link
            to="/"
            className="text-gray-300 tracking-wider text-lg hover:text-gray-400"
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link
            to="/about"
            className="text-gray-300 tracking-wider text-lg hover:text-gray-400"
          >
            About
          </Link>
        </li> */}
        <li>
          <Link
            to="/projects"
            className="text-gray-300 tracking-wider text-lg hover:text-gray-400"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            className="text-gray-300 tracking-wider text-lg hover:text-gray-400"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="/workexperince"
            className="text-gray-300 tracking-wider text-lg hover:text-gray-400"
          >
            Work Experince
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-300 tracking-wider text-lg hover:text-gray-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
