import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const yearSections = [
  {
    year: "The Year 2025",
    publications: [
      `Padhy, B., & Nagarajan, K. Effectiveness of Indian Raaga-Based Music Therapy (IRMT) Model for Hypertension Management in Working Professionals: A Randomized Controlled TRAIL.`,
      `Padhy, B., & Nagarajan, K. Effectiveness of Indian Raaga-Based Music Therapy (IRMT) Model for Hypertension Management in Working Professionals: A Randomized Controlled TRAIL. Human Development Model based on Yogic Wisdom for Well-being and Self-Actualization: A conceptual framework.`,
    ],
  },
  {
    year: "The Year 2024",
    publications: [
      `Ranisha, K., Kumari, S., & Dwivedi, U. (2024). Human development model based on yogic wisdom for well-being and self-actualization: A conceptual framework. Journal of Human Values, 30(2), 202-213.`,
      `Jain, M. J., Krishna, C. S., & Purohit, S. (2024). Study on Pranic Energization Technique and Similar Model of Energisation.`,
    ],
  },
  {
    year: "The Year 2023",
    publications: [
      `Sharma, S., & Rawat, V. (2023). The Importance of Body Posture in Adolescence and its Relationship with Overall Well-being. Indian Journal of Medical Specialities, 14(4), 197-205.`,
      `Sharma, S., & Rawat, V. (2023). Effect of Yogic practices on body posture and its correlation with physical and mental health in adolescents. Indian Journal of Medical Specialities, 14(4), 216-224.`,
      `Singphow, C., Purohit, S. P., Tekur, P., Bista, S., Panigrahy, S. N., Pradhan, B., & Raghuram, N. (2023). Effect of Yoga and Mindfulness Meditation on Quality of Life in Computer Users with Chronic Low Back Pain: A Prospective Randomized Active Control Trial. Journal of Applied Consciousness Studies, 11(1), 3-11.`,
      `SAhA, A., & PurOhit, S. P. (2023). Effect of Mind Sound Resonance Technique on Selected Psycho-emotional Well-being Parameters in Secondary School Students: A Randomised Controlled Trial. Journal of Clinical & Diagnostic Research, 17(3).`,
    ],
  },
  {
    year: "The Year 2022",
    publications: [
      `Ibohal Singh N., Balaram Pradhan., Niranjan Parajuli., & Achouba Singh Ksh., (2022). Effect of 16-weeks of Yoga on the Quality of Life of Type-2 Diabetes Mellitus patients of mongoloid community. Turkish Online Journal of Qualitative Inquiry (TOJQI), 13(1), 893-902.`,
      `Swamy, H. D., & Agoramoorthy, G. (2022). Enhancing sustainable development goals through yoga-based learning. Journal of Applied Consciousness Studies, 10(1), 8.`,
      `Swamy, H. D., & Agoramoorthy, G. (2022). Evolution of yoga: From spiritual uplift to business outburst. Yoga Mimamsa, 54(1), 36.`,
      `Shanker, S., & Pradhan, B. (2022). Effect of yoga on children with autism spectrum disorder in special schools. Industrial Psychiatry Journal, 31(2), 367.`,
      `Shanker, S., & Pradhan, B. (2022). Effect of Yoga on the Motor Proficiency of Children with Autism Spectrum Disorder and the Feasibility of its Inclusion in Special School Environments. Adapted Physical Activity Quarterly, 39(2), 247-267.`,
      `Shanker, S., & Pradhan, B. (2022). Yoga for children with autism spectrum disorder: A descriptive review. Yoga Mimamsa.`,
      `Wang, Z., Rawat, V., Yu, X., & Panda, R. C. (2022). Bondage and freedom: A comparative study of ancient Indian scriptures and ancient Chinese Taoism Scriptures. Journal of Applied Consciousness Studies, 10(1), 13.`,
      `Zanyi Wang, Vikas Rawat, Xinli Yu, & Ramesh Chandra Panda. (2022). The Philosophical Nature Of "Water": From Upanishads To Early Taoism Scriptures. An Indexed Refereed & Peer-Reviewed Journal of Higher Education, 14, ISSN No. 0974-035X.`,
      `Wang, Z., Rawat, V., Yu, X., & Panda, R. C. (2022). Meditation and its practice in Vedic scriptures and early Taoism scriptures. Yoga Mimamsa, 54(1), 41.`,
      `Chauhan, R., Rajesh, S. K., & Chauhan, S. (2022). Prevalence of Allergic Rhinitis and Its Perceived Effect on Academic Activity Among College Students – A Cross-Sectional Study. National Journal of Community Medicine, 13(4), 219-223.`,
    ],
  },
  {
    year: "The Year 2021",
    publications: [
      `Surpur, C., Ihm, E., Schooler, J., Nagarathna, H. R., & Ilavarasu, J. (2021). Cross-Cultural Study on the Effects of 10 Days of Online Mind Sound Resonance Technique (Msrt) on State Anxiety, Stress, Quality of Sleep, and Mindfulness. ASEAN Journal of Psychiatry, 1-3.`,
      `Ganguly, M., Mohanty, S., Mishra, S., & Patra, S. (2021). Sanskrit Prosody: A Potential Tool To Impact Neuropsychological Variables In Middle School Children Towards Excellence, 13(2).`,
      `Nagarathna, R., Anand, A., Rain, M., Srivastava, V., Sivapuram, M. S., Kulkarni, R., ... & Nagendra, H. R. (2021). Yoga practice is beneficial for maintaining healthy lifestyle and endurance under restrictions and stress imposed by lockdown during COVID-19 pandemic. Frontiers in Psychiatry, 878.`,
      `Gaihre, A., Sasidharan, R. K., Bista, S., Khadka, R., Poudel, L., Bista, S., & Sapkota, V. (2021). Stress and Sleep in Addictive Behavior and Application of Yoga-based Interventions: A Short Narrative Review. One Health Journal of Nepal, 1(1), 1-5.`,
      `Raghuram, N., Anand, A., Mathur, D., Patil, S. S., Singh, A., Rajesh, S. K., ... & Hongasandra, N. (2021). Prospective Study of Different Staple Diets of Diabetic Indian Population. Annals of Neurosciences, 28(3-4), 129-136.`,
      `Ganguly, M., Mohanty, S., Mishra, S., & Patra, S. (2021). Effect of Prosody of Rhythmic Yoga-Based Recitation on Positive and Negative Affect among Adolescents: A Four-Armed Comparative Study. Dev Sanskriti Interdisciplinary International Journal, 17, 13-19.`,
      `Ganguly, M., Mohanty, S., Mishra, S., Patra, S., & Jha, M. (2021). Impact of Sanskrit prosody on anxiety, mindfulness, and self-concept in young adolescents: A four-armed control trial. Yoga Mimamsa, 53(1), 4.`,
      `Sinha, A., & Kumari, S. (2021). Integrating yoga with education in the modern schooling system: A theoretical model based on ancient knowledge and modern research. Yoga Mimamsa, 53(1), 46.`,
      `Sinha, A., Kumari, S., & Ganguly, M. (2021). Development, validation, and feasibility of a school-based short duration integrated classroom yoga module: A pilot study design. Journal of Education and Health Promotion, 10(1), 148.`,
      `Sinha, A., & Kumari, S. (2021). Effect of short duration integrated classroom yoga module on physical, cognitive, emotional and personality measures of school children. Yoga Mimamsa, 53(2), 100.`,
      `Sinha, A. (2021). The problem of ethics in business: Does Vedanta have a solution? In Reimagining Faith and Management (pp. 60-73). Routledge.`,
      `Kumar, S., Anand, A., Nagarathna, R., Kaur, N., Sivapuram, M. S., Pannu, V., ... & Nagendra, H. R. (2021). Prevalence of prediabetes, and diabetes in Chandigarh and Panchkula region based on glycated haemoglobin and Indian diabetes risk score. Endocrinology, Diabetes & Metabolism, 4(1), e00162.`,
      `Ullas, K., Maharana, S., Metri, K. G., Gupta, A., & Nagendra, H. R. (2021). Impact of Yoga on Mental Health and Sleep Quality Among Mothers of Children With Intellectual Disability. Alternative Therapies in Health and Medicine.`,
    ],
  },
  {
    year: "The Year 2020",
    publications: [
      `Krishnappa, D. T., Sridhar, M. K., & Nagendra, H. R. (2020). Concept of mind in Indian philosophy, Western philosophy, and psychology. Yoga Mimamsa, 52(1), 25.`,
      `Kaur, D., Hankey, A., Jagannathan, A., & Nagendra, H. R. (2020). Kashyapa Prakriti Inventory: Development and initial standardization. International Journal of Science and Research, 9(4), 706-713.`,
      `Kaur, D., Hankey, A., Jagannathan, A., & Nagendra, H. R. (2020). Development and initial standardization of Kashyapa Psychophysiological State Inventory. International Ayurvedic Medical Journal, 8(5), 3445-3452.`,
      `Kaur, D., Hankey, A., & Nagendra, H. R. (2019). A questionnaire designed to measure tridosha values in adolescents: Changes in score pre-post an IAYT yoga module. European Journal of Biomedical and Pharmaceutical Sciences, 6(11), 205-211.`,
    ],
  },
  {
    year: "The Year 2019",
    publications: [
      `Sivaramappa, B., Deshpande, S., Kumar, P. V. G., & Nagendra, H. R. (2019). Effect of anapanasati meditation on verbal aggression: A randomized controlled trial. Complementary Therapies in Clinical Practice, 36, 77-81.`,
      `Sivaramappa, B., Deshpande, S., Kumar, P. V. G., & Nagendra, H. R. (2019). Effect of anapanasati meditation on anxiety: A randomized control trial. Annals of Neurosciences, 26(1), 32-36.`,
      `Choukse, A., Ram, A., & Nagendra, H. R. (2019). Effect of residential yoga camp on psychosocial fitness of adolescents. International Journal of Yoga, 12(2), 139.`,
      `Pise, V., Pradhan, B., & Gharote, M. M. (2019). Body mass index status among children with intellectual disability. International Journal of Physiology, Nutrition and Physical Education, 4(1), 106-108.`,
    ],
  },
  {
    year: "The Year 2018",
    publications: [
      `Sivaramappa, B., Deshpande, S., Kumar, P. V. G., & Nagendra, H. R. (2018). The Effect of Anapanasati Meditation on Depression: A Randomized Control Trial. Journal of Ayurvedic and Herbal Medicine, 4(3), 102-105.`,
      `Choukse, A., Ram, A., & Nagendra, H. R. (2018). Effect of Residential Yoga Camp on Psychological Fitness of Adolescents: A Cohort Study. Journal of Clinical & Diagnostic Research, 12(8).`,
      `Choukse, A., Ram, A., & Nagendra, H. R. (2018). Effect of Residential Integrated Yoga on Physical Fitness of Adolescents using EUROFIT battery. International Journal of Adapted Physical Education & Yoga, 3(12), 1-21.`,
      `Poornabodha, V., Kadagadakai, & Pradhan, B. (2018). Association of physical fitness and soccer skills in diploma college soccer players. International Journal of Physiology, Nutrition and Physical Education, 3(1), 20-22.`,
      `Poornabodha, V., Kadagadakai, & Pradhan, B. (2018). Study of physical fitness and technical skills on college soccer players playing positions. International Journal of Yoga, Physiotherapy and Physical Education, 3(2), 22-26.`,
      `Poornabodha, V., Kadagadakai, & Pradhan, B. (2018). Effect of fitness training and yogic practices on football passing skill. International Journal of Physiology, Nutrition and Physical Education, 3(2), 120-122.`,
      `Sharma, S. D., Subramanya, P., Ganpat, T. S., & Nagendra, H. R. (2018). Role of Yoga for Psychological Distress in Orphaned Adolescents. Annals of Medical and Health Sciences Research, 8, 10.`,
      `Mani, T. A., Sharma, M. K., Omkar, S. N., & Nagendra, H. R. (2018). Holistic assessment of anger in adolescents–Development of a rating scale. Journal of Ayurveda and Integrative Medicine, 9(3), 195-200.`,
      `Pise, V., Pradhan, B., & Gharote, M. (2018). Effect of yoga practices on psycho-motor abilities among intellectually disabled children. Journal of Exercise Rehabilitation, 14(4), 581.`,
      `Pradhan, B., Mohanty, S., & Hankey, A. (2018). Effect of yogic breathing on accommodate braille version of six-letter cancellation test in students with visual impairment. International Journal of Yoga, 11(2), 111-115.`,
    ],
  },
  {
    year: "The Year 2017",
    publications: [
      `Mathad, M. D., Rajesh, S. K., & Pradhan, B. (2017). Spiritual Well-Being and Its Relationship with Mindfulness, Self-Compassion and Satisfaction with Life in Baccalaureate Nursing Students: A Correlation Study. Journal of Religion and Health, 1-12.`,
      `Rao, M., Metri, K. G., Raghuram, N., & Hongasandra, N. R. (2017). Effects of Mind Sound Resonance Technique (Yogic Relaxation) on Psychological States, Sleep Quality, and Cognitive Functions in Female Teachers: A Randomized, Controlled Trial. Advances in Mind-Body Medicine, 31(1), 4–9.`,
      `Veerayya, S., Kashinath, G. M., Promila, & Shivaji, C. (2018). School-based yoga program improves mental health and cognitive function in schoolchildren: A pilot, cross-sectional study. Journal of Ayurveda and Healthy. [Accepted for publication]`,
      `Kukade, A. S., Ganpat, T. S., & Nagendra, H. R. (2016). Stress management in medical students: A yogic therapy approach. International Journal of Educational and Psychological Researches, 2(1), 65.`,
      `Mathad, M. D., Pradhan, B., & Rajesh, S. K. (2017). A journey from empathy to self-compassion: A prerequisite in nursing. Indian Journal of Positive Psychology, 8(4), 670-672.`,
      `Mathad, M. D., Pradhan, B., & Rajesh, S. K. (2017). Correlates and predictors of resilience among baccalaureate nursing students. Journal of Clinical and Diagnostic Research, 11(2), JC05.`,
      `Mathad, M. D., Pradhan, B., & Rajesh, S. K. (2017). Effect of Yoga on Psychological Functioning of Nursing Students: A Randomized Wait List Control Trial. Journal of Clinical and Diagnostic Research, 11(5), KC01.`,
      `Sharma, S. D., Rajesh, S. K., & Subramanya, P. (2017). Orphan children and yogic approach. Journal of Applied Consciousness Studies, 5(2), 64-65.`,
      `Tumuluri, I., Hegde, S., & Nagendra, H. R. (2017). Effectiveness of music therapy on focused attention, working memory and stress in Type 2 diabetes: An exploratory study. International Journal of Yoga, 10(3), 167-170.`,
      `Pise, V., Pradhan, B., & Gharote, M. M. (2017). Validation of yoga module for children with intellectual disabilities. Industrial Psychiatry Journal, 26(2), 151.`,
      `AG, G. S., Subramanya, P., & Mahadevan, B. (2017). Effect of Yoga on Adolescents' Attitude towards Violence. Journal of Human Values, 23(2), 81-91.`,
      `AG, G. S., Subramanya, P., & Mahadevan, B. (2017). Effect of Yoga on Adolescents' Beliefs about Aggression and Alternatives. International Journal of Medicine and Public Health, 7(3).`,
    ],
  },
  {
    year: "The Year 2016",
    publications: [
      `AG, G. S., Subramanya, P., & Mahadevan, B. (2016). Effect of Yoga on Human Aggression and Violent Behavior-A Review of the Indian Yoga Scriptures and Scientific Studies. Social and Education History, 5(1), 83-104.`,
      `Tejvani, R., Metri, K. G., Agrawal, J., & Nagendra, H. R. (2016). Effect of Yoga on anxiety, depression and self-esteem in orphanage residents: A pilot study. Ayu, 37(1), 22.`,
      `Mohanty, S., Pradhan, B., & Hankey, A. (2016). Upper extremity strength and motor speed in children with visual impairment following a 16-week yoga training program. Isokinetics and Exercise Science, 24(2), 107-114.`,
      `Purohit, S. P., & Pradhan, B. (2017). Effect of yoga program on executive functions of adolescents dwelling in an orphan home: A randomized controlled study. Journal of Traditional and Complementary Medicine, 7(1), 99-105.`,
      `Mohanty, S., Purohit, S., Mayanglanbam, R., Ranjita, R., Pradhan, B., & Hankey, A. (2016). A comparative study of minimum muscular fitness in students with visual impairment and normal vision. Indian Journal of Health and Wellbeing, 7(1), 97-100.`,
      `Purohit, S. P., Pradhan, B., & Nagendra, H. R. (2016). Yoga as a preventive therapy for loneliness in orphan adolescents. Indian Journal of Health and Wellbeing, 7(1), 121-124.`,
      `Narasingharao, K., Pradhan, B., & Navaneetham, J. (2016). Sleep Disorder, Gastrointestinal Problems and Behaviour Problems Seen in Autism Spectrum Disorder Children and Yoga as Therapy: A Descriptive Review. Journal of Clinical and Diagnostic Research, 10(11), VE01-VE03.`,
      `Mohanty, S., Hankey, A., Pradhan, B., & Ranjita, R. (2016). Yoga-teaching protocol adapted for children with visual impairment. International Journal of Yoga, 9, 114-120.`,
      `Purohit, S. P., Pradhan, B., & Nagendra, H. R. (2016). Effect of yoga on EUROFIT physical fitness parameters on adolescents dwelling in an orphan home: A randomized control study. Vulnerable Children and Youth Studies, 11(1), 33-46.`,
      `Vishvanath, P., Ganpat, T. S., Pradhan, B., Gharote, M. M., & Ramarao, N. H. (2016). Mentally retarded children: A scope for yogic rehabilitation module. Chrismed Journal of Health and Research, 3(1), 98-99.`,
      `Govindaraja, S., A.G., Subramanya, P., & Mahadevan, B. (2016). Effect of yoga on Human Aggression and Violent Behaviour - A Review of the Indian Yoga Scriptures and Scientific Studies. Social and Education History, 5(1), 82-103.`,
      `Telles, S., Pailoor, S., & Jain, M. (2016). Influence of Yoga Practice on Memory in Children. Journal of Indian Psychology, 30(1), 70-77.`,
    ],
  },
  {
    year: "The Year 2015",
    publications: [
      `Nagarajan, K., Srinivasan, T. M., & Ramarao, N. H. (2015). Immediate effect of listening to Indian raga on attention and concentration in healthy college students: A comparative study. Journal of Health Research and Reviews, 2(3), 103.`,
      `Nagarajan, K., Srinivasan, T. M., & Rao, N. H. R. (2015). Immediate effect of Indian music on cardiac autonomic control and anxiety: A comparative study. Heart India, 3(4), 93.`,
      `Sharma, S. D., Subramanya, P., & Tikhe, S. G. (2015). Rehabilitation in orphan children: Role of evidence-based yoga. Yoga Mimamsa, 47(1), 3.`,
      `Hema, B. N., Kashinath, G. M., & Nagendra, H. R. Effect of a Ten-Day Yoga-Based Vacation Program on Short-Term and Working Memory in Schoolchildren.`,
      `Ashwini, H. R., & Kumari, S. (2015). Effect Of One Month Residential Yoga Program On Measuring The Positive And Negative Attitude (No. 2015-03-04).`,
    ],
  },
  {
    year: "The Year 2014",
    publications: [
      `Rao, T. I., Kushwah, K. K., & Srinivasan, T. M. (2014). Effect of Indian devotional music on students and performers measured with electron photonic imaging. Online International Interdisciplinary Research Journal, 4(4), 284-291.`,
      `Rao, T. I., & Nagendra, H. R. (2014). The effect of active and silent music interventions on patients with type 2 diabetes measured with electron photonic imaging technique. International Journal of Social Science and Humanity, 3, 7-14.`,
      `Rao, T. I., & Nagendra, H. R. (2014). The role of yogasanas and pranayama techniques in correcting the functional disorders of voice production. International Journal of Research in Humanities, 2, 2321-8878.`,
      `Devi, N. J., & Subrahmanyam, K. (2014). Women in the Rig Vedic age. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 2(1), 1.`,
      `Devi, N. J., & Kambhampati, S. (2015). Yoga as an ancient science of healing: its impact on mental health of women. International Journal of Ayurveda Pharma Research, 2(3).`,
      `Devi, N. J., Singh, T. B., & Subramanya, P. (2014). Effect of yoga on depression and quality of life in drug abusers. International Journal of Pharma Research, 2(2), 61-65.`,
      `Babu, N., Pradhana, B., & Nagendra, H. R. (2013). A comparative study on two yogic relaxation techniques on anxiety in school children. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 1(2), 65.`,
      `Babu, N., Pradhana, B., & Nagendra, H. R. (2014). Immediate effect of yoga-based relaxation techniques on memory task performance in teenagers. International Journal of Multidisciplinary Educational Research, 8(3), 262-271.`,
      `Babu, N., Rajesh, S. K., & Nagendra, H. R. (2014). Relationship between state mindfulness and working memory in children. Indian Journal of Positive Psychology, 5(3), 310-312.`,
      `Rawat, V., Rajesh, S. K., & Nagarathna, R. (2014). Development of a simplified yogic measure (bhramari time) of lung function in normal children – a correlational study. International Society for Scientific Interdisciplinary Yoga Research, 4(4), 7-13.`,
      `Rawat, V., Rajesh, S. K., & Nagarathna, R. (2014). Physical fitness in adolescent competitive yoga practitioners – a cross sectional cohort study. Indian Journal of Health & Wellbeing, 5(12), 1445-1448.`,
      `Rawat, V., Rajesh, S. K., & Nagarathna, R. (2014). Minimum muscular fitness and ventilatory function in south Indian school children. Journal of Exercise Science and Physiotherapy, 10(2), 104-110.`,
      `Dayananda, H. V., Rajesh, S. K., Babu, N., & Ilavarasu, V. J. (2014). Barriers in the path of yoga practice: an online survey. International Journal of Yoga, 7(1), 66-71.`,
      `Hankey, A. (2014). Complexity-Biology-based Information Structures can explain Subjectivity, Objective Reduction of Wave Packets, and Non-Computability. Cosmos and History. The Journal of Natural and Social Philosophy, 10(1), 237-250.`,
      `Ilavarasu, J. V., Rajesh, S. K., & Hankey, A. (2014). Implicit measure for yoga research: Yoga Implicit Association Test. International Journal of Yoga, 7(2), 120-125.`,
      `Karuna, N., Srinivasan, T. M., & Nagendra, H. R. (2013). Review of Rāgās and its Rasās in Indian music and its possible applications in therapy. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 1(1), 21-28.`,
      `Mohanty, S., & Pradhan, B. (2014). The effect of yoga practice on proprioception in congenitally blind students. British Journal of Visual Impairment, 32(2), 124-135.`,
      `Sharma, B., Hankey, A., & Nagendra, H. R. (2014). Gas Discharge Visualization Characteristics of an Indian Diabetes Population. Voice of Research, 2(4), 28-33.`,
      `Karuna, N., Srinivasan, T. M., & Nagendra, H. R. Music therapy based on individual's 'biological humor' – with reference to medical astrology: a review. International Ayurvedic Medical Journal, 2(4), 528-543.`,
    ],
  },
  {
    year: "The Year 2013",
    publications: [
      `Pradhan, B. (2013). Effect of kapalabhati on performance of six-letter cancellation and digit letter substitution task in adults. International Journal of Yoga, 6(2), 128-130.`,
      `Deshpande, C. S., Rakshani, A., Nagarathna, R., Ganpat, T. S., Kurpad, A., Maskar, R., & Nagendra, H. R. (2013). Yoga for high-risk pregnancy: a randomized controlled trial. Annals of Medical and Health Sciences Research, 3(3), 341-344.`,
      `Sheela, H. R., Nagendra, H. R., & Ganpat, T. S. (2013). Efficacy of Yoga for sustained attention in university students. Ayu, 34(3), 270.`,
      `Sethi, J. K., Nagendra, H. R., & Ganpat, T. S. (2013). Yoga improves attention and self-esteem in underprivileged girl students. Journal of Education and Health Promotion, 2.`,
      `Ganpat, T. S., Selvi, V., & Nagendra, H. R. (2013). Efficacy of yoga for mental performance in university students. Indian Journal of Psychiatry, 55(4), 349-352.`,
    ],
  },
  {
    year: "The Year 2012",
    publications: [
      `Pradhan, B., & Derle, S. G. (2012). Comparison of effect of Gayatri Mantra and Poem Chanting on Digit Letter Substitution Task. Ancient Science of Life, 32(2), 89-92.`,
    ],
  },
  {
    year: "The Year 2011",
    publications: [
      `Khemka, S. S., Nagendra, H. R., & Hankey, A. (2011). Effect of integral yoga on psychological and health variables and their correlations. International Journal of Yoga, 4(2), 93-99.`,
      `Narasimhan, L., Nagarathna, R., & Nagendra, H. (2011). Effect of integrated yogic practices on positive and negative emotions in healthy adults. International Journal of Yoga, 4(1), 13-19.`,
    ],
  },
  {
    year: "The Year 2010",
    publications: [
      `Balaram, P., & Nagendra, H. R. (2010). Immediate effect of two yoga-based relaxation techniques on attention in children. International Journal of Yoga, 3(2), 67-69.`,
      `Khemka, S. S., Nagendra, H. R., & Nagarathna, R. (2010). Immediate effect of stimulation in comparison to relaxation in healthy volunteers. Indian Journal of Traditional Knowledge, 9(3), 606-610.`,
    ],
  },
];

export default function DivisionYogaHumanities() {
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
          <span className="text-white/40">Division of Yoga and Humanities</span>
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
            Division of Yoga and Humanities
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
              Division of Yoga and Humanities
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
