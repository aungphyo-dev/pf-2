'use client';
import anime from 'animejs';
import { useEffect } from 'react';
const AnimationScreen = () => {
  useEffect(() => {
    const effect = document.getElementById('bg-effect');
    const handleMouseMove = (event: MouseEvent) => {
      anime({
        targets: effect,
        direction: 'linear',
        easing: 'linear',
        duration: 0,
        delay: 0,
        background: `radial-gradient(600px circle at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.10), transparent 80%)`,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div
      className='pointer-events-none fixed inset-0 z-30 hidden lg:block'
      id={'bg-effect'}
    ></div>
  );
};

export default AnimationScreen;
