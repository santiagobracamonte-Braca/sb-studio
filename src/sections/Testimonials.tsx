import { Quote } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { testimonials } from "../config";

export function Testimonials() {
  const allPlaceholders = testimonials.every((t) => t.placeholder);

  return (
    <section className="section bg-slate-50/60 dark:bg-white/[0.02]">
      <Container>
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen las personas con las que trabajo"
          subtitle="Esta sección se irá llenando con testimonios reales de clientes."
        />

        {allPlaceholders && (
          <Reveal className="mx-auto mt-6 max-w-2xl">
            <p className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 text-center text-xs text-amber-600 dark:text-amber-400">
              Espacio reservado para testimonios reales. Agrégalos en{" "}
              <code>src/config.ts</code> (sección <code>testimonials</code>).
            </p>
          </Reveal>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90} className="h-full">
              <figure className="card flex h-full flex-col">
                <Quote className="h-8 w-8 text-brand-500/40" />
                <blockquote className="mt-3 flex-1 text-sm italic text-ink-700 dark:text-slate-300">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-white/10">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-500">
                      {t.name.replace(/[^A-Za-zÁÉÍÓÚÑ]/g, "").charAt(0) || "?"}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-ink-500 dark:text-slate-400">{t.service}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
