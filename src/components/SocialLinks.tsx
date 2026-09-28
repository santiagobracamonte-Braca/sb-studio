import type { ComponentType } from "react";
import { socials } from "../config";
import { cn } from "../utils/cn";
import {
  InstagramIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TiktokIcon,
} from "./BrandIcons";

type SocialItem = {
  key: keyof typeof socials;
  label: string;
  icon: ComponentType<{ className?: string }>;
  url: string;
};

const definitions: Omit<SocialItem, "url">[] = [
  { key: "instagram", label: "Instagram", icon: InstagramIcon },
  { key: "facebook", label: "Facebook", icon: FacebookIcon },
  { key: "tiktok", label: "TikTok", icon: TiktokIcon },
  { key: "github", label: "GitHub", icon: GithubIcon },
  { key: "linkedin", label: "LinkedIn", icon: LinkedinIcon },
];

/**
 * Muestra solo las redes con URL configurada en config.ts.
 * Si no hay ninguna, no renderiza nada.
 */
export function SocialLinks({ className }: { className?: string }) {
  const items: SocialItem[] = definitions
    .map((d) => ({ ...d, url: socials[d.key] }))
    .filter((d) => d.url.trim().length > 0);

  if (items.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map(({ key, label, icon: Icon, url }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-400"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
