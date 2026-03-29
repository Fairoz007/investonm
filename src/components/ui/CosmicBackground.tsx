import React from 'react';

export const CosmicBackground = () => (
  <div className="fixed inset-0 -z-10 w-full min-h-full overflow-hidden pointer-events-none">
    {/* Base Seamless Gradient */}
    <div 
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to right, #010208 0%, #02040a 20%, #06071a 50%, #0d061f 80%, #1a0625 100%)',
      }}
    />

    {/* Cosmic Energy Layer for depth */}
    <div 
      className="absolute inset-0 opacity-[0.12] mix-blend-screen pointer-events-none"
      style={{
        backgroundImage: 'url(/images/hero-energy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(60px) hue-rotate(-20deg)',
      }}
    />

    {/* Subtle Star Texture */}
    <div 
      className="absolute inset-0 opacity-[0.2] mix-blend-screen"
      style={{
        backgroundImage: `
          radial-gradient(1px 1px at 10% 10%, white, transparent),
          radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 40% 70%, white, transparent),
          radial-gradient(2px 2px at 60% 20%, rgba(255,255,255,0.7), transparent),
          radial-gradient(1.5px 1.5px at 80% 80%, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 90% 40%, white, transparent),
          radial-gradient(1.2px 1.2px at 30% 90%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1.5px 1.5px at 70% 10%, white, transparent)
        `,
        backgroundSize: '350px 350px',
      }}
    />

    {/* Large Soft Sectional Glows */}
    <div className="absolute top-[10%] left-[-10%] w-[80vw] h-[60vh] bg-blue-600/10 rounded-full blur-[160px] opacity-40" />
    <div className="absolute top-[40%] right-[-10%] w-[90vw] h-[70vh] bg-purple-600/10 rounded-full blur-[180px] opacity-30" />
    <div className="absolute top-[70%] left-[5%] w-[70vw] h-[50vh] bg-blue-500/5 rounded-full blur-[140px] opacity-20" />
    
    {/* Subtle Noise Overlay */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

