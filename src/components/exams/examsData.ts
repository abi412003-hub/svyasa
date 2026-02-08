export interface ExamDocument {
  id: string;
  title: string;
  pdfUrl: string | string[];
  externalUrl?: string;
  isNew?: boolean;
  date?: string;
}

export interface ExamGroup {
  id: string;
  title: string;
  items: ExamDocument[];
}

export interface ResultGroup {
  id: string;
  category: string;
  items: { title: string; url: string; isNew?: boolean }[];
}

export const notifications: ExamDocument[] = [
  {
    id: "n1",
    title: "Semester End Examination (SEE) – Feb 2026, Batch 2025–26, Semester I (Regular) of MBA, MCA, M.Sc. (CS), BOT, M.Sc. (Psy), B.Sc (Psy)",
    pdfUrl: "img/pdf/exam/SEE-Feb-2026-Regular-1st-Sem-MBA, MCA, M.Sc. (CS), BOT, M.Sc. (Psy.), B.Sc (Psy.).pdf",
    isNew: true,
  },
  {
    id: "n2",
    title: "Semester End Examination (SEE) – Feb 2026 for Ph.D. January 2025 Batch (Semester II) and Ph.D. July 2025 Batch (Semester I)",
    pdfUrl: "img/pdf/exam/Revised-with-Fee-SEE-Ph.D.-Feb-2026.pdf",
    isNew: true,
  },
  {
    id: "n3",
    title: "PhD Open Defense Notification - Vaijayanti Pratap Navare",
    pdfUrl: "img/pdf/exam/18-Notification-for-open-defense-Vaijyanti-Pratap-Navare.pdf",
    isNew: true,
  },
  {
    id: "n4",
    title: "PhD Open Defense Notification - Jayshree Pattanayak",
    pdfUrl: "img/pdf/exam/17-Notification-for-open-defense-Jayashree-Pattanayak.pdf",
  },
  {
    id: "n5",
    title: "PhD Open Defense Notification - Katla Naresh",
    pdfUrl: "img/pdf/exam/16-Notification-for-open-defense-Katla-Naresh.pdf",
  },
  {
    id: "n6",
    title: "PhD Open Defense Notification - Sonu Maurya",
    pdfUrl: "img/pdf/exam/15-Notification-for-open-defense-Sonu-Maurya.pdf",
  },
  {
    id: "n7",
    title: "PhD Open Defense Notification - Dr. Ashween Bilagi",
    pdfUrl: "img/pdf/exam/ashween.pdf",
  },
  {
    id: "n8",
    title: "PhD Open Defense Notification - Jyoti Maggu",
    pdfUrl: "img/pdf/exam/jyoti.pdf",
  },
  {
    id: "n9",
    title: "PhD Open Defense Notification - Sabastian Baabu",
    pdfUrl: "img/pdf/exam/sabastian baabu.pdf",
  },
  {
    id: "n10",
    title: "PhD Open Defence Notification - Arun Thulasi",
    pdfUrl: "img/pdf/exam/Notification-for-Open-Defence-Arun-Thulasi.pdf",
  },
  {
    id: "n11",
    title: "PhD Open Defense Notification for Savithri Nilkantham",
    pdfUrl: "img/pdf/exam/Notification-for-open-defense-Savithri-Nilkantham.pdf",
  },
  {
    id: "n12",
    title: "PhD Open Defense Notification for Hassan Alibalaei",
    pdfUrl: "img/pdf/exam/Notification for open defense - Hassan Alibalaei.pdf",
  },
  {
    id: "n13",
    title: "SYS, MD Supplementary Master Plan",
    pdfUrl: "img/pdf/exam/1. SYS,MD Supplementary Master Plan.pdf",
  },
  {
    id: "n14",
    title: "BPT Master Plan",
    pdfUrl: "img/pdf/exam/2. BPT Master Plan.pdf",
  },
  {
    id: "n15",
    title: "SYS, MD Senior Master Plan",
    pdfUrl: "img/pdf/exam/3. SYS,MD Senior Master Plan.pdf",
  },
  {
    id: "n16",
    title: "SYS, MD Junior Master Plan",
    pdfUrl: "img/pdf/exam/4. SYS,MD Junior Master Plan.pdf",
  },
  {
    id: "n17",
    title: "BNYS Master Plan",
    pdfUrl: "img/pdf/exam/5. BNYS Master Plan.pdf",
  },
  {
    id: "n18",
    title: "Notification for Examination Fees Structure",
    pdfUrl: "img/pdf/exam/1. Examinations Fee Structure.pdf",
  },
  {
    id: "n19",
    title: "Notification for Open Defense - Budhi Bal Rana",
    pdfUrl: "img/pdf/exam/8.-Notification-for-open-defense-Bal-Budhi-Rana.pdf",
  },
  {
    id: "n20",
    title: "Notification for Open Defense - Yantra Atmika",
    pdfUrl: "img/pdf/exam/7. Notification Ph.D. Open Defense -YANTRA ATMIKA RAMSAHAYE MARAZ.pdf",
  },
  {
    id: "n21",
    title: "Ph.D. Entrance Exam Results (2025–2026)",
    pdfUrl: "img/pdf/exam/Ph.D-Final-Result.pdf",
  },
  {
    id: "n22",
    title: "June-July 2025 Summer Term SEE: Time Table for MCA, M.Sc. (Psy.) & BoT; SAS",
    pdfUrl: "img/pdf/exam/TT-MCA,-M.Sc.(Psy.)-BOT-Summer-Term-June-2025.pdf",
  },
  {
    id: "n23",
    title: "Revaluation - July 2025 SEE: PG, B.Sc (Psychology) & Ph.D; SAS",
    pdfUrl: "img/pdf/exam/Revaluation- PG-&-Others-June_2025.pdf",
  },
  {
    id: "n24",
    title: "Notification for Open Defense - Rajesh Rao K",
    pdfUrl: "img/pdf/exam/6. Notification -Rajesh Rao K.pdf",
  },
  {
    id: "n25",
    title: "Notification for Open Defense - Sushanta Kumar Mohanty",
    pdfUrl: "img/pdf/exam/Notification for open defense - Sushanta Kumar Mohanty (1).pdf",
  },
  {
    id: "n26",
    title: "June-July 2025 SEE: Summer Term Notification & Registration for UG & PG; SAS",
    pdfUrl: ["img/pdf/exam/Summer-Term-Notification-June2025.pdf", "img/pdf/exam/Summer Term-June 2025-SEE-APPLICATION FORM.pdf"],
  },
  {
    id: "n27",
    title: "July 2025: Summer Term Notification & Registration for MBA, MCA, M.Sc, BOT, M.Sc (CP), B.Sc (CP); SAS",
    pdfUrl: ["img/pdf/exam/Notification-PG-2025.pdf", "img/pdf/exam/REGISTRATION-FORM-FOR-SUMMER-TERM-JUNE-2025.pdf"],
  },
  {
    id: "n28",
    title: "PhD Open Defense & Viva Voce Examination",
    pdfUrl: "img/pdf/exam/4.Manisha-Mona.pdf",
  },
  {
    id: "n29",
    title: "May-June 2025: Time Table for Ph.D Course Work; SAS",
    pdfUrl: "img/pdf/exam/Ph.D.-Course Work-Notification.pdf",
  },
  {
    id: "n30",
    title: "July 2025 Examination Time Table",
    pdfUrl: "img/pdf/exam/Examinatins Schedule - July 2025 (Regular Exam - SYS, MD, & Supp Exam - BNYS, BPT).pdf",
  },
  {
    id: "n31",
    title: "Circular for Examination Application May-June 2025",
    pdfUrl: "img/pdf/Circular-MAY&JUNE2025.pdf",
  },
  {
    id: "n32",
    title: "June 2025 Summer Term Notification; SAS",
    pdfUrl: ["img/pdf/REGISTRATION FORM FOR SUMMER TERM JUNE 2025.pdf", "img/pdf/UG-Summer Term Notification May 2025.pdf"],
  },
];

