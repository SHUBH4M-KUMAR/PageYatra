import React from 'react';
import { X, Home, FileCode, Eye } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-5"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 w-64 bg-gray-950 border-r border-gray-800 h-full shadow-lg transform transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="p-6 relative">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Close Sidebar"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Links */}
          <h2 className="text-lg font-bold text-white mb-6">Navigation</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="#input"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Home className="h-5 w-5" />
                <span>Input Section</span>
              </a>
            </li>
            <li>
              <a
                href="#code-editor"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FileCode className="h-5 w-5" />
                <span>Code Editor</span>
              </a>
            </li>
            <li>
              <a
                href="#preview"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Eye className="h-5 w-5" />
                <span>Preview</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
