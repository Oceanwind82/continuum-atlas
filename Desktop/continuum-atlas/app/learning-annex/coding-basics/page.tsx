// app/learning-annex/coding-basics/page.tsx
export default function CodingBasicsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-6 py-12 space-y-6">
        <h1 className="text-2xl font-semibold">Coding Basics · Orientation</h1>
        <p className="text-sm text-slate-300">
          This track exists to make &quot;being a developer&quot; feel less
          like a locked identity and more like a skill you&apos;re allowed to
          grow into. You don&apos;t have to know everything. You just need a
          mental model of what&apos;s going on.
        </p>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-100">
            What this track is for
          </h2>
          <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
            <li>Understanding what files, folders, and routes actually are.</li>
            <li>Learning how Next.js turns folders into pages.</li>
            <li>
              Building enough confidence to poke the code without fearing
              you&apos;ll "break everything forever".
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-100">
            How to move through this
          </h2>
          <p className="text-sm text-slate-300">
            Take one tiny idea at a time. Read it, try it in your real project,
            and then come back. You don&apos;t have to memorize—your Atlas is
            here so you can re-read instead of self-judge.
          </p>
        </section>
      </div>
    </main>
  );
}
