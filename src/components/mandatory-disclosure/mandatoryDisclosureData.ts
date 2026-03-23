export interface MDDocument {
  id: string;
  title: string;
  /** Storage path inside the 'publications' bucket, e.g. "mandatory-disclosure/UGC_Notification.pdf" */
  storagePath: string;
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
        storagePath: "mandatory-disclosure/UGC_Notification.pdf",
      },
      {
        id: "aicte-letter",
        title: "AICTE Letter of Approval",
        storagePath: "mandatory-disclosure/AICTE_Letter_of_Approval-2.pdf",
      },
      {
        id: "aicte-extension-2025-26",
        title: "AICTE Extension of Approval 2025–2026",
        storagePath: "mandatory-disclosure/AICTE_Extension_of_Approval-2025-2026.pdf",
        isLatest: true,
      },
      {
        id: "aicte-extension-2024-25",
        title: "AICTE Extension of Approval 2024–2025",
        storagePath: "mandatory-disclosure/AICTE_Extension_of_Approval-2024-2025.pdf",
      },
      {
        id: "aishe-2024-25",
        title: "AISHE Certificate 2024–25",
        storagePath: "mandatory-disclosure/AISHE_Certificate_2024-25.pdf",
        isLatest: true,
      },
      {
        id: "aishe-2023-24",
        title: "AISHE Certificate 2023–24",
        storagePath: "mandatory-disclosure/AISHE_Certificate_2023-24-2.pdf",
      },
      {
        id: "aishe-2022-23",
        title: "AISHE Certificate 2022–23",
        storagePath: "mandatory-disclosure/AISHE_Certificate_2022-23-2.pdf",
      },
      {
        id: "aishe-2021-22",
        title: "AISHE Certificate 2021–22",
        storagePath: "mandatory-disclosure/AISHE_Certificate_2021-22-2.pdf",
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
        storagePath: "mandatory-disclosure/NAAC_Status-2.pdf",
        isFeatured: true,
        badge: "A+ Accredited",
      },
      {
        id: "12b-status",
        title: "12 B Status",
        storagePath: "mandatory-disclosure/12_B.pdf",
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
        storagePath: "mandatory-disclosure/UGC_Mandated_Committees-2.pdf",
      },
      {
        id: "administration",
        title: "Administration",
        storagePath: "mandatory-disclosure/Administration-3.pdf",
      },
      {
        id: "odl-approval",
        title: "ODL Approval",
        storagePath: "mandatory-disclosure/ODL_Approval-2.pdf",
      },
      {
        id: "icc",
        title: "ICC (Internal Complaints Committee)",
        storagePath: "mandatory-disclosure/ICC-2.pdf",
      },
      {
        id: "sc-st-cell",
        title: "Constitution of SC/ST Cell",
        storagePath: "mandatory-disclosure/Constitution_of_SC_ST_Cell.pdf",
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
        storagePath: "mandatory-disclosure/ABC_and_NAD.pdf",
      },
      {
        id: "hostel",
        title: "Hostel",
        storagePath: "",
      },
      {
        id: "scholarships",
        title: "Scholarships",
        storagePath: "mandatory-disclosure/Scholarships-2.pdf",
      },
      {
        id: "anti-ragging",
        title: "Anti-Ragging",
        storagePath: "mandatory-disclosure/Anti-_Ragging-2.pdf",
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
