import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Star, Sparkles, Award, BadgeCheck } from "lucide-react";
import { sponsorshipTiers } from "./aiuData";

const AIUSponsorship = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display text-navy mb-3">Sponsorship Opportunities</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground">
            Partner with one of India's most influential university sporting events.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {sponsorshipTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                tier.featured
                  ? "bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold shadow-lg lg:col-span-1 lg:row-span-1"
                  : tier.silver
                  ? "bg-gradient-to-br from-slate-100 to-white border border-slate-200 shadow-md"
                  : "bg-white border border-border shadow-md"
              }`}
            >
              {/* Featured shimmer */}
              {tier.featured && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              )}

              {/* Badge */}
              {tier.badge && (
                <div className={`absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full shadow-md ${
                  tier.badge === "PREMIUM"
                    ? "bg-gold text-navy"
                    : "bg-primary text-white"
                }`}>
                  {tier.badge === "PREMIUM" ? <Star className="w-3 h-3 fill-current" /> : <Sparkles className="w-3 h-3" />}
                  {tier.badge}
                </div>
              )}

              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  tier.featured ? "bg-gold/20 text-gold" : "bg-primary/10 text-primary"
                }`}>
                  {tier.featured ? <Award className="w-6 h-6" /> : <BadgeCheck className="w-6 h-6" />}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-navy text-lg mb-2">{tier.title}</h3>

                {/* Price */}
                <p className={`text-2xl font-bold mb-4 ${tier.featured ? "text-gold" : "text-primary"}`}>
                  {tier.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CSR Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-full text-navy text-sm font-medium">
            <BadgeCheck className="w-4 h-4 text-primary" />
            Eligible under Sections 80G & 12A of the Income Tax Act.
          </div>
        </motion.div>

        {/* Contact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="bg-navy rounded-xl py-4 px-6 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-white font-medium">For Sponsorship & Stalls:</span>
          <a
            href="tel:+919739326304"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-navy text-white rounded-full transition-all duration-300"
          >
            <motion.span
              animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Phone className="w-4 h-4" />
            </motion.span>
            +91 97393 26304
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AIUSponsorship;
