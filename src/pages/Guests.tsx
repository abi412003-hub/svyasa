import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Layout from "@/components/layout/Layout";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import type { GalleryPhoto } from "@/components/gallery/galleryData";
import guestsHero from "@/assets/guests/guest-modi-golden-jubilee.webp";

import imgModiJubilee from "@/assets/guests/guest-modi-golden-jubilee.webp";
import imgMohanYadav1 from "@/assets/guests/guest-mohan-yadav-1.jpg";
import imgMohanYadav2 from "@/assets/guests/guest-mohan-yadav-2.jpg";
import imgSunilSharma1 from "@/assets/guests/guest-sunil-sharma-1.jpg";
import imgSunilSharma2 from "@/assets/guests/guest-sunil-sharma-2.jpg";
import imgSunilSharma3 from "@/assets/guests/guest-sunil-sharma-3.jpg";
import imgSunilSharma4 from "@/assets/guests/guest-sunil-sharma-4.jpg";
import imgDiyaKumari1 from "@/assets/guests/guest-diya-kumari-1.jpg";
import imgDiyaKumari2 from "@/assets/guests/guest-diya-kumari-2.jpg";
import imgDiyaKumari3 from "@/assets/guests/guest-diya-kumari-3.jpg";

import imgPadmaShri from "@/assets/guests/guest-padma-shri.jpg";
import imgGlobalPeace from "@/assets/guests/guest-global-peace.jpg";
import imgIncofyra from "@/assets/guests/guest-incofyra.jpg";
import imgYeddyurappa from "@/assets/guests/guest-yeddyurappa.jpg";
import imgHarshVardhan from "@/assets/guests/guest-harsh-vardhan.jpg";
import imgMohanBhagwat from "@/assets/guests/guest-mohan-bhagwat.jpg";
import imgDidiJanki from "@/assets/guests/guest-didi-janki.jpg";
import imgSadhguru from "@/assets/guests/guest-sadhguru.jpg";
import imgRatanTata from "@/assets/guests/guest-ratan-tata.jpg";
import imgSudhaMurthy from "@/assets/guests/guest-sudha-murthy.jpg";
import imgDeviShetty from "@/assets/guests/guest-devi-shetty.jpg";
import imgBasaveshwara from "@/assets/guests/guest-basaveshwara-london.jpg";
import imgAshokSinghal from "@/assets/guests/guest-ashok-singhal.jpg";
import imgBhaiyyajiJoshi from "@/assets/guests/guest-bhaiyyaji-joshi.jpg";
import imgSriSri from "@/assets/guests/guest-sri-sri.jpg";
import imgRamNathKovind from "@/assets/guests/guest-ram-nath-kovind.jpg";
import imgNagarathnaAward from "@/assets/guests/guest-nagarathna-award.jpg";
import imgBabaRamdev from "@/assets/guests/guest-baba-ramdev.jpg";
import imgSriSriShanti from "@/assets/guests/guest-sri-sri-shanti.jpg";
import imgSwamiSuryananda from "@/assets/guests/guest-swami-suryananda.jpg";
import imgKasturirangan from "@/assets/guests/guest-kasturirangan.jpg";
import imgBksIyengar from "@/assets/guests/guest-bks-iyengar.jpg";
import imgNagendraFamily from "@/assets/guests/guest-nagendra-family.jpg";
import imgSonalMansingh from "@/assets/guests/guest-sonal-mansingh.jpg";
import imgMurliManoharJoshi from "@/assets/guests/guest-murli-manohar-joshi.jpg";
import imgHansrajBharadwaj from "@/assets/guests/guest-hansraj-bharadwaj.jpg";
import imgKaranSingh from "@/assets/guests/guest-karan-singh.jpg";
import imgJagadishShettar from "@/assets/guests/guest-jagadish-shettar.jpg";
import imgDeepakChopra from "@/assets/guests/guest-deepak-chopra.jpg";
import imgKsEshwarappa from "@/assets/guests/guest-ks-eshwarappa.jpg";
import imgSiddaramaiah from "@/assets/guests/guest-siddaramaiah.jpg";
import imgVasundharaRaje from "@/assets/guests/guest-vasundhara-raje.jpg";
import imgManoharKhattar from "@/assets/guests/guest-manohar-khattar.jpg";
import imgVirbhadraSingh from "@/assets/guests/guest-virbhadra-singh.jpg";
import imgSheilaDixit from "@/assets/guests/guest-sheila-dixit.jpg";
import imgTulsiGabbard from "@/assets/guests/guest-tulsi-gabbard.jpg";
import imgShripadNaik from "@/assets/guests/guest-shripad-naik.jpg";
import imgMaheshSharma from "@/assets/guests/guest-mahesh-sharma.jpg";
import imgRathore from "@/assets/guests/guest-rathore.jpg";
import imgUtKhader from "@/assets/guests/guest-ut-khader.jpg";
import imgKrRameshKumar from "@/assets/guests/guest-kr-ramesh-kumar.jpg";
import imgKsSudarshan from "@/assets/guests/guest-ks-sudarshan.jpg";

