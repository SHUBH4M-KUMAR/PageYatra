import React, { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const MonacoEditor = React.lazy(() => import('react-monaco-editor'));

interface EditorProps {
  content: string;
  setContent: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ content, setContent }) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center bg-gray-900">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      }
    >
      <MonacoEditor
        height="100%"
        language="python" // Set the language here (e.g., 'javascript', 'typescript', 'html')
        theme="vs-dark" // Ensure the correct theme is used
        value={content}
        onChange={(value) => setContent(value || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16 },
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastColumn: 0,
          cursorStyle: 'line',
          quickSuggestions: true,
          folding: true,
          smoothScrolling: true,
          tabSize: 2,
        }}
      />
    </Suspense>
  );
};

export default Editor;
