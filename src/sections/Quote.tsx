import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { LeadForm } from "../components/LeadForm";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ShieldCheck, Clock, MessageCircle } from "lucide-react";

const benefits = [
  { icon: MessageCircle, title: "Respuesta personalizada", text: "Reviso cada solicitud y te contacto directamente." },
  { icon: Clock, title: "Sin compromiso", text: "Cotizar no te obliga a nada. Resolvemos dudas primero." },
  { icon: ShieldCheck, title: "Datos seguros", text: "Solo pido la información necesaria para tu proyecto." },
];

export function Quote() {
  return (
    <section id="cotizacion" className="section bg-slate-50/60 dark:bg-white/[0.02]">
      <Container>
        <SectionTitle
          eyebrow="Cotización"
          title="Solicita tu cotización"
          subtitle="Cuéntame los detalles de tu proyecto y te preparo una propuesta a tu medida."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr,1.2fr]">
          {/* Beneficios */}
          <Reveal className="space-y-6">
            <ul className="space-y-5">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900 dark:text-white">{b.title}</p>
                      <p className="text-sm text-ink-600 dark:text-slate-400">{b.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold text-ink-900 dark:text-white">
                ¿Prefieres escribir directo?
              </p>
              <p className="mt-1 text-sm text-ink-600 dark:text-slate-400">
                Escríbeme por WhatsApp y avanzamos más rápido.
              </p>
              <WhatsAppButton
                message="Hola Santiago, quiero solicitar una cotización para mi proyecto."
                className="mt-4"
              />
            </div>
          </Reveal>

          {/* Formulario completo */}
          <Reveal delay={100}>
            <div className="card p-6 sm:p-8">
              <LeadForm variant="full" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
