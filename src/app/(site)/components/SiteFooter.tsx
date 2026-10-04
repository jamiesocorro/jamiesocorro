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
        <nav className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-white/70">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
