import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, BookOpen, FlaskConical, Star, User, Linkedin, GraduationCap } from "lucide-react";

/** A person shown in a faculty / staff listing and in the shared profile window. */
export interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  qualifications?: string;
  photo?: string;
  bio?: string;
  /** Small label above the name in the profile window, e.g. "Faculty & Staff". */
  groupLabel?: string;
  section?: "leadership" | "staff" | "project";
  achievements?: string[];
  expertise?: string;
  research?: string;
  publications?: string[];
  linkedin_url?: string;
  /** Extra line under the designation, e.g. department or campus. */
  department?: string;
  /** Tailwind object-position class for the photo (default keeps faces near the top). */
  photoPosition?: string;
}

/* ── Helpers ── */
function avatarUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1a3d6b&color=fff&size=160&bold=true`;
}

/* ── Faculty Avatar ──
   Fills its frame exactly; anchored near the top so faces are never cut off. */
export function FacultyAvatar({
  photo,
  name,
  size = "lg",
  className = "",
  rounded = true,
  position = "object-[center_20%]",
}: {
  photo?: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "fill";
  className?: string;
  rounded?: boolean;
  /** Tailwind object-position class. */
  position?: string;
}) {
  const [err, setErr] = useState(false);
  const sizeClass = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
    "2xl": "w-48 h-48",
    fill: "w-full h-full",
  }[size];
  const src = !photo || err ? avatarUrl(name) : photo;
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      className={`${sizeClass} block object-cover ${position} ${rounded ? "rounded-full" : ""} ${className}`}
      onError={() => setErr(true)}
    />
  );
}

/* ── Faculty Profile (centred window in the site theme) ── */
function ProfileSection({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Icon size={16} />
        </span>
        <h3 className="font-heading font-bold text-navy text-lg">{title}</h3>
      </div>
      {children}
    </section>
  );
}

export function FacultyProfileModal({ member, onClose }: { member: FacultyProfile; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const sectionLabel =
    member.groupLabel ??
    (member.section === "leadership" ? "Academic Leadership" : member.section === "project" ? "Project Staff" : "Faculty & Staff");
  const hasDetails = member.bio || member.achievements || member.expertise || member.research || member.publications;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          key="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="faculty-profile-name"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto md:overflow-hidden rounded-3xl bg-cream shadow-2xl flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close profile"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-navy shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Photo + identity */}
          <div className="md:w-[38%] shrink-0 bg-white md:border-r border-border p-6 md:p-8 flex flex-col items-center text-center md:overflow-y-auto">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-full md:h-auto md:aspect-[4/5] rounded-full md:rounded-2xl overflow-hidden border-4 border-cream shadow-lg mb-5">
              <FacultyAvatar
                photo={member.photo}
                name={member.name}
                size="fill"
                rounded={false}
                position={member.photoPosition}
              />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary mb-2">{sectionLabel}</p>
            <h2 id="faculty-profile-name" className="font-heading text-2xl font-bold text-navy leading-tight">
              {member.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-primary">{member.designation}</p>
            {member.department && <p className="mt-1 text-xs text-muted-foreground">{member.department}</p>}
            <div className="w-12 h-1 rounded-full bg-gold my-4" />
            {member.qualifications && (
              <p className="inline-flex items-start gap-1.5 text-xs text-muted-foreground leading-relaxed">
                <GraduationCap size={14} className="text-primary shrink-0 mt-0.5" />
                {member.qualifications}
              </p>
            )}
            {member.linkedin_url && (
              <a
                href={member.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy border border-border rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 md:overflow-y-auto p-6 md:p-10 space-y-8">
            {member.bio && (
              <ProfileSection icon={User} title="About">
                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{member.bio}</p>
              </ProfileSection>
            )}

            {member.achievements && member.achievements.length > 0 && (
              <ProfileSection icon={Award} title="Achievements">
                <ul className="space-y-2.5">
                  {member.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </ProfileSection>
            )}

            {member.expertise && (
              <ProfileSection icon={Star} title="Area of Expertise">
                <div className="flex flex-wrap gap-2">
                  {member.expertise.split(/,\s*/).filter(Boolean).map((e) => (
                    <span key={e} className="text-xs font-medium text-navy bg-white border border-border rounded-full px-3 py-1.5">
                      {e}
                    </span>
                  ))}
                </div>
              </ProfileSection>
            )}

            {member.research && (
              <ProfileSection icon={FlaskConical} title="Research">
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{member.research}</p>
              </ProfileSection>
            )}

            {member.publications && member.publications.length > 0 && (
              <ProfileSection icon={BookOpen} title="Publications">
                <ul className="space-y-3">
                  {member.publications.map((p, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed bg-white rounded-xl border border-border px-4 py-3">
                      {p}
                    </li>
                  ))}
                </ul>
              </ProfileSection>
            )}

            {!hasDetails && (
              <div className="text-center py-16 text-muted-foreground">
                <User className="mx-auto mb-3 opacity-30" size={40} />
                <p className="text-sm">Full profile details coming soon.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
