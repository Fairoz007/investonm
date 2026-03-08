import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, Globe, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { NAV_ITEMS } from '@/lib/constants';
import type { NavItem } from '@/types';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NavDropdown = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null);

  const hasSidebar = item.children?.some(child => child.hasSubmenu);
  const activeChild = activeChildIndex !== null && item.children ? item.children[activeChildIndex] : null;

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => { setIsOpen(false); setActiveChildIndex(null); }}
      className="static h-full flex items-center"
    >
      <button className={`nav-link flex items-center gap-1 py-8 text-[14px] font-semibold tracking-[0.4px] whitespace-nowrap transition-colors relative ${isOpen ? 'text-[#00c2b5]' : 'text-white/70 hover:text-[#00c2b5]'
        }`}>
        {item.label}
        <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180 text-[#00c2b5]' : 'opacity-70'} ml-0.5`}>▾</span>
        {/* Active underline indicator */}
        {isOpen && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00c2b5]" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-[100%] left-0 w-[100vw] shadow-2xl overflow-y-auto z-[45] rounded-b-[20px]"
            style={{
              background: 'linear-gradient(#0b0b0b, #111)',
              height: '360px',
              maxHeight: '380px'
            }}
          >
            <div className="relative h-full w-full max-w-[1400px] mx-auto p-[40px]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col mb-4">
                <h2 className="text-[#00c2b5] text-[11px] font-semibold tracking-widest uppercase mb-1">{item.label}</h2>
                {item.subtitle && <p className="text-white/50 text-xs">{item.subtitle}</p>}
              </div>

              <div className="w-full h-[1px] bg-[#00c2b5] mb-6 opacity-30" />

              <div className="flex h-[calc(100%-85px)]">
                {/* Main list */}
                <div className={`flex flex-col gap-3 overflow-y-auto pr-4 custom-scrollbar ${hasSidebar ? 'w-1/3 border-r border-white/10' : 'w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-4'}`}>
                  {item.children?.map((child, index) => (
                    <Link
                      key={index}
                      to={child.href}
                      onMouseEnter={() => hasSidebar && setActiveChildIndex(index)}
                      className={`flex items-center gap-4 py-1 transition-colors group ${hasSidebar ? 'w-full' : 'w-fit'} ${activeChildIndex === index ? 'text-[#00c2b5]' : 'text-white/60 hover:text-white'}`}
                    >
                      <span className="text-[10px] font-mono opacity-40 w-4">{String(index + 1).padStart(2, '0')}</span>
                      <span className={`text-[11px] font-medium tracking-wider uppercase ${hasSidebar ? 'flex-1' : ''}`}>
                        {child.label}
                      </span>
                      {child.hasSubmenu && <ChevronDown className="w-3 h-3 -rotate-90 opacity-50 group-hover:opacity-100" />}
                    </Link>
                  ))}
                </div>

                {/* Sidebar Submenus */}
                {hasSidebar && (
                  <div className="w-2/3 pl-8 overflow-y-auto custom-scrollbar">
                    <AnimatePresence mode="wait">
                      {activeChild?.hasSubmenu && activeChild.submenu && (
                        <motion.div
                          key={activeChild.label}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="h-full"
                        >
                          {activeChild.submenu.type === 'multicolumn' ? (
                            <div className="grid grid-cols-4 gap-6">
                              {activeChild.submenu.columns.map((col, idx) => (
                                <div key={idx} className="flex flex-col">
                                  {col.title && (
                                    <h3 className="text-[#00c2b5] text-[10px] font-semibold tracking-widest uppercase mb-3 border-b border-white/10 pb-2">
                                      {col.title}
                                    </h3>
                                  )}
                                  <div className="flex flex-col gap-2">
                                    {col.items.map((subItem, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        to={subItem.href}
                                        className="text-[11px] text-white/60 hover:text-[#00c2b5] transition-colors"
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-8 max-w-lg">
                              {activeChild.submenu.columns.map((col, idx) => (
                                <div key={idx} className="flex flex-col gap-3">
                                  {col.items.map((subItem, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      to={subItem.href}
                                      className="text-[11px] text-white/60 hover:text-[#00c2b5] transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
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
  const [expandedChildIndex, setExpandedChildIndex] = useState<number | null>(null);

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
        className="flex items-center justify-between w-full py-3 text-lg font-medium text-white/80 hover:text-[#00c2b5] transition-colors"
      >
        {item.label}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#00c2b5]' : ''}`}
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
                <div key={index}>
                  {child.hasSubmenu && child.submenu ? (
                    <div>
                      <button
                        onClick={() => setExpandedChildIndex(expandedChildIndex === index ? null : index)}
                        className="flex items-center justify-between w-full py-2 text-sm text-white/60 hover:text-[#00c2b5] transition-colors"
                      >
                        {child.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedChildIndex === index ? 'rotate-180 text-[#00c2b5]' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedChildIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-4 border-l border-white/10 ml-2">
                              {child.submenu.columns.map((col, idx) => (
                                <div key={idx} className="space-y-2">
                                  {col.title && (
                                    <h4 className="text-[10px] text-[#00c2b5] uppercase tracking-wider">{col.title}</h4>
                                  )}
                                  <div className="flex flex-col gap-2">
                                    {col.items.map((sub, sIdx) => (
                                      <Link key={sIdx} to={sub.href} className="text-sm text-white/40 hover:text-white transition-colors">
                                        {sub.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={child.href}
                      className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  )}
                </div>
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


      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 left-0 w-full z-[1000] transition-all duration-500 m-0 p-0 ${isScrolled || location.pathname !== '/'
          ? 'bg-black backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center h-[80px] w-full justify-between">
            {/* Logo */}
            <div className="flex shrink-0 justify-start">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="flex items-center gap-3">
                  {/* Oman Emblem representing Logo icon */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/dd/National_emblem_of_Oman.svg"
                    alt="Shomoukh Emblem"
                    className="w-10 h-10 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-white leading-tight font-arabic text-left">استثمر في عُمان</span>
                    <span className="text-sm font-bold text-white leading-tight tracking-widest mt-0.5" style={{ fontFamily: 'sans-serif' }}>
                      SHOMOUKH
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-[28px] h-full whitespace-nowrap flex-1 px-4">
              {NAV_ITEMS.map((item, index) =>
                item.children ? (
                  <NavDropdown key={index} item={item} />
                ) : (
                  <Link key={index} to={item.href} className="flex items-center h-full text-[14px] font-semibold tracking-[0.4px] whitespace-nowrap text-white/70 hover:text-[#00c2b5] transition-colors relative">
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex shrink-0 items-center justify-end gap-6">
              {/* Login Button */}
              <button className="hidden sm:flex items-center gap-2 px-6 py-2 bg-[#00c2b5] text-[#111] text-xs font-bold rounded-full hover:bg-[#00ebd9] transition-colors duration-300 tracking-wider">
                Login
              </button>

              {/* Language Selector */}
              <button className="hidden md:flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white transition-colors tracking-wide">
                <span>English</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Vision 2040 Logo */}
              <div className="hidden lg:flex items-center text-right border-l border-white/20 pl-6 h-10">
                <img
                  src="/images/Oman_Vision_2040_Logo.png"
                  alt="Vision 2040"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
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
                        <span className="text-sm font-bold text-white tracking-widest">SHOMOUKH</span>
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
                      <button className="w-full py-3 bg-[#00c2b5] text-[#111] font-bold rounded-full hover:bg-[#00ebd9] transition-colors tracking-wider">
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
