import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 px-4 py-2 rounded-md text-sm font-medium w-full block"
      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium w-full block";

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">useState Practice</h1>
      </div>
      <nav className="flex flex-col p-4 gap-2">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/todolist" className={linkClass}>
          To Do List
        </NavLink>
        <NavLink to="/datecounter" className={linkClass}>
          Date Counter
        </NavLink>
        <NavLink to="/datecounterv2" className={linkClass}>
          Date Counter V2
        </NavLink>
        <NavLink to="/flashcards" className={linkClass}>
          Flashcards
        </NavLink>
      </nav>
      <button
        onClick={toggleDarkMode}
        className={
          darkMode
            ? "text-white bg-blue-500 hover:bg-blue-600 p-4 mt-auto cursor-pointer"
            : "text-gray-700 bg-gray-200 hover:bg-gray-300 p-4 mt-auto cursor-pointer"
        }
      >
        Toggle Dark Mode
      </button>
    </aside>
  );
}

export default Navbar;
