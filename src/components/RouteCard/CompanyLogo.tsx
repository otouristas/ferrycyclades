import React from 'react';

interface CompanyLogoProps {
  company: {
    name: string;
    logo: string;
  };
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ company }) => {
  return (
    <div className="absolute bottom-6 right-6 flex items-center justify-end">
      <div className="w-32 h-12 relative">
        <img 
          src={company.logo} 
          alt={company.name}
          className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
};