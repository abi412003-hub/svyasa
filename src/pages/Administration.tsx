import React, { useRef, useState } from "react";
import chancellorDayanandaPhoto from "@/assets/chancellor-dayananda-swamy.jpg";
import ecRamakrishnaPhoto from "@/assets/ec-ramakrishna.jpg";
import ecJayaramanPhoto from "@/assets/ec-jayaraman.jpg";
import ecRamachandraBhatPhoto from "@/assets/ec-ramachandra-bhat.png";
import ecSridharaSwamyPhoto from "@/assets/ec-sridhara-swamy.png";
import ecNateshBabuPhoto from "@/assets/ec-natesh-babu.png";
import ecSoubhagyalaxmiPhoto from "@/assets/ec-soubhagyalaxmi-mohanty.png";
import ecMembersGroupPhoto from "@/assets/ec-members-group.jpg";
import ecSridharSubramanianPhoto from "@/assets/ec-sridhar-subramanian.jpg";
import ecAmitSinghPhoto from "@/assets/ec-amit-singh.jpg";
import ecGauravSinhaPhoto from "@/assets/ec-gaurav-sinha.jpg";
import ecDhananjayaPhoto from "@/assets/ec-dhananjaya.jpg";
import ecSubhadradeviPhoto from "@/assets/ec-subhadra-devi.jpg";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import {
  X, Award, BookOpen, FlaskConical, Star, User, ChevronDown,
  Building2, GraduationCap, Users, ShieldCheck, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

// ─── TYPES ─────────────────────────────────────────────────────────────────────
export interface AdminProfile {
  id: string;
  name: string;
  designation: string;
  description: string;
  qualifications: string;
  photo?: string;
  gender: "male" | "female";
  section: "ec" | "chancellor-row" | "vc-row" | "registrar-row" | "dean-row" | "deans" | "admin";
  achievements?: string[];
  expertise?: string;
}

// ─── AIIU PHOTO BASE URL ──────────────────────────────────────────────────────
const AIIU = (file: string) =>
  `https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images/events/aiiu/${file}`;

// ─── EC CATEGORY GROUPS ───────────────────────────────────────────────────────
export interface ECMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  qualifications: string;
  photo?: string;
  photoPosition?: string;
  initials?: string;
  gender: "male" | "female";
  achievements?: string[];
  expertise?: string;
}

export interface ECCategory {
  id: string;
  label: string;
  members: ECMember[];
}

