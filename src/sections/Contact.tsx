import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/ui/Reveal";
import { SocialLinks } from "../components/SocialLinks";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { contact, site, socials } from "../config";
import { buildWhatsAppLink } from "../utils/whatsapp";

export function Contact() {
  const waLink = buildWhatsAppLink(
    "Hola Santiago, vi tu página web y me gustaría contactarte."
  );
  const hasSocials = Object.values(socials).some((u) => u.trim().length > 0);

  const rows: { icon: typeof Mail; label: string; value: string; href?: string }[] = [];

  if (waLink) {
    rows.push({
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Escríbeme directamente",
      href: waLink,
    });
  }
  if (contact.email.trim()) {
    rows.push({
      icon: Mail,
      label: "Correo",
      value: contact.email,
      href: `mailto:${contact.email}`,
    });
  }
  rows.push({ icon: MapPin, label: "Ubicación", value: site.location });

  return (
    <section id="contacto" className="section">
      <Container>
        <SectionTitle
          eyebrow="Contacto"
          title="Hablemos de tu proyecto"
          subtitle="Elige el medio que prefieras. Con gusto te respondo."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="space-y-4">
            {rows.map((row) => {
              const Icon = row.icon;
              const content = (
                <div className="card card-hover flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-slate-500">
                      {row.label}
                    </p>
                    <p className="text-sm font-medium text-ink-900 dark:text-white">{row.value}</p>
                  </div>
                </div>
              );
              return row.href ? (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={row.label}>{content}</div>
              );
            })}

            {/* Aviso si faltan datos de contacto */}
            {!waLink && !contact.email.trim() && (
              <p className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 text-xs text-amber-600 dark:text-amber-400">
                Configura tu WhatsApp y correo en <code>src/config.ts</code> para
                activar los canales de contacto.
              </p>
            )}
          </Reveal>

          <Reveal delay={100}>
            <div className="card flex h-full flex-col justify-center">
              <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
                ¿Listo para empezar?
              </h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-slate-400">
                Escríbeme y coordinamos una conversación para revisar tu idea.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message="Hola Santiago, quiero empezar un proyecto contigo."
                  className="w-full sm:w-auto"
                />
                {contact.email.trim() && (
                  <a href={`mailto:${contact.email}`} className="btn-secondary w-full sm:w-auto">
                    <Mail className="h-4 w-4" /> Enviar correo
                  </a>
                )}
              </div>

              {hasSocials && (
                <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-slate-500">
                    Sígueme
                  </p>
                  <SocialLinks />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
