import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/lib/site";

const meta = SERVICES.find((s) => s.slug === "virus-removal")!;

export const Route = createFileRoute("/virus-removal")({
  head: () => ({
    meta: [
      { title: `${meta.title} | GTA Mac Repair` },
      { name: "description", content: `${meta.short} Free diagnostic, 90-day warranty, no fix no charge across the GTA.` },
      { property: "og:title", content: `${meta.title} | GTA Mac Repair` },
      { property: "og:description", content: meta.short },
    ],
  }),
  component: () => <ServicePage meta={meta} />,
});
