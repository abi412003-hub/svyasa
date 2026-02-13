// Training portal course data

export interface TrainingCourse {
  id: string;
  title: string;
  category: "yoga-wellness" | "ayurveda" | "government-psu" | "signature";
  categoryLabel: string;
  duration: string;
  mode: string;
  description: string;
  targetAudience: string;
  learningPoints: string[];
  certification: string;
  fee: string;
}

export const trainingCategories = [
  {
    slug: "yoga-wellness",
    title: "Yoga & Wellness Certifications",
    icon: "Flower2",
    count: "5+ courses",
    description: "Research-backed yoga training programs from India's premier yoga university. From foundational YIC to advanced therapeutic modules.",
    note: "YIC is S-VYASA's flagship program since 1986 — the gold standard in yoga instructor training.",
  },
  {
    slug: "ayurveda",
    title: "Ayurveda & Integrative Health",
    icon: "Leaf",
    count: "3+ courses",
    description: "Traditional Ayurvedic wisdom combined with modern integrative health practices. Learn preventive care and holistic lifestyle management.",
  },
  {
    slug: "government-psu",
    title: "Government & PSU Programs",
    icon: "Building2",
    count: "5+ programs",
    description: "Customised capacity-building, wellness, and training programs for government departments and public sector undertakings.",
    note: "These programs are conducted as capacity-building / in-service training.",
  },
  {
    slug: "signature",
    title: "Special Signature Programs",
    icon: "Sparkles",
    count: "3+ programs",
    description: "Unique programs on consciousness, leadership, and values-based living — reflecting S-VYASA's spiritual and academic heritage.",
  },
];

