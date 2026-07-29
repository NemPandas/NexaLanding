import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: t("nav.calculator"), href: "/#calculator" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.products"), href: "/products" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="relative mx-auto max-w-7xl rounded-2xl border border-white/[0.09] bg-[#090612]/75 px-4 shadow-[0_18px_70px_rgba(0,0,0,.38)] backdrop-blur-2xl sm:px-5">
        <div className="flex h-[74px] items-center">
          <a href="/" className="group mr-8 flex shrink-0 items-center gap-3 text-xl font-black tracking-[0.14em] text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-neon-pink/45 bg-neon-pink/10 text-neon-pink shadow-neon transition group-hover:rotate-6 group-hover:scale-105">
              <Sparkles className="h-5 w-5" />
            </span>
            NEXA
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <LanguageSelector />
            <a
              href="/#contact"
              className="hidden h-11 items-center gap-2 rounded-xl bg-neon-pink px-5 text-sm font-bold text-white shadow-neon transition hover:-translate-y-0.5 hover:bg-neon-magenta sm:inline-flex"
            >
              {t("nav.quote")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/[0.08] pb-4 pt-3 lg:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-neon-pink px-5 py-3 text-sm font-bold text-white sm:hidden"
              >
                {t("nav.quote")}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
