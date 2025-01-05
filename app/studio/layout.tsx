import React from 'react';

export const metadata: Metadata = {
    title: "Mae's Fashion app",
    description: "The most beautiful girl in the world",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
