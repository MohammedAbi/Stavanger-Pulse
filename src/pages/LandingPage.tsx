export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* HERO */}
        <section className="text-center space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300">
            Stavanger City Intelligence Platform
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-white to-slate-400 text-transparent bg-clip-text">
            Real-time insights into Stavanger
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore live parking availability, population trends, and public
            city data. Built for tourists, residents, and developers exploring
            Stavanger.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="/parking"
              className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-medium"
            >
              🚗 Explore Parking
            </a>

            <a
              href="/population"
              className="bg-slate-900 hover:bg-slate-800 transition px-6 py-3 rounded-xl font-medium border border-slate-800"
            >
              👥 Population Data
            </a>
          </div>
        </section>

        {/* FEATURE STRIP (NOT BOXES) */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur">
            <p className="text-blue-400 text-sm">LIVE DATA</p>
            <h3 className="text-xl font-semibold mt-2">Parking system</h3>
            <p className="text-slate-400 mt-2 text-sm">
              Updated every 2 minutes using public datasets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur">
            <p className="text-purple-400 text-sm">ANALYTICS</p>
            <h3 className="text-xl font-semibold mt-2">Population insights</h3>
            <p className="text-slate-400 mt-2 text-sm">
              District-level demographic data across Stavanger.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur">
            <p className="text-green-400 text-sm">OPEN DATA</p>
            <h3 className="text-xl font-semibold mt-2">City platform</h3>
            <p className="text-slate-400 mt-2 text-sm">
              Built on transparent public APIs and extensible architecture.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION (HERO STYLE BLOCK) */}
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-10 space-y-6">
          <h2 className="text-3xl font-semibold">About Stavanger 🇳🇴</h2>

          <p className="text-slate-300 leading-relaxed max-w-3xl">
            Stavanger is a coastal city in southwestern Norway, known for its
            oil industry, historic wooden houses, and proximity to world-famous
            fjords like Lysefjorden and Preikestolen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-slate-300 text-sm">
            <ul className="space-y-2">
              <li>• Founded in the 12th century</li>
              <li>• Norway’s energy capital</li>
              <li>• Strong international workforce</li>
            </ul>

            <ul className="space-y-2">
              <li>• European Capital of Culture (2008)</li>
              <li>• Old Stavanger wooden district</li>
              <li>• Gateway to fjord tourism</li>
            </ul>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Why this project exists</h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            A frontend engineering portfolio project focused on transforming
            public datasets into accessible, real-time city insights using
            React, TypeScript, and modern UI design.
          </p>
        </section>

        {/* FOOTER NOTE */}
        <section className="text-center text-sm text-slate-500 pt-10">
          Built with React · TypeScript · TailwindCSS · Vite
        </section>
      </div>
    </div>
  );
}
