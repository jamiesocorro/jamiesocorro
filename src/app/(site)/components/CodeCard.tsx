export default function CodeCard({
  filename,
  varName,
  items,
}: {
  filename: string;
  varName: string;
  items: string[];
}) {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d1424] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 font-mono text-xs text-white/40">{filename}</span>
      </div>
      <div className="px-6 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
        <div>
          <span className="text-sky-400">const</span>{" "}
          <span className="text-white/80">{varName}</span>{" "}
          <span className="text-white/50">= [</span>
        </div>
        {items.map((item) => (
          <div key={item} className="pl-6">
            <span className="text-emerald-300">&quot;{item}&quot;</span>
            <span className="text-white/50">,</span>
          </div>
        ))}
        <div className="text-white/50">];</div>
      </div>
    </div>
  );
}