const ecCategories: ECCategory[] = [
  {
    id: "university-leadership",
    label: "University Leadership",
    members: [
      {
        id: "ec-nagendra",
        name: "Dr. H R Nagendra",
        designation: "President, S-VYASA Society",
        description: "Padma Shri awardee and ex-NASA scientist who dedicated his life to Yoga research and education, leading S-VYASA's mission of integrating ancient yogic wisdom with modern science.",
        qualifications: "PhD (Mechanical Engineering), IISc Bangalore; Post-Doctoral Fellow, University of British Columbia; Research Associate, NASA Marshall Space Flight Centre",
        photo: AIIU("1771457396886-w3xa5gca93.JPG"),
        gender: "male",
        achievements: [
          "Post-Doctoral Research Fellow, University of British Columbia, Canada (1970)",
          "Research Associate, NASA Marshall Space Flight Centre, USA (1971)",
          "Consultant, Engineering Science Laboratory, Harvard University, USA (1972)",
          "Padma Shri Award recipient (2016) for contribution to Yoga",
          "Founder and President of Vivekananda Yoga Anusandhana Samsthana",
          "Chairman of Task Force of AYUSH, Govt. of India",
        ],
        expertise: "Yoga research, integrative medicine, leadership in higher education, energy research",
      },
      {
        id: "ec-dayananda",
        name: "Dr. H R Dayananda Swamy",
        designation: "Chancellor",
        description: "Chancellor of S-VYASA Deemed to be University, providing visionary leadership and spiritual guidance to the institution, upholding the legacy of Swami Vivekananda's teachings.",
        qualifications: "PhD; Chancellor, S-VYASA Deemed to be University; Spiritual leader and academic visionary",
        photo: chancellorDayanandaPhoto,
        gender: "male",
        achievements: [
          "Chancellor, S-VYASA Deemed to be University",
          "Spiritual head of the Vivekananda Yoga lineage",
          "Guiding institutional vision aligned with Swami Vivekananda's philosophy",
        ],
        expertise: "University leadership, spiritual guidance, institutional vision, Vedanta philosophy",
      },
      {
        id: "ec-manjunath",
        name: "Dr. Manjunath N. K",
        designation: "Chairperson, Vice Chancellor",
        description: "Has delivered lectures on evidence-based Yoga therapy at Harvard Medical School, Monash University, Royal College of Medicine, and Shanghai University of Sports. Editor, International Journal of Yoga.",
        qualifications: "BNYS, PhD, D.Sc.; Editor, International Journal of Yoga (IJOY); Founding Director, Vivekananda Yoga University, California",
        photo: AIIU("1771457392679-ig24wth6fjs.JPG"),
        gender: "male",
        achievements: [
          "Delivered lectures at Harvard Medical School and Monash University",
          "Editor of International Journal of Yoga (IJOY)",
          "Member of Scientific Advisory Committee, DST (SATYAM program)",
          "Member of Research Committee, Integrative Medicine, NITI Aayog",
          "Founding Director, Boston Center of Excellence, Boston, USA",
          "Vice-President of Asian Yoga Therapy Association, Singapore",
        ],
        expertise: "Yoga therapy, clinical trials, integrative medicine, university governance",
      },
      {
        id: "ec-ramakrishna",
        name: "Dr. B. R. Ramakrishna",
        designation: "Pro-Chancellor",
        description: "Experienced academic leader serving as Pro-Chancellor of S-VYASA University, overseeing institutional strategy, governance compliance, and long-term development initiatives.",
        qualifications: "PhD; Senior academic administrator with decades of experience in university leadership and governance",
        photo: ecRamakrishnaPhoto,
        gender: "male",
        expertise: "University leadership, institutional strategy, governance, policy development",
      },
      {
        id: "ec-sivasankara",
        name: "Prof. Siva Sankara Sai",
        designation: "Pro-Vice Chancellor",
        description: "Seasoned academic administrator supporting the Vice Chancellor in all academic and administrative matters, leading interdisciplinary research and international collaborations.",
        qualifications: "PhD; Professor with extensive academic and administrative experience in higher education institutions",
        photo: AIIU("1771457384777-exhsp0hjbco.jpeg"),
        gender: "male",
        expertise: "Academic administration, curriculum design, international collaborations, faculty development",
      },
      {
        id: "ec-jayaraman",
        name: "Prof. Jayaraman",
        designation: "Dean of Academics",
        description: "Oversees the School of Yogic Sciences and VMAC-VTR, guiding programs that integrate classical yoga philosophy with modern pedagogical approaches. Leads academic planning and curriculum development.",
        qualifications: "PhD (Yoga Philosophy); MSc (Yoga); Vedanta scholar with 25+ years academic experience",
        photo: ecJayaramanPhoto,
        gender: "male",
        achievements: [
          "Authored 5 books on Yoga philosophy",
          "Designed the landmark BSc YVT curriculum",
          "Led academic quality assurance for NAAC accreditation",
        ],
        expertise: "Yoga philosophy, Vedanta, classical yoga texts, spiritual education, academic governance",
      },
    ],
  },
  {
    id: "eminent-academicians",
    label: "Eminent Academicians Nominated by the Chancellor",
    members: [
      {
        id: "ec-ramachandra-bhat",
        name: "Dr. Ramachandra G Bhat",
        designation: "Director at VMTR",
        description: "Eminent academician and Director at VMTR (Vivekananda Memorial Therapeutic Research), contributing expertise in yoga therapy research and evidence-based clinical practices.",
        qualifications: "PhD; Director, Vivekananda Memorial Therapeutic Research; Extensive research publications in yoga therapy",
        photo: ecRamachandraBhatPhoto,
        gender: "male",
        expertise: "Yoga therapy research, evidence-based practice, therapeutic applications of yoga",
      },
      {
        id: "ec-nagarathna",
        name: "Dr. Nagarathna",
        designation: "Member",
        description: "Distinguished yoga researcher and clinician contributing her expertise in integrative medicine and yoga therapy to the Executive Council's academic and research governance.",
        qualifications: "MBBS, MD; Senior Physician and Researcher specializing in integrative medicine and yoga therapy",
        photo: AIIU("1771457401844-sasvxg7vk5.jpg"),
        gender: "female",
        expertise: "Integrative medicine, yoga therapy, clinical research, evidence-based yoga",
      },
    ],
  },
  {
    id: "professor",
    label: "One Professor",
    members: [
      {
        id: "ec-mn-ramesh",
        name: "Dr. M N Ramesh",
        designation: "Director of Anvesana",
        description: "Professor and Director of Anvesana Research Center, leading cutting-edge research programs that bridge yogic sciences with modern scientific methodologies and clinical applications.",
        qualifications: "PhD; Professor and Director, Anvesana Research Center; Research publications in yoga and life sciences",
        photo: AIIU("1771457398673-q8e3ow89mhe.JPG"),
        gender: "male",
        expertise: "Research direction, yoga-science integration, Anvesana research programs, academic research governance",
      },
    ],
  },
  {
    id: "associate-professor",
    label: "One Associate Professor",
    members: [
      {
        id: "ec-bharathi-dhevi",
        name: "Dr. Bharathi Dhevi V. R.",
        designation: "Associate Professor",
        description: "Associate Professor representing the faculty's academic interests and expertise in the Executive Council, contributing insights on teaching-learning quality and research standards.",
        qualifications: "PhD; Associate Professor at S-VYASA University with expertise in yoga sciences and academic research",
        photo: AIIU("1771457382485-15s7a42h8ct.jpeg"),
        gender: "female",
        expertise: "Yoga sciences, academic research, teaching-learning quality, faculty representation",
      },
    ],
  },
  {
    id: "assistant-professor",
    label: "One Assistant Professor",
    members: [
      {
        id: "ec-soubhagyalaxmi",
        name: "Dr. Soubhagyalaxmi Mohanty",
        designation: "Assistant Professor",
        description: "Assistant Professor bringing the perspective of early-career faculty to the Executive Council, contributing to policies that nurture research, teaching excellence, and academic welfare.",
        qualifications: "PhD; Assistant Professor at S-VYASA University; Research in yoga therapy and integrative health",
        photo: ecSoubhagyalaxmiPhoto,
        gender: "female",
        expertise: "Yoga therapy, integrative health, academic welfare, early-career faculty development",
      },
    ],
  },
  {
    id: "ugc-nominee",
    label: "UGC Nominee",
    members: [
      {
        id: "ec-bv-sridhara",
        name: "Dr. B. V. Sridhara Swamy",
        designation: "UGC Nominee",
        description: "University Grants Commission representative providing regulatory guidance and ensuring S-VYASA's compliance with UGC norms, standards, and quality benchmarks for higher education.",
        qualifications: "PhD; Senior UGC Nominee with extensive knowledge of higher education regulation, quality standards, and university governance frameworks",
        photo: ecSridharaSwamyPhoto,
        gender: "male",
        expertise: "Higher education policy, UGC regulations, quality assurance, institutional compliance",
      },
    ],
  },
  {
    id: "sponsoring-society",
    label: "Nominees of the Sponsoring Society",
    members: [
      {
        id: "ec-subhadra-dhevi",
        name: "Smt. Subhadra Dhevi",
        designation: "Member",
        description: "Nominee of the S-VYASA sponsoring society, representing the founding trust's vision and values in all Executive Council deliberations and institutional decisions.",
        qualifications: "Nominee of the Sponsoring Society; Contributing to institutional governance aligned with S-VYASA's founding mission",
        photo: ecSubhadradeviPhoto,
        initials: "SD",
        gender: "female",
        expertise: "Institutional governance, society representation, mission alignment",
      },
      {
        id: "ec-natesh-babu",
        name: "Dr. Natesh Babu",
        designation: "Member",
        description: "Nominee of the sponsoring society and key member of the Executive Council, contributing expertise in distance education and institutional management to governance decisions.",
        qualifications: "PhD (Yoga & Education); MEd; Certified e-Learning Designer; 15+ years in distance education management",
        photo: ecNateshBabuPhoto,
        gender: "male",
        achievements: [
          "Launched online yoga programs reaching 50+ countries",
          "Developed SCODE's LMS platform serving 5000+ students",
        ],
        expertise: "Distance education, e-learning, instructional design, program delivery at scale",
      },
    ],
  },
  {
    id: "ex-officio",
    label: "Ex-Officio Members & Officers",
    members: [
      {
        id: "ec-sony-kumari",
        name: "Prof. Sony Kumari",
        designation: "Ex-Officio Secretary, Registrar",
        description: "Chief administrative officer serving as Ex-Officio Secretary to the Executive Council, responsible for all academic records, regulatory filings, student services, and statutory reporting.",
        qualifications: "PhD; Professor and Registrar, S-VYASA University; Extensive experience in university administration and statutory compliance",
        photo: AIIU("1771457378849-gn3h9be60g.png"),
        gender: "female",
        achievements: [
          "Led transition to fully digital academic record management",
          "Coordinated NAAC peer team visits and documentation",
          "Oversees statutory reporting to UGC, NAAC, and state authorities",
        ],
        expertise: "University administration, legal compliance, academic records, statutory reporting",
      },
      {
        id: "ec-vasudev",
        name: "Dr. Vasudev Vaidya",
        designation: "Deputy Registrar",
        description: "Assists the Registrar in day-to-day administrative operations, employee relations, departmental coordination, and official correspondence management across all university departments.",
        qualifications: "PhD; Deputy Registrar, S-VYASA University; Extensive experience in academic administration and institutional coordination",
        photo: AIIU("1771457385268-c3v2zt5yj7.jpeg"),
        gender: "male",
        expertise: "Administrative operations, HR coordination, official correspondence, departmental management",
      },
      {
        id: "ec-dhananjaya",
        name: "Mr. Dhananjaya",
        designation: "Joint Director, F&A",
        description: "Joint Director of Finance and Accounts, overseeing financial planning, budgeting, and fiscal governance ensuring transparent and efficient resource allocation across S-VYASA University.",
        qualifications: "MCom; CA; Joint Director, Finance & Accounts, S-VYASA University; Expert in institutional financial management",
        photo: ecDhananjayaPhoto,
        gender: "male",
        expertise: "Financial planning, budget management, fiscal governance, institutional compliance",
      },
      {
        id: "ec-anish-antony",
        name: "Shri. Anish Antony",
        designation: "Executive Director, SCC",
        description: "Executive Director of the S-VYASA City Campus (SCC), overseeing all campus operations, strategic development, and academic programs at the Global City Campus location.",
        qualifications: "MBA; Executive Director, S-VYASA City Campus; Expert in campus administration and strategic management",
        photo: AIIU("1771457381984-bc19r9nfiq5.jpg"),
        gender: "male",
        expertise: "Campus administration, strategic management, operations, institutional development",
      },
      {
        id: "ec-amit-singh",
        name: "Dr. Amit Singh",
        designation: "Director, VASHI",
        description: "Director of VASHI (Vivekananda Advanced Studies and Health Integration), leading advanced research programs and health integration initiatives under S-VYASA's academic framework.",
        qualifications: "PhD; Director, VASHI; Research expertise in integrative health and advanced yoga studies",
        photo: ecAmitSinghPhoto,
        photoPosition: "object-top",
        gender: "male",
        expertise: "Integrative health, advanced yoga studies, research direction, health integration programs",
      },
      {
        id: "ec-sridhar-s",
        name: "Dr. Sridhar S",
        designation: "Director Academics, SCC",
        description: "Director of Academics at S-VYASA City Campus, overseeing curriculum delivery, faculty coordination, and academic quality assurance for all programs at the City Campus.",
        qualifications: "PhD; Director Academics, S-VYASA City Campus; Expertise in academic governance and curriculum management",
        photo: ecSridharSubramanianPhoto,
        gender: "male",
        expertise: "Academic governance, curriculum management, faculty coordination, quality assurance",
      },
      {
        id: "ec-gaurav-sinha",
        name: "Dr. Gaurav Sinha",
        designation: "Controller of Examinations",
        description: "Oversees all aspects of examination planning, administration, evaluation, and result declaration ensuring fairness, transparency, and adherence to academic standards at S-VYASA University.",
        qualifications: "PhD; Controller of Examinations, S-VYASA University; Expert in examination systems, digital assessment, and academic evaluation",
        photo: ecGauravSinhaPhoto,
        gender: "male",
        achievements: [
          "Implemented online examination portal for 3000+ students",
          "Introduced biometric-based attendance and examination security",
          "Ensured fair and transparent evaluation across all programs",
        ],
        expertise: "Examination systems, digital assessment, academic evaluation, anti-malpractice",
      },
    ],
  },
];

