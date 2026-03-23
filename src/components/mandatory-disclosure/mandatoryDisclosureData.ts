export interface MDDocument {
  id: string;
  title: string;
  /** Local path to the PDF in the public folder, e.g. "/documents/mandatory-disclosure/UGC_Notification.pdf" */
  pdfPath: string;
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

const BASE = "/documents/mandatory-disclosure";

export const disclosureCategories: MDCategory[] = [
  {
    id: "regulatory",
    title: "Regulatory Approvals & Recognition",
    icon: "certificate",
    documents: [
      { id: "ugc-2002", title: "UGC Notification – 2002", pdfPath: `${BASE}/UGC_Notification.pdf` },
      { id: "aicte-letter", title: "AICTE Letter of Approval", pdfPath: `${BASE}/AICTE_Letter_of_Approval-2.pdf` },
      { id: "aicte-extension-2025-26", title: "AICTE Extension of Approval 2025–2026", pdfPath: `${BASE}/AICTE_Extension_of_Approval-2025-2026.pdf`, isLatest: true },
      { id: "aicte-extension-2024-25", title: "AICTE Extension of Approval 2024–2025", pdfPath: `${BASE}/AICTE_Extension_of_Approval-2024-2025.pdf` },
      { id: "aishe-2024-25", title: "AISHE Certificate 2024–25", pdfPath: `${BASE}/AISHE_Certificate_2024-25.pdf`, isLatest: true },
      { id: "aishe-2023-24", title: "AISHE Certificate 2023–24", pdfPath: `${BASE}/AISHE_Certificate_2023-24-2.pdf` },
      { id: "aishe-2022-23", title: "AISHE Certificate 2022–23", pdfPath: `${BASE}/AISHE_Certificate_2022-23-2.pdf` },
      { id: "aishe-2021-22", title: "AISHE Certificate 2021–22", pdfPath: `${BASE}/AISHE_Certificate_2021-22-2.pdf` },
    ],
  },
  {
    id: "accreditation",
    title: "Accreditation & Status",
    icon: "star",
    documents: [
      { id: "naac-status", title: "NAAC Status", pdfPath: `${BASE}/NAAC_Status-2.pdf`, isFeatured: true, badge: "A+ Accredited" },
      { id: "12b-status", title: "12 B Status", pdfPath: `${BASE}/12_B.pdf` },
    ],
  },
  {
    id: "governance",
    title: "Governance & Administration",
    icon: "building",
    documents: [
      { id: "ugc-committees", title: "UGC Mandated Committees", pdfPath: `${BASE}/UGC_Mandated_Committees-2.pdf` },
      { id: "administration", title: "Administration", pdfPath: `${BASE}/Administration-3.pdf` },
      { id: "odl-approval", title: "ODL Approval", pdfPath: `${BASE}/ODL_Approval-2.pdf` },
      { id: "icc", title: "ICC (Internal Complaints Committee)", pdfPath: `${BASE}/ICC-2.pdf` },
      { id: "sc-st-cell", title: "Constitution of SC/ST Cell", pdfPath: `${BASE}/Constitution_of_SC_ST_Cell.pdf` },
    ],
  },
  {
    id: "welfare",
    title: "Student Welfare & Policies",
    icon: "people",
    documents: [
      { id: "abc-nad", title: "ABC & NAD", pdfPath: `${BASE}/ABC_and_NAD.pdf` },
      { id: "hostel", title: "Hostel", pdfPath: "" },
      { id: "scholarships", title: "Scholarships", pdfPath: `${BASE}/Scholarships-2.pdf` },
      { id: "anti-ragging", title: "Anti-Ragging", pdfPath: `${BASE}/Anti-_Ragging-2.pdf` },
    ],
  },
];

export const trustBadges = [
  { id: "ugc", label: "UGC Recognized" },
  { id: "aicte", label: "AICTE Approved" },
  { id: "naac", label: "NAAC A+ Accredited" },
  { id: "aishe", label: "AISHE Registered" },
];
