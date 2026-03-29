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
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Dashboards from '@/pages/knowledge/Dashboards';
import Reports from '@/pages/knowledge/Reports';
import Events from '@/pages/knowledge/Events';
import Laws from '@/pages/knowledge/Laws';
import GigaProjects from '@/pages/sectors/GigaProjects';
import Regions from '@/pages/sectors/Regions';
import QualityOfLife from '@/pages/why-oman/QualityOfLife';
import NationalStrategy from '@/pages/why-oman/NationalStrategy';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ChatBot } from '@/components/chat/ChatBot';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';

import { CosmicBackground } from '@/components/ui/CosmicBackground';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';

const LANGUAGES = ['en', 'ar', 'ru', 'zh', 'fa', 'tr'];

const SEO = () => {
  const { lang } = useParams();
  const location = useLocation();
  const baseUrl = window.location.origin;
  const { t } = useTranslation();

  // Get current path without lang prefix
  const pathParts = location.pathname.split('/');
  const pathWithoutLang = pathParts.slice(2).join('/');

  // Page title mapping
  const getPageTitle = () => {
    const siteTitle = t('common.siteTitle');
    
    if (!pathWithoutLang || pathWithoutLang === '') {
      return siteTitle;
    }

    const titleMap: { [key: string]: string } = {
      'about-oman': t('nav.whyOman'),
      'key-sectors': t('nav.sectors'),
      'who-we-are': t('nav.whoWeAre'),
      'our-experts': t('nav.ourExperts'),
      'contact': t('nav.connect'),
      'resources': t('nav.resources'),
      'signin': t('nav.login'),
      'forgot-password': t('signIn.forgot'),
      'terms': t('footer.termsOfService'),
      'privacy': t('footer.privacyPolicy'),
      'dashboards': t('footer.text.x5'), // Market Reports / Dashboards fallback
      'reports': t('nav.marketReports'),
      'events': t('footer.text.x3'),
      'laws': t('footer.text.x4'),
      'why-oman/quality-of-life': t('nav.keyBenefits'),
      'why-oman/national-strategy': t('hero.vision'),
      'sectors/giga-projects': t('nav.activeProjects'),
      'sectors/regions': t('nav.investmentZones'),
    };

    const pageTitle = titleMap[pathWithoutLang] || pathWithoutLang.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `${pageTitle} | ${siteTitle}`;
  };

  const currentUrl = `${baseUrl}${location.pathname}`;
  const siteDescription = t('footer.description');
  const siteTitle = t('common.siteTitle');

  return (
    <Helmet>
      <title>{getPageTitle()}</title>
      <meta name="description" content={siteDescription} />
      <html lang={lang || 'en'} dir={lang === 'ar' || lang === 'fa' ? 'rtl' : 'ltr'} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={getPageTitle()} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${baseUrl}/images/Logo-01.png`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={getPageTitle()} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={`${baseUrl}/images/Logo-01.png`} />

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
    <div className="relative flex min-h-screen flex-col overflow-x-hidden text-foreground">
      <CosmicBackground />
      <SEO />
      <Navigation />
      <main id="main-content" className="flex-1 pt-20 md:pt-24">
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
      <ScrollToTopButton />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
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
              <Route path="terms" element={<TermsOfService />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="dashboards" element={<Dashboards />} />
              <Route path="reports" element={<Reports />} />
              <Route path="events" element={<Events />} />
              <Route path="laws" element={<Laws />} />
              <Route path="why-oman/quality-of-life" element={<QualityOfLife />} />
              <Route path="why-oman/national-strategy" element={<NationalStrategy />} />
              <Route path="sectors/giga-projects" element={<GigaProjects />} />
              <Route path="sectors/regions" element={<Regions />} />
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
