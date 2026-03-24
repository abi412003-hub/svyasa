import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const yearSections = [
  {
    year: "The Year 2022",
    publications: [
      `Venkata Subbaiah Bathula, & Sridhar, M. K., (2022). योगदर्शने ईश्वरप्रणिधानोपायेषु र्शरुद्रीयस्य प्रास्तयशम्. Journal of Veda Samskrita Academy., Volume-18: ISSN 2250-1711.`,
      `Venkata Subbaiah Bathula, & Sridhar, M. K., (2022). महेश्वरिूत्रेषु पार्ञ्जलदर्शनम्. Journal of Veda Samskrita Academy, Volume-20, ISSN 2250-1711`,
      `Suchitra S Patil, Amit Singh, Nagarathna R.(2022) Concept of tridoṣa as Vedic gods in atharvaveda. Int J Sanskrit Res 8(4):102-108.`,
      `Utpala, K, (2022). A study of Muthuswami Dikshitar's expertise on Veena reflected in his compositions: conceptual study. Sangeet Galaxy, 2 (1), 83-88.`,
    ],
  },
  {
    year: "The Year 2021",
    publications: [
      `Utpala, K., & Rangan, R. (2021). A study of Muthuswami Dikshitar's expertise on various elements of musicology reflected through his compositions: conceptual study. Shodhkosh: Journal of Visual and Performing Arts, 2(2), 83–92.`,
      `Sridhar, M. K., & Nagendra, H. R. (2021). Consciousness in Indian philosophy and modern physics. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 9(2), 53.`,
      `Soneji, R., & Hankey, A. (2021). Siddhi: Modern science and Indian spirituality. Vaidika Vag Jyotih, 19(16), 161–171.`,
      `Soneji, R., Sridhar, M. K., & Hankey, A. (2021). Spiritual–scientific yoga-based model of siddhi. Shodh Sanchar Bulletin, 11(41), 243–247.`,
      `Soneji, R., Hankey, A., & Sridhar, M. K. (2021). Development of Siddhi: An analysis of Shiva Samhita. Shodh Sarita, 8(29), 104–109.`,
      `Soneji, R., & Hankey, A. (2021). Siddhi as expounded in Patanjali Yoga Sutra. International Journal of Yoga & Allied Sciences, 10(1), 81–84.`,
      `Nagendra, H. R. (2021). Prana: The functional basis of life. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 9(1), 1.`,
    ],
  },
  {
    year: "The Year 2020",
    publications: [
      `Neeraj, Kumar, I. R., Krishna, D., & Mangesh, P. (2020). Study of Biochemical and Anthropometric Variables among Pancagavya and Non-Pancagavya Diet Population: A Cross-Sectional Comparative Study. Global Journal of Medical Research, 20(13). ISSN: 2249-4618.`,
      `Kumar, I. R., & Neeraj. (2020). Study of Spiritual Well-Being Among Pancagavya and Non-Pancagavya Diet Population. International Journal of AYUSH, 9(4), 165-176.`,
      `Krishnappa, D. T., Sridhar, M. K., & Nagendra, H. R. (2020). Concept of mind in Indian philosophy, Western philosophy, and psychology. Yoga Mimamsa, 52(1), 25.`,
      `Kadambini Acharya, Patra, S., Pradhan, B., & Kalyan Maity. (2020). Autonomic and Respiratory Changes Following Various Styles of Mantra Chanting. Journal of Quality Health Research, 2(3).`,
      `Kadambini, A., Ananta, G., K., B., Kalyan M., Patra, S., & Pradhan, B. (2020). Impact of Different Styles of Mantra Chanting on Healthy Individuals Based on Cognitive Task. Indian Journal of Psychology, 3(2).`,
      `Sridhar, M. K. (2020). Significance of Number Sixteen in Indic Tradition. International Journal of Sanskrit Research, 6(4), 61-66.`,
      `Karisetty, R. H., Shivanna, S., Pradhan, B., Srinivasan, T. M., & Bhat, R. G. (2020). A comparative study between Vedic and contemporary education systems using bio-energy markers. International Journal of Yoga, 13(2), 152.`,
    ],
  },
  {
    year: "The Year 2019",
    publications: [
      `Durga T. K., Melukote K. Sridhar. (Feb 2019). Anveshana Research Experiments done on Dharana and Dhyana at SVYASA University. International Journal of Research and Analytical Reviews, E-ISSN 2348-1269, P-ISSN 2349-5138.`,
      `Kadambini, A., Pradhan, B., Patra, S., & Rawat, V. (2019). A Comparative Study on Different Japa Techniques on Heart Rate Variability Spectrum. International Journal of Yoga, 12(Suppl 1), S1–S28.`,
      `Karisetty, R. H., & Tiwari, S. (2019). Effect of yoga on mindfulness in school going adolescents: A comparative study. Yoga Mimamsa, 51(1), 31.`,
      `Karisetty, R. H., & Bhat, R. G. (2019). A practical approach for total well-being based on ancient yogic knowledge. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 7(2), 34.`,
      `Suresh, N., Sridhar, M. K., Nagendra, H. R., & Nagendra, K. M. (2018). Holistic Model of Personality Based on the Six Schools (Darshanas) of Hindu Philosophy and Western Personality Concept. International Journal of Creative Research Thoughts, 6(2), 2320-2882.`,
      `Suresh, N., Sridhar, M. K., Nagendra, H. R. (2018). Modelling of the Relationship between Attitude and Behaviour as Basis of Personality Using Samkhya Philosophy. Litera Global Journal of Social Science, ISSN NO 2414-8881.`,
      `N. Suresh, Dr. M.K. Sridhar, Dr. Nagendra, H. R. (2018). Effect of Yoga on Trigunas - An Empirical Study. International Research Journal of Management Sociology & Humanity (IRJMSH), Vol 9 Issue 9, ISSN 2277–9809.`,
      `Maurya, S., Divya, B. R., Sridhar, M. K., Rajesh, H. K., & Nagendra, H. R. (2018). Subtler aspect of bio-energy on acupuncture meridian. Journal of Ayurvedic and Herbal Medicine, 4(4), 165-170.`,
    ],
  },
  {
    year: "The Year 2018",
    publications: [
      `Durga T K, Melukote K Sridhar, Turiya State in the Mandukya Upanishad (2018), Yoga Sudha, Vol XXIV, No. 5, pp.12-15.`,
      `Durga T K, Melukote K Sridhar, Consciousness in Upanishads, International Journal of Sanskrit Research, (Sept. 2018), Vol 4, Issue 5, Part B, IISN 2394-7519`,
    ],
  },
  {
    year: "The Year 2016",
    publications: [
      `Park, J. S., Rajesh, S. K., Ilavarasu, J. V., & Bhat, R. G. (2016). Development of implicit measure for virtue based on ancient Indian scripture: Issues and challenges. Indian Journal of Health and Wellbeing, 7(2), 212.`,
      `Prasad, D. B. R., Hongasandra, N. R., & Ram, A. (2016). Investigation of random event generator changes in Agnistoma Somayagam rituals: An exploratory study. Journal of Health Research and Reviews, 3(1), 15.`,
      `Divya, B. R., Nagendra, H. R., & Ram, A. (2015). Effect of Consciousness Fields on Random Events at Public Gatherings: An Exploratory Study. International Journal of Preventive and Public Health Sciences, 1(5), 26-31.`,
      `Divya, B. R., & Nagendra, H. R. (2016). Scientific Study of Soma and Its Use in Rituals of Somayagna: A Review. International Journal of Scientific Study Case Reports and Reviews, 2(8), 38-43.`,
      `Prasad, D. B. R., Nagendra, H. R., & Ram, A. (2016). Investigation of random event generator changes in Agnistoma Somayagam rituals: An exploratory study. Journal of Health Research and Reviews, 3(1), 15.`,
    ],
  },
  {
    year: "The Year 2015",
    publications: [
      `Madhura, S., & Subramanya, P. (2015). Concept of contentment in various literatures. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 3(1), 14.`,
      `Sushrutha, S., Madappa, K., & Nagendra, H. R. (2015). Effect of bhaishajya maha yajna on human energy field and environment. International Journal of Innovative Research in Science & Engineering. ISSN (Online), 2347-3207.`,
    ],
  },
  {
    year: "The Year 2014",
    publications: [
      `Sushrutha, S., Hegde, M., Nagendra, H. R., & Srinivasan, T. M. (2014). Comparative study of Influence of Yajña and Yogāsana on stress level as Measured by Electron Photonic Imaging (EPI) Technique. Int J Sci Res, 3(8), 1402-6.`,
      `Meenakshy, K. B., S. Sushrutha, A. Hankey, and H. R. Nagendra. "Vedic yajña performance reduces qi imbalances." Res React Resolut 2, no. 8 (2014): 16-24.`,
      `Sushrutha, S., Nagendra, H., & Bhat, R. G. (2014). The significance of fire offering in hindu society. International journal of multidisciplinary educational research, 3(7), 3.`,
    ],
  },
  {
    year: "The Year 2013",
    publications: [
      `Srinivasan, T. M. (2013). From meditation to dhyana. International Journal of Yoga, 6(1):1-3.`,
      `Karisetty, R. H., & Bhat, R. G. (2013). Unearthing the upanishadic roots for "The Song of Sanyasin" of Swami Vivekananda. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 1(1), 53.`,
    ],
  },
  {
    year: "The Year 2012",
    publications: [
      `Ganpat, T. S., Dash, S., & Nagendra, H. R. (2012). Yoga therapy for promoting emotional sensitivity in university students. Journal of Education and Health Promotion, 5 (3):45.`,
    ],
  },
  {
    year: "The Year 2010",
    publications: [
      `Kumar, S., Nagendra, H. R., Manjunath, N. K., Naveen, K. V., & Telles, S. (2010). Meditation on OM: Relevance from ancient texts and contemporary science. International Journal of Yoga, 3(1), 2.`,
    ],
  },
];

