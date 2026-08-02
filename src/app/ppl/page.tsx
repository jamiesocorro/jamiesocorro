import Link from "next/link";

const samples = [
  {
    number: "01",
    name: "PPL — Professional People's Lab",
    description:
      "A talent management agency concept site with an animated hero wall, filterable artist roster, and a scrolling brand marquee.",
    href: "/samples/ppl-professional-peoples-lab/",
  },
];

export default function Ppl() {
  return (
    <div className="min-h-screen bg-[#0c0b0d] text-[#f3eee6]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-xs tracking-[0.28em] uppercase text-[#e6b955] font-bold mb-3">
          Website Samples
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Sample Site Gallery</h1>
        <p className="text-sm text-[#9d97a0] mb-12">
          A running list of standalone website concepts. Click preview to open the live sample.
        </p>

        <div className="flex flex-col gap-4">
          {samples.map((s) => (
            <div
              key={s.number}
              className="flex items-center justify-between gap-6 border border-[rgba(243,238,230,0.12)] rounded-lg p-5 hover:border-[#e6b955] transition-colors"
            >
              <div className="flex items-start gap-5">
                <span className="font-serif text-2xl text-[#d6392c]">{s.number}</span>
                <div>
                  <div className="font-bold text-lg">{s.name}</div>
                  <div className="text-xs text-[#9d97a0] mt-1 max-w-md">{s.description}</div>
                </div>
              </div>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 text-xs tracking-[0.14em] uppercase font-bold bg-[#d6392c] hover:bg-[#ef4c3c] transition-colors rounded"
              >
                Preview
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
