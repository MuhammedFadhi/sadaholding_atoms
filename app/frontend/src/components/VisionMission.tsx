import { Eye, Rocket } from "lucide-react";

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

        {/* Vision & Mission grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="elegant-card p-10 md:p-14 group relative overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <Eye className="w-5 h-5 text-primary" />
                <span className="font-mono-label text-xs text-primary">
                  01 — Vision
                </span>
              </div>
              <h3 className="font-serif-display text-3xl md:text-4xl text-foreground leading-snug mb-6">
                To become a respected Saudi holding group
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Known for building{" "}
                <span className="text-foreground italic font-serif-display">
                  purposeful, scalable, and high-value businesses
                </span>{" "}
                across essential industries.
              </p>
            </div>
          </div>

          <div className="elegant-card p-10 md:p-14 group relative overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-chart-2/10 rounded-full blur-3xl group-hover:bg-chart-2/20 transition-all duration-700" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <Rocket className="w-5 h-5 text-chart-2" />
                <span className="font-mono-label text-xs text-chart-2">
                  02 — Mission
                </span>
              </div>
              <h3 className="font-serif-display text-3xl md:text-4xl text-foreground leading-snug mb-6">
                To create, operate, and grow companies
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                That solve real market needs through{" "}
                <span className="text-foreground italic font-serif-display">
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