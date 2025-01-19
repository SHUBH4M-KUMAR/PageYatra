import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold text-xl">
          My App
        </a>
        <div className="space-x-4">
          <a href="/home" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
