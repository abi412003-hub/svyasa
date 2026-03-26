import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToAnchor } from "@/hooks/useScrollToAnchor";
import Index from "./pages/Index";
import About from "./pages/About";
import Society from "./pages/Society";
import Administration from "./pages/Administration";
import Accreditation from "./pages/Accreditation";
import Publications from "./pages/Publications";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StudentWelfareCommittee from "./pages/StudentWelfareCommittee";
import PrashantiCampus from "./pages/PrashantiCampus";
import GlobalCityCampus from "./pages/GlobalCityCampus";
import FacilityPrashantiCampus from "./pages/FacilityPrashantiCampus";
import Admissions from "./pages/Admissions";
import ContactUs from "./pages/ContactUs";
import LifeAtSvyasa from "./pages/LifeAtSvyasa";
import NewsEvents from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Exams from "./pages/Exams";
import Library from "./pages/Library";
import DirectorateInternationalAffairs from "./pages/DirectorateInternationalAffairs";
import IQAC from "./pages/IQAC";
import MandatoryDisclosure from "./pages/MandatoryDisclosure";
import AIU from "./pages/AIU";
import IIC from "./pages/IIC";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import CategoryLanding from "./pages/CategoryLanding";
import CourseDetail from "./pages/CourseDetail";
import Organogram from "./pages/Organogram";
import SVyasaUniversity from "./pages/SVyasaUniversity";
import TrainingLayout from "./components/training/TrainingLayout";
import TrainingHome from "./pages/training/TrainingHome";
import TrainingAbout from "./pages/training/TrainingAbout";
import TrainingCourses from "./pages/training/TrainingCourses";
import TrainingCategory from "./pages/training/TrainingCategory";
import TrainingDelivery from "./pages/training/TrainingDelivery";
import TrainingAdmissions from "./pages/training/TrainingAdmissions";
import TrainingInstitutions from "./pages/training/TrainingInstitutions";
import TrainingFaculty from "./pages/training/TrainingFaculty";
import TrainingFAQs from "./pages/training/TrainingFAQs";
import TrainingContact from "./pages/training/TrainingContact";
import ImageManager from "./pages/ImageManager";
import ResearchAbout from "./pages/research/ResearchAbout";
import ResearchComingSoon from "./pages/research/ResearchComingSoon";
import OngoingProjects from "./pages/research/OngoingProjects";
import ResearchFacility from "./pages/research/ResearchFacility";
import ResearchFaculty from "./pages/research/ResearchFaculty";
import CompletedProjects from "./pages/research/CompletedProjects";
import ResearchPublications from "./pages/research/ResearchPublications";
import LabEvents from "./pages/research/LabEvents";
import AdoptProject from "./pages/research/AdoptProject";
import DivisionYogaLifeSciences from "./pages/research/DivisionYogaLifeSciences";
import DivisionYogaPhysicalSciences from "./pages/research/DivisionYogaPhysicalSciences";
import DivisionYogaManagement from "./pages/research/DivisionYogaManagement";
import DivisionYogaHumanities from "./pages/research/DivisionYogaHumanities";
import DivisionYogaSpirituality from "./pages/research/DivisionYogaSpirituality";
import EdtechPartners from "./pages/EdtechPartners";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminCourseList from "./pages/admin/AdminCourseList";
import AdminCourseEditor from "./pages/admin/AdminCourseEditor";
import AdminCategoryList from "./pages/admin/AdminCategoryList";
import AdminCategoryEditor from "./pages/admin/AdminCategoryEditor";
import ContentfulCMS from "./pages/admin/ContentfulCMS";
import AdminFacultyList from "./pages/admin/AdminFacultyList";
import AdminFacultyEditor from "./pages/admin/AdminFacultyEditor";
import DivisionPage from "./pages/DivisionPage";
import SchoolPage from "./pages/SchoolPage";
import Guests from "./pages/Guests";
import Faculty from "./pages/Faculty";
import NewsAdminLayout from "./components/news-admin/NewsAdminLayout";
import NewsAdminDashboard from "./pages/news-admin/Dashboard";
import NewsList from "./pages/news-admin/NewsList";
import NewsForm from "./pages/news-admin/NewsForm";
import EventsList from "./pages/news-admin/EventsList";
import EventForm from "./pages/news-admin/EventForm";
import BulkImport from "./pages/news-admin/BulkImport";
import ExportPage from "./pages/news-admin/ExportPage";

