import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import './App.css';

import Home from '@/pages/Home';
import AboutOman from '@/pages/AboutOman';
import KeySectors from '@/pages/KeySectors';
import WhoWeAre from '@/pages/WhoWeAre';
import OurExperts from '@/pages/OurExperts';
import Contact from '@/pages/Contact';
import Resources from '@/pages/Resources';
import SignIn from '@/pages/SignIn';
import ForgotPassword from '@/pages/ForgotPassword';
import Dashboards from '@/pages/knowledge/Dashboards';
import Reports from '@/pages/knowledge/Reports';
import Events from '@/pages/knowledge/Events';
import Laws from '@/pages/knowledge/Laws';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ChatBot } from '@/components/chat/ChatBot';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';

import { CosmicBackground } from '@/components/ui/CosmicBackground';

const LANGUAGES = ['en', 'ar', 'ru', 'zh', 'fa', 'tr'];

const SEO = () => {
 const { lang } = useParams();
 const location = useLocation();
 const baseUrl = window.location.origin;

 // Get current path without lang prefix
 const pathParts = location.pathname.split('/');
 const pathWithoutLang = pathParts.slice(2).join('/');

 return (
 <Helmet>
 <html lang={lang || 'en'} dir={lang === 'ar' || lang === 'fa' ? 'rtl' : 'ltr'} />
 {LANGUAGES.map((l) => (
 <link
 key={l}
 rel="alternate"
 hrefLang={l}
 href={`${baseUrl}/${l}/${pathWithoutLang}`}
 />
 ))}
 <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en/${pathWithoutLang}`} />
 </Helmet>
 );
};

const LanguageLayout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!lang) return;

    // Redirect to /en if language is not supported
    if (!LANGUAGES.includes(lang)) {
      navigate('/en', { replace: true });
      return;
    }

    // Set i18n language
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n.language, navigate]);

  useEffect(() => {
    const isRtl = i18n.language === 'ar' || i18n.language === 'fa';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    document.body.className = `lang-${i18n.language}`;
  }, [i18n.language]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <CosmicBackground />
      <SEO />
      <Navigation />
      <main className="flex-1 pt-[112px] md:pt-[120px]">
 <AnimatePresence mode="wait">
 <motion.div
 key={location.pathname}
 initial={{ opacity: 0, scale: 0.99, filter: 'blur(10px)' }}
 animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
 exit={{ opacity: 0, scale: 1.01, filter: 'blur(10px)' }}
 transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
 className="will-change-transform gpu-accelerated"
>
 <Outlet />
 </motion.div>
 </AnimatePresence>
 </main>
 <Footer />
 <ChatBot />
 </div>
 );
};

function App() {
 return (
 <HelmetProvider>
 <BrowserRouter>
 <SmoothScroll>
 <Routes>
 {/* Redirect root to /en */}
 <Route path="/" element={<Navigate to="/en" replace />} />

 {/* Multilingual Wrapper */}
 <Route path="/:lang" element={<LanguageLayout />}>
 <Route index element={<Home />} />
 <Route path="about-oman" element={<AboutOman />} />
 <Route path="key-sectors" element={<KeySectors />} />
 <Route path="who-we-are" element={<WhoWeAre />} />
 <Route path="our-experts" element={<OurExperts />} />
 <Route path="contact" element={<Contact />} />
 <Route path="resources" element={<Resources />} />
 <Route path="signin" element={<SignIn />} />
 <Route path="forgot-password" element={<ForgotPassword />} />
 <Route path="dashboards" element={<Dashboards />} />
 <Route path="reports" element={<Reports />} />
 <Route path="events" element={<Events />} />
 <Route path="laws" element={<Laws />} />
 </Route>

 {/* Catch-all redirect to /en */}
 <Route path="*" element={<Navigate to="/en" replace />} />
 </Routes>
 </SmoothScroll>
 </BrowserRouter>
 </HelmetProvider>
 );
}

export default App;
