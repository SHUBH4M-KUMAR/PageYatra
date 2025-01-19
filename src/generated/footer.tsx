import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section (Title) */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">PageYatra</h2>
        </div>

        {/* Right Section (Social Links) */}
        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-300 focus:outline-none focus:ring focus:ring-gray-500"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-gray-300 focus:outline-none focus:ring focus:ring-gray-500"
          >
            <i className="fab fa-twitter"></i>
          </a>
           <a
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-300 focus:outline-none focus:ring focus:ring-gray-500"
          >
            <i className="fab fa-instagram"></i>
          </a>
           <a
            href="#"
             aria-label="LinkedIn"
            className="hover:text-gray-300 focus:outline-none focus:ring focus:ring-gray-500"
          >
              <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;