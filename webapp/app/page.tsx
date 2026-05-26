export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16 sm:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Chexplained
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          Chess review that explains the position, not just the engine score.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          A basic Next.js web app is ready. This starter screen gives the
          project a clean home for building game imports, analysis summaries,
          and move-by-move explanations.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {["Import games", "Review key moves", "Understand plans"].map((item) => (
            <div
              key={item}
              className="border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
