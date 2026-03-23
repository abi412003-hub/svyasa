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
        id: "aicte-letter",
        title: "AICTE Letter of Approval",
        pdfUrl: "/pdfs/AICTE_Letter_of_Approval-2.pdf",
      },
      {
        id: "aicte-extension-2025-26",
        title: "AICTE Extension of Approval 2025–2026",
        pdfUrl: "/pdfs/AICTE_Extension_of_Approval-2025-2026.pdf",
        isLatest: true,
      },
      {
        id: "aicte-extension-2024-25",
        title: "AICTE Extension of Approval 2024–2025",
        pdfUrl: "/pdfs/AICTE_Extension_of_Approval-2024-2025.pdf",
      },
      {
        id: "aishe-2024-25",
        title: "AISHE Certificate 2024–25",
        pdfUrl: "/pdfs/AISHE_Certificate_2024-25.pdf",
        isLatest: true,
      },
      {
        id: "aishe-2023-24",
        title: "AISHE Certificate 2023–24",
        pdfUrl: "/pdfs/AISHE_Certificate_2023-24-2.pdf",
      },
      {
        id: "aishe-2022-23",
        title: "AISHE Certificate 2022–23",
        pdfUrl: "/pdfs/AISHE_Certificate_2022-23-2.pdf",
      },
      {
        id: "aishe-2021-22",
        title: "AISHE Certificate 2021–22",
        pdfUrl: "/pdfs/AISHE_Certificate_2021-22-2.pdf",
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
      {
        id: "sc-st-cell",
        title: "Constitution of SC/ST Cell",
        pdfUrl: "/pdfs/Constitution_of_SC_ST_Cell.pdf",
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
        pdfUrl: "/pdfs/ABC_and_NAD.pdf",
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
        pdfUrl: "/pdfs/Anti-_Ragging-2.pdf",
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
