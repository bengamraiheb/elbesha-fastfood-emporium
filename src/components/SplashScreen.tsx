
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingProgress === 100) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [loadingProgress, onFinish]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-brand-dark to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.2,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="text-center"
      >
        <Logo size="large" />
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: loadingProgress / 100 }}
          transition={{ ease: "easeInOut" }}
          className="w-64 h-1 my-6 rounded-full bg-gradient-to-r from-brand-orange to-brand-red"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-200 italic"
        >
          Delicious food, just a click away...
        </motion.p>
        
        <motion.div 
          className="flex space-x-1 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: loadingProgress > 50 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 rounded-full bg-brand-orange"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
