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
      { label: 'Energy', href: '/resources' },
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

  const prettyLabel = (label: string) =>
    label
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace('Us', 'US');

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => { setIsOpen(false); setActiveChildIndex(null); }}
      className="relative h-full flex items-center"
    >
      <button className={`font-sans flex items-center gap-1.5 py-6 text-[15px] font-normal tracking-wide whitespace-nowrap transition-colors relative cursor-pointer ${isOpen ? 'text-white' : 'text-[#A7B0C3] hover:text-white'
        }`}>
        {prettyLabel(t(item.label))}
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'opacity-70'} ml-0.5`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-[100%] z-[60] bg-[#0A0F1E]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),auto_auto_30px_rgba(139,92,246,0.15)] rounded-2xl overflow-hidden ${isDiscoverOman ? 'left-0 w-[260px]' : hasSidebar ? 'left-0 w-[600px] p-6' : 'left-0 w-[220px] p-4'
              }`}
          >
            {isDiscoverOman ? (
              <div className="flex flex-col py-4 px-2">
                {discoverMenuItems.map((group, groupIdx) => (
                  <div key={groupIdx} className={`flex flex-col ${groupIdx !== 0 ? 'mt-4 pt-4 border-t border-white/5' : ''}`}>
                    <span className="text-[11px] font-medium tracking-widest text-white/50 px-4 mb-2 uppercase">{group.category}</span>
                    {group.items.map((menuItem, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={`/${lang}${menuItem.href}`}
                        className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[14px] text-[#D1D5DB] hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <span className="relative z-10 transition-transform group-hover:translate-x-1">{menuItem.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#3B82F6]" />
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ) : hasSidebar ? (
              <div className="flex w-full h-full gap-6">
                {/* Main list */}
                <div className="flex flex-col gap-1 w-1/3 border-r border-white/10 pr-6">
                  <h2 className="text-[#3B82F6] text-[11px] font-semibold tracking-widest uppercase mb-4 px-2">{t(item.label)}</h2>
                  {item.children?.map((child, index) => (
                    <Link
                      key={index}
                      to={`/${lang}${child.href}`}
                      onMouseEnter={() => setActiveChildIndex(index)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors group ${activeChildIndex === index ? 'bg-white/10 text-white' : 'text-[#A7B0C3] hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <span className="text-[13px] font-medium">{t(child.label)}</span>
                      {child.hasSubmenu && <ChevronRight className={`w-3.5 h-3.5 transition-colors ${activeChildIndex === index ? 'text-white' : 'opacity-50 group-hover:opacity-100'}`} />}
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
                        <div className="grid grid-cols-2 gap-8">
                          {activeChild.submenu.columns.map((col, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                              {col.title && (
                                <h3 className="text-[#8B5CF6] text-[10px] font-medium tracking-widest uppercase mb-2">
                                  {t(col.title)}
                                </h3>
                              )}
                              <div className="flex flex-col gap-1">
                                {col.items.map((subItem, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    to={`/${lang}${subItem.href}`}
                                    className="text-[13px] text-[#A7B0C3] hover:text-white transition-colors rounded-lg px-2 py-1.5 hover:bg-white/5"
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
                <h2 className="text-[#3B82F6] text-[11px] font-semibold tracking-widest uppercase mb-2 px-2">{t(item.label)}</h2>
                <div className="w-full h-px bg-white/10 mb-2" />
                {item.children?.map((child, index) => (
                  <Link
                    key={index}
                    to={`/${lang}${child.href}`}
                    className="flex items-center gap-3 py-2.5 px-2 rounded-lg transition-colors text-[#A7B0C3] hover:text-white hover:bg-white/5"
                  >
                    <span className="text-[13px] font-medium">{t(child.label)}</span>
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

// ... Mobile navigation remains similar but restyled slightly
const MobileNavItem = ({ item, lang }: { item: NavItem, lang: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedChildIndex, setExpandedChildIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  if (!item.children) {
    return (
      <Link
        to={`/${lang}${item.href}`}
        className="block py-4 px-4 text-base font-medium text-white font-sans border-b border-white/10 hover:bg-white/5 transition-all duration-300 rounded-xl"
      >
        {t(item.label)}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-4 px-4 text-base font-medium text-white font-sans hover:bg-white/5 transition-all duration-300 rounded-xl cursor-pointer"
      >
        {t(item.label)}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#3B82F6]' : 'text-white/60'}`}
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
            <div className="pb-4 pl-4 space-y-2">
              {item.children.map((child, index) => (
                <div key={index}>
                  {child.hasSubmenu && child.submenu ? (
                    <div>
                      <button
                        onClick={() => setExpandedChildIndex(expandedChildIndex === index ? null : index)}
                        className="flex items-center justify-between w-full py-3 px-2 text-sm font-medium text-[#A7B0C3] hover:text-white transition-colors cursor-pointer"
                      >
                        {t(child.label)}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedChildIndex === index ? 'rotate-180 text-white' : ''}`} />
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
                            <div className="pl-4 py-2 space-y-4 border-l border-white/10 ml-2 mt-1">
                              {child.submenu.columns.map((col, idx) => (
                                <div key={idx} className="space-y-2">
                                  {col.title && (
                                    <h4 className="text-[11px] font-semibold text-[#8B5CF6] uppercase tracking-wider">{t(col.title)}</h4>
                                  )}
                                  <div className="flex flex-col gap-2">
                                    {col.items.map((sub, sIdx) => (
                                      <Link key={sIdx} to={`/${lang}${sub.href}`} className="block py-1.5 text-sm text-[#A7B0C3] hover:text-white transition-colors">
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
                      className="block py-3 text-[14px] font-medium text-[#A7B0C3] hover:text-white transition-colors px-4 border-l border-transparent hover:border-[#3B82F6]"
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
  const prettyLabel = (label: string) =>
    label
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace('Us', 'US');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled
            ? 'bg-[#050816]/80 backdrop-blur-md border-b border-white/5 shadow-lg'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10">
          <nav className="flex items-center h-[80px] w-full justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center justify-start min-w-[200px]">
              <Link to={`/${displayLang}`} className="flex items-center justify-center transition-opacity hover:opacity-90">
                <img src="/images/Logo-01.png" alt="Shomoukh" className="h-10 w-auto object-contain brightness-0 invert" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-8 h-full flex-1">
              {NAV_ITEMS.map((item, index) =>
                item.children ? (
                  <NavDropdown key={index} item={item} lang={displayLang} />
                ) : (
                  <Link
                    key={index}
                    to={`/${displayLang}${item.href}`}
                    className="flex items-center h-full text-[15px] font-normal text-[#A7B0C3] hover:text-white transition-all relative group tracking-wide"
                  >
                    {prettyLabel(t(item.label))}
                    <span className="absolute bottom-6 left-0 w-0 h-[2px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#3B82F6]" />
                  </Link>
                )
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex shrink-0 items-center justify-end gap-6 min-w-[200px]">
              {/* Language Selector */}
              <div
                className="hidden md:flex relative items-center h-full"
                onMouseEnter={() => setIsLangMenuOpen(true)}
                onMouseLeave={() => setIsLangMenuOpen(false)}
              >
                <button className={`flex items-center gap-1.5 text-[14px] font-normal h-full transition-colors cursor-pointer ${isLangMenuOpen ? 'text-white' : 'text-[#A7B0C3] hover:text-white'
                  }`}>
                  <span>{LANGUAGES.find(l => l.code === displayLang)?.code?.toUpperCase() || 'EN'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 opacity-70 ${isLangMenuOpen ? 'rotate-180 text-white' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[80px] right-0 w-36 z-50 pt-2"
                    >
                      <div className="bg-[#0A0F1E]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden flex flex-col p-2">
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`flex justify-between items-center w-full text-left px-4 py-2.5 text-[13px] rounded-lg transition-all duration-200 group/lang ${displayLang === lang.code ? 'text-white bg-white/10' : 'text-[#A7B0C3] hover:text-white hover:bg-white/5'
                              }`}
                          >
                            <span className="font-medium tracking-wide">{lang.native}</span>
                            <span className="text-[10px] opacity-40 group-hover/lang:opacity-100 font-mono">{lang.code.toUpperCase()}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Oman 2040 Logo */}
              <a href="https://www.oman2040.om/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-transform hover:scale-105">
                <img src="https://www.oman2040.om/assets/img/logo-oman2040.png" alt="Oman 2040" className="h-10 w-auto object-contain" />
              </a>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <button className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10">
                      <Menu className="w-6 h-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-full sm:w-[400px] bg-[#0A0F1E]/95 backdrop-blur-2xl border-l border-white/10 p-0 z-[1100]"
                  >
                    <div className="flex flex-col h-full mt-10">
                      <SheetHeader className="p-6 border-b border-white/10 flex-row items-center justify-between">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <img src="/images/Logo-01.png" alt="Shomoukh" className="h-8 w-auto object-contain brightness-0 invert" />
                      </SheetHeader>

                      <div className="flex-1 overflow-auto p-4 pb-6">
                        <div className="space-y-1">
                          {NAV_ITEMS.map((item, index) => (
                            <MobileNavItem key={index} item={item} lang={displayLang} />
                          ))}
                        </div>
                      </div>

                      <div className="p-6 border-t border-white/10 space-y-4">

                        <div className="flex flex-col w-full pb-4">
                          <button
                            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                            className="flex items-center justify-center gap-2 w-full py-3 text-white transition-colors font-medium border border-white/20 rounded-full bg-white/5"
                          >
                            <Globe className="w-4 h-4 text-white/70" />
                            <span>{LANGUAGES.find(l => l.code === displayLang)?.native || 'English'}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileLangOpen ? 'rotate-180' : 'text-white/70'}`} />
                          </button>
                          <AnimatePresence>
                            {isMobileLangOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-[#1E293B]/40 rounded-2xl mt-3"
                              >
                                <div className="flex flex-col py-2 border border-white/10 rounded-2xl">
                                  {LANGUAGES.map((lang) => (
                                    <button
                                      key={lang.code}
                                      onClick={() => handleLanguageChange(lang.code)}
                                      className={`flex justify-center items-center gap-3 w-full text-center py-3 text-[14px] transition-colors ${displayLang === lang.code ? 'text-white bg-white/10' : 'text-[#A7B0C3] hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                      <span className="font-medium">{lang.native}</span>
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
