import { useMemo, useState } from "react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { PortfolioCard } from "../components/PortfolioCard";
import { projects, portfolioFilters } from "../config";
import { cn } from "../utils/cn";

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]>("Todos");

  const filtered = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const allPlaceholders = projects.every((p) => p.placeholder);

  return (
    <section id="portafolio" className="section bg-slate-50/60 dark:bg-white/[0.02]">
      <Container>
        <SectionTitle
          eyebrow="Portafolio"
          title="Proyectos y trabajos"
          subtitle="Ejemplos de lo que puedo construir. Se irá actualizando con proyectos reales."
        />

        {allPlaceholders && (
          <Reveal className="mx-auto mt-6 max-w-2xl">
            <p className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 text-center text-xs text-amber-600 dark:text-amber-400">
              Las tarjetas mostradas son ejemplos editables. Agrega tus proyectos
              reales en <code>src/config.ts</code> (sección <code>projects</code>).
            </p>
          </Reveal>
        )}

        {/* Filtros */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap justify-center gap-2">
            {portfolioFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  filter === f
                    ? "bg-brand-500 text-white shadow-glow"
                    : "border border-slate-200 bg-white text-ink-700 hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 80} className="h-full">
                <PortfolioCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-sm text-ink-500 dark:text-slate-400">
            Aún no hay proyectos en esta categoría.
          </p>
        )}
      </Container>
    </section>
  );
}
