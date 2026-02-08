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

export interface NavItem {
  label: string;
  href?: string;
  columns?: NavColumn[];
  links?: NavLink[];
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
];

// Main navigation items
export const navItems: NavItem[] = [
  {
    label: "About Us",
    links: [
      { label: "S-Vyasa University", href: "/s-vyasa-university" },
      { label: "S-Vyasa Society", href: "/society" },
      { label: "Management", href: "/management" },
      { label: "Organogram", href: "/assets/svyasa-organogram.pdf", external: true },
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
        title: "Undergraduate",
        courseGroups: [
          {
            parent: { label: "BCA", href: "/bca" },
            specializations: [
              { label: "Cybersecurity, Ethical Hacking & Digital Forensics", href: "/bca-cybersecurity-ethical-hacking-digital-forensics" },
              { label: "Artificial Intelligence, Cloud Computing & DevOps", href: "/bca-artificial-intelligence-cloud-computing-devops" },
            ],
          },
          {
            parent: { label: "BBA", href: "/bba" },
            specializations: [
              { label: "Sports Management", href: "/bba-in-sports-management" },
              { label: "Logistics and Aviation", href: "/bba-logistics-and-aviation" },
              { label: "Business Management, Digital Marketing & Business Analytics", href: "/bba-business-management-digital-marketing-business-analytics" },
              { label: "Entrepreneurship, Innovation & Business Analytics", href: "/bba-entrepreneurship-innovation-business-analytics" },
              { label: "Logistics, Supply Chain Management & Port Management", href: "/bba-logistics-supply-chain-management-port-management" },
            ],
          },
          {
            parent: { label: "BCOM", href: "/bcom" },
            specializations: [
              { label: "International Accounting & Finance integrated with ACCA", href: "/b-com-international-accounting-finance-integrated-with-acca" },
            ],
          },
          {
            parent: { label: "B. TECH.", href: "/btech" },
            specializations: [
              { label: "NIAT Corporate B.tech(CSE)", href: "/niat-corporate-b-tech-in-cse" },
              { label: "Computer Science and Engineering", href: "/btech-computer-science-and-engineering" },
              { label: "Computer Science and Information Technology", href: "/btech-computer-science-and-information-technology" },
              { label: "Computer Science (Software Engineering)", href: "/btech-computer-science-software-engineering" },
              { label: "Computer Science (AI & Machine Learning)", href: "/btech-artificial-intelligence-machine-learning" },
              { label: "Computer Science & Engineering (Data Science)", href: "/btech-computer-science-engineering-data-science" },
              { label: "Computer Science & Engineering (Cyber Security)", href: "/btech-computer-science-engineering-cyber-security" },
            ],
          },
          {
            parent: { label: "B.SC.", href: "/bsc" },
            specializations: [
              { label: "Computer Science", href: "/bsc-computer-science" },
            ],
          },
          {
            parent: { label: "BPT - Prashanti Kutiram Campus", href: "/bachelor-of-physiotherapy" },
            specializations: [
              { label: "Bachelor of Physiotherapy", href: "/bachelor-of-physiotherapy" },
            ],
          },
        ],
      },
      {
        title: "Postgraduate",
        courseGroups: [
          {
            parent: { label: "MCA", href: "/mca" },
            specializations: [
              { label: "Cloud Computing and DevOps", href: "/mca-cloud-computing-devops" },
              { label: "Cybersecurity, Ethical Hacking and Cyber Forensics", href: "/mca-cybersecurity-ethical-hacking-cyber-forensics" },
              { label: "AI, Machine Learning and Data Science", href: "/mca-artificial-intelligence-machine-learning-data-science" },
              { label: "Data Science", href: "/mca-data-science" },
            ],
          },
          {
            parent: { label: "MBA", href: "/mba" },
            specializations: [
              { label: "DUAL - Finance, Marketing, HR, Operations, Business Analytics, International Business", href: "/mba-dual-specialisation" },
              { label: "PRO - Marketing, Finance and Business Analytics", href: "/mba-marketing-finance-business-analytics" },
              { label: "PRO - Hospital Administration with Medical Tourism", href: "/mba-hospital-administration-with-medical-tourism" },
              { label: "PRO - Logistics and Supply Chain Management", href: "/mba-logistics-and-supply-chain-management" },
              { label: "PRO - Digital Business Management and Data Analytics", href: "/mba-digital-business-management-data-analytics" },
              { label: "PRO - AI and Data Analytics", href: "/mba-pro-ai-data-analytics" },
              { label: "Digital Marketing and AI", href: "/mba-digital-marketing-and-ai" },
            ],
          },
          {
            parent: { label: "M.SC.", href: "/msc" },
            specializations: [
              { label: "Cybersecurity, Ethical Hacking and Cyber Forensics", href: "/msc-cybersecurity-ethical-hacking-cyber-forensics" },
              { label: "Data Science", href: "/msc-data-science" },
              { label: "Clinical Psychology", href: "/msc-clinical-psychology" },
              { label: "Neuro Psychology", href: "/msc-neuropsychology" },
              { label: "Counselling Psychology", href: "/msc-counselling-psychology" },
              { label: "Health Psychology", href: "/msc-health-psychology" },
            ],
          },
        ],
      },
      {
        title: "D.Sc., D.Litt",
        links: [
          { label: "D.Sc., D.Litt", href: "/dlit" },
        ],
      },
      {
        title: "Yoga Programmes",
        courseGroups: [
          {
            parent: { label: "Yoga Instructor Courses", href: "/yoga-instructor-course" },
            specializations: [
              { label: "YIC Online", href: "/yic-online" },
              { label: "Non Residential YIC", href: "/non-residential-yic" },
            ],
          },
          {
            parent: { label: "B.Sc. Yoga", href: "/bsc-yoga-vedic-therapy" },
            specializations: [
              { label: "Yoga & Vedic Therapy", href: "/bsc-yoga-vedic-therapy" },
              { label: "Yoga Therapy", href: "/bachelor-of-science-in-yoga-therapy" },
            ],
          },
          {
            parent: { label: "M.Sc. Yoga", href: "/master-of-science-in-yoga-therapy" },
            specializations: [
              { label: "Yoga Therapy", href: "/master-of-science-in-yoga-therapy" },
              { label: "Yoga & Vedic Therapy", href: "/master-of-science-yoga-vedic-therapy" },
            ],
          },
          {
            parent: { label: "PG Diploma", href: "/post-graduate-diploma-in-yoga-therapy" },
            specializations: [
              { label: "Yoga Therapy", href: "/post-graduate-diploma-in-yoga-therapy" },
              { label: "Yoga for Doctors", href: "/post-graduate-yoga-diploma-for-doctors" },
            ],
          },
          {
            parent: { label: "BNYS", href: "/bachelor-of-naturopathy-and-yogic-sciences" },
          },
          {
            parent: { label: "MD Yoga", href: "/doctor-of-medicine-yoga" },
          },
          {
            parent: { label: "Ph.D - Yoga", href: "/phd-yoga" },
          },
          {
            parent: { label: "SMET", href: "/self-management-of-excessive-tension" },
          },
          {
            parent: { label: "Ayurveda Lifestyle Management", href: "/ayurveda-lifestyle-management-course" },
          },
          {
            parent: { label: "Division Of Yoga and Humanities", href: "/division-of-yoga-and-humanities" },
          },
        ],
      },
      {
        title: "Ph.D Programmes",
        links: [
          { label: "Ph.D - Computer Science", href: "/doctor-of-philosophy-in-computer-science" },
          { label: "Ph.D - Computer Science and Engineering", href: "/doctor-of-philosophy-in-computer-science-and-engineering" },
          { label: "Ph.D - Commerce and Management", href: "/doctor-of-philosophy-in-management-and-commerce" },
          { label: "Ph.D - Applied Sciences", href: "/doctor-of-philosophy-in-applied-sciences" },
          { label: "Ph.D - Allied and Healthcare Professions", href: "/doctor-of-philosophy-in-allied-sciences" },
          { label: "Ph.D - English", href: "/doctor-of-philosophy-in-english" },
        ],
      },
      {
        title: "Allied and Healthcare Professions",
        links: [
          { label: "Ph.D - Allied and Healthcare Professions", href: "/doctor-of-philosophy-in-allied-sciences" },
          { label: "Bachelor of Physiotherapy", href: "/bachelor-of-physiotherapy" },
          { label: "Bachelor of Occupational Therapy", href: "/bachelor-of-occupational-therapy" },
          { label: "B.Sc. - Clinical Psychology", href: "/bsc-clinical-psychology" },
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
    label: "Departments",
    links: [
      { label: "School of Commerce & Management", href: "/department-of-commerce-and-management" },
      { label: "School of Engineering & Technology", href: "/department-of-engineering-and-technology" },
      { label: "School of Computer Science & Applications", href: "/department-of-computer-science-application" },
      { label: "School of Allied Healthcare Professionals", href: "/department-of-allied-health-care-professionals" },
      { label: "School of Allied Health Sciences", href: "/department-of-allied-health-science" },
      { label: "School of Physiotherapy", href: "/department-of-physiotherapy" },
      { label: "Division of Yoga & Humanities (GCC)", href: "/division-of-yoga-and-humanities-gcc" },
      { label: "School of Science & Humanities", href: "/department-of-science-and-humanities" },
    ],
  },
  {
    label: "Research",
    links: [
      { label: "About Research at S-VYASA", href: "/research" },
      { label: "Research Facility", href: "/research-facility" },
      { label: "Research Faculty", href: "/research-faculty" },
      { label: "Ongoing Projects", href: "/research-ongoing-projects" },
      { label: "Completed Projects", href: "/research-completed-projects" },
      { label: "Adopt a Research Project", href: "/adopt-research-project" },
      { label: "Research Publications", href: "/research-publications" },
      { label: "Lab Events", href: "/research-lab-events" },
      { label: "CPEB Project Proposal", href: "/cpeb-project-proposal" },
    ],
  },
  {
    label: "Important Links",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Careers", href: "/career" },
      { label: "Library", href: "/library" },
      { label: "Exam", href: "/exams" },
      { label: "IQAC", href: "/iqac" },
      { label: "Edtech Partners", href: "/edtech-partners" },
      { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
      { label: "IIC", href: "/iic" },
      { label: "AIU", href: "/aiu" },
    ],
  },
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
  { label: "S-Vyasa University", href: "/s-vyasa-university" },
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
  { label: "B.Sc. Yoga Vedic Therapy", href: "/bsc-yoga-vedic-therapy" },
  { label: "B.Sc. Yoga Therapy", href: "/bachelor-of-science-in-yoga-therapy" },
  { label: "M.Sc. Yoga Therapy", href: "/master-of-science-in-yoga-therapy" },
  { label: "M.Sc. Yoga Vedic Therapy", href: "/master-of-science-yoga-vedic-therapy" },
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
  { label: "Research Facility", href: "/research-facility" },
  { label: "Research Faculty", href: "/research-faculty" },
  { label: "Ongoing Projects", href: "/research-ongoing-projects" },
  { label: "Completed Projects", href: "/research-completed-projects" },
  { label: "Adopt Research", href: "/adopt-research-project" },
  { label: "Research Publications", href: "/research-publications" },
  { label: "Lab Events", href: "/research-lab-events" },
  { label: "CPEB Proposal", href: "/cpeb-project-proposal" },
  
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
