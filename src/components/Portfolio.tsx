import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  const projects = [
    {
      title: "Global Connectivity",
      image: "https://images.unsplash.com/photo-1541417101257-ad71a8ee7002?q=80&w=2070&auto=format&fit=crop",
      description: "60% of world population within 8h flight. 105 international trade agreements."
    },
    {
      title: "Stable Economy",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      description: "BBB+ S&P Rating. $50B+ Investment to diversify across multi-sector growth opportunities."
    },
    {
      title: "Business Ready",
      image: "https://images.unsplash.com/photo-1548611145-383792f58039?q=80&w=2070&auto=format&fit=crop",
      description: "Top 10 most efficient ports worldwide. 0% Tax on personal income. Streamlined regulations."
    }
  ];

  return (
    <div ref={triggerRef} className="overflow-hidden bg-black">
      <div className="as-container-2 pt-28 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="as-subtitle-2 text-white border-white/20">Discover Oman</div>
          <h2 className="text-white/20 text-7xl md:text-9xl lg:text-[192px] font-display font-bold leading-none tracking-tighter">
            EXPLORE
          </h2>
        </div>
        <div className="flex justify-between items-end mt-[-50px] md:mt-[-100px]">
           <h2 className="text-white text-7xl md:text-9xl lg:text-[200px] font-display font-bold leading-none tracking-tighter uppercase">The</h2>
           <h2 className="text-white text-7xl md:text-9xl lg:text-[200px] font-display font-bold leading-none tracking-tighter uppercase">Land</h2>
        </div>
      </div>

      <div ref={sectionRef} className="flex w-[300vw] h-screen relative">
        {projects.map((project, i) => (
          <div key={i} className="w-screen h-full px-4 md:px-10 flex items-center justify-center">
            <div className="relative w-full h-[80%] rounded-2xl overflow-hidden group">
              <img src={project.image} alt={project.title} referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
                <h3 className="text-4xl md:text-6xl lg:text-[80px] font-display font-bold text-white max-w-[500px] leading-none">
                  {project.title}
                </h3>
                <div className="max-w-[400px] text-right space-y-8">
                  <p className="text-white text-lg md:text-xl font-medium">
                    {project.description}
                  </p>
                  <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all">
                    <Plus size={32} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="as-container-2 pb-28 text-center relative z-10">
        <a href="#" className="as-pr-btn-2 bg-white/10 hover:bg-primary transition-all">
          <span className="icon">
            <ArrowRight size={20} />
          </span>
          <span className="text">Discover More of Oman</span>
        </a>
      </div>
    </div>
  );
}
