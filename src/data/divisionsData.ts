export interface School {
  name: string;
  slug: string;
  description: string;
  programs: string[];
  highlights: string[];
}

export interface Division {
  name: string;
  shortName: string;
  slug: string;
  tagline: string;
  description: string;
  color: string;
  icon: string;
  schools: School[];
  highlights: string[];
}

export const divisionsData: Division[] = [
  {
    name: "Division of Yoga Spirituality",
    shortName: "Yoga Spirituality",
    slug: "yoga-spirituality",
    tagline: "Integrating the ancient wisdom of Yoga with modern spiritual inquiry",
    description:
      "The Division of Yoga Spirituality at S-VYASA is dedicated to the study, practice, and dissemination of Yogic sciences rooted in Vedic tradition. It bridges classical Yoga philosophy with contemporary academic rigour, offering programs that cultivate spiritual awareness, inner transformation, and scholarly excellence.",
    color: "from-amber-700 to-amber-500",
    icon: "🕉️",
    highlights: [
      "Pioneering research in Yogic consciousness studies",
      "In-depth study of classical Yoga texts and Vedantic philosophy",
      "Integration of meditation, pranayama, and shatkarmas in academic curricula",
      "Global outreach through workshops, retreats, and spiritual camps",
    ],
    schools: [
      {
        name: "School of Yogic Sciences",
        slug: "school-of-yogic-sciences",
        description:
          "The School of Yogic Sciences offers comprehensive programs that explore the theoretical foundations and practical dimensions of Yoga. Students engage with classical texts, modern research methodologies, and immersive yogic practices.",
        programs: [
          "B.Sc. Yoga & Vedic Wellness",
          "M.Sc. Yoga Therapy",
          "M.A. Yoga Darshanam",
          "Ph.D. Yoga",
        ],
        highlights: [
          "Classical yoga text studies — Patanjali Yoga Sutras, Hatha Yoga Pradipika",
          "Laboratory-based research in yogic practices and their physiological effects",
          "International exchange programs and collaborations",
          "Annual yoga symposia and research conferences",
        ],
      },
      {
        name: "Varahamihira Advanced Center for Vedic Technology and Research (VMAC)",
        slug: "vmac",
        description:
          "VMAC is an advanced research center dedicated to uncovering the scientific basis of Vedic knowledge systems, including Jyotisha, Vastu, Ayurveda, and traditional cosmological sciences, and their applications in contemporary life.",
        programs: [
          "Certificate in Vedic Sciences",
          "Research Fellowship in Vedic Technology",
        ],
        highlights: [
          "Interdisciplinary research at the intersection of Vedic and modern sciences",
          "Computational studies of Jyotisha and Vastu principles",
          "Collaborative projects with national and international institutions",
          "Publication of peer-reviewed Vedic science research",
        ],
      },
    ],
  },
  {
    name: "Division of Yoga and Life Sciences",
    shortName: "Yoga & Life Sciences",
    slug: "yoga-life-sciences",
    tagline: "Healing through the integrated science of Yoga and healthcare",
    description:
      "The Division of Yoga and Life Sciences combines cutting-edge healthcare education with the transformative power of Yoga. It trains the next generation of healthcare professionals who are grounded in both evidence-based medicine and holistic wellness practices.",
    color: "from-emerald-700 to-emerald-500",
    icon: "🌿",
    highlights: [
      "State-of-the-art clinical simulation labs",
      "Collaborations with leading hospitals and healthcare institutions",
      "Research-driven curriculum integrating Yoga therapy protocols",
      "Interdisciplinary approach to naturopathy, physiotherapy, and allied health",
    ],
    schools: [
      {
        name: "School of Yoga and Naturopathic Medicine",
        slug: "school-of-yoga-and-naturopathic-medicine",
        description:
          "This school offers integrative programs in naturopathic medicine and yoga therapy, preparing students to deliver holistic healthcare through natural modalities backed by scientific evidence.",
        programs: [
          "Bachelor of Naturopathy and Yogic Sciences (BNYS)",
          "M.D. Yoga",
          "M.Sc. Yoga Therapy",
          "Ph.D. Naturopathy",
        ],
        highlights: [
          "Fully equipped naturopathy treatment centre on campus",
          "Clinical training in hydrotherapy, diet therapy, and yoga therapy",
          "Evidence-based curriculum combining modern diagnostics with natural healing",
          "Patient care internships in affiliated hospitals",
        ],
      },
      {
        name: "School of Physiotherapy",
        slug: "school-of-physiotherapy",
        description:
          "The School of Physiotherapy prepares skilled rehabilitation professionals who integrate modern physiotherapy techniques with yoga-based movement therapies to deliver comprehensive musculoskeletal and neurological care.",
        programs: [
          "Bachelor of Physiotherapy (BPT)",
          "M.Sc. Physiotherapy",
          "Ph.D. Physiotherapy",
        ],
        highlights: [
          "Modern physiotherapy labs with advanced rehabilitation equipment",
          "Specialisations in sports physiotherapy, paediatrics, and neurology",
          "Yoga movement integration in rehabilitation protocols",
          "Clinical internships in premier hospitals across India",
        ],
      },
      {
        name: "School of Allied and Healthcare Profession",
        slug: "school-of-allied-and-healthcare",
        description:
          "This school trains allied health professionals across multiple disciplines, equipping them with specialised clinical skills and an understanding of yoga's role in supportive and preventive healthcare.",
        programs: [
          "Bachelor of Occupational Therapy (BOT)",
          "B.Sc. Psychology (Clinical)",
          "M.Sc. Clinical Psychology",
          "Ph.D. Allied Sciences",
        ],
        highlights: [
          "Multidisciplinary training across occupational therapy, psychology, and more",
          "Integration of yoga and mindfulness in clinical psychology practice",
          "Dedicated psychology counselling lab",
          "Community outreach programmes and rural health camps",
        ],
      },
    ],
  },
  {
    name: "Division of Yoga & Physical Sciences",
    shortName: "Yoga & Physical Sciences",
    slug: "yoga-physical-sciences",
    tagline: "Where technology meets the wisdom of Yoga",
    description:
      "The Division of Yoga & Physical Sciences pioneers an approach to engineering and computer science education rooted in yogic values of discipline, clarity of mind, and ethical innovation. Students gain technical mastery alongside holistic personal development.",
    color: "from-blue-700 to-blue-500",
    icon: "💻",
    highlights: [
      "Industry-aligned B.Tech and BCA programs",
      "Partnerships with IBM, Intel, HCL, and other technology leaders",
      "Yoga and mindfulness sessions integrated into academic schedules",
      "State-of-the-art computer labs and innovation centre",
    ],
    schools: [
      {
        name: "School of Engineering",
        slug: "school-of-engineering",
        description:
          "The School of Engineering delivers rigorous technical education in computer science and engineering disciplines, enhanced by a yogic ethos that nurtures focused, ethical, and innovative engineers for the global technology industry.",
        programs: [
          "B.Tech Computer Science and Engineering",
          "B.Tech Artificial Intelligence & Machine Learning",
          "B.Tech Computer Science Engineering (Data Science)",
          "B.Tech Computer Science Engineering (Cyber Security)",
          "Ph.D. Computer Science and Engineering",
        ],
        highlights: [
          "AICTE-approved programs with strong industry exposure",
          "Dedicated innovation and maker space",
          "Corporate mentorship and live project programmes",
          "Annual tech fest and national-level hackathons",
        ],
      },
      {
        name: "School of Computer Sciences",
        slug: "school-of-computer-sciences",
        description:
          "The School of Computer Sciences offers cutting-edge programs in computer applications and data science, preparing students for careers in software development, artificial intelligence, cloud computing, and more.",
        programs: [
          "BCA",
          "BCA (Cyber Security & Ethical Hacking)",
          "BCA (Artificial Intelligence & Cloud Computing)",
          "MCA",
          "MCA (Data Science)",
          "M.Sc. Computer Science",
          "Ph.D. Computer Science",
        ],
        highlights: [
          "Specialised tracks in AI, data science, and cybersecurity",
          "Google, Microsoft, and AWS-certified training tracks",
          "Entrepreneurship and startup incubation support",
          "High placement rates with leading IT companies",
        ],
      },
    ],
  },
  {
    name: "Division of Yoga & Management Studies",
    shortName: "Yoga & Management",
    slug: "yoga-management-studies",
    tagline: "Nurturing ethical and mindful leaders for the future",
    description:
      "The Division of Yoga & Management Studies uniquely blends business education with the principles of Yoga — fostering leaders who are not only strategically sharp but also grounded in ethical values, emotional intelligence, and holistic well-being.",
    color: "from-purple-700 to-purple-500",
    icon: "📊",
    highlights: [
      "AICTE-approved MBA programs with multiple specialisations",
      "Yoga and leadership development integrated into the management curriculum",
      "Strong industry connect through guest lectures and corporate immersions",
      "Entrepreneurship and social enterprise focus",
    ],
    schools: [
      {
        name: "School of Commerce and Management",
        slug: "school-of-commerce-and-management",
        description:
          "The School of Commerce and Management prepares students for dynamic careers in business, finance, marketing, and entrepreneurship — all underpinned by yogic values of integrity, service, and mindful leadership.",
        programs: [
          "BBA",
          "BBA (Sports Management)",
          "B.Com",
          "MBA",
          "MBA (Marketing, Finance & Business Analytics)",
          "MBA (Hospital Administration)",
          "Ph.D. Commerce and Management",
        ],
        highlights: [
          "Live case studies and industry simulations",
          "Annual management conclave with industry leaders",
          "Dedicated entrepreneurship and innovation cell",
          "International business exchange and study tours",
        ],
      },
    ],
  },
  {
    name: "Division of Yoga & Humanities",
    shortName: "Yoga & Humanities",
    slug: "yoga-humanities",
    tagline: "Cultivating creativity, culture, and athletic excellence through Yoga",
    description:
      "The Division of Yoga & Humanities celebrates the intersection of art, culture, language, and sport — all enriched by the spirit of Yoga. It nurtures creative expression, cultural scholarship, and athletic development within a holistic academic environment.",
    color: "from-rose-700 to-rose-500",
    icon: "🎭",
    highlights: [
      "Programs in performing arts, dance, and sports sciences",
      "Cultural festivals and inter-university art competitions",
      "Yoga-based training methodologies for performance athletes",
      "Research in yoga's role in artistic creativity and athletic performance",
    ],
    schools: [
      {
        name: "School of Performing Arts",
        slug: "school-of-performing-arts",
        description:
          "The School of Performing Arts offers a transformative education in dance, music, and theatre — integrating classical Indian performing arts traditions with contemporary artistic practice and yogic disciplines.",
        programs: [
          "Ph.D. Dance",
          "Certificate in Classical Dance",
          "Diploma in Music",
        ],
        highlights: [
          "Training in Bharatanatyam, Odissi, and other classical dance forms",
          "Annual cultural festival showcasing student talent",
          "Collaborations with cultural academies and performing arts institutions",
          "Integration of yoga, breath work, and meditation for artistic mastery",
        ],
      },
      {
        name: "School of Sports Sciences",
        slug: "school-of-sports-sciences",
        description:
          "The School of Sports Sciences prepares sports professionals, coaches, and researchers who apply yoga-based performance enhancement and sports science methodologies to elevate athletic achievement and well-being.",
        programs: [
          "B.Sc. Sports Sciences",
          "M.Sc. Sports Sciences",
          "Certificate in Sports Coaching",
        ],
        highlights: [
          "Modern sports science lab with performance analysis tools",
          "Yoga-enhanced athletic training protocols",
          "Collaborations with national sports federations",
          "Annual sports meets and yoga-athletics research symposia",
        ],
      },
    ],
  },
  {
    name: "CODE – Center for Online and Distance Education",
    shortName: "CODE",
    slug: "code",
    tagline: "Bringing quality yoga education to learners across the world",
    description:
      "CODE is S-VYASA's dedicated center for open, distance, and online learning — making the university's world-class yoga and wellness education accessible to students regardless of geographic location or professional commitments.",
    color: "from-blue-800 to-blue-600",
    icon: "🌐",
    highlights: [
      "UGC-DEB approved distance and online programs",
      "Flexible learning pathways for working professionals",
      "Live and recorded sessions with expert faculty",
      "Robust digital learning platform with global reach",
    ],
    schools: [
      {
        name: "Distance Learning",
        slug: "distance-learning",
        description:
          "Distance Learning programs at CODE offer structured, correspondence-based education with periodic contact sessions, enabling students across India and abroad to earn S-VYASA qualifications flexibly.",
        programs: [
          "B.Sc. Yoga (Distance Mode)",
          "YIC (Distance Mode)",
          "DYT (Distance Mode)",
          "M.Sc. Yoga (Distance Mode)",
        ],
        highlights: [
          "UGC-DEB recognised distance education programs",
          "Printed and digital study materials",
          "Contact sessions at regional study centres",
          "Examinations conducted across India",
        ],
      },
      {
        name: "Online Courses",
        slug: "online-courses",
        description:
          "S-VYASA's online courses leverage cutting-edge learning technology to deliver immersive yoga and wellness education to a global audience through live classes, recorded lectures, and interactive assessments.",
        programs: [
          "Online Yoga Instructor Course (YIC)",
          "Online Yoga Therapy Certificate",
          "Online Mindfulness and Meditation",
          "Online Pranayama and Breathwork",
        ],
        highlights: [
          "Live interactive sessions with S-VYASA faculty",
          "Self-paced learning options",
          "Digital certificates upon completion",
          "Global student community and peer learning",
        ],
      },
      {
        name: "Short Programmes",
        slug: "short-programmes",
        description:
          "Short programmes at CODE offer focused, time-efficient learning experiences in specific areas of yoga, wellness, and related fields — ideal for professionals, practitioners, and lifelong learners.",
        programs: [
          "Yoga for Corporate Wellness (1 week)",
          "Stress Management Intensive (3 days)",
          "ANTTC — Advanced Naturopathy and Therapy Camp",
          "SMET — Self-Management of Excessive Tension",
        ],
        highlights: [
          "Intensive residential and non-residential formats",
          "Facilitated by senior S-VYASA faculty and practitioners",
          "Certificate of participation from S-VYASA",
          "Continuing education credits for healthcare professionals",
        ],
      },
    ],
  },
  {
    name: "ANVESANA – Advanced Research Laboratories",
    shortName: "ANVESANA",
    slug: "anvesana",
    tagline: "Pioneering research at the frontier of Yoga and integrative medicine",
    description:
      "ANVESANA is S-VYASA's flagship advanced research wing, housing state-of-the-art laboratories dedicated to the scientific investigation of yoga, Ayurveda, and integrative medicine. It drives the university's mission of establishing yoga as a rigorous, evidence-based discipline.",
    color: "from-blue-800 to-blue-600",
    icon: "🔬",
    highlights: [
      "Collaborations with ICMR, WHO, and international research bodies",
      "900+ peer-reviewed publications",
      "Cutting-edge neuroscience, biochemistry, and clinical trial labs",
      "Interdisciplinary research teams spanning yoga, medicine, and psychology",
    ],
    schools: [
      {
        name: "Centre for Advanced Research in Integrative Medicine",
        slug: "carim",
        description:
          "CARIM is a premier research centre that investigates the mechanisms and clinical outcomes of yoga-based and integrative medical interventions, contributing globally recognised evidence for holistic healthcare.",
        programs: [
          "Ph.D. Integrative Medicine",
          "Post-Doctoral Research Fellowship",
          "Research Associate Programme",
        ],
        highlights: [
          "Multi-centre clinical trials on yoga therapy outcomes",
          "Biomarker research in yoga and stress physiology",
          "Neuroimaging studies on meditation and brain function",
          "International collaborations with Harvard, WHO, and ICMR",
        ],
      },
    ],
  },
];

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisionsData.find((d) => d.slug === slug);
}

export function getSchoolBySlug(divisionSlug: string, schoolSlug: string): { division: Division; school: School } | undefined {
  const division = getDivisionBySlug(divisionSlug);
  if (!division) return undefined;
  const school = division.schools.find((s) => s.slug === schoolSlug);
  if (!school) return undefined;
  return { division, school };
}
