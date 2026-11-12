
function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="mb-6 inline-flex rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold tracking-widest text-violet-300">
          DEVFLOW
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Work together.
          <span className="block text-violet-400">
            Build better.
          </span>
        </h1>

        <p className="mt-6 text-base leading-7 text-zinc-400">
          A smarter workspace for managing projects,
          organizing tasks, and collaborating with your team.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <span className="rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white">
            Development in progress
          </span>
        </div>

        <p className="mt-10 text-xs text-zinc-600">
          DEVFLOW — Full-stack collaboration platform
        </p>
      </div>
    </main>
  );
}

export default App;
