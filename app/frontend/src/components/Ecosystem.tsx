import { Droplet, Beaker, Cpu, Megaphone, Trophy, UtensilsCrossed, Home } from "lucide-react";

const ecosystemItems = [
  { text: "Water expertise powers SA'DA H2O", number: "01" },
  { text: "Scientific supply strengthens laboratory solutions", number: "02" },
  { text: "IT enables smarter operations", number: "03" },
  { text: "A360 builds brands and market presence", number: "04" },
  { text: "Ardh Alfan executes large-scale public projects", number: "05" },
  { text: "Brown Truck brings lifestyle innovation to the street", number: "06" },
];

const companyNodes = [
  { name: "Water", icon: Droplet, angle: 270 },
  { name: "H₂O", icon: Home, angle: 321 },
  { name: "Scientific", icon: Beaker, angle: 12 },
  { name: "Artland", icon: Cpu, angle: 64 },
  { name: "A360", icon: Megaphone, angle: 115 },
  { name: "Ardh Alfan", icon: Trophy, angle: 167 },
  { name: "Brown Truck", icon: UtensilsCrossed, angle: 218 },
];

export default function Ecosystem() {
  return (
    <section id="universe" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-border" />
            <span className="text-xs font-mono-label text-primary">
              04 / Business Ecosystem
            </span>
            <div className="h-[1px] w-16 bg-border" />
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1] text-foreground mb-6">
            One holding.{" "}
            <em className="italic text-primary">Multiple industries.</em>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not a random collection. Each business serves a real market need and
            strengthens the group&apos;s ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Orbital visualization - refined */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square max-w-[560px] mx-auto w-full">
              {/* Concentric rings - elegant */}
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-rotate-slow" />
              <div className="absolute inset-[8%] rounded-full border border-primary/15 animate-rotate-reverse" />
              <div className="absolute inset-[18%] rounded-full border border-primary/20 animate-rotate-slow" />

              {/* Pulse ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary animate-pulse-ring" />

              {/* Center - logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-primary flex items-center justify-center z-20 shadow-elegant">
                <div className="text-center">
                  <div className="font-serif-display italic text-primary-foreground text-xl">
                    SA&apos;DA
                  </div>
                  <div className="font-mono-label text-primary-foreground/70 text-[9px] mt-1">
                    HOLDINGS
                  </div>
                </div>
              </div>

              {/* Orbiting nodes */}
              {companyNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const radius = 44;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                return (
                  <div
                    key={node.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="group flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full elegant-card flex items-center justify-center group-hover:border-primary group-hover:shadow-glow-sm transition-all duration-500 cursor-pointer">
                        <node.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="mt-2 text-[10px] font-mono-label text-foreground whitespace-nowrap">
                        {node.name}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Elegant connecting lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
              >
                {companyNodes.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const radius = 44;
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <line
                      key={node.name}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="hsl(var(--primary))"
                      strokeOpacity="0.15"
                      strokeWidth="0.15"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Connection list */}
          <div className="lg:col-span-6 space-y-0">
            {ecosystemItems.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-6 py-6 border-b border-border hover:border-primary/40 transition-colors"
              >
                <span className="font-serif-display italic text-3xl text-primary/60 group-hover:text-primary transition-colors leading-none pt-1">
                  {item.number}
                </span>
                <p className="text-foreground text-lg leading-relaxed flex-1">
                  {item.text}
                </p>
              </div>
            ))}
            <div className="pt-8">
              <p className="font-serif-display italic text-xl md:text-2xl text-foreground">
                Together, they form a group built on{" "}
                <span className="text-primary not-italic font-medium">
                  execution, trust, and long-term value.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}