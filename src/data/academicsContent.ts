// ============================================
// ACADEMICS CONTENT (static layer)
// --------------------------------------------
// Categories and courses defined here take precedence over the Supabase
// `categories` / `courses` tables (see src/hooks/useSupabaseCourses.ts).
// Source: official S-VYASA Academics pages (svyasa.edu.in — Undergraduate,
// Postgraduate, Physiotherapy, Ph.D, D.Sc./D.Litt) and the S-VYASA
// Directorate of Distance Education programme & fee pages (2026-27).
// ============================================

import type { Course, Category } from "./courses";
import bptHero from "@/assets/course-images/bpt-hero.jpg";
import bptOverview from "@/assets/course-images/bpt-overview.jpg";
import alliedBanner from "@/assets/program-cards/allied-sciences.jpg";
import yogaBanner from "@/assets/program-cards/yoga-programmes.jpg";
import btechBanner from "@/assets/program-cards/btech.jpg";
import mbaBanner from "@/assets/program-cards/mba.jpg";

const PRASHANTI_APPLY = "https://applynow.svyasa.edu.in/application-form-ug-pg-2026";
const DISTANCE_APPLY = "https://svyasa.iweb.online/";
const PRASHANTI = "Prashanti Kutiram Campus, Bengaluru";
const DISTANCE_CAMPUS = "Distance Mode · Contact programmes at Prashanti Kutiram, Bengaluru";

// --------------------------------------------
// Category slug groups (live course slugs)
// --------------------------------------------
export const UNDERGRADUATE_SLUGS = [
  "btech-computer-science-engineering",
  "btech-artificial-intelligence-machine-learning",
  "btech-computer-science-engineering-data-science",
  "btech-computer-science-engineering-cyber-security",
  "btech-computer-science-information-technology",
  "btech-computer-science-software-engineering",
  "niat-corporate-btech-cse",
  "bba-logistics-and-aviation",
  "bba-business-management-digital-marketing-business-analytics",
  "bba-in-sports-management",
  "bba-entrepreneurship-innovation-business-analytics",
  "bba-logistics-supply-chain-management-port-management",
  "bca-cybersecurity-ethical-hacking-digital-forensics",
  "bca-artificial-intelligence-cloud-computing-devops",
  "bca-artificial-intelligence-machine-learning-robotics",
  "bca-data-science-artificial-intelligence-big-data-analytics",
  "bca-cloud-computing-cybersecurity-ethical-hacking",
  "bca-artificial-intelligence-robotics-internet-of-things",
  "bcom-international-accounting-finance-acca",
  "bachelor-of-occupational-therapy",
  "bsc-clinical-psychology",
  "bsc-computer-science",
  "bachelor-of-physiotherapy",
];

export const POSTGRADUATE_SLUGS = [
  "mca-cloud-computing-devops",
  "mca-cybersecurity-ethical-hacking-cyber-forensics",
  "mca-artificial-intelligence-machine-learning-data-science",
  "mca-data-science",
  "mba-marketing-finance-business-analytics",
  "mba-digital-business-management-data-analytics",
  "mba-logistics-supply-chain-management",
  "mba-pro-ai-data-analytics",
  "mba-dual-specialisation",
  "mba-hospital-administration-medical-tourism",
  "mba-digital-marketing-ai",
  "msc-cybersecurity-ethical-hacking-cyber-forensics",
  "msc-artificial-intelligence-machine-learning-data-science",
  "msc-data-science",
  "msc-clinical-psychology",
  "msc-neuropsychology",
  "msc-counselling-psychology",
  "msc-health-psychology",
  "master-of-physiotherapy",
];

export const DISTANCE_SLUGS = [
  "yic-distance",
  "bsc-yoga-distance",
  "msc-yoga-distance",
  "dyt-distance",
  "pgdyt-distance",
  "pgdytd-distance",
];

// --------------------------------------------
// Categories
// --------------------------------------------
export const staticCategories: Category[] = [
  {
    slug: "undergraduate",
    title: "Undergraduate Programmes",
    shortTitle: "Undergraduate",
    subtitle: "B.Tech, BBA, BCA, B.Com, B.Sc, BOT & BPT across both Bengaluru campuses",
    bannerImage: btechBanner,
    level: "undergraduate",
    campusType: "both",
    programSlugs: UNDERGRADUATE_SLUGS,
    whyStudy: [
      { stat: "NAAC A+", label: "Accredited Deemed-to-be University", icon: "award" },
      { stat: "20+", label: "Undergraduate Programmes", icon: "graduation-cap" },
      { stat: "2", label: "Bengaluru Campuses", icon: "map-pin" },
    ],
    domainTheme: "tech",
  },
  {
    slug: "postgraduate",
    title: "Postgraduate Programmes",
    shortTitle: "Postgraduate",
    subtitle: "MCA, MBA, M.Sc & Master of Physiotherapy for advanced careers",
    bannerImage: mbaBanner,
    level: "postgraduate",
    campusType: "both",
    programSlugs: POSTGRADUATE_SLUGS,
    whyStudy: [
      { stat: "NAAC A+", label: "Accredited Deemed-to-be University", icon: "award" },
      { stat: "15+", label: "Postgraduate Programmes", icon: "graduation-cap" },
      { stat: "1500+", label: "Research Papers Published", icon: "book-open" },
    ],
    domainTheme: "business",
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy Programmes",
    shortTitle: "Physiotherapy",
    subtitle: "BPT & MPT at the School of Physiotherapy, Prashanti Kutiram Campus",
    bannerImage: alliedBanner,
    level: "undergraduate",
    campusType: "prashanti",
    programSlugs: ["bachelor-of-physiotherapy", "master-of-physiotherapy"],
    whyStudy: [
      { stat: "1 Year", label: "Rotatory Clinical Internship (BPT)", icon: "stethoscope" },
      { stat: "BPT + MPT", label: "Undergraduate to Specialisation", icon: "graduation-cap" },
      { stat: "Clinical", label: "Rotations at Partner Hospitals", icon: "hospital" },
    ],
    domainTheme: "health",
  },
  {
    slug: "distance-learning",
    title: "Distance Learning (Yoga)",
    shortTitle: "Distance Learning",
    subtitle: "YIC, B.Sc., M.Sc., DYT, PGDYT & PGDYT-D through the S-VYASA Directorate of Distance Education",
    bannerImage: yogaBanner,
    level: "diploma",
    campusType: "prashanti",
    programSlugs: DISTANCE_SLUGS,
    whyStudy: [
      { stat: "6", label: "Yoga Programmes in Distance Mode", icon: "monitor" },
      { stat: "Jan & Jul", label: "Two Intakes Every Year", icon: "calendar" },
      { stat: "UGC", label: "Approved Programmes", icon: "file-check" },
    ],
    domainTheme: "yoga",
  },
];

