// app/learning-annex/page.tsx
import Link from "next/link";

export default function LearningAnnexPage() {
  const tracks = [
    {
      slug: "coding-basics",
      title: "Coding Basics",
      level: "Foundation · Start Here",
      summary:
        "Mental models for how code works, how files relate, what a framework is, and how not to be afraid of breaking things.",
    },
    {
      slug: "nextjs",
      title: "Next.js & React",
      level: "Atlas Infrastructure",
      summary:
        "Pages, routes, components, layouts, and how your Continuum Atlas is actually wired under the hood.",
    },
    {
      slug: "git-and-github",
      title: "Git & GitHub",
      level: "Version Control · Reality Tracking",
      summary:
        "Branches, commits, pushes, and how to treat history like a tool instead of a threat.",
    },
    {
      slug: "ai-companions",
      title: "AI Companions",
      level: "AI as Force Multiplier",
      summary:
        "How to talk to AI clearly, when to trust it, when to be suspicious, and how to use it as a thinking engine instead of a crutch.",
    },
    {
      slug: "debugging",
      title: "Debugging & Logs",
      level: "Clarity Under Fire",
      summary:
        "How to read error messages, isolate problems, and stay calm when everything flashes red.",
    },
    {
      slug: "automation",
      title: "Automation & Workflow",
      level: "Empire Building",
      summary:
        "Using scripts, tools, and automations to take repetitive work off your plate so you can think, not just click.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12 space-y-10">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80">
            Continuum Atlas · Learning Annex
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            The Learning Annex
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            This is the part of the Atlas that exists for one purpose: to teach
            you how to use code and AI well enough to build your own empire.
            No gatekeeping, no condescension—just clear paths, small steps, and
            skills that stack.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-slate-100">
            Learning Tracks
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Each track is a lane you can walk in short bursts. You don&apos;t
            have to "be a developer" on day one—you just need a place to start,
            a way to see progress, and somewhere to come back to.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {tracks.map((t) => (
              <Link
                key={t.slug}
                href={`/learning-annex/${t.slug}`}
                className="group rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-4 transition hover:border-emerald-500/70 hover:bg-slate-900/80"
              >
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-slate-50 group-hover:text-emerald-100">
                    {t.title}
                  </h3>
                  <p className="text-xs text-emerald-400/80">{t.level}</p>
                </div>
                <p className="mt-3 text-xs text-slate-300/90">{t.summary}</p>
                <p className="mt-3 text-[11px] text-slate-500 group-hover:text-slate-300">
                  Open track →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-800 pt-6 space-y-3">
          <h2 className="text-sm font-medium text-slate-100">
            How to use the Annex
          </h2>
          <p className="text-xs text-slate-400 max-w-3xl">
            You don&apos;t have to learn everything at once. Pick one track,
            grab one small concept, try one tiny experiment. The Annex is meant
            to be revisited, not conquered. Your job is to keep returning; the
            Atlas will remember where you left off.
          </p>
        </section>
      </div>
    </main>
  );
}
