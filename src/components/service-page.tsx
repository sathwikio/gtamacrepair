import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, ShieldCheck, BadgeCheck } from "lucide-react";
import { PageShell } from "./page-shell";
import { CtaBand } from "./cta-band";
import { SERVICES, type ServiceMeta } from "@/lib/site";

const POINTS = [
  "Free no-obligation diagnostic",
  "Quality parts, OEM where available",
  "90-day workmanship warranty",
  "No fix, no charge",
  "Most repairs returned in 2–5 business days",
];

export function ServicePage({ meta }: { meta: ServiceMeta }) {
  const related = SERVICES.filter((s) => s.slug !== meta.slug && s.category === meta.category).slice(0, 3);
  return (
    <PageShell>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-12 md:pt-28">
        <Link to="/our-services" className="text-sm text-muted-foreground hover:text-foreground">
          ← All services
        </Link>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{meta.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{meta.short}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/book-online" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
            Book diagnostic <ArrowRight className="size-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted">
            Ask a question
          </Link>
        </div>
      </section>

      <section className="container-px mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-3">
        {[
          { icon: Clock, t: "Fast turnaround", d: "Most jobs completed within a few business days." },
          { icon: ShieldCheck, t: "90-day warranty", d: "Every repair is covered by a workmanship guarantee." },
          { icon: BadgeCheck, t: "Mac specialists", d: "Over a decade of focused, Mac-only experience." },
        ].map((f) => (
          <div key={f.t} className="rounded-2xl border border-border bg-card p-6">
            <f.icon className="size-5 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">{f.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </section>

      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">What's included</h2>
            <p className="mt-3 text-muted-foreground">
              We focus exclusively on Apple hardware, so your repair is handled by technicians who do this every day.
            </p>
          </div>
          <ul className="space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                <Check className="mt-0.5 size-4 shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-px mx-auto max-w-7xl py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={`/${r.slug}` as string} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm">
                  Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBand />
    </PageShell>
  );
}