// --------------------------------------------
// Helpers for fee tables
// --------------------------------------------
const distanceFees = (
  inr: { reg: string; tuition: string; tuitionLabel: string; other: string; first?: string; total: string },
  usd: { reg: string; tuition: string; other: string; first?: string; total: string },
  otherLabel = "Other Fees (Library, Examination & Study Material) — one-time",
): Course["fee"] => ({
  registration: `₹${inr.reg} (one-time)`,
  yearlyFees: [],
  fullTable: {
    headers: ["Particulars", "Indian & SAARC Nationals (₹)"],
    rows: [
      ["Registration Fee — one-time", inr.reg],
      [inr.tuitionLabel, inr.tuition],
      [otherLabel, inr.other],
      ...(inr.first ? [["First Semester Fee (Registration + Tuition + Other)", inr.first]] : []),
      ["Total Programme Fee", inr.total],
    ],
  },
  foreignTable: {
    headers: ["Particulars", "International Students (USD)"],
    rows: [
      ["Registration Fee — one-time", `$${usd.reg}`],
      [inr.tuitionLabel, `$${usd.tuition}`],
      [otherLabel, `$${usd.other}`],
      ...(usd.first ? [["First Semester Fee (Registration + Tuition + Other)", `$${usd.first}`]] : []),
      ["Total Programme Fee", `$${usd.total}`],
    ],
  },
  perks:
    "Fees are paid online through the university ERP only, after the admission confirmation email. Fees are non-refundable and non-transferable. Food & accommodation during contact programmes is charged separately (dormitory from ₹2,000 per week).",
});

const distanceEligibilityYIC = "Completion of the Yoga Instructor's Course (YIC) from S-VYASA / VYASA";

