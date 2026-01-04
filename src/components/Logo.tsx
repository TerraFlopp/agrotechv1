import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* On appelle ton fichier image situé dans le dossier public */}
      <img 
        src="/logo-agrotech.svg" 
        alt="AgroTech Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
