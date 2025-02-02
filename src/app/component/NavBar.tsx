'use client'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
import Image from 'next/image';  // Import Image from Next.js

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Image src={logo} alt="Logo" className="h-20 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link to="/work" className="text-white hover:text-gray-300 transition-colors">
              Our Work
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="block px-3 py-2 text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md"
            >
              Services
            </Link>
            <Link
              to="/work"
              className="block px-3 py-2 text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md"
            >
              Our Work
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-white hover:text-gray-300 hover:bg-gray-800/50 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
