import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // en ms
  as?: "div" | "section" | "li" | "article";
};

/**
 * Envuelve contenido y lo anima (fade + slide-up) al entrar en viewport.
 * Con prefers-reduced-motion, el hook lo marca visible de inmediato.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  );
}
