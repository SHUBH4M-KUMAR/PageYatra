import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <motion.img
            src="/smiley.png" // Replace with your smiley image path
            alt="Smiley"
            className="h-10 w-10 mr-2"
            animate={{ x: [0, 10, 0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
          />
          <span className="text-white font-bold text-xl">My Website</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white focus:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white focus:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white focus:text-white">Services</a>
          <a href="#" className="text-gray-300 hover:text-white focus:text-white">Contact</a>
        </div>
        <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                />
              </svg>
            </button>
          </div>
      </div>
        {isMenuOpen && (
         <div className="md:hidden  bg-gray-700 px-4 py-2 flex flex-col">
            <a href="#" className="text-gray-300 hover:text-white focus:text-white py-2">Home</a>
            <a href="#" className="text-gray-300 hover:text-white focus:text-white py-2">About</a>
            <a href="#" className="text-gray-300 hover:text-white focus:text-white py-2">Services</a>
            <a href="#" className="text-gray-300 hover:text-white focus:text-white py-2">Contact</a>
         </div>
         )}
    </nav>
  );
};

export default Navbar;