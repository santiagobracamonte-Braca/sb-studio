import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./ui/Container";
import { navLinks } from "../config";
import { useQuickContact } from "../context/QuickContactContext";
import { cn } from "../utils/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openQuickContact } = useQuickContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/80"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
          <Logo />
        </a>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => openQuickContact()}
            className="btn-primary hidden sm:inline-flex"
          >
            Solicitar cotización
          </button>

          {/* Botón hamburguesa */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-ink-800 lg:hidden dark:border-white/10 dark:text-white"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-b border-slate-200/70 bg-white transition-[max-height] duration-300 lg:hidden dark:border-white/10 dark:bg-ink-950",
          open ? "max-h-[32rem]" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-slate-50 hover:text-brand-600 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openQuickContact();
            }}
            className="btn-primary mt-2 w-full"
          >
            Solicitar cotización
          </button>
        </Container>
      </div>
    </header>
  );
}
