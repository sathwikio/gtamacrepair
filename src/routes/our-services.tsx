import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { CtaBand } from "@/components/cta-band";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Mac Repair Services | GTA Mac Repair" },
      { name: "description", content: "Full catalog of Mac repair services: liquid damage, screen, keyboard, battery, logic board, data recovery, and upgrades." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const categories: Array<typeof SERVICES[number]["category"]> = ["MacBook", "iMac", "Upgrades", "Data"];
  return (
    <PageShell>
      <section className="container-px mx-auto max-w-7xl pt-20 pb-12 md:pt-28">
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">Our services</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Mac-only, board-level, and backed by warranty. Browse by category or jump straight to what you need.
        </p>
      </section>
      {categories.map((cat) => {
        const list = SERVICES.filter((s) => s.category === cat);
        if (!list.length) return null;
        return (
          <section key={cat} className="container-px mx-auto max-w-7xl py-10">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{cat}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {list.map((s) => (
                <Link key={s.slug} to={`/${s.slug}` as string} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm">
                    Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
      <CtaBand />
    </PageShell>
  );
}