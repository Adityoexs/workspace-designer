// RootLayout.tsx

import React from 'react';

const RootLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <main>{children}</main>
      <style jsx global>{`
        :root {
          --prime-100: rgb(245, 184, 65);
        }
        
        body {
          background-color: var(--bg-color);
          color: var(--text-color);
        }
      `}</style>
    </div>
  );
};

export default RootLayout;
