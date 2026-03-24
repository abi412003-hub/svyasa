import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const yearSections = [
  {
    year: "The Year 2024",
    publications: [
      `Pandey, M., Keshav, R., & Behera, N. (2024). Improving Academic Standard of Low-Performing Adolescents: A Delphi Study. MIER Journal of Educational Studies Trends and Practices, 315-343.`,
      `Mangesh P., Dwivedi K., Narayan B. (2024). The Impact of Parenting Styles and Socio-economic Status on Adolescents' Academic Performance and Behavioral Outcomes. African Journal of Biological Sciences, 6(14):2663-2187.`,
      `Pandey, M., Dwivedi, K., & Behera, N. (2024). Effectiveness of Yoga and Physical Exercises on Emotional and Behavioral Problems and Academic Performance Among Indian Adolescents: A Randomized Trial. Journal of Emotional and Behavioral Disorders, 10634266241301371.`,
      `Ramsahaye, A. Y., Bharathi, B., Sasidharan, K. R., Rawat, V., Thulasi, A., Kumar, V., ... & Zaeem, S. H. (2023). Development, validation, and feasibility testing of a yoga module for substance use disorder. Yoga Mimamsa, 55(1), 25-34.`,
    ],
  },
  {
    year: "The Year 2023",
    publications: [
      `Mahmud, M., Bekele, M., & Behera, N. (2023). A computational investigation of cis-gene regulation in evolution. Theory in Biosciences, 1-15.`,
    ],
  },
  {
    year: "The Year 2022",
    publications: [
      `KUMAR, C., Gautam, A. K., Kushwaha, D. K., & Choudhary, C. (2022). Removal of Phenylamine Using Advanced Oxidation Process by UV/Peroxy Disulphate from Waste Water.`,
      `Kumar, C., Gautam, A. K., Singh, R., Srivastava, A. K., Behera, N., De, S., ... & Shukla, G. (2022). Removal of Phenylamine Using Advanced Oxidation Process by UV/Peroxy Disulphate from Waste Water. NEUROQUANTOLOGY, 20(10), 6118–6128.`,
      `Behera, N., Sinha, S., Srivastava, A. K., Hairat, S., Neha, N., & Prasanta, P. (2022). Analysis of microarray data by genetic algorithm. International Journal of Health Sciences, 6(S6), 7721–7743. https://doi.org/10.53730/ijhs.v6nS6.11068`,
      `Kuswaha, D. K., Gautam, A. K., Ashok, P., Singh, D., & Behera, N. (2022). Short Communication on Enviro-Bhakti.`,
      `Kuswaha, D. K., Gautam, A. K., Ashok, P., Singh, D., & Behera, N. (2022). Feasibility of Zero Energy Building at Noida, Uttar Pradesh. Forest Chemicals Review, 1344–1350.`,
      `Behera, N., Ashok, P., Singh, M. M., Kumar, M. K., Kumbha, S., Shukla, G., & Saxena, S. (2022). Implementation of the lattice model in the coexistence of species and its potential consequences on environment. Environment International, 6(S5), 1106–1128.`,
      `Rajesh, S. K., & Singh, D. (2022). Development, Content Validation, and Feasibility of Yoga Module for Smartphone Addiction. Advances in Mind-body Medicine, 36(2), 14–22.`,
      `Putchavayala, C. K., Singh, D., & Sashidharan, R. K. (2022). A perspective of yoga on smartphone addiction: A narrative review. Journal of Family Medicine and Primary Care, 11(6), 2284–2291.`,
    ],
  },
  {
    year: "The Year 2021",
    publications: [
      `George, M., & Ilavarasu, J. (2021). Development and Psychometric Validation of the Music Receptivity Scale. Frontiers in Psychology, 11, 3662. Ganguly, M., Mohanty, S., Mishra, S., Patra, S., & Jha, M. (2021).`,
      `Venkatesh, T., Ravikumar, I., & Mani, T. A. (2021). Development of a Yoga Module for Hypothyroidism. Journal of Clinical & Diagnostic Research, 15(4).`,
      `Raghuram, N., Anand, A., Rain, M., Sivapuram, M. S., Kulkarni, R., Ilavarasu, J., ... & Nagendra, H. R. (2021). Yoga practise is beneficial for maintaining a healthy lifestyle and endurance under restrictions and stress imposed by lockdown during COVID-19 pandemic. Frontiers in Psychiatry, 12, 878.`,
      `Rao, M. R., Srinivasan, T. M., Itagi, R. K. (2021). Understanding mind and mindful awareness according to Indian scriptures. International Journal of Yoga – Philosophy, Psychology and Parasychology, 9(1), 8–15.`,
      `Rao, M. R., Itagi, R. K., Srinivasan, T. M. (2021). Impact of yoga in facilitating muscular functioning among asymptomatic male cricketers: Longitudinal randomised controlled study. Journal of Bodywork and Movement Therapies, 27(2021), 287–293.`,
      `Xu, W., Kumar, I. R., & Srinivasan, T. M. (2021). Effects of Yama and Niyama on body energy systems: Evidence from Electro Photonic Imaging – A randomised controlled trial. Indian Journal of Science and Technology, 14(7), 610–617.`,
      `Xu, W., Kumar, I. R., & Srinivasan, T. M. (2021). Evaluation of Impact of Ethics of Yoga in the Psychological Health of College Students: A Randomized Control Trial. Indian Journal of Science and Technology, 14(12), 995–1005.`,
      `Xu, W., Kumar, I. R., & Thaiyar, S. M. (2021). Impact of yama and niyama on psychospiritual factors in young adults: A randomized controlled trial. International Journal of Yoga - Philosophy, Psychology and Parapsychology, 9(1), 32–39.`,
    ],
  },
  {
    year: "The Year 2020",
    publications: [
      `Rao, M. R., Itagi, R. K., Srinivasan, T. M. (2020). Efficacy of Yoga in Facilitating Mindfulness among Male Cricket Players. Indian Journal of Science and Technology, 13(22), 2182–2188.`,
      `Rao, M. R., Srinivasan, T. M., Itagi, R. K. (2020). Epidemiology of annual musculoskeletal injuries among male cricket players in India. Indian Journal of Community Health, 32(3), 590–593.`,
      `Hegde, J. R., Thaiyar, S. M., Melukote, S. K., & Hegganahalli, N. R. (2020). Indian classical dance aesthetics: A possible therapeutic application for caregivers' distress. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 8(2), 41.`,
      `Hegde, J. R., Melukote, S. K., Srinivasan, T. M., & Singh, D. (2020). Indian aesthetic dance and yoga improves mental health among caregivers of children with neurodevelopmental disorders: a randomized trial. International Journal of Community Medicine and Public Health, 7(7), 2532.`,
      `Hegde, J. R., Melukote, S. K., Vijayendra, K., & Singh, D. (2020). A randomized study on the energy difference measured by electro photonic image on caregivers practiced Indian aesthetic dance and yoga. International Journal of Community Medicine and Public Health, 7(7), 2770.`,
      `Sreekumar, T. S., Nagendra, H. R., & Ilavarasu, J. V. (2020). Mindfulness and yoga: A parallel and comparative analysis. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 8(1), 13.`,
      `Ushamohan, B. P., Rajasekaran, A. K., Belur, Y. K., Srinivasan, T. M., & Ilavarasu, J. V. (2020). Bhramari Pranayama as an aid to meditation: A review of classical yoga texts. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 8(2), 58.`,
      `Venugopal, V., Ilavarasu, J. V., & Mooventhan, A. (2020). Prevalence of modifiable risk factors associated with diabetes in Indian adolescents and young adults: A pilot study. Acta Medica International, 7(2), 108.`,
      `Venugopal, V., Maheshkumar, K., & Ilavarasu, J. (2020). Manuscript Clarification: Wooten, SV, Cherup, N, Mazzei, N, Patel, S, Mooney, K, Rafiq, A, and Signorile, JF. Yoga breathing techniques have no impact on isokinetic and isoinertial power. J Strength Cond Res 34 (2): 430–439, 2020. The Journal of Strength & Conditioning Research, 34(9), e270.`,
    ],
  },
  {
    year: "The Year 2019",
    publications: [
      `Sreekumar, T. S., Nagendra, H. R., & Ilavarasu, J. V. (2019). Mediating Role of Mindfulness: Positive Affect and Perceived Stress among Employees. SCMS Journal of Indian Management, 16(4), 75-86.`,
      `Agoramoorthy, G., & Ilavarasu, J. (2019). National-level coordination strategies needed to mitigate the outburst of diabetes. Current Science, 117(9), 1430.`,
      `Hankey, A. (2019, June). Instability physics: Consciousness and collapse of the wave function. In Journal of Physics: Conference Series (Vol. 1251, No. 1, p. 012019). IOP Publishing.`,
      `Shetkar, R. M., Hankey, A., & Nagendra, H. R. (2019). How the Pañcakośa Model of Experience Fits the Understanding of Śūnya and Helps Explain Quantum Reality? In Quantum Reality and Theory of Śūnya, 359-367.`,
      `Mohanty, S., Pradhan, B., & Hankey, A. (2019). Yoga Practices as an Alternative Training for Physical Fitness in Children with Visual Impairment. Adapted Physical Activity Quarterly, 1(aop), 1-16.`,
    ],
  },
  {
    year: "The Year 2018",
    publications: [
      `Vijayakumar, V., Mooventhan, A., & Ilavarasu, J. V. (2018). Guidelines for ayush and non-AYUSH researchers for designing and reporting research studies. Ancient Science of Life, 37(3), 173.`,
      `Shetkar, R. M., Hankey, A., & Nagendra, H. R. (2018). Biophysics of Meditation in the Light of Complexity Biology. J. Indian Counc. Philos. Res.`,
      `Pradhan, B., Mohanty, S., & Hankey, A. (2018). Effect of yogic breathing on accommodate braille version of six-letter cancellation test in students with visual impairment. International Journal of Yoga, 11(2), 111.`,
      `Datey, P., Hankey, A., & Nagendra, H. R. (2018). Combined Ayurveda and Yoga Practices for Newly Diagnosed Type 2 Diabetes Mellitus: A Controlled Trial. Complementary Medicine Research, 25(1), 16-23.`,
      `Shetkar, R. M., Hankey, A., Nagendra, H. R., & Pradhan, B. (2019). Association between cyclic meditation and creative cognition: Optimizing connectivity between the frontal and parietal lobes. International Journal of Yoga, 12(1), 29.`,
      `Gaihre, A., & Rajesh, S. K. (2018). Effect of Add-On Yoga on Cognitive Functions among Substance Abusers in a Residential Therapeutic Center: Randomized Comparative Study. Annals of Neurosciences, 25, 38–45.`,
      `Gaihre, A., & Rajesh, S. K. (2018). Effect of Yoga and Physical Exercise on Motor Functions among Substance Abusers: A Randomised Comparative Study. Journal of Clinical and Diagnostic Research, 12(10), 10–14.`,
      `Gaihre, A., & Rajesh, S. K. (2018). Role of stress and sleep on addictive behaviour an application of yoga-based intervention: Short review. International Journal of Social Sciences Review, 6(7), 1448–1450.`,
      `Kumar, P. V. G., Deshpande, S., & Nagendra, H. R. (2019). Traditional practices and recent advances in NadiPariksha: a comprehensive review. Journal of Ayurveda and Integrative Medicine, 10(4), 308-315.`,
      `Kumar, K. S., Srinivasan, T. M., Ilavarasu, J., Mondal, B., & Nagendra, H. R. (2018). Classification of electrophotonic images of yogic practice of mudra through neural networks. International Journal of Yoga, 11(2):152-156.`,
      `Kumar, I. R., & Soni, P. (2018). Germination of Green Gram with Influence of Pyramid Energy and Lunar Days. International Journal of Emerging Technology and Advanced Engineering, 8(1): 81-87.`,
      `Kumar, I. R., & Mandal, R. K. (2018). Effect of Sriyantra and Lunar Days on the Germination of Fenugreek. Life Sciences Leaflets, 97: 16-23.`,
      `Kumar, I. R., & Karthik, M. (2018). Seed Germination with Influence of Omkara. Life Sciences Leaflets, 103: 04-07.`,
    ],
  },
  {
    year: "The Year 2017",
    publications: [
      `Shetkar, R. M., Hankey, A., Nagendra, H. R., & Pradhan, B. (2019). Association between cyclic meditation and creative cognition: Optimizing connectivity between the frontal and parietal lobes. International Journal of Yoga, 12(1), 29.`,
      `Hankey, A., & Shetkar, R. M. (2017). First person accounts of Yoga meditation yield clues to the Nature of Information in Experience. Cosmos and History: The Journal of Natural and Social Philosophy, 13(1), 240-252.`,
      `Srinivasan, T. M. (2017). Models in medicines. International Journal of Yoga, 10(1), 1.`,
      `Ghosh, K., Hankey, A., & Srinivasan, T. M. (2017). Effect of lotus posture on acupuncture meridian energies: A controlled trial. International Journal of Yoga, 10(2), 88.`,
      `Datey, P., & Hankey, A. (2017). Lowering Creatinine Levels by Herbal Treatment and Yoga: A Pilot Controlled Trial. European Journal of Pharmaceutical and Medical Research, 4(1), 452–456.`,
    ],
  },
  {
    year: "The Year 2016",
    publications: [
      `Hankey, A., & Shetkar, R. (2016). Self-transcending meditation is good for mental health: why this should be the case. International Review of Psychiatry, 28(3): 236-240.`,
      `Shetkar, R. M., Hankey, A., & H. R. Nagendra. (2016). Reason for health benefits of deep meditation: self-organized criticality restores regulation to optimal. European Journal of Pharmaceutical and Medical Research 3 (5):435-441.`,
      `Datey, P., & Hankey, A. (2016). Establishing the Validity of Ahara And Vihara In Ayurveda: Failure to Observe their Principles as Risk Factors for Disease. Annals of Ayurvedic Medicine, 5 (3-4), 69-77.`,
      `Datey, P., Hankey, A., & Nagendra, H. R. (2016). Ayurveda Herb Juices and Yoga for Blood Pressure and Pulse Rate: A Controlled Trial. International Journal of Complementary and Alternative Medicine, 4(3), 00121.`,
      `Jijnasu, V. (2016). The uncertainty principle–A simplified review of the four versions. Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics, 55, 62-71.`,
      `Kumar I. R. (2016). Biological transmutation in germination of seeds. International Journal of Research, 3(14):582-86.`,
      `Deo, G., Kumar, I. R., Srinivasan, T. M., & Kushwah, K. K. (2016). Cumulative effect of short-term and long-term meditation practice in men and women on psychophysiological parameters of electrophotonic imaging: A cross-sectional study. Journal of Complementary and Integrative Medicine, 13(1), 73-82.`,
      `Bhargav, H., Srinivasan, T. M., Bista, S., Mooventhan, A., Suresh, V., Hankey, A., & Nagendra, H. R. (2017). Acute effects of mobile phone radiations on subtle energy levels of teenagers using electrophotonic imaging technique: A randomized controlled study. International Journal of Yoga, 10(1), 16.`,
      `Bhat, R. K., Deo, G., Ramesh, M. N., & Srinivasan, T. M. (2017). Correlation of Electrophotonic Imaging Parameters with Fasting Blood Sugar in Normal, Prediabetic, and Diabetic Study Participants. Journal of Evidence-Based Complementary & Alternative Medicine, 22(3), 441-448.`,
      `Ghosh, K., Hankey, A., & Srinivasan, T. M. (2017). Electrodermal screening of asthmatics with AcuGraph 4. Journal of Acupuncture and Meridian Studies, 10(2), 125-130.`,
      `Kushwah, K. K., Srinivasan, T. M., Nagendra, H. R., & Ilavarasu, J. V. (2016). Effect of yoga-based techniques on stress and health indices using electro photonic imaging technique in managers. Journal of Ayurveda and Integrative Medicine, 7(2), 119-123.`,
      `Ranjita, R., Mohanty, S., Hankey, A., & Nagendra, H. R. (2016). An evidence-based review on ayurvedic management of KaphajaKasa (Chronic Bronchitis). Indian Journal of Health & Wellbeing, 7(1):73.`,
      `Shetkar, R. M., Hankey, A., & Nagendra, H. R. (2016). Reason for health benefits of deep meditation: self-organized criticality restores regulation to optimal. European Journal of Pharmaceutical and Medical Research, 3(5), 435-41.`,
      `Hankey, A., & Shetkar, R. (2016). Self-transcending meditation is good for mental health: why this should be the case. International Review of Psychiatry, 28(3), 236-240.`,
      `Thirthalli, J., Zhou, L., Kumar, K., Gao, J., Vaid, H., Liu, H., & Nichter, M. (2016). Traditional, complementary, and alternative medicine approaches to mental health care and psychological wellbeing in India and China. The Lancet Psychiatry, 3(7), 660-672.`,
      `Jungyun, J., Jeeye, P., & Kumar, I. R. (2016). Seed germination test with the influence of sriyantra, pyramid and mahamrtyunjaya mantra. Indian Journal of Traditional Journal, 15(4):680-84.`,
      `Srinivasan, T. M. (2016). Dynamic and static asana practices. International Journal of Yoga, 9(1), 1.`,
      `Srinivasan, T. M. (2016). From Yama to Samyama. International journal of yoga, 9(2), 95.`,
      `Kushwah, K. K., Srinivasan, T. M., Nagendra, H. R., & Ilavarasu, J. V. (2016). Development of normative data of electro photonic imaging technique for healthy population in India: A normative study. International journal of yoga, 9(1), 49.`,
    ],
  },
  {
    year: "The Year 2015",
    publications: [
      `Kushwah, K. K., Nagendra, H. R., & Srinivasan, T. M. (2015). Effect of integrated yoga program on energy outcomes as a measure of preventive health care in healthy people. Central European Journal of Sport Sciences and Medicine, 12(4), 61-71.`,
      `Mohanty, S., Murty, P. V. R., Pradhan, B., & Hankey, A. (2015). Yoga practice increases minimum muscular fitness in children with visual impairment. Journal of Caring Sciences, 4(4), 253.`,
      `Deo, G., Kumar, I. R., Srinivasan, T. M., & Kushwah, K. K. (2015). Changes in electrophotonic imaging parameters associated with long term meditators and naive meditators in older adults practicing meditation. European Journal of Integrative Medicine, 7(6), 663-668.`,
      `Deo, G., Kumar I. R., Srinivasan T. M., & Kuldeep, K. K. (2015). Effect of anapanasati meditation technique through electrophotonic imaging parameters: A pilot study. International Journal of Yoga, 8(2), 117.`,
      `Srinivasan, T. M. (2015). Entrainment and coherence in biology. International Journal of Yoga, 8(1), 1.`,
      `Srinivasan, T. M. (2015). Healing altered states of consciousness. International Journal of Yoga, 8(2), 87.`,
    ],
  },
  {
    year: "The Year 2014",
    publications: [
      `Meenakshy, K. B., Hankey, A., & Nagendra, H. R. (2014). Electrodermal assessment of SMET program for business executives. Voice Research, 2, 61-5.`,
      `Meenakshy, K.B., Hankey, A., and Nagendra, H. R. (2014). Depression in Traditional Chinese Medicine: high variances in electrodermal conductances at Jing-Well meridian endpoints. Journal of Traditional Medical Science. Voice. Of Research, 2(4): 61-65.`,
      `Rao, R., Reukaprasad, C., & Haney, A. (2014). The effect of solar eclipse on BT viral growth—An experimental study. International Journal of Conceptions on Computing and Information Technology, 2, 2345-8.`,
      `Sharma, B., Hankey, A., & Nagendra, H. R. (2014). Gas discharge visualization characteristics of an Indian diabetes population. Voice of Research, 2(4), 28-33.`,
      `Sharma, B., Hankey, A., Nagendra, H. R., & Meenakshy, K. B. (2014). Inter-operator variability of electrodermal measure at Jing Well points using AcuGraph 3. Journal of Acupuncture and Meridian Studies, 7(1), 44-51.`,
      `Sharma, B., Hankey, A., Nagilla, N., Meenakshy, K. B., & Nagendra, H. R. (2014). Can yoga practices benefit health by improving organism regulation? Evidence from electrodermal measures of acupuncture meridians. International Journal of Yoga, 7(1), 32.`,
      `Srinivasan, T. M. (2014). Prana and electrons in health and beyond. International Journal of Yoga, 7(1), 1.`,
      `Shetkar, R. M., & Hankey, A. (2014). Optimizing emotional intelligence in management education: a role for Vedic sciences. Nitte Management Review, 8(2), 32-36.`,
    ],
  },
  {
    year: "The Year 2013",
    publications: [
      `Hankey, A. (2013). Science meets astrology. Light on Ayurveda Journal, 11, 14-16.`,
      `Hankey, A., & Rao, R. N. (2013). A New Kind of Biologically Active Orientation-Sensitive Field-Coupling to Complexity-Based Biological Regulatory Systems? Complementary Medicine Research, 20(5), 316-319.`,
      `Meenakshy, K. B., Sharma, B., Hankey, A., & Nagendra, H. R. (2013). An electrodermal study comparing HIV infected children with non-infected children. Res React Resolut, 1, 4-8.`,
      `Nagilla, N., Hankey, A., & Nagendra, H. R. (2013). Effects of yoga practice on acumeridian energies: Variance reduction implies benefits for regulation. International Journal of Yoga, 6(1), 61.`,
      `Rao, R. N., Renukaprasad, C., & Sharma, S. (2013). Starting time dependence of yield in production of raniket virus vaccine: Natural variations in rates of microbial processes may have astrological explanations. Light Ayurveda Journal, 11, 52-8.`,
      `Rao, R. N., Renukaprasad, C., Gajendragad, M., & Byregowda, S. M. (2013). Astromedicine: A summary of eight experiments. Light Ayurveda Journal, 11, 42-7.`,
      `Srinivasan, T. M. (2013). Bridging the mind-body divide. International Journal of Yoga, 6(2), 85.`,
      `Rao, R. N., Hankey, A., Nagendra, H. R., & Nagarathna, R. (2013). Kāla and Mahakāla: Time and the timeless in the Vedic literature. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 1(1), 40.`,
    ],
  },
  {
    year: "The Year 2012",
    publications: [
      `Hankey, A. (2012). A prophet lays down his pen. Journal of Alternative and Complementary Medicine, 18(2):103-5.`,
      `Srinivasan, T. M. (2012). Is yoga an intervention? International Journal of Yoga, 5(1):1-2.`,
      `Srinivasan, T. M. (2012). Models and mechanisms in yoga research. International Journal of Yoga, 5(2):83-84.`,
      `Hankey, A. (2012). The ontological status of western science and Medicine. Journal of Ayurveda and Integrative Medicine, 3(3):119-23.`,
    ],
  },
  {
    year: "The Year 2011",
    publications: [
      `Srinivasan, T. M. (2011). Genetics, epigenetics, and pregenetics. International Journal of Yoga, 4(2):47-48.`,
      `Srinivasan, T. M. (2011). Models in complimentary medicine. International Journal of Yoga, 4(1):1-2.`,
      `Kumar, I. R., and Nagendra, H. R. (2011). Effect of Pyramids and their Materials on Emergence and Growth of Fenugreek. Research Journal of Agricultural Sciences, 2(3): 629-631.`,
      `Kumar, I. R., and Nagendra, H. R. (2011). Pyramids and their shapes effect. Journal of Arts, Science & Commerce, 2(2):195-201.`,
    ],
  },
  {
    year: "The Year 2010",
    publications: [
      `Facchi, P., Kulkarni, R., Man'ko, V. I., Marmo, G., Sudarshan, E. C. G., & Ventriglia, F. (2010). Classical and quantum Fisher information in the geometrical formulation of quantum mechanics. Physics Letters A, 374(48), 4801-4803.`,
      `Thakur, G. S., & Nagendra, H. R. (2010). A Effect of Cyclic Meditation on Consciousness Field as Measured by REG. Journal of Scientific Speculations and Research, 1(2): 16-27.`,
      `Kumar, I. R., Swamy, N. V. C., Nagendra, H. R., and Radhakrishna (2010). Influence of pyramids on germination and growth of fenugreek. Indian Journal of Traditional Knowledge, 9(2): 347-349.`,
    ],
  },
];

export default function DivisionYogaPhysicalSciences() {
  return (
    <Layout>
      <ResearchSubNav />

      {/* Hero Banner */}
      <section
        className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[38vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 50%, hsl(180 45% 25%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-white/60 text-xs z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/research" className="hover:text-white transition-colors">Research</Link>
          <span>/</span>
          <Link to="/research/publications" className="hover:text-white transition-colors">Research Repository</Link>
          <span>/</span>
          <span className="text-white/40">Division of Yoga and Physical Sciences</span>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[hsl(var(--saffron-light))] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Research Repository
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-['Playfair_Display',serif] text-3xl md:text-5xl text-white font-bold mb-4"
          >
            Division of Yoga and Physical Sciences
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto h-[2px] w-16 bg-[hsl(var(--saffron))]"
          />
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
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

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold mb-10">
              Division of Yoga and Physical Sciences
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
