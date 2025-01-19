import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import InputSection from './components/InputSection';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import Footer from './components/Footer';
import axios from 'axios';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [filename, setFilename] = useState('GeneratedComponent'); // Default filename
  const [editorContent, setEditorContent] = useState('// Generated code will appear here');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleGenerate = async () => {
    if (!prompt.trim() || !filename.trim()) {
      setError('Please fill in both prompt and filename fields.');
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/api/generateCode', {
        prompt,
        filename,
      });
      setEditorContent(response.data.generatedCode);

      // Save generated code to a file in the `generated` folder for dynamic import
      const blob = new Blob([response.data.generatedCode], { type: 'text/javascript' });
      const fileUrl = URL.createObjectURL(blob);

      // Dynamically create a script tag for the generated component
      const script = document.createElement('script');
      script.type = 'module';
      script.src = fileUrl;
      document.body.appendChild(script);
    } catch (err) {
      setError('Failed to generate code. Please try again.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex bg-gray-900 text-gray-100 min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 px-6 py-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Section */}
            <InputSection
              prompt={prompt}
              setPrompt={setPrompt}
              filename={filename}
              setFilename={setFilename}
              handleGenerate={handleGenerate}
              isGenerating={isGenerating}
              error={error}
            />

            {/* Code Editor */}
            <CodeEditor editorContent={editorContent} setEditorContent={setEditorContent} />
          </div>

          {/* Live Preview */}
          <div className="mt-8">
            <Preview filename={filename} />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
