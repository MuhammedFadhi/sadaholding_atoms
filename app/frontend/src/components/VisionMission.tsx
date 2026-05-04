import { Compass } from "lucide-react";

export default function VisionMission() {
  return (
    <section id="vision" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-border" />
            <span className="text-xs font-mono-label text-primary">02 / Purpose</span>
            <div className="h-[1px] w-16 bg-border" />
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1] text-foreground mb-6">
            Built on <em className="italic text-primary">purpose.</em>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Clear direction. Strong principles. Enduring impact across Saudi
            Arabia and beyond.
          </p>
        </div>

        {/* Vision & Mission — unified */}
        <div className="mb-20">
          <div className="elegant-card p-10 md:p-16 lg:p-20 group relative overflow-hidden hover-lift max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-chart-2/10 rounded-full blur-3xl group-hover:bg-chart-2/20 transition-all duration-700" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-10">
                <Compass className="w-5 h-5 text-primary" />
                <span className="font-mono-label text-xs text-primary">
                  Vision &amp; Mission
                </span>
                <div className="h-[1px] flex-1 bg-border" />
              </div>
              <p className="font-serif-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug">
                Building{" "}
                <em className="italic text-primary">
                  purposeful, scalable, and high-value businesses
                </em>{" "}
                across essential industries. To create, operate, and grow
                companies that solve real market needs through{" "}
                <span className="italic text-primary">
                  quality, innovation, trust, and strong execution.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Core line */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-4 top-0 font-serif-display italic text-8xl text-primary/30 leading-none">
            &ldquo;
          </div>
          <div className="absolute -right-4 bottom-0 font-serif-display italic text-8xl text-primary/30 leading-none">
            &rdquo;
          </div>
          <div className="text-center px-8 py-12">
            <p className="font-serif-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
              <span className="italic">Clear as water.</span>
              <br />
              <span className="text-primary">Strong as business.</span>
              <br />
              <span className="italic">Built for people.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}