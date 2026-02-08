import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { teamMembers } from "./iicData";

const IICTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="py-16 bg-cream scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display text-navy mb-3">IIC Team Members – S-VYASA</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 ${
                member.featured ? "ring-2 ring-gold relative overflow-hidden" : ""
              }`}
            >
              {/* Featured shimmer */}
              {member.featured && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              )}

              {/* Avatar */}
              <motion.div
                whileHover={{ boxShadow: "0 0 0 4px hsl(var(--primary) / 0.3)" }}
                className={`relative w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
                  member.featured ? "bg-gold" : "bg-navy"
                }`}
              >
                {member.initials}
              </motion.div>

              {/* Name */}
              <h3 className="font-semibold text-navy mb-2">{member.name}</h3>

              {/* Role Badge */}
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 ${
                  member.featured
                    ? "bg-gold/20 text-gold"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {member.role}
              </span>

              {/* Type */}
              <p className="text-sm text-muted-foreground italic">{member.type}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IICTeam;
