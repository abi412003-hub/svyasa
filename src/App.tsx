import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import EdtechPartners from "./pages/EdtechPartners";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminCourseList from "./pages/admin/AdminCourseList";
import AdminCourseEditor from "./pages/admin/AdminCourseEditor";
import AdminCategoryList from "./pages/admin/AdminCategoryList";
import AdminCategoryEditor from "./pages/admin/AdminCategoryEditor";
import ContentfulCMS from "./pages/admin/ContentfulCMS";
import DivisionPage from "./pages/DivisionPage";
import SchoolPage from "./pages/SchoolPage";
import Guests from "./pages/Guests";
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
          
          {/* Undergraduate Programs */}
          <Route path="/bca" element={<ComingSoon />} />
          <Route path="/bca-cybersecurity-ethical-hacking-digital-forensics" element={<ComingSoon />} />
          <Route path="/bca-artificial-intelligence-cloud-computing-devops" element={<ComingSoon />} />
          <Route path="/bca-data-science-artificial-intelligence-big-data-analytics" element={<ComingSoon />} />
          <Route path="/bca-cloud-computing-cybersecurity-ethical-hacking" element={<ComingSoon />} />
          <Route path="/bca-artificial-intelligence-robotics-internet-of-things" element={<ComingSoon />} />
          <Route path="/bca-artificial-intelligence-machine-learning-robotics" element={<ComingSoon />} />
          <Route path="/bba" element={<ComingSoon />} />
          <Route path="/bba-in-sports-management" element={<ComingSoon />} />
          <Route path="/bba-logistics-and-aviation" element={<ComingSoon />} />
          <Route path="/bba-business-management-digital-marketing-business-analytics" element={<ComingSoon />} />
          <Route path="/bba-entrepreneurship-innovation-business-analytics" element={<ComingSoon />} />
          <Route path="/bba-logistics-supply-chain-management-port-management" element={<ComingSoon />} />
          <Route path="/bcom" element={<ComingSoon />} />
          <Route path="/b-com-international-accounting-finance-integrated-with-acca" element={<ComingSoon />} />
          <Route path="/btech" element={<ComingSoon />} />
          <Route path="/niat-corporate-b-tech-in-cse" element={<ComingSoon />} />
          <Route path="/btech-computer-science-and-engineering" element={<ComingSoon />} />
          <Route path="/btech-computer-science-and-information-technology" element={<ComingSoon />} />
          <Route path="/btech-computer-science-software-engineering" element={<ComingSoon />} />
          <Route path="/btech-artificial-intelligence-machine-learning" element={<ComingSoon />} />
          <Route path="/btech-computer-science-engineering-data-science" element={<ComingSoon />} />
          <Route path="/btech-computer-science-engineering-cyber-security" element={<ComingSoon />} />
          <Route path="/bsc" element={<ComingSoon />} />
          <Route path="/bsc-computer-science" element={<ComingSoon />} />
          <Route path="/bsc-artificial-intelligence-machine-learning-robotics" element={<ComingSoon />} />
          <Route path="/bsc-clinical-psychology" element={<ComingSoon />} />
          <Route path="/bachelor-of-physiotherapy" element={<ComingSoon />} />
          <Route path="/bachelor-of-occupational-therapy" element={<ComingSoon />} />
          
          {/* Postgraduate Programs */}
          <Route path="/mca" element={<ComingSoon />} />
          <Route path="/mca-cloud-computing-devops" element={<ComingSoon />} />
          <Route path="/mca-cybersecurity-ethical-hacking-cyber-forensics" element={<ComingSoon />} />
          <Route path="/mca-artificial-intelligence-machine-learning-data-science" element={<ComingSoon />} />
          <Route path="/mca-data-science" element={<ComingSoon />} />
          <Route path="/mca-data-science-big-data-analytics" element={<ComingSoon />} />
          <Route path="/mca-data-science-internet-of-things" element={<ComingSoon />} />
          <Route path="/mba" element={<ComingSoon />} />
          <Route path="/mba-dual-specialisation" element={<ComingSoon />} />
          <Route path="/mba-marketing-finance-business-analytics" element={<ComingSoon />} />
          <Route path="/mba-hospital-administration-with-medical-tourism" element={<ComingSoon />} />
          <Route path="/mba-logistics-and-supply-chain-management" element={<ComingSoon />} />
          <Route path="/mba-digital-business-management-data-analytics" element={<ComingSoon />} />
          <Route path="/mba-pro-ai-data-analytics" element={<ComingSoon />} />
          <Route path="/mba-digital-marketing-and-ai" element={<ComingSoon />} />
          <Route path="/msc" element={<ComingSoon />} />
          <Route path="/msc-cybersecurity-ethical-hacking-cyber-forensics" element={<ComingSoon />} />
          <Route path="/msc-data-science" element={<ComingSoon />} />
          <Route path="/msc-data-science-big-data-analytics" element={<ComingSoon />} />
          <Route path="/msc-clinical-psychology" element={<ComingSoon />} />
          <Route path="/msc-neuropsychology" element={<ComingSoon />} />
          <Route path="/msc-counselling-psychology" element={<ComingSoon />} />
          <Route path="/msc-health-psychology" element={<ComingSoon />} />
          
          {/* D.Sc., D.Litt */}
          <Route path="/dlit" element={<ComingSoon />} />
          
          {/* Yoga Programs */}
          <Route path="/yoga-programs" element={<ComingSoon />} />
          <Route path="/ayurveda-lifestyle-management-course" element={<ComingSoon />} />
          <Route path="/yoga-instructor-course" element={<ComingSoon />} />
          <Route path="/non-residential-yic" element={<ComingSoon />} />
          <Route path="/bsc-yoga-vedic-therapy" element={<ComingSoon />} />
          <Route path="/bachelor-of-science-in-yoga-therapy" element={<ComingSoon />} />
          <Route path="/master-of-science-in-yoga-therapy" element={<ComingSoon />} />
          <Route path="/master-of-science-yoga-vedic-therapy" element={<ComingSoon />} />
          <Route path="/bachelor-of-naturopathy-and-yogic-sciences" element={<ComingSoon />} />
          <Route path="/doctor-of-medicine-yoga" element={<ComingSoon />} />
          <Route path="/post-graduate-diploma-in-yoga-therapy" element={<ComingSoon />} />
          <Route path="/post-graduate-yoga-diploma-for-doctors" element={<ComingSoon />} />
          <Route path="/phd-yoga" element={<ComingSoon />} />
          <Route path="/self-management-of-excessive-tension" element={<ComingSoon />} />
          <Route path="/division-of-yoga-and-humanities" element={<ComingSoon />} />
          <Route path="/aerial-yoga-teacher-training-course" element={<ComingSoon />} />
          <Route path="/personality-development-camp" element={<ComingSoon />} />
          <Route path="/personality-development-camp-for-children" element={<ComingSoon />} />
          <Route path="/himalaya-yoga-olympiad" element={<ComingSoon />} />
          <Route path="/master-of-arts-in-yoga" element={<ComingSoon />} />
          <Route path="/spec" element={<ComingSoon />} />
          
          {/* Ph.D Programs */}
          <Route path="/phd-programs" element={<ComingSoon />} />
          <Route path="/doctor-of-philosophy-in-computer-science" element={<ComingSoon />} />
          <Route path="/doctor-of-philosophy-in-computer-science-and-engineering" element={<ComingSoon />} />
          <Route path="/doctor-of-philosophy-in-management-and-commerce" element={<ComingSoon />} />
          <Route path="/doctor-of-philosophy-in-applied-sciences" element={<ComingSoon />} />
          <Route path="/doctor-of-philosophy-in-allied-sciences" element={<ComingSoon />} />
          <Route path="/doctor-of-philosophy-in-english" element={<ComingSoon />} />
          
          {/* Allied Healthcare */}
          <Route path="/allied-sciences" element={<ComingSoon />} />
          
          {/* Departments */}
          <Route path="/department-of-commerce-and-management" element={<ComingSoon />} />
          <Route path="/department-of-engineering-and-technology" element={<ComingSoon />} />
          <Route path="/department-of-computer-science-application" element={<ComingSoon />} />
          <Route path="/department-of-allied-health-care-professionals" element={<ComingSoon />} />
          <Route path="/department-of-allied-health-science" element={<ComingSoon />} />
          <Route path="/department-of-physiotherapy" element={<ComingSoon />} />
          <Route path="/division-of-yoga-and-humanities-gcc" element={<ComingSoon />} />
          <Route path="/department-of-science-and-humanities" element={<ComingSoon />} />
          
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