// ─── ADMINISTRATION DATA (non-EC sections) ────────────────────────────────────
const adminData: AdminProfile[] = [
  // ── Registrar Row ──
  {
    id: "registrar",
    name: "Prof. Sony Kumari",
    designation: "Registrar",
    description: "Chief administrative officer serving as Ex-Officio Secretary, responsible for all academic records, regulatory filings, student services, and statutory reporting to UGC, NAAC, and state authorities.",
    qualifications: "PhD; Professor and Registrar, S-VYASA University; Extensive experience in university administration and statutory compliance",
    photo: AIIU("1771457378849-gn3h9be60g.png"),
    gender: "female",
    section: "registrar-row",
    expertise: "University administration, legal compliance, academic records, statutory reporting",
    achievements: [
      "Led transition to fully digital academic record management",
      "Coordinated NAAC peer team visits and documentation",
      "Oversees statutory reporting to UGC, NAAC, and state authorities",
    ],
  },
  {
    id: "coe",
    name: "Dr. Gaurav Sinha",
    designation: "Controller of Examinations (COE)",
    description: "Oversees all aspects of examination planning, administration, evaluation, and result declaration ensuring fairness, transparency, and adherence to academic standards.",
    qualifications: "PhD; Controller of Examinations, S-VYASA University; Expert in examination systems, digital assessment, and academic evaluation",
    gender: "male",
    section: "registrar-row",
    expertise: "Examination systems, digital assessment, academic evaluation, anti-malpractice",
    achievements: [
      "Implemented online examination portal for 3000+ students",
      "Introduced biometric-based attendance and examination security",
    ],
  },
  {
    id: "deputy-registrar",
    name: "Dr. Vasudev Vaidya",
    designation: "Deputy Registrar",
    description: "Assists the Registrar in day-to-day administrative operations, employee relations, departmental coordination, and official correspondence management.",
    qualifications: "PhD; Deputy Registrar, S-VYASA University; Extensive experience in academic administration and institutional coordination",
    photo: AIIU("1771457385268-c3v2zt5yj7.jpeg"),
    gender: "male",
    section: "registrar-row",
    expertise: "Administrative operations, HR coordination, official correspondence, departmental management",
  },
  {
    id: "admin-officer",
    name: "Shri. Anish Antony",
    designation: "Executive Director, SCC",
    description: "Executive Director of the S-VYASA City Campus (SCC), overseeing all campus operations, strategic development, and academic programs at the Global City Campus location.",
    qualifications: "MBA; Executive Director, S-VYASA City Campus; Expert in campus administration and strategic management",
    photo: AIIU("1771457381984-bc19r9nfiq5.jpg"),
    gender: "male",
    section: "registrar-row",
    expertise: "Campus administration, strategic management, operations, institutional development",
  },
  {
    id: "liaison",
    name: "Mr. Dhananjaya",
    designation: "Joint Director, F&A",
    description: "Joint Director of Finance and Accounts, overseeing financial planning, budgeting, and fiscal governance ensuring transparent and efficient resource allocation.",
    qualifications: "MCom; CA; Joint Director, Finance & Accounts, S-VYASA University; Expert in institutional financial management",
    photo: AIIU("1771457394736-w58j44zypm.JPG"),
    gender: "male",
    section: "registrar-row",
    expertise: "Financial planning, budget management, fiscal governance, institutional compliance",
  },
  // ── Deans ──
  {
    id: "dean-academics",
    name: "Prof. Jayaraman",
    designation: "Dean of Academics",
    description: "Leads academic planning, curriculum development, faculty development programs, and quality assurance of teaching-learning processes across all schools and departments.",
    qualifications: "PhD (Yoga Philosophy); MSc (Yoga); Vedanta scholar with 25+ years academic experience",
    photo: ecJayaramanPhoto,
    gender: "male",
    section: "deans",
    expertise: "Academic governance, yoga philosophy, Vedanta, curriculum development",
    achievements: [
      "Authored 5 books on Yoga philosophy",
      "Designed the landmark BSc YVT curriculum",
      "Led academic quality assurance for NAAC accreditation",
    ],
  },
  {
    id: "dean-physical",
    name: "Prof. Narayan Behra",
    designation: "Dean of Physical Sciences",
    description: "Heads the Division of Yoga & Physical Sciences, overseeing PhD programs and research in biophysics, energy research, and the scientific study of yogic practices.",
    qualifications: "PhD (Physics); Post-Doctoral Fellow, IIT Delhi; Professor with 20+ years research experience",
    photo: `https://ui-avatars.com/api/?name=Narayan+Behra&background=1e3a5f&color=fff&size=400&bold=true`,
    gender: "male",
    section: "deans",
    expertise: "Biophysics, energy research, scientific measurement of yoga, PhD program leadership",
    achievements: [
      "PI for multiple DST-funded research projects",
      "Led establishment of Centre for Energy Research",
    ],
  },
  {
    id: "dean-yoga-spiritual",
    name: "Prof. Siva Sankara Sai",
    designation: "Pro-Vice Chancellor",
    description: "Seasoned academic administrator supporting the Vice Chancellor in all academic and administrative matters, leading interdisciplinary research and international collaborations.",
    qualifications: "PhD; Professor with extensive academic and administrative experience in higher education institutions",
    photo: AIIU("1771457382485-15s7a42h8ct.jpeg"),
    gender: "male",
    section: "deans",
    expertise: "Academic administration, curriculum design, international collaborations, faculty development",
  },
  {
    id: "code-director",
    name: "Dr. Natesh Babu",
    designation: "CODE Director",
    description: "Directs the School of Open and Distance Education (SCODE), managing online and distance learning programs that extend S-VYASA's yoga education to learners worldwide.",
    qualifications: "PhD (Yoga & Education); MEd; Certified e-Learning Designer; 15+ years in distance education",
    photo: ecNateshBabuPhoto,
    gender: "male",
    section: "deans",
    expertise: "Distance education, e-learning, instructional design, program delivery at scale",
    achievements: [
      "Launched online yoga programs reaching 50+ countries",
      "Developed SCODE's LMS platform serving 5000+ students",
    ],
  },
  {
    id: "dir-yoga-humanities",
    name: "Dr. Muralidhar Kanchi",
    designation: "Director of Yoga & Humanities",
    description: "Directs the Division of Yoga & Humanities, overseeing PhD programs, Yoga Instructor Courses (YIC), and research in the philosophical and cultural dimensions of yoga.",
    qualifications: "PhD (Sanskrit & Yoga); MA (Sanskrit); Vedic scholar and yoga historian with 20+ years experience",
    photo: `https://ui-avatars.com/api/?name=Muralidhar+Kanchi&background=1e3a5f&color=fff&size=400&bold=true`,
    gender: "male",
    section: "deans",
    expertise: "Sanskrit, yoga history, Vedic philosophy, YIC curriculum, humanities research",
    achievements: [
      "Established the Vedic text digitization project at S-VYASA",
      "Translated 10 classical yoga texts into English",
    ],
  },
  {
    id: "dir-sridhar",
    name: "Dr. Sridhar S",
    designation: "Director Academics, SCC",
    description: "Director of Academics at S-VYASA City Campus, overseeing curriculum delivery, faculty coordination, and academic quality assurance for all programs at the City Campus.",
    qualifications: "PhD; Director Academics, S-VYASA City Campus; Expertise in academic governance and curriculum management",
    photo: AIIU("1771457400614-v94tu13p01.jpg"),
    gender: "male",
    section: "deans",
    expertise: "Academic governance, curriculum management, faculty coordination, quality assurance",
  },
  {
    id: "dir-amit",
    name: "Dr. Amit Singh",
    designation: "Director, VASHI",
    description: "Director of VASHI (Vivekananda Advanced Studies and Health Integration), leading advanced research programs and health integration initiatives under S-VYASA's academic framework.",
    qualifications: "PhD; Director, VASHI; Research expertise in integrative health and advanced yoga studies",
    photo: AIIU("1771457398673-q8e3ow89mhe.JPG"),
    gender: "male",
    section: "deans",
    expertise: "Integrative health, advanced yoga studies, research direction, health integration programs",
  },
  {
    id: "dir-ramesh",
    name: "Dr. M N Ramesh",
    designation: "Director of Anvesana",
    description: "Professor and Director of Anvesana Research Center, leading cutting-edge research programs that bridge yogic sciences with modern scientific methodologies.",
    qualifications: "PhD; Professor and Director, Anvesana Research Center; Research publications in yoga and life sciences",
    photo: AIIU("1771457384294-oupaey091lm.jpeg"),
    gender: "male",
    section: "deans",
    expertise: "Research direction, yoga-science integration, Anvesana research programs",
  },
  // ── Campus Administration ──
  {
    id: "hostel-girls",
    name: "Dr. Savitha Rao",
    designation: "Girls Hostel Warden",
    description: "Ensures a safe, supportive, and holistic living environment for female students, integrating yogic lifestyle principles into daily hostel routines.",
    qualifications: "PhD (Yoga); MSc; Trained counsellor; 12 years in student welfare",
    photo: `https://ui-avatars.com/api/?name=Savitha+Rao&background=7c3d12&color=fff&size=400&bold=true`,
    gender: "female",
    section: "admin",
    expertise: "Student welfare, counselling, hostel administration, yoga lifestyle integration",
  },
  {
    id: "hostel-boys",
    name: "Shri. Ganesh Kumar",
    designation: "Boys Hostel Warden",
    description: "Manages the boys' residential facilities, fostering a disciplined, yogic lifestyle environment that supports students' academic and personal growth.",
    qualifications: "MSc Yoga; Certified Yoga Teacher; 10 years in student services",
    photo: `https://ui-avatars.com/api/?name=Ganesh+Kumar&background=1e3a5f&color=fff&size=400&bold=true`,
    gender: "male",
    section: "admin",
    expertise: "Student services, residential management, yogic lifestyle facilitation",
  },
  {
    id: "hr",
    name: "Shri. Pradeep Shenoy",
    designation: "Head, Human Resources",
    description: "Oversees faculty and staff recruitment, appraisals, welfare, and HR policies aligned with the university's mission and statutory employment requirements.",
    qualifications: "MBA (HR); PG Diploma in Labour Laws; SHRM Certified; 14 years HR experience",
    photo: `https://ui-avatars.com/api/?name=Pradeep+Shenoy&background=1e3a5f&color=fff&size=400&bold=true`,
    gender: "male",
    section: "admin",
    expertise: "HR management, talent acquisition, employee welfare, labour compliance",
  },
  {
    id: "campus",
    name: "Shri. Vinay Hebbar",
    designation: "Campus Maintenance Officer",
    description: "Responsible for the upkeep, renovation, and sustainable maintenance of all campus facilities across S-VYASA's Bengaluru and Prashanti campuses.",
    qualifications: "BE (Civil Engineering); Diploma in Facilities Management; 16 years campus maintenance",
    photo: `https://ui-avatars.com/api/?name=Vinay+Hebbar&background=1e3a5f&color=fff&size=400&bold=true`,
    gender: "male",
    section: "admin",
    expertise: "Civil maintenance, sustainable campus management, green building practices",
  },
];

