import React from 'react';
import { Rocket, Loader2 } from 'lucide-react';

interface InputSectionProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  filename: string;
  setFilename: React.Dispatch<React.SetStateAction<string>>;
  handleGenerate: () => void;
  isGenerating: boolean;
  error: string;
}

const InputSection: React.FC<InputSectionProps> = ({
  prompt,
  setPrompt,
  filename,
  setFilename,
  handleGenerate,
  isGenerating,
  error,
}) => {
  return (
    <section className="rounded-lg bg-gray-950 border border-gray-800 p-6 shadow-lg">
      {/* Header */}
      <h2 className="mb-4 text-xl font-semibold text-gray-200">Describe Your Component</h2>

      {/* Textarea for Prompt */}
      <div className="mb-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="E.g., Create a Navbar component with Tailwind styling."
          className="w-full h-28 resize-none rounded-lg border border-gray-800 bg-gray-900 p-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Input for Filename */}
      <div className="mb-4">
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Filename (e.g., Navbar)"
          className="w-full rounded-lg border border-gray-800 bg-gray-900 p-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={isGenerating || !prompt.trim() || !filename.trim()}
        className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-medium shadow-md transition hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="ml-2">Generating...</span>
          </>
        ) : (
          <>
            <Rocket className="h-5 w-5" />
            <span className="ml-2">Generate Code</span>
          </>
        )}
      </button>

      {/* Error Message */}
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
    </section>
  );
};

export default InputSection;
