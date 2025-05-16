import React from 'react';
import MonacoEditor from './MonacoEditor';
import { Button } from './ui/button'// Optional: Use shadcn/ui Button component

interface CodeEditorProps {
  editorContent: string;
  setEditorContent: React.Dispatch<React.SetStateAction<string>>;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ editorContent, setEditorContent }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(editorContent);
    alert('Code copied to clipboard!');
  };

  const handleClearCode = () => {
    setEditorContent('');
  };
  const downloadCode = () => {
    console.log("Download code");
  };

  return (
    <section className="rounded-lg bg-gray-950 border border-gray-800 p-6 shadow-lg transition-transform transform hover:scale-105">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-lg font-bold text-gray-200">Generated Code</h2>
        <div className="flex space-x-2">
          {/* Buttons */}
          <Button
            variant="secondary"
            className="text-sm px-4 py-2 hover:bg-gray-700 transition"
            onClick={handleCopyCode}
          >
            Copy Code
          </Button>
          <Button
            variant="destructive"
            className="text-sm px-4 py-2 hover:bg-red-600 transition"
            onClick={handleClearCode}
          >
            Clear Code
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="h-96 overflow-auto rounded-lg border border-gray-800 bg-gray-900 shadow-inner">
        <MonacoEditor content={editorContent} setContent={setEditorContent} />
      </div>

      {/* Footer */}
      
      <div className="flex justify-end mt-4">
      <Button
        onClick={downloadCode}
        className="px-4 py-2 ml-7 mr-5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Download Code
        </Button>

        <Button
          variant="primary"
          className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={() => console.log('Save action triggered')}
        >
          Save Changes
        </Button>
      </div>
      
     

    </section>
  );
};

export default CodeEditor;
