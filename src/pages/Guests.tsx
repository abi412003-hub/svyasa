import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Award, Building2, Star } from "lucide-react";

interface Guest {
  id: string;
  name: string;
  title: string;
  organization: string;
  country: string;
  category: "dignitary" | "academic" | "government" | "international" | "industry";
  year: string;
  photo?: string;
  description?: string;
}

const guestsData: Guest[] = [
  {
    id: "g1",
    name: "Dr. Hasmukh Adhia",
    title: "Former Finance Secretary, Government of India",
    organization: "Government of India",
    country: "India",
    category: "government",
    year: "2024",
    photo: "/src/assets/alumni-hasmukh-adhia.jpg",
    description: "Former IAS officer and Finance Secretary who played a key role in GST implementation. Visited S-VYASA to share insights on governance and personal development.",
  },
  {
    id: "g2",
    name: "Prof. T. G. Sitharam",
    title: "Chairman, AICTE",
    organization: "All India Council for Technical Education",
    country: "India",
    category: "government",
    year: "2024",
    description: "Chairperson of AICTE visited S-VYASA to acknowledge the university's contributions to technical and professional education.",
  },
  {
    id: "g3",
    name: "Dr. Marty Seligman",
    title: "Father of Positive Psychology",
    organization: "University of Pennsylvania",
    country: "USA",
    category: "academic",
    year: "2023",
    description: "Renowned psychologist and founder of Positive Psychology. Engaged with S-VYASA researchers on the intersections of wellbeing science and yoga.",
  },
  {
    id: "g4",
    name: "H.E. Archbishop of Canterbury",
    title: "Archbishop",
    organization: "Church of England",
    country: "UK",
    category: "dignitary",
    year: "2023",
    description: "Visited the S-VYASA campus for an interfaith dialogue on spirituality, peace, and universal values.",
  },
  {
    id: "g5",
    name: "Dr. Tedros Adhanom Ghebreyesus",
    title: "Director-General",
    organization: "World Health Organization (WHO)",
    country: "Switzerland",
    category: "international",
    year: "2023",
    description: "WHO's Director-General acknowledged S-VYASA's global contributions to integrative health and yoga therapy.",
  },
  {
    id: "g6",
    name: "Shri. Dharmendra Pradhan",
    title: "Union Minister of Education",
    organization: "Ministry of Education, Government of India",
    country: "India",
    category: "government",
    year: "2022",
    description: "Hon'ble Union Minister of Education visited S-VYASA and appreciated the university's NEP 2020 aligned initiatives.",
  },
  {
    id: "g7",
    name: "Prof. Antonio Damasio",
    title: "Neuroscientist & Author",
    organization: "University of Southern California",
    country: "USA",
    category: "academic",
    year: "2022",
    description: "Globally acclaimed neuroscientist who explored consciousness and emotion, engaging in academic discourse with S-VYASA faculty.",
  },
  {
    id: "g8",
    name: "Dr. Dean Ornish",
    title: "Founder & President",
    organization: "Preventive Medicine Research Institute",
    country: "USA",
    category: "academic",
    year: "2022",
    description: "Pioneering physician who demonstrated lifestyle medicine efficacy. Collaborated with S-VYASA on yoga-based cardiac rehabilitation research.",
  },
  {
    id: "g9",
    name: "H.E. Ambassador of Japan",
    title: "Ambassador to India",
    organization: "Embassy of Japan",
    country: "Japan",
    category: "international",
    year: "2023",
    description: "Visited S-VYASA to explore academic and cultural cooperation between India and Japan through yoga and wellness.",
  },
  {
    id: "g10",
    name: "Shri. B. S. Yediyurappa",
    title: "Former Chief Minister of Karnataka",
    organization: "Government of Karnataka",
    country: "India",
    category: "government",
    year: "2021",
    description: "Visited S-VYASA's Prashanti Kutiram campus and participated in yoga sessions, expressing support for the institution's mission.",
  },
  {
    id: "g11",
    name: "Prof. Loren Cordain",
    title: "Founder of Paleo Diet Movement",
    organization: "Colorado State University",
    country: "USA",
    category: "academic",
    year: "2021",
    description: "Distinguished nutrition researcher who visited to explore synergies between dietary science and yogic nutrition.",
  },
  {
    id: "g12",
    name: "Dr. Sanjeev Balyan",
    title: "Union Minister of State",
    organization: "Ministry of Fisheries, Animal Husbandry & Dairying",
    country: "India",
    category: "government",
    year: "2021",
    description: "Participated in a national wellness summit hosted by S-VYASA and lauded the university's rural outreach programs.",
  },
];