export const trainingCourses: TrainingCourse[] = [
  // Yoga & Wellness
  {
    id: "yic",
    title: "Yoga Instructor's Course (YIC)",
    category: "yoga-wellness",
    categoryLabel: "Yoga & Wellness",
    duration: "1 Month",
    mode: "Online / On-Campus",
    description: "S-VYASA's flagship yoga instructor training — comprehensive, research-based, and globally recognized since 1986.",
    targetAudience: "Aspiring yoga instructors, fitness professionals, healthcare workers, and yoga enthusiasts seeking formal certification.",
    learningPoints: [
      "Foundations of yoga philosophy and practice",
      "Asana, pranayama, and meditation techniques",
      "Teaching methodology and class management",
      "Anatomy and physiology for yoga instructors",
      "Introduction to yoga therapy principles",
    ],
    certification: "Certificate of Proficiency — Yoga Instructor, issued by S-VYASA University",
    fee: "₹15,000",
  },
  {
    id: "ytic",
    title: "Yoga Therapy Instructor Course (YTIC 1–10)",
    category: "yoga-wellness",
    categoryLabel: "Yoga & Wellness",
    duration: "10 Modules",
    mode: "Online",
    description: "A modular deep-dive into yoga therapy — covering specific conditions, therapeutic protocols, and evidence-based practices.",
    targetAudience: "Certified yoga instructors, healthcare professionals, and therapists looking to specialize in yoga therapy.",
    learningPoints: [
      "Condition-specific yoga therapy protocols",
      "Evidence-based therapeutic yoga techniques",
      "Case study approach to yoga therapy",
      "Integration with conventional medicine",
      "Client assessment and progress tracking",
    ],
    certification: "Certificate of Completion per module, issued by S-VYASA University",
    fee: "₹5,000 per module",
  },
  {
    id: "antc",
    title: "ANTC (Advanced Yoga Teacher Training)",
    category: "yoga-wellness",
    categoryLabel: "Yoga & Wellness",
    duration: "2 Weeks",
    mode: "Online / Hybrid",
    description: "Advanced training for experienced yoga teachers seeking deeper expertise in teaching techniques and therapeutic applications.",
    targetAudience: "Experienced yoga teachers with minimum 1 year teaching experience.",
    learningPoints: [
      "Advanced asana and pranayama practices",
      "Therapeutic yoga applications",
      "Advanced teaching methodologies",
      "Yoga philosophy and psychology deep-dive",
    ],
    certification: "Certificate of Advanced Training, issued by S-VYASA University",
    fee: "₹8,000",
  },
  {
    id: "smet",
    title: "SMET (Self Management of Excessive Tension)",
    category: "yoga-wellness",
    categoryLabel: "Yoga & Wellness",
    duration: "2 Days",
    mode: "Online / On-Campus",
    description: "A scientifically designed stress-relief program combining yoga and mindfulness techniques for immediate impact.",
    targetAudience: "Corporate professionals, students, anyone experiencing stress or burnout.",
    learningPoints: [
      "Science of stress and its effects",
      "Cyclic Meditation technique",
      "Quick stress-relief practices for daily life",
    ],
    certification: "Certificate of Participation, issued by S-VYASA University",
    fee: "₹2,500",
  },
  {
    id: "advanced-asana",
    title: "Advanced Asana Modules",
    category: "yoga-wellness",
    categoryLabel: "Yoga & Wellness",
    duration: "1 Week",
    mode: "Online",
    description: "Intensive modules focusing on advanced asana practice, alignment, and sequencing for experienced practitioners.",
    targetAudience: "Yoga practitioners and instructors seeking to deepen their asana practice.",
    learningPoints: [
      "Advanced asana techniques and alignment",
      "Sequencing for therapeutic effect",
      "Modifications and variations",
    ],
    certification: "Certificate of Completion, issued by S-VYASA University",
    fee: "Contact for details",
  },
  // Ayurveda
  {
    id: "ayurveda-training",
    title: "Ayurveda Training Course",
    category: "ayurveda",
    categoryLabel: "Ayurveda & Integrative Health",
    duration: "2 Weeks",
    mode: "Online",
    description: "Comprehensive introduction to Ayurvedic principles, diagnosis, and lifestyle management for holistic wellness.",
    targetAudience: "Healthcare professionals, wellness coaches, yoga instructors, and anyone interested in Ayurveda.",
    learningPoints: [
      "Fundamentals of Ayurvedic philosophy",
      "Prakriti analysis and dosha balancing",
      "Ayurvedic nutrition and diet planning",
      "Herbal remedies and daily routines",
    ],
    certification: "Certificate of Completion, issued by S-VYASA University",
    fee: "₹6,000",
  },
  {
    id: "integrative-lifestyle",
    title: "Integrative Lifestyle Management",
    category: "ayurveda",
    categoryLabel: "Ayurveda & Integrative Health",
    duration: "1 Week",
    mode: "Online",
    description: "A holistic approach to lifestyle management integrating Yoga, Ayurveda, and modern wellness science.",
    targetAudience: "Health-conscious individuals, corporate wellness managers, and lifestyle coaches.",
    learningPoints: [
      "Integrating yoga and Ayurveda in daily life",
      "Stress management through holistic approaches",
      "Nutrition and sleep optimization",
    ],
    certification: "Certificate of Completion, issued by S-VYASA University",
    fee: "Contact for details",
  },
  {
    id: "preventive-health",
    title: "Preventive Health Modules",
    category: "ayurveda",
    categoryLabel: "Ayurveda & Integrative Health",
    duration: "5 Days",
    mode: "Online",
    description: "Short intensive modules on preventive healthcare using traditional and evidence-based methods.",
    targetAudience: "General public, healthcare workers, and wellness enthusiasts.",
    learningPoints: [
      "Preventive health strategies from Ayurveda",
      "Role of yoga in disease prevention",
      "Building immunity through lifestyle",
    ],
    certification: "Certificate of Participation, issued by S-VYASA University",
    fee: "Contact for details",
  },
  // Government & PSU
  {
    id: "dopt",
    title: "DOPT Training Programs",
    category: "government-psu",
    categoryLabel: "Government & PSU",
    duration: "Custom",
    mode: "Online / Hybrid",
    description: "Yoga and wellness training programs designed for Department of Personnel & Training (Govt. of India) officers.",
    targetAudience: "Government officers nominated through DOPT.",
    learningPoints: [
      "Stress management for government officers",
      "Yoga practices for desk-bound professionals",
      "Leadership and mindfulness training",
    ],
    certification: "Certificate of Training, issued by S-VYASA University",
    fee: "Institutional pricing on request",
  },
  {
    id: "ongc",
    title: "ONGC Wellness Programs",
    category: "government-psu",
    categoryLabel: "Government & PSU",
    duration: "Custom",
    mode: "On-Campus / Hybrid",
    description: "Customised wellness and stress-management programs for ONGC employees across locations.",
    targetAudience: "ONGC employees and management.",
    learningPoints: [
      "Workplace wellness and yoga practices",
      "Managing occupational stress",
      "Team building through yoga",
    ],
    certification: "Certificate of Participation, issued by S-VYASA University",
    fee: "Institutional pricing on request",
  },
  {
    id: "powergrid",
    title: "Power Grid Training Programs",
    category: "government-psu",
    categoryLabel: "Government & PSU",
    duration: "Custom",
    mode: "Online / Hybrid",
    description: "Wellness and capacity-building programs tailored for Power Grid Corporation employees.",
    targetAudience: "Power Grid Corporation employees.",
    learningPoints: [
      "Holistic wellness for energy sector professionals",
      "Yoga for physical and mental resilience",
      "Stress and fatigue management",
    ],
    certification: "Certificate of Training, issued by S-VYASA University",
    fee: "Institutional pricing on request",
  },
  {
    id: "cdot",
    title: "CDOT Programs",
    category: "government-psu",
    categoryLabel: "Government & PSU",
    duration: "Custom",
    mode: "Online",
    description: "Online yoga and wellness programs designed for CDOT professionals.",
    targetAudience: "CDOT employees.",
    learningPoints: [
      "Digital wellness and screen fatigue management",
      "Yoga for tech professionals",
      "Mindfulness practices",
    ],
    certification: "Certificate of Training, issued by S-VYASA University",
    fee: "Institutional pricing on request",
  },
  {
    id: "custom-csr",
    title: "Custom CSR / Capacity Building",
    category: "government-psu",
    categoryLabel: "Government & PSU",
    duration: "Custom",
    mode: "Flexible",
    description: "Bespoke training modules for CSR initiatives and organizational capacity building through yoga and wellness.",
    targetAudience: "Organizations seeking CSR-aligned wellness programs.",
    learningPoints: [
      "Custom-designed wellness modules",
      "Impact assessment and reporting",
      "Scalable program delivery",
    ],
    certification: "Certificate as per program design, issued by S-VYASA University",
    fee: "Contact for details",
  },
  // Signature
  {
    id: "essay-chandran",
    title: "Essay / Chandran Programs",
    category: "signature",
    categoryLabel: "Special Signature",
    duration: "Varies",
    mode: "Online",
    description: "Unique programs exploring the intersection of traditional knowledge systems and contemporary thought.",
    targetAudience: "Scholars, researchers, and seekers of deeper philosophical understanding.",
    learningPoints: [
      "Exploration of traditional knowledge systems",
      "Contemporary interpretations of ancient wisdom",
      "Critical thinking and reflective practice",
    ],
    certification: "Certificate of Participation, issued by S-VYASA University",
    fee: "Contact for details",
  },
  {
    id: "consciousness-leadership",
    title: "Consciousness & Leadership Modules",
    category: "signature",
    categoryLabel: "Special Signature",
    duration: "1 Week",
    mode: "Online",
    description: "Transformative modules on consciousness-based leadership drawing from Vedantic philosophy and modern management.",
    targetAudience: "Leaders, managers, entrepreneurs, and anyone seeking purposeful leadership development.",
    learningPoints: [
      "Consciousness-based leadership frameworks",
      "Vedantic principles for decision making",
      "Mindful leadership practices",
      "Building purposeful organizations",
    ],
    certification: "Certificate of Completion, issued by S-VYASA University",
    fee: "Contact for details",
  },
  {
    id: "spirituality-values",
    title: "Spirituality & Values-Based Programs",
    category: "signature",
    categoryLabel: "Special Signature",
    duration: "3–5 Days",
    mode: "Online",
    description: "Programs exploring spirituality, ethics, and values-based living — rooted in Indian philosophical traditions.",
    targetAudience: "General public, educators, counselors, and spiritual seekers.",
    learningPoints: [
      "Foundations of Indian spiritual philosophy",
      "Values-based living and ethical frameworks",
      "Meditation and self-inquiry practices",
    ],
    certification: "Certificate of Participation, issued by S-VYASA University",
    fee: "Contact for details",
  },
];

