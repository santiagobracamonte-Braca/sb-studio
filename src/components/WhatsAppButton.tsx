import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { cn } from "../utils/cn";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  className?: string;
  variant?: "solid" | "outline";
  showIcon?: boolean;
};

/**
 * Botón/enlace de WhatsApp. Se oculta automáticamente si no hay número
 * configurado en config.ts (contact.whatsapp).
 */
export function WhatsAppButton({
  message,
  label = "Hablar por WhatsApp",
  className,
  variant = "solid",
  showIcon = true,
}: WhatsAppButtonProps) {
  const link = buildWhatsAppLink(message);
  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        variant === "solid"
          ? "btn-whatsapp"
          : "btn border border-[#25D366] text-[#1ebe5b] hover:bg-[#25D366]/10",
        className
      )}
    >
      {showIcon && <MessageCircle className="h-4 w-4" aria-hidden="true" />}
      {label}
    </a>
  );
}
