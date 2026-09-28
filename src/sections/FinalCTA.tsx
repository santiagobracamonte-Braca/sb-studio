import { ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { useQuickContact } from "../context/QuickContactContext";

export function FinalCTA() {
  const { open } = useQuickContact();

  return (
    <section className="section">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:32px_32px] opacity-20"
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                ¿Tienes una idea? Hablemos.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-blue-100">
                Cuéntame qué necesitas y revisamos juntos cuál puede ser la mejor
                solución para tu proyecto.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => open()}
                  className="btn inline-flex bg-white text-brand-700 hover:bg-blue-50 hover:-translate-y-0.5"
                >
                  Solicitar cotización <ArrowRight className="h-4 w-4" />
                </button>
                <WhatsAppButton message="Hola Santiago, tengo una idea y me gustaría comentártela." />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
