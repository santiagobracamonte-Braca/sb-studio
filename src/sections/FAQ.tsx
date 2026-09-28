import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { faqs } from "../config";
import { cn } from "../utils/cn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <Container>
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Resuelve tus dudas antes de escribirme"
          subtitle="Y si tu pregunta no está aquí, con gusto te la respondo por WhatsApp."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <dl className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.03]">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q}>
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold text-ink-900 dark:text-white sm:text-base">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </dt>
                  <dd
                    className={cn(
                      "grid overflow-hidden px-5 text-sm text-ink-600 transition-all duration-300 dark:text-slate-400",
                      isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden leading-relaxed">{faq.a}</div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
