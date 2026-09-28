import { useEffect } from "react";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { useQuickContact } from "../context/QuickContactContext";

export function QuickContactModal() {
  const { isOpen, presetService, close } = useQuickContact();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-contact-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm animate-fade-in"
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg animate-fade-up rounded-t-3xl border border-slate-200 bg-white p-6 shadow-glow sm:rounded-2xl dark:border-white/10 dark:bg-ink-900">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3
              id="quick-contact-title"
              className="font-display text-xl font-bold text-ink-900 dark:text-white"
            >
              Solicitar información
            </h3>
            <p className="mt-1 text-sm text-ink-600 dark:text-slate-400">
              Cuéntame qué necesitas y te respondo pronto.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-slate-100 hover:text-ink-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <LeadForm variant="compact" presetService={presetService} />
      </div>
    </div>
  );
}
