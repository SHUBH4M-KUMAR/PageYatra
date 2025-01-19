import React, { useState } from 'react';

function Form({ heroImage, buttonText, menuItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome</h1>
          <p className="text-lg text-white mb-8">This is a basic landing page section.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert('Button clicked')}>{buttonText}</button>
        </div>
      </div>
        <nav className="bg-gray-800 p-4 relative">
          <div className="container mx-auto flex justify-between items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">Menu</button>
            <div className={`absolute top-full right-0 mt-2 bg-white shadow-md rounded-md overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              {menuItems.map((item, index) => (
                  <a key={index} href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{item}</a>
              ))}
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-4 md:py-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Content Section</h2>
            <p className="text-gray-700 text-center">This is an optional content section that can be included.</p>
        </div>
    </section>
  );
}

export default Form;