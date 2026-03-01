// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'Workspace Designer',
  description: 'Design your ideal workspace with our designer tool!'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}