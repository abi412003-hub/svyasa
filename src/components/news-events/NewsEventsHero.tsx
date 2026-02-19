import { motion } from "framer-motion";
import newsEventsHero from "@/assets/news-events-hero.jpg";

const NewsEventsHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${newsEventsHero}')`, backgroundPosition: "center 30%" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-display"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            News & Events
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsHero;
