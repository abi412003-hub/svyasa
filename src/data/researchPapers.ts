/**
 * Research papers listed on the Arogyadhama Knowledge Hub
 * (https://www.svyasaarogyadhama.com/knowledge-hub and /knowledge-hub/research-papers).
 * Links open the paper on PubMed / PubMed Central, as on the source site.
 */
export type ResearchCategory =
  | "Yoga & Life Sciences"
  | "Yoga & Humanities"
  | "Yoga & Spirituality"
  | "Featured Research";

export type ResearchPaper = {
  title: string;
  journal: string;
  authors: string;
  year: string;
  category: ResearchCategory;
  url: string;
};

const pubmed = (title: string) => `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(title)}`;

export const researchPapers: ResearchPaper[] = [
  // ── Yoga & Life Sciences ──────────────────────────────────────────────
  {
    title: "Changes in Electrical Activities of the Brain Associated with Cognitive Functions in Type 2 Diabetes Mellitus: A Systematic Review",
    journal: "Clinical EEG and Neuroscience",
    authors: "Kanthi A, Singh D, Manjunath NK, Nagarathna R",
    year: "2022",
    category: "Yoga & Life Sciences",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=10.1177%2F15500594221089106",
  },
  {
    title: "Transcranial Doppler studies in Type 2 Diabetes mellitus: A systematic review",
    journal: "Diabetes Research and Clinical Practice",
    authors: "Vidyashree M, Deepeshwar S, Bathala L, et al.",
    year: "2022",
    category: "Yoga & Life Sciences",
    url: pubmed("Transcranial Doppler studies in Type 2 Diabetes mellitus: A systematic review"),
  },
  {
    title: "Beneficial Effect of Yoga-based Lifestyle Intervention on Anxiety and Depression in Young Adults: Non-randomized Controlled Study",
    journal: "International Journal of Medicine and Public Health",
    authors: "Deepeshwar S, Kumar D",
    year: "2022",
    category: "Yoga & Life Sciences",
    url: pubmed("Beneficial Effect of Yoga-based Lifestyle Intervention on Anxiety and Depression in Young Adults: Non-randomized Controlled Study"),
  },
  {
    title: "Development and validation of Vikrti measuring scale — A pilot study",
    journal: "Indian Journal of Ayurveda & Integrative Medicine KLEU",
    authors: "Patil SS, Singh A, Nagarathna R, Nagendra HR",
    year: "2021",
    category: "Yoga & Life Sciences",
    url: pubmed("Development and validation of Vikrti measuring scale — A pilot study"),
  },
  {
    title: "The role of trataka in ameliorating visual strain and promoting psychological well-being during prolonged use of digital displays: A randomized controlled trial",
    journal: "Work",
    authors: "Saoji AA, Swathi PS, Raghavendra BR",
    year: "2021",
    category: "Yoga & Life Sciences",
    url: pubmed("The role of trataka in ameliorating visual strain and promoting psychological well-being during prolonged use of digital displays: A randomized controlled trial"),
  },
  {
    title: "Yoga based lifestyle intervention for type 2 diabetes: a prospective single blind randomized controlled study",
    journal: "Frontiers in Public Health",
    authors: "Bista S, Jasti N, Bhargav H, et al.",
    year: "2021",
    category: "Yoga & Life Sciences",
    url: pubmed("Yoga based lifestyle intervention for type 2 diabetes: a prospective single blind randomized controlled study"),
  },
  {
    title: "Medical Application of Gas Discharge Visualization Imaging in Health and Disease: A Systematic Review of Literature",
    journal: "Alternative Therapies in Health and Medicine",
    authors: "Bista S, Jasti N, Bhargav H, et al.",
    year: "2021",
    category: "Yoga & Life Sciences",
    url: pubmed("Medical Application of Gas Discharge Visualization Imaging in Health and Disease: A Systematic Review of Literature"),
  },
  {
    title: "Ayurveda and Yoga Therapy for Allergy and Asthma",
    journal: "Textbook of Allergy for the Clinician (CRC Press)",
    authors: "Tripathi S, Metri KG, Sharma P, et al.",
    year: "2021",
    category: "Yoga & Life Sciences",
    url: pubmed("Ayurveda and Yoga Therapy for Allergy and Asthma"),
  },
  {
    title: "Does Yoga Reduce the Risk of Conversion from Prediabetes to Diabetes by Improving Acute Phase Insulin Release? An Observation from an RCT",
    journal: "Diabetes",
    authors: "Nagarathna R, Kurian J, Vijayakumar V, et al.",
    year: "2021",
    category: "Yoga & Life Sciences",
    url: pubmed("Does Yoga Reduce the Risk of Conversion from Prediabetes to Diabetes by Improving Acute Phase Insulin Release? An Observation from an RCT"),
  },
  // ── Yoga & Humanities ─────────────────────────────────────────────────
  {
    title: "The Problem of Ethics in Business: Does Vedanta have a solution?",
    journal: "Reimagining Faith and Management (Routledge)",
    authors: "Sinha A",
    year: "2021",
    category: "Yoga & Humanities",
    url: pubmed("The Problem of Ethics in Business: Does Vedanta have a solution?"),
  },
  // ── Yoga & Spirituality ───────────────────────────────────────────────
  {
    title: "A study of Muthuswami Dikshitar's expertise on Veena reflected in his compositions: a conceptual study",
    journal: "Sangeet Galaxy",
    authors: "Utpala K",
    year: "2022",
    category: "Yoga & Spirituality",
    url: pubmed("A study of Muthuswami Dikshitar's expertise on Veena reflected in his compositions: a conceptual study"),
  },
  {
    title: "Siddhi: Modern Science and Indian Spirituality",
    journal: "Vaidika Vag Jyotih",
    authors: "Soneji R, Hankey A",
    year: "2021",
    category: "Yoga & Spirituality",
    url: pubmed("Siddhi: Modern Science and Indian Spirituality"),
  },
  {
    title: "Spiritual–Scientific Yoga based Model of Siddhi",
    journal: "Shodh Sanchar Bulletin",
    authors: "Soneji R, Sridhar MK, Hankey A",
    year: "2021",
    category: "Yoga & Spirituality",
    url: pubmed("Spiritual–Scientific Yoga based Model of Siddhi"),
  },
  {
    title: "Development of Siddhi: An analysis of Shiva Samhita",
    journal: "Shodh Sarita",
    authors: "Soneji R, Hankey A, Sridhar MK",
    year: "2021",
    category: "Yoga & Spirituality",
    url: pubmed("Development of Siddhi: An analysis of Shiva Samhita"),
  },
  // ── Featured on the Knowledge Hub ─────────────────────────────────────
  {
    title: "Effect of yoga-based lifestyle modification on diabetes risk factors in overweight adults",
    journal: "Diabetes Care",
    authors: "Nagarathna R, Nagendra HR, et al.",
    year: "2015",
    category: "Featured Research",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8231281/",
  },
  {
    title: "Yoga's effect on blood pressure: A systematic review and meta-analysis",
    journal: "Journal of Clinical Hypertension",
    authors: "S-VYASA Research Team",
    year: "2019",
    category: "Featured Research",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8452415/",
  },
  {
    title: "Cyclic Meditation increases the occurrence of theta EEG bursts",
    journal: "International Journal of Yoga",
    authors: "Sarang SP, Telles S",
    year: "2010",
    category: "Featured Research",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2934575/",
  },
  {
    title: "MSRT reduces anxiety and improves quality of sleep in healthy adults",
    journal: "Asian Journal of Psychiatry",
    authors: "Bhargav H, Nagendra HR, et al.",
    year: "2018",
    category: "Featured Research",
    url: pubmed("MSRT reduces anxiety and improves quality of sleep in healthy adults"),
  },
];

/** Papers grouped by year, newest year first. */
export const researchByYear: Record<string, ResearchPaper[]> = researchPapers.reduce(
  (acc, paper) => {
    (acc[paper.year] ??= []).push(paper);
    return acc;
  },
  {} as Record<string, ResearchPaper[]>,
);

export const researchYears = Object.keys(researchByYear).sort((a, b) => Number(b) - Number(a));
