import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { cn } from "../utils/cn";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const waLink = buildWhatsAppLink(
    "Hola Santiago, vi tu página web y me gustaría solicitar información."
  );

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Volver arriba */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver arriba"
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-700 shadow-card transition-all duration-300 hover:text-brand-600 dark:border-white/10 dark:bg-ink-900 dark:text-slate-300",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp flotante con tooltip */}
      {waLink && (
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar por WhatsApp"
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-7 w-7" />
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            ¿Hablamos por WhatsApp?
          </span>
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
        </a>
      )}
    </div>
  );
}
