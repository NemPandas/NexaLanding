import { FileText, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "../components/Navbar";
import { SiteBackground } from "../components/SiteBackground";

export type LegalPageType = "privacy" | "terms" | "cookies";

const sectionIds = ["first", "second", "third", "fourth"] as const;

export function LegalPage({ type }: { type: LegalPageType }) {
  const { t } = useTranslation();
  const prefix = `legalPages.${type}`;

  return (
    <SiteBackground>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-16 sm:pt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neon-pink">
          <FileText className="h-4 w-4" />
          {t("legalPages.eyebrow")}
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          {t(`${prefix}.title`)}
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-300">{t(`${prefix}.intro`)}</p>

        <div className="mt-8 flex gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm leading-6 text-amber-100/80">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
          {t("legalPages.draftNotice")}
        </div>

        <div className="mt-8 space-y-5">
          {sectionIds.map((sectionId, index) => (
            <section
              key={sectionId}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
            >
              <div className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-neon-pink/10 text-xs font-black text-neon-pink">
                  0{index + 1}
                </span>
                <div>
                  <h2 className="text-xl font-black text-white">{t(`${prefix}.sections.${sectionId}.title`)}</h2>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-300">
                    {t(`${prefix}.sections.${sectionId}.content`)}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </SiteBackground>
  );
}
