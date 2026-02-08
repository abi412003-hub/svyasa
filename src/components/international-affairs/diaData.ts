export const subNavTabs = [
  { id: "internationalisation", label: "Internationalisation", href: "/directorate-of-international-affairs", active: true },
  { id: "team", label: "Our Team", href: "/internationalisation-team", active: false },
  { id: "partnerships", label: "Partnerships & MOUs", href: "/partnership-mous", active: false },
  { id: "admissions", label: "International Admissions", href: "#", active: false, comingSoon: true },
];

export const keyOfferings = [
  { icon: "exchange", label: "Student & Faculty Exchanges" },
  { icon: "degree", label: "Dual Degree Programs" },
  { icon: "globe", label: "Global Internships" },
  { icon: "research", label: "Collaborative Research" },
];

export const globalStats = [
  { value: 900, suffix: "+", label: "Global Partner Institutions", icon: "handshake" },
  { value: 50, suffix: "+", label: "Countries Connected", icon: "globe" },
  { value: 100, suffix: "+", label: "International Conferences Organized", icon: "podium" },
  { value: 500, suffix: "+", label: "Exchange Students & Faculty", icon: "users" },
];

export const exploreLinks = [
  {
    id: "team",
    title: "Meet Our Team",
    subtitle: "The professionals driving S-VYASA's global partnerships",
    href: "/internationalisation-team",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    comingSoon: false,
  },
  {
    id: "partnerships",
    title: "Partnerships & MOUs",
    subtitle: "Our network of global academic and research collaborations",
    href: "/partnership-mous",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
    comingSoon: false,
  },
  {
    id: "admissions",
    title: "International Admissions",
    subtitle: "Apply as an international student",
    href: "#",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
    comingSoon: true,
  },
];

export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/svyasauniversity", icon: "facebook", color: "#1877F2" },
  { name: "Twitter", url: "https://twitter.com/svyasa", icon: "twitter", color: "#1DA1F2" },
  { name: "LinkedIn", url: "https://www.linkedin.com/school/svyasa/", icon: "linkedin", color: "#0A66C2" },
  { name: "Instagram", url: "https://www.instagram.com/svyasauniversity/", icon: "instagram", color: "#E4405F" },
  { name: "YouTube", url: "https://www.youtube.com/c/SVYASA", icon: "youtube", color: "#FF0000" },
];

export const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "OTHER", name: "Other", flag: "🌍" },
];

export const programs = [
  "Yoga Studies",
  "Allied Health Sciences",
  "Management Studies",
  "Computer Science",
  "Psychology",
  "Research Programs (Ph.D.)",
  "Other",
];
