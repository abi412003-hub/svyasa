import { Link } from "react-router-dom";
import svyasaLogo from "@/assets/svyasa-logo.svg";
import { CODE_SITE } from "@/config/links";

const TrainingFooter = () => (
  <footer>
    {/* Main Footer */}
    <div className="bg-secondary text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <Link to="/" aria-label="S-VYASA home" className="inline-block">
              <img src={svyasaLogo} alt="S-VYASA" className="h-10 brightness-0 invert mb-3" />
            </Link>
            <p className="text-white/60 text-sm mb-4">Short-Term & Professional Training Programs</p>
            <nav className="space-y-1.5">
              {[
                { label: "Home", href: "/" },
                { label: "Training Home", href: "/training" },
                { label: "Courses", href: "/training/courses" },
                { label: "Admissions", href: "/training/admissions" },
                { label: "Contact", href: "/training/contact" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="block text-white/60 text-sm hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center */}
          <div className="text-center md:text-left">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Online delivery supported by</p>
            <h4 className="text-gold font-heading font-semibold text-lg mb-1">
              <a href={CODE_SITE} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Centre for Open & Distance Education (CODE)
              </a>
            </h4>
            <p className="text-white/60 text-sm">
              S-VYASA University (Deemed-to-be University under UGC)
            </p>
          </div>

          {/* Right */}
          <div className="text-right md:text-left">
            <div className="flex gap-3 justify-end md:justify-start mt-2">
              <Link to="/training/faqs" className="text-white/50 text-xs hover:text-white/80 transition-colors">
                Privacy
              </Link>
              <span className="text-white/30">|</span>
              <Link to="/training/faqs" className="text-white/50 text-xs hover:text-white/80 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Disclaimer Bar */}
    <div className="bg-[hsl(210,52%,18%)] py-3">
      <div className="container mx-auto px-4">
        <p className="text-white/40 text-[10px] leading-relaxed text-center">
          These are short-term certificate/training programs offered under the academic outreach of S-VYASA University. They are not degree, diploma, or credit-bearing programs under UGC/DEB regulations. Online delivery is managed through CODE, S-VYASA University.
        </p>
      </div>
    </div>
  </footer>
);

export default TrainingFooter;