interface GuestEntry {
  id: string;
  year: string;
  caption: string;
  image: string;
  span?: "wide" | "tall" | "normal";
}

const guests: GuestEntry[] = [
  { id: "g1",  year: "2019", caption: "Hon'ble President of India, Shri Ram Nath Kovind in Prashanti",           image: imgRamNathKovind,     span: "wide" },
  { id: "g2",  year: "2017", caption: "Sri Sri Ravishankar Guruji during Shanti Yoga Peetharohanam",             image: imgSriSriShanti,      span: "tall" },
  { id: "g3",  year: "2017", caption: "Guru Gaurava Samarpanam — Pujya Baba Ramdevji",                           image: imgBabaRamdev,        span: "normal" },
  { id: "g4",  year: "2017", caption: "Sri Sri Ravishankar Guruji in Anvesana Research Laboratories",            image: imgSriSri,            span: "normal" },
  { id: "g5",  year: "2017", caption: "Shri Ratan Tata in Mumbai",                                               image: imgRatanTata,         span: "wide" },
  { id: "g6",  year: "2017", caption: "Dr. K Kasturirangan, Former Chairman of ISRO",                            image: imgKasturirangan,     span: "tall" },
  { id: "g7",  year: "2017", caption: "Kalayoga Peetharohanam of Dr. Sonal Mansingh",                            image: imgSonalMansingh,     span: "normal" },
  { id: "g8",  year: "2017", caption: "Felicitation to Shri Bhaiyyaji Joshi, Sarkaryvaha, RSS",                  image: imgBhaiyyajiJoshi,    span: "normal" },
  { id: "g9",  year: "2016", caption: "Padma Shri awarded to Dr. H R Nagendra, Head of the Institution",        image: imgPadmaShri,         span: "wide" },
  { id: "g10", year: "2016", caption: "Sadguru Jaggi Vasudev during 21st INCOFYRA",                              image: imgSadhguru,          span: "normal" },
  { id: "g11", year: "2016", caption: "Inaugural Ceremony of 21st INCOFYRA in Prashanti",                        image: imgIncofyra,          span: "wide" },
  { id: "g12", year: "2016", caption: "Didi Janki, Spiritual Head of Brahma Kumaris",                            image: imgDidiJanki,         span: "tall" },
  { id: "g13", year: "2016", caption: "Jagatguru Swami Amrut Suryananda Ji Maharaja of Portugal",                image: imgSwamiSuryananda,   span: "normal" },
  { id: "g14", year: "2016", caption: "882nd Birth Anniversary celebration of Basaveshwara in London",           image: imgBasaveshwara,      span: "normal" },
  { id: "g15", year: "2015", caption: "Global Peace Award to Dr. H R Nagendra by World Peace Council",           image: imgGlobalPeace,       span: "normal" },
  { id: "g16", year: "2015", caption: "Shri Ashok Singhalji, VHP — USA",                                         image: imgAshokSinghal,      span: "normal" },
  { id: "g17", year: "2014", caption: "Felicitation to Sarsanghchalak of RSS, Shri Mohanji Bhagwat",             image: imgMohanBhagwat,      span: "wide" },
  { id: "g18", year: "2014", caption: "Inauguration of Anvesana by Dr. Harsh Vardhan ji, Union Minister",        image: imgHarshVardhan,      span: "normal" },
  { id: "g19", year: "2011", caption: "Dr. BKS Iyengar & Shri D V Sadananda Gowda, Chief Minister, GoK",        image: imgBksIyengar,        span: "wide" },
  { id: "g20", year: "2019", caption: "Kannada Rajyotsava Award to Dr. R Nagarathna",                            image: imgNagarathnaAward,   span: "normal" },
  { id: "g21", year: "2007", caption: "Inauguration of Tyaga Men's Hostel by Shri B S Yeddyurappa ji",           image: imgYeddyurappa,       span: "normal" },
  { id: "g22", year: "",     caption: "Smt. Sudha N Murthy & Dr. Sadananda Maiya",                               image: imgSudhaMurthy,       span: "wide" },
  { id: "g23", year: "",     caption: "Dr. Devi Shetty, Chairman & Founder of Narayana Health",                  image: imgDeviShetty,        span: "normal" },
  { id: "g24", year: "",     caption: "Dr. H R Nagendra, Dr R Nagarathna & family",                              image: imgNagendraFamily,    span: "normal" },
  { id: "g25", year: "",     caption: "Shri Murli Manohar Joshi, Former Union HRD Minister",                     image: imgMurliManoharJoshi, span: "normal" },
  { id: "g26", year: "",     caption: "Dr. Hansraj Bharadwaj, Hon'ble Governor of Karnataka",                    image: imgHansrajBharadwaj,  span: "wide" },
  { id: "g27", year: "",     caption: "Shri Karan Singh, Leading Parliamentarian",                                image: imgKaranSingh,        span: "normal" },
  { id: "g28", year: "2017", caption: "Shri Siddaramaiah, Karnataka Chief Minister",                               image: imgSiddaramaiah,      span: "wide" },
  { id: "g29", year: "2015", caption: "Ms. Vasundhara Raje, Rajasthan Chief Minister",                             image: imgVasundharaRaje,    span: "normal" },
  { id: "g30", year: "2015", caption: "Shri Manohar Lal Khattar, Haryana Chief Minister",                          image: imgManoharKhattar,    span: "normal" },
  { id: "g31", year: "2015", caption: "Shri Virbhadra Singh, Himachal Pradesh Chief Minister",                     image: imgVirbhadraSingh,    span: "normal" },
  { id: "g32", year: "2014", caption: "Ms. Tulsi Gabbard, US Representative, in Prashanti",                        image: imgTulsiGabbard,      span: "wide" },
  { id: "g33", year: "2014", caption: "Shri Shripad Yesso Naik, Union AYUSH Minister",                             image: imgShripadNaik,       span: "tall" },
  { id: "g34", year: "2013", caption: "Ms. Sheila Dixit, Delhi Chief Minister",                                    image: imgSheilaDixit,       span: "normal" },
  { id: "g35", year: "",     caption: "Dr. Deepak Chopra, USA",                                                    image: imgDeepakChopra,      span: "normal" },
  { id: "g36", year: "",     caption: "Shri Jagadish Shettar, Former Chief Minister of Karnataka",                 image: imgJagadishShettar,   span: "normal" },
  { id: "g37", year: "",     caption: "Shri K S Eshwarappa, Former Deputy CM of Karnataka",                        image: imgKsEshwarappa,      span: "wide" },
  { id: "g38", year: "2016", caption: "Felicitation to Dr. Mahesh Sharma, Union Minister",                         image: imgMaheshSharma,      span: "normal" },
  { id: "g39", year: "2015", caption: "Col. Rajyavardhan Singh Rathore, Union Sports Minister",                    image: imgRathore,           span: "wide" },
  { id: "g40", year: "2015", caption: "Shri U T Khader, Food & Public Distribution Minister, GoK",                image: imgUtKhader,          span: "normal" },
  { id: "g41", year: "2016", caption: "Shri K R Ramesh Kumar, Health & Family Welfare Minister, GoK",             image: imgKrRameshKumar,     span: "normal" },
  { id: "g42", year: "",     caption: "Shri K S Sudarshan ji, Sarsanghachalak of RSS",                             image: imgKsSudarshan,       span: "normal" },
];

