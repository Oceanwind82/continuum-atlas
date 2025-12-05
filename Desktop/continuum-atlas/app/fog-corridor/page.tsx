// app/fog-corridor/page.tsx
import Link from "next/link";

export default function FogCorridorPage() {
  const patterns = [
    {
      slug: "tool-confusion",
      title: "Tool Confusion",
      tagline: "When the tools start lying or talking in circles.",
      summary:
        "Copilot hallucinations, unclear error messages, conflicting instructions between tools, and logs that feel like riddles.",
    },
    {
      slug: "mental-fog",
      title: "Mental Fog",
      tagline: "When your brain feels like it's running in low visibility mode.",
      summary:
        "ADHD haze, overwhelm, looping thoughts, staring at the same line of code and absorbing nothing.",
    },
    {
      slug: "miscommunication",
      title: "Miscommunication",
      tagline: "When human intent and machine response are out of phase.",
      summary:
        "You say X, the AI hears Y. You think one thing is broken, but the real issue is somewhere else entirely.",
    },
    {
      slug: "spiral-loop",
      title: "Spiral & Loop",
      tagline: "When you keep trying fixes that don't move anything forward.",
      summary:
        "Repeating the same commands, re-reading the same docs, restarting the same process without a new hypothesis.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12 space-y-10">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400/70">
            Continuum Atlas · Cognitive Map
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            The Fog Corridor
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            The Fog Corridor is where things get sticky: confusion, tool lies,
            brain static, and logic that used to make sense but suddenly
            doesn&apos;t. This chamber doesn&apos;t pretend the fog isn&apos;t
            real—it gives you language, patterns, and counter-moves to walk
            through it without losing yourself.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-slate-100">
            Common Fog Patterns
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Each pattern is a recognizable state: a way your mind, your tools,
            or both, can drag you off course. Naming them makes them easier to
            spot—and easier to dismantle.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {patterns.map((p) => (
              <Link
                key={p.slug}
                href={`/fog-corridor/${p.slug}`}
                className="group rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-4 transition hover:border-sky-500/70 hover:bg-slate-900/80"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-50 group-hover:text-sky-100">
                      {p.title}
                    </h3>
                    <p className="text-xs text-sky-400/80">{p.tagline}</p>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-sky-300">
                    View protocol →
                  </span>
                </div>
                <p className="mt-3 text-xs text-slate-300/90">{p.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-800 pt-6 space-y-3">
          <h2 className="text-sm font-medium text-slate-100">
            How this corridor is meant to be used
          </h2>
          <p className="text-xs text-slate-400 max-w-3xl">
            When you feel stuck, foggy, or like the machines are conspiring
            against you, you don&apos;t have to "try harder." You identify the
            pattern you&apos;re in and follow the counter-moves. The goal
            isn&apos;t to never glitch—it&apos;s to recover quickly and keep
            building the empire anyway.
          </p>
        </section>
      </div>
    </main>
  );
}