export default function DivisionYogaSpirituality() {
  return (
    <Layout>
      <ResearchSubNav />

      <section className="relative h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden bg-[hsl(var(--navy))]">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(var(--navy))]/90 to-[hsl(var(--teal))]/40" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-['Playfair_Display',serif] text-3xl md:text-5xl text-white font-bold mb-3"
          >
            Division of Yoga and Spirituality
          </motion.h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/research" className="hover:text-white transition-colors">Research</Link>
            <span>/</span>
            <Link to="/research/publications" className="hover:text-white transition-colors">Research Repository</Link>
            <span>/</span>
            <span className="text-[hsl(var(--saffron))]">Division of Yoga and Spirituality</span>
          </nav>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 animate-bounce"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-[140px]">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--teal))] mb-4">
                Research Section
              </h3>
              <nav className="space-y-1">
                {[
                  { label: "About Research at S-VYASA", to: "/research" },
                  { label: "Research Facility", to: "/research/facility" },
                  { label: "Research Faculty", to: "/research/faculty" },
                  { label: "Ongoing Projects", to: "/research/ongoing-projects" },
                  { label: "Completed Projects", to: "/research/completed-projects" },
                  { label: "Adopt a Research Project", to: "/research/adopt-project" },
                  { label: "Research Publications", to: "/research/publications" },
                  { label: "Lab Events", to: "/research/lab-events" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm py-2 px-3 rounded-lg text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--cream))] hover:text-[hsl(var(--navy))] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold mb-10">
              Division of Yoga and Spirituality
            </h2>

            <div className="space-y-12">
              {yearSections.map((section) => (
                <section key={section.year}>
                  <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-5 pb-2 border-b-2 border-[hsl(var(--saffron))]/30">
                    {section.year}
                  </h3>
                  <ul className="space-y-3 list-disc list-outside pl-5">
                    {section.publications.map((pub, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-[hsl(var(--foreground))] leading-relaxed"
                      >
                        {pub}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
