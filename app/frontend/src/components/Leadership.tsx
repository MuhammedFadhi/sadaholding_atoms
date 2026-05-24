export default function Leadership() {
  return (
    <section id="leadership" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-40 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-primary/10 animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/15 animate-rotate-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/20 animate-rotate-slow" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-16 bg-border" />
          <span className="text-xs font-mono-label text-primary">
            Leadership
          </span>
          <div className="h-[1px] w-16 bg-border" />
        </div>

        <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-foreground mb-12">
          Leadership with{" "}
          <em className="italic text-primary">ground-level</em> execution.
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-20 max-w-3xl mx-auto">
          SA&apos;DA HOLDING CO is led by people who believe in building businesses
          from the ground up, not just from boardrooms. From operations to
          customer service, from product development to project delivery, the
          group&apos;s strength comes from{" "}
          <span className="text-foreground italic font-serif-display">
            practical experience, market understanding, and direct execution.
          </span>
        </p>

        {/* Quote block - magazine style */}
        <div className="relative max-w-4xl mx-auto">
          <blockquote className="relative px-4 md:px-16">
            {/* <p className="font-serif-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-12">
              Our vision is{" "}
              <em className="italic text-primary">clear as water</em>: build
              businesses with{" "}
              <em className="italic">high values</em> and serve the people
              right.
            </p> */}

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 bg-primary" />
              <div className="flex flex-col items-center">
                <span className="font-mono-label text-xs text-primary">
                  SA&apos;DA HOLDING CO · Leadership
                </span>
              </div>
              <div className="h-[1px] w-16 bg-primary" />
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}