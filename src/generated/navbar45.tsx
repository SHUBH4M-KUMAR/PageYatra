import React, { useState } from 'react';

const Navbar45 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white py-4 shadow-md">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="text-xl font-bold">
                   Logo
                </div>

                <div className="hidden md:flex space-x-6">
                     <a href="#home" className="hover:text-gray-300">Home</a>
                     <a href="#about" className="hover:text-gray-300">About</a>
                     <a href="#services" className="hover:text-gray-300">Services</a>
                     <a href="#contact" className="hover:text-gray-300">Contact</a>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                           {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            )}

                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden px-6 py-3">
                    <a href="#home" className="block py-2 hover:text-gray-300">Home</a>
                    <a href="#about" className="block py-2 hover:text-gray-300">About</a>
                    <a href="#services" className="block py-2 hover:text-gray-300">Services</a>
                    <a href="#contact" className="block py-2 hover:text-gray-300">Contact</a>
                </div>
            )}

        </nav>
    );
};

export default Navbar45;