export const timetableGroups: ExamGroup[] = [
  {
    id: "tt1",
    title: "SEE January 2026, Batch 2024–25, Semester III (Regular) & Backlog Sem I & II; SAS",
    items: [
      { id: "tt1-1", title: "BCom", pdfUrl: "img/pdf/exam/BCom.pdf" },
      { id: "tt1-2", title: "BOT", pdfUrl: "img/pdf/exam/BOT.pdf" },
      { id: "tt1-3", title: "B.Tech", pdfUrl: "img/pdf/exam/B.Tech.pdf" },
      { id: "tt1-4", title: "BCA", pdfUrl: "img/pdf/exam/BCA.pdf" },
      { id: "tt1-5", title: "BBA", pdfUrl: "img/pdf/exam/BBA.pdf" },
      { id: "tt1-6", title: "BSc Psychology (Clinical)", pdfUrl: "img/pdf/exam/BSc_Psychology(Clinical).pdf" },
      { id: "tt1-7", title: "MBA (Pro & Dual)", pdfUrl: "img/pdf/exam/MBA(Pro & Dual).pdf" },
      { id: "tt1-8", title: "MCA & MSc (CS)", pdfUrl: "img/pdf/exam/MCA MSc(CS).pdf" },
      { id: "tt1-9", title: "MSc Psychology (Clinical)", pdfUrl: "img/pdf/exam/MSc Psychology (Clinical).pdf" },
    ],
  },
  {
    id: "tt2",
    title: "December 2025 Examinations",
    items: [
      { id: "tt2-1", title: "Time Table", pdfUrl: "img/pdf/exam/Semester-End-Examination-Time-Table-Dec-2025-1.pdf" },
    ],
  },
  {
    id: "tt3",
    title: "BPT Examination Schedule",
    items: [
      { id: "tt3-1", title: "1st Year BPT", pdfUrl: "img/pdf/exam/Examination Schedule 1st Year BPT.pdf" },
      { id: "tt3-2", title: "2nd Year BPT", pdfUrl: "img/pdf/exam/Examination Schedule 2nd Year BPT.pdf" },
    ],
  },
  {
    id: "tt4",
    title: "June-July 2025 Summer Term SEE: B.Tech, BBA & BCA; SAS",
    items: [
      { id: "tt4-1", title: "Time Table", pdfUrl: "img/pdf/exam/TT-Summer-Term-June 2025.pdf" },
    ],
  },
  {
    id: "tt5",
    title: "Supplementary Examinations Schedule July 2025",
    items: [
      { id: "tt5-1", title: "School of Yogic Sciences", pdfUrl: "img/pdf/exam/Supplementary-Examinations-Schedule-(School-of-Yogic-Sciences)-July,-2025.pdf" },
    ],
  },
  {
    id: "tt6",
    title: "May-June 2025: Ph.D Course Work TT; SAS",
    items: [
      { id: "tt6-1", title: "Ph.D. Course Work Time Table", pdfUrl: "img/pdf/exam/Ph.D.-Course Work-TT.pdf" },
    ],
  },
  {
    id: "tt7",
    title: "July 2025 Examination Time Table",
    items: [
      { id: "tt7-1", title: "Regular Exam SYS, MD & Supp Exam BNYS, BPT", pdfUrl: "img/pdf/exam/Examinatins Schedule - July 2025 (Regular Exam - SYS, MD, & Supp Exam - BNYS, BPT).pdf" },
    ],
  },
  {
    id: "tt8",
    title: "May-June 2025: PG, B.Sc. & M.Sc. Clinical Psychology and BoT; SAS",
    items: [
      { id: "tt8-1", title: "BOT", pdfUrl: "img/pdf/SEE-May&June-2025-BOT.pdf" },
      { id: "tt8-2", title: "BSC(CP)", pdfUrl: "img/pdf/SEE-May&June-2025-BSC(CP).pdf" },
      { id: "tt8-3", title: "MBA", pdfUrl: "img/pdf/SEE-May&June-2025-MBA.pdf" },
      { id: "tt8-4", title: "MCA & MSC", pdfUrl: "img/pdf/SEE-May&June-2025-MCA&MSC.pdf" },
      { id: "tt8-5", title: "MSC(CP)", pdfUrl: "img/pdf/SEE-May&June-2025-MSC(CP).pdf" },
    ],
  },
  {
    id: "tt9",
    title: "February 2025 Examinations",
    items: [
      { id: "tt9-1", title: "BNYS", pdfUrl: "", externalUrl: "https://drive.google.com" },
      { id: "tt9-2", title: "BPT", pdfUrl: "", externalUrl: "https://drive.google.com" },
      { id: "tt9-3", title: "School of Yoga", pdfUrl: "", externalUrl: "https://drive.google.com" },
    ],
  },
  {
    id: "tt10",
    title: "May-June 2025: UG SEE; SAS",
    items: [
      { id: "tt10-1", title: "B.Tech Time Table", pdfUrl: "img/pdf/exam/new/B.Tech Time table of UG - SEE - May 2025.pdf" },
      { id: "tt10-2", title: "BBA Time Table", pdfUrl: "img/pdf/exam/new/BBA Time table of UG - SEE - May 2025.pdf" },
      { id: "tt10-3", title: "BCA Time Table", pdfUrl: "img/pdf/exam/new/BCA  Time table of UG - SEE - May 2025.pdf" },
      { id: "tt10-4", title: "BCom Time Table", pdfUrl: "img/pdf/exam/new/Bcom Time table of UG - SEE - May 2025.pdf" },
    ],
  },
];