// ─── SECTION CONFIG ────────────────────────────────────────────────────────────
const sections = [
  {
    id: "ec",
    label: "Section 01",
    title: "Executive Council",
    icon: ShieldCheck,
    description: "The principal governing body responsible for overall administration and policy of S-VYASA University.",
    color: "hsl(var(--saffron))",
    bgAccent: "from-amber-50 to-orange-50",
  },
  {
    id: "registrar-row",
    label: "Section 02",
    title: "Administration & Registrar's Office",
    icon: Building2,
    description: "Key administrative officials ensuring smooth day-to-day operations, examinations, and regulatory compliance.",
    color: "hsl(var(--teal))",
    bgAccent: "from-teal-50 to-cyan-50",
  },
  {
    id: "deans",
    label: "Section 03",
    title: "Deans & Directors",
    icon: GraduationCap,
    description: "Academic leaders heading the five divisions and SCODE, driving research, curriculum, and institutional excellence.",
    color: "hsl(var(--navy))",
    bgAccent: "from-blue-50 to-indigo-50",
  },
  {
    id: "admin",
    label: "Section 04",
    title: "Campus Administration",
    icon: Users,
    description: "Campus-level administrators managing student welfare, human resources, and facility operations.",
    color: "hsl(var(--saffron-dark))",
    bgAccent: "from-rose-50 to-orange-50",
  },
];

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// ─── AVATAR ───────────────────────────────────────────────────────────────────
function AdminAvatar({ photo, name, initials, size = "lg" }: { photo?: string; name: string; initials?: string; size?: "sm" | "md" | "lg" | "xl" | "2xl" }) {
  const [err, setErr] = useState(false);
  const cls = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
    xl: "w-28 h-28",
    "2xl": "w-36 h-36",
  }[size];
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials || name)}&background=92400e&color=fff&size=200&bold=true`;
  return (
    <img
      src={!photo || err ? fallback : photo}
      alt={name}
      className={`${cls} rounded-2xl object-cover`}
      onError={() => setErr(true)}
      loading="lazy"
    />
  );
}

// ─── MEMBER CARD ──────────────────────────────────────────────────────────────
function MemberCard({ member, onClick, featured = false }: { member: AnyMember; onClick: () => void; featured?: boolean }) {
  if (featured) {
    return (
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -6, boxShadow: "0 24px 48px -12px hsla(35,92%,33%,0.18)" }}
        onClick={onClick}
        className="group cursor-pointer bg-white border border-border rounded-2xl overflow-hidden hover:border-[hsl(var(--saffron))]/60 transition-all duration-300"
      >
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
          <img
            src={member.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=92400e&color=fff&size=400&bold=true`}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-[hsl(var(--saffron))] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2">
              {member.designation}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-['Playfair_Display',serif] text-lg text-[hsl(var(--navy))] font-bold leading-tight mb-1">
            {member.name}
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed line-clamp-3 mb-4">
            {member.description}
          </p>
          <button className="text-xs font-semibold text-[hsl(var(--saffron))] border border-[hsl(var(--saffron))]/40 px-4 py-1.5 rounded-full group-hover:bg-[hsl(var(--saffron))] group-hover:text-white transition-all duration-200">
            View Profile →
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, boxShadow: "0 16px 32px -8px hsla(210,52%,23%,0.12)" }}
      onClick={onClick}
      className="group cursor-pointer bg-white border border-border rounded-xl p-5 hover:border-[hsl(var(--teal))]/50 transition-all duration-200 flex gap-4 items-start"
    >
      <div className="shrink-0 rounded-xl overflow-hidden border-2 border-[hsl(var(--cream))] group-hover:border-[hsl(var(--saffron))]/40 transition-colors">
        <AdminAvatar photo={member.photo} name={member.name} size="lg" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-['Playfair_Display',serif] font-bold text-[hsl(var(--navy))] text-base leading-tight mb-0.5">
          {member.name}
        </h3>
        <p className="text-[hsl(var(--teal))] text-xs font-medium mb-2">{member.designation}</p>
        <p className="text-[hsl(var(--muted-foreground))] text-xs leading-relaxed line-clamp-2">
          {member.description}
        </p>
      </div>
      <span className="text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--saffron))] transition-colors text-lg shrink-0 mt-1">›</span>
    </motion.div>
  );
}