const categories = [
  { key: "all", label: "All Guests", icon: Users },
  { key: "government", label: "Government", icon: Building2 },
  { key: "academic", label: "Academic", icon: Award },
  { key: "international", label: "International", icon: Globe },
  { key: "dignitary", label: "Dignitaries", icon: Star },
  { key: "industry", label: "Industry", icon: Building2 },
];

const categoryColors: Record<string, string> = {
  government: "bg-blue-100 text-blue-800",
  academic: "bg-emerald-100 text-emerald-800",
  international: "bg-purple-100 text-purple-800",
  dignitary: "bg-amber-100 text-amber-800",
  industry: "bg-rose-100 text-rose-800",
};

export default function Guests() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeYear, setActiveYear] = useState("all");

  const years = ["all", ...Array.from(new Set(guestsData.map((g) => g.year))).sort((a, b) => b.localeCompare(a))];

  const filtered = guestsData.filter((g) => {
    const catMatch = activeCategory === "all" || g.category === activeCategory;
    const yearMatch = activeYear === "all" || g.year === activeYear;
    return catMatch && yearMatch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.7)] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/70 uppercase tracking-widest text-sm mb-4 font-medium">Distinguished Visitors</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Guests at S-VYASA
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Luminaries from across the world — heads of state, global academics, and international leaders — who have graced S-VYASA with their presence and wisdom.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: "500+", label: "Distinguished Guests" },
              { value: "60+", label: "Countries Represented" },
              { value: "25+", label: "Years of Welcome" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-muted-foreground text-sm font-medium mr-2">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === cat.key
                      ? "bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]"
                      : "bg-background text-muted-foreground border-border hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Year:</span>
              <select
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
                className="text-sm border border-border rounded-lg px-3 py-1.5 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.3)]"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y === "all" ? "All Years" : y}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm mb-8">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> guests
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((guest, i) => (
              <motion.div
                key={guest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {/* Card top accent */}
                <div className="h-1.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.4)]" />

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[hsl(var(--primary)/0.08)] flex items-center justify-center">
                      {guest.photo ? (
                        <img
                          src={guest.photo}
                          alt={guest.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl font-bold text-[hsl(var(--primary))]">${guest.name.charAt(0)}</span>`;
                          }}
                        />
                      ) : (
                        <span className="text-2xl font-bold text-[hsl(var(--primary))]">
                          {guest.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-bold text-foreground text-base leading-tight">{guest.name}</h3>
                        <span className="text-xs text-muted-foreground font-medium flex-shrink-0 bg-muted px-2 py-0.5 rounded-full">
                          {guest.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug mb-2">{guest.title}</p>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge className={`text-xs font-medium px-2 py-0.5 rounded-full border-0 ${categoryColors[guest.category]}`}>
                          {guest.category.charAt(0).toUpperCase() + guest.category.slice(1)}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Globe className="w-3 h-3" /> {guest.country}
                        </span>
                      </div>
                    </div>
                  </div>

                  {guest.description && (
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {guest.description}
                    </p>
                  )}

                  <p className="mt-3 text-xs text-muted-foreground font-medium truncate">
                    🏛 {guest.organization}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No guests found for selected filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Invite a Distinguished Guest</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            S-VYASA welcomes scholars, leaders, and dignitaries. To invite a distinguished guest for a lecture, collaboration, or campus visit, please reach out to us.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
}
