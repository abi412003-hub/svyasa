export const libraryStats = [
  { label: "Volumes", value: 2846, icon: "book" },
  { label: "Titles", value: 641, icon: "bookmark" },
  { label: "Users Served", value: 500, icon: "users" },
  { label: "Reading Seats", value: 150, icon: "armchair" },
];

export const libraryTimings = [
  { days: "Monday to Saturday", time: "8:30 AM to 7:00 PM", isHoliday: false },
  { days: "During Exam", time: "8:30 AM to 8:00 PM", isHoliday: false },
  { days: "2nd Saturday & Sundays", time: "Holiday", isHoliday: true },
  { days: "Govt. Holidays", time: "Holiday", isHoliday: true },
];

export const libraryServices = [
  { title: "Lending Service", icon: "lending" },
  { title: "Reference Service", icon: "reference" },
  { title: "Referral Service", icon: "referral" },
  { title: "Newspapers / Magazines", icon: "news" },
  { title: "Current Awareness Service", icon: "awareness" },
  { title: "Digital Library & E-Learning", icon: "digital" },
  { title: "CD ROM & DVDs", icon: "cd" },
  { title: "Internet & Wi-Fi", icon: "internet" },
  { title: "Fully Air Conditioned", icon: "ac" },
];

export const borrowingPrivileges = [
  { slNo: 1, category: "Faculty Members", items: "04 Books", period: "2 Months" },
  { slNo: 2, category: "UG Students", items: "02 Books", period: "15 + 15 Days" },
  { slNo: 3, category: "PG Students", items: "02 Books", period: "15 + 15 Days" },
  { slNo: 4, category: "Research Scholars", items: "03 Books", period: "15 + 15 Days" },
];