export const upcomingBatches = [
  { course: "YIC Online", nextBatch: "March 2026", status: "Registering" },
  { course: "YTIC Module 1", nextBatch: "Rolling admissions", status: "Open" },
  { course: "SMET Weekend", nextBatch: "Every month", status: "Open" },
  { course: "DOPT Batch", nextBatch: "On request", status: "Institutional" },
];

export const faqData = [
  {
    category: "Eligibility",
    questions: [
      {
        q: "Who can enrol in these programs?",
        a: "These programs are open to all — working professionals, yoga enthusiasts, government officials, healthcare workers, and anyone interested in Yoga and wellness training. No prior degree is required for most courses.",
      },
      {
        q: "Is there an age limit?",
        a: "No. Anyone above 18 can enrol.",
      },
    ],
  },
  {
    category: "Mode of Delivery",
    questions: [
      {
        q: "Are all courses online?",
        a: "Most courses are delivered online through CODE's LMS. Some programs like SMET and YIC also offer on-campus or hybrid options at S-VYASA's Prashanti Kutiram campus.",
      },
      {
        q: "Do I need to attend live sessions?",
        a: "Some courses have scheduled live sessions. Recordings are available for most modules.",
      },
    ],
  },
  {
    category: "Certification",
    questions: [
      {
        q: "What certificate will I receive?",
        a: "You will receive a Certificate of Completion/Participation/Proficiency issued under S-VYASA University authority.",
      },
      {
        q: "Is this a degree or diploma?",
        a: "No. These are short-term certificate/training programs. They are NOT degrees, diplomas, or credit-bearing programs under UGC/DEB regulations.",
      },
      {
        q: "Is the certificate valid for government jobs?",
        a: "The certificate is from S-VYASA (Deemed to be University, UGC approved, NAAC A+). Acceptance depends on the specific recruiting body's requirements.",
      },
    ],
  },
  {
    category: "Online Exams",
    questions: [
      {
        q: "How are assessments conducted?",
        a: "Online through CODE's LMS — MCQs, assignments, and practical demonstrations depending on the course.",
      },
    ],
  },
  {
    category: "Refund & Withdrawal",
    questions: [
      {
        q: "Can I get a refund if I withdraw?",
        a: "Refund policy varies by course. Generally, refunds are available if requested before the course start date. Contact the training coordinator for details.",
      },
    ],
  },
];

