import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, Globe, X } from 'lucide-react';
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
  const discoverMenuItems = [
    { label: 'Why Oman', href: '/about-oman' },
    { label: 'Sectors', href: '/key-sectors' },
    { label: 'Opportunities', href: '/resources' },
  ];

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => { setIsOpen(false); setActiveChildIndex(null); }}
      className="static h-full flex items-center"
    >
      <button className={`font-sans flex items-center gap-1 py-8 text-[16px] font-normal whitespace-nowrap transition-colors relative cursor-pointer ${isOpen ? 'text-primary' : 'text-foreground/90 opacity-90 hover:opacity-100 hover:text-primary'
        }`}>
        {prettyLabel(t(item.label))}
        <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180 text-primary' : 'opacity-70'} ml-0.5`}>⌄</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-[100%] overflow-y-auto z-[45] bg-[#0b0f2af0] backdrop-blur-3xl border border-primary/25 shadow-[0_24px_64px_rgba(3,5,20,0.72)] ${
              hasSidebar && !isDiscoverOman
                ? 'left-0 w-full rounded-b-[32px] border-x-0 border-t-0'
                : 'left-1/2 w-[240px] -translate-x-1/2 rounded-2xl mt-2'
            }`}
            style={{
              height: 'auto',
              minHeight: hasSidebar && !isDiscoverOman ? '340px' : 'auto',
              maxHeight: '520px',
            }}
          >
            <div className={`relative h-full w-full mx-auto ${hasSidebar && !isDiscoverOman ? 'max-w-[1400px] p-[40px]' : 'p-4'}`}>
              <button
                onClick={() => setIsOpen(false)}
                className={`text-muted-foreground hover:text-primary transition-colors cursor-pointer rounded-full border border-white/10 p-1.5 bg-white/5 ${
                  hasSidebar && !isDiscoverOman ? 'absolute top-10 right-10' : 'absolute top-2 right-2'
                }`}
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`${hasSidebar && !isDiscoverOman ? 'mb-4' : 'mb-2'} flex flex-col`}>
                {!isDiscoverOman && <h2 className="text-primary text-[11px] font-semibold tracking-widest uppercase mb-1">{t(item.label)}</h2>}
                {hasSidebar && !isDiscoverOman && item.subtitle && <p className="text-foreground text-sm font-medium">{t(item.subtitle)}</p>}
              </div>

              {!isDiscoverOman && <div className={`w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent ${hasSidebar && !isDiscoverOman ? 'mb-6' : 'mb-3'}`} />}

              {isDiscoverOman && (
                <div className="flex flex-col p-1">
                  {discoverMenuItems.map((menuItem) => (
                    <Link
                      key={menuItem.label}
                      to={`/${lang}${menuItem.href}`}
                      className="relative rounded-md px-4 py-2.5 text-[15px] font-medium text-[#A0A3B5] hover:text-white transition-all group overflow-hidden"
                    >
                      <span className="relative z-10">{menuItem.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_2px_rgba(96,165,250,0.5)]" />
                    </Link>
                  ))}
                </div>
              )}

              <div className={`${hasSidebar && !isDiscoverOman ? 'flex h-[calc(100%-85px)]' : 'hidden'}`}>
                {/* Main list */}
                <div className={`flex flex-col gap-3 overflow-y-auto custom-scrollbar ${hasSidebar ? 'w-1/3 border-r border-border pr-4' : 'w-full'}`}>
                  {item.children?.map((child, index) => (
                    <Link
                      key={index}
                      to={`/${lang}${child.href}`}
                      onMouseEnter={() => hasSidebar && setActiveChildIndex(index)}
                      className={`flex items-center gap-4 py-2 transition-colors group rounded-lg ${hasSidebar ? 'w-full' : 'w-full px-2 hover:bg-white/5'} ${activeChildIndex === index ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
                    >
                      <span className="text-[10px] font-mono opacity-60 w-4">{String(index + 1).padStart(2, '0')}</span>
                      <span className={`text-[12px] font-bold tracking-tight uppercase ${hasSidebar ? 'flex-1' : ''}`}>
                        {t(child.label)}
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
                                    <h3 className="text-primary text-[10px] font-semibold tracking-widest uppercase mb-3 border-b border-primary/25 pb-2">
                                      {t(col.title)}
                                    </h3>
                                  )}
                                  <div className="flex flex-col gap-2">
                                    {col.items.map((subItem, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        to={`/${lang}${subItem.href}`}
                                        className="text-[11px] text-muted-foreground hover:text-primary transition-colors rounded-md px-1 py-0.5 hover:bg-white/5"
                                      >
                                        {t(subItem.label)}
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
                                      to={`/${lang}${subItem.href}`}
                                      className="text-[11px] text-muted-foreground hover:text-primary transition-colors rounded-md px-1 py-0.5 hover:bg-white/5"
                                    >
                                      {t(subItem.label)}
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

const MobileNavItem = ({ item, lang }: { item: NavItem, lang: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedChildIndex, setExpandedChildIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  if (!item.children) {
    return (
      <Link
        to={`/${lang}${item.href}`}
        className="block py-4 px-4 text-base font-bold text-foreground font-sans border-b border-border hover:bg-white/5 transition-all duration-300 rounded-xl"
      >
        {t(item.label)}
      </Link>
    );
  }

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-4 px-4 text-base font-bold text-foreground font-sans hover:bg-white/5 transition-all duration-300 rounded-xl cursor-pointer"
      >
        {t(item.label)}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-primary' : 'text-muted-foreground'}`}
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
            <div className="pb-4 pl-4 space-y-3">
              {item.children.map((child, index) => (
                <div key={index}>
                  {child.hasSubmenu && child.submenu ? (
                    <div>
                      <button
                        onClick={() => setExpandedChildIndex(expandedChildIndex === index ? null : index)}
                        className="flex items-center justify-between w-full py-3 px-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                      >
                        {t(child.label)}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedChildIndex === index ? 'rotate-180 text-primary' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedChildIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 py-2 space-y-5 border-l-2 border-primary/35 ml-2 mt-2">
                              {child.submenu.columns.map((col, idx) => (
                                <div key={idx} className="space-y-3">
                                  {col.title && (
                                    <h4 className="text-[11px] font-bold text-primary uppercase tracking-wider">{t(col.title)}</h4>
                                  )}
                                  <div className="flex flex-col gap-3">
                                    {col.items.map((sub, sIdx) => (
                                      <Link key={sIdx} to={`/${lang}${sub.href}`} className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
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
                      className="block py-3 text-[13px] font-semibold text-foreground/70 hover:text-primary transition-colors px-4 border-l-2 border-transparent hover:border-primary"
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
  const location = useLocation();
  const navigate = useNavigate();
  const { lang: currentLang } = useParams();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');
    // pathParts[1] is the language code
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
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute top-4 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out will-change-[height,padding,background,backdrop-filter] ${
          isScrolled 
            ? 'bg-[#0b0e2ad6] backdrop-blur-xl border-b border-primary/20 shadow-[0_10px_32px_rgba(1,4,24,0.65)] py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="flex items-center h-[64px] w-full justify-between text-foreground">
            {/* Logo */}
            <div className="flex shrink-0 justify-start">
              <Link to={`/${displayLang}`} className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/images/Logo-01.png"
                  alt="Shomoukh International Investment"
                  className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'} w-auto object-contain brightness-0 invert`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-[28px] h-full whitespace-nowrap flex-1 px-8">
              {NAV_ITEMS.map((item, index) =>
                item.children ? (
                  <NavDropdown key={index} item={item} lang={displayLang} />
                ) : (
                  <Link key={index} to={`/${displayLang}${item.href}`} className="flex items-center h-full text-[15px] font-medium text-[#A0A3B5] hover:text-white transition-all relative group tracking-wide">
                    {prettyLabel(t(item.label))}
                    <span className="absolute bottom-6 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex shrink-0 items-center justify-end gap-6 lg:gap-8">
              {/* Language Selector */}
              <div
                className="hidden md:flex relative"
                onMouseEnter={() => setIsLangMenuOpen(true)}
                onMouseLeave={() => setIsLangMenuOpen(false)}
              >
                <button className={`flex items-center gap-1.5 text-[15px] font-medium py-2 transition-colors cursor-pointer ${isLangMenuOpen ? 'text-white' : 'text-[#A0A3B5] hover:text-white'}`}>
                  <span>{LANGUAGES.find(l => l.code === displayLang)?.code?.toUpperCase() || 'EN'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 opacity-70 ${isLangMenuOpen ? 'rotate-180 text-white' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-[120%] right-0 w-32 z-50 -mt-2"
                    >
                      <div className="bg-[#0d1230f2] border border-primary/30 shadow-md rounded-2xl overflow-hidden flex flex-col p-1.5">
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`flex justify-between items-center w-full text-left px-4 py-3 text-[11px] font-bold rounded-xl transition-all duration-300 group/lang ${displayLang === lang.code ? 'text-primary bg-white/10' : 'text-foreground/80 hover:text-primary hover:bg-white/5'}`}
                          >
                            <span className="tracking-wide">{lang.native}</span>
                            <span className="text-[9px] opacity-40 group-hover/lang:opacity-100 font-mono">{lang.code.toUpperCase()}</span>
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
                className="hidden sm:flex items-center justify-center min-w-[100px] h-[40px] px-6 bg-[#162A5A]/80 text-[#82C3F5] text-[15px] leading-none font-medium rounded-full hover:bg-[#1C3675]/80 border border-[#2D5FB2]/50 transition-colors duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(22,42,90,0.5)]"
              >
                Login
              </Link>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <button className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer">
                      <Menu className="w-6 h-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-full sm:w-[400px] bg-[#0c102ce6] border-l border-primary/20 p-0 z-[1100]"
                  >
                    <div className="flex flex-col h-full">
                      <SheetHeader className="p-8 border-b border-border flex-row items-center justify-between">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <img
                          src="/images/Logo-01.png"
                          alt="Shomoukh"
                          className="h-10 w-auto object-contain brightness-0 invert"
                        />
                      </SheetHeader>

                      <div className="flex-1 overflow-auto p-6 pb-6">
                        <div className="space-y-1">
                          {NAV_ITEMS.map((item, index) => (
                            <MobileNavItem key={index} item={item} lang={displayLang} />
                          ))}
                        </div>
                      </div>

                      <div className="p-8 border-t border-border space-y-4">
                        <Link
                          to={`/${displayLang}/signin`}
                          className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-full transition-all duration-300 tracking-widest text-center block uppercase text-xs"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t('navigation.text.7')}
                        </Link>
                        <div className="flex flex-col w-full pb-4">
                          <button
                            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                            className="flex items-center justify-center gap-2 w-full py-3 text-foreground hover:text-primary transition-colors font-medium border border-border rounded-full"
                          >
                            <Globe className="w-5 h-5" />
                            <span>{LANGUAGES.find(l => l.code === displayLang)?.native || 'English'}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileLangOpen ? 'rotate-180 text-primary' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {isMobileLangOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-white/5 border border-primary/20 rounded-2xl mt-2 mb-2"
                              >
                                <div className="flex flex-col py-2">
                                  {LANGUAGES.map((lang) => (
                                    <button
                                      key={lang.code}
                                      onClick={() => handleLanguageChange(lang.code)}
                                      className={`flex flex-col items-center w-full text-center py-3 text-sm transition-colors ${displayLang === lang.code ? 'text-primary bg-muted' : 'text-foreground/80 hover:text-primary'}`}
                                    >
                                      <span className="font-bold">{lang.native}</span>
                                      <span className="text-[10px] opacity-70 uppercase tracking-widest mt-0.5">{lang.name}</span>
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
      </motion.header>
    </>
  );
};
