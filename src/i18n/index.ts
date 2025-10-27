import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./en/common.json";
import enNav from "./en/nav.json";
import enWelcome from "./en/welcome.json";
import enShortProjectList from "./en/shortProjectList.json";
import enProjects from "./en/projects.json";
import enWaver from "./en/waver.json";
import enSkills from "./en/skills.json";
import enFooter from "./en/footer.json";

import uaCommon from "./ua/common.json";
import uaNav from "./ua/nav.json";
import uaWelcome from "./ua/welcome.json";
import uaShortProjectList from "./ua/shortProjectList.json";
import uaProjects from "./ua/projects.json";
import uaWaver from "./ua/waver.json";
import uaSkills from "./ua/skills.json";
import uaFooter from "./ua/footer.json";

const resources = {
  en: {
    common: enCommon,
    nav: enNav,
    welcome: enWelcome,
    shortProjectList: enShortProjectList,
    projects: enProjects,
    waver: enWaver,
    skills: enSkills,
    footer: enFooter,
  },
  ua: {
    common: uaCommon,
    nav: uaNav,
    welcome: uaWelcome,
    shortProjectList: uaShortProjectList,
    projects: uaProjects,
    waver: uaWaver,
    skills: uaSkills,
    footer: uaFooter,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  ns: [
    "common",
    "nav",
    "welcome",
    "shortProjectList",
    "projects",
    "waver",
    "skills",
    "footer",
  ],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
