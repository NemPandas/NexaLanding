import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLanguages = ["hu", "en"] as const;
export type Language = (typeof supportedLanguages)[number];
export const LANGUAGE_STORAGE_KEY = "nexa-language";

const resources = {
  hu: {
    translation: {
      meta: {
        title: "Nexa – Digitális termékstúdió",
        description:
          "A Nexa modern webalkalmazásokat, SaaS termékeket és mobilalkalmazásokat tervez és fejleszt.",
      },
      language: {
        label: "Nyelv kiválasztása",
        hu: "Magyar",
        en: "English",
      },
      nav: {
        calculator: "Kalkulátor",
        projects: "Projektek",
        products: "Termékek",
        contact: "Kapcsolat",
        quote: "Ajánlatot kérek",
        openMenu: "Menü megnyitása",
        closeMenu: "Menü bezárása",
      },
      hero: {
        eyebrow: "Digitális termékstúdió",
        titlePrimary: "Digitális termékek.",
        titleSecondary: "Valódi érték.",
        description:
          "A Nexa segít ötleteidet modern, skálázható és felhasználóközpontú digitális termékekké formálni.",
        startProject: "Kezdjük el a projektet",
        viewWork: "Nézd meg a munkáinkat",
      },
      features: {
        fast: {
          title: "Gyors fejlesztés",
          description: "Agilis folyamatokkal gyorsan piacra viheted az ötleted.",
        },
        modern: {
          title: "Modern technológia",
          description: "A legújabb technológiákkal építünk stabil termékeket.",
        },
        scalable: {
          title: "Skálázható megoldások",
          description: "Növekedésre tervezett architektúrák, amelyek együtt nőnek veled.",
        },
        userCentered: {
          title: "Felhasználóközpontú",
          description: "A felhasználói élmény már a tervezés kezdetétől a középpontban van.",
        },
      },
      services: {
        eyebrow: "Megoldásaink",
        title: "Miben segíthetünk?",
        more: "Tovább",
        web: {
          title: "Webalkalmazások",
          description: "Egyedi webes rendszerek, amelyek az üzleti céljaidat szolgálják.",
        },
        saas: {
          title: "SaaS termékek",
          description: "Skálázható és jövőbiztos előfizetéses megoldások.",
        },
        mobile: {
          title: "Mobilalkalmazások",
          description: "Nagy teljesítményű mobilalkalmazások iOS-re és Androidra.",
        },
        design: {
          title: "UI/UX tervezés",
          description: "Intuitív, modern felületek, amelyek a felhasználóidat helyezik előtérbe.",
        },
      },
      stats: {
        clients: "Elégedett ügyfél",
        projects: "Sikeres projekt",
        experienceValue: "5+ év",
        experience: "Tapasztalat",
        satisfaction: "Ügyfél-elégedettség",
      },
    },
  },
  en: {
    translation: {
      meta: {
        title: "Nexa – Digital product studio",
        description:
          "Nexa designs and develops modern web applications, SaaS products, and mobile apps.",
      },
      language: {
        label: "Select language",
        hu: "Magyar",
        en: "English",
      },
      nav: {
        calculator: "Calculator",
        projects: "Projects",
        products: "Products",
        contact: "Contact",
        quote: "Get a quote",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        eyebrow: "Digital product studio",
        titlePrimary: "Digital products.",
        titleSecondary: "Real value.",
        description:
          "Nexa helps turn your ideas into modern, scalable, and user-centered digital products.",
        startProject: "Start your project",
        viewWork: "Explore our work",
      },
      features: {
        fast: {
          title: "Fast development",
          description: "Agile processes help bring your idea to market quickly.",
        },
        modern: {
          title: "Modern technology",
          description: "We build reliable products with the latest technologies.",
        },
        scalable: {
          title: "Scalable solutions",
          description: "Growth-ready architectures that scale alongside your business.",
        },
        userCentered: {
          title: "User-centered",
          description: "User experience is at the heart of the process from day one.",
        },
      },
      services: {
        eyebrow: "Our solutions",
        title: "How can we help?",
        more: "Learn more",
        web: {
          title: "Web applications",
          description: "Custom web systems designed around your business goals.",
        },
        saas: {
          title: "SaaS products",
          description: "Scalable, future-ready subscription-based solutions.",
        },
        mobile: {
          title: "Mobile applications",
          description: "High-performance mobile apps for iOS and Android.",
        },
        design: {
          title: "UI/UX design",
          description: "Intuitive, modern interfaces that put your users first.",
        },
      },
      stats: {
        clients: "Happy clients",
        projects: "Successful projects",
        experienceValue: "5+ years",
        experience: "Experience",
        satisfaction: "Client satisfaction",
      },
    },
  },
} as const;

void i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
