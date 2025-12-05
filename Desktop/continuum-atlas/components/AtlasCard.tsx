// components/AtlasCard.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type AtlasCardProps = {
  readonly href: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly description: string;
  readonly tag?: string;
  readonly accent?: "sky" | "emerald" | "violet" | "amber";
  readonly icon?: ReactNode;
};

const accentMap = {
  sky: {
    border: "group-hover:border-sky-500/80",
    glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]",
    tag: "text-sky-300",
  },
  emerald: {
    border: "group-hover:border-emerald-500/80",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]",
    tag: "text-emerald-300",
  },
  violet: {
    border: "group-hover:border-violet-500/80",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]",
    tag: "text-violet-300",
  },
  amber: {
    border: "group-hover:border-amber-400/80",
    glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.35)]",
    tag: "text-amber-300",
  },
};

export function AtlasCard({
  href,
  title,
  subtitle,
  description,
  tag,
  accent = "violet",
  icon,
}: AtlasCardProps) {
  const styles = accentMap[accent];

  return (
    <Link
      href={href}
      className={[
        "group relative overflow-hidden rounded-2xl border border-slate-800/80",
        "bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90",
        "px-4 py-4 sm:px-5 sm:py-5",
        "transition-transform duration-200 hover:-translate-y-0.5",
        styles.border,
        styles.glow,
      ].join(" ")}
    >
      {/* faint star field */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-sky-500/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900/80 ring-1 ring-slate-700/80">
          <span className="text-base leading-none text-sky-100">
            {icon ?? "✦"}
          </span>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-semibold text-slate-50">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[11px] sm:text-xs text-slate-400">{subtitle}</p>
          )}
        </div>
      </div>

      <p className="relative mt-3 text-xs sm:text-[13px] text-slate-300/90">
        {description}
      </p>

      <div className="relative mt-3 flex items-center justify-between text-[11px] sm:text-xs">
        {tag && (
          <span className={`${styles.tag} font-medium tracking-wide`}>
            {tag}
          </span>
        )}
        <span className="text-slate-500 group-hover:text-slate-200">
          Enter →
        </span>
      </div>
    </Link>
  );
}
