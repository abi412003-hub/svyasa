// Navigation configuration for S-VYASA mega-menu

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// Course group with parent course and specializations
export interface CourseGroup {
  parent: NavLink;
  specializations?: NavLink[];
}

export interface NavColumn {
  title: string;
  links?: NavLink[];
  courseGroups?: CourseGroup[]; // For nested course structure
}

// Division hierarchy: Division → School → Course
export interface DivisionCourse {
  label: string;
  href: string;
  external?: boolean;
  italic?: boolean; // For info text like "Research center..." or "Programs coming soon"
}

export interface DivisionSchool {
  name: string;
  href?: string;
  italic?: boolean; // For info text on the school itself
  courses: DivisionCourse[];
}

export interface Division {
  name: string;
  href?: string;
  icon?: string; // e.g. "laptop", "flask"
  schools?: DivisionSchool[];
  courses?: DivisionCourse[]; // For divisions without schools (CODE, ANVESANA)
}

export interface NavItem {
  label: string;
  href?: string;
  columns?: NavColumn[];
  links?: NavLink[];
  divisions?: Division[];
}

// Top utility bar links
export const utilityLinks: NavLink[] = [
  { label: "Events", href: "/news-events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/career" },
  { label: "Library", href: "/library" },
  { label: "Exam", href: "/exams" },
  { label: "IQAC", href: "/iqac" },
  { label: "International", href: "/directorate-of-international-affairs" },
  { label: "Edtech Partners", href: "/edtech-partners" },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
  { label: "IIC", href: "/iic" },
  { label: "Training Programs", href: "/training", external: false },
];

