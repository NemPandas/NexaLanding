import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LANGUAGE_STORAGE_KEY,
  supportedLanguages,
  type Language,
} from "../i18n";
import { getRoutePath, localizePath } from "../lib/locale";

const languageLabels: Record<Language, string> = {
  hu: "HU",
  en: "EN",
};

export function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLanguage: Language = i18n.resolvedLanguage === "hu" ? "hu" : "en";

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
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
    setIsOpen(false);
    window.location.assign(localizePath(getRoutePath(), language));
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={t("language.label")}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 text-sm font-bold text-white transition hover:border-neon-pink/50 hover:bg-white/[0.08] hover:text-neon-pink"
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