// ─── Recent distinguished guests (Golden Jubilee of Prashanti Kutiram) ────────
interface FeaturedGuest {
  id: string;
  name: string;
  designation: string;
  event: string;
  photos: { src: string; alt: string }[];
}

const featuredGuests: FeaturedGuest[] = [
  {
    id: "narendra-modi",
    name: "Shri Narendra Modi",
    designation: "Hon'ble Prime Minister of India",
    event:
      "Chief Guest at the Golden Jubilee of Prashanti Kutiram & Birth Centenary Commemoration of Mananeeya H. V. Sheshadri Ji — releasing the H. V. Sheshadri literature series.",
    photos: [
      { src: imgModiJubilee, alt: "Shri Narendra Modi releasing the H. V. Sheshadri literature series at Prashanti Kutiram" },
    ],
  },
  {
    id: "mohan-yadav",
    name: "Dr. Mohan Yadav Ji",
    designation: "Hon'ble Chief Minister, Government of Madhya Pradesh",
    event:
      "Welcomed at Prashanti Kutiram by Dr. H R Nagendra, President, S-VYASA Society, alongside Shri Jai Kishan Jhaver, Chairman, Jhaver Group.",
    photos: [
      { src: imgMohanYadav1, alt: "Dr. H R Nagendra felicitating Dr. Mohan Yadav Ji with a shawl" },
      { src: imgMohanYadav2, alt: "Dr. Mohan Yadav Ji greeting guests on stage with Dr. H R Nagendra and Shri Jai Kishan Jhaver" },
    ],
  },
  {
    id: "sunil-kumar-sharma",
    name: "Shri Sunil Kumar Sharma Ji",
    designation: "Hon'ble Leader of the Opposition, Jammu & Kashmir Legislative Assembly",
    event:
      "Visited Prashanti Kutiram — campus walk and meeting with Dr. H R Nagendra, followed by the Golden Jubilee programme with Prof. Ramachandra G Bhat and Prof. S Siva Sankara Sai.",
    photos: [
      { src: imgSunilSharma4, alt: "Dr. H R Nagendra welcoming Shri Sunil Kumar Sharma Ji with a rose on stage" },
      { src: imgSunilSharma1, alt: "Shri Sunil Kumar Sharma Ji with dignitaries on stage during Vande Mataram" },
      { src: imgSunilSharma2, alt: "Shri Sunil Kumar Sharma Ji in conversation with Dr. H R Nagendra" },
      { src: imgSunilSharma3, alt: "Shri Sunil Kumar Sharma Ji walking through the Prashanti Kutiram campus" },
    ],
  },
  {
    id: "diya-kumari",
    name: "Smt. Diya Kumari Ji",
    designation: "Hon'ble Deputy Chief Minister of Rajasthan",
    event:
      "Lit the ceremonial lamp at the S-VYASA Golden Jubilee celebrations, 17 November, with Dr. H R Nagendra and Dr. B R Ramakrishna, Pro Chancellor.",
    photos: [
      { src: imgDiyaKumari3, alt: "Smt. Diya Kumari Ji lighting the ceremonial lamp" },
      { src: imgDiyaKumari2, alt: "Lamp lighting at the S-VYASA Golden Jubilee celebrations" },
      { src: imgDiyaKumari1, alt: "Smt. Diya Kumari Ji with dignitaries on stage during Vande Mataram" },
    ],
  },
];

