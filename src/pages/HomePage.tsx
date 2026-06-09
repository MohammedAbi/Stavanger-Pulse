export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Pattern Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.08) 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-24">
        {/* HERO SECTION — Emotional + city identity + quick facts */}
        <section className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="space-y-5 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-sky-300 border border-slate-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                </span>
                Live open data · Stavanger, Norway
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Discover Stavanger
                <br />
                <span className="text-sky-400 block text-4xl md:text-6xl">
                  through live city data
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl border-l-4 border-sky-500/60 pl-5">
                Stavanger is a coastal city in southwestern Norway — fjords,
                white wooden houses, energy innovation, and vibrant urban life.
                This platform reveals the city through real-time public data,
                showing how it moves, lives, and changes every day.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 text-slate-300 text-sm bg-slate-800/40 px-4 py-2 rounded-full">
                  <span>🏙️</span> 146k+ population
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm bg-slate-800/40 px-4 py-2 rounded-full">
                  <span>⛰️</span> Preikestolen nearby
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm bg-slate-800/40 px-4 py-2 rounded-full">
                  <span>🚗</span> Real-time parking
                </div>
              </div>
            </div>

            {/* Quick population stat card */}
            <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl max-w-xs w-full">
              <div className="text-center">
                <p className="text-slate-400 text-xs uppercase tracking-wider">
                  Current city population (2025)
                </p>
                <p className="text-5xl font-black text-white mt-1">
                  146<span className="text-3xl">,832</span>
                </p>
                <div className="flex justify-center gap-6 mt-3 text-sm">
                  <div>
                    <span className="text-sky-400 font-bold">+1.0%</span>{" "}
                    <span className="text-slate-400">growth</span>
                  </div>
                  <div>
                    <span className="text-sky-400 font-bold">49.7%</span>{" "}
                    <span className="text-slate-400">female</span>
                  </div>
                </div>
                <div className="h-1 w-full bg-slate-700 rounded-full mt-4 overflow-hidden">
                  <div className="bg-sky-500 w-3/5 h-full rounded-full" />
                </div>
                <p className="text-slate-400 text-xs mt-3">
                  density: 750/km² · urban area
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CITY STORY — tourism context with dual cards */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌿</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              A city between fjords and innovation
            </h2>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800/80 backdrop-blur-sm">
              <p className="text-slate-200 leading-relaxed mb-2">
                Stavanger blends historic wooden streets in{" "}
                <span className="font-medium text-white">Gamle Stavanger</span>{" "}
                with modern architecture, offshore energy industries, and direct
                access to some of Norway's most iconic nature destinations like{" "}
                <strong className="text-sky-300">
                  Preikestolen (Pulpit Rock)
                </strong>{" "}
                and <strong className="text-sky-300">Lysefjord</strong>.
              </p>
              <p className="text-slate-200 leading-relaxed">
                It is a compact, walkable city where culture, coastline, and
                everyday life intertwine. From the colorful street art of Nuart
                Festival to the buzzing harbour district, Stavanger surprises
                every visitor.
              </p>
            </div>
          </div>

          {/* Quick tourist facts grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="text-center p-3 rounded-xl bg-slate-900/30 border border-slate-800">
              <span className="block text-2xl">🏘️</span>
              <span className="text-xs text-slate-300">
                1730s wooden houses
              </span>
            </div>
            <div className="text-center p-3 rounded-xl bg-slate-900/30 border border-slate-800">
              <span className="block text-2xl">🚢</span>
              <span className="text-xs text-slate-300">
                Oil & maritime capital
              </span>
            </div>
            <div className="text-center p-3 rounded-xl bg-slate-900/30 border border-slate-800">
              <span className="block text-2xl">🎨</span>
              <span className="text-xs text-slate-300">
                Street art capital of Norway
              </span>
            </div>
            <div className="text-center p-3 rounded-xl bg-slate-900/30 border border-slate-800">
              <span className="block text-2xl">🍽️</span>
              <span className="text-xs text-slate-300">
                3 Michelin-starred restaurants
              </span>
            </div>
          </div>
        </section>

        {/* WHAT THIS PLATFORM SHOWS — feature grid */}
        <section className="space-y-8">
          <div>
            <span className="text-3xl">📊</span>
            <h2 className="text-3xl font-semibold tracking-tight mt-1">
              Live insights, smarter travel
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Real-time public datasets transformed into meaningful city signals
              — for tourists, residents and curious minds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 transition-transform hover:scale-[1.02] duration-200">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-xl font-semibold">
                Real-time parking availability
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Live occupancy sensors across city garages & street zones. Find
                nearest spots to old town or harbour.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 transition-transform hover:scale-[1.02] duration-200">
              <div className="text-3xl mb-3">🌊</div>
              <h3 className="text-xl font-semibold">Tide & sea level data</h3>
              <p className="text-slate-400 text-sm mt-2">
                Kartverket models — perfect for coastal walks, fjord cruises,
                and fishing trips around Stavanger.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 transition-transform hover:scale-[1.02] duration-200">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-semibold">
                Population & demographics
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Age structure, growth trends, and district density. Understand
                who lives in the city.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 transition-transform hover:scale-[1.02] duration-200">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-semibold">Sølvberget culture</h3>
              <p className="text-slate-400 text-sm mt-2">
                Events, exhibitions and library activity — Stavanger's main
                cultural hub updated regularly.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 transition-transform hover:scale-[1.02] duration-200">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="text-xl font-semibold">Name statistics</h3>
              <p className="text-slate-400 text-sm mt-2">
                Popular first names & trends from official registry data — fun
                for visitors and families.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 transition-transform hover:scale-[1.02] duration-200">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-xl font-semibold">Folkeregister insights</h3>
              <p className="text-slate-400 text-sm mt-2">
                Municipal registries: migration, household size and citizenship
                stats.
              </p>
            </div>
          </div>
        </section>

        {/* DATA SOURCES — trust & transparency */}
        <section className="space-y-6 bg-slate-900/20 rounded-3xl p-8 border border-slate-800/70">
          <div className="flex gap-3 items-center">
            <span className="text-2xl">🧠</span>
            <h2 className="text-2xl font-semibold">
              Official open data sources
            </h2>
          </div>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            Every dataset is sourced from Norwegian public institutions. Full
            transparency — real infrastructure data presented in a
            human-friendly way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-sky-400">▹</span>
              <span className="text-slate-300">
                Stavanger Municipality Open Data – parking, mobility, IoT
                sensors
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sky-400">▹</span>
              <span className="text-slate-300">
                Kartverket – sea level, tide models (Norwegian Mapping
                Authority)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sky-400">▹</span>
              <span className="text-slate-300">
                Folkeregisteret / SSB – population & name registry statistics
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sky-400">▹</span>
              <span className="text-slate-300">
                Sølvberget bibliotek & kulturhus – cultural dataset API
              </span>
            </div>
          </div>
          <div className="bg-slate-950/60 rounded-xl p-4 text-xs text-slate-500 font-mono border border-slate-800/50">
            <p>
              Dataset example: Real-time Parking Availability (IoT) —
              opencom.no/dataset/parking-stavanger
            </p>
            <p className="mt-1">
              Tide data: Kartverket API · Sea level observations · Creative
              Commons BY 4.0
            </p>
          </div>
        </section>

        {/* POPULATION DEEPDIVE — main focus for tourists */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📈</span>
            <h2 className="text-3xl font-semibold tracking-tight">
              Stavanger by the numbers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏙️</span>
                <h3 className="text-xl font-semibold">Population structure</h3>
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span>0–17 years</span>
                    <span>22%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-1">
                    <div className="bg-sky-500 w-[22%] h-2 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span>18–34 years</span>
                    <span>26%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-1">
                    <div className="bg-sky-500 w-[26%] h-2 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span>35–64 years</span>
                    <span>38%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-1">
                    <div className="bg-sky-500 w-[38%] h-2 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span>65+ years</span>
                    <span>14%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-1">
                    <div className="bg-sky-500 w-[14%] h-2 rounded-full" />
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-5">
                Source: Statistisk sentralbyrå / Stavanger municipality · 2025
                estimate
              </p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                <h3 className="text-xl font-semibold">
                  International community
                </h3>
              </div>
              <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                Stavanger is home to over 130 nationalities, driven by the
                energy sector and university. Approx.{" "}
                <strong className="text-white">18%</strong> of residents have an
                immigrant background.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-center text-sm">
                <div className="bg-slate-800/50 p-3 rounded-xl">
                  <span className="font-bold text-white">Polish</span>
                  <span className="block text-slate-400 text-xs">
                    largest minority
                  </span>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-xl">
                  <span className="font-bold text-white">Swedish/British</span>
                  <span className="block text-slate-400 text-xs">
                    top expat groups
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-4">
                ✨ Tourist insight: multilingual atmosphere, international
                cuisine and festivals.
              </p>
            </div>
          </div>
        </section>

        {/* DEVELOPER STORY — portfolio positioning */}
        <section className="space-y-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
            <div className="flex-1 text-center md:text-left">
              <div className="text-5xl mb-2">👨‍💻</div>
              <h3 className="text-2xl font-bold">
                Crafted with curiosity · Frontend developer
              </h3>
              <p className="text-slate-300 mt-3 leading-relaxed">
                I am a frontend developer who built this project as a hobby &
                portfolio showcase — transforming open government data into
                clean digital experiences for tourists and locals. Instead of
                raw APIs, I focused on visual storytelling, real-world utility,
                and accessibility.
              </p>
              <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
                <span className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-full">
                  React + Tailwind
                </span>
                <span className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-full">
                  Data visualization
                </span>
                <span className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-full">
                  Open data advocate
                </span>
              </div>
            </div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-3xl shadow-xl shrink-0">
              🧑‍🚀
            </div>
          </div>
          <p className="text-slate-500 text-sm italic border-l-2 border-slate-700 pl-4">
            "Making city data human — from fragmented government APIs to
            meaningful, everyday insights. This is my personal exploration of
            Stavanger's digital heartbeat."
          </p>
        </section>

        {/* FINAL CTA — navigation entry point */}
        <section className="relative">
          <div className="bg-gradient-to-r from-sky-900/20 via-slate-900/60 to-slate-900/20 rounded-3xl border border-slate-700 p-8 md:p-12 text-center backdrop-blur-sm">
            <span className="text-5xl mb-3 inline-block">🗺️</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to explore Stavanger like a local?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mt-3 text-lg">
              Use the navigation above to dive into live data — from real-time
              parking to tide forecasts and population stories.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="bg-slate-800/70 px-5 py-2 rounded-full text-sm font-medium text-sky-200 border border-slate-700">
                🅿️ Parking
              </span>
              <span className="bg-slate-800/70 px-5 py-2 rounded-full text-sm font-medium text-sky-200 border border-slate-700">
                👥 Population
              </span>
              <span className="bg-slate-800/70 px-5 py-2 rounded-full text-sm font-medium text-sky-200 border border-slate-700">
                🌊 Tide
              </span>
              <span className="bg-slate-800/70 px-5 py-2 rounded-full text-sm font-medium text-sky-200 border border-slate-700">
                📚 Sølvberget
              </span>
              <span className="bg-slate-800/70 px-5 py-2 rounded-full text-sm font-medium text-sky-200 border border-slate-700">
                📛 First names
              </span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4 space-y-1">
          <p>Source: Stavanger Municipality Open Data Platform</p>

          <p>Dataset: Real-time Parking Availability (IoT Sensors)</p>

          <p className="break-all">
            URL: https://opencom.no/dataset/parking-stavanger
          </p>
        </footer>
      </div>
    </div>
  );
}
