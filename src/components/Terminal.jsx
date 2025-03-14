import React, { useState, useEffect } from "react";
import "../index.css";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const commands = {
    quote: () => [
      <p className="text-gray-300 text-lg font-mono" key="quote">
        {loading ? "Loading..." : `"${quote}"`}
      </p>,
    ],

    contact: () => [
      <ul className="text-gray-400 mt-2 text-sm font-mono" key="contact-list">
        <li className="font-mono">📧 Email: ssevdecaliskan@gmail.com</li>
        <li className="font-mono">🔗 GitHub: github.com/sevdecaliskan5</li>
        <li className="font-mono">
          🔗 LinkedIn: linkedin.com/in/sevdecaliskan
        </li>
      </ul>,
    ],
    help: () => [
      <p className="text-gray-300 text-lg font-mono " key="help-header">
        Available commands:
      </p>,
      <ul className="text-gray-400 mt-2 text-sm font-mono " key="help-list">
        <li className="font-mono">
          ❓ <b>help</b> → Show available commands
        </li>
        <li className="font-mono">
          🧹 <b>clear</b> → Clear the terminal
        </li>
        <li className="font-mono">
          👤 <b>about</b> → Get information about me
        </li>

        <li className="font-mono">
          🛠 <b>skills</b> → List my technical skills
        </li>
        <li className="font-mono">
          📂 <b>projects</b> → Show my projects
        </li>
        <li className="font-mono">
          📩 <b>contact</b> → See my contact details
        </li>
        <li className="font-mono">
          💡 <b>quote</b> → Get a random motivational quote
        </li>
      </ul>,
    ],
    clear: () => [],
    about: () => [
      <p className="text-gray-300 text-2xl font-mono" key="about-title">
        Hello! I'm <b>Sevde</b>.
      </p>,
      <p
        className="text-gray-400 text-lg font-mono mt-2"
        key="about-description"
      >
        I was born in 1996 in Izmir and have a degree in Civil Engineering. My
        passion for design and technology led me to Front-End development, where
        I focus on enhancing my skills. I continuously improve myself through
        both independent learning and various courses in software development. I
        build user-friendly designs using Front-End languages and technologies
        like React and TailwindCSS. Learning new technologies and applying them
        in my projects is something I enjoy.
      </p>,

      <p className="text-gray-400 text-lg font-mono mt-2" key="about-goal">
        🎯 My goal is to create user-friendly, unique, aesthetic, and functional
        projects using web technologies.
      </p>,
    ],
    skills: () => [
      <p className="text-gray-300 text-lg font-mono" key="skills-header">
        My Technical Skills:
      </p>,
      <p
        className="text-gray-400 text-sm font-mono mt-4"
        key="front-end-header"
      >
        <b className="font-mono">Front-End Development:</b>
      </p>,
      <ul className="text-gray-400 mt-2 text-sm font-mono" key="front-end-list">
        <li className="font-mono">⚡ HTML, CSS/SCSS, JavaScript</li>
        <li className="font-mono">⚛️ React.js, Redux, Hooks, Context API</li>
        <li className="font-mono">📦 Axios, Yup</li>
        <li className="font-mono">🎨 Tailwind CSS, Bootstrap</li>
      </ul>,
      <p className="text-gray-400 text-sm font-mono mt-4" key="testing-header">
        <b className="font-mono">Testing Tools:</b>
      </p>,
      <ul className="text-gray-400 mt-2 text-sm font-mono" key="testing-list">
        <li className="font-mono">🛠 Cypress, Jest</li>
      </ul>,
      <p
        className="text-gray-400 text-sm font-mono mt-4"
        key="additional-header"
      >
        <b className="font-mono">Additional Skills:</b>
      </p>,
      <ul
        className="text-gray-400 mt-2 text-sm font-mono"
        key="additional-list"
      >
        <li className="font-mono">💻 Git, GitHub</li>
        <li className="font-mono">🔧 Algorithms, Problem Solving</li>
        <li className="font-mono">🎨 Figma</li>
      </ul>,
    ],
    projects: () => [
      <p
        className="text-gray-300 text-l font-mono mt-2"
        key="project-title-ecommerce"
      >
        🛒 <b className="font-mono">E-Commerce</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-ecommerce"
      >
        <li className="font-mono">
          - Front-end only e-commerce product listing page
        </li>
        <li className="font-mono">- Product filtering by categories</li>
        <li className="font-mono">- Fetching product data from a public API</li>
        <li className="font-mono">
          - Responsive grid layout for product display
        </li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-pizzapal"
      >
        🍕 <b className="font-mono">PizzaPal</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-pizzapal"
      >
        <li className="font-mono">- SPA design with React</li>
        <li className="font-mono">
          - State management with (useState, useReducer)
        </li>
        <li className="font-mono">
          - Dynamic form components and error handling mechanisms
        </li>
        <li className="font-mono">
          - Pizza menu and topping options with API integration
        </li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-weather"
      >
        🌦️ <b className="font-mono">Weather Forecast</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-weather"
      >
        <li className="font-mono">
          - Fetch weather data using the OpenWeatherMap API
        </li>
        <li className="font-mono">
          - Asynchronous data management with React Hooks (useState, useEffect)
        </li>
        <li className="font-mono">- Responsive design using Tailwind CSS</li>
        <li className="font-mono">- Dynamic city search functionality</li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-calculator"
      >
        🔢 <b className="font-mono">CalcMaster</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-calculator"
      >
        <li className="font-mono">
          - Created React components for basic arithmetic operations
        </li>
        <li className="font-mono">
          - UI state management and dynamic calculation of operations
        </li>
        <li className="font-mono">
          - Implementation of calculation algorithms with JavaScript
        </li>
        <li className="font-mono">
          - Enhanced user interaction with CSS animations
        </li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-fittrack"
      >
        🏋️‍♀️ <b className="font-mono">FitTrack</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-fittrack"
      >
        <li className="font-mono">
          - Fitness tracking app for logging workouts and tracking progress
        </li>
        <li className="font-mono">
          - Users can set fitness goals and monitor achievements
        </li>
        <li className="font-mono">
          - Data management using React state and hooks
        </li>
        <li className="font-mono">- Responsive design with Tailwind CSS</li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-quizmaster"
      >
        🧠 <b className="font-mono">QuizMaster</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-quizmaster"
      >
        <li className="font-mono">- Multiple-choice quiz application</li>
        <li className="font-mono">
          - Users can answer questions and get results
        </li>
        <li className="font-mono">
          - Dynamic question loading with state management
        </li>
        <li className="font-mono">- Results display with feedback</li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-moviefinder"
      >
        🎬 <b className="font-mono">MovieFinder</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-moviefinder"
      >
        <li className="font-mono">- Movie search app using OMDB API</li>
        <li className="font-mono">- Fetch and display movie details</li>
        <li className="font-mono">- Responsive UI design with Tailwind CSS</li>
        <li className="font-mono">
          - User-friendly interface with search and filter options
        </li>
      </ul>,
      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-recipesleuth"
      >
        🍽️ <b className="font-mono">RecipeSleuth</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-recipesleuth"
      >
        <li className="font-mono">- Recipe search app using Edamam API</li>
        <li className="font-mono">
          - Users can search recipes based on ingredients
        </li>
        <li className="font-mono">
          - Dynamic recipe display with detailed instructions
        </li>
        <li className="font-mono">- Responsive design with Tailwind CSS</li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-blogify"
      >
        📝 <b className="font-mono">Blogify</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-blogify"
      >
        <li className="font-mono">
          - Front-end blog platform with reading and commenting features
        </li>
        <li className="font-mono">- Dynamic blog post rendering</li>
        <li className="font-mono">- Comment system to interact with posts</li>
        <li className="font-mono">- User-friendly UI with Tailwind CSS</li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-todomaster"
      >
        ✅ <b className="font-mono">ToDoMaster</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-todomaster"
      >
        <li className="font-mono">
          - To-do list application with add, edit, and delete features
        </li>
        <li className="font-mono">- Data persistence using LocalStorage</li>
        <li className="font-mono">- Dynamic task management interface</li>
        <li className="font-mono">- Responsive design with Tailwind CSS</li>
      </ul>,

      <p
        className="text-gray-300 text-l font-mono mt-4"
        key="project-title-weatherwatch"
      >
        🌧️ <b className="font-mono">WeatherWatch</b>
      </p>,
      <ul
        className="text-gray-400 text-sm font-mono mt-2"
        key="project-description-weatherwatch"
      >
        <li className="font-mono">
          - Static weather application displaying data for a fixed location
        </li>
        <li className="font-mono">- Data fetching using OpenWeatherMap API</li>
        <li className="font-mono">- Simple, clean UI with Tailwind CSS</li>
        <li className="font-mono">
          - Displaying weather information such as temperature and conditions
        </li>
      </ul>,
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const command = input.trim();

    if (commands[command]) {
      setOutput([...commands[command]()]);
    } else {
      setOutput([
        <p className="text-lg font-mono" key={output.length}>
          ❌ <span className="text-red-400">Command not recognized!</span> You
          can see the valid commands by typing{" "}
          <span className="text-yellow-500">'help'</span>.
        </p>,
      ]);
    }
    setInput("");
  };

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://quotes.rest/qod?language=en");
        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        console.error("Error fetching data from the API", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="bg-gray-800 terminal p-6 rounded-[12px] w-[800px] h-[600px] shadow-lg overflow-y-auto max-h-[600px]">
      <div className="flex items-center gap-2 mb-4 cursor-pointer">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <hr className="border-t border-gray-500" />
      <br />

      <p className="text-gray-300 text-lg font-mono">
        To view the current code, type{" "}
        <span className="text-yellow-500 font-mono">'help'</span>
      </p>

      <div className="mt-4">{output}</div>

      <form onSubmit={handleSubmit} className="mt-4 flex items-center">
        <span className="text-green-400 text-lg font-mono">
          visitor @ showcase $
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent text-lg font-mono outline-none ml-2 flex-1  text-white"
        />
      </form>
    </div>
  );
};

export default Terminal;
