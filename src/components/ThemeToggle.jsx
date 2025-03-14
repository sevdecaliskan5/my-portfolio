import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") ?? "light"
  );

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-400 transition duration-300"
    >
      {darkMode === "dark" ? (
        <FiSun className="text-yellow-500" size={24} />
      ) : (
        <FiMoon className="text-gray-100" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
