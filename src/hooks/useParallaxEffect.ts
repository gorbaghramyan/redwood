"use client";
import { useEffect } from 'react';

const useParallaxEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * -0.005;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

      document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
      document.documentElement.style.setProperty('--move-y', `${moveY}deg`);
    };

    // Register the event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Reset variables when the component is unmounted
      document.documentElement.style.removeProperty('--move-x');
      document.documentElement.style.removeProperty('--move-y');
    };
  }, []); // Empty array ensures the effect is only run on mount and unmount
};

export default useParallaxEffect;
