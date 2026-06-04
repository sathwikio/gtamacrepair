import { createFileRoute } from "@tanstack/react-router";

import { MacbookRepairAnatomy } from "@/components/MacbookRepairAnatomy";

export const Route = createFileRoute("/demo/macbook-repair-anatomy")({
  head: () => ({
    meta: [
      { title: "MacBook Repair Anatomy Demo | GTA Mac Repair" },
      {
        name: "description",
        content:
          "Isolated demo showing an interactive MacBook repair anatomy view with hover and focus hotspots.",
      },
    ],
  }),
  component: MacbookRepairAnatomyDemoPage,
});

function MacbookRepairAnatomyDemoPage() {
  return <MacbookRepairAnatomy />;
}
