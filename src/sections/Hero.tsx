import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "../components/ui/Container";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { LogoMark } from "../components/Logo";
import { technologies, site } from "../config";
import { useQuickContact } from "../context/QuickContactContext";

export function Hero() {
  const { open } = useQuickContact();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Fondo: grid + glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:44px_44px] opacity-70 dark:bg-grid-dark"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="eyebrow mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Soluciones digitales · {site.location.split(",")[0]}
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl">
            Soluciones digitales y tecnológicas para{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              llevar tus ideas a la realidad
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-slate-400 lg:mx-0">
            Desarrollo web, software, bases de datos, asesoría tecnológica y
            soluciones digitales personalizadas.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <button type="button" onClick={() => open()} className="btn-primary w-full sm:w-auto">
              Solicitar cotización <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#servicios" className="btn-secondary w-full sm:w-auto">
              Ver mis servicios
            </a>
            <WhatsAppButton
              message="Hola Santiago, vi tu página web y me gustaría hablar contigo."
              className="w-full sm:w-auto"
            />
          </div>

          <p className="mt-5 text-sm text-ink-500 dark:text-slate-500">
            Atención personalizada · Respuesta sin compromiso.
          </p>
        </div>

        {/* Composición visual (logo + código, sin fotos genéricas) */}
        <div className="animate-fade-in [animation-delay:200ms]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -z-10 animate-float rounded-3xl bg-gradient-to-br from-brand-500/20 to-transparent blur-2xl" />
            <div className="card overflow-hidden p-0 shadow-glow">
              {/* Barra de ventana */}
              <div className="flex items-center gap-1.5 border-b border-slate-200/70 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-medium text-ink-500 dark:text-slate-400">
                  sb-studio.tsx
                </span>
              </div>
              {/* "Código" decorativo */}
              <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
                <p><span className="text-brand-500">const</span> <span className="text-ink-800 dark:text-slate-200">solucion</span> = {"{"}</p>
                <p className="pl-4"><span className="text-emerald-500">web</span>: <span className="text-amber-500">"rápida y responsive"</span>,</p>
                <p className="pl-4"><span className="text-emerald-500">software</span>: <span className="text-amber-500">"a la medida"</span>,</p>
                <p className="pl-4"><span className="text-emerald-500">datos</span>: <span className="text-amber-500">"organizados"</span>,</p>
                <p className="pl-4"><span className="text-emerald-500">soporte</span>: <span className="text-brand-500">true</span>,</p>
                <p>{"}"};</p>
                <p className="pt-2 text-ink-400 dark:text-slate-500">{"// listo para tu proyecto →"}</p>
              </div>
            </div>

            {/* Insignia con el logo */}
            <div className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-card dark:border-white/10 dark:bg-ink-900">
              <LogoMark className="h-9 w-9" />
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink-900 dark:text-white">{site.brandName}</p>
                <p className="text-[11px] text-ink-500 dark:text-slate-400">Desarrollo & Tech</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Marquesina de tecnologías */}
      <Container className="mt-16 lg:mt-24">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-slate-500">
          Tecnologías con las que trabajo
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.slice(0, 12).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
