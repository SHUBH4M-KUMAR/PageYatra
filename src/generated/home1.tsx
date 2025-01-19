import React, { useState } from 'react';

const home1 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}>
      <header className="bg-red-500 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">hehe</div>
        <nav className="flex items-center">
          <div className="relative inline-block text-left mr-4">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Menu 1
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Placeholder: Dropdown Menu Items */}
          </div>
           <div className="relative inline-block text-left mr-4">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Menu 2
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Placeholder: Dropdown Menu Items */}
          </div>
          <button
              onClick={toggleDarkMode}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Hello</h1>
        <h2 className="text-2xl">It is working</h2>
        {/* Placeholder: Content from API or additional components */}
      </main>
      {/* Placeholder: Footer or other sections */}
    </div>
  );
};

export default home1;