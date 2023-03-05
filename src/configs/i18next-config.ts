import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from 'assets/languages/en.json';
import translationVn from 'assets/languages/vn.json';

const resources = {
  en: { translation: translationEn },
  vn: { translation: translationVn },
};

i18n
  .use(Backend)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language is english.
  });
