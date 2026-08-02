import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Sparkles } from "lucide-react";
import type { ElementType } from "react";
import { useTranslation } from "react-i18next";
import {
  footerLegalLinks,
  footerNavigation,
  socialLinks,
  type SocialPlatform,
} from "../data/footer";

const socialIcons: Record<SocialPlatform, ElementType> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 mt-10 border-t border-white/[0.08] bg-[#05030d]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        <div className="grid gap-10 border-b border-white/[0.08] pb-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <a href="/" className="inline-flex items-center gap-3 text-xl font-black tracking-[0.14em] text-white">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-neon-pink/45 bg-neon-pink/10 text-neon-pink shadow-neon">
                <Sparkles className="h-5 w-5" />
              </span>
              NEXA
            </a>
            <p className="mt-5 text-sm leading-6 text-slate-400">{t("footer.description")}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.id];
                const sharedClassName =
                  "grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition";

                return social.href ? (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`${sharedClassName} hover:border-neon-pink/45 hover:text-neon-pink hover:shadow-neon`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <span
                    key={social.id}
                    aria-label={`${social.label} – ${t("footer.socialComingSoon")}`}
                    title={`${social.label} – ${t("footer.socialComingSoon")}`}
                    className={`${sharedClassName} cursor-not-allowed opacity-55`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">{t("footer.navigation")}</h2>
            <nav className="mt-5 grid gap-3">
              {footerNavigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-neon-pink"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">{t("footer.information")}</h2>
            <nav className="mt-5 grid gap-3">
              {footerLegalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-neon-pink"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </nav>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-neon-pink transition hover:text-neon-magenta"
            >
              {t("footer.getInTouch")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexa. {t("footer.rights")}</p>
          <p>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
