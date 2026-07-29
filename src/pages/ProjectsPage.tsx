import { ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "../components/Navbar";
import { SiteBackground } from "../components/SiteBackground";
import { projects, type Project } from "../data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation();

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,.3)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-neon-pink/45 hover:shadow-neon-soft">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-[#080617]"
      >
        <img
          src={project.image}
          alt={t("projectsPage.imageAlt", { title: t(project.titleKey) })}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080617]/90 via-[#080617]/5 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#090612]/75 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
          {t("projectsPage.projectNumber", { number: String(index + 1).padStart(2, "0") })}
        </span>
      </a>

      <div className="p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h2 className="text-2xl font-black tracking-[-0.03em] text-white">{t(project.titleKey)}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{t(project.descriptionKey)}</p>
          </div>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={t("projectsPage.openProjectLabel", { title: t(project.titleKey) })}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-neon-pink/35 bg-neon-pink/10 text-neon-pink transition group-hover:bg-neon-pink group-hover:text-white group-hover:shadow-neon"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <SiteBackground>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-20">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-12 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-10 lg:px-14">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-neon-violet/15 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neon-pink">
              <Sparkles className="h-4 w-4" />
              {t("projectsPage.eyebrow")}
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {t("projectsPage.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {t("projectsPage.description")}
            </p>
          </div>
          <BriefcaseBusiness className="absolute bottom-8 right-10 hidden h-28 w-28 text-neon-pink/[0.08] lg:block" />
        </section>

        <section aria-label={t("projectsPage.listLabel")} className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>
      </main>
    </SiteBackground>
  );
}
