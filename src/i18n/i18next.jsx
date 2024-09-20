import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import en from '../locales/en/translation.json'
import az from '../locales/az/translation.json'



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
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;