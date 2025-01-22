import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/CAGuide.com.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r bg-transparent bg-gradient-to-r from-black to-[#2D3436] text-white fixed w-full z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="AnchorAudit Logo" className="w-20 h-20 rounded-full" />
              <span className="ml-2 text-white text-xl f font-Parkinsans font-thin tracking-wide">CAGuide.com</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden font-Parkinsans md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-thin border-b-2 border-white pb-1'
                  : 'text-white hover:text-gray-200 transition duration-300'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semithin border-b-2 border-white pb-1'
                  : 'text-white hover:text-gray-200 transition duration-300'
              }
            >
              Profiles
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semithin border-b-2 border-white pb-1'
                  : 'text-white hover:text-gray-200 transition duration-300'
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={!isMenuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="space-y-2 px-4 pt-2 pb-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'block text-white font-semibold border-l-4 border-white pl-4 py-2'
                  : 'block text-white hover:bg-blue-700 hover:pl-4 transition duration-300 py-2'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? 'block text-white font-semibold border-l-4 border-white pl-4 py-2'
                  : 'block text-white hover:bg-blue-700 hover:pl-4 transition duration-300 py-2'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Accounts
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'block text-white font-semibold border-l-4 border-white pl-4 py-2'
                  : 'block text-white hover:bg-blue-700 hover:pl-4 transition duration-300 py-2'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
