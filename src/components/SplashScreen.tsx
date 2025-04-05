
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash for 2 seconds, then start fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // After fade out animation completes, call onFinish
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="mb-4 animate-bounce">
          <Logo size="large" />
        </div>
        <p className="text-gray-600 mt-4">Delicious. Fast. Fresh.</p>
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-1 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
