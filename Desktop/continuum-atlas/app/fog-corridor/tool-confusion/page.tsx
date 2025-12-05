// app/fog-corridor/tool-confusion/page.tsx
export default function ToolConfusionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-6">
        <h1 className="text-2xl font-semibold">Fog Pattern: Tool Confusion</h1>
        <p className="text-sm text-slate-300">
          This is what it feels like when the tools start talking in circles,
          logs contradict each other, and Copilot cheerfully lies about what
          files exist. The goal here is not to panic—it&apos;s to slow down and
          re-establish reality.
        </p>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-100">
            Signs you&apos;re in this pattern
          </h2>
          <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
            <li>Multiple tools giving you different "truths".</li>
            <li>
              AI claiming it deleted or changed files that are clearly still
              there.
            </li>
            <li>
              You feel the urge to trust generated output more than your own
              eyes.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-100">
            Counter-moves
          </h2>
          <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
            <li>Check the actual file tree in VS Code. Reality lives there.</li>
            <li>
              Re-run one concrete command and read the real terminal output.
            </li>
            <li>
              Ask: "What do I know for sure?" and write down 2–3 verified facts.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
