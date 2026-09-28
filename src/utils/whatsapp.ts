import { contact } from "../config";

/**
 * Construye un enlace wa.me con mensaje precargado.
 * Devuelve null si no hay número configurado (para poder ocultar el botón).
 */
export function buildWhatsAppLink(message?: string): string | null {
  const number = contact.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const hasWhatsApp = (): boolean => contact.whatsapp.replace(/\D/g, "").length > 0;
