import React from 'react';

// Ensure Font Awesome CSS is included in your project
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section (Title) */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">PageYatra</h2>
        </div>

        {/* Right Section (Social Links) */}
        <div className="flex space-x-6">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-300 focus:outline-none focus:ring focus:ring-gray-500 transition"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-gray-300 focus:outline-none focus:ring focus:ring-gray-500 transition"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-300 focus:outline-none focus:ring focus:ring-gray-500 transition"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-gray-300 focus:outline-none focus:ring focus:ring-gray-500 transition"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
