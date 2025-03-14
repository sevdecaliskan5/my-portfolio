import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import Terminal from "./components/Terminal";
import ThemeToggle from "./components/ThemeToggle";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import WorkExperince from "./components/WorkExperience";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="min-h-screen bg-gray-900 text-white p-56 flex flex-col items-center relative dark:bg-[#F5F5F5] dark:text-gray-600 transition-colors duration-300">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center md:flex-row gap-x-60 max-w-max-sm ">
                <ProfileCard />
                <Terminal />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="flex justify-center min-h-screen w-9/12 mx-auto p-4">
                <About />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="flex justify-center min-h-screen w-9/12 mx-auto p-4">
                <Projects />
              </div>
            }
          />
          <Route
            path="/education"
            element={
              <div className="flex justify-center min-h-screen w-9/12 mx-auto p-4">
                <Education />
              </div>
            }
          />
          <Route
            path="/workexperince"
            element={
              <div className="flex justify-center min-h-screen w-9/12 mx-auto p-4">
                <WorkExperince />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="flex justify-center min-h-screen w-9/12 mx-auto p-4">
                <Contact />
              </div>
            }
          />
        </Routes>
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </Router>
  );
}

export default App;
