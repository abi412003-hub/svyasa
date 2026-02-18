export interface JobListing {
  id: string;
  title: string;
  positions?: number;
  category: "leadership" | "teaching" | "research" | "admin" | "support";
  department?: string;
  url: string;
  featured?: boolean;
}

export interface CampusInfo {
  name: string;
  image: string;
  heading: string;
  pdfUrl: string;
  pdfLabel: string;
}

export const prashantiCampusInfo: CampusInfo = {
  name: "Prashanti Campus",
  image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  heading: "Be a Changemaker With S-VYASA Prashanti Campus",
  pdfUrl: "/img/svyasa PK.pdf",
  pdfLabel: "Know Us Before You Apply",
};

export const globalCityCampusInfo: CampusInfo = {
  name: "Global City Campus",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  heading: "Be a Changemaker With S-VYASA Global City Campus",
  pdfUrl: "/img/svyasa CC.pdf",
  pdfLabel: "Know Us Before You Apply",
};

export const prashantiJobs: JobListing[] = [
  {
    id: "pvc-01",
    title: "Pro Vice-Chancellor",
    positions: 1,
    category: "leadership",
    url: "career-veiw.php?url=16",
    featured: true,
  },
];

export const globalCityJobs: JobListing[] = [];

export const categoryLabels: Record<JobListing["category"], string> = {
  leadership: "Leadership",
  teaching: "Teaching Faculty",
  research: "Research",
  admin: "Administration",
  support: "Support Staff",
};

export const whyWorkFeatures = [
  {
    id: "holistic",
    icon: "lotus",
    title: "Holistic Work Culture",
    description: "Blend of ancient wisdom and modern innovation in a spiritually enriching setting",
  },
  {
    id: "growth",
    icon: "growth",
    title: "Professional Growth",
    description: "Continuous learning opportunities, research collaborations, and faculty development programs",
  },
  {
    id: "impact",
    icon: "globe",
    title: "Make a Difference",
    description: "Contribute to advancing yoga science, wellness research, and holistic education worldwide",
  },
  {
    id: "community",
    icon: "community",
    title: "Values-Driven Community",
    description: "Join a team united by service to society, character development, and academic excellence",
  },
];

export const applicationSteps = [
  {
    number: 1,
    icon: "search",
    title: "Explore",
    description: "Browse open positions and download the campus info PDF to learn about S-VYASA",
  },
  {
    number: 2,
    icon: "document",
    title: "Prepare",
    description: "Prepare your CV, cover letter, and relevant academic/professional credentials",
  },
  {
    number: 3,
    icon: "send",
    title: "Apply",
    description: "Submit your application via the listed contact or email info@svyasa.edu.in",
  },
];
