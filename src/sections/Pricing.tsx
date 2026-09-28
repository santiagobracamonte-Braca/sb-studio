import { RefreshCw } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { PricingCard } from "../components/PricingCard";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { plans, maintenancePlan } from "../config";
import { useQuickContact } from "../context/QuickContactContext";

export function Pricing() {
  const { open } = useQuickContact();

  return (
    <section id="planes" className="section">
      <Container>
        <SectionTitle
          eyebrow="Planes"
          title="Opciones pensadas para tu presupuesto"
          subtitle="Precios de referencia editables. La cotización final se ajusta a tu proyecto."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90} className="h-full">
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>

        {/* Plan recurrente: mantenimiento */}
        <Reveal className="mt-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-8 sm:flex-row dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <RefreshCw className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                  {maintenancePlan.name}{" "}
                  <span className="ml-2 align-middle text-base font-extrabold text-brand-500">
                    {maintenancePlan.price}
                  </span>
                </h3>
                <p className="mt-1 max-w-md text-sm text-ink-600 dark:text-slate-400">
                  {maintenancePlan.description}
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto">
              <button type="button" onClick={() => open()} className="btn-primary">
                {maintenancePlan.ctaLabel}
              </button>
              <WhatsAppButton message={maintenancePlan.waMessage} label="Consultar" variant="outline" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
