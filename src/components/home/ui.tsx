import Link from "next/link";
import type { ReactNode } from "react";

// Primitivas de la home. Fondos: navy (bg-background), surface y paper.
// Copper sólido sólo sobre navy o en cifras grandes; texto copper sobre claro
// en accent-700 (surface) o accent-900 (paper).

export type Tone = "dark" | "surface" | "paper";

export function ArrowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="square"
      aria-hidden="true"
      className="flex-none transition-transform duration-200 group-hover:translate-x-[3px]"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ButtonLink({
  href,
  variant = "copper",
  className = "",
  children,
}: {
  href: string;
  variant?: "copper" | "navy";
  className?: string;
  children: ReactNode;
}) {
  const colors =
    variant === "copper"
      ? "bg-primary text-background hover:bg-accent-200"
      : "bg-background text-foreground hover:bg-primary-mid";
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-[52px] items-center gap-3 rounded px-6 font-mono text-[15px] font-bold tracking-[0.01em] transition-colors duration-200 ${colors} ${className}`}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

const labelTones: Record<Tone, string> = {
  dark: "text-muted",
  surface: "text-ink-3",
  paper: "text-ink-3",
};

const copperTones: Record<Tone, string> = {
  dark: "text-primary",
  surface: "text-accent-700",
  paper: "text-accent-900",
};

/** Etiqueta mono en mayúsculas. `copper` la pinta con el copper legible para ese fondo. */
export function Label({
  tone,
  copper = false,
  as: Tag = "p",
  id,
  className = "",
  children,
}: {
  tone: Tone;
  copper?: boolean;
  as?: "p" | "h2" | "h3" | "span" | "dt";
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const color = copper ? copperTones[tone] : labelTones[tone];
  return (
    <Tag id={id} className={`label-mono ${color} ${className}`}>
      {children}
    </Tag>
  );
}

/** Encabezado de sección con rail: label a la izquierda (arriba en mobile), título y bajada a la derecha. */
export function SectionHead({
  tone,
  label,
  title,
  titleId,
  lead,
  titleClassName = "text-h2 max-w-[26ch]",
  children,
}: {
  tone: Tone;
  label: string;
  title: ReactNode;
  titleId: string;
  lead?: ReactNode;
  titleClassName?: string;
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-3.5 rail:grid-cols-[minmax(0,var(--spacing-rail))_minmax(0,1fr)]">
      <Label tone={tone} copper className="rail:pt-3">
        {label}
      </Label>
      <div className="min-w-0">
        <h2
          id={titleId}
          className={`font-mono font-bold leading-[1.12] tracking-[-0.02em] text-balance ${dark ? "text-white" : "text-ink"} ${titleClassName}`}
        >
          {title}
        </h2>
        {lead && (
          <p
            className={`mt-[18px] max-w-[60ch] text-lead leading-[1.6] ${dark ? "text-foreground" : "text-ink-2"}`}
          >
            {lead}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

/** Ancla secundaria para los links viejos (#cases, #products, …). */
export function Alias({ id }: { id: string }) {
  return <span id={id} aria-hidden="true" className="absolute h-0 w-0 overflow-hidden" />;
}

/** Desplaza un bloque a la columna de contenido del rail (desde 961 px). */
export const OFFSET = "rail:ml-offset";
