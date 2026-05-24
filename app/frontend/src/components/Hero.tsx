import { ArrowUpRight, ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/1178401/2026-05-02/nxwnm6iaaflq/hero-background-water-cinematic.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="SA'DA HOLDING CO cinematic"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-chart-2/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Left column - main content */}
          <div className="lg:col-span-8">
            <h1 className="font-serif-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.95] mb-8 tracking-tight">
              <span className="block text-foreground">
                From Water
              </span>
              <span className="block text-foreground/80">
                to <em className="italic text-primary font-light">AI.</em>
              </span>
              <span className="block text-foreground/60 text-5xl md:text-6xl lg:text-7xl mt-4 font-sans-display font-light">
                From Science to Transformations
              </span>
            </h1>

            <p className="font-serif-display italic text-2xl md:text-3xl text-foreground/90 leading-snug max-w-3xl mb-10">
              SA&apos;DA builds businesses that{" "}
              <span className="text-primary not-italic font-semibold">matter.</span>
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
              A Saudi-based holding group headquartered in Al-Khobar, building a
              diversified portfolio of high-value companies across desalination,
              water management, laboratory solutions, IT infrastructure, AI-driven
              technologies, digital transformation, sports event mobilization,
              and selective passion projects.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#companies"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium shadow-glow-sm hover:shadow-elegant transition-all duration-500"
              >
                <span>Explore Our Companies</span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all duration-500"
              >
                <span>Partner With SA&apos;DA</span>
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <span className="font-mono-label text-xs">View Our Journey</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right column - meta data */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-border">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-mono-label text-muted-foreground block mb-2">
                  01 Heritage
                </span>
                <p className="font-serif-display italic text-lg text-foreground">
                  Built over 15+ years of Saudi expertise
                </p>
              </div>

              <div className="divider-line" />

              <div>
                <span className="text-[10px] font-mono-label text-muted-foreground block mb-2">
                  02 Scope
                </span>
                <p className="font-serif-display italic text-lg text-foreground">
                  A cluster of companies, one purpose
                </p>
              </div>

              <div className="divider-line" />

              <div>
                <span className="text-[10px] font-mono-label text-muted-foreground block mb-2">
                  03 Headquarters
                </span>
                <p className="font-serif-display italic text-lg text-foreground">
                  Al-Khobar, Saudi Arabia
                </p>
              </div>

              <div className="divider-line" />

              {/* <div className="pt-2">
                <span className="text-[10px] font-mono-label text-muted-foreground block mb-3">
                  Ecosystem
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Desalination",
                    "Water Mgmt",
                    "Labs",
                    "IT",
                    "AI",
                    "Digital",
                    "Sports Events",
                    "Passion",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}