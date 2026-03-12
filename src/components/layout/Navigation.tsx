import { useState } from 'react';
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

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => { setIsOpen(false); setActiveChildIndex(null); }}
      className="static h-full flex items-center"
    >
      <button className={`font-poppins flex items-center gap-1 py-8 text-[13px] font-bold tracking-[0.05em] uppercase whitespace-nowrap transition-colors relative ${isOpen ? 'text-[var(--primary)]' : 'text-current opacity-60 hover:opacity-100 hover:text-[var(--primary)]'
        }`}>
        {t(item.label)}
        <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180 text-[var(--primary)]' : 'opacity-70'} ml-0.5`}>▾</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-[100%] left-0 w-[100vw] shadow-2xl overflow-y-auto z-[45] rounded-b-[20px] glass-nav"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              height: '360px',
              maxHeight: '380px'
            }}
          >
            <div className="relative h-full w-full max-w-[1400px] mx-auto p-[40px]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-10 right-10 text-[#666666] hover:text-[var(--secondary)] transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col mb-4">
                <h2 className="text-[var(--primary)] text-[11px] font-semibold tracking-widest uppercase mb-1">{t(item.label)}</h2>
                {item.subtitle && <p className="text-[#222222] text-sm font-medium">{t(item.subtitle)}</p>}
              </div>

              <div className="w-full h-[1px] bg-[var(--primary)] mb-6 opacity-30" />

              <div className="flex h-[calc(100%-85px)]">
                {/* Main list */}
                <div className={`flex flex-col gap-3 overflow-y-auto pr-4 custom-scrollbar ${hasSidebar ? 'w-1/3 border-r border-white/10' : 'w-full grid md:grid-cols-2 lg:grid-cols-3 gap-y-4'}`}>
                  {item.children?.map((child, index) => (
                    <Link
                      key={index}
                      to={`/${lang}${child.href}`}
                      onMouseEnter={() => hasSidebar && setActiveChildIndex(index)}
                      className={`flex items-center gap-4 py-1 transition-colors group ${hasSidebar ? 'w-full' : 'w-fit'} ${activeChildIndex === index ? 'text-[var(--primary)]' : 'text-[#222222]/80 hover:text-[var(--primary)]'}`}
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
                                    <h3 className="text-[var(--primary)] text-[10px] font-semibold tracking-widest uppercase mb-3 border-b border-[var(--secondary)]/10 pb-2">
                                      {t(col.title)}
                                    </h3>
                                  )}
                                  <div className="flex flex-col gap-2">
                                    {col.items.map((subItem, sIdx) => (
                                      <Link
                                        key={sIdx}
                                        to={`/${lang}${subItem.href}`}
                                        className="text-[11px] text-[#222222]/60 hover:text-[var(--primary)] transition-colors"
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
                                      className="text-[11px] text-[#222222]/60 hover:text-[var(--primary)] transition-colors"
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
        className="block py-4 px-2 text-lg font-bold text-[#222222] font-poppins border-b border-[var(--secondary)]/5 hover:bg-[var(--primary)]/5 transition-colors rounded-xl"
      >
        {t(item.label)}
      </Link>
    );
  }

  return (
    <div className="border-b border-[var(--secondary)]/5">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full py-4 px-2 text-lg font-bold text-[#222222] font-poppins hover:bg-[var(--primary)]/5 transition-colors rounded-xl"
      >
        {t(item.label)}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[var(--primary)]' : 'text-[#666666]'}`}
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
                        className="flex items-center justify-between w-full py-2 text-sm font-semibold text-[#444444] hover:text-[var(--primary)] transition-colors"
                      >
                        {t(child.label)}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedChildIndex === index ? 'rotate-180 text-[var(--primary)]' : ''}`} />
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
                            <div className="pl-6 py-2 space-y-5 border-l-2 border-[var(--primary)]/20 ml-2 mt-2">
                              {child.submenu.columns.map((col, idx) => (
                                <div key={idx} className="space-y-3">
                                  {col.title && (
                                    <h4 className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-wider">{t(col.title)}</h4>
                                  )}
                                  <div className="flex flex-col gap-3">
                                    {col.items.map((sub, sIdx) => (
                                      <Link key={sIdx} to={`/${lang}${sub.href}`} className="text-sm text-[#666666] hover:text-[var(--primary)] transition-colors">
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
                      className="block py-2.5 text-sm font-medium text-[#444444] hover:text-[var(--primary)] transition-colors"
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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[1000] bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center h-[80px] w-full justify-between text-[#222222]">
            {/* Logo */}
            <div className="flex shrink-0 justify-start">
              <Link to={`/${displayLang}`} className="flex items-center gap-3 group">
                <img
                  src="/images/Logo-01.png"
                  alt="Shomoukh International Investment"
                  className="h-12 w-auto object-contain brightness-100"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-[40px] h-full whitespace-nowrap flex-1 px-4">
              {NAV_ITEMS.map((item, index) =>
                item.children ? (
                  <NavDropdown key={index} item={item} lang={displayLang} />
                ) : (
                  <Link key={index} to={`/${displayLang}${item.href}`} className="flex items-center h-full text-[13px] font-bold tracking-[0.05em] uppercase font-poppins text-current opacity-60 hover:opacity-100 hover:text-[var(--primary)] transition-all relative">
                    {t(item.label)}
                  </Link>
                )
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex shrink-0 items-center justify-end gap-6">
              {/* Login Button */}
              <Link
                to={`/${displayLang}/signin`}
                className="hidden sm:flex items-center gap-2 px-6 py-2 bg-[var(--primary)] text-white text-xs font-bold font-poppins rounded-full hover:bg-[var(--primary-dark)] transition-colors duration-300 tracking-wider shadow-md"
              >
                {t('navigation.text.3')}
              </Link>

              {/* Language Selector */}
              <div
                className="hidden md:flex relative"
                onMouseEnter={() => setIsLangMenuOpen(true)}
                onMouseLeave={() => setIsLangMenuOpen(false)}
              >
                <button className={`flex items-center gap-1 text-xs font-semibold tracking-wide py-2 transition-colors ${isLangMenuOpen ? 'text-[var(--primary)]' : 'text-[#666666] hover:text-[var(--primary)]'}`}>
                  <Globe className="w-3 h-3" />
                  <span>{LANGUAGES.find(l => l.code === displayLang)?.native || 'English'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180 text-[var(--primary)]' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[100%] right-0 pt-2 w-32 z-50 pointer-events-auto"
                    >
                      <div className="bg-white border border-[var(--secondary)]/10 rounded-lg shadow-xl overflow-hidden flex flex-col">
                        {LANGUAGES.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`flex justify-between items-center w-full text-left px-4 py-2.5 text-xs transition-colors group/lang ${displayLang === lang.code ? 'text-[var(--primary)] bg-[#F5F5F5]' : 'text-[#666666] hover:text-[var(--primary)] hover:bg-[#F5F5F5]'}`}
                          >
                            <span>{lang.native}</span>
                            <span className="text-[10px] opacity-50 group-hover/lang:opacity-100">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Vision 2040 Logo */}
              <div className="hidden lg:flex items-center text-right border-l border-current/20 pl-6 h-10">
                <img
                  src="/images/Oman_Vision_2040_Logo.png"
                  alt="Vision 2040"
                  className="h-10 w-auto object-contain brightness-100 opacity-90 hover:opacity-100"
                />
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <button className="p-2 text-[#222222] hover:text-[var(--primary)] transition-colors">
                      <Menu className="w-6 h-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-full sm:w-[400px] bg-white border-l border-[var(--secondary)]/10 p-0 z-[1100]"
                  >
                    <div className="flex flex-col h-full">
                      <SheetHeader className="p-6 border-b border-[var(--secondary)]/5 bg-[#F5F5F5]/50 flex-row items-center justify-between">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <img
                          src="/images/Logo-01.png"
                          alt="Shomoukh"
                          className="h-10 w-auto object-contain"
                        />
                      </SheetHeader>

                      <div className="flex-1 overflow-auto p-6 pb-32">
                        <div className="space-y-1">
                          {NAV_ITEMS.map((item, index) => (
                            <MobileNavItem key={index} item={item} lang={displayLang} />
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[var(--secondary)]/10 space-y-4">
                        <Link
                          to={`/${displayLang}/signin`}
                          className="w-full py-4 bg-[var(--primary)] text-white font-bold font-poppins rounded-full hover:bg-[var(--primary-dark)] transition-all tracking-wider text-center block shadow-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t('navigation.text.7')}
                        </Link>
                        <div className="flex flex-col w-full pb-4">
                          <button
                            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                            className="flex items-center justify-center gap-2 w-full py-3 text-[#222222] hover:text-[var(--primary)] transition-colors font-medium border border-[var(--secondary)]/10 rounded-full"
                          >
                            <Globe className="w-5 h-5" />
                            <span>{LANGUAGES.find(l => l.code === displayLang)?.native || 'English'}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileLangOpen ? 'rotate-180 text-[var(--primary)]' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {isMobileLangOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-[#F5F5F5] border border-[var(--secondary)]/10 rounded-2xl mt-2 mb-2"
                              >
                                <div className="flex flex-col py-2">
                                  {LANGUAGES.map((lang) => (
                                    <button
                                      key={lang.code}
                                      onClick={() => handleLanguageChange(lang.code)}
                                      className={`flex flex-col items-center w-full text-center py-3 text-sm transition-colors ${displayLang === lang.code ? 'text-[var(--primary)] bg-white' : 'text-[#666666] hover:text-[var(--primary)]'}`}
                                    >
                                      <span className="font-bold">{lang.native}</span>
                                      <span className="text-[10px] opacity-50 uppercase tracking-widest mt-0.5">{lang.name}</span>
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
