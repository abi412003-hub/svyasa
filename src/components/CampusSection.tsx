import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const B = "https://spkbypslhjqvnvnujpwd.supabase.co/storage/v1/object/public/site-images";

const categories = [
  {
    label: "Campus",
    images: [
      { src: `${B}/campus/1771444968911-9sejaribuev.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771444970209-kzbvf3vq63n.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771444972639-eoritt4pdta.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771444973127-6cskauuwmrr.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771444973608-jiveobz2as.jpg`, label: "Campus" },
      { src: `${B}/campus/1771444974134-ky0tbznvce.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771444974633-9z9mel4bpm.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771444975163-7f5g0gqcq36.jpg`, label: "Campus" },
      { src: `${B}/campus/1771444975750-yumo0hq3oif.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445013298-4ttyelmm3w9.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445014593-8b85ka0m3df.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445070253-tcm4k7u43d.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445071250-3riq8f0isqc.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445071803-fehxwk9hn3c.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445072386-1lyng32ivkxi.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445083630-5evr64249ie.jpg`, label: "Campus" },
      { src: `${B}/campus/1771445084488-mhsie65ib2i.jpg`, label: "Campus" },
      { src: `${B}/campus/1771445085029-83ucy1ebq08.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445085550-n49y1pne6y.jpg`, label: "Campus" },
      { src: `${B}/campus/1771445086100-0xumn9jvlqe.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445096347-hbdpmob9d1.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445097180-gfunpej0ki6.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445116555-474wox3wwju.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445117470-9v3we9qf8lf.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445118009-ylei2rl912.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445118534-42k3k06ih8f.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445119336-xu8c31xbd1.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445411618-oakkgdorxss.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445412136-besxndk9r8b.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445412995-ya8drxnz8g.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445413539-4huuw65epd9.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445414046-ygbnrco0k7.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445414692-7wk9a3ne673.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445415327-3a56btti3tq.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445415879-aqgssm2ptt.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445416495-b9m6d7tp07u.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445417021-xcvgdat4oq.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445425404-9g1gkf5ga98.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445426343-v0l0f7r5cn.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445427109-p8ywhmz3wn8.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445427735-69g3zkh8xlv.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445428612-vknnizehtn.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445429155-kwznoinmxmc.jpeg`, label: "Campus" },
      { src: `${B}/campus/1771445429686-9b89clwn4zc.jpeg`, label: "Campus" },
      { src: `${B}/city-campus/campus/1771446936315-c2mzjw4ohxp.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446937354-ngi1fymg3tg.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446937874-d2xocvupg8m.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446938387-kmpgrkfs5mk.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446938911-tpx9tc83b7k.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446939536-2k07nk6hljh.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446940230-h5knwqlb6oo.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446940756-97b4ydl62w6.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446941334-p787xysgbkm.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771446941880-t7nydj0bnyo.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447160924-einpeztici.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447167936-vjrk8upqh3.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447168500-avqj3i0hnas.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447169021-feqlvo9y20q.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447169725-pduqhy9txm.jpeg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447201917-2rm69b1pqwf.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447203304-0k391kmq1zjg.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447203986-bywdduystdi.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447204667-4lcx2l4cswu.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447205384-wv77y36fwe9.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447206355-6cyhjn31sbo.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447206936-6609zrenma4.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447207630-8it3m6a7vgb.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447208564-dglvlnveuq.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447210576-fqb6j5da2jt.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447220039-dhka830d6ha.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447221019-1ltzv55kvd2.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447221978-ujapipo08h.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447222704-23smca4ardn.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447258223-wolwbl3o4lh.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447259225-z2rkg1i1r3h.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447259975-m2ui5blhmsf.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447260647-rj37xf9qsr.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447261318-co4nzp653ev.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447261980-5n1r3yen2ap.jpg`, label: "City Campus" },
      { src: `${B}/city-campus/campus/1771447262662-ucmnqd1dmzo.jpg`, label: "City Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771446854604-msibx1dkmhr.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771446855457-madaq2csqc.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771446856001-siftdcqlg5.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771446856534-t42y6c5itk.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771446857013-kvoxoivco5a.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771446857525-uspf14og9pa.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771446858046-0sybo5sjwm6.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447446539-gac0h5fo5ww.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447447603-xqzocpjzdjn.jpg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447448151-xtajmvzxsho.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447448550-p2i0g2m3zwj.jpg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447449084-886hm7hig4j.jpg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447477140-tzz2jgl93yn.jpg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447477771-ck2013l6o66.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447478605-fz3ig2nqgm.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447478980-2ukjq6meifk.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447481323-o3x5ughuys.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447481835-yxt092h16xj.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447482333-5rxqdis5qyr.jpg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447483113-aaj575eey26.jpeg`, label: "Prashanti Campus" },
      { src: `${B}/prashanti/prashanti-campus/1771447483663-v8h586lloe.jpeg`, label: "Prashanti Campus" },
    ],
  },
  {
    label: "Library",
    images: [
      { src: `${B}/city-campus/library/1771447107660-cryl5zdmnyq.jpeg`, label: "Library" },
      { src: `${B}/city-campus/library/1771447108701-dfjj7yqf3rt.jpeg`, label: "Library" },
      { src: `${B}/city-campus/library/1771447109252-ada64v6p35p.jpeg`, label: "Library" },
      { src: `${B}/city-campus/library/1771447109751-fvyfr4mmlu.jpeg`, label: "Library" },
      { src: `${B}/city-campus/library/1771447110259-5dauyg61hbq.jpeg`, label: "Library" },
      { src: `${B}/city-campus/library/1771447111050-qj2z3wku3xh.jpeg`, label: "Library" },
      { src: `${B}/city-campus/library/1771447111575-f58mmigak8n.jpeg`, label: "Library" },
      { src: `${B}/city-campus/library/1771447112157-19v3ypvb1ua.jpeg`, label: "Library" },
    ],
  },
  {
    label: "Cultural",
    images: [
      { src: `${B}/prashanti/cultural/1771447411756-dpw9nmpgzw8.jpeg`, label: "Cultural Events" },
      { src: `${B}/prashanti/cultural/1771447412651-ob42mcgqoh.jpeg`, label: "Cultural Events" },
      { src: `${B}/prashanti/cultural/1771447413246-yt2wejztpi.jpeg`, label: "Cultural Events" },
      { src: `${B}/prashanti/cultural/1771447413860-mfcklh3heef.jpeg`, label: "Cultural Events" },
      { src: `${B}/prashanti/cultural/1771447414693-0tfil5ur9d8i.jpeg`, label: "Cultural Events" },
    ],
  },
  {
    label: "Classrooms",
    images: [
      { src: `${B}/city-campus/classrooms/1771447061621-ecmwy720a3m.jpeg`, label: "Classrooms" },
      { src: `${B}/city-campus/classrooms/1771447062568-1972jsykujp.jpeg`, label: "Classrooms" },
      { src: `${B}/city-campus/classrooms/1771447063120-92qw8ltuz3e.jpeg`, label: "Classrooms" },
      { src: `${B}/city-campus/classrooms/1771447063619-yvoqf8511h.jpeg`, label: "Classrooms" },
      { src: `${B}/city-campus/classrooms/1771447064167-ymjqv679y3b.jpeg`, label: "Classrooms" },
      { src: `${B}/city-campus/classrooms/1771447064763-v2gov5u8ekm.jpeg`, label: "Classrooms" },
      { src: `${B}/city-campus/classrooms/1771447065284-6hrm1o8v9pl.jpeg`, label: "Classrooms" },
    ],
  },
];

const CampusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const images = categories[activeCategory].images;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  // Reset slide index when category changes
  useEffect(() => {
    setCurrent(0);
  }, [activeCategory]);

  // Auto-slide every 3s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  // Build visible slides: show 3 at a time (prev, current, next)
  const getSlide = (offset: number) =>
    images[(current + offset + images.length) % images.length];

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Lotus watermark */}
      <motion.svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-5"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <motion.path
          d="M100 20 C100 20 140 60 140 100 C140 140 100 180 100 180 C100 180 60 140 60 100 C60 60 100 20 100 20"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.circle
          cx="100" cy="100" r="30"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 1 }}
        />
      </motion.svg>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-primary font-medium mb-4"
          >
            Experience Our Campus
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {"Campus Life".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                className="inline-block"
                style={{ marginRight: char === " " ? "0.5rem" : "0" }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our campuses featuring world-class facilities designed for holistic learning and personal transformation.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-2 mb-8 flex-wrap"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-60">({cat.images.length})</span>
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main slider — 3 visible cards */}
          <div className="relative flex items-center justify-center gap-4 h-[420px] md:h-[500px] overflow-hidden px-2">
            {[-1, 0, 1].map((offset) => {
              const img = getSlide(offset);
              const isCenter = offset === 0;
              return (
                <motion.div
                  key={`${activeCategory}-${(current + offset + images.length) % images.length}`}
                  layout
                  animate={{
                    scale: isCenter ? 1 : 0.82,
                    opacity: isCenter ? 1 : 0.55,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`relative flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer group shadow-lg ${
                    isCenter
                      ? "w-[55%] md:w-[50%] h-[420px] md:h-[500px]"
                      : "w-[22%] md:w-[22%] h-[340px] md:h-[400px]"
                  }`}
                  onClick={() => isCenter ? setLightbox(img) : (offset < 0 ? prev() : next())}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent flex items-end p-6"
                    >
                      <span className="text-white font-medium text-lg">{img.label}</span>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-6 flex-wrap max-w-xs mx-auto">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-muted-foreground mt-3">
          {current + 1} / {images.length}
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="w-full rounded-xl max-h-[85vh] object-contain"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-xl">
                <p className="text-white text-xl font-heading">{lightbox.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CampusSection;
