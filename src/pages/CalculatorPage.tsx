import { Calculator, Check, ChevronRight, Info, RotateCcw, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "../components/Navbar";
import { SiteBackground } from "../components/SiteBackground";
import {
  calculatorGroups,
  operationMonthlyPrice,
  type CalculatorGroup,
  type CalculatorOption,
  type Price,
} from "../data/calculator";

type Selections = Record<CalculatorGroup["id"], string>;

const initialSelections: Selections = {
  projectType: "landing",
  design: "yes",
  auth: "none",
  payment: "none",
  integration: "none",
  content: "small",
};

function addPrice(total: Price, value: Price): Price {
  return { min: total.min + value.min, max: total.max + value.max };
}

function formatPrice(value: Price, locale: string): string {
  const formatter = new Intl.NumberFormat(locale === "hu" ? "hu-HU" : "en-US", {
    maximumFractionDigits: 0,
  });
  const min = `${formatter.format(value.min)} Ft`;
  return value.min === value.max ? min : `${min} – ${formatter.format(value.max)} Ft`;
}

function PriceLabel({ oneTime, withOperation }: { oneTime: Price; withOperation: Price }) {
  const { i18n, t } = useTranslation();
  return (
    <span className="mt-1 block text-[11px] leading-5 text-slate-400">
      {t("calculatorPage.priceOnlyBuild")}: {formatPrice(oneTime, i18n.language)}
      <br />
      {t("calculatorPage.priceWithOperation")}: {formatPrice(withOperation, i18n.language)}
    </span>
  );
}

export function CalculatorPage() {
  const { i18n, t } = useTranslation();
  const [selections, setSelections] = useState<Selections>(initialSelections);
  const [managed, setManaged] = useState(false);

  const selectedItems = useMemo(
    () =>
      calculatorGroups.map((group) => ({
        group,
        option: group.options.find((option) => option.id === selections[group.id])!,
      })),
    [selections],
  );

  const totals = useMemo(() => {
    let oneTime: Price = { min: 0, max: 0 };

    selectedItems.forEach(({ option }) => {
      oneTime = addPrice(oneTime, managed ? option.withOperation : option.oneTime);
    });

    const monthly = managed ? operationMonthlyPrice : { min: 0, max: 0 };
    return { oneTime, monthly };
  }, [managed, selectedItems]);

  const selectOption = (group: CalculatorGroup, option: CalculatorOption) => {
    setSelections((current) => ({ ...current, [group.id]: option.id }));
  };

  const reset = () => {
    setSelections(initialSelections);
    setManaged(false);
  };

  return (
    <SiteBackground>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-14 sm:pt-18">
        <section className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-pink/25 bg-neon-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neon-pink">
            <Sparkles className="h-4 w-4" />
            {t("calculatorPage.eyebrow")}
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {t("calculatorPage.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {t("calculatorPage.description")}
          </p>
        </section>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            {calculatorGroups.map((group, groupIndex) => (
              <section
                key={group.id}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7"
              >
                <div className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-neon-pink/25 bg-neon-pink/10 text-sm font-black text-neon-pink">
                    {groupIndex + 1}
                  </span>
                  <div>
                    <h2 className="text-xl font-black text-white">{t(group.titleKey)}</h2>
                    {group.descriptionKey && (
                      <p className="mt-1 text-sm leading-6 text-slate-400">{t(group.descriptionKey)}</p>
                    )}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {group.options.map((option) => {
                    const selected = selections[group.id] === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => selectOption(group, option)}
                        className={`flex min-h-[78px] items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                          selected
                            ? "border-neon-pink/60 bg-neon-pink/10 shadow-[0_0_30px_rgba(255,0,122,.1)]"
                            : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]"
                        }`}
                      >
                        <span>
                          <span className="block text-sm font-bold text-white">{t(option.labelKey)}</span>
                          <PriceLabel
                            oneTime={option.oneTime}
                            withOperation={option.withOperation}
                          />
                        </span>
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border ${
                            selected
                              ? "border-neon-pink bg-neon-pink text-white"
                              : "border-white/20 text-transparent"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}

            <section className="rounded-[1.75rem] border border-neon-pink/20 bg-gradient-to-br from-neon-pink/[0.09] to-white/[0.035] p-5 shadow-neon-soft backdrop-blur-xl sm:p-7">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-neon-pink text-sm font-black text-white shadow-neon">
                  {calculatorGroups.length + 1}
                </span>
                <div>
                  <h2 className="text-xl font-black text-white">{t("calculatorPage.operation.title")}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {t("calculatorPage.operation.description")}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[false, true].map((value) => (
                  <button
                    key={String(value)}
                    type="button"
                    aria-pressed={managed === value}
                    onClick={() => setManaged(value)}
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      managed === value
                        ? "border-neon-pink/60 bg-neon-pink/10"
                        : "border-white/10 bg-white/[0.035] hover:border-white/20"
                    }`}
                  >
                    <span className="block text-sm font-bold text-white">
                      {t(value ? "calculatorPage.operation.yes" : "calculatorPage.operation.no")}
                    </span>
                    <span className="mt-1 block text-xs text-slate-400">
                      {value
                        ? `+ ${formatPrice(operationMonthlyPrice, i18n.language)} ${t("calculatorPage.perMonth")}`
                        : t("calculatorPage.operation.noMonthlyFee")}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <aside className="top-6 rounded-[1.75rem] border border-white/10 bg-[#0d0918]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl lg:sticky">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon-pink/10 text-neon-pink">
                  <Calculator className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-black text-white">{t("calculatorPage.summary.title")}</h2>
              </div>
              <button
                type="button"
                onClick={reset}
                aria-label={t("calculatorPage.summary.reset")}
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-neon-pink/40 hover:text-neon-pink"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {selectedItems.map(({ group, option }) => (
                <div key={group.id} className="flex items-start justify-between gap-4 border-b border-white/[0.07] pb-3">
                  <div>
                    <div className="text-xs text-slate-500">{t(group.titleKey)}</div>
                    <div className="mt-0.5 text-sm font-semibold text-slate-200">{t(option.labelKey)}</div>
                    <div className="mt-1 text-[11px] leading-5 text-slate-500">
                      {t("calculatorPage.summary.oneTimeShort")}:{" "}
                      {formatPrice(
                        managed ? option.withOperation : option.oneTime,
                        i18n.language,
                      )}
                    </div>
                  </div>
                  <ChevronRight className="mt-2 h-4 w-4 shrink-0 text-neon-pink/60" />
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-3">
                <div>
                  <div className="text-xs text-slate-500">{t("calculatorPage.operation.shortTitle")}</div>
                  <div className="mt-0.5 text-sm font-semibold text-slate-200">
                    {t(managed ? "calculatorPage.operation.yes" : "calculatorPage.operation.no")}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    {t("calculatorPage.summary.monthlyShort")}:{" "}
                    {formatPrice(
                      managed ? operationMonthlyPrice : { min: 0, max: 0 },
                      i18n.language,
                    )}
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-neon-pink/60" />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-neon-pink/20 bg-neon-pink/[0.07] p-5">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                {t("calculatorPage.summary.oneTime")}
              </div>
              <div className="mt-2 text-2xl font-black text-white">
                {formatPrice(totals.oneTime, i18n.language)}
              </div>
              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                  {t("calculatorPage.summary.monthly")}
                </div>
                <div className="mt-2 text-2xl font-black text-neon-pink">
                  {formatPrice(totals.monthly, i18n.language)}
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-xs leading-5 text-slate-400">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-neon-pink" />
              {t("calculatorPage.summary.notice")}
            </div>
          </aside>
        </div>
      </main>
    </SiteBackground>
  );
}
