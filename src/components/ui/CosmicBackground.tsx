import React from 'react';

export const CosmicBackground = () => (
  <div className="fixed inset-0 bg-[#02040a] -z-10 overflow-hidden">
    {/* Subtle blurred background image for depth */}
    <div 
      className="absolute inset-0 opacity-[0.15] scale-110 pointer-events-none"
      style={{
        backgroundImage: 'url(/images/hero-energy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(80px) saturate(0.2)',
      }}
    />
    
    {/* Overlay gradients for a premium dark look */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#02040a] via-transparent to-[#02040a]/90" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_100%)] opacity-30" />
    
    {/* Animated glow effects */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
  </div>
);

