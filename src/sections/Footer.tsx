import { Mail, MapPin } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Logo } from "../components/Logo";
import { SocialLinks } from "../components/SocialLinks";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { navLinks, contact, site } from "../config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50/60 dark:border-white/10 dark:bg-white/[0.02]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-600 dark:text-slate-400">
              {site.tagline}
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-ink-900 dark:text-white">Navegación</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-ink-900 dark:text-white">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-600 dark:text-slate-400">
              {contact.email.trim() && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    <Mail className="h-4 w-4" /> {contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {site.location}
              </li>
            </ul>
            <WhatsAppButton
              message="Hola Santiago, vi tu página web y quiero más información."
              className="mt-4"
            />
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-ink-500 sm:flex-row dark:border-white/10 dark:text-slate-500">
          <p>
            © {year} {site.fullName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#privacidad" className="hover:text-brand-600 dark:hover:text-brand-400">
              Aviso de privacidad
            </a>
            <a href="#terminos" className="hover:text-brand-600 dark:hover:text-brand-400">
              Términos y condiciones
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
