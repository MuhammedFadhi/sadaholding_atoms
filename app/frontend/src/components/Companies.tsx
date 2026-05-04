import { ArrowUpRight, Star } from "lucide-react";

const companies = [
  {
    name: "SA'DA Water",
    website: "sadawater.com",
    category: "Water Treatment · RO · Desalination",
    description:
      "The flagship company of SA'DA HOLDINGS. With over 15 years of Saudi water expertise, SA'DA Water delivers professional water treatment solutions: RO systems, desalination, swimming pools, chemicals, AMC services & technical know hows.",
    tagline: "Saudi Water Expertise. Built Over 15+ Years.",
    cta: "Visit SA'DA Water",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1178401/2026-05-02/nxwnqjyaafma/sada-water-treatment.png",
    code: "01",
  },
  {
    name: "SA'DA H2O",
    website: "sadawater.com",
    category: "Smart Home RO Purifiers",
    description:
      "Smart RO water purifiers designed for every Saudi home. Built for Saudi water conditions, helping families reduce bottled-water dependency through advanced multi-stage filtration.",
    tagline: "Stop Buying Water. Start Owning It.",
    cta: "Discover H2O",
    image:
      "/assets/images/sada-h2o.png",
    code: "02",
  },
  {
    name: "Artland Infotech",
    website: "artlandinfotech.com",
    category: "IT Infrastructure · Security · Low-Current",
    description:
      "A future-focused technology company delivering innovative IT services across IT infrastructure, security systems, low-current solutions, and AI-enabled digital transformation.",
    tagline: "Where Business Meets Technology.",
    cta: "Visit Artland",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1178401/2026-05-02/nxwofraaafma/artland-infotech-digital.png",
    code: "03",
  },
  {
    name: "A360",
    website: "a3sixty.com",
    category: "Branding · Digital · Software · AI",
    description:
      "A powerhouse for branding, content, digital marketing, product launches, and brand empowerment, extended with software development, websites, ecommerce, AI solutions, and digital transformation. Strategy to visuals, campaigns to launches, code to cloud. Designed to make brands seen, remembered, and trusted.",
    tagline: "From Scratch to Sky.",
    cta: "Explore A360",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1178401/2026-05-02/nxwof3qaafna/a360-branding-creative.png",
    code: "04",
  },
  {
    name: "Ardh Alfan",
    website: "ardhalfan.com",
    category: "Event Mobilization · Machinery",
    description:
      "Project mobilization, specialized machinery, and task force deployment for major events. Has facilitated Formula 1, Dakar Rally, Red Bull events, and other large-scale operations.",
    tagline: "Mobilizing Mega Events. Delivering on the Ground.",
    cta: "Visit Ardh Alfan",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1178401/2026-05-02/nxwodbyaafmq/ardh-alfan-motorsport.png",
    code: "05",
  },
  {
    name: "Brown Truck",
    website: "Launching Soon",
    category: "Food Truck Chain · Lifestyle",
    description:
      "Saudi Arabia's first chain concept built around the simple, most-loved daily food culture. Classic Bufiya sandwiches, tea, drinks, and comfort food served from premium trucks at exclusive Riyadh locations.",
    tagline: "Saudi's Favorite Simple Feels On a Truck.",
    cta: "Coming Soon",
    image:
      "/assets/images/brown-truck.png",
    code: "06",
  },
  {
    name: "SA'DA Scientific",
    website: "sadascientific.com",
    category: "Laboratory · Chemicals · Glassware",
    description:
      "High-quality laboratory instruments, chemicals, glassware, and scientific supplies supporting research, quality assurance, testing, education, and industrial innovation.",
    tagline: "Supplying Science. Supporting Innovation.",
    cta: "Explore Scientific",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1178401/2026-05-02/nxwnsyaaafnq/sada-scientific-lab.png",
    code: "07",
  },
  {
    name: "SIT — SA'DA Industrial Trading",
    website: "sadaholdings.com",
    category: "Industrial Supplies · Chemicals · Tools",
    description:
      "A trusted supplier of high-quality industrial solutions, supporting infrastructure, industrial, commercial, and maintenance sectors with reliable tools, industrial chemicals, janitorial chemicals, cleaning tools, equipment, and support services. Built on quality, reliability, and service excellence, SIT helps businesses improve operational efficiency through dependable procurement support, technical assistance, and a wide range of products designed for manufacturing, processing, facility management, hygiene, safety, and day-to-day industrial operations.",
    tagline: "Quality. Reliability. Service Excellence.",
    cta: "Learn More",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1178401/2026-05-02/nxwofraaafma/artland-infotech-digital.png",
    code: "08",
  },
];

export default function Companies() {
  const featured = companies[0];
  const rest = companies.slice(1);

  return (
    <section id="companies" className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono-label text-primary">
                Portfolio
              </span>
              <div className="h-[1px] flex-1 bg-border" />
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1] text-foreground">
              Our <em className="italic text-primary">business</em> universe.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              One holding group. A cluster of distinct companies. Each built
              around real market needs and united by a shared value system.
            </p>
          </div>
        </div>

        {/* Featured - editorial layout */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="font-mono-label text-xs text-primary">
              Featured · Flagship
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-0 elegant-card overflow-hidden">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden group">
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
              <div className="absolute top-6 left-6 glass-surface px-4 py-2">
                <span className="font-mono-label text-[10px] text-primary">
                  Flagship
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-center">
              <span className="font-mono-label text-xs text-muted-foreground mb-4">
                {featured.category}
              </span>
              <h3 className="font-serif-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                {featured.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featured.description}
              </p>
              <p className="font-serif-display italic text-xl text-primary mb-8">
                &ldquo;{featured.tagline}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <a
                  href={`https://${featured.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <span className="font-medium">{featured.cta}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                </a>
                <span className="text-xs font-mono-label text-muted-foreground">
                  {featured.website}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Companies grid - staggered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((company, idx) => (
            <a
              key={company.name}
              href={
                company.website === "Launching Soon"
                  ? "#"
                  : `https://${company.website}`
              }
              target={company.website === "Launching Soon" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`elegant-card overflow-hidden group flex flex-col hover-lift ${
                idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-mono-label text-[10px] text-muted-foreground mb-3">
                  {company.category}
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                  {company.description}
                </p>
                <p className="font-serif-display italic text-primary text-sm mb-6">
                  &ldquo;{company.tagline}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <span className="text-xs font-mono-label text-muted-foreground">
                    {company.website}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}