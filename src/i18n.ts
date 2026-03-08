import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';
import fa from './locales/fa.json';
import tr from './locales/tr.json';

const resources = {
    en: { translation: en },
    ar: { translation: ar },
    ru: { translation: ru },
    zh: { translation: zh },
    fa: { translation: fa },
    tr: { translation: tr },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
