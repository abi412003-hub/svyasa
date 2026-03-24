import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const yearSections = [
  {
    year: "The Year 2022",
    publications: [
      `Kukade, A. S., Mathad, M. D., & Sasidharan, R. (2022). Sleep Quality, Wellbeing and Happiness in Medical Undergraduates in Western India. National Journal of Community Medicine, 13(05), 298-303.`,
    ],
  },
  {
    year: "The Year 2021",
    publications: [
      `Tl, A. M., Omkar, S. N., Sharma, M. K., Choukse, A., & Nagendra, H. R. (2021). Development and validation of Yoga Module for Anger Management in adolescents. Complementary Therapies in Medicine, 61, 102772.`,
      `Sinha, A., Kumari, S., & Ganguly, M. (2021). Development, validation, and feasibility of a school-based short duration integrated classroom yoga module: A pilot study design. Journal of Education and Health Promotion, 10(1), 148.`,
      `Swamy, H. D., Nagarajan, K., & Babu, N. (2021). Yogic principles of artha and dāna with reference to individual and corporate social responsibility. International Journal of Yoga, 14(3), 248.`,
      `Sinha, A., & Kumari, S. (2021). Integrating yoga with education in the modern schooling system: A theoretical model based on ancient knowledge and modern research. Yoga Mimamsa, 53(1), 46.`,
      `Sreekumar, T. S., Nagendra, H. R., & Ilavarasu, J. V. (2021). Effect of yoga intervention on mindfulness, perceived stress, emotion regulation and affect: a study on senior managers in an Indian multinational corporate. International Journal of Indian Culture and Business Management, 22(1), 37-52`,
    ],
  },
  {
    year: "The Year 2020",
    publications: [
      `Vasu, J. (2020). Effect of SMET yoga program on Positive and Negative Affectivity of employees; a randomised controlled study. Indian Institute of Science.`,
      `Vasu, J., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2020). Effect of SMET yoga program on Positive and Negative Affectivity of employees; a randomised controlled study. JAC, ISSN: 0731-6755, Volume XIII, Issue III.`,
      `Vasu, J., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2020). SMET as a tool to combat Stress and to enhance the persona of an individual; a Review. JAC, ISSN: 0731-6755, Volume XIII, Issue VII.`,
      `Vasu, J., S., Kumari, Akhilesh (2020). Effect of SMET yoga program on Organisational Citizenship Behaviour and Occupational Stress of employees; a randomised controlled study. Adalya Journal, 9 (3), 398–430.`,
      `Vasu, J., S., Kumari, Akhilesh (2020). Effect of SMET yoga program on Positive and Negative Affectivity of employees; a randomised controlled study. A Journal of Composition Theory, 13 (3), 203–223.`,
    ],
  },
  {
    year: "The Year 2019",
    publications: [
      `Deepak, B.V., Dr. Sony Kumari. (2019). Influence of Karma yoga on Job Involvement among Business Development professionals. JAC: Journal of Composition Theory, 12(12), 364–375.`,
      `Deepak, B.V., Dr. Sony Kumari. (2019). Influence of Karma yoga on Job Satisfaction among Business Development professionals. Think India Journal, 22(14), 6611–6629.`,
      `Deepak, B.V., Dr. Sony Kumari. (2019). Impact on Absenteeism on Employees Satisfaction. Adalya Journal, 8(11), 742–751.`,
      `Tripathi, M. N., Kumari, S. (2019). Effect of Yoga Practices on Academic Performance Among College Students – Randomized Controlled Trial Study. Think India Journal, 22(14), ISSN: 0971-1260.`,
      `Tripathi, M. N., Kumari, S. (2019). Effect of Yoga Practices on Psychological Wellbeing among College Students. Adalya Journal, 8(10), ISSN NO: 1301-2746.`,
      `Tripathi, M., S., Kumari (2019). Effect of Yoga Practices on Academic Performance Among College Students – Randomized Controlled Trial Study. Think India Journal, 22(15), 817–823.`,
      `Deepak, V., & Kumari, S. (2019). Influence of Karma Yoga on Job Involvement Among Business Development Professionals. A Journal of Composition Theory, 12(12), 364–376.`,
      `Deepak, V., & Kumari, S. (2019). Influence of Karma Yoga on Job Satisfaction Among Business Development Professionals. Think India Journal, 22(14), 6611–6630.`,
      `Deepak, V., & Kumari, S. (2019). Impact of Absenteeism on Employees' Satisfaction. Adalya Journal, 8(11), 742–751.`,
      `Tripathi, M., & Kumari, S. (2019). Effect of Yoga Practices on Psychological Wellbeing among College Students. Adalya Journal, 8(10), 1349–1366.`,
      `Tripathi, M. N., Kumari, S., & Tikhe, S. G. (2019). Yoga for Stress Management in Environmental Health Engineering Students. OA Journal-Life (Transferred), 1(1).`,
    ],
  },
  {
    year: "The Year 2018",
    publications: [
      `Tripathi, M. N., Kumari, S., & Ganpat, T. S. (2018). Psychophysiological effects of yoga on stress in college students. Journal of Education and Health Promotion, 7.`,
      `Mohan, R., & Kumari, S. (2018). Effect of yoga on Positive–Negative Affect and Self-Esteem on Tribal Male Adolescents – A Randomized Control Study. Indian Journal of Social Psychiatry, 34(1), 48.`,
      `Kuloor, A., Kumari, S., & Metri, K. (2018). Impact of yoga on psychopathologies and quality of life in persons with HIV: A randomized controlled study. Journal of Bodywork and Movement Therapies, 23(2), 278–283.`,
    ],
  },
  {
    year: "The Year 2017",
    publications: [
      `Taware, D. S., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2017). Conceptual Exploration of Leadership Phenomenon through 'Vedanta Model of Leadership'. Purushartha – A Journal of Management, Ethics and Spirituality, 9(2), 91–101.`,
      `Taware, D. S., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2017). Impact of Integrated Yoga Module (IYM) on Decision-Making Style of Managers – Randomised Controlled Trial Study. Siddhant – A Journal of Decision Making, 17(1), 25–36.`,
      `Taware, D. S., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2017). Impact of Integrated Yoga Module on Leadership Competencies of Managers. Prabandhan: Indian Journal of Management, 10(7), 7–23.`,
    ],
  },
  {
    year: "The Year 2016",
    publications: [
      `Dwivedi, U., Kumari, S., & Nagendra, H. R. (2016). Effect of yoga practices in reducing counterproductive work behavior and its predictors. Indian journal of psychiatry, 58(2), 216.`,
      `Supritha, Sony kumari. Effect of one month residential yoga training program on measuring the quality of sleep and mindfulness in healthy volunteers. Journal of Multidisciplinary Scientific Research, 2016,4(2):24-27`,
      `Dwivedi, U., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2015). Well-being at the workplace through mindfulness: Influence of Yoga practice on positive affect and aggression. Ayu, 36(4), 375.`,
      `Shirsat, R., & Kumari, S. (2016). Effect of Yoga Practice on Acceptance And Mindfulness On Adolescence: A Randomized Control Study. Voice of Research. 4(4):31-32.`,
      `Sunil, P., & Kumari, S. (2016). Effect of yoga module on low back pain in information technology professionals. International Journal of Educational and Psychological Researches, 2(4), 234.`,
      `Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2015). GunaTraya model: an effective model for total quality of mind and organisational development. Purushartha-A Journal of Management, Ethics and Spirituality, 8(2), 71-77.`,
      `Kukade, A. S., Ganpat, T. S., & Nagendra, H. R. (2016). Stress management in medical students: A yogic therapy approach. International Journal of Educational and Psychological Researches, 2(1), 65.`,
      `Dwivedi, U., Kumari, S., & Nagendra, H. R. (2016). Yoga and its impact on counterproductive work behavior. Medical Journal of Dr. DY Patil University, 9(1), 55.`,
    ],
  },
  {
    year: "The Year 2015",
    publications: [
      `Akhilesh, C. S. K. K., & Nagendra, H. R. (2015). Effect of yoga on conscientiousness and performance of employees: An action research study. Innovative Journal of Business and Management, 4(03), 45-51.`,
      `Reddy, G. K., & Kumari, S. (2015). Effect of short term yoga practices on cognitive function and attitude towards violence in school children-A randomized control study. Voice of Research, 3(4), 14-16.`,
      `Chokkalingam, P. S., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2015). An Empirical Study to Improve Performance Oriented Personality Dimensions through Yoga Intervention. Siddhant-A Journal of Decision Making, 15(3), 236-242.`,
      `Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2015). Effect of Integrated Yoga on Agreeableness and Performance of Employees (No. 2015-06-13).`,
      `Srinivas, P., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2015). A quantitative study on Indian IT professionals to validate the integrated model of Job stress. International Journal of Education and Psychological Research, 4(4):26-30.`,
      `Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2015). Effect of integrated yoga on emotional stability and performance of employees: An action research study. Prabandhan: Indian Journal of Management, 8(8), 7-17.`,
      `Chokkalingam, P. S., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2015). An action research study on the effect of Integrated Yoga on personality and performance of employees with reference to Openness to experience. International Journal of Education and Psychological Research, 4(3), 37-40.`,
      `Srinivas, P., & Kumari, S. (2015). A Study on effect of Yoga based practices on Job anxiety in Information technology professionals. Journal of Human Resource Reflection, 2(4):1-9.`,
      `Srinivas, P., & Kumari, S. (2015). Effect of Cyclic Meditation on Job Related Stress in IT Professionals. Voice of Research, 4(1): 46-48.`,
      `Srinivas, P. S., Kumari, S., Akhilesh, K. B., & Nagendra, H. R. (2015). Is job anxiety and perceived stress modifiable in Indian IT professionals? An experimental study using yoga-based intervention. Journal of Health Research and Reviews, 2(3), 81-85.`,
      `Kumari, S., & Ghosh, S. (2015). Effect of cyclic meditation on quality of life and perceived stress in female adolescence. International Journal of Educational and Psychological Researches, 1(3), 238-240.`,
    ],
  },
  {
    year: "The Year 2014",
    publications: [
      `Rabindra, M. A., Pradhan, B., & Nagendra, H. R. (2014). Effect of short-term yoga based stress management program on mood states of managers. International Journal of Education and Management Studies, 4(2), 150.`,
      `Rabindra, M. A., Pradhan, B., & Nagendra, H. R. (2014). Effect of SMET of emotions and self-esteem - A study of managers in a large PSU in India. Journal of Management Research, 6(1), 1-16.`,
      `Maharana, P., Srinivasan, T. M., & Nagendra, H. R. (2014). Spiritual leadership: A new insight for the corporate world. International Journal of Science and Research, 3(7), 992-1001.`,
      `Maharana, P., Patra, S., Srinivasan, T. M., & Nagendra, H. R. (2014). Role of yoga based stress management program towards leadership development in managers. IOSR Journal of Business and Management, 16(5), 01-05.`,
      `Maharana, P., Patra, S., Srinivasan, T. M., & Nagendra, H. R. (2014). General health of mid-career leaders: An objective and subjective observation through yoga. International Journal of Education and Management Studies, 4(3), 187.`,
      `Nandi, P., & Kumari, S. (2014). Effect of Integrated Yoga Module on Perceptibility of Stress and Emotional Competence Based on Coping Strategies on Diabetes Mellitus Patients. Voice of Research, 4.`,
    ],
  },
  {
    year: "The Year 2013",
    publications: [
      `Ilavarasu, J. V., Mohan, S., & Hankey, A. (2013). Triguna as personality concept: Guidelines for empirical research. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 1(1), 15.`,
      `Ilavarasu, J. V., Rajesh, S. K., & Hankey, A. (2013). Influence of language on implicit association test scores in Indian population. Asian Journal of Multidimensional Research, 2(9), 43-52.`,
      `Kumari, S., Hankey, A., & Nagendra, H. R. (2013). Health Advantages of Yoga Programs in Management. International Forum of Researchers Students and Academician Business Review, 3(1), 15-20.`,
      `Kumari, S., Hankey, A., & Dey, B. (2013). Listening to bhajans improves sustained attention. Voice of Research, 2(2), 26-30.`,
      `Kumari, S., Hankey, A., & Nagendra, H. R. (2013). Effect of SMET on Emotional Dynamics of Managers. Voice of Research, 2(1), 49-52.`,
      `Kumari, S., Hankey, A., & Nagendra, H. R. (2013). Integrated Approach of Yoga Therapy: Its power to improve cognitive skills and emotional competence. International Forum of Researchers Students and Academician Business Review, 3(2), 118-122.`,
      `Kumari, S., & Chaudhary, S. (2013). Efficacy of yoga in executive stress. Primax International Journal of Commerce and Management, 96-110.`,
      `Singh, S., Pradhan, B., & Nagendra, H. R. (2013). Effect of SMET program based lifestyle on state anxiety on managers. Indian Journal of Public Administration, 9(2), 1-10.`,
      `Srinivas, P. S., Akhilesh, K. B., & Kumari, S. (2013). Can The Cyclic Meditation Intervention Help To Manage Job Stress Effectively? A Qualitative Study on Indian Information Technology Professionals. International Journal of Science and Research, 4(1), 2518-2521.`,
      `Ganpat, T. S., Selvi, V., & Nagendra, H. R. (2013). Efficacy of yoga for mental performance in university students. Indian Journal of Psychiatry, 55(4), 349-352.`,
    ],
  },
  {
    year: "The Year 2012",
    publications: [
      `Ganpat, T. S., Nagendra, H. R., & Neeraj T. (2012). Ancient science of yogic life for academic excellence in university students. Ancient Science of Life, 31(3), 80-83.`,
      `Shatrughan, S., & Nagendra, H. R. (2012). Effect of SMET Programme based lifestyle on cancellation task, on managers. Space, 3(3).`,
    ],
  },
  {
    year: "The Year 2011",
    publications: [
      `Ganpat, T. S., and Nagendra, H. R. (2011). Effects of yoga on brain wave coherence in executives. Indian Journal of Physiology and Pharmacology, 55(4), 8-12.`,
      `Ganpat, T. S., and Nagendra, H. R. (2011). Integrated yoga therapy for improving mental health in managers. Industrial Psychiatry Journal, 20(1), 45-48.`,
      `Ganpat, T. S., and Nagendra, H. R. (2011). Yoga for Children. TANG International Journal of Genuine Traditional Medicine, 1(1), 1-4.`,
      `Ganpat, T. S., and Nagendra, H. R. (2011). Yoga therapy for developing emotional intelligence in mid-life managers. Journal of Mid-Life Health, 2(1), 28-30.`,
    ],
  },
  {
    year: "The Year 2010",
    publications: [
      `Adhia, H., Nagendra, H. R., & Mahadevan, B. (2010). Impact of Adoption of Yoga Way of Life on the Emotional Intelligence of Managers. IIMB Management Review, 22(1–2), 32–41.`,
      `Adhia, H., Nagendra, H. R., & Mahadevan, B. (2010). Impact of Adoption of Yoga Way of Life on the Reduction of Job Burnout of Managers. Vikalpa, IIMA Journal, 35(2), 21–33.`,
      `Adhia, H., Nagendra, H. R., & Mahadevan, B. (2010). Impact of Yoga Way of Life on Organizational Performance. International Journal of Yoga, 3(2), 55–66.`,
    ],
  },
];

export default function DivisionYogaManagement() {
  return (
    <Layout>
      <ResearchSubNav />

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
          <span className="text-white/40">Division of Yoga and Management</span>
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
            Division of Yoga and Management
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
              Division of Yoga and Management
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
