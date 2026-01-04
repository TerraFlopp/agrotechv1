import { Leaf } from "lucide-react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      {/* Remplace cet SVG par ton propre fichier image si tu l'as en .png ou .svg */}
      <img src="/logo-agrotech.svg" alt="AgroTech Logo" className="w-full h-full object-contain" />
    </div>
  );
};
export default Logo;

  const textSizeClasses = {
    sm: "text-lg",
    default: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-primary p-2">
        <Leaf className={`${sizeClasses[size]} text-primary-foreground`} />
      </div>
      <span className={`font-display ${textSizeClasses[size]} text-primary`}>
        AgroTech
      </span>
    </div>
  );
};

export default Logo;
