export default function Footer() {
  return (
    <footer className="relative border-t border-border py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/sada-logo-white.png"
                alt="SA'DA HOLDINGS"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="font-serif-display italic text-xl text-foreground/80 leading-snug mb-6 max-w-md">
              Building businesses that{" "}
              <span className="text-primary not-italic">matter.</span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              A Saudi-based business group creating high-value companies across
              water, technology, science, branding, events, and lifestyle.
            </p>
          </div>

          {/* Companies */}
          <div className="lg:col-span-3">
            <h4 className="font-mono-label text-[10px] text-muted-foreground mb-5">
              Our Companies
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "SA'DA Water",
                "SA'DA H2O",
                "SA'DA Scientific",
                "Artland Infotech",
                "A360",
                "Ardh Alfan",
                "Brown Truck",
              ].map((name) => (
                <li key={name}>
                  <a
                    href="#companies"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-mono-label text-[10px] text-muted-foreground mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Vision", href: "#vision" },
                { label: "Universe", href: "#universe" },
                { label: "Leadership", href: "#leadership" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-mono-label text-[10px] text-muted-foreground mb-5">
              Reach Us
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-foreground/70">
                Al-Khobar
                <br />
                Saudi Arabia
              </p>
              <p className="text-foreground/70">
                partners@sadaholdings.com
              </p>
            </div>
          </div>
        </div>

        <div className="divider-line mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-mono-label">
            © {new Date().getFullYear()} SA&apos;DA HOLDINGS · All Rights Reserved
          </p>
          <p className="font-serif-display italic text-foreground/70 text-sm">
            Clear vision. Strong values. Real execution.
          </p>
        </div>
      </div>
    </footer>
  );
}