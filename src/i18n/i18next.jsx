import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../locales/en/translation.json';
import az from '../locales/az/translation.json';

const savedLang = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      az: {
        translation: az,
      },
    },
    lng: savedLang, 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
