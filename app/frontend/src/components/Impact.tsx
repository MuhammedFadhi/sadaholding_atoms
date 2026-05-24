const impactItems = [
  { number: "15+", label: "Years", desc: "Saudi water expertise" },
  { number: "∞", label: "Cluster", desc: "Of companies & industries" },
  { number: "KSA", label: "Wide", desc: "Operations nationwide" },
  { number: "F1", label: "Mega Events", desc: "Dakar · Red Bull · more" },
  { number: "01", label: "Vision", desc: "High values, always" },
];

export default function Impact() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xs font-mono-label text-primary">
              Impact in Numbers
            </span>
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Measured in <em className="italic text-primary">real numbers.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-border">
          {impactItems.map((item, idx) => (
            <div
              key={item.label}
              className={`p-8 md:p-10 text-center group hover:bg-primary/5 transition-colors duration-500 ${idx < impactItems.length - 1 ? "md:border-r border-border" : ""
                } ${idx % 2 === 0 && idx < 4 ? "border-r border-border md:border-r" : ""}
                ${idx < 3 ? "border-b md:border-b-0 border-border" : ""}`}
            >
              <div className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-gradient-primary mb-3 leading-none">
                {item.number}
              </div>
              <div className="font-mono-label text-xs text-foreground mb-2">
                {item.label}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}