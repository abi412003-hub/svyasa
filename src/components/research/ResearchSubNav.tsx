import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About Research", to: "/research" },
  { label: "Research Facility", to: "/research/facility" },
  { label: "Research Faculty", to: "/research/faculty" },
  { label: "Ongoing Projects", to: "/research/ongoing-projects" },
  { label: "Completed Projects", to: "/research/completed-projects" },
  { label: "Adopt a Project", to: "/research/adopt-project" },
  { label: "Publications", to: "/research/publications" },
  { label: "Lab Events", to: "/research/lab-events" },
  { label: "CPEB Proposal", to: "/research/cpeb" },
];

export default function ResearchSubNav() {
  const location = useLocation();

  return (
    <div className="bg-white border-b border-border sticky top-[72px] lg:top-[80px] z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="overflow-x-auto scrollbar-hide">
          <nav className="flex gap-0 min-w-max">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/research"
                  ? location.pathname === "/research"
                  : location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "relative px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2",
                    isActive
                      ? "border-b-[hsl(var(--saffron))] text-[hsl(var(--navy))] font-semibold"
                      : "border-b-transparent text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--teal))] hover:border-b-[hsl(var(--teal))]/40"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
