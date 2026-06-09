export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-3 text-sm text-slate-400">
        {/* DATA SOURCE */}
        <div>
          Data from{" "}
          <a
            href="https://opencom.no/dataset/36ceda99-bbc3-4909-bc52-b05a6d634b3f"
            target="_blank"
            rel="noreferrer"
            className="text-slate-200 underline hover:text-white"
          >
            Stavanger Parking (Opencom.no)
          </a>{" "}
          • Updated every 2 minutes
        </div>

        {/* LICENSE */}
        <div>License: Norwegian Licence for Open Government Data (NLOD)</div>

        {/* EXTRA INFO */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pt-2 border-t border-slate-800">
          <p>🚗 Stavanger Parking Dashboard • Hobby project</p>
        </div>
      </div>
    </footer>
  );
}
