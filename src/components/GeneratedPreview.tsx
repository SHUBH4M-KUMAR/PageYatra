import React, { useEffect, useState, Suspense } from 'react';

interface GeneratedPreviewProps {
  filename: string; // Filename for dynamic import
}

const GeneratedPreview: React.FC<GeneratedPreviewProps> = ({ filename }) => {
  const [Component, setComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Dynamically import the component
        const ImportedComponent = await import(/* @vite-ignore */ `../generated/${filename}.tsx`);
        setComponent(() => ImportedComponent.default);
      } catch (err) {
        console.error('Error loading component:', err);
        setComponent(() => () => <div>Error loading component: {filename}</div>);
      }
    };
    loadComponent();
  }, [filename]);

  return (
    <Suspense fallback={<div>Loading Preview...</div>}>
      {Component && <Component />}
    </Suspense>
  );
};

export default GeneratedPreview;
