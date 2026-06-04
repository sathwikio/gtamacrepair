import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SITE, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/book-online")({
  head: () => ({
    meta: [
      { title: "Book a Free Diagnostic | GTA Mac Repair" },
      { name: "description", content: "Schedule a free diagnostic appointment, pickup, or drop-off online." },
    ],
  }),
  component: BookOnline,
});

function BookOnline() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <section className="container-px mx-auto max-w-3xl pt-20 pb-12 md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Calendar className="size-3.5" /> Free diagnostic · 1 business day
        </span>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">Book your appointment</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Schedule a free diagnostic, pickup, or drop-off. We'll confirm by phone or email.
        </p>
      </section>
      <section className="container-px mx-auto max-w-3xl pb-24">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8 md:p-10"
        >
          {sent ? (
            <div className="py-8 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">Booking received.</h2>
              <p className="mt-3 text-muted-foreground">We'll confirm your appointment shortly.</p>
              <Link to="/" className="mt-6 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">Back home</Link>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <F label="Full name" id="name" required />
                <F label="Phone" id="phone" type="tel" required />
              </div>
              <F label="Email" id="email" type="email" required />
              <label className="block">
                <span className="text-sm font-medium">Service needed</span>
                <select required className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20">
                  <option value="">Choose a service…</option>
                  {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  <option value="other">Other / not sure</option>
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <F label="Preferred date" id="date" type="date" />
                <label className="block">
                  <span className="text-sm font-medium">Location</span>
                  <select className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20">
                    {SITE.locations.map((l) => <option key={l}>{l}</option>)}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium">Describe the issue</span>
                <textarea rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
              </label>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button type="submit" className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 sm:w-auto">
                  Request booking
                </button>
                <a href={`tel:${SITE.phone}`} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted sm:w-auto">
                  <Phone className="size-4" /> Call {SITE.phone}
                </a>
              </div>
            </div>
          )}
        </form>
      </section>
    </PageShell>
  );
}

function F({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium">{label}</span>
      <input id={id} name={id} type={type} required={required} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
    </label>
  );
}