import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-px mx-auto my-24 max-w-7xl">
      <div className="rounded-3xl bg-foreground p-10 text-background md:p-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Not sure what's wrong?</h2>
            <p className="mt-3 max-w-xl text-background/70">
              Free diagnostics within one business day. No fix, no charge — every repair backed by a 90-day warranty.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90">
              <Phone className="size-4" /> {SITE.phone}
            </a>
            <Link to="/book-online" className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-medium text-background hover:bg-background/10">
              Book online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}