import { useState } from "react";

type RepairId = "logic-board" | "battery" | "keyboard" | "trackpad" | "liquid-damage";

type HotspotPosition = {
  top: string;
  left: string;
  width: string;
  height: string;
};

type RepairCard = {
  id: RepairId;
  eyebrow: string;
  title: string;
  description: string;
  hotspot: HotspotPosition;
};

const DEFAULT_REPAIR: RepairId = "logic-board";

const repairCards: RepairCard[] = [
  {
    id: "logic-board",
    eyebrow: "Board-level diagnostics",
    title: "Logic Board Repair",
    description:
      "Trace power faults, failed chips, and no-boot issues with precise board-level repair.",
    hotspot: { top: "18%", left: "45%", width: "28%", height: "20%" },
  },
  {
    id: "battery",
    eyebrow: "Power restoration",
    title: "Battery Replacement",
    description:
      "Replace worn battery cells to restore runtime, charging reliability, and safe operation.",
    hotspot: { top: "43%", left: "24%", width: "52%", height: "20%" },
  },
  {
    id: "keyboard",
    eyebrow: "Input repair",
    title: "Keyboard Repair",
    description:
      "Resolve sticky keys, failed backlights, repeating inputs, and unresponsive key rows.",
    hotspot: { top: "63%", left: "20%", width: "60%", height: "16%" },
  },
  {
    id: "trackpad",
    eyebrow: "Precision control",
    title: "Trackpad Repair",
    description: "Fix click issues, erratic cursor movement, force-touch faults, and cable damage.",
    hotspot: { top: "79%", left: "35%", width: "30%", height: "12%" },
  },
  {
    id: "liquid-damage",
    eyebrow: "Corrosion cleanup",
    title: "Liquid Damage Repair",
    description:
      "Clean and recover spill-damaged internals across keyboard, connectors, and board areas.",
    hotspot: { top: "26%", left: "18%", width: "64%", height: "52%" },
  },
];

export function MacbookRepairAnatomy() {
  const [activeRepair, setActiveRepair] = useState<RepairId>(DEFAULT_REPAIR);
  const activeCard = repairCards.find((card) => card.id === activeRepair) ?? repairCards[0];

  return (
    <section className="bg-white px-6 py-16 text-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Interactive repair anatomy
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            See how each MacBook repair maps to the machine.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hover or focus a repair card to highlight the related area on the exploded-view MacBook
            image.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-16">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-white p-4 sm:p-6">
              <img
                src="/macbook-anatomy.png"
                alt="Exploded view of a MacBook showing internal components"
                className="relative z-10 h-auto w-full select-none object-contain"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute z-20 rounded-[999px] border border-sky-300/70 bg-sky-300/20 shadow-[0_0_0_10px_rgba(125,211,252,0.12),0_0_44px_rgba(14,165,233,0.50)] ring-1 ring-white/80 transition-all duration-300 ease-out"
                style={activeCard.hotspot}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-30 rounded-[1.5rem] bg-[radial-gradient(circle_at_center,transparent_56%,rgba(255,255,255,0.18)_100%)]"
              />
            </div>
          </div>

          <div
            className="space-y-4"
            onMouseLeave={() => setActiveRepair(DEFAULT_REPAIR)}
            aria-label="MacBook repair areas"
          >
            {repairCards.map((card) => {
              const isActive = card.id === activeRepair;

              return (
                <button
                  key={card.id}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActiveRepair(card.id)}
                  onFocus={() => setActiveRepair(card.id)}
                  className={`group w-full rounded-3xl border p-6 text-left shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 ${
                    isActive
                      ? "border-sky-200 bg-white shadow-[0_18px_45px_rgba(14,165,233,0.16)] ring-1 ring-sky-100"
                      : "border-slate-200 bg-white/90 hover:border-slate-300 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
                      isActive ? "text-sky-600" : "text-slate-400 group-hover:text-slate-500"
                    }`}
                  >
                    {card.eyebrow}
                  </span>
                  <span className="mt-3 flex items-center justify-between gap-4">
                    <span className="text-xl font-semibold tracking-tight text-slate-950">
                      {card.title}
                    </span>
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full transition-all ${
                        isActive
                          ? "bg-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.75)]"
                          : "bg-slate-200"
                      }`}
                    />
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-slate-600">
                    {card.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
