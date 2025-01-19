import React, { useState } from 'react';
import { Loader2, ZoomIn, ZoomOut, RefreshCcw } from 'lucide-react';
import GeneratedPreview from './GeneratedPreview';

interface PreviewProps {
  filename: string; // Filename to preview
}

const Preview: React.FC<PreviewProps> = ({ filename }) => {
  const [zoomLevel, setZoomLevel] = useState(1); // State for zoom level
  const [reloadKey, setReloadKey] = useState(0); // Key to force reload
  const [isReloading, setIsReloading] = useState(false); // Loading state for reload

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2)); // Max zoom 2x
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5)); // Min zoom 0.5x
  };

  const handleResetZoom = () => {
    setZoomLevel(1); // Reset zoom to default
  };

  const handleReloadPreview = () => {
    setIsReloading(true); // Set loading state
    setReloadKey((prev) => prev + 1); // Increment key to trigger re-render
    setTimeout(() => setIsReloading(false), 500); // Simulate loading duration
  };

  return (
    <section id="preview" className="rounded-lg bg-gray-800 shadow-lg p-6">
      <header className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-xl font-semibold text-white">Live Preview</h2>
        <span className="px-3 py-1 text-sm rounded-full bg-blue-500 text-white">
          Previewing: {filename}
        </span>
      </header>

      <div className="relative border border-gray-700 bg-gray-900 rounded-lg">
        {/* Zoom Controls */}
        <div className="absolute top-2 right-2 flex space-x-2 z-10">
          <button
            onClick={handleZoomIn}
            className="flex items-center justify-center p-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Zoom In"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="flex items-center justify-center p-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Zoom Out"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            onClick={handleResetZoom}
            className="flex items-center justify-center p-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
            title="Reset Zoom"
          >
            <RefreshCcw className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable and Zoomable Preview */}
        <div
          className="overflow-auto h-96 p-2 relative"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'top left',
          }}
        >
          {isReloading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
              <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
            </div>
          ) : (
            <GeneratedPreview key={reloadKey} filename={filename} />
          )}
        </div>
      </div>

      <footer className="mt-4 flex justify-end">
        <button
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleReloadPreview}
        >
          {isReloading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <RefreshCcw className="h-5 w-5 mr-2" />
          )}
          Reload Preview
        </button>
      </footer>
    </section>
  );
};

export default Preview;
