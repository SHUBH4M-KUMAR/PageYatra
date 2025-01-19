import React from 'react';

const Home123 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        
        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
           Welcome to Home Page
          </h2>
          <p className="mt-2 text-lg text-gray-700 text-center">
            This is a sample home page built with React and styled with Tailwind CSS.
          </p>
        </div>

         <div className="flex flex-wrap justify-center p-4 gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Learn More
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Get Started
            </button>
        </div>


      <footer className="bg-gray-200 p-4 text-center text-gray-600 text-sm mt-8">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
      </div>
    </div>
  );
};

export default Home123;