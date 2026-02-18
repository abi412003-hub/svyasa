import { Outlet } from "react-router-dom";
import ResearchSidebar from "./ResearchSidebar";
import Header from "@/components/Header";
import MegaFooter from "@/components/MegaFooter";

export default function ResearchLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 pt-[72px] lg:pt-[80px]">
        <ResearchSidebar />
        <main className="flex-1 min-w-0 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
      <MegaFooter />
    </div>
  );
}
