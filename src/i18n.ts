import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLanguages = ["hu", "en"] as const;
export type Language = (typeof supportedLanguages)[number];
export const LANGUAGE_STORAGE_KEY = "nexa-language";

const resources = {
  hu: {
    translation: {
      meta: {
        title: "Webfejlesztés és egyedi online rendszerek – Nexa",
        description:
          "Egyedi weboldalak, webáruházak, előfizetéses platformok és webalkalmazások tervezése és fejlesztése.",
      },
      productsPage: {
        metaTitle: "Digitális termékek és fejlesztői eszközök – Nexa",
        metaDescription: "Fedezd fel a Nexa saját digitális termékeit és fejlesztői eszközeit, köztük a Nexa CLI-t.",
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
        metaTitle: "Webfejlesztési projektek és referenciák – Nexa",
        metaDescription: "Ismerd meg a Nexa válogatott webáruház-, webalkalmazás- és digitális projektjeit.",
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
        metaTitle: "Kapcsolat és projektajánlat – Nexa",
        metaDescription: "Vedd fel a kapcsolatot a Nexával, és kérj személyre szabott ajánlatot weboldaladhoz vagy alkalmazásodhoz.",
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
          submitting: "Küldés folyamatban…",
          success: "Köszönjük! Az üzeneted sikeresen megérkezett.",
          error: "Az üzenetet nem sikerült elküldeni. Kérjük, próbáld újra.",
          notice: "A név, az e-mail-cím és az üzenet kitöltése kötelező.",
        },
      },
      calculatorPage: {
        metaTitle: "Weboldal és alkalmazás árkalkulátor – Nexa",
        metaDescription: "Állítsd össze digitális projektedet, és nézd meg a becsült egyszeri fejlesztési és havi üzemeltetési költségeket.",
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
      footer: {
        description:
          "Üzleti weboldalakat, előfizetéses platformokat, webáruházakat és egyedi webalkalmazásokat tervezünk és fejlesztünk.",
        navigation: "Oldalak",
        information: "Információk",
        getInTouch: "Beszéljünk a projektedről",
        socialComingSoon: "hamarosan",
        rights: "Minden jog fenntartva.",
        madeWith: "Tervezve és fejlesztve a Nexánál.",
        links: {
          calculator: "Kalkulátor",
          projects: "Projektek",
          products: "Termékek",
          contact: "Kapcsolat",
        },
        legal: {
          privacy: "Adatvédelem",
          terms: "Általános Szerződési Feltételek",
          cookies: "Cookie-tájékoztató",
        },
      },
      legalPages: {
        eyebrow: "Jogi információk",
        draftNotice:
          "Ez az oldal szerkeszthető tervezet. A közzététel előtt ki kell egészíteni a hivatalos cégadatokkal, és jogi szakértővel ellenőriztetni kell.",
        privacy: {
          metaTitle: "Adatvédelem – Nexa",
          metaDescription: "A Nexa adatkezelési tájékoztatójának szerkeszthető tervezete.",
          title: "Adatkezelési tájékoztató",
          intro:
            "Összefoglaló arról, hogy a Nexa weboldala milyen adatokat használhat, milyen célból és milyen választási lehetőségeid vannak.",
          sections: {
            first: {
              title: "Az adatkezelő adatai",
              content:
                "Név: [Hivatalos cégnév]\nSzékhely: [Hivatalos cím]\nE-mail: [Kapcsolati e-mail]\nAdószám / nyilvántartási szám: [Kitöltendő]",
            },
            second: {
              title: "Kapcsolatfelvételi adatok",
              content:
                "A kapcsolatfelvételi űrlapon megadott név, e-mail-cím, telefonszám és üzenet kizárólag a megkeresés megválaszolásához és az esetleges projekt egyeztetéséhez használható.",
            },
            third: {
              title: "Technikai és nyelvi adatok",
              content:
                "A weboldal a kiválasztott nyelvet a böngésző helyi tárhelyén tárolja. Az automatikus nyelvválasztáshoz külső országkód-lekérdezés használható, amely a látogató IP-címe alapján határozza meg az országot.",
            },
            fourth: {
              title: "Jogok és kapcsolat",
              content:
                "Az érintett kérheti a rá vonatkozó adatokhoz való hozzáférést, azok helyesbítését vagy törlését, illetve tájékoztatást kérhet az adatkezelésről. A részletes eljárást és a felügyeleti hatóság adatait a végleges változatban kell rögzíteni.",
            },
          },
        },
        terms: {
          metaTitle: "ÁSZF – Nexa",
          metaDescription: "A Nexa általános szerződési feltételeinek szerkeszthető tervezete.",
          title: "Általános Szerződési Feltételek",
          intro:
            "A Nexa digitális tervezési, fejlesztési és üzemeltetési szolgáltatásaira vonatkozó alapvető feltételek tervezete.",
          sections: {
            first: {
              title: "Szolgáltató adatai",
              content:
                "Szolgáltató: [Hivatalos cégnév]\nSzékhely: [Hivatalos cím]\nKapcsolat: [E-mail és telefonszám]\nNyilvántartási adatok: [Kitöltendő]",
            },
            second: {
              title: "Ajánlat és szerződés",
              content:
                "A weboldalon megjelenő kalkuláció tájékoztató jellegű becslés. A pontos feladatokat, határidőket, díjakat és fizetési ütemezést minden projekt esetén egyedi írásos ajánlat és szerződés rögzíti.",
            },
            third: {
              title: "Teljesítés és módosítások",
              content:
                "A projekt átadási feltételeit, a visszajelzési köröket, az ügyfél által biztosítandó anyagokat és az eredeti terjedelmen felüli módosítások díjazását az egyedi megállapodás tartalmazza.",
            },
            fourth: {
              title: "Üzemeltetés és felelősség",
              content:
                "Az üzemeltetési csomag pontos tartalmát, rendelkezésre állását, tárhelyét, támogatását és havi módosítási keretét külön szolgáltatási megállapodásban kell rögzíteni. A végleges felelősségi és felmondási szabályok jogi ellenőrzést igényelnek.",
            },
          },
        },
        cookies: {
          metaTitle: "Cookie-tájékoztató – Nexa",
          metaDescription: "A Nexa cookie- és böngészőtárolási tájékoztatójának szerkeszthető tervezete.",
          title: "Cookie- és tárhelytájékoztató",
          intro:
            "Áttekintés a weboldal által jelenleg használt böngészőtárolási megoldásokról és azok céljáról.",
          sections: {
            first: {
              title: "Mi az a cookie?",
              content:
                "A cookie egy kis adatfájl, amelyet a weboldal a böngészőben tárolhat. Hasonló célra a böngésző helyi tárhelye is használható. Ezek segíthetnek egy beállítás megjegyzésében vagy a weboldal működésében.",
            },
            second: {
              title: "Nyelvi beállítás",
              content:
                "A Nexa weboldala a kézzel kiválasztott HU vagy EN nyelvet a böngésző helyi tárhelyén őrzi meg, hogy a következő látogatáskor is ugyanazt a nyelvet jelenítse meg.",
            },
            third: {
              title: "Külső szolgáltatások",
              content:
                "Az automatikus országfelismeréshez külső IP-országkód szolgáltatás használható. Ha később analitikai, marketing- vagy beágyazott szolgáltatások kerülnek az oldalra, ezt a tájékoztatót és a hozzájárulás-kezelést frissíteni kell.",
            },
            fourth: {
              title: "Beállítások kezelése",
              content:
                "A helyi adatok a böngésző beállításaiban törölhetők. A szükséges és opcionális tárolók pontos listáját, megőrzési idejét és szolgáltatóját a végleges változatban kell feltüntetni.",
            },
          },
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
        eyebrow: "Webfejlesztő stúdió",
        titlePrimary: "Weboldalból ügyfelek.",
        titleSecondary: "Ötletből működő rendszer.",
        description:
          "Gyors, átlátható és skálázható webes megoldásokat építünk, amelyek támogatják a vállalkozásod működését és növekedését.",
        startProject: "Beszéljük át a projektet",
        viewWork: "Nézd meg a referenciáinkat",
      },
      features: {
        fast: {
          title: "Célorientált fejlesztés",
          description: "Az üzleti célokra és a valóban szükséges funkciókra koncentrálunk.",
        },
        modern: {
          title: "Modern és gyors",
          description: "Gyorsan betöltődő, biztonságos és hosszú távon karbantartható rendszereket építünk.",
        },
        scalable: {
          title: "Skálázható rendszeralapok",
          description: "Olyan architektúrát tervezünk, amely a felhasználóiddal és a vállalkozásoddal együtt nő.",
        },
        userCentered: {
          title: "Konverzióközpontú UX",
          description: "Átlátható felületekkel segítjük a látogatókat a következő lépés megtételében.",
        },
      },
      services: {
        eyebrow: "Webes szolgáltatásaink",
        title: "Mit építünk?",
        more: "Részletek",
        web: {
          title: "Üzleti weboldalak",
          description: "Gyors, reszponzív és keresőbarát weboldalak, amelyek ügyfeleket szereznek a vállalkozásodnak.",
        },
        platforms: {
          title: "Előfizetéses platformok",
          description: "Előfizetéses, többfelhasználós webes rendszerek stabil és bővíthető technikai alapokkal.",
        },
        mobile: {
          title: "Webáruházak",
          description: "Átlátható, gyors és könnyen kezelhető webshopok fizetési és üzleti integrációkkal.",
        },
        design: {
          title: "Egyedi webalkalmazások",
          description: "Adminfelületek, ügyfélportálok és belső rendszerek a saját üzleti folyamataidra szabva.",
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
        title: "Web development and custom online platforms – Nexa",
        description:
          "Design and development of custom websites, online stores, subscription platforms, and web applications.",
      },
      productsPage: {
        metaTitle: "Digital products and developer tools – Nexa",
        metaDescription: "Discover Nexa's own digital products and developer tools, including Nexa CLI.",
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
        metaTitle: "Web development projects and case studies – Nexa",
        metaDescription: "Explore Nexa's selected online store, web application, and digital product projects.",
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
        metaTitle: "Contact and project quote – Nexa",
        metaDescription: "Contact Nexa and request a tailored quote for your website or application project.",
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
          submitting: "Sending…",
          success: "Thank you! Your message has been sent successfully.",
          error: "The message could not be sent. Please try again.",
          notice: "Name, email, and message are required.",
        },
      },
      calculatorPage: {
        metaTitle: "Website and app price calculator – Nexa",
        metaDescription: "Configure your digital project and see the estimated one-time development and monthly maintenance costs.",
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
      footer: {
        description:
          "We design and develop business websites, subscription platforms, online stores, and custom web applications.",
        navigation: "Pages",
        information: "Information",
        getInTouch: "Let's discuss your project",
        socialComingSoon: "coming soon",
        rights: "All rights reserved.",
        madeWith: "Designed and developed at Nexa.",
        links: {
          calculator: "Calculator",
          projects: "Projects",
          products: "Products",
          contact: "Contact",
        },
        legal: {
          privacy: "Privacy",
          terms: "Terms and Conditions",
          cookies: "Cookie notice",
        },
      },
      legalPages: {
        eyebrow: "Legal information",
        draftNotice:
          "This page is an editable draft. It must be completed with official company details and reviewed by a legal professional before publication.",
        privacy: {
          metaTitle: "Privacy – Nexa",
          metaDescription: "An editable draft of Nexa's privacy notice.",
          title: "Privacy notice",
          intro:
            "A summary of what data the Nexa website may use, why it may be used, and what choices are available to you.",
          sections: {
            first: {
              title: "Data controller",
              content:
                "Name: [Official company name]\nRegistered office: [Official address]\nEmail: [Contact email]\nRegistration / tax number: [To be completed]",
            },
            second: {
              title: "Contact information",
              content:
                "The name, email address, phone number, and message entered in the contact form may only be used to answer the inquiry and discuss a potential project.",
            },
            third: {
              title: "Technical and language data",
              content:
                "The website stores the selected language in the browser's local storage. An external country-code lookup may be used for automatic language selection based on the visitor's IP address.",
            },
            fourth: {
              title: "Your rights and contact",
              content:
                "A person may request access to, correction of, or deletion of their personal data and may request information about its processing. The detailed procedure and supervisory authority information must be added to the final version.",
            },
          },
        },
        terms: {
          metaTitle: "Terms and Conditions – Nexa",
          metaDescription: "An editable draft of Nexa's general terms and conditions.",
          title: "Terms and Conditions",
          intro:
            "Draft baseline terms for Nexa's digital design, development, and maintenance services.",
          sections: {
            first: {
              title: "Service provider",
              content:
                "Provider: [Official company name]\nRegistered office: [Official address]\nContact: [Email and phone]\nRegistration details: [To be completed]",
            },
            second: {
              title: "Quotes and agreements",
              content:
                "Calculations shown on the website are indicative estimates. The exact scope, deadlines, fees, and payment schedule of every project are defined in an individual written quote and agreement.",
            },
            third: {
              title: "Delivery and changes",
              content:
                "Delivery conditions, feedback rounds, materials supplied by the client, and pricing for changes outside the original scope are defined in the individual agreement.",
            },
            fourth: {
              title: "Maintenance and liability",
              content:
                "The exact maintenance package, availability, hosting, support, and monthly change allowance must be defined in a separate service agreement. Final liability and termination rules require legal review.",
            },
          },
        },
        cookies: {
          metaTitle: "Cookie notice – Nexa",
          metaDescription: "An editable draft of Nexa's cookie and browser-storage notice.",
          title: "Cookie and storage notice",
          intro:
            "An overview of the browser-storage technologies currently used by the website and their purposes.",
          sections: {
            first: {
              title: "What is a cookie?",
              content:
                "A cookie is a small data file a website may store in the browser. Browser local storage can serve a similar purpose. These technologies can remember a preference or support website functionality.",
            },
            second: {
              title: "Language preference",
              content:
                "The Nexa website stores the manually selected HU or EN language in browser local storage so the same language can be shown on the next visit.",
            },
            third: {
              title: "External services",
              content:
                "An external IP country-code service may be used for automatic country detection. If analytics, marketing, or embedded services are added later, this notice and consent management must be updated.",
            },
            fourth: {
              title: "Managing settings",
              content:
                "Local data can be deleted in the browser settings. The exact list, retention period, and provider of required and optional storage technologies must be included in the final version.",
            },
          },
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
        eyebrow: "Web development studio",
        titlePrimary: "Websites that win customers.",
        titleSecondary: "Platforms that scale with you.",
        description:
          "We build fast, clear, and scalable web solutions that support how your business operates and grows.",
        startProject: "Discuss your project",
        viewWork: "View our projects",
      },
      features: {
        fast: {
          title: "Goal-focused development",
          description: "We focus on business outcomes and the features your product genuinely needs.",
        },
        modern: {
          title: "Modern and fast",
          description: "We build secure, fast-loading systems that remain maintainable in the long term.",
        },
        scalable: {
          title: "Scalable system foundations",
          description: "We design architectures that grow alongside your users and your business.",
        },
        userCentered: {
          title: "Conversion-focused UX",
          description: "Clear interfaces guide visitors toward the next meaningful action.",
        },
      },
      services: {
        eyebrow: "Our web services",
        title: "What do we build?",
        more: "Details",
        web: {
          title: "Business websites",
          description: "Fast, responsive, and search-friendly websites designed to generate customers for your business.",
        },
        platforms: {
          title: "Subscription platforms",
          description: "Subscription-based, multi-user web platforms built on stable and extensible foundations.",
        },
        mobile: {
          title: "Online stores",
          description: "Clear, fast, and manageable ecommerce experiences with payment and business integrations.",
        },
        design: {
          title: "Custom web applications",
          description: "Admin panels, customer portals, and internal systems tailored to your business processes.",
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
