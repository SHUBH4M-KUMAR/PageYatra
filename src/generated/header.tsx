import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-xl">My App</span>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;