type LightboxState = { photos: GalleryPhoto[]; index: number } | null;

// ─── Parallax Hero ────────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[55vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Ken Burns background image */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={guestsHero}
          alt="Distinguished Guests at S-VYASA"
          className="w-full h-full object-cover object-[center_30%]"
        />
      </motion.div>

      {/* Navy overlay */}
      <div className="absolute inset-0" style={{ background: "hsla(210, 52%, 23%, 0.62)" }} />

      {/* Text content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.4 }}
          className="uppercase text-xs font-semibold tracking-[0.3em] mb-6 text-white/80">
          Distinguished Visitors
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold leading-none tracking-tight text-white"
          style={{ textShadow: "0 4px 24px rgba(0,0,0,0.45)" }}>
          Our{" "}
          <span className="italic" style={{ color: "hsl(var(--primary))" }}>Guests</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-white/80 text-sm md:text-lg mt-4 md:mt-6 max-w-md mx-auto leading-relaxed px-4"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
          Luminaries, leaders, and visionaries who have graced S-VYASA with their presence.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="mt-14 flex flex-col items-center">
          <motion.div animate={{ scaleY: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 origin-top bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─── Individual photo card ─────────────────────────────────────────────────────
const GuestCard = ({ guest, index, onOpen }: { guest: GuestEntry; index: number; onOpen: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const entrances = [
    { x: -80, y: 0 }, { x: 0, y: 80 }, { x: 80, y: 0 },
    { x: -60, y: 60 }, { x: 60, y: 60 }, { x: 0, y: -60 },
    { x: -80, y: 30 }, { x: 80, y: 30 },
  ];
  const entrance = entrances[index % entrances.length];
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: entrance.x, y: entrance.y, scale: 0.88 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl shadow-xl cursor-zoom-in focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
      role="button"
      tabIndex={0}
      aria-label={`Enlarge photo: ${guest.caption}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <span className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/45 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Expand className="w-4 h-4" />
      </span>
      <motion.div whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        className="w-full h-full">
        <div className="relative overflow-hidden">
          <motion.img src={guest.image} alt={guest.caption}
            className="w-full h-auto block"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />
          <motion.div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.09) 50%, transparent 60%)" }}
            initial={{ x: "-100%" }} whileHover={{ x: "160%" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-2 md:p-5">
            <motion.p className="text-white font-semibold text-[10px] sm:text-xs md:text-sm leading-snug drop-shadow-lg"
              initial={{ y: 12, opacity: 0.7 }} whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}>
              {guest.caption}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Featured guest: details + horizontally scrollable photo strip ─────────────
const FeaturedGuestSection = ({
  guest,
  index,
  onOpen,
}: {
  guest: FeaturedGuest;
  index: number;
  onOpen: (photoIndex: number) => void;
}) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const reversed = index % 2 === 1;
  const scrollStrip = (dir: -1 | 1) => {
    const strip = stripRef.current;
    if (strip) strip.scrollBy({ left: dir * strip.clientWidth * 0.85, behavior: "smooth" });
  };
  const multiple = guest.photos.length > 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 lg:gap-10 items-center ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
      aria-labelledby={`guest-${guest.id}`}
    >
      <div className="min-w-0">
        <p className="uppercase text-[11px] font-semibold tracking-[0.25em] mb-2" style={{ color: "hsl(var(--primary))" }}>
          Distinguished Guest
        </p>
        <h3 id={`guest-${guest.id}`} className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {guest.name}
        </h3>
        <p className="mt-1 font-semibold text-sm md:text-base" style={{ color: "hsl(var(--primary))" }}>
          {guest.designation}
        </p>
        <div className="w-14 h-1 rounded-full bg-gold my-4" />
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{guest.event}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          {guest.photos.length} photo{multiple ? "s" : ""} · click a photo to enlarge
        </p>
      </div>

      <div className="relative min-w-0">
        <div
          ref={stripRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {guest.photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => onOpen(i)}
              aria-label={`Enlarge photo: ${photo.alt}`}
              className={`group relative shrink-0 snap-start overflow-hidden rounded-2xl shadow-xl cursor-zoom-in focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 ${
                multiple ? "w-[85%] sm:w-[70%]" : "w-full"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/45 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <Expand className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>

        {multiple && (
          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollStrip(-1)}
              aria-label={`Previous photos of ${guest.name}`}
              className="w-10 h-10 rounded-full border border-border bg-background text-foreground flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollStrip(1)}
              aria-label={`Next photos of ${guest.name}`}
              className="w-10 h-10 rounded-full border border-border bg-background text-foreground flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </motion.article>
  );
};

// ─── Main page ─────────────────────────────────────────────────────────────────
const gridPhotos: GalleryPhoto[] = guests.map((g) => ({
  id: g.id,
  src: g.image,
  alt: g.caption,
  category: g.year ? `${g.caption} · ${g.year}` : g.caption,
}));

export default function Guests() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openFeatured = (guest: FeaturedGuest, index: number) =>
    setLightbox({
      index,
      photos: guest.photos.map((p, i) => ({
        id: `${guest.id}-${i}`,
        src: p.src,
        alt: p.alt,
        category: `${guest.name} — ${guest.designation}`,
      })),
    });

  return (
    <Layout>
      <Hero />

      {/* Recent distinguished guests */}
      <section className="py-12 md:py-20 bg-cream/40 border-b border-border/60">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10 md:mb-16 text-center">
            <p className="uppercase text-xs font-semibold tracking-[0.25em] mb-3"
              style={{ color: "hsl(var(--primary))" }}>
              Golden Jubilee of Prashanti Kutiram
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">Recent Distinguished Guests</h2>
          </motion.div>

          <div className="space-y-14 md:space-y-20">
            {featuredGuests.map((guest, i) => (
              <FeaturedGuestSection key={guest.id} guest={guest} index={i} onOpen={(p) => openFeatured(guest, p)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-3 md:px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-8 md:mb-12 text-center">
            <p className="uppercase text-xs font-semibold tracking-[0.25em] mb-3"
              style={{ color: "hsl(var(--primary))" }}>
              Moments in History
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">Captured in Time</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-2 md:gap-5">
            {guests.map((guest, i) => (
              <GuestCard key={guest.id} guest={guest} index={i} onOpen={() => setLightbox({ photos: gridPhotos, index: i })} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 border-t"
        style={{ background: "hsl(var(--primary)/0.04)", borderColor: "hsl(var(--primary)/0.1)" }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="uppercase tracking-widest text-xs font-semibold mb-4"
              style={{ color: "hsl(var(--primary))" }}>Open Invitation</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Invite a Distinguished Guest
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base">
              S-VYASA welcomes scholars, leaders, and dignitaries for lectures, collaborations, and campus visits.
            </p>
            <motion.a href="/contact-us" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 md:px-9 py-3 md:py-4 rounded-full font-semibold text-white shadow-xl text-sm md:text-base"
              style={{ background: "hsl(var(--primary))" }}>
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      <GalleryLightbox
        photos={lightbox?.photos ?? []}
        currentIndex={lightbox?.index ?? 0}
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
        onNavigate={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
      />
    </Layout>
  );
}
