import {
  ArrowRight,
  Boxes,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  LayoutDashboard,
  Menu,
  Rocket,
  Smartphone,
  Sparkles,
  UsersRound,
  WandSparkles,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ElementType } from "react";
import { useTranslation } from "react-i18next";
import {
  LANGUAGE_STORAGE_KEY,
  supportedLanguages,
  type Language,
} from "./i18n";

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

const languageLabels: Record<Language, string> = {
  hu: "HU",
  en: "EN",
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

function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLanguage: Language = i18n.resolvedLanguage === "hu" ? "hu" : "en";

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const selectLanguage = (language: Language) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    void i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={t("language.label")}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-3 text-sm font-bold text-white transition hover:border-neon-pink/50 hover:text-neon-pink"
      >
        <Globe2 className="h-4 w-4" />
        {languageLabels[currentLanguage]}
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t("language.label")}
          className="absolute right-0 top-14 z-50 min-w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#100b1d]/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-2xl"
        >
          {supportedLanguages.map((language) => (
            <button
              key={language}
              type="button"
              role="option"
              aria-selected={currentLanguage === language}
              onClick={() => selectLanguage(language)}
              className="flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              <span>{t(`language.${language}`)}</span>
              {currentLanguage === language && <Check className="h-4 w-4 text-neon-pink" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function NeonOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-6 rounded-full border-[18px] border-neon-pink bg-neon-pink/5 shadow-[0_0_45px_rgba(255,0,122,0.75),inset_0_0_28px_rgba(255,0,122,0.35)]" />
      <div className="absolute inset-0 rounded-full bg-neon-pink/20 blur-3xl" />
      <div className="absolute left-[18%] top-[22%] h-[18%] w-[56%] -rotate-[24deg] rounded-sm bg-neon-pink shadow-neon" />
      <div className="absolute left-[21%] top-[43%] h-[14%] w-[48%] -rotate-45 rounded-sm bg-neon-pink shadow-neon" />
      <div className="absolute bottom-[23%] right-[17%] h-[17%] w-[43%] -rotate-45 rounded-sm bg-neon-pink shadow-neon" />
      <div className="absolute right-[19%] top-[39%] h-[22%] w-[30%] rotate-[18deg] rounded-sm bg-neon-pink shadow-neon" />
      <div className="absolute bottom-[9%] left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-neon-pink/45 blur-3xl" />
    </div>
  );
}

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
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
  }, [i18n]);

  useEffect(() => {
    const language: Language = i18n.resolvedLanguage === "hu" ? "hu" : "en";
    document.documentElement.lang = language;
    document.title = t("meta.title");

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", t("meta.description"));
  }, [i18n.resolvedLanguage, t]);

  const navItems = useMemo(
    () => [
      { label: t("nav.solutions"), href: "#home" },
      { label: t("nav.products"), href: "#services" },
      { label: t("nav.about"), href: "#services" },
      { label: t("nav.pricing"), href: "#services" },
      { label: t("nav.contact"), href: "#contact" },
    ],
    [t, i18n.resolvedLanguage],
  );

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
    { title: t("services.saas.title"), description: t("services.saas.description"), icon: Layers3 },
    { title: t("services.mobile.title"), description: t("services.mobile.description"), icon: Smartphone },
    { title: t("services.design.title"), description: t("services.design.description"), icon: WandSparkles },
  ];

  const stats: StatItem[] = [
    { value: "11+", label: t("stats.clients"), icon: UsersRound },
    { value: "20+", label: t("stats.projects"), icon: Boxes },
    { value: t("stats.experienceValue"), label: t("stats.experience"), icon: Rocket },
    { value: "100%", label: t("stats.satisfaction"), icon: CheckCircle2 },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-midnight text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_65%_28%,rgba(255,0,122,0.26),transparent_28%),radial-gradient(circle_at_24%_80%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(135deg,#05030d_0%,#09071a_44%,#16051f_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(125deg,transparent_0%,transparent_39%,rgba(255,0,122,0.18)_40%,transparent_42%),linear-gradient(315deg,transparent_0%,transparent_64%,rgba(168,85,247,0.18)_65%,transparent_67%)] opacity-70" />

      <header className="sticky top-0 z-50 px-4 py-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.055] px-5 py-4 shadow-2xl shadow-black/40 backdrop-blur-2xl md:px-8">
          <a href="#home" className="flex items-center gap-3 text-2xl font-black tracking-wide text-neon-pink">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-neon-pink/60 bg-neon-pink/10 shadow-neon">
              <Sparkles className="h-5 w-5" />
            </span>
            NEXA
          </a>
          <div className="hidden items-center gap-9 text-sm font-medium text-slate-200 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition hover:text-neon-pink ${index === 0 ? "text-neon-pink" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <LanguageSelector />
            <button className="hidden rounded-2xl border border-neon-pink/55 px-6 py-3 text-sm font-semibold text-neon-pink shadow-neon transition hover:-translate-y-0.5 hover:bg-neon-pink hover:text-white md:inline-flex">
              {t("nav.start")}
            </button>
            <button
              aria-label={t("nav.openMenu")}
              className="rounded-2xl border border-white/10 p-3 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-200 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-neon-pink shadow-neon" />
            {t("hero.eyebrow")}
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
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
        <div className="relative min-h-[320px]">
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
  );
}

export default App;
