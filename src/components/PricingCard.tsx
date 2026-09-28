import { Check, Star } from "lucide-react";
import type { Plan } from "../config";
import { useQuickContact } from "../context/QuickContactContext";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { cn } from "../utils/cn";

export function PricingCard({ plan }: { plan: Plan }) {
  const { open } = useQuickContact();
  const wa = buildWhatsAppLink(plan.waMessage);

  return (
    <div
      className={cn(
        "card relative flex h-full flex-col",
        plan.featured && "border-brand-500/60 shadow-glow"
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
          <Star className="h-3 w-3" /> Más solicitado
        </span>
      )}

      <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">{plan.name}</h3>
      <p className="mt-1 text-sm text-ink-600 dark:text-slate-400">{plan.audience}</p>

      <p className="mt-5 font-display text-3xl font-extrabold text-brand-500">{plan.price}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-ink-700 dark:text-slate-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-2">
        <button
          type="button"
          onClick={() => open()}
          className={cn("w-full", plan.featured ? "btn-primary" : "btn-secondary")}
        >
          {plan.ctaLabel}
        </button>
        {wa && (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs font-medium text-ink-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            o consultar por WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
