import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Search, ExternalLink, Laptop, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import svyasaLogo from "@/assets/svyasa-logo.svg";
import { navItems, utilityLinks, NavItem, NavColumn, CourseGroup, NavLink, Division, DivisionSchool } from "@/config/navigation";
import SearchOverlay from "./SearchOverlay";

// Utility Bar Component
const UtilityBar = ({ isVisible }: { isVisible: boolean }) => (
  <motion.div
    initial={{ y: -100 }}
    animate={{ y: isVisible ? 0 : -100 }}
    transition={{ duration: 0.3 }}
    className="bg-secondary text-secondary-foreground py-2 hidden lg:block"
  >
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center gap-6 text-xs">
        <span className="text-gold font-semibold uppercase tracking-widest text-[10px] pr-3 border-r border-secondary-foreground/20">
          Quick Links
        </span>
        {utilityLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={link.href}
              className="relative text-secondary-foreground/80 hover:text-gold transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

// Course Group Item - specializations inline, simple hover
const CourseGroupItem = ({ 
  group, 
  colIndex, 
  groupIndex,
  onLinkClick 
}: { 
  group: CourseGroup; 
  colIndex: number;
  groupIndex: number;
  onLinkClick: () => void;
}) => {
  return (
    <motion.div
      className="mb-3"
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: colIndex * 0.05 + groupIndex * 0.03 }}
    >
      {/* Parent course link - simple bold text */}
      <Link
        to={group.parent.href}
        className="text-xs font-semibold text-foreground hover:text-primary transition-colors"
        onClick={onLinkClick}
      >
        {group.parent.label}
      </Link>

      {/* Specializations - vertical list, no bullets */}
      {group.specializations && group.specializations.length > 0 && (
        <div className="mt-1 ml-2 flex flex-col gap-0.5">
          {group.specializations.map((spec) => (
            <Link
              key={spec.href}
              to={spec.href}
              className="text-[10px] text-muted-foreground hover:text-primary transition-colors"
              onClick={onLinkClick}
            >
              {spec.label}
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Division Icon helper
const DivisionIcon = ({ icon }: { icon?: string }) => {
  if (icon === "laptop") return <Laptop className="w-4 h-4 text-gold" />;
  if (icon === "flask") return <FlaskConical className="w-4 h-4 text-gold" />;
  return null;
};

// Divisions Mega Menu - 3-level hierarchy with hover
const DivisionsMegaMenu = ({
  divisions,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onLinkClick,
}: {
  divisions: Division[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
}) => {
  const [activeDivision, setActiveDivision] = useState<string | null>(null);
  const [activeSchool, setActiveSchool] = useState<string | null>(null);
  const divisionTimeout = useRef<NodeJS.Timeout | null>(null);
  const schoolTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleDivisionEnter = (name: string) => {
    if (divisionTimeout.current) clearTimeout(divisionTimeout.current);
    setActiveDivision(name);
    setActiveSchool(null);
  };
  const handleDivisionLeave = () => {
    divisionTimeout.current = setTimeout(() => {
      setActiveDivision(null);
      setActiveSchool(null);
    }, 120);
  };
  const handleSchoolEnter = (name: string) => {
    if (schoolTimeout.current) clearTimeout(schoolTimeout.current);
    if (divisionTimeout.current) clearTimeout(divisionTimeout.current);
    setActiveSchool(name);
  };
  const handleSchoolLeave = () => {
    schoolTimeout.current = setTimeout(() => {
      setActiveSchool(null);
    }, 120);
  };

  const currentDivision = divisions.find((d) => d.name === activeDivision);
  const currentSchool = currentDivision?.schools?.find((s) => s.name === activeSchool);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-card shadow-large z-50"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex gap-0 min-h-[340px]">
              {/* Column 1: Divisions */}
              <div className="w-[280px] flex-shrink-0 border-r border-border/30 pr-3">
                <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-3 pl-3">
                  Divisions
                </h3>
                <div className="space-y-0.5">
                  {divisions.map((div, i) => (
                    <motion.div
                      key={div.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onMouseEnter={() => handleDivisionEnter(div.name)}
                      onMouseLeave={handleDivisionLeave}
                      className={`group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                        activeDivision === div.name
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {div.icon && <DivisionIcon icon={div.icon} />}
                      {div.href ? (
                        <Link to={div.href} className="text-xs font-medium leading-tight flex-1 hover:text-primary" onClick={onLinkClick}>{div.name}</Link>
                      ) : (
                        <span className="text-xs font-medium leading-tight flex-1">{div.name}</span>
                      )}
                      {(div.schools || div.courses) && (
                        <ChevronRight className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${
                          activeDivision === div.name ? "translate-x-0.5 text-primary" : "text-muted-foreground"
                        }`} />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Column 2: Schools (or direct courses for CODE/ANVESANA) */}
              <AnimatePresence mode="wait">
                {activeDivision && currentDivision && (
                  <motion.div
                    key={activeDivision}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="w-[260px] flex-shrink-0 border-r border-border/30 px-4"
                    onMouseEnter={() => {
                      if (divisionTimeout.current) clearTimeout(divisionTimeout.current);
                    }}
                    onMouseLeave={handleDivisionLeave}
                  >
                    {currentDivision.schools ? (
                      <>
                        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                          Schools
                        </h3>
                        <div className="space-y-0.5">
                          {currentDivision.schools.map((school, i) => (
                            <div
                              key={school.name}
                              onMouseEnter={() => handleSchoolEnter(school.name)}
                              onMouseLeave={handleSchoolLeave}
                              className={`group flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
                                activeSchool === school.name
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground hover:bg-muted/50"
                              }`}
                            >
                              {school.href ? (
                                <Link
                                  to={school.href}
                                  className={`text-xs leading-tight flex-1 hover:text-primary ${school.italic ? "italic text-muted-foreground" : "font-medium"}`}
                                  onClick={onLinkClick}
                                >
                                  {school.name}
                                </Link>
                              ) : (
                                <span className={`text-xs leading-tight flex-1 ${school.italic ? "italic text-muted-foreground" : "font-medium"}`}>
                                  {school.name}
                                </span>
                              )}
                              <ChevronRight className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${
                                activeSchool === school.name ? "translate-x-0.5 text-primary" : "text-muted-foreground"
                              }`} />
                            </div>
                          ))}
                        </div>
                      </>
                    ) : currentDivision.courses ? (
                      <>
                        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                          Links
                        </h3>
                        <div className="space-y-1">
                          {currentDivision.courses.map((course) => (
                            course.external ? (
                              <a
                                key={course.href}
                                href={course.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-3 py-2 rounded-md text-xs text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
                                onClick={onLinkClick}
                              >
                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="flex-1">{course.label}</span>
                                <ExternalLink className="w-3 h-3 opacity-50" />
                              </a>
                            ) : (
                              <Link
                                key={course.href}
                                to={course.href}
                                className="group flex items-center gap-2 px-3 py-2 rounded-md text-xs text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
                                onClick={onLinkClick}
                              >
                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span>{course.label}</span>
                              </Link>
                            )
                          ))}
                        </div>
                      </>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Column 3: Courses under selected school */}
              <AnimatePresence mode="wait">
                {activeSchool && currentSchool && (
                  <motion.div
                    key={activeSchool}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 px-4"
                    onMouseEnter={() => {
                      if (schoolTimeout.current) clearTimeout(schoolTimeout.current);
                      if (divisionTimeout.current) clearTimeout(divisionTimeout.current);
                    }}
                    onMouseLeave={handleSchoolLeave}
                  >
                    <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                      Programmes
                    </h3>
                    <div className="space-y-1">
                      {currentSchool.courses.map((course) => (
                        course.italic ? (
                          <p key={course.label} className="px-3 py-2 text-xs italic text-muted-foreground">
                            {course.label}
                          </p>
                        ) : course.external ? (
                          <a
                            key={course.href}
                            href={course.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-3 py-2 rounded-md text-xs text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
                            onClick={onLinkClick}
                          >
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="flex-1">{course.label}</span>
                            <ExternalLink className="w-3 h-3 opacity-50" />
                          </a>
                        ) : (
                          <Link
                            key={course.href + course.label}
                            to={course.href}
                            className="group flex items-center gap-2 px-3 py-2 rounded-md text-xs text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
                            onClick={onLinkClick}
                          >
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span>{course.label}</span>
                          </Link>
                        )
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Empty state when no division selected */}
              {!activeDivision && (
                <div className="flex-1 flex items-center justify-center text-muted-foreground/40">
                  <p className="text-sm italic">Hover a division to explore</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Mega Menu Dropdown
const MegaMenuDropdown = ({ 
  item, 
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onLinkClick
}: { 
  item: NavItem; 
  isOpen: boolean; 
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
}) => {
  const hasColumns = item.columns && item.columns.length > 0;
  const hasLinks = item.links && item.links.length > 0;
  const hasDivisions = item.divisions && item.divisions.length > 0;

  // Render divisions mega menu separately
  if (hasDivisions) {
    return (
      <DivisionsMegaMenu
        divisions={item.divisions!}
        isOpen={isOpen}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onLinkClick={onLinkClick}
      />
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (hasColumns || hasLinks) && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-card shadow-large z-50"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Mandala watermark */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.02] pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-primary">
              {[...Array(8)].map((_, i) => (
                <ellipse key={i} cx="100" cy="60" rx="20" ry="50" transform={`rotate(${i * 45} 100 100)`} />
              ))}
              <circle cx="100" cy="100" r="25" />
            </svg>
          </div>

          <div className="container mx-auto px-4 py-6">
            {hasColumns ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-h-[75vh] overflow-y-auto">
                {item.columns!.map((column, colIndex) => (
                  <motion.div
                    key={column.title}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: colIndex * 0.05 }}
                    className="flex flex-col"
                  >
                    {/* Column header with gold left border */}
                    <div className="relative mb-3 pb-2 border-b border-border/50">
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ delay: colIndex * 0.05 + 0.1, duration: 0.3 }}
                      />
                      <h3 className="pl-3 font-heading font-semibold text-xs text-foreground uppercase tracking-wider whitespace-nowrap">
                        {column.title}
                      </h3>
                    </div>
                    
                    {/* Course groups with hover specializations */}
                    {column.courseGroups && (
                      <div className="space-y-1 pl-3">
                        {column.courseGroups.map((group, groupIndex) => (
                          <CourseGroupItem
                            key={group.parent.href}
                            group={group}
                            colIndex={colIndex}
                            groupIndex={groupIndex}
                            onLinkClick={onLinkClick}
                          />
                        ))}
                      </div>
                    )}
                    
                    {/* Regular links list */}
                    {column.links && (
                      <ul className="space-y-1.5 pl-3">
                        {column.links.map((link, linkIndex) => (
                          <motion.li
                            key={link.href}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: colIndex * 0.05 + linkIndex * 0.02 }}
                          >
                            {link.external ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors leading-tight"
                                onClick={onLinkClick}
                              >
                                <ChevronRight className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                                <span className="flex-1">{link.label}</span>
                                <ExternalLink className="w-3 h-3 flex-shrink-0 opacity-50 mt-0.5" />
                              </a>
                            ) : (
                              <Link
                                to={link.href}
                                className="group flex items-start gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors leading-tight"
                                onClick={onLinkClick}
                              >
                                <ChevronRight className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                                <span className="flex-1">{link.label}</span>
                              </Link>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : hasLinks ? (
              <div className="max-w-md">
                <ul className="space-y-2">
                  {item.links!.map((link, linkIndex) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: linkIndex * 0.03 }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={onLinkClick}
                        >
                          <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          <span>{link.label}</span>
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={onLinkClick}
                        >
                          <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          <span>{link.label}</span>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-secondary z-50 overflow-y-auto"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <img src={svyasaLogo} alt="S-VYASA" className="h-10 brightness-0 invert" />
              <button onClick={onClose} className="p-2 text-white">
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-2">
              {/* Home link for mobile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  to="/"
                  onClick={onClose}
                  className="block py-3 text-white text-lg border-b border-white/10"
                >
                  Home
                </Link>
              </motion.div>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="block py-3 text-white text-lg border-b border-white/10"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between py-3 text-white text-lg border-b border-white/10"
                      >
                        <span>{item.label}</span>
                        <motion.span
                          animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={20} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-white/5 rounded-lg mt-2"
                          >
                            {item.divisions ? (
                              <div className="p-4 space-y-4">
                                {item.divisions.map((div) => (
                                  <div key={div.name}>
                                    <h4 className="text-gold text-sm font-semibold mb-2">{div.name}</h4>
                                    {div.schools?.map((school) => (
                                      <div key={school.name} className="mb-2">
                                        <p className={`text-white/50 text-xs mb-1 ${school.italic ? "italic" : "font-medium"}`}>{school.name}</p>
                                        {school.courses.map((course) => (
                                          course.italic ? (
                                            <p key={course.label} className="py-1 text-white/40 text-xs italic pl-2">{course.label}</p>
                                          ) : course.external ? (
                                            <a
                                              key={course.href}
                                              href={course.href}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="block py-1 text-white/70 text-xs pl-2"
                                            >
                                              {course.label} ↗
                                            </a>
                                          ) : (
                                            <Link
                                              key={course.href + course.label}
                                              to={course.href}
                                              onClick={onClose}
                                              className="block py-1 text-white/70 text-xs pl-2"
                                            >
                                              {course.label}
                                            </Link>
                                          )
                                        ))}
                                      </div>
                                    ))}
                                    {div.courses?.map((course) => (
                                      course.external ? (
                                        <a
                                          key={course.href}
                                          href={course.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block py-1.5 text-white/70 text-sm"
                                        >
                                          {course.label} ↗
                                        </a>
                                      ) : (
                                        <Link
                                          key={course.href + course.label}
                                          to={course.href}
                                          onClick={onClose}
                                          className="block py-1.5 text-white/70 text-sm"
                                        >
                                          {course.label}
                                        </Link>
                                      )
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ) : item.columns ? (
                              <div className="p-4 space-y-4">
                                {item.columns.map((col) => (
                                  <div key={col.title}>
                                    <h4 className="text-gold text-sm font-semibold mb-2">{col.title}</h4>
                                    {/* Handle courseGroups */}
                                    {col.courseGroups && col.courseGroups.slice(0, 5).map((group) => (
                                      <Link
                                        key={group.parent.href}
                                        to={group.parent.href}
                                        onClick={onClose}
                                        className="block py-1.5 text-white/70 text-sm"
                                      >
                                        {group.parent.label}
                                      </Link>
                                    ))}
                                    {col.courseGroups && col.courseGroups.length > 5 && (
                                      <span className="text-gold/70 text-xs">+{col.courseGroups.length - 5} more</span>
                                    )}
                                    {/* Handle regular links */}
                                    {col.links && col.links.slice(0, 5).map((link) => (
                                      <Link
                                        key={link.href}
                                        to={link.external ? "#" : link.href}
                                        onClick={link.external ? undefined : onClose}
                                        className="block py-1.5 text-white/70 text-sm"
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                    {col.links && col.links.length > 5 && (
                                      <span className="text-gold/70 text-xs">+{col.links.length - 5} more</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : item.links ? (
                              <div className="p-4">
                                {item.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    to={link.external ? "#" : link.href}
                                    onClick={link.external ? undefined : onClose}
                                    className="block py-2 text-white/70 text-sm"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            ) : null}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile CTA buttons */}
            <div className="mt-8 space-y-3">
              <a
                href="https://applynow.svyasa.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-primary text-primary-foreground">
                  ADMISSIONS
                </Button>
              </a>
              <Link to="/contact-us" onClick={onClose}>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MegaMenuHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <UtilityBar isVisible={!isScrolled} />

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-medium py-2"
            : "bg-card py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.img
                  src={svyasaLogo}
                  alt="S-VYASA University"
                  className={`transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0 rgba(232, 117, 26, 0))",
                      "drop-shadow(0 0 8px rgba(232, 117, 26, 0.3))",
                      "drop-shadow(0 0 0 rgba(232, 117, 26, 0))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {/* Home Button */}
              <Link
                to="/"
                className="px-3 py-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              {navItems.slice(0, 6).map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="px-3 py-2 flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                  {/* Active indicator removed */}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Search button */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-foreground hover:text-primary transition-colors hidden md:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={20} />
              </motion.button>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-2">
                <motion.a
                  href="https://applynow.svyasa.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                >
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground rounded-full px-6 pulse-glow"
                  >
                    ADMISSIONS
                  </Button>
                </motion.a>
                <Link to="/contact-us">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-secondary text-secondary rounded-full px-6"
                  >
                    CONTACT US
                  </Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-foreground"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        {navItems.slice(0, 6).map((item) => (
          <MegaMenuDropdown
            key={item.label}
            item={item}
            isOpen={activeDropdown === item.label}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            onLinkClick={() => setActiveDropdown(null)}
          />
        ))}
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default MegaMenuHeader;
