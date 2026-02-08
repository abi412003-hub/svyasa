export interface IQACDocument {
  id: string;
  title: string;
  pdfUrl: string;
  isFeatured?: boolean;
  isLatest?: boolean;
}

export const naacDocuments: IQACDocument[] = [
  {
    id: "naac-cert",
    title: "NAAC Certificate",
    pdfUrl: "img/pdf/iqac/NAAC.pdf",
    isFeatured: true,
  },
  {
    id: "extended-profile",
    title: "Extended Profile",
    pdfUrl: "img/pdf/iqac/Extended-Profile.pdf",
  },
  {
    id: "syllabus-revised",
    title: "Syllabus Revised",
    pdfUrl: "img/pdf/iqac/1.1.2-Syllabus-Revised.pdf",
  },
  {
    id: "feedbacks",
    title: "Feedbacks",
    pdfUrl: "img/pdf/iqac/Feedbacks.pdf",
  },
  {
    id: "criteria-i",
    title: "Criteria I — Curriculum Data",
    pdfUrl: "img/pdf/iqac/Criteria-I-Curriculum-Data.pdf",
  },
  {
    id: "criteria-ii-iii-iv",
    title: "Criteria II, III, IV — Data",
    pdfUrl: "img/pdf/iqac/Criteria-II-III-IV-Data.pdf",
  },
  {
    id: "criteria-v-vi",
    title: "Criteria V, VI — Data",
    pdfUrl: "img/pdf/iqac/Criteria-V-VI-Data.pdf",
  },
  {
    id: "criteria-iii-forms",
    title: "Criteria III — Google Forms",
    pdfUrl: "img/pdf/iqac/GFORM LINKS for website.pdf",
  },
];

export const calendarDocuments: IQACDocument[] = [
  {
    id: "calendar-2024-25",
    title: "Academic Calendar 2024–2025",
    pdfUrl: "img/pdf/iqac/Academic-Calendar-2024-2025.pdf",
    isLatest: true,
  },
  {
    id: "calendar-2023-24",
    title: "Academic Calendar 2023–2024",
    pdfUrl: "img/pdf/iqac/Acadmic-Calendar-2023-2024-.pdf",
  },
  {
    id: "calendar-2022-23",
    title: "Academic Calendar 2022–2023",
    pdfUrl: "img/pdf/iqac/Academic-Calender-2022-23.pdf",
  },
];

export const whyFeatures = [
  {
    id: "infrastructure",
    title: "State of the Art Infrastructure",
    icon: "img/icons/home-why-icon-1.png",
  },
  {
    id: "collaborations",
    title: "Indian and Global Collaborations",
    icon: "img/icons/home-why-icon-2.png",
  },
  {
    id: "curriculum",
    title: "Innovative and Immersive Curriculum",
    icon: "img/icons/home-why-icon-3.png",
  },
  {
    id: "impact",
    title: "Positive Societal Impact",
    icon: "img/icons/home-why-icon-4.png",
  },
  {
    id: "research",
    title: "Excellence in Research",
    icon: "img/icons/home-why-icon-5.png",
  },
  {
    id: "programs",
    title: "Programs for Every Passion",
    icon: "img/icons/home-why-icon-6.png",
  },
];

export const qualityMetrics = [
  { id: "naac", label: "NAAC Accredited", icon: "shield" },
  { id: "improvement", label: "Continuous Quality Improvement", icon: "star" },
  { id: "governance", label: "Transparent Governance & Accountability", icon: "chart" },
];
