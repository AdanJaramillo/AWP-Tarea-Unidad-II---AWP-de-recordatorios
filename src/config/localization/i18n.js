import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import * as enL from "../translations/en.json";
import * as esL from "../translations/es.json";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources:{
        en:{
            translation:{
               welcome: enL,
            },
        },
        es:{
            translation: {
                welcome: esL,

            },
        },
    },
    //lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

