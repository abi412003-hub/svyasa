import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsEvents = [
  { id: 1, title: "Republic Day Celebration 2025", image: "/images/campus/republic-day-prashan_143.jpg" },
  { id: 2, title: "26th INCOFYRA Conference", image: "/images/campus/republic-day-prashan_146.jpg" },
  { id: 3, title: "Himalaya Yoga Olympiad 2025", image: "/images/campus/republic-day-prashan_146.jpg" },
  { id: 4, title: "KRIDA VILASA Sports Fest", image: "/images/campus/ahscon-day-1_283.jpg voices-1?w=400&q=80" },
  { id: 5, title: "Gurupooja Utsav", image: "/images/campus/11th-international-d_101.jpg" },
  { id: 6, title: "Science Fair 2025", image: "/images/campus/s-vyasa-prashanti-ca_297.jpg" },
  { id: 7, title: "Hackathon 2025", image: "/images/campus/inaugral-event_92.jpg" },
  { id: 8, title: "Digital Marketing Day", image: "/images/campus/science-fair_157.jpg" },
  { id: 9, title: "Deeksharambh Orientation", image: "/images/campus/hackathon-2025_86.jpg" },
  { id: 10, title: "S-Vyasa Meet 2024", image: "/images/campus/digital-marketing-da_70.jpg" },
];

const GCCNews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {"News & Events".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {newsEvents.map((event, index) => (
              <motion.a
                key={event.id}
                href="/news-events"
                className="flex-shrink-0 w-72 group snap-start"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {event.title}
                    </h3>
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      Read more &gt;&gt;&gt;
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* View all link */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/news-events"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All News & Events
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GCCNews;
