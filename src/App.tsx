import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  LayoutDashboard,
  Rocket,
  ShoppingCart,
  Smartphone,
  UsersRound,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import type { ElementType } from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "./components/Navbar";
import { SiteBackground } from "./components/SiteBackground";
import { LANGUAGE_STORAGE_KEY, supportedLanguages, type Language } from "./i18n";
import { ProductsPage } from "./pages/ProductsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { CalculatorPage } from "./pages/CalculatorPage";
import { LegalPage, type LegalPageType } from "./pages/LegalPage";
import { getLocaleFromPath, getRoutePath, localizePath } from "./lib/locale";

type CardItem = {
  title: string;
  description: string;
  icon: ElementType;
};

type StatItem = {
  value: string;
  label: string;
  icon: ElementType;
};

function isLanguage(value: string | null): value is Language {
  return supportedLanguages.some((language) => language === value);
}

function GlassIcon({ icon: Icon }: { icon: ElementType }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-neon-pink/35 bg-neon-pink/10 text-neon-pink shadow-neon transition duration-300 group-hover:scale-105 group-hover:bg-neon-pink/15">
      <Icon className="h-7 w-7" strokeWidth={2.2} />
    </div>
  );
}

function FeatureCard({ item }: { item: CardItem }) {
  return (
    <article className="group flex gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-neon-pink/45 hover:bg-white/[0.07] hover:shadow-neon-soft">
      <GlassIcon icon={item.icon} />
      <div>
        <h3 className="text-base font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
      </div>
    </article>
  );
}

function ServiceCard({ item, moreLabel }: { item: CardItem; moreLabel: string }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-neon-pink/20 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-neon-pink/60 hover:shadow-neon-soft">
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-neon-pink/20 blur-3xl transition duration-300 group-hover:bg-neon-pink/35" />
      <GlassIcon icon={item.icon} />
      <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-300">{item.description}</p>
      <button className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-neon-pink transition hover:gap-3 hover:text-neon-magenta">
        {moreLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

function NeonOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      <div className="hero-orb-pulse absolute inset-[8%] rounded-full border border-white/10 bg-white/[0.035] shadow-[inset_0_0_80px_rgba(255,0,122,.08),0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-sm" />
      <div className="absolute inset-[16%] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-neon-pink/35" />
      <div className="absolute inset-[27%] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-neon-violet/35" />
      <div className="hero-core-pulse absolute inset-[34%] rounded-[2rem] border border-neon-pink/50 bg-[#10091d]/85 shadow-neon backdrop-blur-xl [transform:rotate(45deg)]">
        <div className="hero-core-glow absolute inset-[18%] rounded-2xl bg-neon-pink shadow-[0_0_55px_rgba(255,0,122,.75)]" />
      </div>
      <div className="hero-float-card absolute left-[7%] top-[25%] rounded-2xl border border-white/10 bg-[#100b1d]/80 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
          <span className="h-1.5 w-16 rounded-full bg-white/20" />
        </div>
        <div className="mt-3 h-1.5 w-24 rounded-full bg-neon-pink/60" />
      </div>
      <div className="hero-float-code absolute bottom-[13%] right-[2%] grid h-20 w-20 place-items-center rounded-3xl border border-neon-pink/30 bg-neon-pink/10 text-neon-pink shadow-neon backdrop-blur-xl">
        <Code2 className="h-8 w-8" />
      </div>
      <div className="hero-float-database absolute right-[4%] top-[21%] grid h-16 w-16 place-items-center rounded-2xl border border-neon-violet/30 bg-neon-violet/10 text-neon-violet shadow-[0_0_34px_rgba(168,85,247,.25)] backdrop-blur-xl">
        <Database className="h-7 w-7" />
      </div>
      <div className="hero-float-mobile absolute bottom-[10%] left-[8%] grid h-[4.5rem] w-[4.5rem] place-items-center rounded-3xl border border-cyan-300/25 bg-cyan-300/[0.07] text-cyan-300 shadow-[0_0_34px_rgba(103,232,249,.18)] backdrop-blur-xl">
        <Smartphone className="h-7 w-7" />
      </div>
      <span className="hero-float-dot-pink absolute right-[9%] top-[16%] h-3 w-3 rounded-full bg-neon-pink shadow-neon" />
      <span className="hero-float-dot-violet absolute left-[31%] top-[7%] h-2 w-2 rounded-full bg-neon-violet shadow-[0_0_18px_rgba(168,85,247,.9)]" />
      <div className="absolute inset-[15%] rounded-full bg-neon-pink/10 blur-3xl" />
    </div>
  );
}

