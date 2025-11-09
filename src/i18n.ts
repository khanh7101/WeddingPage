import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Get saved language from localStorage or default to 'vi'
const savedLanguage = localStorage.getItem("i18nextLng") || "vi";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "vi",
    lng: savedLanguage, // Use saved language
    debug: false,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // Cache language preference
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Listen for language changes and save to localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
