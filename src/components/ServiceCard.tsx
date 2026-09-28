import { Check } from "lucide-react";
import type { Service } from "../config";
import { useQuickContact } from "../context/QuickContactContext";
import { buildWhatsAppLink } from "../utils/whatsapp";

export function ServiceCard({ service }: { service: Service }) {
  const { open } = useQuickContact();
  const Icon = service.icon;
  const wa = buildWhatsAppLink(service.waMessage);

  return (
    <article className="card card-hover flex h-full flex-col">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-slate-400">
        {service.description}
      </p>

      <div className="mt-4 rounded-xl bg-slate-50 p-3 dark:bg-white/5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          Resuelve
        </p>
        <p className="mt-1 text-sm text-ink-600 dark:text-slate-400">{service.solves}</p>
      </div>

      <ul className="mt-4 space-y-2">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-700 dark:text-slate-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-2 pt-2">
        <button
          type="button"
          onClick={() => open(mapServiceToOption(service.title))}
          className="btn-primary w-full"
        >
          {service.ctaLabel}
        </button>
        {wa && (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs font-medium text-ink-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            o pregúntame por WhatsApp
          </a>
        )}
      </div>
    </article>
  );
}

// Relaciona el título del servicio con las opciones del formulario.
function mapServiceToOption(title: string): string {
  const map: Record<string, string> = {
    "Desarrollo web": "Desarrollo web",
    "Desarrollo de software": "Desarrollo de software",
    "Bases de datos": "Bases de datos",
    "Soporte y asesoría tecnológica": "Soporte y asesoría tecnológica",
    "Diseño y soluciones digitales": "Diseño y soluciones digitales",
    "Formación y asesorías": "Formación y asesorías",
  };
  return map[title] ?? "Otro";
}
