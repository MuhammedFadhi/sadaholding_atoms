import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Companies", href: "#companies" },
  { label: "Vision", href: "#vision" },
  { label: "Universe", href: "#universe" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass-surface px-6 py-3"
              : "px-0"
          }`}
        >
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 border border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="font-serif-display italic text-primary text-lg">
                  S
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-foreground font-sans-display font-semibold tracking-tight text-sm">
                SA&apos;DA
              </span>
              <span className="text-muted-foreground text-[9px] font-mono-label">
                HOLDINGS
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors border-l border-border pl-6 ml-4"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-6 mt-2 glass-surface">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground py-2 text-base"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 text-foreground pt-4 border-t border-border"
              onClick={() => setOpen(false)}
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}