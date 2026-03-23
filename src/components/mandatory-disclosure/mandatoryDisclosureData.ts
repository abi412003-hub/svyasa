export interface MDDocument {
  id: string;
  title: string;
  pdfUrl: string;
  isFeatured?: boolean;
  isLatest?: boolean;
  badge?: string;
}

export interface MDCategory {
  id: string;
  title: string;
  icon: "certificate" | "star" | "building" | "people";
  documents: MDDocument[];
}

export const disclosureCategories: MDCategory[] = [
  {
    id: "regulatory",
    title: "Regulatory Approvals & Recognition",
    icon: "certificate",
    documents: [
      {
        id: "ugc-2002",
        title: "UGC Notification – 2002",
        pdfUrl: "/pdfs/UGC_Notification.pdf",
      },
      {
        id: "aicte-extension",
        title: "AICTE Extension of Approval 2025–2026",
        pdfUrl: "/pdfs/AICTE_Extension_of_Approval-2025-2026.pdf",
        isLatest: true,
      },
      {
        id: "aishe-2024-25",
        title: "AISHE Certificate 2024–25",
        pdfUrl: "/pdfs/AISHE_Certificate_2024-25.pdf",
        isLatest: true,
      },
    ],
  },
  {
    id: "accreditation",
    title: "Accreditation & Status",
    icon: "star",
    documents: [
      {
        id: "naac-status",
        title: "NAAC Status",
        pdfUrl: "/pdfs/NAAC_Status-2.pdf",
        isFeatured: true,
        badge: "A+ Accredited",
      },
      {
        id: "12b-status",
        title: "12 B Status",
        pdfUrl: "/pdfs/12_B.pdf",
      },
    ],
  },
  {
    id: "governance",
    title: "Governance & Administration",
    icon: "building",
    documents: [
      {
        id: "ugc-committees",
        title: "UGC Mandated Committees",
        pdfUrl: "/pdfs/UGC_Mandated_Committees-2.pdf",
      },
      {
        id: "administration",
        title: "Administration",
        pdfUrl: "/pdfs/Administration-3.pdf",
      },
      {
        id: "odl-approval",
        title: "ODL Approval",
        pdfUrl: "/pdfs/ODL_Approval-2.pdf",
      },
      {
        id: "icc",
        title: "ICC (Internal Complaints Committee)",
        pdfUrl: "/pdfs/ICC-2.pdf",
      },
    ],
  },
  {
    id: "welfare",
    title: "Student Welfare & Policies",
    icon: "people",
    documents: [
      {
        id: "abc-nad",
        title: "ABC & NAD",
        pdfUrl: "/pdfs/ABC-NAD.pdf",
      },
      {
        id: "hostel",
        title: "Hostel",
        pdfUrl: "",
      },
      {
        id: "scholarships",
        title: "Scholarships",
        pdfUrl: "/pdfs/Scholarships-2.pdf",
      },
      {
        id: "anti-ragging",
        title: "Anti-Ragging",
        pdfUrl: "/pdfs/Anti-Ragging.pdf",
      },
    ],
  },
];

export const trustBadges = [
  { id: "ugc", label: "UGC Recognized" },
  { id: "aicte", label: "AICTE Approved" },
  { id: "naac", label: "NAAC A+ Accredited" },
  { id: "aishe", label: "AISHE Registered" },
];
