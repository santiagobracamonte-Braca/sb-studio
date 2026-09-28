import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { problems } from "../config";
import { useQuickContact } from "../context/QuickContactContext";

export function Problems() {
  const { open } = useQuickContact();

  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="¿Qué puedo hacer por ti?"
          title="Cuéntame tu necesidad y buscamos la solución"
          subtitle="Si te identificas con alguna de estas situaciones, puedo ayudarte."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <Reveal key={problem.text} delay={i * 70} className="h-full">
                <button
                  type="button"
                  onClick={() => open()}
                  className="card card-hover group flex h-full w-full items-center gap-4 text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-ink-800 dark:text-slate-200">
                    {problem.text}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
