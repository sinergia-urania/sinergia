import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['sr', 'en', 'hi', 'es', 'fr', 'pt', 'de'],
    fallbackLng: 'sr',
    debug: true,
    load: 'languageOnly', // ✅ koristi 'sr' umesto 'sr-RS'
    returnEmptyString: false,
    defaultNS: 'translation',
    ns: ['translation', 'cardMeanings'], // ✅ dodajemo i cardMeanings
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // ✅ podrška za više namespace-ova
    },
  });

export default i18n;
