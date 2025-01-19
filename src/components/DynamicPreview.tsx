import React, { useEffect, useState, Suspense } from 'react';

const DynamicPreview: React.FC<{ filename: string }> = ({ filename }) => {
  const [Component, setComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Use @vite-ignore to bypass Vite's analysis
        const ImportedComponent = await import(/* @vite-ignore */ `../generated/${filename}.tsx`);

        setComponent(() => ImportedComponent.default);
      } catch (err) {
        console.error('Error loading component:', err);
        setComponent(() => () => <div>Error loading component!</div>);
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

export default DynamicPreview;