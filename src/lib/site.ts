export const SITE = {
  name: "GTA Mac Repair",
  tagline: "We specialize in Mac repair — only.",
  phone: "416-887-6847",
  phoneAlt: "647-560-0659",
  email: "Info@GTAMacRepair.com",
  locations: [
    "Downtown Toronto",
    "Markham",
    "Newmarket",
    "Richmond Hill",
    "North York",
    "Mississauga",
    "Etobicoke",
  ],
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/our-services", label: "Services" },
  { to: "/about-us", label: "About" },
  { to: "/book-online", label: "Book" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceMeta = {
  slug: string;
  title: string;
  short: string;
  category: "MacBook" | "iMac" | "Data" | "Upgrades";
};

export const SERVICES: ServiceMeta[] = [
  { slug: "liquid-damage", title: "Liquid Damage Repair", short: "Spills, corrosion, and board-level recovery.", category: "MacBook" },
  { slug: "screen-replacement", title: "Screen Replacement", short: "Cracked, flickering, or dead display fixes.", category: "MacBook" },
  { slug: "screen-lcd-replacement", title: "Screen / LCD Replacement", short: "LCD panel, glass, and assembly swaps.", category: "MacBook" },
  { slug: "keyboard-replacement", title: "Keyboard Replacement", short: "Sticky, dead, or butterfly-keyboard fixes.", category: "MacBook" },
  { slug: "battery-replacement", title: "Battery Replacement", short: "Restore real all-day battery life.", category: "MacBook" },
  { slug: "trackpad-touchpad-replacement", title: "Trackpad Replacement", short: "Click and Force Touch restored.", category: "MacBook" },
  { slug: "speaker-replacement", title: "Speaker Replacement", short: "Crackle-free stereo sound, back to spec.", category: "MacBook" },
  { slug: "power-supply-repair", title: "Power Supply Repair", short: "No-power, no-charge diagnostics and fix.", category: "MacBook" },
  { slug: "logicboard-motherboard-repair", title: "Logic Board Repair", short: "Component-level board-repair specialists.", category: "MacBook" },
  { slug: "motherboard-repair", title: "Motherboard Repair", short: "Micro-soldering and trace repair.", category: "MacBook" },
  { slug: "gpu-repair", title: "GPU Repair", short: "Artifacting, no-video, and reflow fixes.", category: "iMac" },
  { slug: "graphic-card-repair", title: "Graphics Card Repair", short: "Discrete GPU diagnostics and rework.", category: "iMac" },
  { slug: "cpu-gpu-replacement", title: "CPU / GPU Replacement", short: "Chip-level replacement on supported boards.", category: "iMac" },
  { slug: "virus-removal", title: "Virus / Malware Removal", short: "Clean, secure, and back to fast.", category: "Data" },
  { slug: "data-recovery", title: "Data Recovery", short: "From dead drives, water damage, or boot loops.", category: "Data" },
  { slug: "data-recovery-1", title: "Advanced Data Recovery", short: "Deep recovery for failed SSDs and HDDs.", category: "Data" },
  { slug: "hard-drive-replacement", title: "Hard Drive Replacement", short: "Upgrade to fast, reliable storage.", category: "Upgrades" },
  { slug: "hard-drive-replacement-1", title: "SSD Replacement", short: "Swap to modern solid-state storage.", category: "Upgrades" },
  { slug: "ram-replacement", title: "RAM Replacement", short: "More memory, smoother multitasking.", category: "Upgrades" },
  { slug: "macbook-ram-upgrade", title: "MacBook RAM Upgrade", short: "Memory upgrades on supported MacBooks.", category: "Upgrades" },
  { slug: "macbook-pro-upgrades", title: "MacBook Pro Upgrades", short: "Storage, memory, and battery upgrades.", category: "Upgrades" },
  { slug: "macbook-air-upgrades", title: "MacBook Air Upgrades", short: "Breathe new life into your Air.", category: "Upgrades" },
  { slug: "imac-upgrades", title: "iMac Upgrades", short: "SSD, RAM, and performance upgrades.", category: "Upgrades" },
  { slug: "imac-cpu-gpu-upgrade", title: "iMac CPU / GPU Upgrade", short: "Push your iMac further than stock.", category: "Upgrades" },
  { slug: "macbook-air", title: "MacBook Air Repair", short: "Full MacBook Air service catalog.", category: "MacBook" },
];