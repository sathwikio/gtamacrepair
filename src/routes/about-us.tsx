import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About | GTA Mac Repair" },
      { name: "description", content: "A Mac-only repair network with 12+ years of experience and 8 locations across the Greater Toronto Area." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="container-px mx-auto max-w-4xl pt-20 pb-12 md:pt-28">
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">A network built around one thing: Macs.</h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          We started as a single repair bench and grew into a network of eight shops across the GTA. We've stayed focused on Apple hardware the entire time — every technician, every tool, every part.
        </p>
      </section>
      <section className="container-px mx-auto grid max-w-4xl gap-10 py-12 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold">Our promise</h2>
          <p className="mt-3 text-muted-foreground">
            Free diagnostic. Honest quote. 90-day warranty. If we can't fix it, you don't pay.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold">Where to find us</h2>
          <p className="mt-3 text-muted-foreground">{SITE.locations.join(" · ")}</p>
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}