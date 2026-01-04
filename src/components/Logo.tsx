import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Cercle de fond vert clair */}
      <div className="absolute inset-0 bg-[#E2E8D4] rounded-full shadow-inner"></div>
      
      {/* SVG Icône AgroTech */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-3/4 h-3/4 z-10" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Le Container */}
        <rect x="25" y="55" width="50" height="25" rx="4" fill="#2D4A22" />
        <path d="M35 55V80M50 55V80M65 55V80" stroke="#F0F2EA" strokeWidth="2"/>
        
        {/* La Plante */}
        <path 
          d="M50 55C50 35 40 25 30 25M50 55C50 35 60 25 70 25M50 55V35" 
          stroke="#86C494" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
        <circle cx="30" cy="25" r="8" fill="#86C494" />
        <circle cx="70" cy="25" r="8" fill="#86C494" />
      </svg>
    </div>
  );
};

export default Logo;
