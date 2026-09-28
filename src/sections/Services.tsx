import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { ServiceCard } from "../components/ServiceCard";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { services, sports, academicNote } from "../config";
import { Check, GraduationCap } from "lucide-react";

export function Services() {
  const SportsIcon = sports.icon;

  return (
    <section id="servicios" className="section bg-slate-50/60 dark:bg-white/[0.02]">
      <Container>
        <SectionTitle
          eyebrow="Servicios"
          title="Lo que puedo hacer por tu proyecto"
          subtitle="Soluciones tecnológicas y digitales adaptadas a lo que realmente necesitas."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* Nota académica */}
        <Reveal className="mt-6">
          <p className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-xs text-ink-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {academicNote}
          </p>
        </Reveal>

        {/* Formación deportiva — área visualmente independiente */}
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.06] to-transparent p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[auto,1fr,auto]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <SportsIcon className="h-8 w-8" />
              </div>

              <div>
                <span className="mb-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Área independiente
                </span>
                <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                  {sports.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-ink-600 dark:text-slate-400">
                  {sports.description}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {sports.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-700 dark:text-slate-300">
                      <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:justify-self-end">
                <WhatsAppButton message={sports.waMessage} label={sports.ctaLabel} />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
