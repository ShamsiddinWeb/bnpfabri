import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import laungageDetector from "i18next-browser-languagedetector";
import uzTranslation from "../public/locales/uz.json";
import ruTranslation from "../public/locales/ru.json";
import engTranslation from "../public/locales/eng.json"

const laungage = localStorage.getItem('i18nextLng') || "uz"
i18n 
.use(Backend)
//tilni aniqlash
.use(laungageDetector)
// bog'lash
.use(initReactI18next)
.init(
  {
    fallbackLng : "uz",
    lng: laungage,
    debug:true,
    resources: {
      uz:{translation: uzTranslation},
      ru:{translation: ruTranslation},
      eng:{translation: engTranslation}
    }
  }
)

export default i18n