export const resultsGroups: ResultGroup[] = [
  {
    id: "r1",
    category: "School of Yoga Programs",
    items: [
      { title: "MSc YT - 1st Sem Results Feb 2025", url: "https://www.indiaresults.com", isNew: true },
      { title: "MSc YVT - 1st Sem Results Feb 2025", url: "https://www.indiaresults.com", isNew: true },
      { title: "MD - 1st Sem Results Feb 2025", url: "https://www.indiaresults.com" },
      { title: "MSc YT - 1st Sem (EKB) Results Feb 2025", url: "https://www.indiaresults.com" },
      { title: "MD - 3rd Sem Results Feb 2025", url: "https://www.indiaresults.com" },
    ],
  },
  {
    id: "r2",
    category: "BNYS",
    items: [
      { title: "1st Year Result Feb 2025", url: "https://www.indiaresults.com", isNew: true },
      { title: "2nd Year Result Feb 2025", url: "https://www.indiaresults.com" },
      { title: "3rd Year Result Feb 2025", url: "https://www.indiaresults.com" },
      { title: "3rd Year YB Result Feb 2025", url: "https://www.indiaresults.com" },
      { title: "BNYS 1st Year Supp Result Feb 2025", url: "https://www.indiaresults.com" },
      { title: "BNYS 2nd Year Supp Result Feb 2025", url: "https://www.indiaresults.com" },
      { title: "BNYS 3rd Year Supp Result Feb 2025", url: "https://www.indiaresults.com" },
      { title: "BNYS 4th Year Results Feb 2025", url: "https://www.indiaresults.com" },
    ],
  },
  {
    id: "r3",
    category: "BPT",
    items: [
      { title: "Bachelor of Physiotherapy Results Feb 2025", url: "https://www.indiaresults.com" },
    ],
  },
];
