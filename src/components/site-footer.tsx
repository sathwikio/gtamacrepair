import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV, SITE, SERVICES } from "@/lib/site";

export function SiteFooter() {
  const popular = SERVICES.slice(0, 8);
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="text-lg font-semibold tracking-tight">{SITE.name}</div>
          <p className="mt-3 text-sm text-muted-foreground">{SITE.tagline}</p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-foreground">
              <Phone className="size-4 text-muted-foreground" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-foreground">
              <Mail className="size-4 text-muted-foreground" /> {SITE.email}
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Popular services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {popular.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}` as string} className="hover:text-foreground">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Service area</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SITE.locations.map((l) => (
              <li key={l} className="flex items-center gap-2"><MapPin className="size-3.5" /> {l}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Independent Mac repair specialists. Not affiliated with Apple Inc.</p>
        </div>
      </div>
    </footer>
  );
}