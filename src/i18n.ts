import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files (To be filled later with real content)
import enTranslations from './translations/en.json';
import arTranslations from './translations/ar.json';
import ruTranslations from './translations/ru.json';
import zhTranslations from './translations/zh.json';
import faTranslations from './translations/fa.json';
import trTranslations from './translations/tr.json';

const resources = {
  en: { translation: enTranslations },
  ar: { translation: arTranslations },
  ru: { translation: ruTranslations },
  zh: { translation: zhTranslations },
  fa: { translation: faTranslations },
  tr: { translation: trTranslations },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar', 'ru', 'zh', 'fa', 'tr'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
  });

export default i18n;
