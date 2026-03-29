import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about', hasDropdown: true },
    { name: 'DISCOVER OMAN', path: '/discover-oman', hasDropdown: true },
    { name: 'INVESTING', path: '/investing', hasDropdown: true },
    { name: 'RESOURCES', path: '/resources', hasDropdown: true },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 h-24 flex items-center px-10",
        isSticky ? "bg-black/60 backdrop-blur-xl h-20 border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between mx-auto max-w-[1400px]">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/Logo-01.png" 
              alt="Shomoukh" 
              className="h-10 w-auto brightness-0 invert" 
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wider leading-none">Shomoukh</span>
              <span className="text-white/40 text-[8px] tracking-[0.2em] font-medium uppercase mt-0.5">International Investment</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link 
                to={item.path}
                className={cn(
                  "text-[10px] font-bold text-white/60 hover:text-white uppercase tracking-[0.2em] transition-all flex items-center gap-1.5",
                  location.pathname === item.path && "text-white"
                )}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={10} className="opacity-40 group-hover:opacity-100 transition-opacity" />}
              </Link>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-8">
          {/* Language selection */}
          <div className="flex items-center gap-2 cursor-pointer text-white/60 hover:text-white transition-colors group">
            <Globe size={14} className="opacity-60 group-hover:opacity-100" />
            <span className="text-[10px] font-bold tracking-widest">EN</span>
            <ChevronDown size={12} className="opacity-40" />
          </div>

          {/* Login Button */}
          <Link 
            to="/login" 
            className="px-8 py-2.5 rounded-full border border-white/10 bg-[#0A1128]/80 text-white font-bold text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl backdrop-blur-md uppercase"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </header>
  );
}

