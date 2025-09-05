import React from "react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  isActive
    ? "text-white bg-blue-500 px-3 py-2 rounded-md text-sm font-medium"
    : "text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

function Navbar() {
  return (
    <header className="bg-white shadow w-full fixed top-0 left-0 z-50">
      <div className="flex items-center gap-4 p-4">
        <h1 className="text-xl font-bold text-blue-600">Latihan useState</h1>

        <nav className="flex gap-2 ml-auto">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/todolist" className={linkClass}>
            To Do List
          </NavLink>
          <NavLink to="/halaman3" className={linkClass}>
            Halaman 3
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
