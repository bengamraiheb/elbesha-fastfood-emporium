
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', animated = false }) => {
  const sizeClasses = {
    small: 'text-xl md:text-2xl',
    medium: 'text-2xl md:text-3xl',
    large: 'text-3xl md:text-4xl',
  };

  const Container = animated ? motion.div : 'div';

  return (
    <Container 
      className="flex items-center"
      {...(animated ? {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5 }
      } : {})}
    >
      {animated ? (
        <>
          <motion.span 
            className={`font-bold ${sizeClasses[size]} text-brand-red`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            El-Besha
          </motion.span>
          <motion.span 
            className={`font-light ${sizeClasses[size]} text-brand-orange ml-1`}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Fastfood
          </motion.span>
        </>
      ) : (
        <>
          <span className={`font-bold ${sizeClasses[size]} text-brand-red`}>El-Besha</span>
          <span className={`font-light ${sizeClasses[size]} text-brand-orange ml-1`}>Fastfood</span>
        </>
      )}
    </Container>
  );
};

export default Logo;
