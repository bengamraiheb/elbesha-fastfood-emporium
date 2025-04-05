
import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'text-xl md:text-2xl',
    medium: 'text-2xl md:text-3xl',
    large: 'text-3xl md:text-4xl',
  };

  return (
    <div className="flex items-center">
      <span className={`font-bold ${sizeClasses[size]} text-brand-red`}>El-Besha</span>
      <span className={`font-light ${sizeClasses[size]} text-brand-orange ml-1`}>Fastfood</span>
    </div>
  );
};

export default Logo;