export const institutionalPartners = [
  { name: "DOPT", full: "Department of Personnel & Training, Govt. of India" },
  { name: "ONGC", full: "Oil and Natural Gas Corporation" },
  { name: "Power Grid", full: "Power Grid Corporation of India" },
  { name: "CDOT", full: "Centre for Development of Telematics" },
];

export const facultyData = {
  core: [
    { name: "Dr. Yoga Expert A", designation: "Professor, Dept. of Yoga", brief: "20+ years in yoga therapy research and training", tags: ["Yoga Therapy", "Research"] },
    { name: "Dr. Wellness Scholar B", designation: "Associate Professor", brief: "Specialist in SMET and stress management programs", tags: ["SMET", "Stress Management"] },
    { name: "Dr. Ayurveda Specialist C", designation: "Assistant Professor", brief: "Expert in integrative Ayurvedic health and lifestyle management", tags: ["Ayurveda", "Integrative Health"] },
    { name: "Dr. Philosophy Expert D", designation: "Professor, Yoga Philosophy", brief: "Published author on consciousness studies and Vedantic philosophy", tags: ["Philosophy", "Consciousness"] },
    { name: "Dr. Anatomy Expert E", designation: "Associate Professor", brief: "Medical doctor specializing in yoga anatomy and physiology", tags: ["Anatomy", "Physiology"] },
    { name: "Dr. Research Lead F", designation: "Senior Research Fellow", brief: "Leading yoga research at Anvesana Labs with 50+ publications", tags: ["Research", "Publications"] },
  ],
  visiting: [
    { name: "Prof. Global Expert G", designation: "Visiting Faculty, MIT USA", brief: "International expert on mind-body medicine", tags: ["Mind-Body", "International"] },
    { name: "Dr. Clinical Expert H", designation: "Visiting Specialist", brief: "Clinical psychologist with yoga therapy integration expertise", tags: ["Psychology", "Clinical"] },
    { name: "Dr. Naturopathy Expert I", designation: "Visiting Faculty", brief: "BNYS specialist in naturopathic lifestyle interventions", tags: ["Naturopathy", "Lifestyle"] },
    { name: "Dr. Management Expert J", designation: "Visiting Faculty", brief: "Leadership coach combining Vedantic wisdom with modern management", tags: ["Leadership", "Management"] },
  ],
  industry: [
    { name: "Trainer K", designation: "Corporate Wellness Specialist", brief: "10+ years training government and PSU employees in yoga and wellness", tags: ["Corporate", "Government"] },
    { name: "Trainer L", designation: "DOPT Program Coordinator", brief: "Lead trainer for DOPT and defence establishment programs", tags: ["DOPT", "Defence"] },
    { name: "Trainer M", designation: "PSU Wellness Trainer", brief: "Specialist in workplace stress management for energy sector PSUs", tags: ["PSU", "Energy"] },
  ],
};
