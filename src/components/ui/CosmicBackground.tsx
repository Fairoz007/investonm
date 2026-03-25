import React, { useEffect, useState } from 'react';

export const CosmicBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#02040a] pointer-events-none">
      {/* 
        Main Composite Background Layer
        - milky-way-galaxy-night.jpg as base
        - Layered radial gradients that react to mouse position
      */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-[3000ms] ease-out will-change-transform"
        style={{ 
          transform: `scale(1.1) translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`,
          backgroundImage: `
            radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(124, 58, 237, 0.25), transparent 45%),
            radial-gradient(circle at ${85 - mousePos.x * 10}% ${15 + mousePos.y * 10}%, rgba(37, 99, 235, 0.2), transparent 50%),
            url('/images/milky-way-galaxy-night.jpg')
          `
        }}
      />

      {/* Deep focus vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,4,10,0.8)_100%)]" />
      
      {/* Dynamic light layers */}
      <div 
        className="absolute top-[-10%] left-[-5%] w-[80vw] h-[80vw] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse-slow mix-blend-screen transition-transform duration-[2000ms]" 
        style={{ transform: `translate(${(mousePos.x - 0.5) * -40}px, ${(mousePos.y - 0.5) * -40}px)` }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-slow-reverse mix-blend-screen opacity-50 transition-transform duration-[2500ms]"
        style={{ transform: `translate(${(mousePos.x - 0.5) * 30}px, ${(mousePos.y - 0.5) * 30}px)` }}
      />

      {/* Cinematic flare / streak */}
      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent shadow-[0_0_50px_rgba(96,165,250,0.3)]" />

      {/* Luxury noise texture */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Bottom fade for scrolling */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#02040a] via-[#02040a]/80 to-transparent" />
    </div>
  );
};


