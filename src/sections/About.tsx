import { CheckCircle2, MapPin } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { LogoMark } from "../components/Logo";
import { stats, technologies, site } from "../config";

const strengths = [
  "Disciplinado y responsable",
  "Comprometido con cada proyecto",
  "Orientado al aprendizaje continuo",
  "Enfoque práctico y claro",
];

export function About() {
  return (
    <section id="sobre-mi" className="section">
      <Container>
        <SectionTitle
          eyebrow="Sobre mí"
          title={<>Un aliado tecnológico cercano y confiable</>}
          subtitle="Te ayudo a resolver problemas reales con soluciones digitales, explicándote todo de forma clara."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          {/* Columna: foto / avatar + datos */}
          <Reveal>
            <div className="card p-8">
              <div className="flex items-center gap-5">
                {site.photo ? (
                  <img
                    src={site.photo}
                    alt={`Foto de ${site.fullName}`}
                    loading="lazy"
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/5">
                    <LogoMark className="h-14 w-14" />
                  </div>
                )}
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
                    {site.fullName}
                  </h3>
                  <p className="text-sm text-brand-600 dark:text-brand-400">{site.role}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-ink-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5" /> {site.location}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-ink-600 dark:text-slate-400">
                Tengo formación en{" "}
                <strong className="text-ink-800 dark:text-slate-200">
                  Tecnología en Desarrollo de Software
                </strong>{" "}
                y experiencia e interés en programación, bases de datos, sistemas,
                informática y formación. También he trabajado como formador
                deportivo de fútbol y como instructor en temas de tecnología.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-slate-400">
                Quiero ayudar a personas, estudiantes, emprendedores, negocios y
                organizaciones a dar el paso hacia lo digital, con soluciones
                pensadas para su necesidad real.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {strengths.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-ink-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Columna: stats + tecnologías */}
          <div className="space-y-8">
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="card text-center">
                    <p className="font-display text-3xl font-extrabold text-brand-500">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-ink-600 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-ink-400 dark:text-slate-500">
                * Indicadores editables en <code>src/config.ts</code>.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="card">
                <h4 className="mb-4 font-display text-lg font-bold text-ink-900 dark:text-white">
                  Áreas de conocimiento
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