// ─── PROFILE DRAWER ───────────────────────────────────────────────────────────
type AnyMember = AdminProfile | ECMember;
function ProfileDrawer({ member, onClose }: { member: AnyMember; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-end"
        onClick={onClose}
      >
        <motion.aside
          key="drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative bg-white h-full w-full max-w-xl overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div
            className="sticky top-0 z-10 px-8 pt-8 pb-6"
            style={{ background: "linear-gradient(160deg, hsl(35 92% 18%), hsl(25 80% 28%))" }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <div className="flex items-start gap-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/30 shrink-0">
                <AdminAvatar photo={member.photo} name={member.name} size="xl" />
              </div>
              <div className="pt-1">
                <p className="text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {'section' in member
                    ? (member.section === "ec" ? "Executive Council" :
                       member.section === "deans" ? "Dean / Director" :
                       member.section === "registrar-row" ? "Administration" : "Campus Administration")
                    : "Executive Council"}
                </p>
                <h2 className="text-white font-['Playfair_Display',serif] text-xl font-bold leading-snug mb-1">
                  {member.name}
                </h2>
                <p className="text-white/70 text-sm">{member.designation}</p>
              </div>
            </div>
            {member.qualifications && (
              <div className="mt-5 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                <div className="flex items-start gap-2">
                  <GraduationCap size={15} className="text-amber-300 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-1">Qualifications</p>
                    <p className="text-white/85 text-sm leading-relaxed">{member.qualifications}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Body */}
          <div className="px-8 py-8 space-y-8">
            {/* Description */}
            <div>
              <p className="text-[hsl(var(--foreground))] text-base leading-relaxed">{member.description}</p>
            </div>

            {member.achievements && member.achievements.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-[hsl(var(--saffron))]" size={18} />
                  <h3 className="font-semibold text-[hsl(var(--navy))] text-base">Key Achievements</h3>
                </div>
                <ul className="space-y-2.5">
                  {member.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--saffron))] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.expertise && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="text-[hsl(var(--teal))]" size={18} />
                  <h3 className="font-semibold text-[hsl(var(--navy))] text-base">Area of Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.split(",").map((e, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center bg-[hsl(var(--cream))] text-[hsl(var(--navy))] text-xs font-medium px-3 py-1.5 rounded-full border border-border"
                    >
                      {e.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {!member.achievements && !member.expertise && (
              <div className="text-center py-12 text-[hsl(var(--muted-foreground))]">
                <User className="mx-auto mb-3 opacity-30" size={40} />
                <p className="text-sm">Full profile details coming soon.</p>
              </div>
            )}
          </div>
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── SECTION BLOCK ────────────────────────────────────────────────────────────
function SectionBlock({
  sectionId, label, title, icon: Icon, description, onSelect, featured = false,
}: {
  sectionId: string;
  label: string;
  title: string;
  icon: React.ElementType;
  description: string;
  onSelect: (m: AnyMember) => void;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const members = adminData.filter((m) => m.section === sectionId);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className="space-y-8"
    >
      {/* Section header */}
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[3px] bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-bold uppercase tracking-widest">{label}</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--navy))]/8 flex items-center justify-center">
              <Icon size={20} className="text-[hsl(var(--navy))]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold">
              {title}
            </h2>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-xl">{description}</p>
        </div>
        <span className="inline-flex items-center bg-[hsl(var(--cream))] text-[hsl(var(--navy))] text-sm font-semibold px-3 py-1.5 rounded-full border border-border self-start sm:self-auto">
          {members.length} {members.length === 1 ? "Member" : "Members"}
        </span>
      </motion.div>

      {/* Cards grid */}
      {featured ? (
        <>
          {/* Top 2 featured large */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {members.slice(0, 2).map((m) => (
              <MemberCard key={m.id} member={m} onClick={() => onSelect(m)} featured />
            ))}
          </div>
          {/* Rest as standard */}
          {members.length > 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.slice(2).map((m) => (
                <MemberCard key={m.id} member={m} onClick={() => onSelect(m)} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m) => (
            <MemberCard key={m.id} member={m} onClick={() => onSelect(m)} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── ORGANOGRAM (PDF-based) ────────────────────────────────────────────────────
// ─── EC MEMBER CARD ───────────────────────────────────────────────────────────
function ECMemberCard({ member, onClick }: { member: ECMember; onClick: () => void }) {
  const [imgErr, setImgErr] = useState(false);
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.initials || member.name)}&background=92400e&color=fff&size=400&bold=true`;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: "0 20px 40px -12px hsla(35,92%,33%,0.20)" }}
      onClick={onClick}
      className="group cursor-pointer bg-white border border-border rounded-2xl overflow-hidden hover:border-[hsl(var(--saffron))]/60 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden shrink-0">
        {/* Blurred background — same image, covers the full area */}
        <img
          src={!member.photo || imgErr ? fallback : member.photo}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-110 blur-xl brightness-75"
        />
        {/* Main image — contained, sharp */}
        <img
          src={!member.photo || imgErr ? fallback : member.photo}
          alt={member.name}
          className={`relative z-10 w-full h-full ${member.photoPosition ? `object-cover ${member.photoPosition}` : "object-contain object-center"} group-hover:scale-105 transition-transform duration-500`}
          onError={() => setImgErr(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-['Playfair_Display',serif] text-base text-[hsl(var(--navy))] font-bold leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-[hsl(var(--saffron))] text-xs font-semibold mb-2 leading-snug">{member.designation}</p>
        <p className="text-[hsl(var(--muted-foreground))] text-xs leading-relaxed line-clamp-2 flex-1">{member.description}</p>
        <button className="mt-3 text-xs font-semibold text-[hsl(var(--teal))] hover:text-[hsl(var(--saffron))] transition-colors self-start">
          View Profile →
        </button>
      </div>
    </motion.div>
  );
}

// ─── EC CATEGORIES SECTION ────────────────────────────────────────────────────
function ECCategoriesSection({ onSelect }: { onSelect: (m: ECMember) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const totalMembers = ecCategories.reduce((acc, cat) => acc + cat.members.length, 0);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className="space-y-12"
    >
      {/* Section header */}
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[3px] bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-bold uppercase tracking-widest">Section 01</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--navy))]/8 flex items-center justify-center">
              <ShieldCheck size={20} className="text-[hsl(var(--navy))]" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold">
              Executive Council Members
            </h2>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-xl">
            The principal governing body of S-VYASA Deemed to be University, comprising {totalMembers} distinguished members across categories.
          </p>
        </div>
        <span className="inline-flex items-center bg-[hsl(var(--cream))] text-[hsl(var(--navy))] text-sm font-semibold px-3 py-1.5 rounded-full border border-border self-start sm:self-auto">
          {totalMembers} Members
        </span>
      </motion.div>

      {/* Single flat grid — all members flow together */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {ecCategories.flatMap((cat) =>
          cat.members.map((m) => (
            <ECMemberCard
              key={m.id}
              member={m}
              onClick={() => onSelect(m)}
            />
          ))
        )}
      </div>
    </motion.div>
  );
}

function OrgNode({ title, subtitle, level = "mid", onClick }: {
  title: string; subtitle?: string; level?: "top" | "mid" | "leaf"; onClick?: () => void;
}) {
  const styles = {
    top: "bg-[hsl(var(--navy))] text-white border-[hsl(var(--navy))]",
    mid: "bg-[hsl(var(--saffron))]/10 text-[hsl(var(--navy))] border-[hsl(var(--saffron))]/50",
    leaf: "bg-white text-[hsl(var(--navy))] border-[hsl(var(--teal))]/40 border-l-4 border-l-[hsl(var(--teal))]",
  }[level];

  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 24px -4px hsla(35,92%,33%,0.2)" }}
      onClick={onClick}
      className={`relative rounded-xl border px-4 py-3 text-center shadow-sm cursor-default transition-all duration-200 ${styles} ${onClick ? "cursor-pointer" : ""}`}
    >
      <p className={`font-semibold text-sm leading-tight ${level === "top" ? "text-white" : "text-[hsl(var(--navy))]"}`}>{title}</p>
      {subtitle && <p className={`text-[11px] mt-0.5 ${level === "top" ? "text-white/70" : "text-[hsl(var(--muted-foreground))]"}`}>{subtitle}</p>}
    </motion.div>
  );
}

function OrgLine({ dir = "v" }: { dir?: "v" | "h" }) {
  return dir === "v"
    ? <div className="mx-auto w-[2px] h-6 bg-[hsl(var(--saffron))]/40" />
    : <div className="w-full h-[2px] bg-[hsl(var(--saffron))]/40 my-0" />;
}

function Organogram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="overflow-x-auto pb-6"
    >
      <div className="min-w-[700px] space-y-0">
        {/* Row 1: EC */}
        <div className="flex justify-center">
          <div className="w-56"><OrgNode title="Executive Council (EC)" level="top" /></div>
        </div>
        <OrgLine />
        {/* Row 2: Chancellor + side bodies */}
        <div className="grid grid-cols-5 gap-3 items-start">
          <div className="space-y-2">
            <OrgNode title="Academic Council" level="leaf" />
            <OrgNode title="Finance Committee" level="leaf" />
          </div>
          <div className="flex justify-center items-center h-full">
            <OrgLine dir="h" />
          </div>
          <div>
            <OrgNode title="Chancellor" subtitle="Dr. H R Dayananda Swamy" level="top" />
          </div>
          <div className="flex justify-center items-center h-full">
            <OrgLine dir="h" />
          </div>
          <div className="space-y-2">
            <OrgNode title="IQAC" level="leaf" />
          </div>
        </div>
        <OrgLine />
        {/* Row 3: VC */}
        <div className="flex justify-center">
          <div className="w-56"><OrgNode title="Vice Chancellor" subtitle="Dr. N. K. Manjunath" level="top" /></div>
        </div>
        <OrgLine />
        {/* Row 4: Pro-VC + CFO */}
        <div className="flex justify-center gap-6">
          <div className="w-52"><OrgNode title="Pro-Vice Chancellor" subtitle="Prof. M. K. Shridhar" level="mid" /></div>
          <div className="w-52"><OrgNode title="Chief Finance Officer" subtitle="Dr. H. R. Dayananda" level="mid" /></div>
        </div>
        <OrgLine />
        {/* Row 5: Registrar + COE */}
        <div className="flex justify-center gap-6">
          <div className="w-52"><OrgNode title="Registrar" level="mid" /></div>
          <div className="w-52"><OrgNode title="Controller of Examinations" level="mid" /></div>
        </div>
        <OrgLine />
        {/* Row 6: Deans etc */}
        <div className="flex justify-center gap-3 flex-wrap">
          {["Deans", "Deputy Registrar", "Administrative Officer", "Liaison Officer"].map((t) => (
            <div key={t} className="w-44"><OrgNode title={t} level="leaf" /></div>
          ))}
        </div>
        <OrgLine />
        {/* Row 7: Bottom nodes */}
        <div className="flex justify-center gap-3 flex-wrap">
          {["Principal of Schools", "Directors of Centres", "Girls & Boys Hostels", "Human Resource Dept", "Campus Maintenance"].map((t) => (
            <div key={t} className="w-44"><OrgNode title={t} level="leaf" /></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function Administration() {
  const [selected, setSelected] = useState<AnyMember | null>(null);

  return (
    <Layout>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden"
      >
        {/* Background photo */}
        <img
          src={ecMembersGroupPhoto}
          alt="S-VYASA Executive Council Members"
          className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        {/* breadcrumb */}
        <div className="absolute top-6 left-6 md:left-10 flex items-center gap-2 text-white/60 text-xs z-10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/40">Administration</span>
        </div>
        <div className="relative z-10 text-center px-6 py-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-300 text-sm font-bold uppercase tracking-widest mb-3"
          >
            S-VYASA Deemed to be University
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-['Playfair_Display',serif] text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4 leading-tight"
          >
            Administration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl mx-auto mb-6"
          >
            Governance, Leadership & Organizational Structure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto h-[2px] w-16 bg-amber-400"
          />
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-[hsl(var(--navy))] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-8 items-center justify-center sm:justify-start">
          {[
            { n: adminData.filter(m => m.section === "ec").length, label: "Executive Council" },
            { n: adminData.filter(m => m.section === "deans").length, label: "Deans & Directors" },
            { n: adminData.filter(m => m.section === "registrar-row").length, label: "Admin Officers" },
            { n: adminData.length, label: "Total Members" },
          ].map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-[hsl(var(--saffron))] font-['DM_Mono',monospace] text-2xl font-bold">{s.n}</p>
              <p className="text-white/60 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Organogram ── */}
      <section className="py-16 bg-[hsl(var(--cream))]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[3px] bg-[hsl(var(--saffron))]" />
              <span className="text-[hsl(var(--teal))] text-xs font-bold uppercase tracking-widest">Organogram</span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold mb-2">
              University Organizational Chart
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-xl">
              As per Mandatory Disclosure — Swami Vivekananda Yoga Anusandhana Samsthana (S-VYASA)
            </p>
          </motion.div>
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <Organogram />
          </div>
        </div>
      </section>

      {/* ── All sections ── */}
      <div className="py-16 max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
        {/* EC Categories section first */}
        <ECCategoriesSection onSelect={setSelected} />
      </div>

      {/* ── CTA ── */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(160deg, hsl(35 92% 16%) 0%, hsl(25 80% 24%) 60%, hsl(15 75% 28%) 100%)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl mx-auto px-6"
        >
          <motion.h2 variants={fadeUp} className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-white font-bold mb-4">
            Be Part of Our Story
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 text-lg mb-8">
            Join a vibrant community of scholars, seekers, and change-makers at S-VYASA University.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors"
            >
              Apply for Admissions →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Profile Drawer ── */}
      <AnimatePresence>
        {selected && <ProfileDrawer member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Layout>
  );
}
