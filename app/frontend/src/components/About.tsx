import { Heart, Droplets, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono-label text-primary">01 / Origin</span>
              <div className="h-[1px] flex-1 bg-border" />
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-foreground">
              The meaning of{" "}
              <em className="italic text-primary">sa&apos;da.</em>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:pt-16">
            <p className="font-serif-display text-2xl md:text-3xl text-foreground/90 leading-snug italic mb-8">
              &ldquo;The name SA&apos;DA — <span className="not-italic text-primary">سعادة</span> —
              means <span className="text-primary not-italic">happiness.</span> That
              meaning sits at the heart of our business philosophy.&rdquo;
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="aspect-[4/5] relative elegant-card overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif-display italic text-[18rem] leading-none text-primary/20">
                  س
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="font-mono-label text-xs text-primary block mb-2">
                  Arabic · Happiness
                </span>
                <p className="font-serif-display italic text-3xl text-foreground">
                  The essence of everything we build.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="font-mono-label text-xs text-muted-foreground block mb-4">
                Our Philosophy
              </span>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
                SA&apos;DA HOLDINGS was created with one clear belief: businesses
                should not only make profit — they should{" "}
                <span className="text-primary font-medium">
                  create value, solve real problems, and serve people
                </span>{" "}
                with quality, trust, and purpose.
              </p>
            </div>

            <div className="divider-line" />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Whether we are delivering pure water to homes, supporting
              laboratories, building technology systems, launching brands,
              mobilizing mega events, or creating new lifestyle concepts, our
              purpose remains the same:
            </p>

            <blockquote className="relative pl-8 border-l-2 border-primary">
              <p className="font-serif-display italic text-2xl md:text-3xl text-foreground leading-snug">
                To build businesses that bring value, reliability, and happiness
                into people&apos;s lives.
              </p>
            </blockquote>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { icon: Heart, title: "Happiness", desc: "Essence of SA'DA" },
                { icon: Droplets, title: "Clarity", desc: "Clear as water" },
                { icon: Target, title: "Execution", desc: "Real results" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="elegant-card p-6 text-center hover-lift"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <h4 className="font-serif-display italic text-lg text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono-label">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}