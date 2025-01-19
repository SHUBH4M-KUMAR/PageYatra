import React from 'react';
import { Menu, Code2 } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo and Sidebar Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-300 hover:text-white rounded-md bg-gray-800 hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Sidebar"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-blue-500" />
            <h1 className="text-lg font-bold text-white">PageYatra</h1>
          </div>
        </div>

        {/* Additional Header Actions (optional, like a search or profile icon) */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 text-gray-300 hover:text-white rounded-md bg-gray-800 hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search"
          >
            🔍 {/* Replace with an actual search icon if needed */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
