import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const links = (
    <>
      <li className="block p-1 font-sans text-sm font-normal leading-normal  ">
        <NavLink className="flex items-center" to="/">
          Home
        </NavLink>
      </li>
      <li className="block p-1 font-sans text-sm font-normal leading-normal  ">
        <NavLink className="flex items-center" to="/donation">
          Dontaion
        </NavLink>
      </li>
      <li className="block p-1 font-sans text-sm font-normal  ">
        <NavLink className="flex items-center" to="/statistics">
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="backdrop-blur-lg bg-white/20">
      <div className="navbar container mx-auto text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-40" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;