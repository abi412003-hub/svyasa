import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About Research at S-VYASA", to: "/research" },
  { label: "Research Facility", to: "/research/facility" },
  { label: "Research Faculty", to: "/research/faculty" },
  { label: "Ongoing Projects", to: "/research/ongoing-projects" },
  { label: "Completed Projects", to: "/research/completed-projects" },
  { label: "Adopt a Research Project", to: "/research/adopt-project" },
  { label: "Research Publications", to: "/research/publications" },
  { label: "Lab Events", to: "/research/lab-events" },
  { label: "CPEB Project Proposal", to: "/research/cpeb" },
];

export default function ResearchSidebar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-[280px] shrink-0 sticky top-0 h-screen bg-white border-r border-border overflow-y-auto">
        <div className="py-8 px-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--teal))] px-5 mb-4">
            Research
          </p>
          <nav className="flex flex-col gap-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/research"}
                  className={cn(
                    "relative px-5 py-3.5 text-[15px] font-['Source_Sans_3',sans-serif] transition-all duration-200 border-l-[3px]",
                    isActive
                      ? "border-l-[hsl(var(--saffron))] font-semibold text-[hsl(var(--navy))] bg-[hsl(var(--cream))]"
                      : "border-l-transparent text-[hsl(var(--muted-foreground))] hover:bg-[#F7F5F0] hover:text-[hsl(var(--teal))]"
                  )}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile / Tablet Horizontal Tabs */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide border-b border-border bg-white sticky top-0 z-20">
        <div className="flex gap-2 px-4 py-3 min-w-max">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/research"}
                className={cn(
                  "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  isActive
                    ? "bg-[hsl(var(--saffron))] text-white border-[hsl(var(--saffron))]"
                    : "bg-white text-[hsl(var(--muted-foreground))] border-border hover:border-[hsl(var(--teal))] hover:text-[hsl(var(--teal))]"
                )}
              >
                {link.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
