const impactItems = [
  { number: "15+", label: "Years", desc: "Saudi water expertise" },
  { number: "∞", label: "Cluster", desc: "Of companies & industries" },
  { number: "KSA", label: "Wide", desc: "Operations nationwide" },
  { number: "MEGA\nEVENTS", label: "", desc: "F1, Dakar, Red Bull - more" },
  { number: "01", label: "Vision", desc: "Building businesses that matters" },
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
              key={item.label || idx}
              className={`p-8 md:p-10 text-center group hover:bg-primary/5 transition-colors duration-500 flex flex-col items-center justify-start ${idx < impactItems.length - 1 ? "md:border-r border-border" : ""
                } ${idx % 2 === 0 && idx < 4 ? "border-r border-border md:border-r" : ""}
                ${idx < 3 ? "border-b md:border-b-0 border-border" : ""}`}
            >
              <div
                className={`font-serif-display text-primary mb-3 leading-tight ${
                  item.number.length > 4 ? "text-3xl md:text-4xl lg:text-5xl" : "text-5xl md:text-6xl lg:text-7xl"
                }`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {item.number}
              </div>
              {item.label && (
                <div className="font-mono-label text-xs text-foreground mb-2">
                  {item.label}
                </div>
              )}
              <div className="text-xs text-muted-foreground leading-relaxed mt-auto w-full">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}