import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono-label text-primary">
                08 / Partnership
              </span>
              <div className="h-[1px] flex-1 bg-border" />
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-foreground">
              Let&apos;s build{" "}
              <em className="italic text-primary">value</em> together.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are a customer, partner, supplier, investor,
              institution, or brand looking to collaborate — SA&apos;DA HOLDINGS
              is open to meaningful partnerships that create real impact.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Contact Info - magazine cards */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                icon: MapPin,
                label: "Headquarters",
                value: "Al-Khobar",
                sub: "Kingdom of Saudi Arabia",
                num: "01",
              },
              {
                icon: Mail,
                label: "Email",
                value: "partners@sadaholdings.com",
                sub: "info@sadaholdings.com",
                num: "02",
              },
              {
                icon: Phone,
                label: "Partnerships",
                value: "48-hour response time",
                sub: "For meaningful inquiries",
                num: "03",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="elegant-card p-8 relative overflow-hidden group hover-lift"
              >
                <span className="absolute top-4 right-6 font-serif-display italic text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">
                  {item.num}
                </span>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <span className="font-mono-label text-[10px] text-muted-foreground block mb-2">
                      {item.label}
                    </span>
                    <p className="text-foreground font-medium text-lg mb-1">
                      {item.value}
                    </p>
                    <p className="text-muted-foreground text-sm">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="elegant-card p-10 md:p-14 h-full">
              <span className="font-mono-label text-xs text-primary block mb-4">
                Partner With Us
              </span>
              <h3 className="font-serif-display text-3xl md:text-4xl text-foreground mb-3 leading-tight">
                Start a <em className="italic">conversation.</em>
              </h3>
              <p className="text-muted-foreground mb-10">
                Tell us about your interest — we&apos;ll reach out within 48
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono-label text-muted-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      required
                      placeholder="Your name"
                      className="bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus-visible:ring-0 rounded-none px-0 h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-label text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus-visible:ring-0 rounded-none px-0 h-11"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono-label text-muted-foreground mb-2">
                      Company
                    </label>
                    <Input
                      placeholder="Company name"
                      className="bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus-visible:ring-0 rounded-none px-0 h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-label text-muted-foreground mb-2">
                      Interest
                    </label>
                    <select
                      required
                      className="w-full h-11 bg-transparent border-0 border-b border-border text-foreground focus:border-primary focus:outline-none px-0"
                    >
                      <option value="" className="bg-background">
                        Select type...
                      </option>
                      <option value="partner" className="bg-background">
                        Partnership
                      </option>
                      <option value="supplier" className="bg-background">
                        Supplier
                      </option>
                      <option value="investor" className="bg-background">
                        Investor
                      </option>
                      <option value="customer" className="bg-background">
                        Customer
                      </option>
                      <option value="other" className="bg-background">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-label text-muted-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Tell us about your partnership idea..."
                    className="bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus-visible:ring-0 rounded-none px-0 resize-none"
                  />
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium shadow-glow-sm hover:shadow-elegant transition-all duration-500"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                  </button>
                </div>

                {submitted && (
                  <div className="mt-4 p-4 border border-primary/30 bg-primary/5">
                    <p className="text-primary text-sm">
                      Thank you. We&apos;ll reach out within 48 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Final tagline */}
        <div className="mt-32 text-center">
          <p className="font-serif-display text-3xl md:text-5xl text-foreground leading-[1.1]">
            SA&apos;DA HOLDINGS —
            <br />
            <em className="italic text-primary">
              Clear vision. Strong values. Real execution.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}