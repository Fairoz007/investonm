import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
import Home from '@/pages/Home';
import AboutOman from '@/pages/AboutOman';
import KeySectors from '@/pages/KeySectors';
import WhoWeAre from '@/pages/WhoWeAre';
import Contact from '@/pages/Contact';
import SignIn from '@/pages/SignIn';
import ForgotPassword from '@/pages/ForgotPassword';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ChatBot } from '@/components/chat/ChatBot';
import { ThemeSwitcher } from '@/components/layout/ThemeSwitcher';

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
    <div className="flex flex-col min-h-screen">
      <SEO />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <ChatBot />
      <ThemeSwitcher />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Redirect root to /en */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Multilingual Wrapper */}
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route index element={<Home />} />
            <Route path="about-oman" element={<AboutOman />} />
            <Route path="key-sectors" element={<KeySectors />} />
            <Route path="who-we-are" element={<WhoWeAre />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Catch-all redirect to /en */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
