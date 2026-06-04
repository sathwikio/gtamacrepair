import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-xl bg-foreground text-background text-sm font-bold"></span>
          <span>{SITE.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Phone className="size-4" /> {SITE.phone}
          </a>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center rounded-full hover:bg-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <nav className="container-px mx-auto flex max-w-7xl flex-col py-3" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              <Phone className="size-4" /> Call {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}