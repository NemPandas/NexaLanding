import { ArrowUpRight, Boxes, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "../components/Navbar";
import { SiteBackground } from "../components/SiteBackground";
import { products, type Product } from "../data/products";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { t } = useTranslation();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,.3)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-neon-pink/45 hover:shadow-neon-soft">
      <a
        href={product.href}
        target="_blank"
        rel="noreferrer"
        className="relative block aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#080617]"
      >
        <img
          src={product.image}
          alt={t("productsPage.imageAlt", { title: t(product.titleKey) })}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080617]/55 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#090612]/75 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
          0{index + 1}
        </div>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-black tracking-[-0.03em] text-white">{t(product.titleKey)}</h2>
          {product.featured && (
            <span className="shrink-0 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-3 py-1 text-xs font-bold text-neon-pink">
              {t("productsPage.featured")}
            </span>
          )}
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{t(product.descriptionKey)}</p>
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-neon-pink/40 bg-neon-pink px-5 py-3.5 text-sm font-bold text-white shadow-neon transition hover:-translate-y-0.5 hover:bg-neon-magenta"
        >
          {t("productsPage.viewProduct")}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export function ProductsPage() {
  const { t } = useTranslation();

  return (
    <SiteBackground>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-20">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-12 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-10 lg:px-14">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-neon-pink/15 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neon-pink">
              <Sparkles className="h-4 w-4" />
              {t("productsPage.eyebrow")}
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {t("productsPage.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {t("productsPage.description")}
            </p>
          </div>
          <Boxes className="absolute bottom-8 right-10 hidden h-28 w-28 text-neon-pink/[0.08] lg:block" />
        </section>

        <section aria-label={t("productsPage.listLabel")} className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </section>
      </main>
    </SiteBackground>
  );
}
