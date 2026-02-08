import { ReactNode } from "react";
import MegaMenuHeader from "@/components/MegaMenuHeader";
import MegaFooter from "@/components/MegaFooter";
import FloatingActions from "@/components/FloatingActions";
import ScrollProgress from "@/components/society/ScrollProgress";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />
      <MegaMenuHeader />
      <main className="flex-1">{children}</main>
      <MegaFooter />
      <FloatingActions />
    </div>
  );
};

export default Layout;
