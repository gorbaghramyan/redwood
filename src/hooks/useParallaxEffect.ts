"use client";
import { useEffect } from 'react';

const useParallaxEffect = () => {
  useEffect(() => {
    let lastTime = 0;
    const throttleInterval = 100; // ms
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleInterval) return;
      lastTime = currentTime;

      requestAnimationFrame(() => {
        const moveX = ((e.clientX - windowWidth / 2) * -0.005).toFixed(2);
        const moveY = ((e.clientY - windowHeight / 2) * 0.01).toFixed(2);

        document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
        document.documentElement.style.setProperty('--move-y', `${moveY}deg`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.style.removeProperty('--move-x');
      document.documentElement.style.removeProperty('--move-y');
    };
  }, []);
};

export default useParallaxEffect;
