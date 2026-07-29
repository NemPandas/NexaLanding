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
      productsPage: {
        metaTitle: "Termékek – Nexa",
        metaDescription: "Fedezd fel a Nexa saját digitális termékeit és fejlesztői eszközeit.",
        eyebrow: "Saját termékeink",
        title: "Eszközök, amelyeket mi is szívesen használunk.",
        description:
          "Saját problémákból született, gondosan felépített digitális termékek fejlesztőknek és modern csapatoknak.",
        featured: "Kiemelt",
        viewProduct: "Termék megnyitása",
        listLabel: "Nexa termékek",
        imageAlt: "{{title}} termékbemutató",
        items: {
          nexaCli: {
            title: "Nexa CLI",
            description:
              "Egyetlen paranccsal létrehoz egy teljes full-stack projektvázat választható backenddel, autentikációval, adatbázissal és frontenddel.",
          },
        },
      },
      projectsPage: {
        metaTitle: "Projektek – Nexa",
        metaDescription: "Ismerd meg a Nexa válogatott webes és digitális projektjeit.",
        eyebrow: "Kiemelt munkáink",
        title: "Digitális élmények, valódi üzleti célokra.",
        description:
          "Válogatás azokból a projektekből, ahol a stratégia, a design és a fejlesztés egyetlen következetes rendszerben találkozik.",
        listLabel: "Nexa projektek",
        projectNumber: "Projekt {{number}}",
        imageAlt: "{{title}} projektbemutató",
        openProjectLabel: "{{title}} projekt megnyitása",
        items: {
          smuci: {
            title: "Smuci Sneakers",
            description:
              "Modern sneaker webáruház új és limitált modellekkel, átlátható termékkínálattal és gyors online vásárlási élménnyel.",
          },
        },
      },
      contactPage: {
        metaTitle: "Kapcsolat – Nexa",
        metaDescription: "Vedd fel a kapcsolatot a Nexával, és mesélj a következő digitális projektedről.",
        eyebrow: "Kapcsolat",
        title: "Építsünk valami igazán jót együtt.",
        description:
          "Írd meg röviden, min dolgoznál velünk. A részleteket közösen pontosítjuk, és megtaláljuk a projekthez illő következő lépést.",
        response: "Rövid időn belül jelentkezünk.",
        emailHint: "Adataidat kizárólag a kapcsolatfelvételhez használjuk.",
        form: {
          name: "Név",
          namePlaceholder: "Teljes neved",
          email: "E-mail",
          emailPlaceholder: "nev@pelda.hu",
          phone: "Telefonszám",
          phonePlaceholder: "+36 30 123 4567",
          message: "Üzenet",
          messagePlaceholder: "Mesélj röviden a projektről, az elképzeléseidről és a céljaidról…",
          submit: "Üzenet elküldése",
          demoNotice: "Az üzenetküldési funkció hamarosan elérhető.",
        },
      },
      calculatorPage: {
        metaTitle: "Árkalkulátor – Nexa",
        metaDescription: "Állítsd össze digitális projektedet, és nézd meg a becsült egyszeri és havi költségeket.",
        eyebrow: "Projektkalkulátor",
        title: "Mennyibe kerül az ötleted megvalósítása?",
        description:
          "Válaszd ki a projektedhez szükséges elemeket. Az összesítő azonnal megmutatja a becsült fejlesztési és havi üzemeltetési díjat.",
        perMonth: "/ hónap",
        perMonthShort: "/ hó",
        priceOnlyBuild: "Csak elkészítés",
        priceWithOperation: "Üzemeltetéssel",
        groups: {
          projectType: { title: "Projekt típusa" },
          design: { title: "Rendelkezel kész designnal?" },
          auth: {
            title: "Szükséges bejelentkezés?",
            description: "Ez elsősorban webalkalmazásoknál és webáruházaknál fontos.",
          },
          payment: { title: "Fizetési rendszer" },
          integration: { title: "Kapcsolódik más rendszerhez?" },
          content: { title: "Mennyi tartalom kerül fel?" },
        },
        options: {
          projectType: {
            landing: "Landing oldal",
            webshop: "Webáruház",
            webapp: "Webalkalmazás",
            mobile: "Mobilalkalmazás",
          },
          design: { yes: "Igen, van kész design", no: "Nem, a designt is kérem" },
          auth: {
            none: "Nem szükséges",
            user: "Felhasználói fiók",
            admin: "Admin felület",
            both: "Felhasználói fiók és admin",
          },
          payment: {
            none: "Nem szükséges",
            card: "Bankkártyás fizetés",
            subscription: "Előfizetéses rendszer",
            multiple: "Több fizetési mód",
          },
          integration: {
            none: "Nincs külső kapcsolat",
            billing: "Számlázó",
            crm: "CRM rendszer",
            erp: "ERP rendszer",
            api: "Egyedi API",
          },
          content: {
            small: "Kevés (1–5 oldal)",
            medium: "Közepes (5–20 oldal)",
            large: "Sok (20+ oldal)",
          },
        },
        operation: {
          title: "Szeretnéd, hogy mi üzemeltessük?",
          shortTitle: "Üzemeltetés",
          description:
            "Az üzemeltetés tartalmazza a tárhelyet, a technikai felügyeletet és havonta legfeljebb 6 kisebb módosítást.",
          yes: "Igen, kérem az üzemeltetést",
          no: "Nem kérek üzemeltetést",
          noMonthlyFee: "Nincs havi díj",
        },
        summary: {
          title: "Részletes összesítő",
          reset: "Kalkulátor alaphelyzetbe állítása",
          oneTime: "Egyszeri fejlesztési díj",
          monthly: "Becsült havi díj",
          oneTimeShort: "Egyszeri",
          monthlyShort: "Havi",
          notice:
            "Az összeg tájékoztató becslés. A végleges ajánlatot a pontos követelmények egyeztetése után adjuk.",
        },
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
      productsPage: {
        metaTitle: "Products – Nexa",
        metaDescription: "Discover Nexa's own digital products and developer tools.",
        eyebrow: "Our products",
        title: "Tools we genuinely enjoy using.",
        description:
          "Carefully crafted digital products born from real problems, built for developers and modern teams.",
        featured: "Featured",
        viewProduct: "View product",
        listLabel: "Nexa products",
        imageAlt: "{{title}} product preview",
        items: {
          nexaCli: {
            title: "Nexa CLI",
            description:
              "Generate a complete full-stack project skeleton with selectable backend, authentication, database, and frontend using a single command.",
          },
        },
      },
      projectsPage: {
        metaTitle: "Projects – Nexa",
        metaDescription: "Explore Nexa's selected web and digital projects.",
        eyebrow: "Selected work",
        title: "Digital experiences built around real business goals.",
        description:
          "A selection of projects where strategy, design, and development come together in one consistent system.",
        listLabel: "Nexa projects",
        projectNumber: "Project {{number}}",
        imageAlt: "{{title}} project preview",
        openProjectLabel: "Open the {{title}} project",
        items: {
          smuci: {
            title: "Smuci Sneakers",
            description:
              "A modern sneaker store featuring new and limited releases, a clear product catalog, and a fast online shopping experience.",
          },
        },
      },
      contactPage: {
        metaTitle: "Contact – Nexa",
        metaDescription: "Contact Nexa and tell us about your next digital project.",
        eyebrow: "Contact",
        title: "Let's build something genuinely great together.",
        description:
          "Tell us briefly what you would like to build. We will shape the details together and find the right next step for your project.",
        response: "We will get back to you shortly.",
        emailHint: "Your details will only be used to respond to your inquiry.",
        form: {
          name: "Name",
          namePlaceholder: "Your full name",
          email: "Email",
          emailPlaceholder: "name@example.com",
          phone: "Phone number",
          phonePlaceholder: "+1 555 123 4567",
          message: "Message",
          messagePlaceholder: "Tell us briefly about your project, ideas, and goals…",
          submit: "Send message",
          demoNotice: "Message delivery will be available soon.",
        },
      },
      calculatorPage: {
        metaTitle: "Price calculator – Nexa",
        metaDescription: "Configure your digital project and see its estimated one-time and monthly costs.",
        eyebrow: "Project calculator",
        title: "How much will it cost to build your idea?",
        description:
          "Select the components your project needs. The summary instantly shows the estimated development and monthly maintenance fees.",
        perMonth: "/ month",
        perMonthShort: "/ mo",
        priceOnlyBuild: "Build only",
        priceWithOperation: "With maintenance",
        groups: {
          projectType: { title: "Project type" },
          design: { title: "Do you already have a finished design?" },
          auth: {
            title: "Is authentication required?",
            description: "This is especially relevant for web apps and online stores.",
          },
          payment: { title: "Payment system" },
          integration: { title: "Does it connect to another system?" },
          content: { title: "How much content will it include?" },
        },
        options: {
          projectType: {
            landing: "Landing page",
            webshop: "Online store",
            webapp: "Web application",
            mobile: "Mobile application",
          },
          design: { yes: "Yes, I have a design", no: "No, I also need design" },
          auth: {
            none: "Not required",
            user: "User accounts",
            admin: "Admin interface",
            both: "User accounts and admin",
          },
          payment: {
            none: "Not required",
            card: "Card payments",
            subscription: "Subscription system",
            multiple: "Multiple payment methods",
          },
          integration: {
            none: "No external connection",
            billing: "Invoicing platform",
            crm: "CRM system",
            erp: "ERP system",
            api: "Custom API",
          },
          content: {
            small: "Small (1–5 pages)",
            medium: "Medium (5–20 pages)",
            large: "Large (20+ pages)",
          },
        },
        operation: {
          title: "Would you like us to maintain it?",
          shortTitle: "Maintenance",
          description:
            "Maintenance includes hosting, technical supervision, and up to 6 minor content changes per month.",
          yes: "Yes, include maintenance",
          no: "No maintenance required",
          noMonthlyFee: "No monthly fee",
        },
        summary: {
          title: "Detailed summary",
          reset: "Reset calculator",
          oneTime: "One-time development fee",
          monthly: "Estimated monthly fee",
          oneTimeShort: "One-time",
          monthlyShort: "Monthly",
          notice:
            "This amount is an indicative estimate. The final quote is provided after reviewing the exact requirements.",
        },
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
