import { site } from "../config";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

/**
 * Logo SB Studio recreado como SVG (nítido en cualquier tamaño, sin imagen externa).
 * Inspirado en el logo de marca: "SB" con el símbolo </> y degradado azul eléctrico.
 *
 * Si prefieres usar tu imagen de logo real, coloca el archivo en /public
 * (por ejemplo /logo.png) y reemplaza el <svg> por:
 *   <img src="/logo.png" alt="SB Studio" className="h-9 w-9 rounded-full" />
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Logo SB Studio"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sbBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#66a4ff" />
          <stop offset="55%" stopColor="#1d6fff" />
          <stop offset="100%" stopColor="#0b57e0" />
        </linearGradient>
        <radialGradient id="sbBg" cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#141a26" />
          <stop offset="100%" stopColor="#05070d" />
        </radialGradient>
      </defs>

      {/* Círculo de fondo */}
      <circle cx="32" cy="32" r="31" fill="url(#sbBg)" stroke="#1d6fff" strokeOpacity="0.25" />

      {/* Letra S (blanca) */}
      <text
        x="17"
        y="40"
        textAnchor="middle"
        fontFamily="Sora, Inter, sans-serif"
        fontSize="30"
        fontWeight="800"
        fill="#ffffff"
      >
        S
      </text>

      {/* Letra B (azul) */}
      <text
        x="40"
        y="40"
        textAnchor="middle"
        fontFamily="Sora, Inter, sans-serif"
        fontSize="30"
        fontWeight="800"
        fill="url(#sbBlue)"
      >
        B
      </text>

      {/* Símbolo </> */}
      <text
        x="32"
        y="55"
        textAnchor="middle"
        fontFamily="Menlo, Consolas, monospace"
        fontSize="12"
        fontWeight="700"
        fill="url(#sbBlue)"
      >
        {"</>"}
      </text>
    </svg>
  );
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-ink-900 dark:text-white">
            {site.brandName}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-500">
            {site.fullName.split(" ")[0]} Bracamonte
          </span>
        </span>
      )}
    </span>
  );
}
