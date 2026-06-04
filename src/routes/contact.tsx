import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | GTA Mac Repair" },
      { name: "description", content: "Call, email, or send a message. Free diagnostics across the GTA." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <section className="container-px mx-auto grid max-w-7xl gap-12 pt-20 pb-24 md:grid-cols-2 md:pt-28">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">Get in touch</h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Questions about a repair, a quote, or pickup logistics? We're happy to help.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><Phone className="size-4 text-muted-foreground" /> <a className="hover:underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
            <li className="flex items-center gap-3"><Phone className="size-4 text-muted-foreground" /> <a className="hover:underline" href={`tel:${SITE.phoneAlt}`}>{SITE.phoneAlt}</a></li>
            <li className="flex items-center gap-3"><Mail className="size-4 text-muted-foreground" /> <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 text-muted-foreground" /> <span>{SITE.locations.join(" · ")}</span></li>
          </ul>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8"
        >
          {sent ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Message received.</h2>
              <p className="mt-3 text-muted-foreground">We'll be in touch shortly.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Send a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name" required />
                <Field label="Email" id="email" type="email" required />
              </div>
              <Field label="Phone" id="phone" type="tel" />
              <Field label="Mac model" id="model" placeholder="e.g. MacBook Pro 14” 2021" />
              <label className="block">
                <span className="text-sm font-medium">How can we help?</span>
                <textarea required rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
              </label>
              <button type="submit" className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
                Send
              </button>
            </div>
          )}
        </form>
      </section>
    </PageShell>
  );
}

function Field({ label, id, type = "text", required = false, placeholder }: { label: string; id: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium">{label}</span>
      <input id={id} name={id} type={type} required={required} placeholder={placeholder} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
    </label>
  );
}