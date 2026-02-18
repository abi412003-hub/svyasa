export interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  photo?: string;
  section: "leadership" | "staff" | "project";
  achievements?: string[];
  expertise?: string;
  research?: string;
  publications?: string[];
}

const BASE = "https://www.svyasa.edu.in/admin/photo/1/faculty";

export const facultyData: FacultyProfile[] = [
  /* ── SECTION 1: Academic Leadership ── */
  {
    id: "nagendra",
    name: "Dr. H R Nagendra",
    designation: "President",
    qualifications: "PhD (Mechanical Engineering), IISc Bangalore",
    photo: `${BASE}/10/80.jpg`,
    section: "leadership",
    achievements: [
      "Post-Doctoral Research Fellow, University of British Columbia, Canada (1970)",
      "Post-Doctoral Research Associate, NASA Marshall Space Flight Centre, USA (1971)",
      "Consultant, Engineering Science Laboratory, Harvard University, USA (1972)",
      "Visiting Staff, Imperial College of Science and Technology, London",
      "Padma Shri Award recipient (2016) for contribution to Yoga",
      "Founder and President of Vivekananda Yoga Anusandhana Samsthana",
      "Chairman of the Board of Studies in Yoga",
      "Chairman of Task force of AYUSH, Govt. of India",
    ],
    research:
      "Has set up the Human Performance Laboratory that monitors performance of yogic activities and studies the effect of yoga on physical parameters. Led the nationwide Diabetes research program and was the Principal Investigator for several DRDO-funded research projects.",
    publications: [
      "Over 200 research papers on Yoga in national and international journals",
      "30 Research Papers in Engineering",
      "40 books on Yoga therapy, yoga education, and yoga philosophy",
    ],
  },
  {
    id: "nagarathna",
    name: "Dr. R Nagarathna",
    designation: "Director, Arogyadhama",
    qualifications: "MBBS, MD (Internal Medicine), MRCP, FRCP (Edinburgh)",
    photo: `${BASE}/10/83.jpg`,
    section: "leadership",
    achievements: [
      "Chief Consultant at Arogyadhama, SVYASA",
      "Recognized by ICMR for contributions to yoga research",
      "Pioneered yoga therapy protocols for various diseases",
    ],
    research:
      "Led research on yoga-based lifestyle interventions for diabetes prevention across India. Principal Investigator for multiple AYUSH-funded projects including Tele-yoga for COVID-19 management and yoga-Ayurveda combination therapy for Type 2 Diabetes.",
    publications: [
      "80+ publications in national and international journals",
      "11 books on Yoga for different ailments",
    ],
  },
  {
    id: "manjunatha",
    name: "Dr. Manjunatha N K",
    designation: "Vice-Chancellor",
    qualifications: "BNYS, PhD, D.Sc.",
    photo: `${BASE}/10/86.jpg`,
    section: "leadership",
    achievements: [
      "Delivered lectures at Harvard Medical School, Monash University, Royal College of Medicine London, Shanghai University of Sports",
      "Editor of International Journal of Yoga (IJOY)",
      "Member of Scientific Advisory Committee, DST (SATYAM program)",
      "Member of Research Committee, Integrative Medicine, NITI Aayog",
      "Founding Director of Vivekananda Health Global",
      "Director, Boston Center of Excellence, Boston, USA",
      "Founding Director, Vivekananda Yoga University, California, USA",
      "Vice-President of Asian Yoga Therapy Association, Singapore",
    ],
    research:
      "Principal Investigator for the largest ongoing research projects at S-VYASA including the ₹4.73 crore Dyslipidemia study and ₹5.56 crore Type 2 Diabetes Remission trial. Also led DFID/Wellcome Trust funded Yoga-DP diabetes prevention study and MD Anderson Cancer Center collaboration on yoga for breast cancer patients.",
    publications: [
      "100+ research papers in peer-reviewed journals",
      "Editor of IJOY (Impact Factor 1.1, indexed in PubMed/Scopus)",
    ],
  },
  {
    id: "ramesh",
    name: "Dr. Ramesh M N",
    designation: "Director, Anvesana Research Labs",
    qualifications: "MSc, PhD (Biochemistry), Jacobs University, Bremen, Germany",
    photo: `${BASE}/10/88.jpg`,
    section: "leadership",
    achievements: [
      "Max Planck Fellowship, 2002",
      "UGC Research Award, 2016",
    ],
    research:
      "Expertise in Molecular Biology (microarray, DNA foot-printing, RT-PCR, cloning), Proteomics (protein purification, 2D electrophoresis, western blot), and Enzymology (kinetic analysis, fluorescent assays). Pioneered molecular understanding of yoga's effects at genomic and proteomic levels.",
    publications: [
      "Establishment of a Comprehensive Platform for Sustained Delivery of Yoga Therapy for Sickle Cell Anemia (2024)",
      "Yoga Module Development and Validation for Sickle Cell Disease (2023)",
      "Effect of yoga on reducing glycaemic variability in type 2 diabetes: RCT (2023)",
      "Role of yoga and its plausible mechanism in the mitigation of DNA damage in type-2 diabetes (2022)",
      "Lang B, Blot N, et al. High-affinity DNA binding sites for H-NS. Nucleic Acids Res. (2007)",
      "Blot N, Mavathur R, et al. Homeostatic regulation of supercoiling sensitivity. EMBO Rep. (2006)",
    ],
  },

  /* ── SECTION 2: Faculty & Staff ── */
  {
    id: "vijaya",
    name: "Dr. Vijaya Majumdar",
    designation: "Associate Professor, HOD Molecular Bioscience Lab",
    qualifications: "MSc, PhD (Neurochemistry)",
    photo: `${BASE}/11/90.jpg`,
    section: "staff",
    achievements: [
      "DBT-BioCare Women Scientist-2013",
      "FENS-IBRO/PERC travel grant for FENS Forum 2016, Copenhagen",
      "MSc Gold Medal-2003, School of Biotechnology, BHU",
      "Qualified GATE 2003 — 99.3 percentile, 24th All India Rank",
      "Qualified CSIR-NET for Junior Research Fellowship 2003",
      "Co-authored the ADA's Vivian Fonseca and Nagendran Family Diabetes Research Award abstract",
    ],
    expertise: "Molecular biology, gene expression studies, mammalian cell culture, healthy aging and biological ageing.",
    research:
      "Research experience at NIMHANS with deep understanding of basic and clinical neuroscience. Primary research interest in establishing the role of Yoga in human system's biology concerning aging. Ongoing DST-SATYAM funded project exploring yoga effectiveness for biological age phenotypes using ageing hallmarks.",
    publications: [
      "Yoga-based lifestyle intervention for healthy ageing in older adults (Geroscience, 2024)",
      "Study protocol for yHAP (BMJ Open, 2021)",
      "Effectiveness of yoga on composite biomarker age predictors (BMC Geriatrics, 2023)",
      "Association of KL-VS variant of Klotho gene with early-onset ischemic stroke (BBRC, 2010)",
    ],
  },
  {
    id: "mithila",
    name: "Dr. Mithila M V",
    designation: "Associate Professor",
    qualifications: "M.Sc., Ph.D. (Biochemistry)",
    photo: `${BASE}/11/84.jpg`,
    section: "staff",
    expertise: "Clinical research in Yoga and Diabetes, molecular mechanisms in NCDs, metabolic syndrome, yogic breathing, oxidative stress, migraine, and nutrition.",
    research:
      "Present projects: Clinical trial on Yoga-based lifestyle enabling sustained remission in Type-2 Diabetes; 12-week yogic breathing for CVD risk factors; yoga on migraine outcomes. Presently guiding 6 PhD scholars. Completed: Research on yoga's effect on oxidative DNA damage and repair in Type-2 Diabetes patients.",
    publications: [
      "Nair, Vasudev & Mavathur. Role of Yoga in Mitigation of DNA Damage in Type-2 Diabetes (Annals of Behavioral Medicine, 2021)",
      "Zaidi, Mithila et al. Yoga Module Development for Sickle Cell Disease (IJY, 2023)",
      "Mithila & Khanum. Comparison of quinoa and amaranth supplemented diets (J Food Sci Tech, 2015)",
    ],
  },
  {
    id: "rajesh-nair",
    name: "Dr. Rajesh Nair",
    designation: "Assistant Professor",
    qualifications: "MS, PhD (Yoga)",
    photo: `${BASE}/11/87.jpg`,
    section: "staff",
    achievements: [
      "Best scientific article award",
      "Best thesis award",
    ],
    expertise: "Application research of Yoga for human wellbeing and lifestyle modification. Deeper understanding of philosophical texts.",
    research:
      "Present project: Molecular basis of the effect of yoga on chronic kidney disease. Completed: Role of yoga and its mechanism in Type 2 Diabetes Mellitus related DNA damage — DNA damage reduced by 16% in yoga group. Supervising MD (2), M.Sc. (8), PhD (2) students.",
    publications: [
      "Nair, Vasudev & Mavathur. Role of Yoga in Mitigation of DNA Damage in Type-2 Diabetes (Annals of Behavioral Medicine, 2021)",
    ],
  },
  {
    id: "deepshikha",
    name: "Dr. Deepshikha Srivastava",
    designation: "Assistant Professor",
    qualifications: "M.Sc., Ph.D. (Biotechnology), Postdoc",
    photo: `${BASE}/11/81.jpg`,
    section: "staff",
    achievements: [
      "Women Scientist Award (₹23,10,000) from DST, 2012",
      "International Travel Grant to EAACI Congress Barcelona, 2008",
      "Senior Research Fellowship from CSIR and ICMR, 2008",
      "Senior Research Fellowship from DST, 2006",
      "Postdoc at St John's Research Institute, Bangalore",
    ],
    research:
      'Exploring fundamental biological mechanisms underlying therapeutic benefits of Yoga. Current project: "Is NAD+-SIRT1 Axis a key regulator for DNA Repair and metabolic regulation following Yoga?" Supervising Ph.D (5), M.Sc (4) students.',
    publications: [
      "Srivastava et al. Identification of glutathionylated proteins in CSF in MS patients (Anal Biochem, 2019)",
      "Mitra, Muralidharan, Srivastava et al. Assessment of Cysteine Reactivity of Human Hemoglobin (Hemoglobin, 2017)",
    ],
  },
  {
    id: "krishna",
    name: "Dr. Krishna Dwivedi",
    designation: "Assistant Professor",
    qualifications: "M.Sc., Ph.D. (Yoga), S-VYASA",
    photo: `${BASE}/11/82.jpg`,
    section: "staff",
    expertise: "Neurophysiology, Cognitive Sciences, psychophysiology, and mental health of various forms of yoga practices.",
    research:
      "Working on conscious inhalation on attention process. Investigating how Bhastrika Pranayama facilitates executive functions. Guiding two PhD students (Co-supervisor) and 10 postgraduate students.",
    publications: [
      "Krishna & Deepeshwar. Relationships between impulsivity and frontal EEG oscillation in meditators (Alt Therapies Health Med, 2024)",
      "Krishna & Kanthi. Neurobiology Correlates of Breathing Practices on Cognitive Functions (Biospectra, 2024)",
      "Mohanty, Deepeshwar, Singh, Krishna et al. Improving Prefrontal Oxygenation Following Meditation: fNIRS Study (Cureus, 2024)",
    ],
  },
  {
    id: "dhamodhini",
    name: "Dr. K.S. Dhamodhini",
    designation: "Assistant Professor",
    qualifications: "BNYS, M.D (Yoga), PhD",
    photo: `${BASE}/11/92.jpg`,
    section: "staff",
    achievements: [
      "Developed a Mobile Yoga App (AVISHADA Yoga App) with validated E-module, patent submitted",
    ],
    expertise: "Development and evaluation of E-Yoga protocols for mental health disorders. Yoga Nidra effects on mental health and cognition. Genetic changes induced by yoga interventions. Physiological effects of magnetotherapy and chromotherapy.",
    research:
      "Completed DST-SATYAM funded projects on structured yoga intervention for anxiety/depression and validation of E-Module yoga protocol. Studied stress, anxiety, sleep quality among medical students during COVID-19 and HRV in individuals with depression symptoms.",
    publications: [
      "Dhamodhini et al. Development and Validation of Yoga Protocol for Depression (Annals of Neurosciences, 2023)",
      "Padmavathi, Kumar, Dhamodhini et al. Role of Yoga in Stress Management and Major Depressive Disorder (J Ayurveda Integr Med, 2023)",
      "Jeyashree, Dilara, Maruthi, Dhamodhini. Arterial Stiffness using Photo Pulse Plethysmography (J Clin Diagn Res, 2024)",
    ],
  },
  {
    id: "murugesh",
    name: "Mr. Murugesh K",
    designation: "Clinical Psychologist",
    qualifications: "MSc Clinical Psychology",
    photo: `${BASE}/11/97.jpg`,
    section: "staff",
  },
  {
    id: "satya",
    name: "Mr. Satya Prakash Sharma",
    designation: "Statistician",
    qualifications: "MSc Statistics",
    photo: `${BASE}/11/98.jpg`,
    section: "staff",
  },
  {
    id: "kavya",
    name: "Ms. Kavya Urs",
    designation: "Research Assistant",
    qualifications: "B.Sc. Horticulture, M.Sc. Yoga Therapy",
    photo: `${BASE}/11/95.jpg`,
    section: "staff",
    expertise: "Women health and wellness",
    research:
      "Present project: JIVA WATER PROJECT — studying modulations in biochemical parameters due to JIVA water on healthy individuals. Testing effect of energised water on biochemical parameters, DNA damage, oxidative stress, and body composition using Gas Discharge Visualization (GDV).",
  },
  {
    id: "basavaraj",
    name: "Mr. Basavaraj",
    designation: "Section Officer",
    qualifications: "",
    section: "staff",
  },
  {
    id: "sandeep",
    name: "Mr. Sandeep N",
    designation: "Staff",
    qualifications: "",
    section: "staff",
  },
  {
    id: "devaraja",
    name: "Mr. Devaraja S",
    designation: "Staff",
    qualifications: "",
    section: "staff",
  },
  {
    id: "rajesh-nj",
    name: "Mr. Rajesh NJ",
    designation: "Staff",
    qualifications: "",
    section: "staff",
  },

  /* ── SECTION 3: Project Staff ── */
  {
    id: "amit",
    name: "Dr. Amit Kanthi",
    designation: "Research Associate",
    qualifications: "PhD (Yoga/Neuroscience)",
    photo: `${BASE}/12/91.jpg`,
    section: "project",
    research: "Working on meditation neuroscience, investigating neural correlates of different meditation practices.",
  },
  {
    id: "pradeep",
    name: "Dr. Pradeep S R",
    designation: "Research Associate",
    qualifications: "Ph.D (Biochemistry)",
    photo: `${BASE}/12/85.jpg`,
    section: "project",
    achievements: [
      "SERB National Post-Doctoral Fellowship from SERB (2019)",
      "CSIR-SRF award from Govt. of India (2012)",
    ],
    expertise: "Diabetes, Cardiovascular Diseases, Molecular Nutrition, Food Biochemistry, Yoga",
    research:
      "Present: Role of Yoga Based Lifestyle Intervention in Enabling Sustained Remission of Type 2 Diabetes. Previous: Redox regulation of ischemic heart diseases.",
    publications: [
      "Pradeep et al. Functional role of Pellino-1 following myocardial infarction (BBA Mol Basis Disease, 2024)",
      "Thirunavukkarasu, Pradeep et al. Role of Pellino-1 in Inflammation Following Severe Sepsis (Cells, 2023)",
      "Ghatak, Khanna, Roy, Thirunavukkarasu, Pradeep et al. Driving adult tissue repair (Molecular Therapy, 2022)",
    ],
  },
  {
    id: "shilpa",
    name: "Dr. Shilpa M",
    designation: "Senior Research Fellow",
    qualifications: "Ph.D. (Microbiology)",
    photo: `${BASE}/12/89.jpg`,
    section: "project",
    expertise: "Gut microbiome, Microbial culture, Next generation sequencing, product development using probiotics, prebiotics and symbiotics.",
    research:
      "Present: Influence of yoga intervention on emerging risk markers of dyslipidaemia and cardiovascular health. Previous: Microbial diversity analysis by PCR-RFLP (CFTRI) and Microbial Enzymatic Production of Prebiotic Galactooligosaccharides (DFRL Mysuru).",
    publications: [
      "Shilpa et al. Optimal production of β-Galactosidase from Lactobacillus fermentum for GOS synthesis (J Pure Applied Microbiology, 2020)",
      "Shilpa & Batra. Statistical Optimization for β-Galactosidase Production (Research J Biotechnology, 2020)",
    ],
  },
  {
    id: "prosenjeet",
    name: "Mr. Prosenjeet Chakraborty",
    designation: "Junior Research Fellow",
    qualifications: "MSc (Genetics)",
    photo: `${BASE}/12/93.jpg`,
    section: "project",
    expertise: "Genetics in Ageing",
    research:
      "Present: Effectiveness of yoga on composite biomarkers, age predictors (yBIOAGE) in elderly Indian cohorts. Previous: Gene Expression, Amplification and Mutation Study of Gall bladder Cancer.",
    publications: [
      "EGFR and SMAD4 negatively correlated in gallbladder cancer progression (BMC Gastroenterology, 2024)",
      "Associations between Klotho levels, KL-VS Heterozygosity and Cognition in Schizophrenia (Schizophrenia Bulletin Open, 2024)",
      "Emerging role of non-invasive and liquid biopsy biomarkers in pancreatic cancer (World J Gastroenterology, 2023)",
    ],
  },
  {
    id: "anbarasi",
    name: "Ms. Anbarasi P",
    designation: "Senior Research Fellow",
    qualifications: "M.Sc. Public Health Entomology (ICMR-VCRC), B.Tech Bioinformatics",
    photo: `${BASE}/12/94.jpg`,
    section: "project",
    expertise: "Molecular Biology and Disease Mechanisms, Genomics and Bioinformatics, Genetics and Environment, Precision Medicine.",
    research:
      "Present: Senior Research Fellow — Influence of Yoga-based Lifestyle Intervention on Emerging Risk Markers of Dyslipidaemia and Cardiovascular Health. Previous: Nanopore Sequencing at HaystackAnalytics (IIT Bombay), COVID-19 RT-PCR testing (ICMR-VCRC).",
    publications: [
      "Mukhopadhyay, Saha, Palanisamy et al. Systems biology pipeline for human cells during microgravity exposure (Scientific Reports, 2016)",
      "NCBI GenBank Submission: EF-1 alpha gene sequences of sandflies in India (2021)",
    ],
  },
  {
    id: "riya",
    name: "Ms. Riya Dutta",
    designation: "Junior Research Fellow",
    qualifications: "M.Sc. (Microbiology)",
    photo: `${BASE}/12/96.jpg`,
    section: "project",
    achievements: [
      "Certificate from Harvard Medical School for Mental Health Effects of COVID-19 Pandemic",
      "Certificate from Microbiology Society of India for Food Fermentation Technology",
    ],
    expertise: "Molecular Biology, Genetics, Microbial Culture, Next Generation Sequencing, Immunology",
    research:
      "Present: Influence of Yoga Intervention on emerging risk markers of Dyslipidemia and Cardiovascular Disease. Previous: Biomarker Profiling of Gallbladder Carcinoma at Chittaranjan National Cancer Institute.",
  },
  {
    id: "ananya",
    name: "Dr. Ananya BS",
    designation: "Yoga Trainer (BNYS)",
    qualifications: "BNYS (Bachelor of Naturopathy and Yogic Sciences)",
    section: "project",
    research: "Yoga Trainer for research intervention protocols.",
  },
];