function App() {
  const { i18n, t } = useTranslation();
  const routePath = getRoutePath();
  const urlLocale = getLocaleFromPath();
  const isProductsPage = routePath === "/products";
  const isProjectsPage = routePath === "/projects";
  const isContactPage = routePath === "/contact";
  const isCalculatorPage = routePath === "/calculator";
  const legalPageType = (
    ["privacy", "terms", "cookies"] as LegalPageType[]
  ).find((page) => routePath === `/${page}`);

  useEffect(() => {
    if (urlLocale) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, urlLocale);
      void i18n.changeLanguage(urlLocale);
      return;
    }

    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguage(savedLanguage)) {
      void i18n.changeLanguage(savedLanguage);
      return;
    }

    const controller = new AbortController();
    const fallbackLanguage: Language = navigator.language.toLowerCase().startsWith("hu") ? "hu" : "en";

    fetch("https://ipapi.co/country/", {
      signal: controller.signal,
      headers: { Accept: "text/plain" },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Country lookup failed");
        return response.text();
      })
      .then((countryCode) => {
        void i18n.changeLanguage(countryCode.trim().toUpperCase() === "HU" ? "hu" : "en");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        void i18n.changeLanguage(fallbackLanguage);
      });

    return () => controller.abort();
  }, [i18n, urlLocale]);

  useEffect(() => {
    const language: Language = i18n.resolvedLanguage === "hu" ? "hu" : "en";
    document.documentElement.lang = language;
    const metaPrefix = isProductsPage
      ? "productsPage"
      : isProjectsPage
        ? "projectsPage"
        : isContactPage
          ? "contactPage"
          : isCalculatorPage
            ? "calculatorPage"
            : legalPageType
              ? `legalPages.${legalPageType}`
        : "meta";
    const title = t(`${metaPrefix}.${metaPrefix === "meta" ? "title" : "metaTitle"}`);
    const metaDescription = t(
      `${metaPrefix}.${metaPrefix === "meta" ? "description" : "metaDescription"}`,
    );
    document.title = title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", metaDescription);

    const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };
    const setLink = (hreflang: string | null, href: string, rel = "alternate") => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let element = document.querySelector<HTMLLinkElement>(selector);
      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        if (hreflang) element.hreflang = hreflang;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    const canonicalUrl = new URL(localizePath(routePath, urlLocale), window.location.origin).href;
    const ogImageUrl = new URL("/og.png", window.location.origin).href;
    setLink(null, canonicalUrl, "canonical");
    setLink("hu", new URL(localizePath(routePath, "hu"), window.location.origin).href);
    setLink("en", new URL(localizePath(routePath, "en"), window.location.origin).href);
    setLink("x-default", new URL(localizePath(routePath, null), window.location.origin).href);
    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      legalPageType ? "noindex, follow" : "index, follow, max-image-preview:large",
    );
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Nexa");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", metaDescription);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", ogImageUrl);
    setMeta('meta[property="og:locale"]', "property", "og:locale", language === "hu" ? "hu_HU" : "en_US");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", metaDescription);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImageUrl);

    let structuredData = document.querySelector<HTMLScriptElement>("#nexa-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "nexa-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Organization", "@id": `${window.location.origin}/#organization`, name: "Nexa", url: window.location.origin, logo: new URL("/favicon.svg", window.location.origin).href },
        { "@type": "WebSite", "@id": `${window.location.origin}/#website`, name: "Nexa", url: window.location.origin, publisher: { "@id": `${window.location.origin}/#organization` } },
      ],
    });
  }, [
    i18n.resolvedLanguage,
    isCalculatorPage,
    isContactPage,
    isProductsPage,
    isProjectsPage,
    legalPageType,
    routePath,
    t,
    urlLocale,
  ]);

  if (isProductsPage) {
    return <ProductsPage />;
  }

  if (isProjectsPage) {
    return <ProjectsPage />;
  }

  if (isContactPage) {
    return <ContactPage />;
  }

  if (isCalculatorPage) {
    return <CalculatorPage />;
  }

  if (legalPageType) {
    return <LegalPage type={legalPageType} />;
  }

  const featureItems: CardItem[] = [
    { title: t("features.fast.title"), description: t("features.fast.description"), icon: Zap },
    { title: t("features.modern.title"), description: t("features.modern.description"), icon: Code2 },
    {
      title: t("features.scalable.title"),
      description: t("features.scalable.description"),
      icon: LayoutDashboard,
    },
    {
      title: t("features.userCentered.title"),
      description: t("features.userCentered.description"),
      icon: UsersRound,
    },
  ];

  const serviceItems: CardItem[] = [
    { title: t("services.web.title"), description: t("services.web.description"), icon: LayoutDashboard },
    { title: t("services.platforms.title"), description: t("services.platforms.description"), icon: Layers3 },
    { title: t("services.mobile.title"), description: t("services.mobile.description"), icon: ShoppingCart },
    { title: t("services.design.title"), description: t("services.design.description"), icon: Code2 },
  ];

  const stats: StatItem[] = [
    { value: "11+", label: t("stats.clients"), icon: UsersRound },
    { value: "20+", label: t("stats.projects"), icon: Boxes },
    { value: t("stats.experienceValue"), label: t("stats.experience"), icon: Rocket },
    { value: "100%", label: t("stats.satisfaction"), icon: CheckCircle2 },
  ];

  return (
    <SiteBackground>
      <Navbar />

      <main>
      <section id="home" className="mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-12 px-6 pb-20 pt-14 md:pt-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-200 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-neon-pink shadow-neon" />
            {t("hero.eyebrow")}
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            <span className="block text-neon-pink drop-shadow-[0_0_26px_rgba(255,0,122,0.35)]">{t("hero.titlePrimary")}</span>
            <span className="block text-white">{t("hero.titleSecondary")}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{t("hero.description")}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-neon-pink px-8 py-4 text-sm font-bold text-white shadow-neon transition hover:-translate-y-1 hover:bg-neon-magenta hover:shadow-[0_0_48px_rgba(255,0,122,0.75)]"
            >
              {t("hero.startProject")}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-neon-pink/50 hover:text-neon-pink hover:shadow-neon-soft"
            >
              {t("hero.viewWork")}
              <span className="grid h-6 w-6 place-items-center rounded-full border border-neon-pink/50 text-neon-pink">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
        <div className="relative min-h-[340px]">
          <NeonOrb />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {featureItems.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-neon-pink">{t("services.eyebrow")}</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-white sm:text-5xl">{t("services.title")}</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((item) => (
            <ServiceCard key={item.title} item={item} moreLabel={t("services.more")} />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/35 backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-5 rounded-2xl p-3 transition hover:bg-white/[0.04]">
              <div className="text-neon-pink drop-shadow-[0_0_18px_rgba(255,0,122,0.75)]">
                <Icon className="h-10 w-10" strokeWidth={2.1} />
              </div>
              <div>
                <div className="text-4xl font-black text-white">{value}</div>
                <div className="mt-1 text-sm text-slate-300">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>
    </SiteBackground>
  );
}

export default App;
