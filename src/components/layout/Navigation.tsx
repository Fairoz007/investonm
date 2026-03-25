import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, Globe } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import type { NavItem } from '@/types';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { name: 'English', native: 'English', code: 'en' },
  { name: 'Arabic', native: 'العربية', code: 'ar' },
  { name: 'Russian', native: 'Русский', code: 'ru' },
  { name: 'Chinese', native: '中文', code: 'zh' },
  { name: 'Persian', native: 'فارسی', code: 'fa' },
  { name: 'Turkish', native: 'Türkçe', code: 'tr' }
];

const discoverMenuItems = [
  {
    category: 'WHY OMAN',
    items: [
      { label: 'Overview', href: '/about-oman' },
      { label: 'Key Benefits', href: '/key-sectors' },
    ]
  },
  {
    category: 'SECTORS',
    items: [
      { label: 'Tourism', href: '/about-oman' },
      { label: 'Logistics', href: '/key-sectors' },
      { label: 'Energy', href: '/dashboards' },
    ]
  },
  {
    category: 'OPPORTUNITIES',
    items: [
      { label: 'Active Projects', href: '/about-oman' },
      { label: 'Investment Zones', href: '/key-sectors' },
    ]
  }
];

const NavDropdown = ({ item, lang }: { item: NavItem, lang: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const hasSidebar = item.children?.some(child => child.hasSubmenu);
  const activeChild = activeChildIndex !== null && item.children ? item.children[activeChildIndex] : null;
  const isDiscoverOman = item.label === 'DISCOVER OMAN';

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => { setIsOpen(false); setActiveChildIndex(null); }}
      className="relative h-full flex items-center"
    >
      <button className={`font-sans flex items-center gap-1.5 py-6 text-[14px] font-bold tracking-[0.1em] uppercase whitespace-nowrap transition-all relative cursor-pointer ${
        isOpen ? 'text-white' : 'text-slate-400 hover:text-white'
      }`}>
        {t(item.label)}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isOpen ? 'rotate-180 text-blue-400' : 'opacity-40'} ml-0.5`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute top-[100%] z-[60] bg-[#0A0D18]/90 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-[32px] overflow-hidden ${
              isDiscoverOman ? 'left-0 w-[280px]' : hasSidebar ? 'left-0 w-[640px] p-8' : 'left-0 w-[240px] p-5'
            }`}
          >
            {isDiscoverOman ? (
              <div className="flex flex-col py-4 px-2">
                {discoverMenuItems.map((group, groupIdx) => (
                  <div key={groupIdx} className={`flex flex-col ${groupIdx !== 0 ? 'mt-6 pt-6 border-t border-white/5' : ''}`}>
                    <span className="text-[10px] font-black tracking-[0.2em] text-white/30 px-4 mb-3 uppercase">{group.category}</span>
                    {group.items.map((menuItem, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={`/${lang}${menuItem.href}`}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <span className="relative z-10 transition-transform group-hover:translate-x-1">{menuItem.label}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : hasSidebar ? (
               <div className="flex w-full h-full gap-8">
                 {/* Main list */}
                 <div className="flex flex-col gap-2 w-1/3 border-r border-white/5 pr-8">
                   <h2 className="text-blue-500 text-[10px] font-black tracking-[0.2em] uppercase mb-6 px-3 opacity-60">{t(item.label)}</h2>
                   {item.children?.map((child, index) => (
                     <Link
                       key={index}
                       to={`/${lang}${child.href}`}
                       onMouseEnter={() => setActiveChildIndex(index)}
                       className={`flex items-center justify-between py-3.5 px-4 rounded-xl transition-all group ${
                         activeChildIndex === index ? 'bg-white/10 text-white border border-white/5 shadow-xl' : 'text-slate-400 hover:text-white hover:bg-white/5'
                       }`}
                     >
                       <span className="text-[14px] font-bold tracking-tight">{t(child.label)}</span>
                       {child.hasSubmenu && <ChevronRight className={`w-4 h-4 transition-colors ${activeChildIndex === index ? 'text-blue-400' : 'opacity-30 group-hover:opacity-100'}`} />}
                     </Link>
                   ))}
                 </div>
                 {/* Sidebar */}
                 <div className="w-2/3 pl-2">
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
                          <div className="grid grid-cols-2 gap-10">
                            {activeChild.submenu.columns.map((col, idx) => (
                              <div key={idx} className="flex flex-col gap-4">
                                {col.title && (
                                  <h3 className="text-purple-400 text-[10px] font-black tracking-[0.2em] uppercase mb-2 opacity-60">
                                    {t(col.title)}
                                  </h3>
                                )}
                                <div className="flex flex-col gap-2">
                                  {col.items.map((subItem, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      to={`/${lang}${subItem.href}`}
                                      className="text-[13px] font-bold text-slate-400 hover:text-white transition-all rounded-xl px-3 py-2 hover:bg-white/5 border border-transparent hover:border-white/5"
                                    >
                                      {t(subItem.label)}
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
               </div>
            ) : (
                <div className="flex flex-col gap-1 w-full">
                  <h2 className="text-blue-500 text-[10px] font-black tracking-[0.2em] uppercase mb-4 px-3 opacity-60">{t(item.label)}</h2>
                  <div className="w-full h-[1px] bg-white/5 mb-4" />
                  {item.children?.map((child, index) => (
                    <Link
                      key={index}
                      to={`/${lang}${child.href}`}
                      className="flex items-center gap-4 py-3.5 px-4 rounded-xl transition-all text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 font-bold text-[14px]"
                    >
                      <span className="relative z-10">{t(child.label)}</span>
                    </Link>
                  ))}
                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavItem = ({ item, lang }: { item: NavItem, lang: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedChildIndex, setExpandedChildIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  if (!item.children) {
    return (
      <Link
        to={`/${lang}${item.href}`}
        className="block py-4 px-6 text-[15px] font-bold text-white font-sans border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300 rounded-2xl"
      >
        {t(item.label)}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-5 px-6 text-[15px] font-bold text-white font-sans hover:bg-white/[0.02] transition-all duration-300 rounded-2xl cursor-pointer"
      >
        {t(item.label)}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-blue-500' : 'text-slate-500'}`}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-8 space-y-2">
              {item.children.map((child, index) => (
                <div key={index}>
                  {child.hasSubmenu && child.submenu ? (
                    <div>
                      <button
                        onClick={() => setExpandedChildIndex(expandedChildIndex === index ? null : index)}
                        className="flex items-center justify-between w-full py-4 px-4 text-[14px] font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {t(child.label)}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedChildIndex === index ? 'rotate-180 text-blue-400' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedChildIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-white/[0.02] rounded-2xl"
                          >
                            <div className="pl-6 py-4 space-y-6 mt-1 border-l border-white/10">
                              {child.submenu.columns.map((col, idx) => (
                                <div key={idx} className="space-y-3">
                                  {col.title && (
                                    <h4 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] opacity-60">{t(col.title)}</h4>
                                  )}
                                  <div className="flex flex-col gap-3">
                                    {col.items.map((sub, sIdx) => (
                                      <Link key={sIdx} to={`/${lang}${sub.href}`} className="block text-[14px] font-bold text-slate-400 hover:text-white transition-colors">
                                        {t(sub.label)}
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
                      to={`/${lang}${child.href}`}
                      className="block py-4 text-[14px] font-bold text-slate-400 hover:text-white transition-colors px-4 border-l-2 border-transparent hover:border-blue-500/50 hover:bg-white/[0.02] rounded-r-xl"
                    >
                      {t(child.label)}
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
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { lang: currentLang } = useParams();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');
    pathParts[1] = langCode;
    const newPath = pathParts.join('/');
    navigate(newPath);
    setIsLangMenuOpen(false);
    setIsMobileLangOpen(false);
  };

  const displayLang = currentLang || 'en';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#030612]/70 backdrop-blur-3xl border-b border-white/5 py-3' 
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12">
          <nav className="flex items-center h-[60px] w-full justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center justify-start min-w-[240px]">
              <Link to={`/${displayLang}`} className="flex items-center transition-transform hover:scale-105 duration-500">
                <img
                  src="/images/Logo-01.png"
                  alt="Shomoukh"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-12 h-full flex-1">
              {NAV_ITEMS.map((item, index) =>
                item.children ? (
                  <NavDropdown key={index} item={item} lang={displayLang} />
                ) : (
                  <Link 
                    key={index} 
                    to={`/${displayLang}${item.href}`} 
                    className="flex items-center h-full text-[14px] font-bold uppercase tracking-[0.1em] text-slate-400 hover:text-white transition-all relative group"
                  >
                    {t(item.label)}
                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-blue-500 rounded-full transition-all duration-300 group-hover:w-[12px] shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                  </Link>
                )
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex shrink-0 items-center justify-end gap-10 min-w-[240px]">
              {/* Language Selector */}
              <div
                className="hidden md:flex relative items-center h-full"
                onMouseEnter={() => setIsLangMenuOpen(true)}
                onMouseLeave={() => setIsLangMenuOpen(false)}
              >
                <button className={`flex items-center gap-2 text-[12px] font-black uppercase tracking-widest h-full transition-all cursor-pointer ${
                  isLangMenuOpen ? 'text-white' : 'text-slate-500 hover:text-white'
                }`}>
                  <Globe className="w-4 h-4 opacity-50" />
                  <span>{LANGUAGES.find(l => l.code === displayLang)?.code || 'EN'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 opacity-40 ${isLangMenuOpen ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-[100%] right-0 w-44 z-50 pt-4"
                    >
                      <div className="bg-[#0A0D18]/90 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-3xl overflow-hidden flex flex-col p-2">
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`flex justify-between items-center w-full text-left px-5 py-3 text-[13px] rounded-2xl transition-all duration-300 group/lang ${
                              displayLang === lang.code ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <span className="font-bold tracking-tight">{lang.native}</span>
                            <span className="text-[10px] font-black opacity-30 group-hover/lang:opacity-100 font-mono tracking-tighter">{lang.code.toUpperCase()}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Login Button */}
              <Link
                to={`/${displayLang}/signin`}
                className="hidden sm:flex items-center justify-center h-[50px] px-10 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white text-[14px] font-black uppercase tracking-widest rounded-full border border-blue-500/30 transition-all duration-500 hover:glow-blue active:scale-[0.98] shadow-2xl"
              >
                Login
              </Link>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <button className="p-3 text-white/70 hover:text-white transition-all cursor-pointer rounded-2xl hover:bg-white/5 border border-white/5">
                      <Menu className="w-6 h-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-full sm:w-[440px] bg-[#030612]/95 backdrop-blur-3xl border-l border-white/5 p-0 z-[1100]"
                  >
                    <div className="flex flex-col h-full mt-10">
                      <SheetHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                        <SheetTitle className="sr-only">Menu Navigation</SheetTitle>
                        <img src="/images/Logo-01.png" alt="Shomoukh" className="h-10 w-auto object-contain brightness-0 invert" />
                      </SheetHeader>

                      <div className="flex-1 overflow-auto p-6">
                        <div className="space-y-2">
                          {NAV_ITEMS.map((item, index) => (
                            <MobileNavItem key={index} item={item} lang={displayLang} />
                          ))}
                        </div>
                      </div>

                      <div className="p-8 border-t border-white/5 space-y-6">
                        <Link
                          to={`/${displayLang}/signin`}
                          className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 text-center block shadow-2xl glow-blue"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Login to Portal
                        </Link>
                        <div className="flex flex-col w-full pb-4">
                          <button
                            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                            className="flex items-center justify-center gap-3 w-full py-4 text-white transition-all font-bold border border-white/10 rounded-full bg-white/[0.03]"
                          >
                            <Globe className="w-5 h-5 text-blue-400" />
                            <span>{LANGUAGES.find(l => l.code === displayLang)?.native || 'English'}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isMobileLangOpen ? 'rotate-180 text-blue-500' : 'text-slate-500'}`} />
                          </button>
                          <AnimatePresence>
                            {isMobileLangOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden bg-white/[0.02] rounded-3xl mt-4 border border-white/5"
                              >
                                <div className="flex flex-col py-3 p-2">
                                  {LANGUAGES.map((lang) => (
                                    <button
                                      key={lang.code}
                                      onClick={() => handleLanguageChange(lang.code)}
                                      className={`flex justify-between items-center w-full px-6 py-4 text-[14px] font-bold transition-all rounded-2xl ${
                                        displayLang === lang.code ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5'
                                      }`}
                                    >
                                      <span>{lang.native}</span>
                                      <span className="text-[10px] font-black opacity-30">{lang.code.toUpperCase()}</span>
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
