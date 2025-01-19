import React, { useState, useRef, useEffect } from 'react';

const Home12 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);


  return (
    <header className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between">
        <nav className="mb-4 lg:mb-0">
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300">About</a>
            </li>
             <li ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="px-3 py-2 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300 focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 3</a>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <img
            src="https://placekitten.com/g/600/400"
            alt="Hero"
            className="max-h-48 rounded-lg w-full lg:max-w-md"
          />
        </div>
      </div>
    </header>
  );
};

export default Home12;