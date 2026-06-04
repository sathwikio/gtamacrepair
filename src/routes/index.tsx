import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Clock, MapPin, Wrench, Cpu, HardDrive, Battery, KeyRound, Droplets, MonitorSmartphone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { SITE, SERVICES } from "@/lib/site";
import imacImg from "@/assets/imac.png";
import macbookAirImg from "@/assets/macbook-air.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GTA Mac Repair - Mac specialists across the Greater Toronto Area" },
      { name: "description", content: "Mac-only repair specialists with 12+ years of experience. Free diagnostics, 90-day warranty, no fix no charge. 8 locations across the GTA." },
      { property: "og:title", content: "GTA Mac Repair - Mac specialists across the GTA" },
      { property: "og:description", content: "Free diagnostics. 90-day warranty. No fix, no charge. 8 GTA locations." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = SERVICES.slice(0, 6);
  const icons = [Droplets, MonitorSmartphone, KeyRound, Battery, HardDrive, Cpu];
  return (
    <PageShell>
      {/* HERO */}
      <section className="container-px mx-auto max-w-7xl pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500" /> Open today · Free diagnostics
            </span>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              We specialize in Mac repair. <span className="text-muted-foreground">Only.</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Twelve years of focused experience. Eight locations across the Greater Toronto Area.
              Free diagnostic, transparent quote, 90-day warranty. No fix, no charge.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link to="/book-online" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
                Book a free diagnostic <ArrowRight className="size-4" />
              </Link>
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted">
                <Phone className="size-4" /> {SITE.phone}
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative mx-auto w-full max-w-lg">
              <img
                src={imacImg}
                alt="Apple iMac"
                width={400}
                height={400}
                className="relative z-10 mx-auto drop-shadow-2xl"
                loading="eager"
              />
              <img
                src={macbookAirImg}
                alt="Apple MacBook Air"
                width={320}
                height={320}
                className="absolute -bottom-8 -right-4 z-20 w-2/3 drop-shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "12+", v: "Years Mac-only" },
            { k: "8", v: "GTA locations" },
            { k: "1 day", v: "Free diagnostic" },
            { k: "90-day", v: "Warranty" },
          ].map((s) => (
            <div key={s.v} className="bg-card p-6">
              <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Every Mac. Every repair.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              From spilled coffee to dead logic boards, we fix MacBook, MacBook Pro, MacBook Air, iMac, and Mac mini. 2009 through today.
            </p>
          </div>
          <Link to="/our-services" className="hidden shrink-0 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
            All services →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Link key={s.slug} to={`/${s.slug}` as string} className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm">
                <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-foreground" />
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm">
                  Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">How it works</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Get in touch", d: "Call, email, or book online. Tell us about your Mac." },
            { n: "02", t: "Free diagnostic", d: "We diagnose within one business day and send a transparent quote." },
            { n: "03", t: "Repaired & returned", d: "We finish the repair, you pick up or we ship. Covered by a 90-day warranty." },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border border-border bg-card p-8">
              <div className="text-sm font-mono text-muted-foreground">{s.n}</div>
              <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Why Mac owners across the GTA choose us.</h2>
            <p className="mt-4 text-muted-foreground">
              We aren't a generalist computer shop. Macs are all we do. That focus shows up in every repair we send out the door.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { i: ShieldCheck, t: "Warranty-backed", d: "90 days on parts and labor." },
              { i: Clock, t: "1-day diagnostic", d: "Quote within one business day." },
              { i: Wrench, t: "Board-level repair", d: "Component-level work, not just swaps." },
              { i: MapPin, t: "Across the GTA", d: "Eight locations and growing." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-6">
                <f.i className="size-5 text-muted-foreground" />
                <h3 className="mt-4 font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Eight locations across the GTA.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Drop off in person or schedule a pickup. Wherever you are in the Greater Toronto Area, there's a shop nearby.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {SITE.locations.map((l) => (
            <div key={l} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <MapPin className="size-4 text-muted-foreground" />
              <span className="font-medium">{l}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