// Alias for brevity in routes
const ResearchCS = ({ title }: { title: string }) => <ResearchComingSoon title={title} />;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToAnchor />
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/society" element={<Society />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/organogram" element={<Organogram />} />
          
          {/* Divisions & Schools */}
          <Route path="/divisions/:slug" element={<DivisionPage />} />
          <Route path="/divisions/:divisionSlug/schools/:schoolSlug" element={<SchoolPage />} />
          
          {/* About Section */}
          <Route path="/s-vyasa-university" element={<SVyasaUniversity />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/student-welfare-committee" element={<StudentWelfareCommittee />} />
          
          {/* Dynamic Course Routes */}
          <Route path="/programs/:category" element={<CategoryLanding />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          
          {/* Admissions & Campus */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/global-city-campus" element={<GlobalCityCampus />} />
          <Route path="/prashanti-campus" element={<PrashantiCampus />} />
          <Route path="/prashanthi-campus" element={<PrashantiCampus />} />
          <Route path="/facility-prashanti-campus" element={<FacilityPrashantiCampus />} />
          <Route path="/life-at-svyasa" element={<LifeAtSvyasa />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Legacy course redirects → dynamic /courses/:slug */}
          <Route path="/bca" element={<Navigate to="/programs/bca" replace />} />
          <Route path="/bca-cybersecurity-ethical-hacking-digital-forensics" element={<Navigate to="/courses/bca-cybersecurity-ethical-hacking-digital-forensics" replace />} />
          <Route path="/bca-artificial-intelligence-cloud-computing-devops" element={<Navigate to="/courses/bca-artificial-intelligence-cloud-computing-devops" replace />} />
          <Route path="/bca-data-science-artificial-intelligence-big-data-analytics" element={<Navigate to="/courses/bca-data-science-artificial-intelligence-big-data-analytics" replace />} />
          <Route path="/bca-cloud-computing-cybersecurity-ethical-hacking" element={<Navigate to="/courses/bca-cloud-computing-cybersecurity-ethical-hacking" replace />} />
          <Route path="/bca-artificial-intelligence-robotics-internet-of-things" element={<Navigate to="/courses/bca-artificial-intelligence-robotics-internet-of-things" replace />} />
          <Route path="/bca-artificial-intelligence-machine-learning-robotics" element={<Navigate to="/courses/bca-artificial-intelligence-machine-learning-robotics" replace />} />
          <Route path="/bba" element={<Navigate to="/programs/bba" replace />} />
          <Route path="/bba-in-sports-management" element={<Navigate to="/courses/bba-in-sports-management" replace />} />
          <Route path="/bba-logistics-and-aviation" element={<Navigate to="/courses/bba-logistics-and-aviation" replace />} />
          <Route path="/bba-business-management-digital-marketing-business-analytics" element={<Navigate to="/courses/bba-business-management-digital-marketing-business-analytics" replace />} />
          <Route path="/bba-entrepreneurship-innovation-business-analytics" element={<Navigate to="/courses/bba-entrepreneurship-innovation-business-analytics" replace />} />
          <Route path="/bba-logistics-supply-chain-management-port-management" element={<Navigate to="/courses/bba-logistics-supply-chain-management-port-management" replace />} />
          <Route path="/bcom" element={<Navigate to="/programs/bcom" replace />} />
          <Route path="/b-com-international-accounting-finance-integrated-with-acca" element={<Navigate to="/courses/bcom-international-accounting-finance-acca" replace />} />
          <Route path="/btech" element={<Navigate to="/programs/btech" replace />} />
          <Route path="/niat-corporate-b-tech-in-cse" element={<Navigate to="/courses/niat-corporate-btech-cse" replace />} />
          <Route path="/btech-computer-science-and-engineering" element={<Navigate to="/courses/btech-computer-science-engineering" replace />} />
          <Route path="/btech-computer-science-and-information-technology" element={<Navigate to="/courses/btech-computer-science-information-technology" replace />} />
          <Route path="/btech-computer-science-software-engineering" element={<Navigate to="/courses/btech-computer-science-software-engineering" replace />} />
          <Route path="/btech-artificial-intelligence-machine-learning" element={<Navigate to="/courses/btech-artificial-intelligence-machine-learning" replace />} />
          <Route path="/btech-computer-science-engineering-data-science" element={<Navigate to="/courses/btech-computer-science-engineering-data-science" replace />} />
          <Route path="/btech-computer-science-engineering-cyber-security" element={<Navigate to="/courses/btech-computer-science-engineering-cyber-security" replace />} />
          <Route path="/bsc" element={<Navigate to="/programs/bsc" replace />} />
          <Route path="/bsc-computer-science" element={<Navigate to="/courses/bsc-computer-science" replace />} />
          <Route path="/bsc-artificial-intelligence-machine-learning-robotics" element={<Navigate to="/courses/bsc-artificial-intelligence-machine-learning-robotics" replace />} />
          <Route path="/bsc-clinical-psychology" element={<Navigate to="/courses/bsc-clinical-psychology" replace />} />
          <Route path="/bachelor-of-physiotherapy" element={<Navigate to="/courses/bachelor-of-physiotherapy" replace />} />
          <Route path="/bachelor-of-occupational-therapy" element={<Navigate to="/courses/bachelor-of-occupational-therapy" replace />} />
          
          {/* Postgraduate redirects */}
          <Route path="/mca" element={<Navigate to="/programs/mca" replace />} />
          <Route path="/mca-cloud-computing-devops" element={<Navigate to="/courses/mca-cloud-computing-devops" replace />} />
          <Route path="/mca-cybersecurity-ethical-hacking-cyber-forensics" element={<Navigate to="/courses/mca-cybersecurity-ethical-hacking-cyber-forensics" replace />} />
          <Route path="/mca-artificial-intelligence-machine-learning-data-science" element={<Navigate to="/courses/mca-artificial-intelligence-machine-learning-data-science" replace />} />
          <Route path="/mca-data-science" element={<Navigate to="/courses/mca-data-science" replace />} />
          <Route path="/mca-data-science-big-data-analytics" element={<Navigate to="/courses/mca-data-science-big-data-analytics" replace />} />
          <Route path="/mca-data-science-internet-of-things" element={<Navigate to="/courses/mca-data-science-internet-of-things" replace />} />
          <Route path="/mba" element={<Navigate to="/programs/mba" replace />} />
          <Route path="/mba-dual-specialisation" element={<Navigate to="/courses/mba-dual-specialisation" replace />} />
          <Route path="/mba-marketing-finance-business-analytics" element={<Navigate to="/courses/mba-marketing-finance-business-analytics" replace />} />
          <Route path="/mba-hospital-administration-with-medical-tourism" element={<Navigate to="/courses/mba-hospital-administration-medical-tourism" replace />} />
          <Route path="/mba-logistics-and-supply-chain-management" element={<Navigate to="/courses/mba-logistics-supply-chain-management" replace />} />
          <Route path="/mba-digital-business-management-data-analytics" element={<Navigate to="/courses/mba-digital-business-management-data-analytics" replace />} />
          <Route path="/mba-pro-ai-data-analytics" element={<Navigate to="/courses/mba-pro-ai-data-analytics" replace />} />
          <Route path="/mba-digital-marketing-and-ai" element={<Navigate to="/courses/mba-digital-marketing-ai" replace />} />
          <Route path="/msc" element={<Navigate to="/programs/msc" replace />} />
          <Route path="/msc-cybersecurity-ethical-hacking-cyber-forensics" element={<Navigate to="/courses/msc-cybersecurity-ethical-hacking-cyber-forensics" replace />} />
          <Route path="/msc-data-science" element={<Navigate to="/courses/msc-data-science" replace />} />
          <Route path="/msc-data-science-big-data-analytics" element={<Navigate to="/courses/msc-data-science-big-data-analytics" replace />} />
          <Route path="/msc-clinical-psychology" element={<Navigate to="/courses/msc-clinical-psychology" replace />} />
          <Route path="/msc-neuropsychology" element={<Navigate to="/courses/msc-neuropsychology" replace />} />
          <Route path="/msc-counselling-psychology" element={<Navigate to="/courses/msc-counselling-psychology" replace />} />
          <Route path="/msc-health-psychology" element={<Navigate to="/courses/msc-health-psychology" replace />} />
          
          {/* D.Sc., D.Litt */}
          <Route path="/dlit" element={<Navigate to="/courses/dsc-dlitt" replace />} />
          
          {/* Yoga Programs redirects */}
          <Route path="/yoga-programs" element={<Navigate to="/programs/yoga-programmes" replace />} />
          <Route path="/ayurveda-lifestyle-management-course" element={<Navigate to="/courses/ayurveda-lifestyle-management" replace />} />
          <Route path="/yoga-instructor-course" element={<Navigate to="/courses/yoga-instructor-course" replace />} />
          <Route path="/non-residential-yic" element={<Navigate to="/courses/non-residential-yic" replace />} />
          <Route path="/bsc-yoga-vedic-therapy" element={<Navigate to="/courses/bsc-yoga-vedic-therapy" replace />} />
          <Route path="/bachelor-of-science-in-yoga-therapy" element={<Navigate to="/courses/bsc-yoga-therapy" replace />} />
          <Route path="/master-of-science-in-yoga-therapy" element={<Navigate to="/courses/msc-yoga-therapy" replace />} />
          <Route path="/master-of-science-yoga-vedic-therapy" element={<Navigate to="/courses/msc-yoga-vedic-therapy" replace />} />
          <Route path="/bachelor-of-naturopathy-and-yogic-sciences" element={<Navigate to="/courses/bnys" replace />} />
          <Route path="/doctor-of-medicine-yoga" element={<Navigate to="/courses/doctor-of-medicine-yoga" replace />} />
          <Route path="/post-graduate-diploma-in-yoga-therapy" element={<Navigate to="/courses/pg-diploma-yoga-therapy" replace />} />
          <Route path="/post-graduate-yoga-diploma-for-doctors" element={<Navigate to="/courses/pg-diploma-yoga-for-doctors" replace />} />
          <Route path="/phd-yoga" element={<Navigate to="/courses/phd-yoga" replace />} />
          <Route path="/self-management-of-excessive-tension" element={<Navigate to="/courses/self-management-excessive-tension" replace />} />
          <Route path="/division-of-yoga-and-humanities" element={<Navigate to="/courses/division-yoga-humanities" replace />} />
          <Route path="/aerial-yoga-teacher-training-course" element={<Navigate to="/courses/aerial-yoga" replace />} />
          <Route path="/personality-development-camp" element={<ComingSoon />} />
          <Route path="/personality-development-camp-for-children" element={<ComingSoon />} />
          <Route path="/himalaya-yoga-olympiad" element={<ComingSoon />} />
          <Route path="/master-of-arts-in-yoga" element={<Navigate to="/courses/master-of-arts-yoga-darshanam" replace />} />
          <Route path="/spec" element={<ComingSoon />} />
          
          {/* Ph.D Programs redirects */}
          <Route path="/phd-programs" element={<Navigate to="/programs/phd" replace />} />
          <Route path="/doctor-of-philosophy-in-computer-science" element={<Navigate to="/courses/phd-computer-science" replace />} />
          <Route path="/doctor-of-philosophy-in-computer-science-and-engineering" element={<Navigate to="/courses/phd-computer-science-engineering" replace />} />
          <Route path="/doctor-of-philosophy-in-management-and-commerce" element={<Navigate to="/courses/phd-commerce-management" replace />} />
          <Route path="/doctor-of-philosophy-in-applied-sciences" element={<Navigate to="/courses/phd-applied-sciences" replace />} />
          <Route path="/doctor-of-philosophy-in-allied-sciences" element={<Navigate to="/courses/phd-allied-sciences" replace />} />
          <Route path="/doctor-of-philosophy-in-english" element={<Navigate to="/courses/phd-english" replace />} />
          
          {/* Allied Healthcare */}
          <Route path="/allied-sciences" element={<Navigate to="/programs/allied-healthcare" replace />} />
          
          {/* Department redirects */}
          <Route path="/department-of-commerce-and-management" element={<Navigate to="/divisions/yoga-management-studies/schools/school-of-commerce-and-management" replace />} />
          <Route path="/department-of-engineering-and-technology" element={<Navigate to="/divisions/yoga-physical-sciences/schools/school-of-engineering" replace />} />
          <Route path="/department-of-computer-science-application" element={<Navigate to="/divisions/yoga-physical-sciences/schools/school-of-computer-sciences" replace />} />
          <Route path="/department-of-allied-health-care-professionals" element={<Navigate to="/divisions/yoga-life-sciences/schools/school-of-allied-and-healthcare" replace />} />
          <Route path="/department-of-allied-health-science" element={<Navigate to="/divisions/yoga-life-sciences/schools/school-of-allied-and-healthcare" replace />} />
          <Route path="/department-of-physiotherapy" element={<Navigate to="/divisions/yoga-life-sciences/schools/school-of-physiotherapy" replace />} />
          <Route path="/division-of-yoga-and-humanities-gcc" element={<Navigate to="/divisions/yoga-humanities" replace />} />
          <Route path="/department-of-science-and-humanities" element={<Navigate to="/divisions/yoga-humanities" replace />} />
          
          {/* Research */}
          <Route path="/research" element={<ResearchAbout />} />
          <Route path="/research/facility" element={<ResearchFacility />} />
          <Route path="/research/faculty" element={<ResearchFaculty />} />
          <Route path="/research/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/research/completed-projects" element={<CompletedProjects />} />
          <Route path="/research/adopt-project" element={<AdoptProject />} />
          <Route path="/research/publications" element={<ResearchPublications />} />
          <Route path="/research/lab-events" element={<LabEvents />} />
          <Route path="/research/cpeb" element={<ResearchCS title="CPEB Project Proposal" />} />
          <Route path="/research/division-yoga-life-sciences" element={<DivisionYogaLifeSciences />} />
          <Route path="/research/division-yoga-physical-sciences" element={<DivisionYogaPhysicalSciences />} />
          <Route path="/research/division-yoga-management" element={<DivisionYogaManagement />} />
          <Route path="/research/division-yoga-humanities" element={<DivisionYogaHumanities />} />
          <Route path="/research/division-yoga-spirituality" element={<DivisionYogaSpirituality />} />
          
          {/* Important Links */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<ComingSoon />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/library" element={<Library />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/edtech-partners" element={<EdtechPartners />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/iic" element={<IIC />} />
          <Route path="/aiu" element={<AIU />} />
          <Route path="/directorate-of-international-affairs" element={<DirectorateInternationalAffairs />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/faculty" element={<Faculty />} />
          
          {/* Training Portal */}
          <Route path="/training" element={<TrainingLayout />}>
            <Route index element={<TrainingHome />} />
            <Route path="about" element={<TrainingAbout />} />
            <Route path="courses" element={<TrainingCourses />} />
            <Route path="courses/:category" element={<TrainingCategory />} />
            <Route path="delivery" element={<TrainingDelivery />} />
            <Route path="admissions" element={<TrainingAdmissions />} />
            <Route path="institutions-psu" element={<TrainingInstitutions />} />
            <Route path="faculty" element={<TrainingFaculty />} />
            <Route path="faqs" element={<TrainingFAQs />} />
            <Route path="contact" element={<TrainingContact />} />
          </Route>
          
          {/* Admin Tools */}
          <Route path="/admin/image-manager" element={<ImageManager />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="courses" element={<AdminCourseList />} />
            <Route path="courses/:id" element={<AdminCourseEditor />} />
            <Route path="categories" element={<AdminCategoryList />} />
            <Route path="categories/:id" element={<AdminCategoryEditor />} />
            <Route path="faculty" element={<AdminFacultyList />} />
            <Route path="faculty/:id" element={<AdminFacultyEditor />} />
            <Route path="cms" element={<ContentfulCMS />} />
          </Route>
          
          {/* News & Events Admin */}
          <Route path="/news-admin" element={<NewsAdminLayout />}>
            <Route index element={<NewsAdminDashboard />} />
            <Route path="news" element={<NewsList />} />
            <Route path="news/new" element={<NewsForm />} />
            <Route path="news/:id/edit" element={<NewsForm />} />
            <Route path="events" element={<EventsList />} />
            <Route path="events/new" element={<EventForm />} />
            <Route path="events/:id/edit" element={<EventForm />} />
            <Route path="import" element={<BulkImport />} />
            <Route path="export" element={<ExportPage />} />
          </Route>

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
