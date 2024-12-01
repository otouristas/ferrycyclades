import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="text-gray-400 hover:text-blue-400 transition-colors"
    >
      {children}
    </a>
  );
};