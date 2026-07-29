import { ArrowUpRight, Mail, MessageSquareText, Phone, Sparkles, UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "../components/Navbar";
import { SiteBackground } from "../components/SiteBackground";

const fieldClassName =
  "mt-2.5 w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-neon-pink/60 focus:bg-white/[0.065] focus:shadow-[0_0_0_4px_rgba(255,0,122,.08)]";

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <SiteBackground>
      <Navbar />
      <main className="mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <section className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neon-pink">
            <Sparkles className="h-4 w-4" />
            {t("contactPage.eyebrow")}
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {t("contactPage.title")}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            {t("contactPage.description")}
          </p>

          <div className="mt-9 space-y-3">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-neon-pink">
                <MessageSquareText className="h-4 w-4" />
              </span>
              {t("contactPage.response")}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-neon-pink">
                <Mail className="h-4 w-4" />
              </span>
              {t("contactPage.emailHint")}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,.38)] backdrop-blur-2xl sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-neon-pink/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-neon-violet/10 blur-3xl" />

          <form className="relative" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-2">
                  <UserRound className="h-4 w-4 text-neon-pink" />
                  {t("contactPage.form.name")}
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder={t("contactPage.form.namePlaceholder")}
                  className={fieldClassName}
                />
              </label>

              <label className="text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-neon-pink" />
                  {t("contactPage.form.email")}
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={t("contactPage.form.emailPlaceholder")}
                  className={fieldClassName}
                />
              </label>

              <label className="text-sm font-semibold text-slate-200 sm:col-span-2">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-neon-pink" />
                  {t("contactPage.form.phone")}
                </span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder={t("contactPage.form.phonePlaceholder")}
                  className={fieldClassName}
                />
              </label>

              <label className="text-sm font-semibold text-slate-200 sm:col-span-2">
                <span className="flex items-center gap-2">
                  <MessageSquareText className="h-4 w-4 text-neon-pink" />
                  {t("contactPage.form.message")}
                </span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder={t("contactPage.form.messagePlaceholder")}
                  className={`${fieldClassName} min-h-40 resize-y`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-neon-pink px-6 py-4 text-sm font-bold text-white shadow-neon transition hover:-translate-y-0.5 hover:bg-neon-magenta"
            >
              {t("contactPage.form.submit")}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">{t("contactPage.form.demoNotice")}</p>
          </form>
        </section>
      </main>
    </SiteBackground>
  );
}
