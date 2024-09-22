import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  const [searchActive, setSearchActive] = useState(false); // State to toggle search input
  const theme = localStorage.getItem("theme") || "light";

  const toggleSearch = () => {
    setSearchActive(!searchActive); // Toggle the search field
  };

  const navItems = (
    <>
      <li>
        <Link className="font-medium" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-medium" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link className="font-medium" to="/about">
          About
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="md:mx-16">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost ">
              <img
                className="h-[32px]"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end flex">
            {/* Search Section */}
            <div className="relative w-full">
              {/* Mobile search icon (FaSearch) */}
              <button
                onClick={toggleSearch}
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <FaSearch className="text-[28px]" />
              </button>

              {/* Mobile search field */}
              {searchActive && (
                <div className="absolute top-full left-0 w-full bg-base-300 p-2 shadow-md lg:hidden">
                  <label className="flex items-center gap-2 w-full bg-white rounded-full px-4 py-2 shadow">
                    <input
                      type="text"
                      className="w-full border-none outline-none text-base text-gray-700"
                      placeholder="Search Products..."
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              )}

              {/* Desktop search field (always visible) */}
              <div className="hidden lg:flex w-full">
                <label className="flex items-center gap-2 w-full bg-white rounded-full px-4 py-2 shadow-2xl">
                  <input
                    type="text"
                    className="w-full border-none outline-none text-base text-gray-700"
                    placeholder="Search Products..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>

            {/* Wishlist */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <FaHeart className="text-[28px]" />
            </div>

            {/* Cart Section */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>

            {/* Profile Section */}
            <div className="dropdown dropdown-end pl-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>

            {/* Theme Switcher */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
