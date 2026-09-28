import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { process } from "../config";

export function Process() {
  return (
    <section id="como-trabajo" className="section">
      <Container>
        <SectionTitle
          eyebrow="¿Cómo trabajo?"
          title="Un proceso simple y transparente"
          subtitle="Desde tu primera idea hasta la entrega, siempre con acompañamiento."
        />

        <div className="relative mt-14">
          {/* Línea conectora (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block"
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal as="li" key={step.title} delay={i * 90} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-white text-brand-500 shadow-card dark:bg-ink-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mx-auto mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-ink-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-600 dark:text-slate-400">{step.text}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