// --------------------------------------------
// Courses
// --------------------------------------------
export const staticCourses: Course[] = [
  // ===================== PHYSIOTHERAPY =====================
  {
    slug: "bachelor-of-physiotherapy",
    title: "Bachelor of Physiotherapy (BPT)",
    shortTitle: "BPT",
    degree: "Bachelor of Physiotherapy",
    duration: "5 Years",
    campus: PRASHANTI,
    campusType: "prashanti",
    category: "physiotherapy",
    bannerImage: bptHero,
    hookLine: "Assess, diagnose and restore movement — a competency-based degree with a full year of clinical internship.",
    overview: [
      "The Bachelor of Physiotherapy (BPT) at the School of Physiotherapy, Prashanti Kutiram Campus, prepares students to assess, diagnose and manage movement and functional impairments arising from injury, illness, disability, ageing and lifestyle conditions.",
      "The programme runs for four years of full-time academic study followed by a compulsory one-year rotatory clinical internship, taken after all academic examinations are cleared. Teaching is in English with annual university examinations.",
      "A competency-based curriculum, hands-on practicals and structured clinical exposure prepare graduates to practise independently or as part of multidisciplinary healthcare teams, and to progress to the Master of Physiotherapy (MPT).",
    ],
    statCallout: { text: "4 years of academic study + 1 year of compulsory rotatory clinical internship.", source: "S-VYASA BPT Regulations" },
    eligibility: {
      primary: "10+2 or equivalent with Physics, Chemistry & Biology (or Botany & Zoology) and English",
      minMarks: "50% in PCB (40% for SC/ST/OBC-NCL/PwBD)",
      extras: [
        "Minimum 50% aggregate in Physics, Chemistry and Biology taken together",
        "SC, ST, OBC-NCL and PwBD/PwD candidates: minimum 40% aggregate in PCB",
        "English must be passed as a subject (mandatory for all categories)",
        "Full-time, non-distance programme; medium of instruction is English",
      ],
      quizQuestions: [
        { question: "Have you completed 10+2 (or equivalent) with Physics, Chemistry and Biology?", yesIsCorrect: true },
        { question: "Did you score at least 50% in PCB (40% for reserved categories)?", yesIsCorrect: true },
        { question: "Did you pass English as a subject?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "book-open", title: "Comprehensive Curriculum", description: "Anatomy, physiology, biomechanics, exercise therapy, electrotherapy and movement sciences, progressing to musculoskeletal, neurological, cardiopulmonary, paediatric, sports and community physiotherapy." },
      { number: "02", icon: "microscope", title: "Evidence-Based Practice", description: "Critical appraisal of research evidence integrated with sound clinical reasoning." },
      { number: "03", icon: "hospital", title: "Hands-On Clinical Experience", description: "Clinical rotations at partner hospitals including Cadabam's Hospitals." },
      { number: "04", icon: "user-check", title: "Professional Development", description: "Clinical communication, patient education, ethics, medico-legal awareness, documentation and teamwork." },
      { number: "05", icon: "users", title: "Multidisciplinary Approach", description: "Collaboration with doctors, nurses, occupational therapists, psychologists and speech-language professionals." },
      { number: "06", icon: "clipboard-check", title: "Guided Clinical Learning", description: "Supervised demonstrations, practicals, case discussions, rotations and structured feedback." },
    ],
    careers: [
      { icon: "hospital", title: "Hospitals & Nursing Homes", description: "Inpatient and outpatient physiotherapy services.", demand: "high" },
      { icon: "activity", title: "Physiotherapy & OPD Clinics", description: "Independent or group clinical practice.", demand: "high" },
      { icon: "heart-pulse", title: "Rehabilitation Centres", description: "Long-term functional rehabilitation.", demand: "high" },
      { icon: "trophy", title: "Sports Academies & Clubs", description: "Injury prevention and athlete rehabilitation.", demand: "growing" },
      { icon: "users", title: "Community-Based Rehabilitation", description: "Outreach and public-health programmes.", demand: "growing" },
      { icon: "home", title: "Geriatric & Elder-Care Centres", description: "Mobility and fall-prevention care.", demand: "growing" },
      { icon: "baby", title: "Women's Health & Maternal Care", description: "Ante- and post-natal physiotherapy.", demand: "growing" },
      { icon: "school", title: "Schools & Special Education", description: "Paediatric and developmental support.", demand: "medium" },
      { icon: "briefcase", title: "Corporate Health & Ergonomics", description: "Workplace wellness and ergonomic assessment.", demand: "growing" },
      { icon: "graduation-cap", title: "Academic & Research Institutions", description: "Teaching and clinical research.", demand: "medium" },
    ],
    learningJourney: [
      { semester: "Year 1", title: "Foundations of Movement Science", subjects: ["Anatomy", "Physiology", "Biochemistry", "Biomechanics", "Exercise Therapy Fundamentals"] },
      { semester: "Year 2", title: "Therapeutic Skills", subjects: ["Exercise Therapy", "Electrotherapy", "Pathology & Microbiology", "Pharmacology", "Movement Sciences"] },
      { semester: "Year 3", title: "Clinical Physiotherapy I", subjects: ["Musculoskeletal Physiotherapy", "Neurological Physiotherapy", "General Medicine & Surgery", "Clinical Postings"] },
      { semester: "Year 4", title: "Clinical Physiotherapy II", subjects: ["Cardiopulmonary Physiotherapy", "Paediatric Physiotherapy", "Sports & Community Physiotherapy", "Research Methodology", "Clinical Postings"] },
      { semester: "Year 5", title: "Rotatory Clinical Internship", subjects: ["Compulsory one-year rotatory internship across clinical specialities after clearing all academic examinations"] },
    ],
    relatedPrograms: ["master-of-physiotherapy", "bachelor-of-occupational-therapy", "phd-allied-sciences"],
    fee: {
      registration: "₹5,000 (University Registration Fee, Year 1)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,45,500" },
        { year: "2nd Year", amount: "₹1,04,500" },
        { year: "3rd Year", amount: "₹1,07,500" },
        { year: "4th Year", amount: "₹1,04,500" },
      ],
      fullTable: {
        headers: ["Particulars (Indian Students, 2026-27)", "Year 1", "Year 2", "Year 3", "Year 4", "Internship", "Total"],
        rows: [
          ["University Registration Fee", "5,000", "NA", "NA", "NA", "NA", "5,000"],
          ["Tuition Fee", "1,00,000", "1,00,000", "1,00,000", "1,00,000", "NA", "4,00,000"],
          ["Caution Deposit (Library & Lab) — 50% refundable on completion", "20,000", "NA", "NA", "NA", "NA", "20,000"],
          ["Education Tour", "2,000", "2,000", "2,000", "2,000", "NA", "8,000"],
          ["Fest / Events Fee", "2,500", "2,500", "2,500", "2,500", "NA", "10,000"],
          ["Student Kit & Uniform", "16,000", "NA", "3,000", "NA", "NA", "19,000"],
          ["Total (Academic)", "1,45,500", "1,04,500", "1,07,500", "1,04,500", "NA", "4,62,000"],
          ["Hostel Fee (Food & Accommodation)", "85,000", "85,000", "85,000", "85,000", "85,000", "4,25,000"],
          ["Total including Hostel", "2,30,500", "1,89,500", "1,92,500", "1,89,500", "85,000", "8,87,000"],
        ],
      },
      foreignTable: {
        headers: ["Particulars (Foreign Students, USD)", "Year 1", "Year 2", "Year 3", "Year 4", "Internship", "Total"],
        rows: [
          ["University Registration Fee", "$125", "NA", "NA", "NA", "NA", "$125"],
          ["Tuition Fee", "$3,000", "$3,125", "$3,125", "$3,125", "NA", "$12,375"],
          ["Caution Deposit — 50% refundable on completion", "$500", "NA", "NA", "NA", "NA", "$500"],
          ["Education Tour", "$25", "$25", "$25", "$25", "NA", "$100"],
          ["Fest / Events Fee", "$37.5", "$37.5", "$37.5", "$37.5", "NA", "$150"],
          ["Student Kit & Uniform", "$300", "NA", "$300", "NA", "NA", "$600"],
          ["Total (Academic)", "$3,987.5", "$3,187.5", "$3,487.5", "$3,187.5", "NA", "$13,850"],
          ["Hostel Fee (Food & Accommodation)", "$2,125", "$2,125", "$2,125", "$2,125", "$2,125", "$10,625"],
          ["Total including Hostel", "$6,112.5", "$5,312.5", "$5,612.5", "$5,312.5", "$2,125", "$24,475"],
        ],
      },
      perks: "Student kit & uniform, education tours and fest/event participation are included in the fee. Hostel (food & accommodation) is optional.",
    },
    applyLink: PRASHANTI_APPLY,
    brochureLink: "https://www.svyasa.edu.in/img/programs/allied/BACHELOR-OF-PHYSIOTHERAPY.pdf",
    domainTheme: "health",
  },
  {
    slug: "master-of-physiotherapy",
    title: "Master of Physiotherapy (MPT)",
    shortTitle: "MPT",
    degree: "Master of Physiotherapy",
    duration: "2 Years",
    campus: PRASHANTI,
    campusType: "prashanti",
    category: "physiotherapy",
    bannerImage: bptOverview,
    hookLine: "Specialise, research and lead — advanced clinical expertise in physiotherapy and rehabilitation.",
    overview: [
      "The Master of Physiotherapy (MPT) is a two-year, full-time postgraduate programme at the School of Physiotherapy, Prashanti Kutiram Campus. It builds specialised knowledge, advanced clinical competence and research capability in the candidate's chosen area of physiotherapy.",
      "Students refine physical and functional diagnosis, evidence-based clinical decision-making and teaching skills through extensive clinical training, case presentations, seminars and journal clubs, and complete a supervised research dissertation.",
      "Graduates are prepared for specialist clinical roles, academic careers, clinical research, independent practice and doctoral studies.",
    ],
    statCallout: null,
    eligibility: {
      primary: "Bachelor of Physiotherapy (BPT) from a recognised university",
      minMarks: "50%",
      extras: [
        "BPT with pass marks (50%) from a recognised university",
        "Physical fitness certificate from a registered medical practitioner, submitted with the application",
        "Two character references from persons who are not relatives",
        "Admission through a State/University-level entrance test and interview — both are mandatory",
      ],
      quizQuestions: [
        { question: "Have you completed a Bachelor of Physiotherapy (BPT) from a recognised university?", yesIsCorrect: true },
        { question: "Did you secure at least 50% in your BPT?", yesIsCorrect: true },
        { question: "Are you prepared to appear for the entrance test and interview?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "graduation-cap", title: "Advanced Specialised Learning", description: "In-depth study in the chosen physiotherapy specialisation." },
      { number: "02", icon: "stethoscope", title: "Physical & Functional Diagnosis", description: "Advanced assessment and diagnostic reasoning." },
      { number: "03", icon: "microscope", title: "Evidence-Based Clinical Practice", description: "Applying current research to patient care." },
      { number: "04", icon: "hospital", title: "Extensive Clinical Training", description: "Supervised clinical postings across specialities." },
      { number: "05", icon: "file-text", title: "Research & Dissertation", description: "Research methodology, biostatistics and a supervised dissertation." },
      { number: "06", icon: "presentation", title: "Skills Refinement", description: "Case presentations, seminars, journal clubs and teaching assignments." },
      { number: "07", icon: "award", title: "Leadership & Professional Development", description: "Clinical leadership, ethics and professional practice." },
      { number: "08", icon: "users", title: "Multidisciplinary Rehabilitation", description: "Working within integrated rehabilitation teams." },
    ],
    careers: [
      { icon: "stethoscope", title: "Specialist Physiotherapist", description: "Advanced care in a chosen speciality.", demand: "high" },
      { icon: "award", title: "Senior Physiotherapist", description: "Lead clinical physiotherapy services.", demand: "high" },
      { icon: "heart-pulse", title: "Rehabilitation Specialist", description: "Plan and lead rehabilitation programmes.", demand: "high" },
      { icon: "trophy", title: "Sports Physiotherapist", description: "Care for athletes and sports teams.", demand: "growing" },
      { icon: "brain", title: "Neurological Physiotherapist", description: "Stroke, spinal and neuro rehabilitation.", demand: "growing" },
      { icon: "activity", title: "Cardiopulmonary Physiotherapist", description: "ICU, cardiac and pulmonary rehab.", demand: "growing" },
      { icon: "baby", title: "Paediatric Physiotherapist", description: "Developmental and paediatric care.", demand: "growing" },
      { icon: "home", title: "Geriatric Physiotherapist", description: "Mobility and independence for older adults.", demand: "growing" },
      { icon: "microscope", title: "Clinical Research Associate", description: "Clinical trials and rehabilitation research.", demand: "medium" },
      { icon: "graduation-cap", title: "Clinical Educator", description: "Teach and mentor physiotherapy students.", demand: "medium" },
    ],
    relatedPrograms: ["bachelor-of-physiotherapy", "phd-allied-sciences", "msc-health-psychology"],
    fee: {
      registration: "₹5,000 (University Registration Fee, Year 1)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,40,000" },
        { year: "2nd Year", amount: "₹2,00,000" },
      ],
      fullTable: {
        headers: ["Particulars (Indian Students, 2026-27)", "Year 1", "Year 2", "Total"],
        rows: [
          ["University Registration Fee", "5,000", "NA", "5,000"],
          ["Tuition Fee", "2,00,000", "2,00,000", "4,00,000"],
          ["Caution Deposit (Library & Lab) — 50% refundable on completion", "20,000", "NA", "20,000"],
          ["Student Kit & Uniform", "15,000", "NA", "15,000"],
          ["Total (Academic)", "2,40,000", "2,00,000", "4,40,000"],
          ["Hostel Fee (Food & Accommodation)", "85,000", "85,000", "1,70,000"],
          ["Total including Hostel", "3,25,000", "2,85,000", "6,10,000"],
        ],
      },
    },
    applyLink: PRASHANTI_APPLY,
    brochureLink: null,
    domainTheme: "health",
  },

  // ===================== D.Sc. / D.Litt. =====================
  {
    slug: "dsc-dlitt",
    title: "Doctor of Science (D.Sc.) / Doctor of Letters (D.Litt.)",
    shortTitle: "D.Sc., D.Litt.",
    degree: "D.Sc. / D.Litt. (by Thesis)",
    duration: "2 Years",
    campus: PRASHANTI,
    campusType: "prashanti",
    category: "dsc-dlitt",
    bannerImage: "",
    hookLine: "The university's highest research degrees — awarded for a substantial, original body of scholarly work.",
    overview: [
      "Since 2004 S-VYASA has conferred honorary D.Sc. and D.Litt. degrees on eminent persons for outstanding contributions to yoga and allied disciplines — through research (D.Sc.) or literature (D.Litt.). So far 26 honorary D.Sc. and 25 honorary D.Litt. degrees have been awarded.",
      "The university now also invites applications from accomplished scholars for an independent study or project leading to a thesis for the D.Sc. / D.Litt. degree, under the \"Doctor of Science (D.Sc.), Doctor of Letters (D.Litt.) Notification 2024\" approved by the Academic Council and Executive Council.",
      "Admission is overseen by the Post-Doctoral Research Advisory Committee (PDRAC), chaired by the Pro-Vice Chancellor with the Academic Dean, one internal and one external expert, and the Dean of the Division as Convener. The thesis must be submitted within two years of admission.",
    ],
    statCallout: { text: "26 honorary D.Sc. and 25 honorary D.Litt. degrees conferred since 2004.", source: "S-VYASA" },
    eligibility: {
      primary: "Ph.D. or equivalent in the discipline, awarded at least 15 academic years before applying",
      minMarks: null,
      extras: [
        "Route 1: Ph.D. (or equivalent) from S-VYASA in the discipline, at least 15 academic years before the date of application, plus a Master's and Bachelor's degree from any university",
        "Route 2: Ph.D. (or equivalent) from any other recognised Indian or reputed foreign university in the relevant discipline, at least 15 academic years before applying, plus a Master's and Bachelor's degree",
        "Route 3: Permanent teacher of the university with at least 15 years of continuous service, holding a Ph.D. (or equivalent) in the discipline",
        "Last date for application: 31 October of the academic year",
      ],
      quizQuestions: [
        { question: "Do you hold a Ph.D. (or equivalent) in the relevant discipline?", yesIsCorrect: true },
        { question: "Was your Ph.D. awarded at least 15 academic years ago (or do you have 15 years of continuous service as a permanent S-VYASA teacher)?", yesIsCorrect: true },
        { question: "Do you have at least two peer-reviewed publications, solely authored, from your recent work?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "file-text", title: "Research Statement", description: "A ~1,000-word account of recent research demonstrating originality and contribution to knowledge." },
      { number: "02", icon: "users", title: "PDRAC Review", description: "Applications are scrutinised by the Post-Doctoral Research Advisory Committee." },
      { number: "03", icon: "presentation", title: "Pre-Submission Seminar", description: "Presented in the Division, arranged by the Ph.D. Coordinator." },
      { number: "04", icon: "book-open", title: "Original Thesis in English", description: "Substantial, scholarly work done in the last five years, partly published — at least two solely-authored papers." },
      { number: "05", icon: "globe", title: "International Evaluation", description: "Panel of 4–6 examiners from India (outside Karnataka) and abroad; Board of Examiners includes a member from abroad." },
      { number: "06", icon: "award", title: "Unanimous Award", description: "The degree is awarded only on unanimous acceptance; the certificate states the thesis title and Division." },
    ],
    careers: [
      { icon: "award", title: "Distinguished Scholar", description: "Recognition of a lifetime of research or literary contribution.", demand: "medium" },
      { icon: "graduation-cap", title: "Senior Professor / Chair", description: "Leadership in academia and research supervision.", demand: "medium" },
      { icon: "microscope", title: "Research Director", description: "Lead institutional research programmes.", demand: "medium" },
      { icon: "book-open", title: "Author & Thought Leader", description: "Shape knowledge in yoga and allied disciplines.", demand: "growing" },
    ],
    learningJourney: [
      { semester: "Step 1", title: "Apply Online", subjects: ["Submit the online registration form on the university website", "Bio-data / resume, passport-size photograph and attested certificates", "Character certificate from two academicians", "Last date: 31 October"] },
      { semester: "Step 2", title: "Research Statement", subjects: ["Submit a ~1,000-word account of recent research showing originality and contribution to knowledge"] },
      { semester: "Step 3", title: "Scrutiny & Recommendation", subjects: ["Controller of Examinations forwards applications within a week of the deadline", "Research Committee / PDRAC scrutinises and recommends candidates"] },
      { semester: "Step 4", title: "Admission & Registration", subjects: ["Director of Research issues the admission letter", "Pay the fee within 15 days and register in the Division"] },
      { semester: "Step 5", title: "Pre-Submission Seminar", subjects: ["Present the work in the Division before thesis submission"] },
      { semester: "Step 6", title: "Thesis Submission", subjects: ["Within two years of admission, to the Director Research", "Five hardbound copies (Annexure B), CD with extended abstract", "Declaration of non-submission elsewhere (Annexure C) and supervisor certificate (Annexure D)"] },
      { semester: "Step 7", title: "Evaluation & Award", subjects: ["Examiners report within two months", "Recommendation: accept, revise (resubmit in 6–12 months) or reject", "A rejected candidate may not reapply for five years"] },
    ],
    relatedPrograms: ["phd-yoga", "phd-allied-sciences", "phd-english"],
    fee: {
      registration: "₹50,000 (Enrolment Fee)",
      yearlyFees: [],
      fullTable: {
        headers: ["Particulars (Annexure A)", "Amount (₹)"],
        rows: [
          ["Enrolment Fee", "50,000"],
          ["First Viva Fee for Registration", "50,000"],
          ["Thesis Submission & Evaluation", "50,000"],
          ["Open Session Viva", "50,000"],
          ["Total", "2,00,000"],
        ],
      },
      perks: "Download the application form, Annexure B, C and D from the official S-VYASA website. Revised theses attract only the examination fee.",
    },
    applyLink: "https://www.svyasa.edu.in/img/pdf/application.pdf",
    brochureLink: null,
    domainTheme: "research",
  },

  // ===================== DISTANCE LEARNING (YOGA) =====================
  {
    slug: "yic-distance",
    title: "Yoga Instructor's Course (YIC) — Distance Mode",
    shortTitle: "YIC (Distance)",
    degree: "Certificate",
    duration: "3 Months",
    campus: DISTANCE_CAMPUS,
    campusType: "prashanti",
    category: "distance-learning",
    bannerImage: "",
    hookLine: "Begin your yoga teaching journey — 300 learning hours online plus a 7-day immersion at Prashanti Kutiram.",
    overview: [
      "The Yoga Instructor's Course (YIC) is a short-term certificate programme from the S-VYASA Directorate of Distance Education covering yoga philosophy, practices and teaching methodology.",
      "Classes run twice a week online (Google Classroom / Google Meet), followed by a 7-day in-person contact programme at the Jigani (Prashanti Kutiram) campus. The programme carries 300 learning hours and can be completed within a maximum of 12 months.",
      "YIC graduates become eligible for certification by the Yoga Certification Board (Ministry of AYUSH), and YIC is the prerequisite for the higher distance programmes — B.Sc., M.Sc., DYT, PGDYT and PGDYT-D.",
    ],
    statCallout: { text: "YIC is the gateway to every S-VYASA distance yoga programme.", source: "S-VYASA DDE" },
    eligibility: {
      primary: "10th standard or equivalent from a recognised board",
      minMarks: "50% (40% for SC/ST/OBC)",
      extras: [
        "Basic knowledge of English",
        "Documents: ID proof, attested marks cards, health & fitness certificate, passport photographs",
        "Minimum duration 3 months (300 hours); maximum 12 months",
      ],
      quizQuestions: [
        { question: "Have you passed 10th standard (or equivalent)?", yesIsCorrect: true },
        { question: "Did you score at least 50% (40% for reserved categories)?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "monitor", title: "Live Online Classes", description: "Twice-weekly sessions on Google Classroom and Google Meet." },
      { number: "02", icon: "map-pin", title: "7-Day Campus Immersion", description: "In-person contact programme at Prashanti Kutiram, Jigani." },
      { number: "03", icon: "award", title: "AYUSH YCB Eligibility", description: "Eligible for Yoga Certification Board certification." },
      { number: "04", icon: "package", title: "Registration Kit", description: "Kriya set, yoga mat, bag and uniform included in the fee." },
      { number: "05", icon: "graduation-cap", title: "Gateway Programme", description: "Prerequisite for B.Sc., M.Sc., DYT and PG Diplomas." },
    ],
    careers: [
      { icon: "users", title: "Yoga Instructor", description: "Teach yoga in centres, schools and communities.", demand: "high" },
      { icon: "heart-pulse", title: "Wellness Coach", description: "Guide healthy lifestyle practices.", demand: "growing" },
      { icon: "briefcase", title: "Corporate Yoga Trainer", description: "Workplace wellness sessions.", demand: "growing" },
      { icon: "home", title: "Own Yoga Studio", description: "Start an independent practice.", demand: "medium" },
    ],
    learningJourney: [
      { semester: "Theory", title: "Foundations (4 credits)", subjects: ["YIC T 101 — Introduction to Yoga and its Streams", "YIC T 102 — Spiritual Masters and Indian Culture"] },
      { semester: "Practical", title: "Practices & Teaching (8 credits)", subjects: ["YIC P 101 — Kriya, Asana, Pranayama, Dhyana", "YIC P 102 — Advanced Pranayama and Meditation", "YIC P 103 — Karma Yoga and Community Practices", "YIC P 104 — Teaching Methodology"] },
      { semester: "Assessment", title: "Evaluation", subjects: ["One assignment per course", "Term-end examination under the ODL scheme", "7-day in-person immersion"] },
    ],
    relatedPrograms: ["bsc-yoga-distance", "dyt-distance", "yoga-instructor-course"],
    fee: distanceFees(
      { reg: "1,000", tuition: "9,000", tuitionLabel: "Tuition Fee", other: "10,000", total: "20,000" },
      { reg: "100", tuition: "850", other: "550", total: "1,500" },
      "Other Fees (Library, Exam, Study Material & Registration Kit) — one-time",
    ),
    applyLink: DISTANCE_APPLY,
    brochureLink: null,
    domainTheme: "yoga",
  },
  {
    slug: "bsc-yoga-distance",
    title: "Bachelor of Science (B.Sc.) in Yoga — Distance Mode",
    shortTitle: "B.Sc. Yoga (Distance)",
    degree: "B.Sc. (Yoga)",
    duration: "3 Years",
    campus: DISTANCE_CAMPUS,
    campusType: "prashanti",
    category: "distance-learning",
    bannerImage: "",
    hookLine: "Classical yoga wisdom meets modern health science — a full undergraduate degree you can study from home.",
    overview: [
      "The B.Sc. (Yoga) in distance mode integrates classical yoga philosophy with modern medical sciences — anatomy & physiology, psychology, research methodology and yoga therapy — over six semesters.",
      "Each semester includes a mandatory 7-day Personal Contact Programme (PCP) at Prashanti Kutiram with 95% attendance, plus field training: YIC (14 days), Personality Development Camp (20 days), Arogyadhama clinical training (16 days) and a 3-month Arogyadhama clinical internship.",
      "The programme can be completed in a minimum of 3 years and a maximum of 6 years, and prepares graduates as yoga instructors, wellness professionals, yoga therapy assistants and researchers.",
    ],
    statCallout: null,
    eligibility: {
      primary: "12th standard / PUC or equivalent from a recognised board",
      minMarks: "40%",
      extras: [
        distanceEligibilityYIC + " (may be completed during the first semester with an undertaking)",
        "Valid medical fitness certificate",
        "International students: 12 years of schooling",
        "Intakes: January and July (application deadlines 15 December and 15 June)",
      ],
      quizQuestions: [
        { question: "Have you completed 12th standard / PUC with at least 40%?", yesIsCorrect: true },
        { question: "Have you completed (or will you complete in Semester 1) the S-VYASA YIC?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "monitor", title: "Study from Anywhere", description: "Self-learning material with semester-wise contact programmes." },
      { number: "02", icon: "map-pin", title: "7-Day PCP Every Semester", description: "On-campus contact programme at Prashanti Kutiram." },
      { number: "03", icon: "hospital", title: "Arogyadhama Clinical Training", description: "16-day training and a 3-month clinical internship." },
      { number: "04", icon: "wallet", title: "Interest-Free Instalments", description: "Semester fees payable in four interest-free instalments." },
      { number: "05", icon: "file-check", title: "UGC Approved", description: "Degree offered by S-VYASA Deemed-to-be University." },
    ],
    careers: [
      { icon: "users", title: "Yoga Instructor", description: "Teach in schools, studios and wellness centres.", demand: "high" },
      { icon: "heart-pulse", title: "Yoga Therapy Assistant", description: "Support therapists in clinical settings.", demand: "growing" },
      { icon: "leaf", title: "Wellness Professional", description: "Resorts, spas and wellness brands.", demand: "growing" },
      { icon: "microscope", title: "Research Assistant", description: "Yoga research projects.", demand: "medium" },
    ],
    learningJourney: [
      { semester: "Semester 1", title: "Foundations", subjects: ["Anatomy & Physiology I", "Human System According to Yoga", "Introduction to Sanskrit", "Yoga & Education", "Vedic Chanting & Personality Development Practices", "Computer Basics & Statistics"] },
      { semester: "Semester 2", title: "Yoga Psychology & Texts", subjects: ["Yoga Psychology & Counselling", "Patanjali Yoga Sutras I", "Hatha Yoga I", "First Course in Sanskrit", "Advanced Yogasana & Kriya"] },
      { semester: "Semester 3", title: "Yoga for Health", subjects: ["AYUSH", "Classical Meditation Techniques", "Common Ailments", "Research Methodology", "Advanced Pranayama & Meditation"] },
      { semester: "Semester 4", title: "Indian Knowledge Traditions", subjects: ["Message of Vedas & Upanishads", "Introduction to Darshanas", "Epics & Puranas", "Constitution of India", "Advanced Yoga Techniques"] },
      { semester: "Semester 5", title: "Bhakti, Gita & Applications", subjects: ["Narada Bhakti Sutras", "Bhagavad Gita", "Cultural History of India", "Environmental Studies", "Applications of Yoga & Teaching Techniques"] },
      { semester: "Semester 6", title: "Therapy & Project", subjects: ["Integrated Approach of Yoga Therapy (IAYT)", "Project Work", "Arogyadhama Clinical Internship"] },
    ],
    relatedPrograms: ["yic-distance", "msc-yoga-distance", "bsc-yoga-therapy"],
    fee: distanceFees(
      { reg: "1,000", tuition: "7,000", tuitionLabel: "Tuition Fee (per semester)", other: "14,500", first: "22,500", total: "57,500" },
      { reg: "100", tuition: "450", other: "650", first: "1,200", total: "3,450" },
    ),
    applyLink: DISTANCE_APPLY,
    brochureLink: null,
    domainTheme: "yoga",
  },
  {
    slug: "msc-yoga-distance",
    title: "Master of Science (M.Sc.) in Yoga — Distance Mode",
    shortTitle: "M.Sc. Yoga (Distance)",
    degree: "M.Sc. (Yoga)",
    duration: "2 Years",
    campus: DISTANCE_CAMPUS,
    campusType: "prashanti",
    category: "distance-learning",
    bannerImage: "",
    hookLine: "A research- and therapy-oriented master's degree in yoga — for graduates of any discipline.",
    overview: [
      "The M.Sc. (Yoga) in distance mode draws on the Vedas, Upanishads, Bhagavad Gita, Patanjali Yoga Sutras, Hatha Yoga and Gheranda Samhita alongside modern anatomy, physiology, psychology and research methodology.",
      "Learning combines self-study with residential Personal Contact Programmes (PCPs) on campus during each semester and examinations, a 16-day clinical posting at Arogyadhama and a research dissertation in the final semester.",
      "Minimum duration is 2 years and maximum 4 years. The medium of instruction and evaluation is English. Graduates work as assistant professors, junior research fellows, yoga therapists and wellness instructors, or run their own yoga centres.",
    ],
    statCallout: null,
    eligibility: {
      primary: "Graduation in any discipline from a recognised university",
      minMarks: "45% aggregate",
      extras: [
        distanceEligibilityYIC + " — or YCB Level 3 certification (Ministry of AYUSH)",
        "YIC must be completed before the first PCP (may be taken alongside, finishing before Semester 1 exams)",
        "Medical fitness certificate",
        "Intakes: January and July; registration is open year-round",
      ],
      quizQuestions: [
        { question: "Do you hold a bachelor's degree with at least 45% aggregate?", yesIsCorrect: true },
        { question: "Have you completed YIC (S-VYASA/VYASA) or YCB Level 3?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "book-open", title: "Classical & Modern Curriculum", description: "Yoga texts integrated with health sciences and research." },
      { number: "02", icon: "map-pin", title: "On-Campus PCPs", description: "Residential contact programmes at Prashanti Kutiram." },
      { number: "03", icon: "hospital", title: "Arogyadhama Clinical Posting", description: "16-day hands-on yoga therapy training." },
      { number: "04", icon: "file-text", title: "Research Dissertation", description: "12-credit dissertation in the final semester." },
      { number: "05", icon: "file-check", title: "UGC Approved", description: "Master's degree from S-VYASA Deemed-to-be University." },
    ],
    careers: [
      { icon: "graduation-cap", title: "Assistant Professor", description: "Teach yoga at colleges and universities.", demand: "growing" },
      { icon: "microscope", title: "Junior Research Fellow", description: "Yoga and health research.", demand: "growing" },
      { icon: "heart-pulse", title: "Yoga Therapist", description: "Therapeutic yoga in clinical settings.", demand: "high" },
      { icon: "home", title: "Yoga Centre Founder", description: "Run your own yoga and wellness centre.", demand: "medium" },
    ],
    learningJourney: [
      { semester: "Semester 1", title: "Foundations (24 credits)", subjects: ["Introduction to Sanskritam", "Anatomy & Physiology", "Vedas, Upanishads & Darshanas", "Yoga Philosophy & Health", "Yoga Practice 1 & 2", "Yoga Therapy Techniques 1", "Psychology Lab"] },
      { semester: "Semester 2", title: "Texts & Research (24 credits)", subjects: ["Bhagavad Gita", "Yoga for Common Ailments", "Research Methodology", "Patanjali Yoga Sutras & Hatha Yoga", "Yoga Therapy Techniques 2", "Research Methodology Lab", "Yoga Therapy Training 1"] },
      { semester: "Semester 3", title: "Advanced Practice (24 credits)", subjects: ["Philosophy, Science & Consciousness", "Yoga Therapy & Other Systems of Healing", "Narada Bhakti Sutras", "Advanced Yoga Practice 1 & 2", "Advanced Yoga Techniques", "Yoga Therapy Training 2"] },
      { semester: "Semester 4", title: "Research (14 credits)", subjects: ["Seminar (2 credits)", "Dissertation (12 credits)"] },
    ],
    relatedPrograms: ["bsc-yoga-distance", "pgdyt-distance", "msc-yoga-therapy"],
    fee: distanceFees(
      { reg: "1,000", tuition: "12,250", tuitionLabel: "Tuition Fee (per semester)", other: "15,000", first: "28,250", total: "65,000" },
      { reg: "100", tuition: "700", other: "750", first: "1,550", total: "3,650" },
    ),
    applyLink: DISTANCE_APPLY,
    brochureLink: null,
    domainTheme: "yoga",
  },
  {
    slug: "dyt-distance",
    title: "Diploma in Yoga Therapy (DYT) — Distance Mode",
    shortTitle: "DYT (Distance)",
    degree: "Diploma",
    duration: "1 Year",
    campus: DISTANCE_CAMPUS,
    campusType: "prashanti",
    category: "distance-learning",
    bannerImage: "",
    hookLine: "Learn the therapeutic use of yoga for lifestyle and psychosomatic conditions.",
    overview: [
      "The Diploma in Yoga Therapy (DYT) trains learners in the supportive and therapeutic use of yoga for lifestyle-related and psychosomatic conditions. It prepares yoga therapy instructors for hospitals and therapy assistants for naturopathy centres and health clubs.",
      "The 42-credit programme runs in three phases: an online PCP with assignments and unit tests, a 28-day internship at Arogyadhama (Prashanti Kutiram) with 40 case reports followed by a 1-week examination PCP, and a month-long externship of voluntary yoga therapy service.",
      "Minimum duration is 1 year and maximum 2 years; the medium of instruction is English.",
    ],
    statCallout: null,
    eligibility: {
      primary: "12th standard / PUC / Plus Two (12 years of schooling) from a recognised board",
      minMarks: null,
      extras: [
        distanceEligibilityYIC,
        "Medical fitness certificate",
        "Intakes: January and July (application deadlines 20 December and 20 June)",
      ],
      quizQuestions: [
        { question: "Have you completed 12th standard / PUC or equivalent?", yesIsCorrect: true },
        { question: "Have you completed the S-VYASA / VYASA YIC?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "monitor", title: "Online PCP", description: "Orientation and learning in the first phase online." },
      { number: "02", icon: "hospital", title: "28-Day Arogyadhama Internship", description: "Clinical yoga therapy with 40 case reports." },
      { number: "03", icon: "clipboard-check", title: "Continuous Assessment", description: "Assignments, unit tests, theory, practicals and viva voce." },
      { number: "04", icon: "hand-heart", title: "Externship", description: "One month of voluntary yoga therapy service." },
    ],
    careers: [
      { icon: "hospital", title: "Yoga Therapy Instructor", description: "Hospitals and therapy units.", demand: "high" },
      { icon: "leaf", title: "Naturopathy Centre Therapist", description: "Therapy assistant in naturopathy centres.", demand: "growing" },
      { icon: "dumbbell", title: "Health Club Trainer", description: "Therapeutic yoga in fitness settings.", demand: "growing" },
    ],
    learningJourney: [
      { semester: "Phase 1", title: "Learning & Assessment", subjects: ["1-week online PCP", "Yoga Therapy Principles", "Anatomy & Physiology", "Sanskrit & Yogic Texts", "Common Ailments I & II", "Assignments & unit tests"] },
      { semester: "Phase 2", title: "Clinical Internship & Exams", subjects: ["28-day Arogyadhama internship at Prashanti Kutiram", "40 case reports", "1-week examination PCP (2nd week of January / July)"] },
      { semester: "Phase 3", title: "Externship", subjects: ["About one month of voluntary yoga therapy service with a certificate from the centre"] },
    ],
    relatedPrograms: ["yic-distance", "pgdyt-distance", "pg-diploma-yoga-therapy"],
    fee: distanceFees(
      { reg: "1,000", tuition: "11,000", tuitionLabel: "Tuition Fee (per term)", other: "12,000", first: "24,000", total: "35,000" },
      { reg: "100", tuition: "1,400", other: "500", total: "2,000" },
    ),
    applyLink: DISTANCE_APPLY,
    brochureLink: null,
    domainTheme: "yoga",
  },
  {
    slug: "pgdyt-distance",
    title: "Post Graduate Diploma in Yoga Therapy (PGDYT) — Distance Mode",
    shortTitle: "PGDYT (Distance)",
    degree: "Post Graduate Diploma",
    duration: "15 Months",
    campus: DISTANCE_CAMPUS,
    campusType: "prashanti",
    category: "distance-learning",
    bannerImage: "",
    hookLine: "Yoga as preventive healthcare — master the Integrated Approach of Yoga Therapy (IAYT).",
    overview: [
      "The PGDYT introduces yoga as a system of preventive healthcare and health promotion, covering the human body, the benefits and contraindications of yoga practices, and the Integrated Approach of Yoga Therapy (IAYT) for common ailments.",
      "The 48-credit programme includes a 7-day PCP, assignments and unit tests, three months of Arogyadhama clinical training (the first 16 days in-house at S-VYASA, the rest in the candidate's home town) with 40 case reports, a 7-day examination PCP and a three-month externship.",
      "Minimum duration is 15 months and maximum 3 years. Graduates can set up and run yoga therapy centres.",
    ],
    statCallout: null,
    eligibility: {
      primary: "Bachelor's degree in any discipline",
      minMarks: "45%",
      extras: [
        "Completion of the Yoga Instructor's Course (YIC) from S-VYASA University",
        "Medical fitness certificate",
        "Intakes: January and July (application deadlines 20 December and 20 June)",
      ],
      quizQuestions: [
        { question: "Do you hold a bachelor's degree with at least 45%?", yesIsCorrect: true },
        { question: "Have you completed the S-VYASA YIC?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "heart-pulse", title: "IAYT for Common Ailments", description: "Integrated Approach of Yoga Therapy." },
      { number: "02", icon: "hospital", title: "3-Month Clinical Training", description: "Arogyadhama training with 40 case reports." },
      { number: "03", icon: "map-pin", title: "Two Contact Programmes", description: "7-day induction PCP and 7-day examination PCP." },
      { number: "04", icon: "hand-heart", title: "Externship", description: "3 months of voluntary service, 4 hours a day." },
    ],
    careers: [
      { icon: "home", title: "Yoga Therapy Centre Founder", description: "Set up your own therapy centre.", demand: "growing" },
      { icon: "heart-pulse", title: "Yoga Therapist", description: "Hospitals, wellness and rehab centres.", demand: "high" },
      { icon: "briefcase", title: "Corporate Wellness Consultant", description: "Preventive health programmes.", demand: "growing" },
    ],
    learningJourney: [
      { semester: "Theory", title: "Core Courses (22 credits)", subjects: ["T 101 Anatomy & Physiology (4)", "T 102 Yoga Therapy: Principles & Applications (4)", "T 103 AYUSH (4)", "T 104 Common Ailments (4)", "T 105 Yoga Texts (4)", "T 106 Research Methodology (2)", "T 107 Teaching Techniques (2)"] },
      { semester: "Practical", title: "Practice (8 credits)", subjects: ["P 101 Yoga Therapy Training (4)", "P 102 Advanced Yoga Techniques (4)"] },
      { semester: "Field", title: "Arogyadhama Training (16 credits)", subjects: ["F 101 — 3 months of clinical training, first 16 days in-house at S-VYASA", "40 case reports"] },
      { semester: "Externship", title: "Service", subjects: ["3 months of voluntary yoga therapy service (4 hours/day) with a service certificate"] },
    ],
    relatedPrograms: ["pgdytd-distance", "msc-yoga-distance", "pg-diploma-yoga-therapy"],
    fee: distanceFees(
      { reg: "1,000", tuition: "15,500", tuitionLabel: "Tuition Fee (per term)", other: "15,000", first: "31,500", total: "47,000" },
      { reg: "100", tuition: "1,100", other: "750", first: "1,950", total: "3,050" },
    ),
    applyLink: DISTANCE_APPLY,
    brochureLink: null,
    domainTheme: "yoga",
  },
  {
    slug: "pgdytd-distance",
    title: "Post Graduate Diploma in Yoga Therapy for Doctors (PGDYT-D) — Distance Mode",
    shortTitle: "PGDYT-D (Distance)",
    degree: "Post Graduate Diploma",
    duration: "1 Year",
    campus: DISTANCE_CAMPUS,
    campusType: "prashanti",
    category: "distance-learning",
    bannerImage: "",
    hookLine: "For doctors of every system of medicine — bring evidence-based yoga therapy into clinical practice.",
    overview: [
      "The PGDYT-D orients doctors from modern medicine and the Indian systems of medicine to use yoga therapy in clinical conditions — preventive healthcare, stress-related disorders and the Integrated Approach of Yoga Therapy (IAYT) for common ailments.",
      "The 48-credit programme begins with induction (1–7 January / July) and an evaluation week (8–15 January / July), followed by a three-month internship: the first 16 days in-house at S-VYASA and the rest at a hospital, AYUSH centre, clinical setting or the doctor's own clinic, with 40 case reports.",
      "The programme is designed to be completed in 1–2 years alongside clinical practice.",
    ],
    statCallout: null,
    eligibility: {
      primary: "Recognised medical graduation — MBBS, BDS, BAMS, BSMS, BUMS, BNYS or BHMS",
      minMarks: "50%",
      extras: [
        "Completion of the Yoga Instructor's Course (YIC) from S-VYASA",
        "Medical fitness certificate and declaration of not being enrolled in another programme",
        "Intakes: January and July (application deadlines 20 December and 20 June)",
      ],
      quizQuestions: [
        { question: "Do you hold a recognised medical degree (modern medicine, dentistry, Ayurveda, Siddha, Unani, Naturopathy or Homeopathy)?", yesIsCorrect: true },
        { question: "Have you completed the S-VYASA YIC?", yesIsCorrect: true },
      ],
    },
    highlights: [
      { number: "01", icon: "stethoscope", title: "Designed for Doctors", description: "Clinical application of yoga therapy across systems of medicine." },
      { number: "02", icon: "hospital", title: "Practise at Your Own Clinic", description: "Internship after 16 in-house days can be done in your own clinical setting." },
      { number: "03", icon: "clipboard-check", title: "40 Case Reports", description: "Structured clinical documentation." },
      { number: "04", icon: "calendar", title: "Two Intakes a Year", description: "January and July batches." },
    ],
    careers: [
      { icon: "stethoscope", title: "Integrative Medicine Practitioner", description: "Add yoga therapy to clinical practice.", demand: "growing" },
      { icon: "hospital", title: "Yoga Therapy Consultant", description: "Hospitals and AYUSH centres.", demand: "growing" },
      { icon: "microscope", title: "Clinical Yoga Researcher", description: "Evidence-based yoga research.", demand: "medium" },
    ],
    learningJourney: [
      { semester: "Theory", title: "Core Courses (22 credits)", subjects: ["T 101 Applied Physiology (4)", "T 102 Yoga Therapy: Principles & Applications (4)", "T 103 Common Ailments I (4)", "T 104 Common Ailments II (4)", "T 105 Yoga Therapy through Yogic Texts (4)", "T 106 Research Methodology (2)", "T 107 Teaching Techniques (2)"] },
      { semester: "Practical", title: "Practice (8 credits)", subjects: ["P 101 Yoga for Common Ailments (4)", "P 102 Advanced Yoga Techniques (4)"] },
      { semester: "Field", title: "Arogyadhama Training (16 credits)", subjects: ["F 101 — 3-month internship, first 16 days in-house at S-VYASA", "40 case reports"] },
    ],
    relatedPrograms: ["pgdyt-distance", "pg-diploma-yoga-for-doctors", "doctor-of-medicine-yoga"],
    fee: distanceFees(
      { reg: "1,000", tuition: "15,500", tuitionLabel: "Tuition Fee (per term)", other: "15,000", first: "31,500", total: "47,000" },
      { reg: "100", tuition: "1,100", other: "750", first: "1,950", total: "3,050" },
    ),
    applyLink: DISTANCE_APPLY,
    brochureLink: null,
    domainTheme: "yoga",
  },
];

// --------------------------------------------
// Lookups
// --------------------------------------------
const courseMap = new Map(staticCourses.map((c) => [c.slug, c]));
const categoryMap = new Map(staticCategories.map((c) => [c.slug, c]));

export const getStaticCourse = (slug: string | undefined): Course | undefined =>
  slug ? courseMap.get(slug) : undefined;

export const getStaticCategory = (slug: string | undefined): Category | undefined =>
  slug ? categoryMap.get(slug) : undefined;

/** Broad "level" categories that should not be chosen as a course's primary category. */
const AGGREGATE_CATEGORIES = new Set(["undergraduate", "postgraduate"]);

/** Preferred static category for a course: its own `category` field, then a specific static category listing it. */
export const getStaticCategoryForCourse = (slug: string | undefined, courseCategory?: string): Category | undefined => {
  if (!slug) return undefined;
  const own = getStaticCategory(courseCategory);
  if (own) return own;
  return staticCategories.find((c) => !AGGREGATE_CATEGORIES.has(c.slug) && c.programSlugs.includes(slug));
};

/** Replace DB-sourced courses with their static versions where one exists. */
export const withStaticOverrides = (courses: Course[]): Course[] =>
  courses.map((c) => courseMap.get(c.slug) ?? c);
