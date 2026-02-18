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
        pdfUrl: "admin/photo/mandatory_disclosure/1.pdf",
      },
      {
        id: "aicte-approval",
        title: "AICTE Letter of Approval",
        pdfUrl: "admin/photo/mandatory_disclosure/2.pdf",
      },
      {
        id: "aishe-2023-24",
        title: "AISHE Certificate 2023–24",
        pdfUrl: "admin/photo/mandatory_disclosure/3.pdf",
        isLatest: true,
      },
      {
        id: "aishe-2022-23",
        title: "AISHE Certificate 2022–23",
        pdfUrl: "admin/photo/mandatory_disclosure/4.pdf",
      },
      {
        id: "aishe-2021-22",
        title: "AISHE Certificate 2021–22",
        pdfUrl: "admin/photo/mandatory_disclosure/5.pdf",
      },
      {
        id: "aicte-extension",
        title: "AICTE Extension of Approval",
        pdfUrl: "admin/photo/mandatory_disclosure/6.pdf",
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
        pdfUrl: "admin/photo/mandatory_disclosure/7.pdf",
        isFeatured: true,
        badge: "A+ Accredited",
      },
      {
        id: "12b-status",
        title: "12 B Status",
        pdfUrl: "/pdfs/12-B-Status.pdf",
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
        pdfUrl: "admin/photo/mandatory_disclosure/8.pdf",
      },
      {
        id: "administration",
        title: "Administration",
        pdfUrl: "admin/photo/mandatory_disclosure/9.pdf",
      },
      {
        id: "odl-approval",
        title: "ODL Approval",
        pdfUrl: "/pdfs/ODL-Approval.pdf",
      },
      {
        id: "icc",
        title: "ICC (Internal Complaints Committee)",
        pdfUrl: "/pdfs/ICC.pdf",
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
        pdfUrl: "admin/photo/mandatory_disclosure/13.pdf",
      },
      {
        id: "scholarships",
        title: "Scholarships",
        pdfUrl: "/pdfs/Scholarships.pdf",
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