// Main navigation items
export const navItems: NavItem[] = [
  {
    label: "About Us",
    links: [
      { label: "S-Vyasa Deemed to be University", href: "/s-vyasa-university" },
      { label: "S-Vyasa Society", href: "/society" },
      { label: "Administration", href: "/administration" },
      { label: "Organogram", href: "/organogram" },
      { label: "Accreditation", href: "/accreditation" },
      { label: "Publications", href: "/publications" },
      { label: "Privacy & Policy", href: "/privacy-policy" },
      { label: "SWC (Student Welfare Committee)", href: "/student-welfare-committee" },
    ],
  },
  {
    label: "Academics",
    columns: [
      {
        title: "Yoga Programmes",
        courseGroups: [
          {
            parent: { label: "Yoga Instructor Courses", href: "/programs/yoga-programmes" },
            specializations: [
              { label: "YIC Online", href: "/courses/yoga-instructor-course" },
              { label: "Non Residential YIC", href: "/courses/non-residential-yic" },
            ],
          },
          {
            parent: { label: "B.Sc. Yoga", href: "/programs/yoga-programmes" },
            specializations: [
              { label: "Yoga & Vedic Wellness", href: "/courses/bsc-yoga-vedic-therapy" },
              { label: "Yoga Therapy", href: "/courses/bsc-yoga-therapy" },
            ],
          },
          {
            parent: { label: "M.Sc. Yoga", href: "/programs/yoga-programmes" },
            specializations: [
              { label: "Yoga Therapy", href: "/courses/msc-yoga-therapy" },
              { label: "Yoga & Vedic Wellness", href: "/courses/msc-yoga-vedic-therapy" },
            ],
          },
          {
            parent: { label: "PG Diploma", href: "/programs/yoga-programmes" },
            specializations: [
              { label: "Yoga Therapy", href: "/courses/pg-diploma-yoga-therapy" },
              { label: "Yoga for Doctors", href: "/courses/pg-diploma-yoga-for-doctors" },
            ],
          },
          {
            parent: { label: "BNYS", href: "/courses/bnys" },
          },
          {
            parent: { label: "MD Yoga", href: "/courses/doctor-of-medicine-yoga" },
          },
          {
            parent: { label: "Ph.D - Yoga", href: "/courses/phd-yoga" },
          },
          {
            parent: { label: "SMET", href: "/courses/self-management-excessive-tension" },
          },
          {
            parent: { label: "Ayurveda Lifestyle Management", href: "/courses/ayurveda-lifestyle-management" },
          },
          {
            parent: { label: "Division Of Yoga and Humanities", href: "/courses/division-yoga-humanities" },
          },
        ],
      },
      {
        title: "Undergraduate",
        courseGroups: [
          {
            parent: { label: "BCA", href: "/programs/bca" },
            specializations: [
              { label: "Cybersecurity, Ethical Hacking & Digital Forensics", href: "/courses/bca-cybersecurity-ethical-hacking-digital-forensics" },
              { label: "Artificial Intelligence, Cloud Computing & DevOps", href: "/courses/bca-artificial-intelligence-cloud-computing-devops" },
            ],
          },
          {
            parent: { label: "BBA", href: "/programs/bba" },
            specializations: [
              { label: "Sports Management", href: "/courses/bba-in-sports-management" },
              { label: "Logistics and Aviation", href: "/courses/bba-logistics-and-aviation" },
              { label: "Business Management, Digital Marketing & Business Analytics", href: "/courses/bba-business-management-digital-marketing-business-analytics" },
              { label: "Entrepreneurship, Innovation & Business Analytics", href: "/courses/bba-entrepreneurship-innovation-business-analytics" },
              { label: "Logistics, Supply Chain Management & Port Management", href: "/courses/bba-logistics-supply-chain-management-port-management" },
            ],
          },
          {
            parent: { label: "BCOM", href: "/programs/bcom" },
            specializations: [
              { label: "International Accounting & Finance integrated with ACCA", href: "/courses/bcom-international-accounting-finance-acca" },
            ],
          },
          {
            parent: { label: "B. TECH.", href: "/programs/btech" },
            specializations: [
              { label: "NIAT Corporate B.tech(CSE)", href: "/courses/niat-corporate-btech-cse" },
              { label: "Computer Science and Engineering", href: "/courses/btech-computer-science-engineering" },
              { label: "Computer Science and Information Technology", href: "/courses/btech-computer-science-information-technology" },
              { label: "Computer Science (Software Engineering)", href: "/courses/btech-computer-science-software-engineering" },
              { label: "Computer Science (AI & Machine Learning)", href: "/courses/btech-artificial-intelligence-machine-learning" },
              { label: "Computer Science & Engineering (Data Science)", href: "/courses/btech-computer-science-engineering-data-science" },
              { label: "Computer Science & Engineering (Cyber Security)", href: "/courses/btech-computer-science-engineering-cyber-security" },
            ],
          },
          {
            parent: { label: "B.SC.", href: "/programs/bsc" },
            specializations: [
              { label: "Computer Science", href: "/courses/bsc-computer-science" },
            ],
          },
          {
            parent: { label: "BPT - Prashanti Kutiram Campus", href: "/courses/bachelor-of-physiotherapy" },
            specializations: [
              { label: "Bachelor of Physiotherapy", href: "/courses/bachelor-of-physiotherapy" },
            ],
          },
        ],
      },
      {
        title: "Postgraduate",
        courseGroups: [
          {
            parent: { label: "MCA", href: "/programs/mca" },
            specializations: [
              { label: "Cloud Computing and DevOps", href: "/courses/mca-cloud-computing-devops" },
              { label: "Cybersecurity, Ethical Hacking and Cyber Forensics", href: "/courses/mca-cybersecurity-ethical-hacking-cyber-forensics" },
              { label: "AI, Machine Learning and Data Science", href: "/courses/mca-artificial-intelligence-machine-learning-data-science" },
              { label: "Data Science", href: "/courses/mca-data-science" },
            ],
          },
          {
            parent: { label: "MBA", href: "/programs/mba" },
            specializations: [
              { label: "DUAL - Finance, Marketing, HR, Operations, Business Analytics, International Business", href: "/courses/mba-dual-specialisation" },
              { label: "PRO - Marketing, Finance and Business Analytics", href: "/courses/mba-marketing-finance-business-analytics" },
              { label: "PRO - Hospital Administration with Medical Tourism", href: "/courses/mba-hospital-administration-medical-tourism" },
              { label: "PRO - Logistics and Supply Chain Management", href: "/courses/mba-logistics-supply-chain-management" },
              { label: "PRO - Digital Business Management and Data Analytics", href: "/courses/mba-digital-business-management-data-analytics" },
              { label: "PRO - AI and Data Analytics", href: "/courses/mba-pro-ai-data-analytics" },
              { label: "Digital Marketing and AI", href: "/courses/mba-digital-marketing-ai" },
            ],
          },
          {
            parent: { label: "M.SC.", href: "/programs/msc" },
            specializations: [
              { label: "Cybersecurity, Ethical Hacking and Cyber Forensics", href: "/courses/msc-cybersecurity-ethical-hacking-cyber-forensics" },
              { label: "Data Science", href: "/courses/msc-data-science" },
              { label: "Clinical Psychology", href: "/courses/msc-clinical-psychology" },
              { label: "Neuro Psychology", href: "/courses/msc-neuropsychology" },
              { label: "Counselling Psychology", href: "/courses/msc-counselling-psychology" },
              { label: "Health Psychology", href: "/courses/msc-health-psychology" },
            ],
          },
        ],
      },
      {
        title: "Allied and Healthcare Courses",
        links: [
          { label: "Ph.D - Allied and Healthcare Professions", href: "/courses/phd-allied-sciences" },
          { label: "Bachelor of Physiotherapy", href: "/courses/bachelor-of-physiotherapy" },
          { label: "Bachelor of Occupational Therapy", href: "/courses/bachelor-of-occupational-therapy" },
          { label: "B.Sc. - Clinical Psychology", href: "/courses/bsc-clinical-psychology" },
        ],
      },
      {
        title: "Ph.D Programmes",
        links: [
          { label: "Ph.D - Computer Science", href: "/courses/phd-computer-science" },
          { label: "Ph.D - Computer Science and Engineering", href: "/courses/phd-computer-science-engineering" },
          { label: "Ph.D - Commerce and Management", href: "/courses/phd-commerce-management" },
          { label: "Ph.D - Applied Sciences", href: "/courses/phd-applied-sciences" },
          { label: "Ph.D - Allied and Healthcare Professions", href: "/courses/phd-allied-sciences" },
          { label: "Ph.D - English", href: "/courses/phd-english" },
        ],
      },
      {
        title: "D.Sc., D.Litt",
        links: [
          { label: "D.Sc., D.Litt", href: "/courses/dsc-dlitt" },
        ],
      },
      {
        title: "Distance Learning",
        links: [
          { label: "Distance Learning Portal", href: "https://svyasadde.com/", external: true },
          { label: "B.Sc. Yoga (Distance)", href: "https://svyasadde.com/bsc/", external: true },
          { label: "M.Sc. Yoga (Distance)", href: "https://svyasadde.com/msc/", external: true },
          { label: "YIC (Distance)", href: "https://svyasadde.com/yic/", external: true },
          { label: "DYT (Distance)", href: "https://svyasadde.com/dyt/", external: true },
          { label: "PGDYT (Distance)", href: "https://svyasadde.com/pgdyt/", external: true },
        ],
      },
    ],
  },
  {
    label: "Divisions",
    divisions: [
      {
        name: "Division of Yoga & Spirituality",
        href: "/divisions/yoga-spirituality",
        schools: [
          {
            name: "School of Yogic Sciences",
            href: "/divisions/yoga-spirituality/schools/school-of-yogic-sciences",
            courses: [
              { label: "YIC", href: "/courses/yoga-instructor-course" },
              { label: "SMET", href: "/courses/self-management-excessive-tension" },
              { label: "Ayurveda Lifestyle Management", href: "/courses/ayurveda-lifestyle-management" },
            ],
          },
          {
            name: "VMAC",
            href: "/divisions/yoga-spirituality/schools/vmac",
            italic: true,
            courses: [
              { label: "Research center for Vedic technology", href: "/divisions/yoga-spirituality/schools/vmac", italic: true },
            ],
          },
        ],
      },
      {
        name: "Division of Yoga & Life Sciences",
        href: "/divisions/yoga-life-sciences",
        schools: [
          {
            name: "School of Yoga & Naturopathic Medicine",
            href: "/divisions/yoga-life-sciences/schools/school-of-yoga-and-naturopathic-medicine",
            courses: [
              { label: "B.Sc. Yoga", href: "/courses/bsc-yoga-vedic-therapy" },
              { label: "M.Sc. Yoga", href: "/courses/msc-yoga-therapy" },
              { label: "BNYS", href: "/courses/bnys" },
              { label: "MD Yoga", href: "/courses/doctor-of-medicine-yoga" },
              { label: "PG Diploma Yoga", href: "/courses/pg-diploma-yoga-therapy" },
              { label: "M.A. Yoga", href: "/courses/master-of-arts-yoga-darshanam" },
              { label: "Ph.D Yoga", href: "/courses/phd-yoga" },
            ],
          },
          {
            name: "School of Physiotherapy",
            href: "/divisions/yoga-life-sciences/schools/school-of-physiotherapy",
            courses: [
              { label: "BPT", href: "/courses/bachelor-of-physiotherapy" },
            ],
          },
          {
            name: "School of Allied & Healthcare Professions",
            href: "/divisions/yoga-life-sciences/schools/school-of-allied-and-healthcare",
            courses: [
              { label: "BOT", href: "/courses/bachelor-of-occupational-therapy" },
              { label: "B.Sc. Clinical Psychology", href: "/courses/bsc-clinical-psychology" },
            ],
          },
        ],
      },
      {
        name: "Division of Yoga & Physical Sciences",
        href: "/divisions/yoga-physical-sciences",
        schools: [
          {
            name: "School of Engineering",
            href: "/divisions/yoga-physical-sciences/schools/school-of-engineering",
            courses: [
              { label: "B.Tech", href: "/programs/btech" },
            ],
          },
          {
            name: "School of Computer Sciences",
            href: "/divisions/yoga-physical-sciences/schools/school-of-computer-sciences",
            courses: [
              { label: "BCA", href: "/programs/bca" },
              { label: "B.Sc. Computer Science", href: "/programs/bsc" },
              { label: "MCA", href: "/programs/mca" },
              { label: "M.Sc. (Tech)", href: "/programs/msc" },
            ],
          },
        ],
      },
      {
        name: "Division of Yoga & Management Studies",
        href: "/divisions/yoga-management-studies",
        schools: [
          {
            name: "School of Commerce & Management",
            href: "/divisions/yoga-management-studies/schools/school-of-commerce-and-management",
            courses: [
              { label: "BBA", href: "/programs/bba" },
              { label: "B.Com", href: "/programs/bcom" },
              { label: "MBA", href: "/programs/mba" },
            ],
          },
        ],
      },
      {
        name: "Division of Yoga & Humanities",
        href: "/divisions/yoga-humanities",
        schools: [
          {
            name: "School of Performing Arts",
            href: "/divisions/yoga-humanities/schools/school-of-performing-arts",
            italic: true,
            courses: [
              { label: "Programs coming soon", href: "/divisions/yoga-humanities/schools/school-of-performing-arts", italic: true },
            ],
          },
          {
            name: "Psychology & Humanities",
            href: "/divisions/yoga-humanities/schools/school-of-sports-sciences",
            courses: [
              { label: "M.Sc. Psychology", href: "/courses/msc-clinical-psychology" },
              { label: "Ph.D English", href: "/courses/phd-english" },
            ],
          },
        ],
      },
      {
        name: "CODE — Online & Distance Education",
        href: "/divisions/code",
        icon: "laptop",
        courses: [
          { label: "Distance Learning Portal", href: "https://svyasadde.com/", external: true },
          { label: "Distance Learning", href: "/divisions/code/schools/distance-learning" },
          { label: "Online Courses", href: "/divisions/code/schools/online-courses" },
          { label: "Short Programmes", href: "/divisions/code/schools/short-programmes" },
        ],
      },
      {
        name: "ANVESANA — Research Laboratories",
        href: "/divisions/anvesana",
        icon: "flask",
        courses: [
          { label: "Research at S-VYASA", href: "/research" },
          { label: "Research Publications", href: "/research/publications" },
          { label: "CARIM", href: "/divisions/anvesana/schools/carim" },
        ],
      },
    ],
  },
  {
    label: "Research",
    links: [
      { label: "About Research at S-VYASA", href: "/research" },
      { label: "Research Facility", href: "/research/facility" },
      { label: "Research Faculty", href: "/research/faculty" },
      { label: "Ongoing Projects", href: "/research/ongoing-projects" },
      { label: "Completed Projects", href: "/research/completed-projects" },
      { label: "Adopt a Research Project", href: "/research/adopt-project" },
      { label: "Research Publications", href: "/research/publications" },
      { label: "Lab Events", href: "/research/lab-events" },
      { label: "CPEB Project Proposal", href: "/research/cpeb" },
    ],
  },
  {
    label: "Important Links",
    links: [
      { label: "Events", href: "/news-events" },
      { label: "Gallery", href: "/gallery" },
      { label: "Careers", href: "/career" },
      { label: "Library", href: "/library" },
      { label: "Exam", href: "/exams" },
      { label: "IQAC", href: "/iqac" },
      { label: "International Affairs", href: "/directorate-of-international-affairs" },
      { label: "Edtech Partners", href: "/edtech-partners" },
      { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
      { label: "IIC", href: "/iic" },
      { label: "AIU", href: "/aiu" },
      { label: "Training Programs", href: "/training" },
    ],
  },
  { label: "Guests", href: "/guests" },
  { label: "Admission", href: "/admissions" },
  { label: "Global City Campus", href: "/global-city-campus" },
  { label: "Prashanthi Campus", href: "/prashanthi-campus" },
  { label: "Life@S-Vyasa", href: "/life-at-svyasa" },
  { label: "International Affairs", href: "/directorate-of-international-affairs" },
  { label: "News & Events", href: "/news-events" },
  { label: "Contact Us", href: "/contact-us" },
];

// All routes for the site (for generating placeholder pages)
export const allRoutes: NavLink[] = [
  // Core pages
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "S-VYASA Society", href: "/society" },
  { label: "Management", href: "/management" },
  { label: "S-Vyasa Deemed to be University", href: "/s-vyasa-university" },
  { label: "Accreditation", href: "/accreditation" },
  { label: "Publications", href: "/publications" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Student Welfare Committee", href: "/student-welfare-committee" },
  
  // Admissions & Campus
  { label: "Admissions", href: "/admissions" },
  { label: "Global City Campus", href: "/global-city-campus" },
  { label: "Prashanthi Campus", href: "/prashanthi-campus" },
  { label: "Life at S-VYASA", href: "/life-at-svyasa" },
  { label: "Contact Us", href: "/contact-us" },
  
  // Undergraduate Programs
  { label: "BCA", href: "/bca" },
  { label: "BCA Cybersecurity", href: "/bca-cybersecurity-ethical-hacking-digital-forensics" },
  { label: "BCA AI Cloud DevOps", href: "/bca-artificial-intelligence-cloud-computing-devops" },
  { label: "BCA Data Science", href: "/bca-data-science-artificial-intelligence-big-data-analytics" },
  { label: "BCA Cloud Cybersecurity", href: "/bca-cloud-computing-cybersecurity-ethical-hacking" },
  { label: "BCA AI Robotics IoT", href: "/bca-artificial-intelligence-robotics-internet-of-things" },
  { label: "BCA AI ML Robotics", href: "/bca-artificial-intelligence-machine-learning-robotics" },
  { label: "BBA", href: "/bba" },
  { label: "BBA Sports Management", href: "/bba-in-sports-management" },
  { label: "BBA Logistics Aviation", href: "/bba-logistics-and-aviation" },
  { label: "BBA Digital Marketing", href: "/bba-business-management-digital-marketing-business-analytics" },
  { label: "BBA Entrepreneurship", href: "/bba-entrepreneurship-innovation-business-analytics" },
  { label: "BBA Supply Chain", href: "/bba-logistics-supply-chain-management-port-management" },
  { label: "B.Com", href: "/bcom" },
  { label: "B.Com ACCA", href: "/b-com-international-accounting-finance-integrated-with-acca" },
  { label: "B.Tech", href: "/btech" },
  { label: "NIAT B.Tech CSE", href: "/niat-corporate-b-tech-in-cse" },
  { label: "B.Tech CSE", href: "/btech-computer-science-and-engineering" },
  { label: "B.Tech CS IT", href: "/btech-computer-science-and-information-technology" },
  { label: "B.Tech Software Engineering", href: "/btech-computer-science-software-engineering" },
  { label: "B.Tech AI ML", href: "/btech-artificial-intelligence-machine-learning" },
  { label: "B.Tech Data Science", href: "/btech-computer-science-engineering-data-science" },
  { label: "B.Tech Cyber Security", href: "/btech-computer-science-engineering-cyber-security" },
  { label: "B.Sc.", href: "/bsc" },
  { label: "B.Sc. Computer Science", href: "/bsc-computer-science" },
  { label: "B.Sc. AI ML Robotics", href: "/bsc-artificial-intelligence-machine-learning-robotics" },
  { label: "B.Sc. Clinical Psychology", href: "/bsc-clinical-psychology" },
  { label: "BPT", href: "/bachelor-of-physiotherapy" },
  { label: "BOT", href: "/bachelor-of-occupational-therapy" },
  
  // Postgraduate Programs
  { label: "MCA", href: "/mca" },
  { label: "MCA Cloud DevOps", href: "/mca-cloud-computing-devops" },
  { label: "MCA Cybersecurity", href: "/mca-cybersecurity-ethical-hacking-cyber-forensics" },
  { label: "MCA AI ML Data Science", href: "/mca-artificial-intelligence-machine-learning-data-science" },
  { label: "MCA Data Science", href: "/mca-data-science" },
  { label: "MCA Big Data", href: "/mca-data-science-big-data-analytics" },
  { label: "MCA IoT", href: "/mca-data-science-internet-of-things" },
  { label: "MBA", href: "/mba" },
  { label: "MBA Dual", href: "/mba-dual-specialisation" },
  { label: "MBA Marketing Finance", href: "/mba-marketing-finance-business-analytics" },
  { label: "MBA Hospital Admin", href: "/mba-hospital-administration-with-medical-tourism" },
  { label: "MBA Logistics", href: "/mba-logistics-and-supply-chain-management" },
  { label: "MBA Digital Business", href: "/mba-digital-business-management-data-analytics" },
  { label: "MBA AI Analytics", href: "/mba-pro-ai-data-analytics" },
  { label: "MBA Digital Marketing AI", href: "/mba-digital-marketing-and-ai" },
  { label: "M.Sc.", href: "/msc" },
  { label: "M.Sc. Cybersecurity", href: "/msc-cybersecurity-ethical-hacking-cyber-forensics" },
  { label: "M.Sc. Data Science", href: "/msc-data-science" },
  { label: "M.Sc. Big Data", href: "/msc-data-science-big-data-analytics" },
  { label: "M.Sc. Clinical Psychology", href: "/msc-clinical-psychology" },
  { label: "M.Sc. Neuropsychology", href: "/msc-neuropsychology" },
  { label: "M.Sc. Counselling Psychology", href: "/msc-counselling-psychology" },
  { label: "M.Sc. Health Psychology", href: "/msc-health-psychology" },
  
  // D.Sc., D.Litt
  { label: "D.Sc., D.Litt", href: "/dlit" },
  
  // Yoga Programs
  { label: "Yoga Programs", href: "/yoga-programs" },
  { label: "Ayurveda Lifestyle", href: "/ayurveda-lifestyle-management-course" },
  { label: "YIC", href: "/yoga-instructor-course" },
  { label: "Non Residential YIC", href: "/non-residential-yic" },
  { label: "B.Sc. Yoga Vedic Wellness", href: "/bsc-yoga-vedic-therapy" },
  { label: "B.Sc. Yoga Therapy", href: "/bachelor-of-science-in-yoga-therapy" },
  { label: "M.Sc. Yoga Therapy", href: "/master-of-science-in-yoga-therapy" },
  { label: "M.Sc. Yoga Vedic Wellness", href: "/master-of-science-yoga-vedic-therapy" },
  { label: "BNYS", href: "/bachelor-of-naturopathy-and-yogic-sciences" },
  { label: "MD Yoga", href: "/doctor-of-medicine-yoga" },
  { label: "PG Diploma Yoga Therapy", href: "/post-graduate-diploma-in-yoga-therapy" },
  { label: "PG Diploma Yoga Doctors", href: "/post-graduate-yoga-diploma-for-doctors" },
  { label: "Ph.D Yoga", href: "/phd-yoga" },
  { label: "SMET", href: "/self-management-of-excessive-tension" },
  { label: "Division Yoga Humanities", href: "/division-of-yoga-and-humanities" },
  { label: "Aerial Yoga", href: "/aerial-yoga-teacher-training-course" },
  { label: "PDC", href: "/personality-development-camp" },
  { label: "PDC Children", href: "/personality-development-camp-for-children" },
  { label: "Himalaya Yoga Olympiad", href: "/himalaya-yoga-olympiad" },
  { label: "M.A. Yoga", href: "/master-of-arts-in-yoga" },
  { label: "SPEC", href: "/spec" },
  
  // Ph.D Programs
  { label: "Ph.D Programs", href: "/phd-programs" },
  { label: "Ph.D Computer Science", href: "/doctor-of-philosophy-in-computer-science" },
  { label: "Ph.D CSE", href: "/doctor-of-philosophy-in-computer-science-and-engineering" },
  { label: "Ph.D Commerce Management", href: "/doctor-of-philosophy-in-management-and-commerce" },
  { label: "Ph.D Applied Sciences", href: "/doctor-of-philosophy-in-applied-sciences" },
  { label: "Ph.D Allied Sciences", href: "/doctor-of-philosophy-in-allied-sciences" },
  { label: "Ph.D English", href: "/doctor-of-philosophy-in-english" },
  
  // Allied Healthcare
  { label: "Allied Sciences", href: "/allied-sciences" },
  
  // Departments
  { label: "Commerce Management Dept", href: "/department-of-commerce-and-management" },
  { label: "Engineering Technology Dept", href: "/department-of-engineering-and-technology" },
  { label: "Computer Science Dept", href: "/department-of-computer-science-application" },
  { label: "Allied Healthcare Prof Dept", href: "/department-of-allied-health-care-professionals" },
  { label: "Allied Health Science Dept", href: "/department-of-allied-health-science" },
  { label: "Physiotherapy Dept", href: "/department-of-physiotherapy" },
  { label: "Yoga Humanities GCC", href: "/division-of-yoga-and-humanities-gcc" },
  { label: "Science Humanities Dept", href: "/department-of-science-and-humanities" },
  
  // Research
  { label: "Research", href: "/research" },
  { label: "Research Facility", href: "/research/facility" },
  { label: "Research Faculty", href: "/research/faculty" },
  { label: "Ongoing Projects", href: "/research/ongoing-projects" },
  { label: "Completed Projects", href: "/research/completed-projects" },
  { label: "Adopt Research", href: "/research/adopt-project" },
  { label: "Research Publications", href: "/research/publications" },
  { label: "Lab Events", href: "/research/lab-events" },
  { label: "CPEB Proposal", href: "/research/cpeb" },
  
  // Important Links
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/career" },
  { label: "Library", href: "/library" },
  { label: "Exams", href: "/exams" },
  { label: "IQAC", href: "/iqac" },
  { label: "Edtech Partners", href: "/edtech-partners" },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
  { label: "IIC", href: "/iic" },
  { label: "AIU", href: "/aiu" },
  { label: "International Affairs", href: "/directorate-of-international-affairs" },
  { label: "News Events", href: "/news-events" },
];
