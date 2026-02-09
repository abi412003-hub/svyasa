// ============================================
// S-VYASA UNIVERSITY - CENTRALIZED COURSE DATA STORE
// ============================================

export interface CourseHighlight {
  number: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface CareerPath {
  icon: string;
  title: string;
  description: string;
  demand: "high" | "medium" | "growing";
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  degree: string;
  duration: string;
  campus: string;
  campusType: "gcc" | "prashanti";
  category: string;
  bannerImage: string;
  hookLine: string;
  overview: string[];
  statCallout: { text: string; source: string } | null;
  eligibility: {
    primary: string;
    minMarks: string | null;
    extras: string[];
    quizQuestions: { question: string; yesIsCorrect: boolean }[];
  };
  highlights: CourseHighlight[];
  careers: CareerPath[];
  relatedPrograms: string[];
  fee: {
    registration: string;
    yearlyFees: { year: string; amount: string }[];
  };
  applyLink: string;
  brochureLink: string | null;
  domainTheme: "tech" | "business" | "yoga" | "health" | "research" | "arts";
}

export interface Category {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  bannerImage: string;
  level: "undergraduate" | "postgraduate" | "doctoral" | "certificate" | "diploma";
  campusType: "gcc" | "prashanti" | "both";
  programSlugs: string[];
  whyStudy: { stat: string; label: string; icon: string }[];
  domainTheme: "tech" | "business" | "yoga" | "health" | "research" | "arts";
}

// ============================================
// CATEGORIES
// ============================================

export const categories: Category[] = [
  {
    slug: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    shortTitle: "BCA",
    subtitle: "6 Cutting-Edge Specializations to Launch Your Tech Career",
    bannerImage: "/img/banner/Bachelor-of-computer-applications(BCA).jpg",
    level: "undergraduate",
    campusType: "gcc",
    programSlugs: [
      "bca-cybersecurity-ethical-hacking-digital-forensics",
      "bca-artificial-intelligence-cloud-computing-devops",
      "bca-artificial-intelligence-machine-learning-robotics",
      "bca-data-science-artificial-intelligence-big-data-analytics",
      "bca-cloud-computing-cybersecurity-ethical-hacking",
      "bca-artificial-intelligence-robotics-internet-of-things"
    ],
    whyStudy: [
      { stat: "1M+", label: "Cybersecurity Jobs Projected in India", icon: "shield-check" },
      { stat: "₹8L+", label: "Avg Starting Salary", icon: "indian-rupee" },
      { stat: "95%", label: "Placement Assistance", icon: "briefcase" }
    ],
    domainTheme: "tech"
  },
  {
    slug: "bba",
    title: "Bachelor of Business Administration (BBA)",
    shortTitle: "BBA",
    subtitle: "5 Industry-Focused Specializations for Future Business Leaders",
    bannerImage: "/img/banner/Bachelor-of-Business-Administration(BBA).jpg",
    level: "undergraduate",
    campusType: "gcc",
    programSlugs: [
      "bba-in-sports-management",
      "bba-logistics-and-aviation",
      "bba-business-management-digital-marketing-business-analytics",
      "bba-entrepreneurship-innovation-business-analytics",
      "bba-logistics-supply-chain-management-port-management"
    ],
    whyStudy: [
      { stat: "4Yr", label: "BBA Hons with 3-Year Exit", icon: "graduation-cap" },
      { stat: "50+", label: "Industry Certifications", icon: "award" },
      { stat: "100%", label: "Internship-Integrated", icon: "building" }
    ],
    domainTheme: "business"
  },
  {
    slug: "bcom",
    title: "Bachelor of Commerce (B.Com)",
    shortTitle: "B.Com",
    subtitle: "Global Accounting Excellence with ACCA Integration",
    bannerImage: "/img/banner/Bachelor-of-Commerce(BCOM).jpg",
    level: "undergraduate",
    campusType: "gcc",
    programSlugs: ["bcom-international-accounting-finance-acca"],
    whyStudy: [
      { stat: "ACCA", label: "Globally Recognized", icon: "globe" },
      { stat: "₹10L+", label: "Avg Starting Salary", icon: "indian-rupee" },
      { stat: "180+", label: "Countries Recognize ACCA", icon: "map" }
    ],
    domainTheme: "business"
  },
  {
    slug: "btech",
    title: "Bachelor of Technology (B.Tech)",
    shortTitle: "B.Tech",
    subtitle: "7 Engineering Specializations Powering the Future of Tech",
    bannerImage: "/img/banner/Bachelor-of-Technology(BTECH).jpg",
    level: "undergraduate",
    campusType: "gcc",
    programSlugs: [
      "niat-corporate-btech-cse",
      "btech-computer-science-engineering",
      "btech-computer-science-information-technology",
      "btech-computer-science-software-engineering",
      "btech-artificial-intelligence-machine-learning",
      "btech-computer-science-engineering-data-science",
      "btech-computer-science-engineering-cyber-security"
    ],
    whyStudy: [
      { stat: "4 Yrs", label: "Industry-Integrated Engineering", icon: "cpu" },
      { stat: "NIAT", label: "Corporate B.Tech Partnership", icon: "handshake" },
      { stat: "₹12L+", label: "Avg B.Tech Package", icon: "trending-up" }
    ],
    domainTheme: "tech"
  },
  {
    slug: "bsc",
    title: "Bachelor of Science (B.Sc.)",
    shortTitle: "B.Sc.",
    subtitle: "Specialized Programs in Computing & Psychology",
    bannerImage: "/img/banner/Bachelor-of-Science(BSc).jpg",
    level: "undergraduate",
    campusType: "gcc",
    programSlugs: ["bsc-computer-science", "bsc-clinical-psychology"],
    whyStudy: [
      { stat: "3 Yrs", label: "Focused Degree", icon: "book-open" },
      { stat: "RCI", label: "Psychology RCI-Aligned", icon: "heart-pulse" },
      { stat: "Lab+", label: "Practical Training", icon: "flask-conical" }
    ],
    domainTheme: "tech"
  },
  {
    slug: "mca",
    title: "Master of Computer Applications (MCA)",
    shortTitle: "MCA",
    subtitle: "4 Advanced Specializations for Tech Professionals",
    bannerImage: "/img/banner/Master-of-Computer-Applications(MCA).jpg",
    level: "postgraduate",
    campusType: "gcc",
    programSlugs: [
      "mca-cloud-computing-devops",
      "mca-cybersecurity-ethical-hacking-cyber-forensics",
      "mca-artificial-intelligence-machine-learning-data-science",
      "mca-data-science"
    ],
    whyStudy: [
      { stat: "2 Yrs", label: "Accelerated PG", icon: "rocket" },
      { stat: "₹15L+", label: "Avg Post-MCA Salary", icon: "indian-rupee" },
      { stat: "4", label: "In-Demand Specializations", icon: "layers" }
    ],
    domainTheme: "tech"
  },
  {
    slug: "mba",
    title: "Master of Business Administration (MBA)",
    shortTitle: "MBA",
    subtitle: "7 MBA Pathways — From Dual Specialization to AI-Powered Business",
    bannerImage: "/img/banner/Master-of-Business-Administration(MBA).jpg",
    level: "postgraduate",
    campusType: "gcc",
    programSlugs: [
      "mba-dual-specialisation",
      "mba-marketing-finance-business-analytics",
      "mba-hospital-administration-medical-tourism",
      "mba-logistics-supply-chain-management",
      "mba-digital-business-management-data-analytics",
      "mba-pro-ai-data-analytics",
      "mba-digital-marketing-ai"
    ],
    whyStudy: [
      { stat: "DUAL", label: "Dual-Specialization Model", icon: "git-branch" },
      { stat: "₹12L+", label: "Avg MBA Package", icon: "indian-rupee" },
      { stat: "7", label: "MBA Tracks", icon: "target" }
    ],
    domainTheme: "business"
  },
  {
    slug: "msc",
    title: "Master of Science (M.Sc.)",
    shortTitle: "M.Sc.",
    subtitle: "7 Specialized Postgraduate Programs in Tech & Psychology",
    bannerImage: "/img/banner/Master-of-Science(MSC).jpg",
    level: "postgraduate",
    campusType: "gcc",
    programSlugs: [
      "msc-cybersecurity-ethical-hacking-cyber-forensics",
      "msc-data-science",
      "msc-clinical-psychology",
      "msc-neuropsychology",
      "msc-counselling-psychology",
      "msc-health-psychology",
      "msc-artificial-intelligence-machine-learning-data-science"
    ],
    whyStudy: [
      { stat: "7", label: "Specializations", icon: "sparkles" },
      { stat: "RCI", label: "Psychology RCI-Aligned", icon: "heart-pulse" },
      { stat: "50%", label: "Min Eligibility", icon: "percent" }
    ],
    domainTheme: "tech"
  },
  {
    slug: "yoga-programmes",
    title: "Yoga Programmes",
    shortTitle: "Yoga",
    subtitle: "Ancient Wisdom Meets Modern Science — Certificate to Doctorate",
    bannerImage: "/img/banner/yoga-programs.jpg",
    level: "certificate",
    campusType: "prashanti",
    programSlugs: [
      "bsc-yoga-vedic-therapy",
      "bsc-yoga-therapy",
      "msc-yoga-therapy",
      "msc-yoga-vedic-therapy",
      "bachelor-of-naturopathy-yogic-sciences",
      "doctor-of-medicine-yoga",
      "pg-diploma-yoga-therapy",
      "pg-diploma-yoga-for-doctors",
      "phd-yoga",
      "yoga-instructor-course",
      "non-residential-yic",
      "self-management-excessive-tension",
      "ayurveda-lifestyle-management",
      "aerial-yoga-teacher-training",
      "master-of-arts-yoga-darshanam",
      "division-yoga-humanities"
    ],
    whyStudy: [
      { stat: "50+", label: "Years of Yoga Research", icon: "history" },
      { stat: "NAAC A+", label: "Top Accredited", icon: "award" },
      { stat: "Global", label: "Students from 30+ Countries", icon: "globe" }
    ],
    domainTheme: "yoga"
  },
  {
    slug: "allied-sciences",
    title: "Allied and Healthcare Courses",
    shortTitle: "Allied Sciences",
    subtitle: "Clinical Excellence with Holistic Wellness",
    bannerImage: "/img/banner/allied-sciences.jpg",
    level: "undergraduate",
    campusType: "both",
    programSlugs: ["bachelor-of-physiotherapy", "bachelor-of-occupational-therapy", "bsc-clinical-psychology"],
    whyStudy: [
      { stat: "BPT", label: "Physiotherapy", icon: "activity" },
      { stat: "BOT", label: "Occupational Therapy", icon: "hand" },
      { stat: "Clinical", label: "Psychology", icon: "brain" }
    ],
    domainTheme: "health"
  },
  {
    slug: "phd-programmes",
    title: "Ph.D Programmes",
    shortTitle: "Ph.D",
    subtitle: "Doctoral Research Across CS, Management, Yoga & More",
    bannerImage: "/img/banner/phd-programs.jpg",
    level: "doctoral",
    campusType: "both",
    programSlugs: [
      "phd-computer-science",
      "phd-computer-science-engineering",
      "phd-commerce-management",
      "phd-applied-sciences",
      "phd-allied-sciences",
      "phd-english",
      "phd-yoga"
    ],
    whyStudy: [
      { stat: "7+", label: "Research Disciplines", icon: "flask-conical" },
      { stat: "UGC", label: "Recognized Programs", icon: "file-check" },
      { stat: "Both", label: "Campuses Available", icon: "map-pin" }
    ],
    domainTheme: "research"
  },
  {
    slug: "dsc-dlitt",
    title: "D.Sc., D.Litt.",
    shortTitle: "D.Sc./D.Litt",
    subtitle: "The Highest Academic Distinction for Distinguished Scholars",
    bannerImage: "/img/banner/phd-programs.jpg",
    level: "doctoral",
    campusType: "both",
    programSlugs: ["dsc-dlitt"],
    whyStudy: [
      { stat: "Highest", label: "Academic Distinction", icon: "crown" },
      { stat: "Research", label: "Based on Published Work", icon: "book-open" },
      { stat: "Prestige", label: "For Distinguished Scholars", icon: "star" }
    ],
    domainTheme: "research"
  }
];

// ============================================
// COURSES - FULLY POPULATED
// ============================================

export const courses: Course[] = [
  // ==========================================
  // BCA COURSES
  // ==========================================
  {
    slug: "bca-cybersecurity-ethical-hacking-digital-forensics",
    title: "BCA in Cybersecurity, Ethical Hacking & Digital Forensics",
    shortTitle: "BCA Cybersecurity",
    degree: "Bachelor of Computer Applications",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bca",
    bannerImage: "/img/banner/bca-cybersecurity-ethical-hacking-digital-forensics.jpg",
    hookLine: "India needs 1 million cybersecurity professionals. Your journey starts here.",
    overview: [
      "Welcome to the cutting-edge Bachelor of Computer Applications (BCA) program at S-VYASA, specializing in Cybersecurity, Ethical Hacking, and Digital Forensics. In an era dominated by technology, the need for skilled professionals in safeguarding digital landscapes is paramount. Our program is meticulously crafted to equip students with the knowledge and expertise required to address the evolving challenges of the cybersecurity domain.",
      "The BCA programme provides a comprehensive foundation in computer science with courses in programming languages, software development, database management, networking and web development. S-VYASA's approach integrates theoretical knowledge with practical application, ensuring students graduate with skills to tackle real-world IT challenges.",
      "The programme boasts robust industry-academic collaborations with insights from IITs, IIMs, NITs and international universities. Experts from Fortune 500 companies such as Google, Amazon and Accenture oversee the programme ensuring real-world knowledge."
    ],
    statCallout: {
      text: "India alone is projected to require 1 million cybersecurity professionals in the years ahead.",
      source: "NASSCOM"
    },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized Indian or foreign education board"],
      quizQuestions: [
        { question: "Have you completed 10+2 (PUC/HSc/CBSE/ICSE) or equivalent?", yesIsCorrect: true },
        { question: "Is your board recognized by an Indian or foreign education authority?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "shield", title: "Comprehensive Cybersecurity Curriculum", description: "Covering Programming, Data Structures, Algorithms, DBMS, Networks, Software Engineering — with deep specialization in cybersecurity, ethical hacking, and digital forensics." },
      { number: "02", icon: "lightbulb", title: "Innovative Pedagogical Practices", description: "Integrating technology, management and wellness programmes such as Yoga. Modern teaching methods, experiential learning and practical experience." },
      { number: "03", icon: "award", title: "Industry-Recognized Certifications", description: "Pursue industry-recognized certifications in cybersecurity and ethical hacking, enhancing employability and professional standing." },
      { number: "04", icon: "handshake", title: "Industry & Academia Collaboration", description: "Collaborations with IITs, IIMs, NITs. Experts from Google, Amazon and Accenture oversee the programme." },
      { number: "05", icon: "flask-conical", title: "Ethical Hacking & Forensics Labs", description: "State-of-the-art labs for ethical hacking and digital forensics with simulated environments for practical skill development." },
      { number: "06", icon: "heart", title: "Holistic Development with Yoga", description: "Enhances soft skills, teamwork, communication and ethical conduct with yoga and wellness practices for overall well-being." }
    ],
    careers: [
      { icon: "terminal", title: "Ethical Hacker", description: "Identify and exploit vulnerabilities through authorized penetration testing and security assessments.", demand: "high" },
      { icon: "shield-alert", title: "Cybersecurity Analyst", description: "Monitor, analyze, and respond to security incidents protecting digital assets against cyber threats.", demand: "high" },
      { icon: "search", title: "Digital Forensics Investigator", description: "Investigate digital evidence related to cybercrimes, supporting legal proceedings.", demand: "growing" },
      { icon: "lock", title: "Information Security Manager", description: "Oversee security measures protecting organizational data from unauthorized access and breaches.", demand: "high" },
      { icon: "network", title: "Network Security Engineer", description: "Design and implement secure network architectures protecting data during transmission.", demand: "high" },
      { icon: "presentation", title: "Security Trainer", description: "Educate teams on cybersecurity best practices, ethical hacking, and forensics methodologies.", demand: "growing" }
    ],
    relatedPrograms: ["bca-cloud-computing-cybersecurity-ethical-hacking", "bca-artificial-intelligence-cloud-computing-devops", "mca-cybersecurity-ethical-hacking-cyber-forensics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,96,000" },
        { year: "2nd Year", amount: "₹1,96,000" },
        { year: "3rd Year", amount: "₹1,96,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: BCA AI, Cloud Computing & DevOps
  {
    slug: "bca-artificial-intelligence-cloud-computing-devops",
    title: "BCA in Artificial Intelligence, Cloud Computing & DevOps",
    shortTitle: "BCA AI & Cloud",
    degree: "Bachelor of Computer Applications",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bca",
    bannerImage: "/img/banner/Bachelor-of-computer-applications(BCA).jpg",
    hookLine: "Master the cloud. Automate the future. Build intelligent systems.",
    overview: [
      "This program combines the power of Artificial Intelligence with modern cloud infrastructure and DevOps practices. Students learn to design, deploy, and manage AI-powered applications on scalable cloud platforms while mastering continuous integration and deployment pipelines.",
      "With hands-on labs in AWS, Azure, and Google Cloud, plus AI/ML frameworks like TensorFlow and PyTorch, graduates are prepared for the most in-demand roles in modern software engineering."
    ],
    statCallout: { text: "Cloud computing market in India expected to reach $13 billion by 2026.", source: "NASSCOM" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you interested in cloud technologies and AI?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "cloud", title: "Multi-Cloud Expertise", description: "Hands-on training in AWS, Azure, and Google Cloud Platform." },
      { number: "02", icon: "brain", title: "AI & Machine Learning", description: "Build intelligent applications using TensorFlow, PyTorch, and scikit-learn." },
      { number: "03", icon: "git-branch", title: "DevOps & CI/CD", description: "Master Jenkins, Docker, Kubernetes, and modern deployment pipelines." },
      { number: "04", icon: "server", title: "Infrastructure as Code", description: "Learn Terraform, Ansible, and cloud automation." },
      { number: "05", icon: "lotus", title: "Yoga-Integrated Learning", description: "Enhance focus and creativity through S-VYASA's unique wellness approach." }
    ],
    careers: [
      { icon: "cloud", title: "Cloud Solutions Architect", description: "Design and implement scalable cloud infrastructure solutions.", demand: "high" },
      { icon: "terminal", title: "DevOps Engineer", description: "Build and maintain CI/CD pipelines and infrastructure automation.", demand: "high" },
      { icon: "brain", title: "AI/ML Engineer", description: "Develop and deploy machine learning models in production.", demand: "high" },
      { icon: "server", title: "Site Reliability Engineer", description: "Ensure system reliability and optimize performance.", demand: "growing" },
      { icon: "settings", title: "Platform Engineer", description: "Build internal developer platforms and tools.", demand: "growing" }
    ],
    relatedPrograms: ["bca-cybersecurity-ethical-hacking-digital-forensics", "mca-cloud-computing-devops", "btech-artificial-intelligence-machine-learning"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,96,000" },
        { year: "2nd Year", amount: "₹1,96,000" },
        { year: "3rd Year", amount: "₹1,96,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: BCA AI, ML & Robotics
  {
    slug: "bca-artificial-intelligence-machine-learning-robotics",
    title: "BCA in Artificial Intelligence, Machine Learning & Robotics",
    shortTitle: "BCA AI & Robotics",
    degree: "Bachelor of Computer Applications",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bca",
    bannerImage: "/img/banner/Bachelor-of-computer-applications(BCA).jpg",
    hookLine: "Where algorithms meet automation. Build the robots of tomorrow.",
    overview: [
      "This innovative program merges artificial intelligence and machine learning with robotics engineering. Students explore neural networks, computer vision, and autonomous systems while gaining hands-on experience with robotic platforms.",
      "From industrial automation to service robots, graduates are prepared to lead the fourth industrial revolution with skills that bridge software intelligence and physical systems."
    ],
    statCallout: { text: "India's robotics market is projected to grow at 20% CAGR through 2028.", source: "Industry Report" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you interested in robotics and AI?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "bot", title: "Robotics Fundamentals", description: "Learn robotic kinematics, sensors, and actuator systems." },
      { number: "02", icon: "brain", title: "Deep Learning & Neural Networks", description: "Master CNN, RNN, and transformer architectures." },
      { number: "03", icon: "eye", title: "Computer Vision", description: "Implement object detection, tracking, and visual SLAM." },
      { number: "04", icon: "cpu", title: "Embedded AI Systems", description: "Deploy AI models on edge devices and microcontrollers." },
      { number: "05", icon: "heart", title: "Wellness Integration", description: "Yoga and mindfulness for enhanced creativity and focus." }
    ],
    careers: [
      { icon: "bot", title: "Robotics Engineer", description: "Design and program robotic systems for various applications.", demand: "high" },
      { icon: "brain", title: "AI/ML Specialist", description: "Develop intelligent algorithms for autonomous systems.", demand: "high" },
      { icon: "eye", title: "Computer Vision Engineer", description: "Build visual perception systems for robots and drones.", demand: "growing" },
      { icon: "cpu", title: "Embedded Systems Developer", description: "Create firmware for intelligent devices.", demand: "growing" },
      { icon: "factory", title: "Automation Engineer", description: "Implement industrial automation solutions.", demand: "high" }
    ],
    relatedPrograms: ["bca-artificial-intelligence-cloud-computing-devops", "btech-artificial-intelligence-machine-learning", "mca-artificial-intelligence-machine-learning-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,96,000" },
        { year: "2nd Year", amount: "₹1,96,000" },
        { year: "3rd Year", amount: "₹1,96,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: BCA Data Science, AI & Big Data
  {
    slug: "bca-data-science-artificial-intelligence-big-data-analytics",
    title: "BCA in Data Science, AI & Big Data Analytics",
    shortTitle: "BCA Data Science",
    degree: "Bachelor of Computer Applications",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bca",
    bannerImage: "/img/banner/Bachelor-of-computer-applications(BCA).jpg",
    hookLine: "Transform data into decisions. Master the science of intelligent insights.",
    overview: [
      "In an era of data explosion, this program equips students with skills to extract meaningful insights from massive datasets. Learn statistical analysis, machine learning, and big data technologies to become a data-driven decision maker.",
      "With hands-on experience in Hadoop, Spark, and modern data science tools, graduates are prepared for high-impact roles in analytics and AI across industries."
    ],
    statCallout: { text: "Data science roles grew 46% in India in 2023, with demand expected to accelerate.", source: "LinkedIn" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board", "Strong aptitude for mathematics preferred"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you comfortable with mathematics and statistics?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "bar-chart-3", title: "Statistical Analysis & ML", description: "Master statistics, probability, and machine learning algorithms." },
      { number: "02", icon: "database", title: "Big Data Technologies", description: "Hands-on with Hadoop, Spark, and distributed computing." },
      { number: "03", icon: "brain", title: "AI & Deep Learning", description: "Build neural networks and AI models for prediction." },
      { number: "04", icon: "presentation", title: "Data Visualization", description: "Create compelling visual stories with Tableau and Power BI." },
      { number: "05", icon: "lotus", title: "Mindful Analytics", description: "Yoga-enhanced focus for clearer analytical thinking." }
    ],
    careers: [
      { icon: "bar-chart-3", title: "Data Scientist", description: "Extract insights and build predictive models from data.", demand: "high" },
      { icon: "database", title: "Big Data Engineer", description: "Design and maintain large-scale data infrastructure.", demand: "high" },
      { icon: "brain", title: "Machine Learning Engineer", description: "Deploy ML models in production environments.", demand: "high" },
      { icon: "presentation", title: "Business Intelligence Analyst", description: "Transform data into actionable business insights.", demand: "growing" },
      { icon: "search", title: "Data Analyst", description: "Analyze trends and patterns to drive decisions.", demand: "high" }
    ],
    relatedPrograms: ["mca-data-science", "msc-data-science", "btech-computer-science-engineering-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,96,000" },
        { year: "2nd Year", amount: "₹1,96,000" },
        { year: "3rd Year", amount: "₹1,96,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: BCA Cloud, Cybersecurity & Ethical Hacking
  {
    slug: "bca-cloud-computing-cybersecurity-ethical-hacking",
    title: "BCA in Cloud Computing, Cybersecurity & Ethical Hacking",
    shortTitle: "BCA Cloud & Security",
    degree: "Bachelor of Computer Applications",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bca",
    bannerImage: "/img/banner/Bachelor-of-computer-applications(BCA).jpg",
    hookLine: "Secure the cloud. Protect digital assets. Lead the defense.",
    overview: [
      "This specialized program combines cloud computing expertise with cybersecurity skills. Learn to design secure cloud architectures, implement security protocols, and conduct ethical penetration testing on cloud environments.",
      "As organizations migrate to the cloud, the demand for professionals who understand both cloud infrastructure and security is skyrocketing."
    ],
    statCallout: { text: "Cloud security spending in India is expected to reach $1.5 billion by 2025.", source: "Gartner" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you interested in cloud and security technologies?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "cloud", title: "Cloud Infrastructure", description: "Master AWS, Azure, and GCP cloud platforms." },
      { number: "02", icon: "shield", title: "Cloud Security", description: "Implement security best practices in cloud environments." },
      { number: "03", icon: "terminal", title: "Ethical Hacking", description: "Learn penetration testing and vulnerability assessment." },
      { number: "04", icon: "lock", title: "Identity & Access Management", description: "Secure cloud access with IAM policies." },
      { number: "05", icon: "heart", title: "Holistic Wellness", description: "Yoga integration for stress management and focus." }
    ],
    careers: [
      { icon: "cloud", title: "Cloud Security Architect", description: "Design secure cloud infrastructure solutions.", demand: "high" },
      { icon: "shield", title: "Cloud Security Analyst", description: "Monitor and protect cloud environments from threats.", demand: "high" },
      { icon: "terminal", title: "Penetration Tester", description: "Identify vulnerabilities in cloud systems.", demand: "growing" },
      { icon: "lock", title: "IAM Specialist", description: "Manage identity and access in cloud environments.", demand: "growing" },
      { icon: "server", title: "DevSecOps Engineer", description: "Integrate security into CI/CD pipelines.", demand: "high" }
    ],
    relatedPrograms: ["bca-cybersecurity-ethical-hacking-digital-forensics", "mca-cybersecurity-ethical-hacking-cyber-forensics", "bca-artificial-intelligence-cloud-computing-devops"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,96,000" },
        { year: "2nd Year", amount: "₹1,96,000" },
        { year: "3rd Year", amount: "₹1,96,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: BCA AI, Robotics & IoT
  {
    slug: "bca-artificial-intelligence-robotics-internet-of-things",
    title: "BCA in Artificial Intelligence, Robotics & Internet of Things",
    shortTitle: "BCA AI & IoT",
    degree: "Bachelor of Computer Applications",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bca",
    bannerImage: "/img/banner/Bachelor-of-computer-applications(BCA).jpg",
    hookLine: "Connect everything. Automate anything. Build the smart world.",
    overview: [
      "This program explores the convergence of AI, robotics, and the Internet of Things. Students learn to build intelligent connected devices, smart automation systems, and IoT solutions that transform industries.",
      "From smart cities to industrial IoT, graduates are equipped to lead the connected future with skills spanning embedded systems, AI, and network protocols."
    ],
    statCallout: { text: "India's IoT market is expected to reach $15 billion by 2025.", source: "NASSCOM" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you interested in smart devices and automation?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "wifi", title: "IoT Fundamentals", description: "Learn IoT protocols, sensors, and connected systems." },
      { number: "02", icon: "bot", title: "Robotics & Automation", description: "Build autonomous robots and automation systems." },
      { number: "03", icon: "brain", title: "Edge AI", description: "Deploy AI models on IoT edge devices." },
      { number: "04", icon: "cpu", title: "Embedded Systems", description: "Program microcontrollers and embedded platforms." },
      { number: "05", icon: "lotus", title: "Mindful Innovation", description: "Yoga-enhanced creativity for innovative solutions." }
    ],
    careers: [
      { icon: "wifi", title: "IoT Solutions Architect", description: "Design end-to-end IoT systems and platforms.", demand: "high" },
      { icon: "cpu", title: "Embedded Systems Engineer", description: "Develop firmware for smart devices.", demand: "high" },
      { icon: "bot", title: "Robotics Developer", description: "Build intelligent robotic systems.", demand: "growing" },
      { icon: "brain", title: "Edge AI Engineer", description: "Deploy AI on resource-constrained devices.", demand: "growing" },
      { icon: "home", title: "Smart Systems Integrator", description: "Integrate IoT solutions for smart environments.", demand: "growing" }
    ],
    relatedPrograms: ["bca-artificial-intelligence-machine-learning-robotics", "btech-artificial-intelligence-machine-learning", "mca-artificial-intelligence-machine-learning-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,96,000" },
        { year: "2nd Year", amount: "₹1,96,000" },
        { year: "3rd Year", amount: "₹1,96,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // ==========================================
  // BBA COURSES
  // ==========================================

  // SKELETON: BBA Sports Management
  {
    slug: "bba-in-sports-management",
    title: "BBA in Sports Management",
    shortTitle: "BBA Sports",
    degree: "Bachelor of Business Administration",
    duration: "3-4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bba",
    bannerImage: "/img/banner/Bachelor-of-Business-Administration(BBA).jpg",
    hookLine: "Lead the business of sports. Manage teams, events, and athletic excellence.",
    overview: [
      "India's sports industry is booming, and this program prepares students to manage sports organizations, events, and athlete careers. Learn sports marketing, event management, and business strategy tailored to the sports ecosystem.",
      "With internships at sports organizations and exposure to major sporting events, graduates are ready to lead in this exciting industry."
    ],
    statCallout: { text: "India's sports industry is projected to reach $100 billion by 2027.", source: "KPMG" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board", "Interest in sports preferred"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you passionate about sports and business?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "trophy", title: "Sports Business Strategy", description: "Learn business models specific to sports organizations." },
      { number: "02", icon: "megaphone", title: "Sports Marketing", description: "Master athlete branding and sports sponsorship." },
      { number: "03", icon: "calendar", title: "Event Management", description: "Plan and execute major sporting events." },
      { number: "04", icon: "users", title: "Athlete Management", description: "Manage careers and contracts for sports professionals." },
      { number: "05", icon: "lotus", title: "Yoga & Wellness", description: "Unique S-VYASA approach to holistic sports management." }
    ],
    careers: [
      { icon: "trophy", title: "Sports Manager", description: "Manage sports teams and athletic organizations.", demand: "high" },
      { icon: "megaphone", title: "Sports Marketing Manager", description: "Lead marketing campaigns for sports brands.", demand: "growing" },
      { icon: "calendar", title: "Event Director", description: "Organize and manage sporting events.", demand: "growing" },
      { icon: "users", title: "Athlete Agent", description: "Represent and negotiate for professional athletes.", demand: "medium" },
      { icon: "building", title: "Sports Facility Manager", description: "Operate sports venues and facilities.", demand: "growing" }
    ],
    relatedPrograms: ["bba-business-management-digital-marketing-business-analytics", "mba-dual-specialisation", "bba-entrepreneurship-innovation-business-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" },
        { year: "3rd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: BBA Logistics & Aviation
  {
    slug: "bba-logistics-and-aviation",
    title: "BBA in Logistics & Aviation",
    shortTitle: "BBA Logistics & Aviation",
    degree: "Bachelor of Business Administration",
    duration: "3-4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bba",
    bannerImage: "/img/banner/Bachelor-of-Business-Administration(BBA).jpg",
    hookLine: "Navigate global supply chains. Take flight in aviation management.",
    overview: [
      "This specialized program combines logistics management with aviation industry expertise. Students learn supply chain optimization, airport operations, and airline management to prepare for careers in these critical industries.",
      "With Bengaluru as India's aviation hub, students gain exposure to major airlines and logistics companies through industry partnerships."
    ],
    statCallout: { text: "India's aviation industry is expected to become the third-largest by 2025.", source: "IATA" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you interested in logistics and aviation?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "plane", title: "Aviation Management", description: "Learn airline operations and airport management." },
      { number: "02", icon: "truck", title: "Supply Chain Logistics", description: "Master end-to-end supply chain optimization." },
      { number: "03", icon: "globe", title: "International Trade", description: "Understand global trade and customs regulations." },
      { number: "04", icon: "warehouse", title: "Warehouse Management", description: "Learn modern warehouse and inventory systems." },
      { number: "05", icon: "lotus", title: "Holistic Development", description: "Yoga-integrated stress management for demanding careers." }
    ],
    careers: [
      { icon: "plane", title: "Airport Operations Manager", description: "Manage airport terminals and ground operations.", demand: "high" },
      { icon: "truck", title: "Logistics Manager", description: "Optimize supply chain and distribution networks.", demand: "high" },
      { icon: "users", title: "Airline Manager", description: "Oversee airline operations and customer service.", demand: "growing" },
      { icon: "warehouse", title: "Warehouse Director", description: "Lead warehouse operations and inventory management.", demand: "growing" },
      { icon: "globe", title: "Freight Forwarding Specialist", description: "Manage international cargo and shipping.", demand: "high" }
    ],
    relatedPrograms: ["bba-logistics-supply-chain-management-port-management", "mba-logistics-supply-chain-management", "bba-business-management-digital-marketing-business-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" },
        { year: "3rd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: BBA Business, Digital Marketing & Analytics
  {
    slug: "bba-business-management-digital-marketing-business-analytics",
    title: "BBA in Business Management, Digital Marketing & Business Analytics",
    shortTitle: "BBA Digital Marketing",
    degree: "Bachelor of Business Administration",
    duration: "3-4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bba",
    bannerImage: "/img/banner/Bachelor-of-Business-Administration(BBA).jpg",
    hookLine: "Master digital strategy. Drive growth with data. Lead the marketing revolution.",
    overview: [
      "This comprehensive program combines core business management with digital marketing expertise and analytical skills. Students learn to create digital campaigns, analyze marketing data, and drive business growth through digital channels.",
      "With certifications in Google Ads, Meta, and analytics tools, graduates are ready to lead in the digital economy."
    ],
    statCallout: { text: "Digital marketing spending in India is expected to reach ₹35,000 crore by 2025.", source: "Dentsu" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you interested in digital marketing?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "megaphone", title: "Digital Marketing Strategy", description: "Create comprehensive digital marketing campaigns." },
      { number: "02", icon: "bar-chart-3", title: "Marketing Analytics", description: "Analyze campaign performance and customer data." },
      { number: "03", icon: "search", title: "SEO & SEM", description: "Master search engine optimization and marketing." },
      { number: "04", icon: "share-2", title: "Social Media Marketing", description: "Build brand presence across social platforms." },
      { number: "05", icon: "lotus", title: "Mindful Marketing", description: "Ethical marketing with wellness integration." }
    ],
    careers: [
      { icon: "megaphone", title: "Digital Marketing Manager", description: "Lead digital marketing strategy and execution.", demand: "high" },
      { icon: "bar-chart-3", title: "Marketing Analyst", description: "Analyze marketing data to optimize campaigns.", demand: "high" },
      { icon: "search", title: "SEO Specialist", description: "Improve organic search visibility and rankings.", demand: "growing" },
      { icon: "share-2", title: "Social Media Manager", description: "Manage brand presence on social platforms.", demand: "growing" },
      { icon: "mail", title: "Growth Marketing Manager", description: "Drive user acquisition and retention.", demand: "high" }
    ],
    relatedPrograms: ["mba-digital-marketing-ai", "mba-digital-business-management-data-analytics", "bba-entrepreneurship-innovation-business-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" },
        { year: "3rd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: BBA Entrepreneurship, Innovation & Analytics
  {
    slug: "bba-entrepreneurship-innovation-business-analytics",
    title: "BBA in Entrepreneurship, Innovation & Business Analytics",
    shortTitle: "BBA Entrepreneurship",
    degree: "Bachelor of Business Administration",
    duration: "3-4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bba",
    bannerImage: "/img/banner/Bachelor-of-Business-Administration(BBA).jpg",
    hookLine: "Build your startup. Innovate with purpose. Lead with data.",
    overview: [
      "This program is designed for aspiring entrepreneurs who want to combine innovative thinking with data-driven decision making. Students learn startup fundamentals, design thinking, and business analytics to build successful ventures.",
      "With access to incubators and startup mentors in Bengaluru's vibrant ecosystem, students can launch their ventures while still studying."
    ],
    statCallout: { text: "India has the world's third-largest startup ecosystem with 100+ unicorns.", source: "Startup India" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board", "Entrepreneurial mindset valued"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Do you dream of starting your own business?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "rocket", title: "Startup Fundamentals", description: "Learn to ideate, validate, and launch ventures." },
      { number: "02", icon: "lightbulb", title: "Design Thinking", description: "Apply human-centered design to solve problems." },
      { number: "03", icon: "bar-chart-3", title: "Business Analytics", description: "Make data-driven decisions for your venture." },
      { number: "04", icon: "banknote", title: "Venture Funding", description: "Understand VC, angel investing, and fundraising." },
      { number: "05", icon: "lotus", title: "Mindful Leadership", description: "Yoga-based stress management for founders." }
    ],
    careers: [
      { icon: "rocket", title: "Startup Founder", description: "Launch and lead your own venture.", demand: "growing" },
      { icon: "lightbulb", title: "Innovation Manager", description: "Drive innovation within organizations.", demand: "growing" },
      { icon: "bar-chart-3", title: "Business Analyst", description: "Provide data-driven insights for decisions.", demand: "high" },
      { icon: "briefcase", title: "Product Manager", description: "Lead product development and strategy.", demand: "high" },
      { icon: "users", title: "Venture Consultant", description: "Advise startups on strategy and growth.", demand: "medium" }
    ],
    relatedPrograms: ["mba-dual-specialisation", "bba-business-management-digital-marketing-business-analytics", "mba-pro-ai-data-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" },
        { year: "3rd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: BBA Logistics, Supply Chain & Port Management
  {
    slug: "bba-logistics-supply-chain-management-port-management",
    title: "BBA in Logistics, Supply Chain Management & Port Management",
    shortTitle: "BBA Supply Chain",
    degree: "Bachelor of Business Administration",
    duration: "3-4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bba",
    bannerImage: "/img/banner/Bachelor-of-Business-Administration(BBA).jpg",
    hookLine: "Optimize global supply chains. Master port operations. Move the world.",
    overview: [
      "This comprehensive program covers end-to-end supply chain management with specialized focus on port and maritime operations. Students learn logistics optimization, port management, and international trade facilitation.",
      "With India's growing maritime trade, graduates are in high demand for roles across shipping, ports, and logistics companies."
    ],
    statCallout: { text: "India aims to handle 2.5 billion tonnes of cargo through ports by 2025.", source: "Ministry of Ports" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Any Stream",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you interested in supply chain and logistics?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "truck", title: "Supply Chain Management", description: "Master end-to-end supply chain optimization." },
      { number: "02", icon: "anchor", title: "Port Operations", description: "Learn port management and maritime logistics." },
      { number: "03", icon: "globe", title: "International Trade", description: "Understand customs, tariffs, and trade regulations." },
      { number: "04", icon: "warehouse", title: "Inventory Management", description: "Optimize inventory and warehouse operations." },
      { number: "05", icon: "lotus", title: "Wellness Integration", description: "Stress management for demanding logistics careers." }
    ],
    careers: [
      { icon: "truck", title: "Supply Chain Manager", description: "Optimize supply chain operations.", demand: "high" },
      { icon: "anchor", title: "Port Manager", description: "Oversee port operations and cargo handling.", demand: "growing" },
      { icon: "ship", title: "Shipping Operations Manager", description: "Manage maritime shipping and freight.", demand: "growing" },
      { icon: "warehouse", title: "Logistics Director", description: "Lead logistics and distribution strategy.", demand: "high" },
      { icon: "globe", title: "Trade Compliance Officer", description: "Ensure regulatory compliance in trade.", demand: "medium" }
    ],
    relatedPrograms: ["bba-logistics-and-aviation", "mba-logistics-supply-chain-management", "bba-business-management-digital-marketing-business-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" },
        { year: "3rd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // ==========================================
  // B.COM COURSES
  // ==========================================

  // SKELETON: B.Com International Accounting & Finance with ACCA
  {
    slug: "bcom-international-accounting-finance-acca",
    title: "B.Com in International Accounting & Finance with ACCA",
    shortTitle: "B.Com ACCA",
    degree: "Bachelor of Commerce",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bcom",
    bannerImage: "/img/banner/Bachelor-of-Commerce(BCOM).jpg",
    hookLine: "Global accounting credentials. ACCA integrated. World-class career.",
    overview: [
      "This prestigious program integrates ACCA (Association of Chartered Certified Accountants) qualification with a B.Com degree. Students earn exemptions for up to 9 ACCA papers while completing their undergraduate studies.",
      "Recognized in 180+ countries, ACCA qualification opens doors to global finance and accounting careers with significantly higher earning potential."
    ],
    statCallout: { text: "ACCA members earn 33% more than non-qualified accountants on average.", source: "ACCA Global" },
    eligibility: {
      primary: "PUC / HSc / CBSE / ICSE — Commerce Stream Preferred",
      minMarks: null,
      extras: ["Completed 10+2 from a recognized board", "Commerce background preferred but not mandatory"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you interested in a global accounting career?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "globe", title: "Global Recognition", description: "ACCA qualification recognized in 180+ countries." },
      { number: "02", icon: "award", title: "9 Paper Exemptions", description: "Earn exemptions for up to 9 ACCA exams." },
      { number: "03", icon: "banknote", title: "International Finance", description: "Master global accounting standards and practices." },
      { number: "04", icon: "briefcase", title: "Big 4 Opportunities", description: "Strong placement with Big 4 and multinational firms." },
      { number: "05", icon: "lotus", title: "Balanced Excellence", description: "Yoga integration for work-life balance." }
    ],
    careers: [
      { icon: "calculator", title: "Chartered Accountant", description: "Provide accounting and financial advisory services.", demand: "high" },
      { icon: "briefcase", title: "Financial Analyst", description: "Analyze financial data for investment decisions.", demand: "high" },
      { icon: "building", title: "Audit Manager", description: "Lead audit engagements for major corporations.", demand: "high" },
      { icon: "banknote", title: "CFO", description: "Lead financial strategy at executive level.", demand: "medium" },
      { icon: "globe", title: "International Tax Consultant", description: "Advise on global tax planning.", demand: "growing" }
    ],
    relatedPrograms: ["mba-dual-specialisation", "mba-marketing-finance-business-analytics", "phd-commerce-management"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,00,000" },
        { year: "2nd Year", amount: "₹2,00,000" },
        { year: "3rd Year", amount: "₹2,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // ==========================================
  // B.TECH COURSES
  // ==========================================

  // SKELETON: NIAT Corporate B.Tech CSE
  {
    slug: "niat-corporate-btech-cse",
    title: "NIAT Corporate B.Tech in Computer Science & Engineering",
    shortTitle: "NIAT B.Tech CSE",
    degree: "Bachelor of Technology",
    duration: "4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "btech",
    bannerImage: "/img/banner/Bachelor-of-Technology(BTECH).jpg",
    hookLine: "Industry-designed. Corporate-ready. Launch your tech career with NIAT.",
    overview: [
      "The NIAT Corporate B.Tech is an industry-academia partnership program designed to produce job-ready engineers. Curriculum is co-created with leading tech companies to ensure students learn skills that employers demand.",
      "With guaranteed internships, industry projects, and placement support, graduates transition seamlessly from campus to corporate environments."
    ],
    statCallout: { text: "NIAT partners report 95%+ placement rates for program graduates.", source: "NIAT" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry & Mathematics",
      minMarks: "50%",
      extras: ["PCM at 10+2 level required", "5% relaxation for SC/ST candidates"],
      quizQuestions: [
        { question: "Have you completed 10+2 with PCM?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "handshake", title: "Industry Partnership", description: "Curriculum co-designed with corporate partners." },
      { number: "02", icon: "briefcase", title: "Guaranteed Internships", description: "Mandatory internships with partner companies." },
      { number: "03", icon: "code", title: "Project-Based Learning", description: "Real corporate projects throughout the program." },
      { number: "04", icon: "award", title: "Industry Certifications", description: "Earn recognized certifications during studies." },
      { number: "05", icon: "lotus", title: "Holistic Development", description: "Yoga and wellness for balanced growth." }
    ],
    careers: [
      { icon: "code", title: "Software Engineer", description: "Develop software solutions at leading tech companies.", demand: "high" },
      { icon: "terminal", title: "Full Stack Developer", description: "Build end-to-end web applications.", demand: "high" },
      { icon: "database", title: "Backend Engineer", description: "Design and build scalable backend systems.", demand: "high" },
      { icon: "smartphone", title: "Mobile Developer", description: "Create mobile applications for iOS and Android.", demand: "growing" },
      { icon: "settings", title: "DevOps Engineer", description: "Manage infrastructure and deployment pipelines.", demand: "high" }
    ],
    relatedPrograms: ["btech-computer-science-engineering", "btech-artificial-intelligence-machine-learning", "mca-cloud-computing-devops"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" },
        { year: "3rd Year", amount: "₹2,50,000" },
        { year: "4th Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: B.Tech CSE
  {
    slug: "btech-computer-science-engineering",
    title: "B.Tech in Computer Science & Engineering",
    shortTitle: "B.Tech CSE",
    degree: "Bachelor of Technology",
    duration: "4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "btech",
    bannerImage: "/img/banner/Bachelor-of-Technology(BTECH).jpg",
    hookLine: "The foundation of tech excellence. Build systems that change the world.",
    overview: [
      "The flagship B.Tech CSE program provides a comprehensive foundation in computer science and engineering. Students master programming, algorithms, systems design, and software engineering principles.",
      "With a blend of theoretical rigor and practical projects, graduates are prepared for roles across the technology industry."
    ],
    statCallout: { text: "CSE graduates have the highest starting salaries among engineering disciplines.", source: "AICTE" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry & Mathematics",
      minMarks: "50%",
      extras: ["PCM at 10+2 level required", "5% relaxation for SC/ST candidates"],
      quizQuestions: [
        { question: "Have you completed 10+2 with PCM?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "code", title: "Core CS Foundation", description: "Master algorithms, data structures, and programming." },
      { number: "02", icon: "layers", title: "Systems Design", description: "Learn operating systems, networks, and databases." },
      { number: "03", icon: "terminal", title: "Software Engineering", description: "Industry-standard software development practices." },
      { number: "04", icon: "git-branch", title: "Version Control & DevOps", description: "Modern development workflows and tools." },
      { number: "05", icon: "lotus", title: "Balanced Growth", description: "Yoga integration for mental clarity and focus." }
    ],
    careers: [
      { icon: "code", title: "Software Engineer", description: "Build software products and platforms.", demand: "high" },
      { icon: "terminal", title: "Systems Engineer", description: "Design and maintain computing systems.", demand: "high" },
      { icon: "database", title: "Database Administrator", description: "Manage organizational data infrastructure.", demand: "growing" },
      { icon: "network", title: "Network Engineer", description: "Design and manage network infrastructure.", demand: "growing" },
      { icon: "briefcase", title: "Technical Consultant", description: "Advise organizations on technology solutions.", demand: "medium" }
    ],
    relatedPrograms: ["btech-artificial-intelligence-machine-learning", "btech-computer-science-engineering-data-science", "niat-corporate-btech-cse"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" },
        { year: "3rd Year", amount: "₹2,50,000" },
        { year: "4th Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: B.Tech CS & IT
  {
    slug: "btech-computer-science-information-technology",
    title: "B.Tech in Computer Science & Information Technology",
    shortTitle: "B.Tech CS & IT",
    degree: "Bachelor of Technology",
    duration: "4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "btech",
    bannerImage: "/img/banner/Bachelor-of-Technology(BTECH).jpg",
    hookLine: "Bridge computing and enterprise. Master the technology backbone of business.",
    overview: [
      "This program combines computer science fundamentals with information technology applications. Students learn to build and manage enterprise IT systems that power modern businesses.",
      "From software development to IT infrastructure management, graduates are versatile professionals ready for diverse tech roles."
    ],
    statCallout: { text: "India's IT services market is the largest in the world, employing 5+ million professionals.", source: "NASSCOM" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry & Mathematics",
      minMarks: "50%",
      extras: ["PCM at 10+2 level required", "5% relaxation for SC/ST candidates"],
      quizQuestions: [
        { question: "Have you completed 10+2 with PCM?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "server", title: "Enterprise IT", description: "Learn enterprise systems and IT infrastructure." },
      { number: "02", icon: "code", title: "Software Development", description: "Build applications for business needs." },
      { number: "03", icon: "database", title: "Data Management", description: "Master database design and administration." },
      { number: "04", icon: "shield", title: "IT Security", description: "Secure enterprise systems and data." },
      { number: "05", icon: "lotus", title: "Wellness Focus", description: "Yoga for work-life balance in IT careers." }
    ],
    careers: [
      { icon: "server", title: "IT Manager", description: "Lead IT operations and strategy.", demand: "high" },
      { icon: "code", title: "Application Developer", description: "Build enterprise applications.", demand: "high" },
      { icon: "database", title: "Database Administrator", description: "Manage organizational databases.", demand: "growing" },
      { icon: "network", title: "Network Administrator", description: "Maintain network infrastructure.", demand: "medium" },
      { icon: "shield", title: "IT Security Analyst", description: "Protect enterprise systems from threats.", demand: "high" }
    ],
    relatedPrograms: ["btech-computer-science-engineering", "btech-computer-science-software-engineering", "mca-cloud-computing-devops"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" },
        { year: "3rd Year", amount: "₹2,50,000" },
        { year: "4th Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: B.Tech Software Engineering
  {
    slug: "btech-computer-science-software-engineering",
    title: "B.Tech in Computer Science (Software Engineering)",
    shortTitle: "B.Tech Software Eng",
    degree: "Bachelor of Technology",
    duration: "4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "btech",
    bannerImage: "/img/banner/Bachelor-of-Technology(BTECH).jpg",
    hookLine: "Engineer software at scale. Build systems that serve millions.",
    overview: [
      "This program focuses on the engineering discipline of software development. Students learn systematic approaches to designing, building, testing, and maintaining large-scale software systems.",
      "From requirements engineering to quality assurance, graduates understand the complete software lifecycle."
    ],
    statCallout: { text: "Software engineering is consistently ranked among the top 5 careers globally.", source: "US News" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry & Mathematics",
      minMarks: "50%",
      extras: ["PCM at 10+2 level required", "5% relaxation for SC/ST candidates"],
      quizQuestions: [
        { question: "Have you completed 10+2 with PCM?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "layers", title: "Software Architecture", description: "Design scalable software architectures." },
      { number: "02", icon: "check-circle", title: "Quality Assurance", description: "Master testing and quality methodologies." },
      { number: "03", icon: "git-branch", title: "Agile Development", description: "Learn Scrum, Kanban, and agile practices." },
      { number: "04", icon: "users", title: "Team Development", description: "Collaborative software development skills." },
      { number: "05", icon: "lotus", title: "Mindful Coding", description: "Yoga for focus and creativity in development." }
    ],
    careers: [
      { icon: "code", title: "Software Engineer", description: "Build software products using best practices.", demand: "high" },
      { icon: "layers", title: "Software Architect", description: "Design system architectures at scale.", demand: "high" },
      { icon: "check-circle", title: "QA Engineer", description: "Ensure software quality through testing.", demand: "growing" },
      { icon: "users", title: "Scrum Master", description: "Lead agile development teams.", demand: "growing" },
      { icon: "briefcase", title: "Technical Lead", description: "Lead engineering teams on projects.", demand: "high" }
    ],
    relatedPrograms: ["btech-computer-science-engineering", "btech-artificial-intelligence-machine-learning", "mca-cloud-computing-devops"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" },
        { year: "3rd Year", amount: "₹2,50,000" },
        { year: "4th Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // FULLY POPULATED: B.Tech AI & ML
  {
    slug: "btech-artificial-intelligence-machine-learning",
    title: "B.Tech Computer Science (Artificial Intelligence & Machine Learning)",
    shortTitle: "B.Tech AI & ML",
    degree: "Bachelor of Technology",
    duration: "4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "btech",
    bannerImage: "/img/banner/Bachelor-of-Technology(BTECH).jpg",
    hookLine: "Build the intelligent systems that will define the next decade of technology.",
    overview: [
      "A 4-year engineering degree for students at the forefront of AI. Dive deep into principles, algorithms, and applications of artificial intelligence and machine learning — from computer vision and NLP to robotics and predictive analytics.",
      "Co-designed with industry partners to ensure graduates have skills employers demand. Integrates S-VYASA's holistic approach combining rigorous technical training with yoga practices that enhance cognitive performance and ethical awareness."
    ],
    statCallout: {
      text: "AI/ML roles saw 74% increase in demand in India, with avg salaries exceeding ₹15L for freshers.",
      source: "LinkedIn India"
    },
    eligibility: {
      primary: "10+2 with Physics, Chemistry and Mathematics",
      minMarks: "50%",
      extras: ["Must have PCM at 10+2 level", "5% relaxation for SC/ST"],
      quizQuestions: [
        { question: "Have you completed 10+2 with Physics, Chemistry & Mathematics?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate (45% for SC/ST)?", yesIsCorrect: true },
        { question: "Is your board recognized by a state or central education authority?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "brain", title: "Deep AI & ML Curriculum", description: "Neural networks, deep learning, reinforcement learning, computer vision, NLP, robotics, predictive analytics." },
      { number: "02", icon: "cpu", title: "Industry-Aligned Tech Stack", description: "Python, TensorFlow, PyTorch, scikit-learn, OpenCV, AWS/Azure/GCP cloud AI platforms." },
      { number: "03", icon: "handshake", title: "Co-Designed with Intel, IBM", description: "Curriculum developed with EdTech partners ensuring current industry demands and real-world tools." },
      { number: "04", icon: "code", title: "Project-Based Learning", description: "Build real AI/ML projects each semester, participate in hackathons and industry-sponsored challenges." },
      { number: "05", icon: "building", title: "Internships & Industry Visits", description: "Mandatory internships, guest lectures from AI researchers, exposure to Bangalore's tech ecosystem." },
      { number: "06", icon: "lotus", title: "Yoga-Enhanced Cognition", description: "Yoga and mindfulness enhancing focus, creativity, and mental resilience — giving engineers an edge." }
    ],
    careers: [
      { icon: "brain", title: "AI/ML Engineer", description: "Design, develop, deploy ML models and AI systems for enterprises with massive datasets.", demand: "high" },
      { icon: "bar-chart-3", title: "Data Scientist", description: "Extract insights using statistical analysis, ML, and visualization to drive business decisions.", demand: "high" },
      { icon: "eye", title: "Computer Vision Engineer", description: "Build systems interpreting visual information for autonomous vehicles, healthcare, security.", demand: "growing" },
      { icon: "message-square", title: "NLP Engineer", description: "Develop NLP systems for chatbots, translation, sentiment analysis applications.", demand: "growing" },
      { icon: "bot", title: "Robotics Engineer", description: "Design intelligent robotic systems for manufacturing, healthcare, and service industries.", demand: "growing" },
      { icon: "microscope", title: "AI Research Scientist", description: "Advance AI frontiers through deep learning and generative AI research.", demand: "high" }
    ],
    relatedPrograms: ["btech-computer-science-engineering-data-science", "btech-computer-science-engineering", "mca-artificial-intelligence-machine-learning-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" },
        { year: "3rd Year", amount: "₹2,50,000" },
        { year: "4th Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: B.Tech Data Science
  {
    slug: "btech-computer-science-engineering-data-science",
    title: "B.Tech in Computer Science & Engineering (Data Science)",
    shortTitle: "B.Tech Data Science",
    degree: "Bachelor of Technology",
    duration: "4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "btech",
    bannerImage: "/img/banner/Bachelor-of-Technology(BTECH).jpg",
    hookLine: "Engineer data solutions. Build the analytics infrastructure of tomorrow.",
    overview: [
      "This engineering program combines computer science fundamentals with advanced data science and analytics. Students learn to build data pipelines, create ML models, and design systems that turn data into actionable insights.",
      "With hands-on experience in big data technologies and cloud platforms, graduates are prepared for the most sought-after roles in data engineering and science."
    ],
    statCallout: { text: "Data engineering roles grew 88% in India, with salaries among the highest in tech.", source: "Indeed" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry & Mathematics",
      minMarks: "50%",
      extras: ["PCM at 10+2 level required", "5% relaxation for SC/ST candidates"],
      quizQuestions: [
        { question: "Have you completed 10+2 with PCM?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "database", title: "Data Engineering", description: "Build robust data pipelines and infrastructure." },
      { number: "02", icon: "bar-chart-3", title: "Machine Learning", description: "Develop and deploy ML models at scale." },
      { number: "03", icon: "cloud", title: "Cloud Data Platforms", description: "Master AWS, Azure, and GCP data services." },
      { number: "04", icon: "cpu", title: "Big Data Technologies", description: "Work with Hadoop, Spark, and streaming systems." },
      { number: "05", icon: "lotus", title: "Mindful Analytics", description: "Yoga for clear thinking and data interpretation." }
    ],
    careers: [
      { icon: "database", title: "Data Engineer", description: "Build and maintain data infrastructure.", demand: "high" },
      { icon: "bar-chart-3", title: "Data Scientist", description: "Extract insights and build predictive models.", demand: "high" },
      { icon: "brain", title: "ML Engineer", description: "Deploy machine learning in production.", demand: "high" },
      { icon: "presentation", title: "Analytics Engineer", description: "Create analytics solutions for businesses.", demand: "growing" },
      { icon: "cloud", title: "Cloud Data Architect", description: "Design cloud-based data solutions.", demand: "growing" }
    ],
    relatedPrograms: ["btech-artificial-intelligence-machine-learning", "msc-data-science", "mca-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" },
        { year: "3rd Year", amount: "₹2,50,000" },
        { year: "4th Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: B.Tech Cyber Security
  {
    slug: "btech-computer-science-engineering-cyber-security",
    title: "B.Tech in Computer Science & Engineering (Cyber Security)",
    shortTitle: "B.Tech Cyber Security",
    degree: "Bachelor of Technology",
    duration: "4 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "btech",
    bannerImage: "/img/banner/Bachelor-of-Technology(BTECH).jpg",
    hookLine: "Defend digital frontiers. Protect critical infrastructure. Lead cyber defense.",
    overview: [
      "This specialized engineering program focuses on cybersecurity within a computer science foundation. Students learn network security, cryptography, ethical hacking, and security operations to protect organizations from cyber threats.",
      "With India facing increasing cyber attacks, graduates are in critical demand across government, defense, and enterprise sectors."
    ],
    statCallout: { text: "India needs 1 million+ cybersecurity professionals by 2025.", source: "NASSCOM" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry & Mathematics",
      minMarks: "50%",
      extras: ["PCM at 10+2 level required", "5% relaxation for SC/ST candidates"],
      quizQuestions: [
        { question: "Have you completed 10+2 with PCM?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "shield", title: "Network Security", description: "Secure network infrastructure and communications." },
      { number: "02", icon: "lock", title: "Cryptography", description: "Master encryption and security protocols." },
      { number: "03", icon: "terminal", title: "Ethical Hacking", description: "Learn penetration testing and vulnerability assessment." },
      { number: "04", icon: "eye", title: "Security Operations", description: "Monitor and respond to security incidents." },
      { number: "05", icon: "lotus", title: "Ethical Foundation", description: "Yoga-based ethics for responsible security practice." }
    ],
    careers: [
      { icon: "shield", title: "Security Engineer", description: "Design and implement security solutions.", demand: "high" },
      { icon: "terminal", title: "Penetration Tester", description: "Identify vulnerabilities through ethical hacking.", demand: "high" },
      { icon: "eye", title: "SOC Analyst", description: "Monitor and respond to security threats.", demand: "high" },
      { icon: "lock", title: "Cryptographer", description: "Design encryption systems and protocols.", demand: "growing" },
      { icon: "briefcase", title: "CISO", description: "Lead organizational security strategy.", demand: "medium" }
    ],
    relatedPrograms: ["bca-cybersecurity-ethical-hacking-digital-forensics", "mca-cybersecurity-ethical-hacking-cyber-forensics", "msc-cybersecurity-ethical-hacking-cyber-forensics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" },
        { year: "3rd Year", amount: "₹2,50,000" },
        { year: "4th Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // ==========================================
  // B.SC COURSES
  // ==========================================

  // SKELETON: B.Sc. Computer Science
  {
    slug: "bsc-computer-science",
    title: "Bachelor of Science in Computer Science",
    shortTitle: "B.Sc. Computer Science",
    degree: "Bachelor of Science",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bsc",
    bannerImage: "/img/banner/Bachelor-of-Science(BSc).jpg",
    hookLine: "Pure computer science. Strong foundations. Endless possibilities.",
    overview: [
      "This focused undergraduate program provides deep foundations in computer science theory and practice. Students master programming, algorithms, and computational thinking without engineering prerequisites.",
      "Ideal for students who want a pure science approach to computing, with flexibility to pursue research or industry careers."
    ],
    statCallout: { text: "B.Sc. CS graduates have strong pathways to MCA and research programs.", source: "UGC" },
    eligibility: {
      primary: "10+2 from any recognized board",
      minMarks: null,
      extras: ["Mathematics at 10+2 level preferred"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you comfortable with mathematics?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "code", title: "Programming Mastery", description: "Learn multiple programming languages and paradigms." },
      { number: "02", icon: "cpu", title: "Algorithms & Theory", description: "Strong foundations in computational theory." },
      { number: "03", icon: "database", title: "Data Management", description: "Database design and management skills." },
      { number: "04", icon: "globe", title: "Web Technologies", description: "Modern web development techniques." },
      { number: "05", icon: "lotus", title: "Balanced Learning", description: "Yoga integration for enhanced focus." }
    ],
    careers: [
      { icon: "code", title: "Software Developer", description: "Build software applications and systems.", demand: "high" },
      { icon: "terminal", title: "Programmer", description: "Write and maintain code for various applications.", demand: "high" },
      { icon: "database", title: "Database Administrator", description: "Manage organizational databases.", demand: "growing" },
      { icon: "globe", title: "Web Developer", description: "Create web applications and sites.", demand: "high" },
      { icon: "microscope", title: "Research Assistant", description: "Support computer science research.", demand: "medium" }
    ],
    relatedPrograms: ["mca-data-science", "mca-artificial-intelligence-machine-learning-data-science", "bca-data-science-artificial-intelligence-big-data-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,00,000" },
        { year: "2nd Year", amount: "₹1,00,000" },
        { year: "3rd Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: B.Sc. Clinical Psychology
  {
    slug: "bsc-clinical-psychology",
    title: "Bachelor of Science in Clinical Psychology",
    shortTitle: "B.Sc. Clinical Psychology",
    degree: "Bachelor of Science",
    duration: "3 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "bsc",
    bannerImage: "/img/banner/Bachelor-of-Science(BSc).jpg",
    hookLine: "Understand the mind. Heal with science. Transform lives.",
    overview: [
      "This program provides foundations in clinical psychology with a focus on mental health assessment and intervention. Students learn psychological testing, counseling basics, and the science of mental health within S-VYASA's unique wellness-integrated approach.",
      "Aligned with RCI guidelines, graduates are prepared for further specialization in clinical psychology or related mental health fields."
    ],
    statCallout: { text: "India has only 0.3 psychiatrists per 100,000 people — mental health professionals are critically needed.", source: "WHO" },
    eligibility: {
      primary: "10+2 from any recognized board",
      minMarks: null,
      extras: ["Interest in psychology and mental health"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you passionate about mental health and helping others?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "brain", title: "Psychological Foundations", description: "Study cognitive, developmental, and abnormal psychology." },
      { number: "02", icon: "clipboard", title: "Assessment Skills", description: "Learn psychological testing and evaluation." },
      { number: "03", icon: "heart", title: "Counseling Basics", description: "Introduction to therapeutic techniques." },
      { number: "04", icon: "lotus", title: "Yoga & Mental Health", description: "Unique integration of yoga with psychological practice." },
      { number: "05", icon: "users", title: "Practical Training", description: "Clinical exposure in mental health settings." }
    ],
    careers: [
      { icon: "heart", title: "Counselor", description: "Provide counseling support in various settings.", demand: "high" },
      { icon: "brain", title: "Psychometrist", description: "Administer and score psychological tests.", demand: "growing" },
      { icon: "users", title: "Mental Health Worker", description: "Support mental health programs and services.", demand: "high" },
      { icon: "building", title: "HR Psychology Specialist", description: "Apply psychology in organizational settings.", demand: "growing" },
      { icon: "microscope", title: "Research Assistant", description: "Support psychological research projects.", demand: "medium" }
    ],
    relatedPrograms: ["msc-clinical-psychology", "msc-counselling-psychology", "msc-health-psychology"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,00,000" },
        { year: "2nd Year", amount: "₹1,00,000" },
        { year: "3rd Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "health"
  },

  // ==========================================
  // MCA COURSES
  // ==========================================

  // SKELETON: MCA Cloud & DevOps
  {
    slug: "mca-cloud-computing-devops",
    title: "MCA in Cloud Computing & DevOps",
    shortTitle: "MCA Cloud & DevOps",
    degree: "Master of Computer Applications",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mca",
    bannerImage: "/img/banner/Master-of-Computer-Applications(MCA).jpg",
    hookLine: "Master the cloud. Automate everything. Lead modern infrastructure.",
    overview: [
      "This postgraduate program specializes in cloud computing platforms and DevOps practices. Students master AWS, Azure, GCP along with containerization, orchestration, and CI/CD pipelines.",
      "With cloud adoption accelerating, graduates are in high demand for roles across tech companies and enterprises undergoing digital transformation."
    ],
    statCallout: { text: "DevOps engineers earn 25-40% more than traditional developers.", source: "Glassdoor" },
    eligibility: {
      primary: "Any B.Sc./BCA/BE/B.Tech with Computer Science/Mathematics/Statistics",
      minMarks: null,
      extras: ["Bachelor's degree in relevant field"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree in CS/IT/Mathematics/Statistics?", yesIsCorrect: true },
        { question: "Are you ready for a 2-year postgraduate commitment?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "cloud", title: "Multi-Cloud Expertise", description: "Master AWS, Azure, and GCP platforms." },
      { number: "02", icon: "git-branch", title: "CI/CD Pipelines", description: "Build automated deployment workflows." },
      { number: "03", icon: "container", title: "Containerization", description: "Docker and Kubernetes orchestration." },
      { number: "04", icon: "code", title: "Infrastructure as Code", description: "Terraform, Ansible, and cloud automation." },
      { number: "05", icon: "lotus", title: "Mindful Operations", description: "Yoga for focus in high-pressure operations." }
    ],
    careers: [
      { icon: "cloud", title: "Cloud Architect", description: "Design enterprise cloud solutions.", demand: "high" },
      { icon: "terminal", title: "DevOps Engineer", description: "Build and maintain CI/CD infrastructure.", demand: "high" },
      { icon: "server", title: "Site Reliability Engineer", description: "Ensure system reliability at scale.", demand: "high" },
      { icon: "settings", title: "Platform Engineer", description: "Build internal developer platforms.", demand: "growing" },
      { icon: "shield", title: "DevSecOps Engineer", description: "Integrate security into DevOps pipelines.", demand: "growing" }
    ],
    relatedPrograms: ["bca-artificial-intelligence-cloud-computing-devops", "mca-cybersecurity-ethical-hacking-cyber-forensics", "btech-computer-science-engineering"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,00,000" },
        { year: "2nd Year", amount: "₹2,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: MCA Cybersecurity & Forensics
  {
    slug: "mca-cybersecurity-ethical-hacking-cyber-forensics",
    title: "MCA in Cybersecurity, Ethical Hacking & Cyber Forensics",
    shortTitle: "MCA Cybersecurity",
    degree: "Master of Computer Applications",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mca",
    bannerImage: "/img/banner/Master-of-Computer-Applications(MCA).jpg",
    hookLine: "Defend the digital world. Investigate cybercrimes. Lead security operations.",
    overview: [
      "This advanced program prepares cybersecurity professionals with expertise in ethical hacking, security operations, and digital forensics. Students gain hands-on experience with industry-standard tools and techniques.",
      "With cyber threats escalating globally, graduates are critical assets for organizations across sectors."
    ],
    statCallout: { text: "Cybersecurity jobs are growing 3x faster than other IT roles.", source: "ISC2" },
    eligibility: {
      primary: "Any B.Sc./BCA/BE/B.Tech with Computer Science/Mathematics/Statistics",
      minMarks: null,
      extras: ["Bachelor's degree in relevant field"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree in CS/IT/Mathematics/Statistics?", yesIsCorrect: true },
        { question: "Are you interested in cybersecurity and ethical hacking?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "shield", title: "Advanced Security", description: "Master network, application, and cloud security." },
      { number: "02", icon: "terminal", title: "Ethical Hacking", description: "Professional penetration testing skills." },
      { number: "03", icon: "search", title: "Digital Forensics", description: "Investigate cybercrimes and analyze evidence." },
      { number: "04", icon: "eye", title: "Security Operations", description: "SOC management and incident response." },
      { number: "05", icon: "lotus", title: "Ethical Foundations", description: "Yoga-based ethics for security professionals." }
    ],
    careers: [
      { icon: "shield", title: "Security Architect", description: "Design enterprise security solutions.", demand: "high" },
      { icon: "terminal", title: "Penetration Tester", description: "Identify vulnerabilities professionally.", demand: "high" },
      { icon: "search", title: "Forensics Analyst", description: "Investigate digital crimes and incidents.", demand: "growing" },
      { icon: "eye", title: "SOC Manager", description: "Lead security operations centers.", demand: "high" },
      { icon: "briefcase", title: "CISO", description: "Lead organizational security strategy.", demand: "medium" }
    ],
    relatedPrograms: ["bca-cybersecurity-ethical-hacking-digital-forensics", "msc-cybersecurity-ethical-hacking-cyber-forensics", "btech-computer-science-engineering-cyber-security"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,00,000" },
        { year: "2nd Year", amount: "₹2,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: MCA AI, ML & Data Science
  {
    slug: "mca-artificial-intelligence-machine-learning-data-science",
    title: "MCA in Artificial Intelligence, Machine Learning & Data Science",
    shortTitle: "MCA AI & ML",
    degree: "Master of Computer Applications",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mca",
    bannerImage: "/img/banner/Master-of-Computer-Applications(MCA).jpg",
    hookLine: "Master AI at the postgraduate level. Build intelligent systems at scale.",
    overview: [
      "This advanced program provides deep expertise in artificial intelligence, machine learning, and data science. Students work on real-world AI projects and gain proficiency with cutting-edge frameworks and tools.",
      "Designed for those who want to lead AI initiatives, graduates are prepared for senior roles in AI engineering and research."
    ],
    statCallout: { text: "AI specialists command salaries 50% higher than average tech roles.", source: "Indeed" },
    eligibility: {
      primary: "Any B.Sc./BCA/BE/B.Tech with Computer Science/Mathematics/Statistics",
      minMarks: null,
      extras: ["Bachelor's degree in relevant field", "Strong mathematics background preferred"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree in CS/IT/Mathematics/Statistics?", yesIsCorrect: true },
        { question: "Are you comfortable with advanced mathematics?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "brain", title: "Advanced AI/ML", description: "Deep learning, reinforcement learning, generative AI." },
      { number: "02", icon: "eye", title: "Computer Vision", description: "Image and video analysis systems." },
      { number: "03", icon: "message-square", title: "NLP", description: "Advanced natural language processing." },
      { number: "04", icon: "bar-chart-3", title: "Data Science", description: "Statistical modeling and analytics." },
      { number: "05", icon: "lotus", title: "Mindful AI", description: "Ethical AI with wellness integration." }
    ],
    careers: [
      { icon: "brain", title: "Senior AI Engineer", description: "Lead AI system development.", demand: "high" },
      { icon: "bar-chart-3", title: "Senior Data Scientist", description: "Lead data science initiatives.", demand: "high" },
      { icon: "microscope", title: "ML Researcher", description: "Advance machine learning research.", demand: "growing" },
      { icon: "eye", title: "Computer Vision Lead", description: "Lead vision system development.", demand: "growing" },
      { icon: "briefcase", title: "AI Product Manager", description: "Lead AI product strategy.", demand: "growing" }
    ],
    relatedPrograms: ["btech-artificial-intelligence-machine-learning", "msc-artificial-intelligence-machine-learning-data-science", "mca-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,00,000" },
        { year: "2nd Year", amount: "₹2,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: MCA Data Science
  {
    slug: "mca-data-science",
    title: "MCA in Data Science",
    shortTitle: "MCA Data Science",
    degree: "Master of Computer Applications",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mca",
    bannerImage: "/img/banner/Master-of-Computer-Applications(MCA).jpg",
    hookLine: "Transform data into strategy. Lead with insights. Drive decisions.",
    overview: [
      "This program focuses specifically on data science, combining statistical analysis, machine learning, and business intelligence. Students master the complete data science lifecycle from collection to actionable insights.",
      "With organizations increasingly data-driven, graduates are essential for strategic decision-making roles."
    ],
    statCallout: { text: "Data scientists are the most in-demand role in analytics.", source: "Harvard Business Review" },
    eligibility: {
      primary: "Any B.Sc./BCA/BE/B.Tech with Computer Science/Mathematics/Statistics",
      minMarks: null,
      extras: ["Bachelor's degree in relevant field"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree in CS/IT/Mathematics/Statistics?", yesIsCorrect: true },
        { question: "Are you comfortable with statistics and programming?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "bar-chart-3", title: "Statistical Analysis", description: "Advanced statistical modeling and inference." },
      { number: "02", icon: "brain", title: "Machine Learning", description: "Predictive modeling and ML algorithms." },
      { number: "03", icon: "database", title: "Big Data", description: "Handle large-scale data processing." },
      { number: "04", icon: "presentation", title: "Visualization", description: "Create compelling data stories." },
      { number: "05", icon: "lotus", title: "Clarity Through Yoga", description: "Enhanced analytical thinking." }
    ],
    careers: [
      { icon: "bar-chart-3", title: "Data Scientist", description: "Extract insights from complex data.", demand: "high" },
      { icon: "database", title: "Data Engineer", description: "Build data infrastructure.", demand: "high" },
      { icon: "brain", title: "ML Engineer", description: "Deploy machine learning models.", demand: "high" },
      { icon: "presentation", title: "Business Analyst", description: "Translate data to business strategy.", demand: "growing" },
      { icon: "briefcase", title: "Analytics Manager", description: "Lead analytics teams and strategy.", demand: "medium" }
    ],
    relatedPrograms: ["msc-data-science", "mca-artificial-intelligence-machine-learning-data-science", "bca-data-science-artificial-intelligence-big-data-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,00,000" },
        { year: "2nd Year", amount: "₹2,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // ==========================================
  // MBA COURSES
  // ==========================================

  // FULLY POPULATED: MBA Dual Specialisation
  {
    slug: "mba-dual-specialisation",
    title: "MBA DUAL — Finance, Marketing, HR, Operations, Business Analytics, International Business",
    shortTitle: "MBA Dual Specialisation",
    degree: "Master of Business Administration",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mba",
    bannerImage: "/img/banner/Master-of-Business-Administration(MBA).jpg",
    hookLine: "Two specializations. One powerful MBA. Infinite career possibilities.",
    overview: [
      "The MBA programme is a two-year postgraduate management degree covering finance, marketing, operations, HR, and more. Elevate your business acumen with S-VYASA's unique Dual Specialisation model letting you choose two areas of expertise.",
      "After core courses, choose specialisations in Finance, Marketing, Operations, International Business, Logistics, Business Analytics, Digital Business, Healthcare Management, and more. Curriculum includes Yoga, wellness, humanities, and technology for holistic education.",
      "Designed to blend theoretical knowledge with practical skills for real-world challenges. Integrates Marketing, Finance, and Business Analytics for comprehensive business management with industry exposure."
    ],
    statCallout: {
      text: "MBA graduates with dual specializations command 25-40% higher starting salaries compared to single-specialization peers.",
      source: "Industry Analysis"
    },
    eligibility: {
      primary: "Any Bachelor's Degree from a recognized university",
      minMarks: null,
      extras: ["No age limit. Candidates with 3+ year gap may need bridge programme.", "No work experience required (optional)."],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree from a recognized university?", yesIsCorrect: true },
        { question: "Are you ready for a 2-year full-time commitment?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "git-branch", title: "Unique Dual Specialisation", description: "Choose TWO specializations from Finance, Marketing, HR, Operations, Analytics, International Business — doubling career versatility." },
      { number: "02", icon: "bar-chart-3", title: "Integrated Business Analytics", description: "Master data-driven decision-making, statistical analysis, and predictive modeling to extract actionable business insights." },
      { number: "03", icon: "trending-up", title: "Strategic Financial Management", description: "Financial analysis, budgeting, investment strategies, and risk management for executive-level decision-making." },
      { number: "04", icon: "megaphone", title: "Strategic Marketing Mastery", description: "Consumer behavior, branding, market analysis for driving effective marketing strategies in a digital-first world." },
      { number: "05", icon: "lotus", title: "Yoga-Integrated Wellness", description: "Unique S-VYASA courses in Yoga, wellness, humanities developing leaders, not just managers." },
      { number: "06", icon: "building", title: "Industry Exposure & Internships", description: "Real-world projects, corporate internships, and industry interactions for battle-ready graduates." }
    ],
    careers: [
      { icon: "target", title: "Marketing Research Analyst", description: "Conduct market research, analyze consumer trends, provide actionable strategic insights.", demand: "high" },
      { icon: "indian-rupee", title: "Financial Consultant", description: "Financial advice and consulting for individuals and businesses for optimal financial health.", demand: "high" },
      { icon: "rocket", title: "Business Development Manager", description: "Identify growth opportunities, forge strategic partnerships, drive expansion initiatives.", demand: "high" },
      { icon: "bar-chart-3", title: "Business Analyst", description: "Apply analytics to interpret data, predict trends, and support strategic decision-making.", demand: "growing" },
      { icon: "lightbulb", title: "Entrepreneur", description: "Leverage dual-domain expertise to establish and lead a successful business venture.", demand: "growing" },
      { icon: "briefcase", title: "Corporate Finance Manager", description: "Financial planning, risk assessment, and reporting for corporate entities at strategic level.", demand: "high" },
      { icon: "users", title: "Management Consultant", description: "Expert advice on organizational strategy, efficiency, transformation and improvement.", demand: "high" }
    ],
    relatedPrograms: ["mba-marketing-finance-business-analytics", "mba-digital-business-management-data-analytics", "mba-pro-ai-data-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: MBA PRO Marketing, Finance & Analytics
  {
    slug: "mba-marketing-finance-business-analytics",
    title: "MBA PRO in Marketing, Finance & Business Analytics",
    shortTitle: "MBA Marketing & Finance",
    degree: "Master of Business Administration",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mba",
    bannerImage: "/img/banner/Master-of-Business-Administration(MBA).jpg",
    hookLine: "Marketing meets finance meets data. The complete business leader.",
    overview: [
      "This comprehensive MBA combines marketing strategy, financial management, and business analytics in one powerful program. Students develop cross-functional expertise to lead in today's data-driven business environment.",
      "With industry projects and corporate internships, graduates are prepared to drive growth through integrated marketing-finance strategies."
    ],
    statCallout: { text: "CMOs with financial acumen are 2x more likely to become CEOs.", source: "McKinsey" },
    eligibility: {
      primary: "Any Bachelor's Degree from a recognized university",
      minMarks: null,
      extras: ["No work experience required"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you interested in marketing, finance, and analytics?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "megaphone", title: "Marketing Excellence", description: "Digital marketing, brand strategy, and consumer insights." },
      { number: "02", icon: "banknote", title: "Financial Mastery", description: "Corporate finance, investment, and risk management." },
      { number: "03", icon: "bar-chart-3", title: "Business Analytics", description: "Data-driven decision making and predictive modeling." },
      { number: "04", icon: "building", title: "Industry Integration", description: "Corporate projects and mentorship programs." },
      { number: "05", icon: "lotus", title: "Leadership Wellness", description: "Yoga-enhanced leadership development." }
    ],
    careers: [
      { icon: "megaphone", title: "Marketing Director", description: "Lead marketing strategy and execution.", demand: "high" },
      { icon: "banknote", title: "Finance Manager", description: "Manage corporate financial operations.", demand: "high" },
      { icon: "bar-chart-3", title: "Analytics Manager", description: "Lead data-driven business decisions.", demand: "growing" },
      { icon: "briefcase", title: "Strategy Consultant", description: "Advise on business strategy.", demand: "high" },
      { icon: "rocket", title: "Growth Director", description: "Drive revenue and market expansion.", demand: "growing" }
    ],
    relatedPrograms: ["mba-dual-specialisation", "mba-digital-marketing-ai", "mba-pro-ai-data-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: MBA PRO Hospital Admin & Medical Tourism
  {
    slug: "mba-hospital-administration-medical-tourism",
    title: "MBA PRO in Hospital Administration & Medical Tourism",
    shortTitle: "MBA Hospital Admin",
    degree: "Master of Business Administration",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mba",
    bannerImage: "/img/banner/Master-of-Business-Administration(MBA).jpg",
    hookLine: "Lead healthcare. Manage hospitals. Drive medical tourism excellence.",
    overview: [
      "This specialized MBA prepares professionals to manage hospitals and healthcare organizations while tapping into India's booming medical tourism industry. Students learn healthcare operations, quality management, and international patient services.",
      "With Bengaluru as a major medical tourism hub, graduates have unparalleled exposure to leading hospitals and healthcare networks."
    ],
    statCallout: { text: "India's medical tourism market is projected to reach $13 billion by 2026.", source: "FICCI" },
    eligibility: {
      primary: "Any Bachelor's Degree from a recognized university",
      minMarks: null,
      extras: ["Healthcare background preferred but not required"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you interested in healthcare management?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "building", title: "Hospital Operations", description: "Manage healthcare facilities efficiently." },
      { number: "02", icon: "globe", title: "Medical Tourism", description: "Lead international patient services." },
      { number: "03", icon: "check-circle", title: "Quality Management", description: "Healthcare accreditation and quality." },
      { number: "04", icon: "heart", title: "Patient Experience", description: "Enhance patient care and satisfaction." },
      { number: "05", icon: "lotus", title: "Wellness Integration", description: "S-VYASA's unique health-wellness approach." }
    ],
    careers: [
      { icon: "building", title: "Hospital Administrator", description: "Lead hospital operations and management.", demand: "high" },
      { icon: "globe", title: "Medical Tourism Manager", description: "Manage international patient services.", demand: "growing" },
      { icon: "check-circle", title: "Healthcare Quality Manager", description: "Ensure quality and accreditation.", demand: "growing" },
      { icon: "briefcase", title: "Healthcare Consultant", description: "Advise healthcare organizations.", demand: "medium" },
      { icon: "heart", title: "Patient Experience Director", description: "Lead patient satisfaction initiatives.", demand: "growing" }
    ],
    relatedPrograms: ["mba-dual-specialisation", "bachelor-of-naturopathy-yogic-sciences", "msc-health-psychology"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "health"
  },

  // SKELETON: MBA PRO Logistics & Supply Chain
  {
    slug: "mba-logistics-supply-chain-management",
    title: "MBA PRO in Logistics & Supply Chain Management",
    shortTitle: "MBA Supply Chain",
    degree: "Master of Business Administration",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mba",
    bannerImage: "/img/banner/Master-of-Business-Administration(MBA).jpg",
    hookLine: "Optimize global supply chains. Lead logistics innovation.",
    overview: [
      "This MBA specializes in supply chain management and logistics operations. Students master procurement, inventory management, distribution, and supply chain analytics for efficient global operations.",
      "With e-commerce and global trade expansion, supply chain professionals are in critical demand across industries."
    ],
    statCallout: { text: "Supply chain management roles are among the top 10 fastest-growing jobs globally.", source: "WEF" },
    eligibility: {
      primary: "Any Bachelor's Degree from a recognized university",
      minMarks: null,
      extras: ["No work experience required"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you interested in supply chain and operations?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "truck", title: "Supply Chain Strategy", description: "Design and optimize global supply chains." },
      { number: "02", icon: "warehouse", title: "Inventory Management", description: "Master inventory optimization techniques." },
      { number: "03", icon: "bar-chart-3", title: "Supply Chain Analytics", description: "Data-driven supply chain decisions." },
      { number: "04", icon: "globe", title: "Global Operations", description: "Manage international logistics." },
      { number: "05", icon: "lotus", title: "Stress Management", description: "Yoga for high-pressure operations roles." }
    ],
    careers: [
      { icon: "truck", title: "Supply Chain Director", description: "Lead supply chain strategy.", demand: "high" },
      { icon: "warehouse", title: "Operations Manager", description: "Manage warehouse and distribution.", demand: "high" },
      { icon: "bar-chart-3", title: "Supply Chain Analyst", description: "Optimize supply chain performance.", demand: "growing" },
      { icon: "globe", title: "Global Logistics Manager", description: "Manage international logistics.", demand: "high" },
      { icon: "briefcase", title: "Procurement Director", description: "Lead strategic sourcing.", demand: "medium" }
    ],
    relatedPrograms: ["bba-logistics-supply-chain-management-port-management", "bba-logistics-and-aviation", "mba-dual-specialisation"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: MBA PRO Digital Business & Data Analytics
  {
    slug: "mba-digital-business-management-data-analytics",
    title: "MBA PRO in Digital Business Management & Data Analytics",
    shortTitle: "MBA Digital Business",
    degree: "Master of Business Administration",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mba",
    bannerImage: "/img/banner/Master-of-Business-Administration(MBA).jpg",
    hookLine: "Lead digital transformation. Drive business with data.",
    overview: [
      "This MBA prepares leaders for the digital economy, combining digital business models, e-commerce, and data analytics. Students learn to drive digital transformation initiatives and make data-driven strategic decisions.",
      "With every business becoming a digital business, graduates are essential for organizations navigating digital disruption."
    ],
    statCallout: { text: "Digital transformation spending globally is expected to reach $3.4 trillion by 2026.", source: "IDC" },
    eligibility: {
      primary: "Any Bachelor's Degree from a recognized university",
      minMarks: null,
      extras: ["No work experience required"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you interested in digital business and analytics?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "globe", title: "Digital Strategy", description: "Lead digital transformation initiatives." },
      { number: "02", icon: "shopping-cart", title: "E-Commerce", description: "Master online business models." },
      { number: "03", icon: "bar-chart-3", title: "Data Analytics", description: "Drive decisions with data." },
      { number: "04", icon: "brain", title: "Digital Innovation", description: "Innovate with emerging technologies." },
      { number: "05", icon: "lotus", title: "Mindful Leadership", description: "Yoga for digital age leadership." }
    ],
    careers: [
      { icon: "globe", title: "Digital Transformation Lead", description: "Drive organizational digital change.", demand: "high" },
      { icon: "shopping-cart", title: "E-Commerce Director", description: "Lead online business operations.", demand: "high" },
      { icon: "bar-chart-3", title: "Analytics Director", description: "Lead data and analytics strategy.", demand: "growing" },
      { icon: "brain", title: "Digital Product Manager", description: "Lead digital product development.", demand: "high" },
      { icon: "briefcase", title: "Digital Strategy Consultant", description: "Advise on digital strategy.", demand: "growing" }
    ],
    relatedPrograms: ["mba-digital-marketing-ai", "mba-pro-ai-data-analytics", "mba-dual-specialisation"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: MBA PRO AI & Data Analytics
  {
    slug: "mba-pro-ai-data-analytics",
    title: "MBA PRO in AI & Data Analytics",
    shortTitle: "MBA AI & Analytics",
    degree: "Master of Business Administration",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mba",
    bannerImage: "/img/banner/Master-of-Business-Administration(MBA).jpg",
    hookLine: "Lead with AI. Decide with data. Transform business.",
    overview: [
      "This MBA combines business management with AI and advanced analytics capabilities. Students learn to leverage AI for strategic decision-making and lead organizations in the age of intelligent automation.",
      "Graduates bridge the gap between technical AI teams and business leadership, a skill set in critical demand."
    ],
    statCallout: { text: "Executives with AI skills earn 35% higher salaries than peers.", source: "Harvard Business Review" },
    eligibility: {
      primary: "Any Bachelor's Degree from a recognized university",
      minMarks: null,
      extras: ["No work experience required", "Quantitative aptitude helpful"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you comfortable with data and analytics?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "brain", title: "AI for Business", description: "Apply AI to business challenges." },
      { number: "02", icon: "bar-chart-3", title: "Advanced Analytics", description: "Predictive and prescriptive analytics." },
      { number: "03", icon: "cpu", title: "AI Strategy", description: "Lead AI transformation initiatives." },
      { number: "04", icon: "briefcase", title: "Management Core", description: "Complete MBA foundation." },
      { number: "05", icon: "lotus", title: "Ethical AI Leadership", description: "Responsible AI with wellness focus." }
    ],
    careers: [
      { icon: "brain", title: "AI Business Leader", description: "Lead AI strategy and implementation.", demand: "high" },
      { icon: "bar-chart-3", title: "Chief Analytics Officer", description: "Lead organizational analytics.", demand: "growing" },
      { icon: "briefcase", title: "AI Product Manager", description: "Manage AI product development.", demand: "high" },
      { icon: "users", title: "AI Transformation Consultant", description: "Guide AI adoption.", demand: "growing" },
      { icon: "rocket", title: "AI Startup Founder", description: "Launch AI-driven ventures.", demand: "growing" }
    ],
    relatedPrograms: ["mba-digital-business-management-data-analytics", "mba-digital-marketing-ai", "mba-dual-specialisation"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // SKELETON: MBA Digital Marketing & AI
  {
    slug: "mba-digital-marketing-ai",
    title: "MBA in Digital Marketing & AI",
    shortTitle: "MBA Digital Marketing",
    degree: "Master of Business Administration",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "mba",
    bannerImage: "/img/banner/Master-of-Business-Administration(MBA).jpg",
    hookLine: "Master AI-powered marketing. Lead the future of brand building.",
    overview: [
      "This cutting-edge MBA combines digital marketing expertise with AI and automation capabilities. Students learn to leverage AI for personalization, prediction, and marketing optimization at scale.",
      "As marketing becomes increasingly AI-driven, graduates are prepared to lead the next generation of marketing innovation."
    ],
    statCallout: { text: "AI in marketing is projected to become a $107 billion industry by 2028.", source: "Markets and Markets" },
    eligibility: {
      primary: "Any Bachelor's Degree from a recognized university",
      minMarks: null,
      extras: ["No work experience required"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you excited about digital marketing and AI?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "megaphone", title: "Digital Marketing", description: "Master all digital marketing channels." },
      { number: "02", icon: "brain", title: "AI in Marketing", description: "Apply AI for marketing optimization." },
      { number: "03", icon: "bar-chart-3", title: "Marketing Analytics", description: "Data-driven marketing decisions." },
      { number: "04", icon: "target", title: "Performance Marketing", description: "ROI-focused campaign management." },
      { number: "05", icon: "lotus", title: "Creative Wellness", description: "Yoga for marketing creativity." }
    ],
    careers: [
      { icon: "megaphone", title: "Digital Marketing Director", description: "Lead digital marketing strategy.", demand: "high" },
      { icon: "brain", title: "AI Marketing Manager", description: "Implement AI in marketing.", demand: "growing" },
      { icon: "target", title: "Performance Marketing Lead", description: "Drive marketing ROI.", demand: "high" },
      { icon: "bar-chart-3", title: "Marketing Analytics Manager", description: "Lead marketing analytics.", demand: "growing" },
      { icon: "rocket", title: "Growth Marketing Director", description: "Drive growth through marketing.", demand: "high" }
    ],
    relatedPrograms: ["bba-business-management-digital-marketing-business-analytics", "mba-digital-business-management-data-analytics", "mba-pro-ai-data-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,50,000" },
        { year: "2nd Year", amount: "₹2,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "business"
  },

  // ==========================================
  // M.SC COURSES
  // ==========================================

  // SKELETON: M.Sc. Cybersecurity & Forensics
  {
    slug: "msc-cybersecurity-ethical-hacking-cyber-forensics",
    title: "M.Sc. in Cybersecurity, Ethical Hacking & Cyber Forensics",
    shortTitle: "M.Sc. Cybersecurity",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "msc",
    bannerImage: "/img/banner/Master-of-Science(MSC).jpg",
    hookLine: "Research-grade cybersecurity expertise. Defend the digital frontier.",
    overview: [
      "This M.Sc. program provides advanced, research-oriented training in cybersecurity, ethical hacking, and digital forensics. Students engage in cutting-edge research while developing practical security skills.",
      "Ideal for those seeking deeper expertise than application-focused programs, with pathways to Ph.D. research."
    ],
    statCallout: { text: "Advanced cybersecurity specialists earn 40% more than entry-level professionals.", source: "ISC2" },
    eligibility: {
      primary: "B.Sc./BCA/BE/B.Tech with Computer Science/Mathematics/Statistics",
      minMarks: "50%",
      extras: ["Bachelor's degree in relevant field with 50% aggregate"],
      quizQuestions: [
        { question: "Have you completed a relevant Bachelor's degree?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "shield", title: "Advanced Security", description: "Deep expertise in security architecture." },
      { number: "02", icon: "terminal", title: "Offensive Security", description: "Advanced penetration testing." },
      { number: "03", icon: "search", title: "Digital Forensics", description: "Forensic investigation techniques." },
      { number: "04", icon: "microscope", title: "Research Focus", description: "Security research methodology." },
      { number: "05", icon: "lotus", title: "Ethical Practice", description: "Yoga-based ethical grounding." }
    ],
    careers: [
      { icon: "shield", title: "Security Researcher", description: "Advance cybersecurity research.", demand: "high" },
      { icon: "terminal", title: "Senior Penetration Tester", description: "Lead security assessments.", demand: "high" },
      { icon: "search", title: "Forensics Expert", description: "Expert witness and investigation.", demand: "growing" },
      { icon: "briefcase", title: "Security Consultant", description: "Strategic security advisory.", demand: "high" },
      { icon: "microscope", title: "Ph.D. Researcher", description: "Academic research career.", demand: "medium" }
    ],
    relatedPrograms: ["mca-cybersecurity-ethical-hacking-cyber-forensics", "btech-computer-science-engineering-cyber-security", "phd-computer-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: M.Sc. Data Science
  {
    slug: "msc-data-science",
    title: "M.Sc. in Data Science",
    shortTitle: "M.Sc. Data Science",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "msc",
    bannerImage: "/img/banner/Master-of-Science(MSC).jpg",
    hookLine: "Deep data science expertise. Research-driven analytics mastery.",
    overview: [
      "This M.Sc. provides rigorous training in data science with emphasis on statistical theory, machine learning research, and advanced analytics. Students develop both practical skills and research capabilities.",
      "Designed for those seeking deeper theoretical foundations than application-focused programs, with pathways to research careers."
    ],
    statCallout: { text: "M.Sc. Data Science graduates command 25% higher salaries than bachelor's holders.", source: "Glassdoor" },
    eligibility: {
      primary: "B.Sc./BCA/BE/B.Tech with relevant background",
      minMarks: "50%",
      extras: ["Strong mathematics background preferred"],
      quizQuestions: [
        { question: "Have you completed a relevant Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you strong in mathematics and statistics?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "bar-chart-3", title: "Statistical Theory", description: "Deep statistical foundations." },
      { number: "02", icon: "brain", title: "Machine Learning", description: "Advanced ML algorithms and theory." },
      { number: "03", icon: "microscope", title: "Research Methods", description: "Data science research methodology." },
      { number: "04", icon: "code", title: "Advanced Programming", description: "Scalable data science code." },
      { number: "05", icon: "lotus", title: "Analytical Clarity", description: "Yoga for clear analytical thinking." }
    ],
    careers: [
      { icon: "bar-chart-3", title: "Senior Data Scientist", description: "Lead complex data science projects.", demand: "high" },
      { icon: "brain", title: "ML Research Scientist", description: "Advance ML research.", demand: "growing" },
      { icon: "microscope", title: "Research Analyst", description: "Academic and industry research.", demand: "medium" },
      { icon: "briefcase", title: "Data Science Lead", description: "Lead data science teams.", demand: "high" },
      { icon: "presentation", title: "Analytics Consultant", description: "Strategic analytics advisory.", demand: "growing" }
    ],
    relatedPrograms: ["mca-data-science", "msc-artificial-intelligence-machine-learning-data-science", "phd-computer-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // SKELETON: M.Sc. Clinical Psychology
  {
    slug: "msc-clinical-psychology",
    title: "M.Sc. in Clinical Psychology",
    shortTitle: "M.Sc. Clinical Psychology",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "msc",
    bannerImage: "/img/banner/Master-of-Science(MSC).jpg",
    hookLine: "Heal minds. Transform lives. Lead mental health practice.",
    overview: [
      "This RCI-aligned program prepares clinical psychologists with comprehensive training in assessment, diagnosis, and therapeutic interventions. Students gain extensive clinical exposure in mental health settings.",
      "With India facing a mental health crisis, qualified clinical psychologists are critically needed across healthcare systems."
    ],
    statCallout: { text: "India has less than 1 mental health professional per 100,000 people.", source: "WHO" },
    eligibility: {
      primary: "B.A./B.Sc. in Psychology from a recognized university",
      minMarks: "50%",
      extras: ["Psychology undergraduate degree required"],
      quizQuestions: [
        { question: "Have you completed an undergraduate degree in Psychology?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "brain", title: "Clinical Assessment", description: "Comprehensive psychological assessment." },
      { number: "02", icon: "heart", title: "Psychotherapy", description: "Evidence-based therapeutic approaches." },
      { number: "03", icon: "clipboard", title: "Psychodiagnosis", description: "Mental disorder diagnosis." },
      { number: "04", icon: "lotus", title: "Yoga Therapy", description: "Unique yoga-psychology integration." },
      { number: "05", icon: "users", title: "Clinical Practicum", description: "Extensive clinical training." }
    ],
    careers: [
      { icon: "brain", title: "Clinical Psychologist", description: "Practice clinical psychology.", demand: "high" },
      { icon: "heart", title: "Psychotherapist", description: "Provide therapeutic services.", demand: "high" },
      { icon: "building", title: "Hospital Psychologist", description: "Work in healthcare settings.", demand: "growing" },
      { icon: "microscope", title: "Research Psychologist", description: "Conduct psychology research.", demand: "medium" },
      { icon: "users", title: "Mental Health Consultant", description: "Consult on mental health programs.", demand: "growing" }
    ],
    relatedPrograms: ["bsc-clinical-psychology", "msc-counselling-psychology", "msc-health-psychology"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "health"
  },

  // SKELETON: M.Sc. Neuro Psychology
  {
    slug: "msc-neuropsychology",
    title: "M.Sc. in Neuro Psychology",
    shortTitle: "M.Sc. Neuropsychology",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "msc",
    bannerImage: "/img/banner/Master-of-Science(MSC).jpg",
    hookLine: "Understand the brain. Assess cognition. Lead neuropsychological practice.",
    overview: [
      "This specialized program focuses on the relationship between brain function and behavior. Students learn neuropsychological assessment, rehabilitation, and the neural basis of cognition.",
      "With increasing awareness of neurological conditions, neuropsychologists are essential in healthcare and research settings."
    ],
    statCallout: { text: "Neurological disorders affect over 1 billion people globally.", source: "WHO" },
    eligibility: {
      primary: "B.A./B.Sc. in Psychology from a recognized university",
      minMarks: "50%",
      extras: ["Psychology undergraduate degree required"],
      quizQuestions: [
        { question: "Have you completed an undergraduate degree in Psychology?", yesIsCorrect: true },
        { question: "Are you interested in brain-behavior relationships?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "brain", title: "Neuropsychological Assessment", description: "Cognitive and neurological testing." },
      { number: "02", icon: "activity", title: "Brain-Behavior Relations", description: "Neural basis of cognition." },
      { number: "03", icon: "heart", title: "Neurorehabilitation", description: "Cognitive rehabilitation techniques." },
      { number: "04", icon: "microscope", title: "Research Methods", description: "Neuropsychological research." },
      { number: "05", icon: "lotus", title: "Yoga & Brain Health", description: "Yoga's effects on cognition." }
    ],
    careers: [
      { icon: "brain", title: "Neuropsychologist", description: "Assess and treat cognitive disorders.", demand: "high" },
      { icon: "building", title: "Hospital Neuropsychologist", description: "Work in neurological units.", demand: "growing" },
      { icon: "heart", title: "Rehabilitation Specialist", description: "Cognitive rehabilitation.", demand: "growing" },
      { icon: "microscope", title: "Neuroscience Researcher", description: "Brain-behavior research.", demand: "medium" },
      { icon: "users", title: "Neurodiagnostic Consultant", description: "Diagnostic consultation.", demand: "growing" }
    ],
    relatedPrograms: ["msc-clinical-psychology", "msc-health-psychology", "phd-allied-sciences"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "health"
  },

  // SKELETON: M.Sc. Counselling Psychology
  {
    slug: "msc-counselling-psychology",
    title: "M.Sc. in Counselling Psychology",
    shortTitle: "M.Sc. Counselling",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "msc",
    bannerImage: "/img/banner/Master-of-Science(MSC).jpg",
    hookLine: "Guide journeys. Facilitate growth. Transform through counseling.",
    overview: [
      "This program prepares professional counselors with skills in individual, group, and family counseling. Students learn diverse therapeutic approaches while developing their unique counseling style.",
      "With growing acceptance of mental health support, counseling psychologists are in demand across educational, corporate, and community settings."
    ],
    statCallout: { text: "Demand for counseling services has increased 300% since 2020.", source: "NIMHANS" },
    eligibility: {
      primary: "B.A./B.Sc. in Psychology from a recognized university",
      minMarks: "50%",
      extras: ["Psychology undergraduate degree required"],
      quizQuestions: [
        { question: "Have you completed an undergraduate degree in Psychology?", yesIsCorrect: true },
        { question: "Are you passionate about helping others through counseling?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "heart", title: "Counseling Theories", description: "Multiple therapeutic approaches." },
      { number: "02", icon: "users", title: "Individual & Group", description: "Various counseling modalities." },
      { number: "03", icon: "home", title: "Family Counseling", description: "Family systems therapy." },
      { number: "04", icon: "lotus", title: "Yoga Counseling", description: "Integrative yoga-based approaches." },
      { number: "05", icon: "clipboard", title: "Practicum", description: "Supervised counseling practice." }
    ],
    careers: [
      { icon: "heart", title: "Counseling Psychologist", description: "Provide professional counseling.", demand: "high" },
      { icon: "building", title: "School Counselor", description: "Support students in educational settings.", demand: "high" },
      { icon: "briefcase", title: "Corporate Counselor", description: "Employee assistance programs.", demand: "growing" },
      { icon: "users", title: "Family Therapist", description: "Family and relationship counseling.", demand: "growing" },
      { icon: "globe", title: "Community Counselor", description: "Community mental health.", demand: "medium" }
    ],
    relatedPrograms: ["msc-clinical-psychology", "msc-health-psychology", "bsc-clinical-psychology"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "health"
  },

  // SKELETON: M.Sc. Health Psychology
  {
    slug: "msc-health-psychology",
    title: "M.Sc. in Health Psychology",
    shortTitle: "M.Sc. Health Psychology",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "msc",
    bannerImage: "/img/banner/Master-of-Science(MSC).jpg",
    hookLine: "Psychology meets medicine. Promote health. Prevent illness.",
    overview: [
      "This program explores the psychological factors in health, illness, and healthcare. Students learn to apply psychology to health promotion, disease prevention, and patient care improvement.",
      "As healthcare recognizes mind-body connections, health psychologists are essential in hospitals, research, and public health."
    ],
    statCallout: { text: "Psychological factors influence 70% of health outcomes.", source: "APA" },
    eligibility: {
      primary: "B.A./B.Sc. in Psychology from a recognized university",
      minMarks: "50%",
      extras: ["Psychology undergraduate degree required"],
      quizQuestions: [
        { question: "Have you completed an undergraduate degree in Psychology?", yesIsCorrect: true },
        { question: "Are you interested in the psychology of health and wellness?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "heart-pulse", title: "Health Behavior", description: "Psychology of health behaviors." },
      { number: "02", icon: "activity", title: "Stress & Health", description: "Stress-illness relationships." },
      { number: "03", icon: "building", title: "Healthcare Settings", description: "Psychology in medical contexts." },
      { number: "04", icon: "lotus", title: "Yoga & Health", description: "S-VYASA's unique health-yoga integration." },
      { number: "05", icon: "microscope", title: "Health Research", description: "Health psychology research methods." }
    ],
    careers: [
      { icon: "heart-pulse", title: "Health Psychologist", description: "Work in healthcare settings.", demand: "high" },
      { icon: "building", title: "Hospital Psychologist", description: "Patient psychological support.", demand: "growing" },
      { icon: "globe", title: "Public Health Specialist", description: "Health promotion programs.", demand: "growing" },
      { icon: "microscope", title: "Health Researcher", description: "Research health behaviors.", demand: "medium" },
      { icon: "briefcase", title: "Corporate Wellness", description: "Workplace health programs.", demand: "growing" }
    ],
    relatedPrograms: ["msc-clinical-psychology", "msc-counselling-psychology", "mba-hospital-administration-medical-tourism"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "health"
  },

  // SKELETON: M.Sc. AI, ML & Data Science
  {
    slug: "msc-artificial-intelligence-machine-learning-data-science",
    title: "M.Sc. in Artificial Intelligence, Machine Learning & Data Science",
    shortTitle: "M.Sc. AI & ML",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "msc",
    bannerImage: "/img/banner/Master-of-Science(MSC).jpg",
    hookLine: "Research-grade AI expertise. Push the boundaries of machine intelligence.",
    overview: [
      "This M.Sc. provides advanced, research-oriented training in AI, machine learning, and data science. Students engage with cutting-edge research while developing deep technical expertise.",
      "Designed for those seeking research careers or advanced roles requiring theoretical depth beyond application-focused programs."
    ],
    statCallout: { text: "AI research publications from India grew 400% in the last decade.", source: "Nature" },
    eligibility: {
      primary: "B.Sc./BCA/BE/B.Tech with relevant background",
      minMarks: "50%",
      extras: ["Strong mathematics and programming background required"],
      quizQuestions: [
        { question: "Have you completed a relevant Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you strong in mathematics and programming?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "brain", title: "Advanced ML Theory", description: "Deep theoretical foundations." },
      { number: "02", icon: "microscope", title: "AI Research", description: "Cutting-edge research methodology." },
      { number: "03", icon: "cpu", title: "Deep Learning", description: "Advanced neural network architectures." },
      { number: "04", icon: "bar-chart-3", title: "Statistical ML", description: "Rigorous statistical approaches." },
      { number: "05", icon: "lotus", title: "Mindful Innovation", description: "Yoga for creative research." }
    ],
    careers: [
      { icon: "microscope", title: "AI Research Scientist", description: "Advance AI research.", demand: "high" },
      { icon: "brain", title: "Senior ML Engineer", description: "Lead complex ML systems.", demand: "high" },
      { icon: "building", title: "Research Lab Lead", description: "Lead AI research teams.", demand: "growing" },
      { icon: "presentation", title: "AI Academic", description: "Teach and research AI.", demand: "medium" },
      { icon: "rocket", title: "AI Startup Founder", description: "Launch AI ventures.", demand: "growing" }
    ],
    relatedPrograms: ["mca-artificial-intelligence-machine-learning-data-science", "msc-data-science", "phd-computer-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "tech"
  },

  // ==========================================
  // YOGA PROGRAMMES
  // ==========================================

  // SKELETON: B.Sc. Yoga & Vedic Therapy
  {
    slug: "bsc-yoga-vedic-therapy",
    title: "Bachelor of Science in Yoga & Vedic Therapy",
    shortTitle: "B.Sc. Yoga & Vedic",
    degree: "Bachelor of Science",
    duration: "3 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Ancient Vedic wisdom. Modern therapeutic science. Holistic healing.",
    overview: [
      "This unique program combines yoga science with Vedic therapeutic traditions. Students learn classical yoga practices alongside Vedic healing modalities in S-VYASA's serene ashram setting.",
      "With growing global interest in traditional healing, graduates are prepared for careers integrating yoga and Vedic approaches."
    ],
    statCallout: { text: "The global wellness industry is valued at $4.5 trillion.", source: "Global Wellness Institute" },
    eligibility: {
      primary: "10+2 from any recognized board",
      minMarks: null,
      extras: ["Interest in yoga and traditional healing"],
      quizQuestions: [
        { question: "Have you completed 10+2?", yesIsCorrect: true },
        { question: "Are you interested in Vedic traditions and yoga?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "lotus", title: "Classical Yoga", description: "Traditional yoga practices and philosophy." },
      { number: "02", icon: "book-open", title: "Vedic Studies", description: "Vedic texts and healing traditions." },
      { number: "03", icon: "heart-pulse", title: "Therapeutic Applications", description: "Yoga therapy for various conditions." },
      { number: "04", icon: "home", title: "Ashram Living", description: "Immersive residential experience." },
      { number: "05", icon: "microscope", title: "Research Integration", description: "S-VYASA's research-backed approach." }
    ],
    careers: [
      { icon: "lotus", title: "Yoga Therapist", description: "Provide yoga-based therapy.", demand: "high" },
      { icon: "heart-pulse", title: "Vedic Healer", description: "Practice Vedic healing modalities.", demand: "growing" },
      { icon: "presentation", title: "Yoga Educator", description: "Teach yoga and Vedic sciences.", demand: "growing" },
      { icon: "globe", title: "Wellness Consultant", description: "Integrate traditional approaches.", demand: "growing" },
      { icon: "building", title: "Retreat Director", description: "Lead wellness retreats.", demand: "medium" }
    ],
    relatedPrograms: ["bsc-yoga-therapy", "msc-yoga-vedic-therapy", "yoga-instructor-course"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹75,000" },
        { year: "2nd Year", amount: "₹75,000" },
        { year: "3rd Year", amount: "₹75,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // FULLY POPULATED: B.Sc. Yoga Therapy
  {
    slug: "bsc-yoga-therapy",
    title: "Bachelor of Science in Yoga Therapy",
    shortTitle: "B.Sc. Yoga Therapy",
    degree: "Bachelor of Science",
    duration: "3 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Where 5,000 years of yogic wisdom meets evidence-based therapeutic science.",
    overview: [
      "India's premier undergraduate programme integrating traditional yogic knowledge with modern therapeutic science. Students immerse in ancient yoga practices while learning evidence-based approaches to health and healing at S-VYASA's Prashanti Kutiram Campus.",
      "Set in the serene ashram-style campus amidst nature, students experience transformative residential education combining rigorous academics with daily yoga, meditation, and community living. S-VYASA is globally recognized with 50+ years of scientific yoga research."
    ],
    statCallout: {
      text: "The global yoga therapy market is projected to reach $21.8 billion by 2027.",
      source: "Grand View Research"
    },
    eligibility: {
      primary: "10+2 from any recognized board, any stream",
      minMarks: null,
      extras: ["Interest in yoga, health sciences, and holistic wellness preferred"],
      quizQuestions: [
        { question: "Have you completed 10+2 from a recognized board?", yesIsCorrect: true },
        { question: "Are you interested in residential campus life at Prashanti Kutiram?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "lotus", title: "Authentic Yogic Tradition", description: "Study from Patanjali's Yoga Sutras, Hatha Yoga Pradipika, Bhagavad Gita combined with 50+ years of research." },
      { number: "02", icon: "heart-pulse", title: "Evidence-Based Therapy", description: "Yoga therapy for diabetes, hypertension, anxiety, depression, musculoskeletal and respiratory conditions." },
      { number: "03", icon: "home", title: "Immersive Ashram Experience", description: "Daily yoga, meditation, pranayama, community living in serene Prashanti Kutiram campus." },
      { number: "04", icon: "microscope", title: "Research-Driven Curriculum", description: "Participate in ongoing research projects bridging traditional practices with scientific methodology." },
      { number: "05", icon: "globe", title: "International Recognition", description: "Students from 30+ countries. Alumni serve in hospitals and wellness institutions worldwide." }
    ],
    careers: [
      { icon: "heart-pulse", title: "Certified Yoga Therapist", description: "Work in hospitals, rehab centers, wellness clinics providing personalized yoga therapy.", demand: "high" },
      { icon: "users", title: "Wellness Program Director", description: "Design corporate wellness programs and retreat centers integrating yoga interventions.", demand: "growing" },
      { icon: "microscope", title: "Yoga Research Scientist", description: "Contribute to scientific evidence for yoga therapy through clinical trials and publications.", demand: "growing" },
      { icon: "presentation", title: "Yoga Educator", description: "Teach yoga science at universities and training institutions across India and internationally.", demand: "medium" },
      { icon: "globe", title: "International Yoga Consultant", description: "Serve global clients leveraging S-VYASA's internationally recognized credentials.", demand: "growing" },
      { icon: "activity", title: "Integrative Health Practitioner", description: "Work alongside medical professionals combining yoga therapy with conventional treatments.", demand: "high" }
    ],
    relatedPrograms: ["bsc-yoga-vedic-therapy", "msc-yoga-therapy", "yoga-instructor-course"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹75,000" },
        { year: "2nd Year", amount: "₹75,000" },
        { year: "3rd Year", amount: "₹75,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: M.Sc. Yoga Therapy
  {
    slug: "msc-yoga-therapy",
    title: "Master of Science in Yoga Therapy",
    shortTitle: "M.Sc. Yoga Therapy",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Advanced yoga therapy. Research expertise. Clinical mastery.",
    overview: [
      "This postgraduate program provides advanced training in yoga therapy with emphasis on clinical applications and research. Students develop expertise in therapeutic protocols for complex conditions.",
      "With S-VYASA's 50+ years of yoga research, graduates are prepared for leadership roles in yoga therapy practice and research."
    ],
    statCallout: { text: "Yoga therapy is increasingly integrated into mainstream healthcare globally.", source: "IAYT" },
    eligibility: {
      primary: "B.Sc. in Yoga/Related field from a recognized university",
      minMarks: null,
      extras: ["Undergraduate degree in yoga or related health field"],
      quizQuestions: [
        { question: "Have you completed a relevant undergraduate degree?", yesIsCorrect: true },
        { question: "Are you committed to residential study at Prashanti?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "heart-pulse", title: "Advanced Therapeutics", description: "Complex condition management." },
      { number: "02", icon: "microscope", title: "Research Methods", description: "Yoga research methodology." },
      { number: "03", icon: "clipboard", title: "Clinical Training", description: "Supervised clinical practice." },
      { number: "04", icon: "lotus", title: "Deepened Practice", description: "Advanced personal practice." },
      { number: "05", icon: "globe", title: "Global Perspectives", description: "International yoga therapy standards." }
    ],
    careers: [
      { icon: "heart-pulse", title: "Senior Yoga Therapist", description: "Lead yoga therapy practice.", demand: "high" },
      { icon: "microscope", title: "Yoga Researcher", description: "Conduct yoga research.", demand: "growing" },
      { icon: "building", title: "Clinical Director", description: "Lead yoga therapy clinics.", demand: "growing" },
      { icon: "presentation", title: "Faculty", description: "Teach at yoga universities.", demand: "medium" },
      { icon: "globe", title: "International Consultant", description: "Global yoga therapy advisory.", demand: "growing" }
    ],
    relatedPrograms: ["bsc-yoga-therapy", "msc-yoga-vedic-therapy", "doctor-of-medicine-yoga"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,00,000" },
        { year: "2nd Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: M.Sc. Yoga & Vedic Therapy
  {
    slug: "msc-yoga-vedic-therapy",
    title: "Master of Science in Yoga & Vedic Therapy",
    shortTitle: "M.Sc. Yoga & Vedic",
    degree: "Master of Science",
    duration: "2 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Advanced integration of yoga and Vedic healing sciences.",
    overview: [
      "This advanced program deepens expertise in yoga science and Vedic therapeutic traditions. Students explore classical texts while developing therapeutic applications grounded in research.",
      "Graduates are prepared to lead in the growing field of integrative traditional healing."
    ],
    statCallout: { text: "Traditional medicine integration is a WHO priority for global health.", source: "WHO" },
    eligibility: {
      primary: "B.Sc. in Yoga/Related field from a recognized university",
      minMarks: null,
      extras: ["Undergraduate degree in yoga or related field"],
      quizQuestions: [
        { question: "Have you completed a relevant undergraduate degree?", yesIsCorrect: true },
        { question: "Are you interested in advanced Vedic studies?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "book-open", title: "Advanced Vedic Studies", description: "Deep study of Vedic texts." },
      { number: "02", icon: "lotus", title: "Yoga Philosophy", description: "Advanced yogic philosophy." },
      { number: "03", icon: "heart-pulse", title: "Therapeutic Integration", description: "Combined healing approaches." },
      { number: "04", icon: "microscope", title: "Research Focus", description: "Traditional knowledge research." },
      { number: "05", icon: "globe", title: "Global Applications", description: "International traditional healing." }
    ],
    careers: [
      { icon: "lotus", title: "Senior Yoga Therapist", description: "Advanced therapeutic practice.", demand: "high" },
      { icon: "book-open", title: "Vedic Scholar", description: "Teach and research Vedic sciences.", demand: "medium" },
      { icon: "building", title: "Wellness Director", description: "Lead traditional wellness centers.", demand: "growing" },
      { icon: "globe", title: "International Teacher", description: "Teach globally.", demand: "growing" },
      { icon: "microscope", title: "Research Scholar", description: "Traditional knowledge research.", demand: "medium" }
    ],
    relatedPrograms: ["msc-yoga-therapy", "bsc-yoga-vedic-therapy", "phd-yoga"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,00,000" },
        { year: "2nd Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: BNYS
  {
    slug: "bachelor-of-naturopathy-yogic-sciences",
    title: "Bachelor of Naturopathy & Yogic Sciences (BNYS)",
    shortTitle: "BNYS",
    degree: "Bachelor of Naturopathy & Yogic Sciences",
    duration: "5.5 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Become a licensed natural health practitioner. Heal with nature's wisdom.",
    overview: [
      "This professional degree program trains doctors in naturopathy and yoga. Students learn natural therapeutics, clinical diagnosis, and yoga medicine over 5.5 years including internship.",
      "BNYS graduates are licensed to practice as natural medicine doctors, with growing recognition in India's healthcare system."
    ],
    statCallout: { text: "India has over 500 naturopathy hospitals and is expanding rapidly.", source: "AYUSH Ministry" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry, and Biology",
      minMarks: "50%",
      extras: ["PCB at 10+2 level required", "Age limit as per CNCIM guidelines"],
      quizQuestions: [
        { question: "Have you completed 10+2 with Physics, Chemistry & Biology?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "stethoscope", title: "Medical Training", description: "Complete clinical training in diagnosis." },
      { number: "02", icon: "leaf", title: "Naturopathy", description: "Natural therapeutics and lifestyle medicine." },
      { number: "03", icon: "lotus", title: "Yoga Medicine", description: "Therapeutic yoga applications." },
      { number: "04", icon: "building", title: "Hospital Training", description: "Clinical internship experience." },
      { number: "05", icon: "award", title: "Licensed Practice", description: "Practice as registered doctor." }
    ],
    careers: [
      { icon: "stethoscope", title: "Naturopathy Doctor", description: "Practice as licensed doctor.", demand: "high" },
      { icon: "building", title: "Hospital Practitioner", description: "Work in AYUSH hospitals.", demand: "growing" },
      { icon: "lotus", title: "Yoga Medicine Specialist", description: "Integrate yoga in treatment.", demand: "growing" },
      { icon: "home", title: "Wellness Center Director", description: "Run naturopathy centers.", demand: "growing" },
      { icon: "globe", title: "International Practitioner", description: "Practice globally.", demand: "medium" }
    ],
    relatedPrograms: ["bsc-yoga-therapy", "doctor-of-medicine-yoga", "msc-yoga-therapy"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" },
        { year: "3rd Year", amount: "₹1,50,000" },
        { year: "4th Year", amount: "₹1,50,000" },
        { year: "5th Year", amount: "₹1,50,000" },
        { year: "Internship", amount: "₹75,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "health"
  },

  // SKELETON: MD Yoga
  {
    slug: "doctor-of-medicine-yoga",
    title: "Doctor of Medicine (Yoga)",
    shortTitle: "MD Yoga",
    degree: "Doctor of Medicine",
    duration: "3 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "The highest clinical degree in yoga medicine. Lead therapeutic innovation.",
    overview: [
      "This advanced doctoral program trains specialists in yoga medicine with clinical expertise and research capability. MD Yoga graduates are qualified to lead yoga therapy in clinical settings.",
      "As yoga gains recognition in mainstream medicine, MD Yoga holders are pioneers in evidence-based integration."
    ],
    statCallout: { text: "MD Yoga is recognized by CNCIM for advanced practice.", source: "AYUSH" },
    eligibility: {
      primary: "BNYS/BAMS/BHMS or equivalent medical degree",
      minMarks: null,
      extras: ["Medical degree from recognized institution"],
      quizQuestions: [
        { question: "Have you completed BNYS/BAMS/BHMS or equivalent?", yesIsCorrect: true },
        { question: "Are you ready for 3-year advanced clinical training?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "stethoscope", title: "Clinical Specialization", description: "Advanced clinical yoga medicine." },
      { number: "02", icon: "microscope", title: "Research Training", description: "Clinical research methodology." },
      { number: "03", icon: "heart-pulse", title: "Advanced Therapeutics", description: "Complex condition management." },
      { number: "04", icon: "building", title: "Hospital Practice", description: "Clinical residency." },
      { number: "05", icon: "award", title: "Specialist Qualification", description: "Recognized specialist status." }
    ],
    careers: [
      { icon: "stethoscope", title: "Yoga Medicine Specialist", description: "Lead clinical practice.", demand: "high" },
      { icon: "building", title: "Hospital Consultant", description: "Consult in hospitals.", demand: "growing" },
      { icon: "microscope", title: "Clinical Researcher", description: "Lead yoga research.", demand: "growing" },
      { icon: "presentation", title: "Medical Faculty", description: "Teach at medical institutions.", demand: "medium" },
      { icon: "globe", title: "Global Expert", description: "International consultation.", demand: "growing" }
    ],
    relatedPrograms: ["bachelor-of-naturopathy-yogic-sciences", "msc-yoga-therapy", "phd-yoga"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹2,00,000" },
        { year: "2nd Year", amount: "₹2,00,000" },
        { year: "3rd Year", amount: "₹2,00,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: PG Diploma Yoga Therapy
  {
    slug: "pg-diploma-yoga-therapy",
    title: "Post Graduate Diploma in Yoga Therapy",
    shortTitle: "PG Dip Yoga Therapy",
    degree: "Post Graduate Diploma",
    duration: "1 Year",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Intensive therapeutic training. Clinical yoga expertise in one year.",
    overview: [
      "This intensive one-year program provides focused training in yoga therapy for graduates seeking specialized therapeutic skills. Students develop clinical competence through intensive practice and training.",
      "Ideal for yoga teachers and healthcare professionals seeking to add therapeutic expertise."
    ],
    statCallout: { text: "PG Diploma holders can immediately practice yoga therapy.", source: "S-VYASA" },
    eligibility: {
      primary: "Bachelor's degree in any discipline",
      minMarks: null,
      extras: ["Any graduate degree", "Yoga practice experience preferred"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree?", yesIsCorrect: true },
        { question: "Do you have yoga practice experience?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "heart-pulse", title: "Clinical Skills", description: "Practical therapy training." },
      { number: "02", icon: "clipboard", title: "Assessment", description: "Client assessment methods." },
      { number: "03", icon: "lotus", title: "Protocol Design", description: "Therapeutic protocol creation." },
      { number: "04", icon: "users", title: "Practicum", description: "Supervised practice hours." },
      { number: "05", icon: "award", title: "Certification", description: "Recognized PG qualification." }
    ],
    careers: [
      { icon: "heart-pulse", title: "Yoga Therapist", description: "Practice yoga therapy.", demand: "high" },
      { icon: "building", title: "Wellness Center Therapist", description: "Work in wellness settings.", demand: "growing" },
      { icon: "users", title: "Corporate Wellness", description: "Corporate yoga programs.", demand: "growing" },
      { icon: "home", title: "Private Practice", description: "Independent practice.", demand: "medium" },
      { icon: "globe", title: "Online Therapist", description: "Digital therapy services.", demand: "growing" }
    ],
    relatedPrograms: ["msc-yoga-therapy", "yoga-instructor-course", "bsc-yoga-therapy"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Full Program", amount: "₹80,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: PG Diploma Yoga for Doctors
  {
    slug: "pg-diploma-yoga-for-doctors",
    title: "Post Graduate Diploma in Yoga for Doctors",
    shortTitle: "PG Dip Yoga for Doctors",
    degree: "Post Graduate Diploma",
    duration: "1 Year",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Integrative medicine for physicians. Add yoga to your clinical practice.",
    overview: [
      "This specialized program trains medical doctors to integrate yoga into their clinical practice. Designed for MBBS, BDS, BAMS, BHMS, and BNYS graduates seeking to offer integrative care.",
      "With patients increasingly seeking complementary approaches, doctors with yoga training are highly valued."
    ],
    statCallout: { text: "Integrative medicine is the fastest-growing healthcare segment.", source: "Academic Health Centers" },
    eligibility: {
      primary: "MBBS/BDS/BAMS/BHMS/BNYS or equivalent medical degree",
      minMarks: null,
      extras: ["Medical degree from recognized institution"],
      quizQuestions: [
        { question: "Are you a qualified medical doctor?", yesIsCorrect: true },
        { question: "Are you interested in integrative approaches?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "stethoscope", title: "Clinical Integration", description: "Integrate yoga in medical practice." },
      { number: "02", icon: "heart-pulse", title: "Evidence-Based", description: "Research-backed protocols." },
      { number: "03", icon: "lotus", title: "Personal Practice", description: "Develop own yoga practice." },
      { number: "04", icon: "microscope", title: "Research Exposure", description: "Yoga research methodology." },
      { number: "05", icon: "award", title: "CME Credits", description: "Continuing medical education." }
    ],
    careers: [
      { icon: "stethoscope", title: "Integrative Physician", description: "Practice integrative medicine.", demand: "high" },
      { icon: "building", title: "Hospital Consultant", description: "Offer yoga services in hospitals.", demand: "growing" },
      { icon: "microscope", title: "Clinical Researcher", description: "Research yoga in medicine.", demand: "growing" },
      { icon: "presentation", title: "Medical Educator", description: "Teach integrative medicine.", demand: "medium" },
      { icon: "globe", title: "Lifestyle Medicine Specialist", description: "Lifestyle intervention specialist.", demand: "growing" }
    ],
    relatedPrograms: ["doctor-of-medicine-yoga", "msc-yoga-therapy", "pg-diploma-yoga-therapy"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Full Program", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: YIC
  {
    slug: "yoga-instructor-course",
    title: "Yoga Instructor Course (YIC)",
    shortTitle: "YIC",
    degree: "Certificate",
    duration: "1 Month",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Transform in 30 days. Begin your yoga teaching journey.",
    overview: [
      "S-VYASA's iconic one-month residential program has trained thousands of yoga instructors. This intensive immersion combines theory, practice, and teaching methodology in the serene ashram setting.",
      "YIC graduates are qualified to teach yoga and often continue with advanced programs."
    ],
    statCallout: { text: "YIC has trained over 50,000 yoga instructors worldwide.", source: "S-VYASA" },
    eligibility: {
      primary: "10+2 or equivalent",
      minMarks: null,
      extras: ["Interest in yoga", "Physical fitness to participate"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Are you physically fit to participate in intensive yoga?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "lotus", title: "Intensive Practice", description: "Daily 6+ hours of yoga." },
      { number: "02", icon: "book-open", title: "Theory Foundation", description: "Yoga philosophy and anatomy." },
      { number: "03", icon: "presentation", title: "Teaching Skills", description: "Instructional methodology." },
      { number: "04", icon: "home", title: "Ashram Living", description: "Immersive residential experience." },
      { number: "05", icon: "award", title: "Certification", description: "Recognized YIC certificate." }
    ],
    careers: [
      { icon: "lotus", title: "Yoga Instructor", description: "Teach yoga classes.", demand: "high" },
      { icon: "building", title: "Gym/Studio Instructor", description: "Work in fitness settings.", demand: "high" },
      { icon: "users", title: "Corporate Yoga Teacher", description: "Corporate wellness programs.", demand: "growing" },
      { icon: "globe", title: "Online Yoga Teacher", description: "Digital yoga instruction.", demand: "growing" },
      { icon: "home", title: "Private Instructor", description: "Personal yoga sessions.", demand: "medium" }
    ],
    relatedPrograms: ["non-residential-yic", "pg-diploma-yoga-therapy", "bsc-yoga-therapy"],
    fee: {
      registration: "₹5,000 (Non-Refundable)",
      yearlyFees: [
        { year: "Full Program", amount: "₹30,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: Non-Residential YIC
  {
    slug: "non-residential-yic",
    title: "Non-Residential Yoga Instructor Course",
    shortTitle: "NR-YIC",
    degree: "Certificate",
    duration: "3 Months",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Yoga instructor training for working professionals. Weekend format.",
    overview: [
      "This extended-format YIC allows working professionals to become yoga instructors without leaving their jobs. Weekend classes over 3 months provide the same quality training as residential YIC.",
      "Ideal for Bengaluru residents seeking yoga certification while maintaining work commitments."
    ],
    statCallout: { text: "Weekend format with same certification as residential YIC.", source: "S-VYASA" },
    eligibility: {
      primary: "10+2 or equivalent",
      minMarks: null,
      extras: ["Bengaluru residents preferred", "Commitment to weekend attendance"],
      quizQuestions: [
        { question: "Have you completed 10+2 or equivalent?", yesIsCorrect: true },
        { question: "Can you commit to weekend classes for 3 months?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "calendar", title: "Weekend Format", description: "Learn while you work." },
      { number: "02", icon: "lotus", title: "Same Curriculum", description: "Complete YIC training." },
      { number: "03", icon: "presentation", title: "Teaching Practice", description: "Develop teaching skills." },
      { number: "04", icon: "users", title: "Community", description: "Connect with fellow learners." },
      { number: "05", icon: "award", title: "Certification", description: "YIC certificate." }
    ],
    careers: [
      { icon: "lotus", title: "Part-Time Yoga Teacher", description: "Teach alongside career.", demand: "high" },
      { icon: "building", title: "Studio Instructor", description: "Weekend/evening classes.", demand: "growing" },
      { icon: "users", title: "Corporate Trainer", description: "Workplace wellness.", demand: "growing" },
      { icon: "globe", title: "Online Teacher", description: "Digital instruction.", demand: "growing" },
      { icon: "heart", title: "Community Teacher", description: "Local yoga classes.", demand: "medium" }
    ],
    relatedPrograms: ["yoga-instructor-course", "pg-diploma-yoga-therapy", "self-management-excessive-tension"],
    fee: {
      registration: "₹5,000 (Non-Refundable)",
      yearlyFees: [
        { year: "Full Program", amount: "₹25,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: SMET
  {
    slug: "self-management-excessive-tension",
    title: "Self Management of Excessive Tension (SMET)",
    shortTitle: "SMET",
    degree: "Certificate",
    duration: "2 Days",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Two days to transform stress. S-VYASA's flagship stress management program.",
    overview: [
      "SMET is S-VYASA's internationally acclaimed stress management program developed through decades of research. This intensive 2-day workshop teaches practical techniques for managing stress through yoga.",
      "Thousands of executives, professionals, and students have benefited from this evidence-based program."
    ],
    statCallout: { text: "SMET has helped over 100,000 participants manage stress.", source: "S-VYASA" },
    eligibility: {
      primary: "Anyone 18+ years",
      minMarks: null,
      extras: ["Open to all", "No prior yoga experience required"],
      quizQuestions: [
        { question: "Are you 18 years or older?", yesIsCorrect: true },
        { question: "Are you seeking stress management solutions?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "brain", title: "Stress Science", description: "Understand stress mechanisms." },
      { number: "02", icon: "activity", title: "Relaxation Techniques", description: "Learn deep relaxation." },
      { number: "03", icon: "lotus", title: "Yoga Practices", description: "Simple effective techniques." },
      { number: "04", icon: "heart", title: "Emotional Balance", description: "Manage emotions effectively." },
      { number: "05", icon: "home", title: "Take-Home Practice", description: "Daily routine for life." }
    ],
    careers: [
      { icon: "heart", title: "Personal Wellness", description: "Lifelong stress management.", demand: "high" },
      { icon: "users", title: "Workshop Facilitator", description: "Conduct SMET workshops.", demand: "growing" },
      { icon: "building", title: "Corporate Trainer", description: "Stress programs for corporates.", demand: "growing" },
      { icon: "presentation", title: "Wellness Coach", description: "Personal stress coaching.", demand: "growing" },
      { icon: "globe", title: "Online Facilitator", description: "Digital wellness programs.", demand: "growing" }
    ],
    relatedPrograms: ["yoga-instructor-course", "ayurveda-lifestyle-management", "pg-diploma-yoga-therapy"],
    fee: {
      registration: "₹1,000 (Non-Refundable)",
      yearlyFees: [
        { year: "Full Program", amount: "₹3,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: Ayurveda Lifestyle Management
  {
    slug: "ayurveda-lifestyle-management",
    title: "Ayurveda Lifestyle Management",
    shortTitle: "Ayurveda Lifestyle",
    degree: "Certificate",
    duration: "1 Month",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Ancient Ayurvedic wisdom for modern living. Transform your lifestyle.",
    overview: [
      "This month-long program introduces Ayurvedic principles for health and lifestyle management. Students learn personalized health approaches based on individual constitution (Prakriti).",
      "Combining Ayurveda with S-VYASA's yoga expertise, graduates gain holistic wellness knowledge."
    ],
    statCallout: { text: "Ayurveda offers personalized health solutions.", source: "AYUSH" },
    eligibility: {
      primary: "Anyone 18+ years",
      minMarks: null,
      extras: ["Open to all", "Interest in natural health"],
      quizQuestions: [
        { question: "Are you 18 years or older?", yesIsCorrect: true },
        { question: "Are you interested in Ayurvedic approaches to health?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "leaf", title: "Ayurvedic Principles", description: "Foundational Ayurvedic concepts." },
      { number: "02", icon: "utensils", title: "Diet & Nutrition", description: "Constitution-based nutrition." },
      { number: "03", icon: "clock", title: "Daily Routine", description: "Dinacharya practices." },
      { number: "04", icon: "sun", title: "Seasonal Living", description: "Ritucharya guidelines." },
      { number: "05", icon: "lotus", title: "Yoga Integration", description: "Ayurveda-yoga synergy." }
    ],
    careers: [
      { icon: "heart", title: "Personal Wellness", description: "Improved personal health.", demand: "high" },
      { icon: "leaf", title: "Ayurveda Consultant", description: "Lifestyle consultation.", demand: "growing" },
      { icon: "building", title: "Wellness Advisor", description: "Wellness center roles.", demand: "growing" },
      { icon: "users", title: "Health Coach", description: "Lifestyle coaching.", demand: "growing" },
      { icon: "globe", title: "Online Wellness", description: "Digital wellness advice.", demand: "growing" }
    ],
    relatedPrograms: ["bsc-yoga-vedic-therapy", "self-management-excessive-tension", "yoga-instructor-course"],
    fee: {
      registration: "₹5,000 (Non-Refundable)",
      yearlyFees: [
        { year: "Full Program", amount: "₹25,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: Aerial Yoga Teacher Training
  {
    slug: "aerial-yoga-teacher-training",
    title: "Aerial Yoga Teacher Training",
    shortTitle: "Aerial Yoga TTC",
    degree: "Certificate",
    duration: "1 Month",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Fly into a new dimension of yoga. Become an aerial yoga instructor.",
    overview: [
      "This specialized training certifies instructors in aerial yoga, a modern yoga practice using fabric hammocks. Students learn safety, technique, and teaching methodology for this growing modality.",
      "Aerial yoga combines traditional yoga with circus arts, appealing to modern audiences."
    ],
    statCallout: { text: "Aerial yoga is one of the fastest-growing fitness trends.", source: "Fitness Industry Report" },
    eligibility: {
      primary: "Prior yoga teaching experience or YIC certificate",
      minMarks: null,
      extras: ["Physical fitness required", "No fear of heights"],
      quizQuestions: [
        { question: "Do you have yoga teaching experience or YIC?", yesIsCorrect: true },
        { question: "Are you physically fit and comfortable with heights?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "wind", title: "Aerial Techniques", description: "Master hammock yoga." },
      { number: "02", icon: "shield", title: "Safety Protocols", description: "Essential safety training." },
      { number: "03", icon: "presentation", title: "Teaching Methods", description: "Instructional techniques." },
      { number: "04", icon: "heart", title: "Therapeutic Applications", description: "Aerial yoga therapy." },
      { number: "05", icon: "award", title: "Certification", description: "Aerial yoga certification." }
    ],
    careers: [
      { icon: "wind", title: "Aerial Yoga Instructor", description: "Teach aerial yoga.", demand: "growing" },
      { icon: "building", title: "Studio Teacher", description: "Work in yoga studios.", demand: "growing" },
      { icon: "rocket", title: "Studio Owner", description: "Open aerial yoga studio.", demand: "medium" },
      { icon: "globe", title: "International Teacher", description: "Teach globally.", demand: "growing" },
      { icon: "users", title: "Fitness Instructor", description: "Add to fitness offerings.", demand: "growing" }
    ],
    relatedPrograms: ["yoga-instructor-course", "pg-diploma-yoga-therapy", "bsc-yoga-therapy"],
    fee: {
      registration: "₹5,000 (Non-Refundable)",
      yearlyFees: [
        { year: "Full Program", amount: "₹40,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: M.A. Yoga Darshanam
  {
    slug: "master-of-arts-yoga-darshanam",
    title: "Master of Arts in Yoga Darshanam",
    shortTitle: "M.A. Yoga Darshanam",
    degree: "Master of Arts",
    duration: "2 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Deep dive into yoga philosophy. Scholarly study of ancient wisdom.",
    overview: [
      "This M.A. program focuses on the philosophical and humanities aspects of yoga. Students engage deeply with classical texts, Sanskrit study, and comparative philosophy.",
      "Ideal for those seeking scholarly understanding rather than therapeutic applications."
    ],
    statCallout: { text: "Yoga philosophy scholars contribute to cultural preservation.", source: "ICCR" },
    eligibility: {
      primary: "Bachelor's degree in any discipline",
      minMarks: null,
      extras: ["Interest in philosophy and Sanskrit", "Prior yoga knowledge helpful"],
      quizQuestions: [
        { question: "Have you completed a Bachelor's degree?", yesIsCorrect: true },
        { question: "Are you interested in yoga philosophy?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "book-open", title: "Classical Texts", description: "Study Yoga Sutras, Gita, Upanishads." },
      { number: "02", icon: "languages", title: "Sanskrit", description: "Learn classical Sanskrit." },
      { number: "03", icon: "brain", title: "Philosophy", description: "Comparative yoga philosophy." },
      { number: "04", icon: "lotus", title: "Practice Integration", description: "Philosophy in practice." },
      { number: "05", icon: "microscope", title: "Research", description: "Philosophical research methods." }
    ],
    careers: [
      { icon: "book-open", title: "Yoga Scholar", description: "Academic research and writing.", demand: "medium" },
      { icon: "presentation", title: "Philosophy Teacher", description: "Teach yoga philosophy.", demand: "growing" },
      { icon: "globe", title: "Cultural Ambassador", description: "Promote Indian philosophy.", demand: "medium" },
      { icon: "microscope", title: "Researcher", description: "Text and philosophy research.", demand: "medium" },
      { icon: "building", title: "Institution Administrator", description: "Yoga institution roles.", demand: "growing" }
    ],
    relatedPrograms: ["phd-yoga", "division-yoga-humanities", "msc-yoga-therapy"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹75,000" },
        { year: "2nd Year", amount: "₹75,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // SKELETON: Division of Yoga & Humanities
  {
    slug: "division-yoga-humanities",
    title: "Division of Yoga & Humanities",
    shortTitle: "Yoga & Humanities",
    degree: "Various",
    duration: "Varies",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "yoga-programmes",
    bannerImage: "/img/banner/yoga-programs.jpg",
    hookLine: "Interdisciplinary exploration of yoga with arts, culture, and humanities.",
    overview: [
      "This division offers interdisciplinary programs connecting yoga with humanities, arts, and cultural studies. Students explore yoga's place in human culture and creative expression.",
      "Programs range from short courses to research degrees in this emerging field."
    ],
    statCallout: { text: "Yoga humanities is an emerging academic field worldwide.", source: "Academic Journals" },
    eligibility: {
      primary: "Varies by program",
      minMarks: null,
      extras: ["Contact division for specific program requirements"],
      quizQuestions: [
        { question: "Are you interested in yoga and humanities intersection?", yesIsCorrect: true },
        { question: "Have you reviewed specific program requirements?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "palette", title: "Arts Integration", description: "Yoga and creative arts." },
      { number: "02", icon: "book-open", title: "Cultural Studies", description: "Yoga in cultural context." },
      { number: "03", icon: "globe", title: "Global Perspectives", description: "International yoga studies." },
      { number: "04", icon: "microscope", title: "Research Opportunities", description: "Interdisciplinary research." },
      { number: "05", icon: "lotus", title: "Practice Foundation", description: "Grounded in yoga practice." }
    ],
    careers: [
      { icon: "palette", title: "Yoga Artist", description: "Creative expression through yoga.", demand: "growing" },
      { icon: "book-open", title: "Cultural Researcher", description: "Yoga culture research.", demand: "medium" },
      { icon: "globe", title: "Cultural Program Manager", description: "Cultural programming.", demand: "growing" },
      { icon: "presentation", title: "Academic", description: "Teach and research.", demand: "medium" },
      { icon: "building", title: "Arts Administrator", description: "Arts organization roles.", demand: "medium" }
    ],
    relatedPrograms: ["master-of-arts-yoga-darshanam", "phd-yoga", "bsc-yoga-therapy"],
    fee: {
      registration: "₹5,000 (Non-Refundable)",
      yearlyFees: [
        { year: "Program Fee", amount: "Varies by program" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "arts"
  },

  // ==========================================
  // ALLIED SCIENCES
  // ==========================================

  // SKELETON: BPT
  {
    slug: "bachelor-of-physiotherapy",
    title: "Bachelor of Physiotherapy (BPT)",
    shortTitle: "BPT",
    degree: "Bachelor of Physiotherapy",
    duration: "4.5 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "allied-sciences",
    bannerImage: "/img/banner/allied-sciences.jpg",
    hookLine: "Restore movement. Relieve pain. Transform lives through physiotherapy.",
    overview: [
      "This professional degree trains physiotherapists with comprehensive clinical skills. Students learn anatomy, biomechanics, therapeutic exercises, and electrotherapy over 4 years plus 6-month internship.",
      "S-VYASA's unique integration of yoga with physiotherapy creates distinctive practitioners."
    ],
    statCallout: { text: "India needs 5 times more physiotherapists than currently available.", source: "IAP" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry & Biology",
      minMarks: "50%",
      extras: ["PCB at 10+2 level required", "Age as per regulatory guidelines"],
      quizQuestions: [
        { question: "Have you completed 10+2 with PCB?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "activity", title: "Clinical Training", description: "Comprehensive physiotherapy practice." },
      { number: "02", icon: "heart-pulse", title: "Therapeutic Modalities", description: "Manual and electrotherapy skills." },
      { number: "03", icon: "lotus", title: "Yoga Integration", description: "Unique yoga-physio approach." },
      { number: "04", icon: "building", title: "Hospital Training", description: "Clinical internship experience." },
      { number: "05", icon: "award", title: "Licensed Practice", description: "Register as physiotherapist." }
    ],
    careers: [
      { icon: "activity", title: "Physiotherapist", description: "Practice clinical physiotherapy.", demand: "high" },
      { icon: "building", title: "Hospital Physiotherapist", description: "Work in healthcare settings.", demand: "high" },
      { icon: "trophy", title: "Sports Physiotherapist", description: "Work with athletes.", demand: "growing" },
      { icon: "heart-pulse", title: "Rehab Specialist", description: "Rehabilitation centers.", demand: "growing" },
      { icon: "home", title: "Private Practitioner", description: "Independent practice.", demand: "high" }
    ],
    relatedPrograms: ["bachelor-of-occupational-therapy", "bsc-yoga-therapy", "phd-allied-sciences"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" },
        { year: "3rd Year", amount: "₹1,50,000" },
        { year: "4th Year", amount: "₹1,50,000" },
        { year: "Internship", amount: "₹75,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "health"
  },

  // SKELETON: BOT
  {
    slug: "bachelor-of-occupational-therapy",
    title: "Bachelor of Occupational Therapy (BOT)",
    shortTitle: "BOT",
    degree: "Bachelor of Occupational Therapy",
    duration: "4.5 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "allied-sciences",
    bannerImage: "/img/banner/allied-sciences.jpg",
    hookLine: "Enable independence. Restore function. Transform daily living.",
    overview: [
      "This professional degree trains occupational therapists who help people participate in daily activities despite physical or mental challenges. Students develop assessment and intervention skills over 4 years plus internship.",
      "OT is an emerging profession in India with growing recognition and demand."
    ],
    statCallout: { text: "Occupational therapy is among the fastest-growing healthcare professions.", source: "BLS" },
    eligibility: {
      primary: "10+2 with Physics, Chemistry & Biology",
      minMarks: "50%",
      extras: ["PCB at 10+2 level required", "Age as per regulatory guidelines"],
      quizQuestions: [
        { question: "Have you completed 10+2 with PCB?", yesIsCorrect: true },
        { question: "Did you score at least 50% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "hand", title: "Functional Assessment", description: "Evaluate daily living abilities." },
      { number: "02", icon: "cog", title: "Intervention Skills", description: "Therapeutic activity design." },
      { number: "03", icon: "brain", title: "Mental Health OT", description: "Psychiatric rehabilitation." },
      { number: "04", icon: "child", title: "Pediatric OT", description: "Children's therapy skills." },
      { number: "05", icon: "building", title: "Clinical Training", description: "Hospital-based internship." }
    ],
    careers: [
      { icon: "hand", title: "Occupational Therapist", description: "Practice occupational therapy.", demand: "high" },
      { icon: "building", title: "Hospital OT", description: "Work in healthcare settings.", demand: "growing" },
      { icon: "child", title: "Pediatric OT", description: "Work with children.", demand: "growing" },
      { icon: "brain", title: "Mental Health OT", description: "Psychiatric settings.", demand: "growing" },
      { icon: "briefcase", title: "Vocational Rehab", description: "Workplace rehabilitation.", demand: "medium" }
    ],
    relatedPrograms: ["bachelor-of-physiotherapy", "msc-clinical-psychology", "phd-allied-sciences"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "1st Year", amount: "₹1,50,000" },
        { year: "2nd Year", amount: "₹1,50,000" },
        { year: "3rd Year", amount: "₹1,50,000" },
        { year: "4th Year", amount: "₹1,50,000" },
        { year: "Internship", amount: "₹75,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "health"
  },

  // ==========================================
  // PHD PROGRAMMES
  // ==========================================

  // SKELETON: Ph.D Computer Science
  {
    slug: "phd-computer-science",
    title: "Ph.D in Computer Science",
    shortTitle: "Ph.D CS",
    degree: "Doctor of Philosophy",
    duration: "3-5 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "phd-programmes",
    bannerImage: "/img/banner/phd-programs.jpg",
    hookLine: "Push the boundaries of computing. Conduct original research.",
    overview: [
      "This doctoral program trains researchers in computer science through original research contribution. Students work on cutting-edge problems in AI, cybersecurity, data science, and related areas.",
      "S-VYASA's Ph.D. program combines rigorous research with holistic development."
    ],
    statCallout: { text: "Ph.D. holders in CS are in high demand for R&D and academic roles.", source: "ACM" },
    eligibility: {
      primary: "M.Sc./MCA/M.Tech in relevant field",
      minMarks: "55%",
      extras: ["Master's degree with 55% aggregate", "NET/GATE qualified preferred"],
      quizQuestions: [
        { question: "Have you completed a relevant Master's degree?", yesIsCorrect: true },
        { question: "Did you score at least 55% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "microscope", title: "Original Research", description: "Contribute novel knowledge." },
      { number: "02", icon: "book-open", title: "Publications", description: "Publish in peer-reviewed journals." },
      { number: "03", icon: "users", title: "Collaboration", description: "Work with research community." },
      { number: "04", icon: "presentation", title: "Conferences", description: "Present at international venues." },
      { number: "05", icon: "lotus", title: "Holistic Research", description: "Yoga-enhanced research practice." }
    ],
    careers: [
      { icon: "presentation", title: "Professor", description: "Academic teaching and research.", demand: "high" },
      { icon: "microscope", title: "Research Scientist", description: "Industry R&D roles.", demand: "high" },
      { icon: "building", title: "Lab Director", description: "Lead research labs.", demand: "growing" },
      { icon: "briefcase", title: "Chief Scientist", description: "Technical leadership.", demand: "medium" },
      { icon: "rocket", title: "Research Entrepreneur", description: "Research-based startups.", demand: "growing" }
    ],
    relatedPrograms: ["phd-computer-science-engineering", "msc-data-science", "msc-artificial-intelligence-machine-learning-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Per Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "research"
  },

  // SKELETON: Ph.D CSE
  {
    slug: "phd-computer-science-engineering",
    title: "Ph.D in Computer Science & Engineering",
    shortTitle: "Ph.D CSE",
    degree: "Doctor of Philosophy",
    duration: "3-5 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "phd-programmes",
    bannerImage: "/img/banner/phd-programs.jpg",
    hookLine: "Engineering research at the doctoral level. Innovate computing systems.",
    overview: [
      "This doctoral program focuses on engineering research in computing systems. Students conduct original research on systems, architectures, and engineering problems in computer science.",
      "The CSE Ph.D. emphasizes practical innovation alongside theoretical contribution."
    ],
    statCallout: { text: "CSE Ph.D.s lead innovation in technology companies.", source: "IEEE" },
    eligibility: {
      primary: "M.Tech/ME in relevant field",
      minMarks: "55%",
      extras: ["Engineering Master's degree preferred", "GATE qualified advantageous"],
      quizQuestions: [
        { question: "Have you completed M.Tech/ME or equivalent?", yesIsCorrect: true },
        { question: "Did you score at least 55% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "cpu", title: "Systems Research", description: "Computer systems innovation." },
      { number: "02", icon: "code", title: "Engineering Solutions", description: "Practical research outcomes." },
      { number: "03", icon: "book-open", title: "Publications", description: "High-quality publications." },
      { number: "04", icon: "lightbulb", title: "Patents", description: "Innovation and IP." },
      { number: "05", icon: "lotus", title: "Mindful Research", description: "Yoga-enhanced creativity." }
    ],
    careers: [
      { icon: "cpu", title: "Systems Researcher", description: "R&D in computing systems.", demand: "high" },
      { icon: "presentation", title: "Professor", description: "Academic career.", demand: "high" },
      { icon: "building", title: "Engineering Director", description: "Lead engineering teams.", demand: "growing" },
      { icon: "lightbulb", title: "Chief Architect", description: "Technical architecture leadership.", demand: "medium" },
      { icon: "rocket", title: "Tech Entrepreneur", description: "Tech startup founder.", demand: "growing" }
    ],
    relatedPrograms: ["phd-computer-science", "btech-artificial-intelligence-machine-learning", "mca-artificial-intelligence-machine-learning-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Per Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "research"
  },

  // SKELETON: Ph.D Commerce & Management
  {
    slug: "phd-commerce-management",
    title: "Ph.D in Commerce & Management",
    shortTitle: "Ph.D Management",
    degree: "Doctor of Philosophy",
    duration: "3-5 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "phd-programmes",
    bannerImage: "/img/banner/phd-programs.jpg",
    hookLine: "Advance management knowledge. Conduct business research.",
    overview: [
      "This doctoral program trains researchers in commerce and management. Students conduct original research on business, marketing, finance, HR, and organizational topics.",
      "Ph.D. graduates contribute to management theory and practice."
    ],
    statCallout: { text: "Business Ph.D.s are essential for B-school faculty.", source: "AACSB" },
    eligibility: {
      primary: "MBA/M.Com/M.Phil in relevant field",
      minMarks: "55%",
      extras: ["Master's in business or commerce", "NET/JRF qualified preferred"],
      quizQuestions: [
        { question: "Have you completed MBA/M.Com or equivalent?", yesIsCorrect: true },
        { question: "Did you score at least 55% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "briefcase", title: "Business Research", description: "Rigorous management research." },
      { number: "02", icon: "book-open", title: "Publications", description: "Publish in management journals." },
      { number: "03", icon: "bar-chart-3", title: "Quantitative Methods", description: "Research methodology." },
      { number: "04", icon: "users", title: "Case Studies", description: "Industry case research." },
      { number: "05", icon: "lotus", title: "Ethical Research", description: "Values-based research." }
    ],
    careers: [
      { icon: "presentation", title: "B-School Professor", description: "Teach at business schools.", demand: "high" },
      { icon: "microscope", title: "Business Researcher", description: "Industry research roles.", demand: "growing" },
      { icon: "briefcase", title: "Consultant", description: "Research-based consulting.", demand: "growing" },
      { icon: "building", title: "Think Tank", description: "Policy research.", demand: "medium" },
      { icon: "lightbulb", title: "Research Director", description: "Lead research initiatives.", demand: "medium" }
    ],
    relatedPrograms: ["mba-dual-specialisation", "bcom-international-accounting-finance-acca", "mba-pro-ai-data-analytics"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Per Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "research"
  },

  // SKELETON: Ph.D Applied Sciences
  {
    slug: "phd-applied-sciences",
    title: "Ph.D in Applied Sciences",
    shortTitle: "Ph.D Applied Sciences",
    degree: "Doctor of Philosophy",
    duration: "3-5 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "phd-programmes",
    bannerImage: "/img/banner/phd-programs.jpg",
    hookLine: "Applied science research. Bridge theory and practice.",
    overview: [
      "This doctoral program focuses on applied science research with practical applications. Students conduct research addressing real-world problems through scientific methodology.",
      "Applied sciences Ph.D. contributes directly to societal benefit."
    ],
    statCallout: { text: "Applied research translates knowledge to practice.", source: "Science" },
    eligibility: {
      primary: "M.Sc. in relevant science discipline",
      minMarks: "55%",
      extras: ["Master's in science field", "NET qualified preferred"],
      quizQuestions: [
        { question: "Have you completed M.Sc. in a science discipline?", yesIsCorrect: true },
        { question: "Did you score at least 55% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "flask-conical", title: "Applied Research", description: "Practical application focus." },
      { number: "02", icon: "lightbulb", title: "Innovation", description: "Translate research to practice." },
      { number: "03", icon: "book-open", title: "Publications", description: "Peer-reviewed publications." },
      { number: "04", icon: "users", title: "Industry Connect", description: "Industry research partnerships." },
      { number: "05", icon: "lotus", title: "Holistic Science", description: "Integrated research approach." }
    ],
    careers: [
      { icon: "flask-conical", title: "Research Scientist", description: "Applied research roles.", demand: "high" },
      { icon: "presentation", title: "Faculty", description: "Academic positions.", demand: "high" },
      { icon: "building", title: "Industry R&D", description: "Corporate research.", demand: "growing" },
      { icon: "lightbulb", title: "Innovation Lead", description: "R&D leadership.", demand: "growing" },
      { icon: "briefcase", title: "Science Consultant", description: "Scientific consulting.", demand: "medium" }
    ],
    relatedPrograms: ["phd-computer-science", "phd-allied-sciences", "msc-data-science"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Per Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "research"
  },

  // SKELETON: Ph.D Allied Sciences
  {
    slug: "phd-allied-sciences",
    title: "Ph.D in Allied Sciences",
    shortTitle: "Ph.D Allied Sciences",
    degree: "Doctor of Philosophy",
    duration: "3-5 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "phd-programmes",
    bannerImage: "/img/banner/phd-programs.jpg",
    hookLine: "Advance healthcare sciences. Research in allied health.",
    overview: [
      "This doctoral program trains researchers in allied health sciences including physiotherapy, occupational therapy, and psychology. Students contribute original knowledge to healthcare fields.",
      "Allied sciences research improves healthcare practice and patient outcomes."
    ],
    statCallout: { text: "Allied health research is essential for evidence-based practice.", source: "WHO" },
    eligibility: {
      primary: "Master's in Allied Health field",
      minMarks: "55%",
      extras: ["MPT/MOT/M.Sc. in relevant field", "Research aptitude required"],
      quizQuestions: [
        { question: "Have you completed a relevant Master's degree?", yesIsCorrect: true },
        { question: "Did you score at least 55% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "heart-pulse", title: "Clinical Research", description: "Healthcare research focus." },
      { number: "02", icon: "microscope", title: "Evidence Generation", description: "Build evidence base." },
      { number: "03", icon: "book-open", title: "Publications", description: "Publish research findings." },
      { number: "04", icon: "users", title: "Clinical Trials", description: "Conduct clinical studies." },
      { number: "05", icon: "lotus", title: "Holistic Approach", description: "Integrative research." }
    ],
    careers: [
      { icon: "microscope", title: "Clinical Researcher", description: "Healthcare research roles.", demand: "high" },
      { icon: "presentation", title: "Faculty", description: "Teach in allied health.", demand: "high" },
      { icon: "building", title: "Research Director", description: "Lead research programs.", demand: "growing" },
      { icon: "briefcase", title: "Policy Advisor", description: "Healthcare policy roles.", demand: "medium" },
      { icon: "globe", title: "Global Health Researcher", description: "International research.", demand: "growing" }
    ],
    relatedPrograms: ["bachelor-of-physiotherapy", "bachelor-of-occupational-therapy", "msc-clinical-psychology"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Per Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "research"
  },

  // SKELETON: Ph.D English
  {
    slug: "phd-english",
    title: "Ph.D in English",
    shortTitle: "Ph.D English",
    degree: "Doctor of Philosophy",
    duration: "3-5 Years",
    campus: "Sattva Global City Campus, Bengaluru",
    campusType: "gcc",
    category: "phd-programmes",
    bannerImage: "/img/banner/phd-programs.jpg",
    hookLine: "Literary research. Advance English studies.",
    overview: [
      "This doctoral program trains researchers in English literature and linguistics. Students contribute original scholarship to literary studies, cultural analysis, and language research.",
      "English Ph.D. graduates enrich academic understanding of literature and language."
    ],
    statCallout: { text: "English faculty remain essential for humanities education.", source: "MLA" },
    eligibility: {
      primary: "M.A. in English or related field",
      minMarks: "55%",
      extras: ["Master's in English or literature", "NET qualified preferred"],
      quizQuestions: [
        { question: "Have you completed M.A. in English?", yesIsCorrect: true },
        { question: "Did you score at least 55% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "book-open", title: "Literary Research", description: "Original literary scholarship." },
      { number: "02", icon: "languages", title: "Linguistics", description: "Language research." },
      { number: "03", icon: "pen-tool", title: "Critical Theory", description: "Theoretical frameworks." },
      { number: "04", icon: "globe", title: "World Literature", description: "Global literary perspectives." },
      { number: "05", icon: "lotus", title: "Contemplative Study", description: "Mindful scholarship." }
    ],
    careers: [
      { icon: "presentation", title: "Professor", description: "Teach English literature.", demand: "high" },
      { icon: "book-open", title: "Literary Scholar", description: "Academic research.", demand: "medium" },
      { icon: "pen-tool", title: "Editor", description: "Academic publishing.", demand: "growing" },
      { icon: "building", title: "Cultural Critic", description: "Cultural commentary.", demand: "medium" },
      { icon: "globe", title: "International Academic", description: "Global academic career.", demand: "medium" }
    ],
    relatedPrograms: ["master-of-arts-yoga-darshanam", "division-yoga-humanities", "phd-yoga"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Per Year", amount: "₹75,000" }
      ]
    },
    applyLink: "https://applynow.svyasa.edu.in/",
    brochureLink: null,
    domainTheme: "arts"
  },

  // SKELETON: Ph.D Yoga
  {
    slug: "phd-yoga",
    title: "Ph.D in Yoga",
    shortTitle: "Ph.D Yoga",
    degree: "Doctor of Philosophy",
    duration: "3-5 Years",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "phd-programmes",
    bannerImage: "/img/banner/phd-programs.jpg",
    hookLine: "Advance yoga science. Conduct original yoga research.",
    overview: [
      "This doctoral program is the pinnacle of yoga academic study. Students conduct original research contributing to yoga science, therapy, philosophy, or practice methodology.",
      "S-VYASA's Ph.D. in Yoga is globally respected, building on 50+ years of institutional research."
    ],
    statCallout: { text: "S-VYASA leads India in yoga research publications.", source: "PubMed" },
    eligibility: {
      primary: "M.Sc./M.A. in Yoga or related field",
      minMarks: "55%",
      extras: ["Master's in yoga or allied field", "Research proposal required"],
      quizQuestions: [
        { question: "Have you completed M.Sc./M.A. in Yoga or related field?", yesIsCorrect: true },
        { question: "Did you score at least 55% aggregate?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "microscope", title: "Original Research", description: "Novel yoga research." },
      { number: "02", icon: "book-open", title: "Publications", description: "Peer-reviewed publications." },
      { number: "03", icon: "lotus", title: "Practice Depth", description: "Advanced personal practice." },
      { number: "04", icon: "globe", title: "Global Network", description: "International research community." },
      { number: "05", icon: "heart-pulse", title: "Clinical Research", description: "Yoga therapy research." }
    ],
    careers: [
      { icon: "presentation", title: "Professor", description: "Teach at yoga universities.", demand: "high" },
      { icon: "microscope", title: "Yoga Researcher", description: "Lead yoga research.", demand: "growing" },
      { icon: "building", title: "Research Director", description: "Lead research institutions.", demand: "growing" },
      { icon: "globe", title: "International Expert", description: "Global yoga authority.", demand: "growing" },
      { icon: "book-open", title: "Author", description: "Publish yoga texts.", demand: "medium" }
    ],
    relatedPrograms: ["msc-yoga-therapy", "doctor-of-medicine-yoga", "master-of-arts-yoga-darshanam"],
    fee: {
      registration: "₹25,000 (Non-Refundable Admin ₹10,000 + Application ₹1,000)",
      yearlyFees: [
        { year: "Per Year", amount: "₹1,00,000" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "yoga"
  },

  // ==========================================
  // D.SC / D.LITT
  // ==========================================

  // SKELETON: D.Sc., D.Litt
  {
    slug: "dsc-dlitt",
    title: "Doctor of Science (D.Sc.) / Doctor of Letters (D.Litt.)",
    shortTitle: "D.Sc. / D.Litt.",
    degree: "Honorary Doctorate",
    duration: "Varies",
    campus: "Prashanti Kutiram Campus, Bengaluru",
    campusType: "prashanti",
    category: "dsc-dlitt",
    bannerImage: "/img/banner/phd-programs.jpg",
    hookLine: "The highest academic distinction. Recognition of distinguished scholarship.",
    overview: [
      "D.Sc. and D.Litt. are the highest academic distinctions awarded for exceptional contribution to science or humanities. These degrees recognize a substantial body of published work that has advanced knowledge in the field.",
      "Awarded to distinguished scholars whose work represents significant original contribution to their discipline."
    ],
    statCallout: { text: "D.Sc./D.Litt. represents the pinnacle of academic recognition.", source: "UGC" },
    eligibility: {
      primary: "Ph.D. with substantial publications",
      minMarks: null,
      extras: ["Ph.D. degree required", "Significant published work", "Typically 10+ years post-Ph.D."],
      quizQuestions: [
        { question: "Do you hold a Ph.D. degree?", yesIsCorrect: true },
        { question: "Do you have substantial published work in your field?", yesIsCorrect: true }
      ]
    },
    highlights: [
      { number: "01", icon: "crown", title: "Highest Distinction", description: "Apex academic recognition." },
      { number: "02", icon: "book-open", title: "Body of Work", description: "Substantial publications." },
      { number: "03", icon: "award", title: "Peer Recognition", description: "Expert committee review." },
      { number: "04", icon: "globe", title: "International Standing", description: "Global academic recognition." },
      { number: "05", icon: "star", title: "Lifetime Achievement", description: "Career recognition." }
    ],
    careers: [
      { icon: "crown", title: "Distinguished Scholar", description: "Senior academic leadership.", demand: "medium" },
      { icon: "presentation", title: "Professor Emeritus", description: "Honored academic position.", demand: "medium" },
      { icon: "globe", title: "Global Expert", description: "International authority.", demand: "medium" },
      { icon: "book-open", title: "Author", description: "Authoritative publications.", demand: "medium" },
      { icon: "award", title: "Advisor", description: "Policy and academic advisory.", demand: "medium" }
    ],
    relatedPrograms: ["phd-yoga", "phd-computer-science", "phd-commerce-management"],
    fee: {
      registration: "Contact University",
      yearlyFees: [
        { year: "Evaluation Fee", amount: "Contact University" }
      ]
    },
    applyLink: "https://svyasauniversity.dhi-edu.com/svyasa_svyasa/#/instructionPage;formName=pre_admission_registration;tenantId=svyasa_svyasa",
    brochureLink: null,
    domainTheme: "research"
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(c => c.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getCoursesByCategory(categorySlug: string): Course[] {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return [];
  return cat.programSlugs.map(s => getCourseBySlug(s)).filter((c): c is Course => !!c);
}

export function getRelatedCourses(slug: string, limit = 3): Course[] {
  const course = getCourseBySlug(slug);
  if (!course) return [];
  const explicit = course.relatedPrograms.map(s => getCourseBySlug(s)).filter((c): c is Course => !!c);
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const sameCat = getCoursesByCategory(course.category).filter(c => c.slug !== slug && !course.relatedPrograms.includes(c.slug));
  return [...explicit, ...sameCat].slice(0, limit);
}

export function searchCourses(query: string): Course[] {
  const q = query.toLowerCase();
  return courses.filter(c => 
    c.title.toLowerCase().includes(q) || 
    c.shortTitle.toLowerCase().includes(q) || 
    c.hookLine.toLowerCase().includes(q) ||
    c.degree.toLowerCase().includes(q)
  );
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getAllCourses(): Course[] {
  return courses;
}

export function getCoursesByCampus(campusType: "gcc" | "prashanti"): Course[] {
  return courses.filter(c => c.campusType === campusType);
}

export function getCoursesByLevel(level: Category["level"]): Course[] {
  const matchingCategories = categories.filter(cat => cat.level === level);
  const slugs = matchingCategories.flatMap(cat => cat.programSlugs);
  return slugs.map(s => getCourseBySlug(s)).filter((c): c is Course => !!c);
}

export function getCoursesByDomainTheme(theme: Course["domainTheme"]): Course[] {
  return courses.filter(c => c.domainTheme === theme);
}
