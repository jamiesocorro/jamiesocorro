import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-xs text-white/40 sm:flex-row sm:justify-between">
        <span>Copyright {new Date().getFullYear()} Jamie Socorro</span>
        <nav className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-white/70">
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/charlessocorro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/40 transition-colors hover:text-emerald-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
