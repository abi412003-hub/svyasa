import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToAnchor } from "@/hooks/useScrollToAnchor";
import Index from "./pages/Index";
import About from "./pages/About";
import Society from "./pages/Society";
import Management from "./pages/Management";
import Accreditation from "./pages/Accreditation";
import Publications from "./pages/Publications";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StudentWelfareCommittee from "./pages/StudentWelfareCommittee";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

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
          <Route path="/management" element={<Management />} />
          
          {/* About Section */}
          <Route path="/s-vyasa-university" element={<ComingSoon />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/student-welfare-committee" element={<StudentWelfareCommittee />} />
          
          {/* Admissions & Campus */}
          <Route path="/admissions" element={<ComingSoon />} />
          <Route path="/global-city-campus" element={<ComingSoon />} />
          <Route path="/prashanthi-campus" element={<ComingSoon />} />
          <Route path="/life-at-svyasa" element={<ComingSoon />} />
          <Route path="/contact-us" element={<ComingSoon />} />
          
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
          <Route path="/research" element={<ComingSoon />} />
          <Route path="/research-facility" element={<ComingSoon />} />
          <Route path="/research-faculty" element={<ComingSoon />} />
          <Route path="/research-ongoing-projects" element={<ComingSoon />} />
          <Route path="/research-completed-projects" element={<ComingSoon />} />
          <Route path="/adopt-research-project" element={<ComingSoon />} />
          <Route path="/research-publications" element={<ComingSoon />} />
          <Route path="/research-lab-events" element={<ComingSoon />} />
          <Route path="/cpeb-project-proposal" element={<ComingSoon />} />
          
          {/* Important Links */}
          <Route path="/gallery" element={<ComingSoon />} />
          <Route path="/career" element={<ComingSoon />} />
          <Route path="/library" element={<ComingSoon />} />
          <Route path="/exams" element={<ComingSoon />} />
          <Route path="/iqac" element={<ComingSoon />} />
          <Route path="/edtech-partners" element={<ComingSoon />} />
          <Route path="/mandatory-disclosure" element={<ComingSoon />} />
          <Route path="/iic" element={<ComingSoon />} />
          <Route path="/aiu" element={<ComingSoon />} />
          <Route path="/directorate-of-international-affairs" element={<ComingSoon />} />
          <Route path="/news-events" element={<ComingSoon />} />
          
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
