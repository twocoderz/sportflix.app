import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Chaînes", href: "/chaines" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-(--bg)/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between py-12 px-6">
        <Logo size={128} />

        <div className="flex items-center gap-12">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `text-lg transition-colors hover:text-(--text) ${
                    isActive ? "text-(--text)" : "text-(--text-muted)"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="#telecharger"
              className="rounded-full bg-(--primary) px-6 py-4 text-lg font-medium text-black transition-opacity hover:opacity-90"
            >
              Télécharger l'apk
            </a>
          </div>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-(--border) px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `text-xl transition-colors hover:text-(--text) ${
                    isActive ? "text-(--text)" : "text-(--text-muted)"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <ThemeToggle />
            <a
              href="#telecharger"
              className="rounded-full bg-(--text) px-6 py-4 text-xl font-medium text-(--bg)"
            >
              Télécharger l'apk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
