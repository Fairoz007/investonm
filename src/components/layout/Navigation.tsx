import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, Globe, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { NAV_ITEMS } from '@/lib/constants';
import type { NavItem } from '@/types';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NavDropdown = ({ items, label }: { items: NavItem[]; label: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="static h-full flex items-center"
    >
      <button className={`nav-link flex items-center gap-1 py-8 text-[11px] font-semibold tracking-wider transition-colors relative ${
        isOpen ? 'text-[#00D0D4]' : 'text-white/70 hover:text-[#00D0D4]'
      }`}>
        {label}
        <span className={`text-[8px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
        {/* Active underline indicator */}
        {isOpen && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00D0D4]" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[110px] left-0 w-full bg-[#151515] border-t border-[#00D0D4] shadow-2xl overflow-hidden z-50"
          >
            <div className="container-custom py-10 relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-6">
                <h2 className="text-[#00D0D4] text-[11px] font-semibold tracking-widest uppercase">{label}</h2>
              </div>

              <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 border border-white/60 group-hover:border-[#00D0D4] group-hover:bg-[#00D0D4] transition-colors rounded-sm" />
                    <span className="text-[11px] font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavItem = ({ item }: { item: NavItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        className="block py-3 text-lg font-medium text-white/80 hover:text-white transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-3 text-lg font-medium text-white/80"
      >
        {item.label}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 space-y-2">
              {item.children.map((child, index) => (
                <Link
                  key={index}
                  to={child.href}
                  className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navigation = () => {
  const isScrolled = useScrollPosition(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Banner */}
      <div className="bg-white text-[#156e4c] text-xs py-1 px-4 z-[60] relative flex items-center justify-between w-full h-[30px] border-b border-gray-200">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full px-4">
          <div className="w-5 h-4 bg-[#156e4c] flex items-center justify-center rounded-[2px]">
            <span className="text-white text-[8px] font-bold">🇸🇦</span>
          </div>
          <span className="font-medium text-[#156e4c]">Official government website of the Government of the Kingdom of Saudi Arabia</span>
          <button className="flex items-center gap-1 text-[#156e4c] opacity-80 hover:opacity-100 ml-1">
            How to verify <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-[30px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-[#111] backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-3">
                {/* Palm Tree Icon */}
                <svg
                  viewBox="0 0 32 32"
                  className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-105"
                  fill="currentColor"
                >
                  <path d="M16 4C12 4 8 7 8 11C8 13 9 15 11 16C9 16 7 15 5 14C5 18 8 21 12 22V28H20V22C24 21 27 18 27 14C25 15 23 16 21 16C23 15 24 13 24 11C24 7 20 4 16 4Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-white leading-tight font-arabic text-right">استثمر في السعودية</span>
                  <span className="text-sm font-bold text-white leading-tight tracking-widest mt-0.5">
                    INVEST SAUDI
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 h-full absolute left-1/2 -translate-x-1/2">
              {NAV_ITEMS.map((item, index) =>
                item.children ? (
                  <NavDropdown key={index} items={item.children} label={item.label} />
                ) : (
                  <Link key={index} to={item.href} className="flex items-center h-full text-xs font-semibold tracking-wider text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              {/* Login Button */}
              <button className="hidden sm:flex items-center gap-2 px-6 py-2 bg-[#00D0D4] text-[#111] text-xs font-bold rounded-full hover:bg-[#00e5e9] transition-colors duration-300 tracking-wider">
                Login
              </button>

              {/* Language Selector */}
              <button className="hidden md:flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white transition-colors tracking-wide">
                <span>English</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Vision 2030 Logo */}
              <div className="hidden lg:flex items-center gap-2 text-right">
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-white leading-tight tracking-widest uppercase mb-0.5">VISION رؤية</span>
                  <span className="text-xs font-bold text-white leading-tight">2030</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="lg:hidden p-2 text-white">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-[400px] bg-[#111] border-l border-white/10 p-6 z-[100]"
                >
                  <div className="flex flex-col h-full mt-8">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 32 32"
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                        >
                          <path d="M16 4C12 4 8 7 8 11C8 13 9 15 11 16C9 16 7 15 5 14C5 18 8 21 12 22V28H20V22C24 21 27 18 27 14C25 15 23 16 21 16C23 15 24 13 24 11C24 7 20 4 16 4Z" />
                        </svg>
                        <span className="text-sm font-bold text-white tracking-widest">INVEST SAUDI</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-auto">
                      <div className="space-y-1">
                        {NAV_ITEMS.map((item, index) => (
                          <MobileNavItem key={index} item={item} />
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 space-y-4">
                      <button className="w-full py-3 bg-[#00D0D4] text-[#111] font-bold rounded-full hover:bg-[#00e5e9] transition-colors tracking-wider">
                        Login
                      </button>
                      <button className="flex items-center justify-center gap-2 w-full py-3 text-white/80 hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                        <span>English</span>
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </motion.header>
    </>
  );
};