export const libraryRules = [
  {
    id: "entry",
    title: "Entry & Identification",
    rules: [
      "Every user of the University Library shall record their visit by signing in the register kept at the entrance or through the Library Gate.",
      "Users shall be required to produce their identity cards on demand.",
      "Personal belongings such as umbrellas, handbags, personal books, etc. are not allowed inside the library. Users can deposit such belongings at the Property Counter.",
      "The university shall not be responsible for any belongings, money, etc., left by the users.",
      "For access to the reading hall, members shall contact the desk-in-charge of the section for their information needs.",
    ],
  },
  {
    id: "borrowing",
    title: "Book Borrowing & Return Policies",
    rules: [
      "To borrow books, the user/reader shall present his/her ID card and get the books issued for the prescribed period.",
      "Books should be returned on time and cannot be renewed online. They must be renewed in person before the due date.",
      "Books should be returned within the specified period. An overdue fine will be levied for late returns.",
      "Materials borrowed from the Library are the responsibility of the borrower and must be returned in good condition.",
      "Lost or damaged books should be reported immediately. Users must pay the current price or may replace the book with a new edition.",
      "All materials borrowed from the Library, should be returned before leaving the University for vacation/semester break.",
    ],
  },
  {
    id: "conduct",
    title: "Library Conduct & Discipline",
    rules: [
      "Users are required to keep the library premises clean and maintain silence.",
      "Marking, underlining, writing, tearing pages or damaging books in any way whatsoever is strictly forbidden.",
      "Food items are not allowed inside the library.",
      "Mobile phones should be kept in silent mode. Loud conversations, discussions or phone calls are not permitted in the library.",
      "Users shall not disturb other readers, staff, or indulge in any activity that is distasteful to others.",
      "Smoking, chewing gum, or chewing tobacco inside the library is strictly prohibited.",
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Notices",
    rules: [
      "All library notices issued by the University Librarian shall be binding on all the users of the Library.",
      "Users shall follow the instruction of the Library Staff.",
      "Any complaint against the library staff shall be made to the Librarian in writing.",
      "All users must cooperate with the library security personnel.",
      "Violation of any rule may result in suspension of library privileges or disciplinary action.",
    ],
  },
];

export const ugResources = [
  { slNo: 1, department: "B-TECH", titles: 172, volumes: 443 },
  { slNo: 2, department: "BBA", titles: 23, volumes: 365 },
  { slNo: 3, department: "BCOM", titles: 63, volumes: 515 },
  { slNo: 4, department: "BCA", titles: 101, volumes: 400 },
  { slNo: 5, department: "BSc (Clinical Psychology)", titles: "12+26", volumes: 175 },
  { slNo: 6, department: "BOT", titles: 112, volumes: 40 },
  { slNo: 7, department: "BPTR", titles: 15, volumes: 500 },
  { slNo: 8, department: "YOGA", titles: 61, volumes: 15 },
];

export const pgResources = [
  { slNo: 1, department: "MBA", titles: 212, volumes: 791 },
  { slNo: 2, department: "MCA", titles: 8, volumes: 100 },
  { slNo: 3, department: "MSc (Clinical Psychology)", titles: 16, volumes: 60 },
];

export const openAccessResources = [
  { name: "NDLI", url: "https://ndl.iitkgp.ac.in/" },
  { name: "Indian Academy of Sciences", url: "https://www.ias.ac.in/" },
  { name: "Shodhganga", url: "https://shodhganga.inflibnet.ac.in/" },
  { name: "Shodhgangotri", url: "https://shodhgangotri.inflibnet.ac.in/" },
  { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/" },
  { name: "NPTEL", url: "https://nptel.ac.in/" },
  { name: "Swayam", url: "https://swayam.gov.in/" },
  { name: "E-PG Pathashala", url: "https://epgp.inflibnet.ac.in/" },
  { name: "DOAJ", url: "https://doaj.org/" },
  { name: "Directory of Open Access Books", url: "https://www.doabooks.org/" },
  { name: "Swayam Prabha", url: "https://www.swayamprabha.gov.in/" },
  { name: "Science Direct", url: "https://www.sciencedirect.com/" },
  { name: "Sakshat", url: "https://sakshat.ac.in/" },
  { name: "OER Commons", url: "https://www.oercommons.org/" },
  { name: "E-Acharya", url: "https://eacharya.inflibnet.ac.in/" },
  { name: "Virtual Labs", url: "https://www.vlab.co.in/" },
  { name: "E-Gyankosh", url: "https://egyankosh.ac.in/" },
  { name: "Open Textbook Library", url: "https://open.umn.edu/opentextbooks" },
  { name: "ELSEVIER", url: "https://www.elsevier.com/" },
  { name: "Taylor and Francis", url: "https://www.tandfonline.com/" },
  { name: "Springer Open", url: "https://www.springeropen.com/" },
];

export const eNewspapers: Record<string, string[]> = {
  Kannada: [
    "Prajavani", "Vijaya Karnataka", "Kannada Prabha", "Sanjevani", "Vijayavani",
    "Udayavani", "Varthabharathi", "Vishwavani", "Chitra Loka", "Sudha",
    "Karmaveera", "Anupama", "Mayura",
  ],
  English: [
    "Times of India", "The Hindu", "The Indian Express", "Live Mint", "Deccan Herald",
    "Deccan Chronicle", "The Economic Times", "Business Standard", "Financial Express",
    "Business Line", "Financial Chronicle", "PC Quest", "Psychologs", "Down to Earth",
    "BioSpectrum India", "Sport Star", "Teacher Plus", "Vogue", "The Week",
    "Women Sera", "Organiser", "Business Today", "India Today", "Business World",
    "Competition Review", "Complete Wellbeing", "Data Quest", "Digit", "Filmfare",
    "Front Line", "GK Today", "Outlook India",
  ],
  Malayalam: [
    "Mangalam", "Manorama", "Mathrubhumi", "Madhyamam", "Keralakaumudi",
    "Sathyamonline", "Deshabhimani", "Chandrika", "Keraleeyam Masika",
    "Madhyamam Weekly", "Mathrubhumi Weekly", "Kalakaumudi",
  ],
  Telugu: [
    "Eenadu", "Sakshi", "Andhrajyothy", "Namaste Telangana", "Velugu",
    "Nava Telangana", "Surya", "Telugu Prabha",
  ],
  Tamil: [
    "Ananda Vikatan", "Kungumam", "Kumudam", "Thuglak", "KalkiOnline",
    "Puthiyathalaimurai", "Maalaimalar",
  ],
};

export const usefulLinks = [
  { name: "NAAC", url: "https://www.naac.gov.in/" },
  { name: "NBA", url: "https://www.nbaind.org/" },
  { name: "AICTE", url: "https://www.aicte-india.org/" },
  { name: "ISRO", url: "https://www.isro.gov.in/" },
  { name: "Higher Education Dept", url: "https://hrd.karnataka.gov.in/" },
  { name: "DRDO", url: "https://www.drdo.gov.in/" },
  { name: "Dept of Public Libraries", url: "https://dpl.karnataka.gov.in/" },
  { name: "Inflibnet", url: "https://www.inflibnet.ac.in/" },
  { name: "NTA", url: "https://nta.ac.in/" },
  { name: "State Scholarship Portal", url: "https://karepass.cgg.gov.in/" },
  { name: "Ministry of Education", url: "https://www.education.gov.in/" },
  { name: "National Scholarship Portal", url: "https://scholarships.gov.in/" },
  { name: "NAD", url: "https://nad.gov.in/" },
  { name: "Constitution of India", url: "https://legislative.gov.in/constitution-of-india" },
  { name: "National Portal", url: "https://www.india.gov.in/" },
  { name: "UGC", url: "https://www.ugc.gov.in/" },
  { name: "UPSC", url: "https://www.upsc.gov.in/" },
  { name: "KPSC", url: "https://kpsc.kar.nic.in/" },
  { name: "UNESCO", url: "https://www.unesco.org/" },
  { name: "RBI", url: "https://www.rbi.org.in/" },
  { name: "Election Commission", url: "https://eci.gov.in/" },
  { name: "Supreme Court", url: "https://main.sci.gov.in/" },
  { name: "Indian Railways", url: "https://www.indianrailways.gov.in/" },
];

export const libraryStaff = [
  {
    name: "Mr. Prahladha",
    qualifications: "M.L.I.Sc., B.L.I.Sc., K-SET",
    designation: "Assistant Librarian",
    email: "prahladhar4@gmail.com",
    photo: "img/library-staff.jpg",
  },
  {
    name: "Dr. Deepa R Kulkarni",
    qualifications: "M.L.I.Sc., PhD., (UGC-PDF)",
    designation: "Assistant Librarian",
    email: "rdeepakulkarni@gmail.com",
    photo: "img/library-staff.jpg",
  },
];
