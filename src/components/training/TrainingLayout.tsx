import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TrainingHeader from "./TrainingHeader";
import TrainingFooter from "./TrainingFooter";

const TrainingLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <TrainingHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <TrainingFooter />
    </div>
  );
};

export default TrainingLayout;
