import { TrendingUp, Cog, MapPin, Shield, Infinity as InfinityIcon } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Market-Driven Businesses",
    description: "Every SA'DA company is created around a real demand, not a trend.",
    number: "01",
  },
  {
    icon: Cog,
    title: "Operational Strength",
    description: "Ideas are useless without execution, discipline, people, and systems.",
    number: "02",
  },
  {
    icon: MapPin,
    title: "Saudi-Focused Growth",
    description: "Built for the Saudi market, Saudi customers, and Saudi business reality.",
    number: "03",
  },
  {
    icon: Shield,
    title: "Value Before Noise",
    description: "Businesses that stand on quality, service, and trust — not only marketing.",
    number: "04",
  },
  {
    icon: InfinityIcon,
    title: "Long-Term Vision",
    description: "We build companies that can scale, survive, and create lasting impact.",
    number: "05",
  },
];

export default function WhySada() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-chart-2/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono-label text-primary">
                06 / Why SA&apos;DA HOLDINGS
              </span>
              <div className="h-[1px] flex-1 bg-border" />
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-foreground">
              We don&apos;t just start companies.
              <br />
              <em className="italic text-primary">We build engines.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Five principles guide every business decision we make —
              from entity creation to daily operations, from strategy
              to customer experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`elegant-card p-10 hover-lift group relative overflow-hidden ${
                idx === 3 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <span className="absolute top-6 right-8 font-serif-display italic text-6xl text-primary/20 leading-none group-hover:text-primary/40 transition-colors duration-500">
                {pillar.number}
              </span>
              <div className="relative">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <pillar.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-serif-display text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}