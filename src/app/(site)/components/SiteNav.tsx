import Image from "next/image";
import Link from "next/link";
import { basePath } from "../base-path";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteNav({ active }: { active?: string }) {
  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-white/10 bg-black/50 py-2 pl-2 pr-2 shadow-lg backdrop-blur-md sm:gap-1">
        <Link href="/" className="flex shrink-0 items-center gap-2 pr-2">
          <Image src={`${basePath}/dev-icon.png`} alt="Jamie Socorro" width={30} height={30} className="rounded-full" priority />
          <span className="text-sm font-bold tracking-tight text-white">
            Jamie<span className="text-emerald-400">.</span>
          </span>
        </Link>
        <div className="mx-1 h-4 w-px shrink-0 bg-white/15" />
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`shrink-0 rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors sm:px-3 sm:text-xs ${
              active === link.label
                ? "bg-emerald-400/15 text-emerald-300"
                : "text-white/70 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
