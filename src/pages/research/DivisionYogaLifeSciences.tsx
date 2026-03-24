import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const publications2024 = [
  `Sathiyavathi, G., Swathi, P. S., Bhavana, M., Ritesh, C., & Saoji, A. A. (2024). Effect of Yoga on Psychological and Emotion Regulation among Women Prisoners: A Pilot, Randomized Controlled Trial. Journal of Applied Consciousness Studies, 12(1), 17-23.`,
  `Yamuna, U., Pravalika, B., Madle, K., Majumdar, V., & Saoji, A. A. (2024). Effect of yoga in industrial workers with chronic venous insufficiency: A randomized controlled trial. Journal of Integrative and Complementary Medicine, 30(9), 886-896.`,
  `Yadav, S. S., Saoji, A. A., Somanadhapai, S., lal Yadav, N., Upadhyay, J., Rishi, N. N., & Thapa, R. (2024). Effect of Yoga-based breathing practices on depression, anxiety, stress, and fear of COVID-19 positive hospitalized patients: A randomized controlled trial. Journal of Ayurveda and integrative medicine, 15(2), 100897.`,
  `Saoji, A. A., Swathi, P. S., Bhat, R., Bansal, B., Mohanty, S., & Raj Lakshmi, R. R. (2024). Exploring the effect of Trataka (A yogic cleansing technique) and cold eye pack on eye strain during COVID-19 pandemic: A randomized three-arm trial. Journal of Integrative and Complementary Medicine, 30(4), 345-351.`,
  `Paranthatta, S., George, T., Vinaya, H. M., Swathi, P. S., Pandey, M., Pradhan, B., ... & Saoji, A. A. (2024). Effect of cyclic meditation on anxiety and sleep quality in sailors on merchant ships—A quasi-experimental study. Frontiers in Public Health, 12, 1363750.`,
  `Vinaya, H. M., Swathi, P. S., Pravalika, B., & Saoji, A. A. (2024). Influence of Meditative Technique on Musculoskeletal Pain, Sleep Quality, Stress and State Anxiety on Geriatric Participants: A Randomized Controlled Trial. The American Journal of Geriatric Psychiatry: Open Science, Education, and Practice, 2, 1-10.`,
  `Saoji, A. A., Vijayakumar, V., Chattopadhyay, K., & Kozasa, E. H. (2024). Yoga to promote mental health in occupational health settings. Frontiers in Public Health, 12, 1460432.`,
  `Gupta, K., Sinha, G. R., Bhat, R., Saoji, A. A., & Manjunath, N. K. (2024). Multi-resolution assessment of heart rate variability signals during yogic and normal breathing using machine learning modules. Applied Soft Computing, 164, 112020.`,
  `Raghunandan, V., & Saoji, A. A. (2024). Modified yoga program for Chronic Kidney Disease (CKD) patients undergoing hemodialysis: Study protocol for a randomized controlled trial. Advances in Integrative Medicine, 11(4), 285-290.`,
  `Nilkantham, S., & Singh, A. (2024). Therapies to Treat Depression in Hypothyroid Patients. Indian Journal of Medical Specialities, 15(2), 81-91.`,
  `Nilakantham, S., Singh, A., Metri, K. G., & Nagaratna, R. (2024). Effects of residential Yoga therapy on blood pressure and body mass index in women with hypothyroidism and obesity: A retrospective study. AYU (An International Quarterly Journal of Research in Ayurveda), 45(1), 12-16.`,
  `Mohanty, S., Singh, D., Singh, A., Krishna, D., Mohanty, S., Vinchurkar, S., ... & Dwivedi, K. (2024). Improving Prefrontal Oxygenation and Cardiac Autonomic Activity Following Meditation: A Functional Near-Infrared Spectroscopy (fNIRS) Study. Cureus, 16(8).`,
  `Zaidi, S. Z. H., Mithila, M. V., Mavathur, R. N., Nagarathna, R., Thulasi, A., Ramsahaye, A. Y., ... & Shukla, H. A. (2023). Yoga Module Development and Validation for Sickle Cell Disease. International Journal of Yoga, 16(3), 219-225.`,
  `Kanthi, A., Deepeshwar, S., Chidananda, K., Vidyashree, M., & Krishna, D. (2024). Event-Related Potential Changes Following 12-week Yoga Practice in T2DM Patients: A Randomized Controlled Trial. Clinical EEG and Neuroscience, 15500594241249511.`,
  `Vidyashree, M., Kaligal, C., Kanthi, A., Krishna, D., & Deepeshwar, S. (2024). Long-Term Yoga Practise Regulates Worry and Quality of Sleep in Type 2 Diabetes Mellitus. Sleep and Vigilance, 8(1), 139-149.`,
  `Vidyashree, M., Deepeshwar, S., Kaligal, C., Kanthi, A., Krishna, D., Raghuram, N., ... & Dwivedi, K. (2024). Cerebral Haemodynamic Changes in Type 2 Diabetes Mellitus Following a Three-Month Yoga Intervention: A Randomized Controlled Trial. Cureus, 16(1).`,
  `Yamuna, U., Pravalika, B., Madle, K., Majumdar, V., & Saoji, A. A. (2024). Effect of yoga in industrial workers with chronic venous insufficiency: A randomized controlled trial. Journal of Integrative and Complementary Medicine, 30(9), 886-896.`,
  `Singh, M., & Majumdar, V. (2024). Design and Rationale of a Two-Armed Randomized Controlled Trial on Yoga/Brisk Walking-Based Lifestyle Modification on Dementia Risk Reduction, and Influence of ApoE Genotypes on the Intervention. The Journal of Aging Research & Lifestyle, 13, 33-42.`,
  `Snigdha, A., Majumdar, V., Manjunath, N. K., & Jose, A. (2024). Yoga-based lifestyle intervention for healthy ageing in older adults: a two-armed, waitlist randomized controlled trial with multiple primary outcomes. GeroScience, 46(6), 6039-6054.`,
  `Maity, K., Lal, P., Jyoti, S., Bali, P., Thakur, U. K., Singh, G., ... & Anand, A. (2024). Humanistic and Holistic Strategies for Combating Mental Health Sequelae in the Elderly During the Post-COVID Era. Annals of Neurosciences, 31(4), 292-299.`,
  `Ranisha, K., Kumari, S., & Dwivedi, U. (2024). Human development model based on yogic wisdom for well-being and self-actualization: A conceptual framework. Journal of Human Values, 30(2), 202-213.`,
  `Jain, M. J., Krishna, C. S., & Purohit, S. (2024). Study on Pranic Energization Technique and Similar Model of Energisation.`,
  `Manjunath, N. K. (2024). Yogic Feats: An Exception or a Miracle?. International Journal of Yoga, 17(1), 1-2.`,
  `Majumdar, V., Manjunath, N. K., Nagarathna, R., Panigrahi, S., Kanchi, M., Sahoo, S., ... & Nayak, R. (2024). Adjunct tele-yoga on clinical status at days in hospitalized patients with mild and moderate COVID-trial: A randomized control. Physical Activity, Health Equity and Health-Related Outcomes, Volume II, 68.`,
  `Sujatha, K. J., & Shetty, P. (2024). Integrated Yoga and Naturopathy Interventions to Modify Functional Disability in Patients With Spinal Cord Injury: A Randomized Controlled Trial. Cureus, 16(4).`,
  `Manjunath, N. K. (2024). Safety and Prevention of Injuries in Yoga. International Journal of Yoga, 17(2), 65-66.`,
  `Budhi, R. B., Singh, D., Goswami, J., Manjunath, N. K., & Vinchurkar, S. (2024). Influence of High-frequency Yoga Breathing (Kapalabhati) on States Changes in Gamma Oscillation. International Journal of Yoga, 17(2), 106-115.`,
  `Maharana, S., Nagarathna, R., Patra, S., Venkataram, P., Nagendra, H. R., & Maity, K. (2024). Integrated yoga changes attention, motor, and mental function in expecting mothers: A randomized controlled trial. Yoga Mimamsa, 56(1), 33-40.`,
  `Trivedi, G. Y., Kathirvel, S., Nagendra, H. R., Trivedi, R. G., Saboo, B., & Ramani, H. (2024). Effect of Lifestyle Choices on Cerebrospinal Fluid Pulsations. Journal of Applied Consciousness Studies, 12(1), 58-64.`,
  `Kanthi, A., Singh, D., Manjunath, N. K., & Nagarathna, R. (2024). Changes in Electrical Activities of the Brain Associated with Cognitive Functions in Type 2 Diabetes Mellitus: A Systematic Review. Clinical EEG and Neuroscience, 55(1), 130-142.`,
  `Nilakantham, S., Singh, A., Metri, K. G., & Nagaratna, R. (2024). Effects of residential Yoga therapy on blood pressure and body mass index in women with hypothyroidism and obesity: A retrospective study. AYU (An International Quarterly Journal of Research in Ayurveda), 45(1), 12-16.`,
  `Ashwini, B. C., Nagarathna, R., Garner, C., Bilagi, A., & Palukuru, S. (2024). Comprehensive In-Patient Neuro-rehabilitation: Harnessing Yoga's Potential-A Pilot Study in Germany. Advances in mind-body medicine, 38(4), 25-30.`,
  `Atmika, Y. R., Vikas, R., Nagarathna, R., Rajesh, S. K., Arun, T., Naresh, K., & Zaeem, Z. (2024). Yoga-based counselling module as an integrated yoga therapy to manage substance use disorder: A developmental and feasibility study. Indian Journal of Science and Technology, 17(27), 2865-2872.`,
  `Li, D., Mohanty, S., Mavathur, R., Vageesh, V. Y., Jain, A., Gopi, A., ... & GOPI, A. (2024). Study Protocol for Mindfulness-Based Yoga Versus Physical Exercise on the Psychological Well-Being in Students With Early Visual Impairment: A Three-Armed, Multi-Centered, Randomized Controlled Trial. Cureus, 16(9).`,
  `Nilkantham, S., Harini, K. N., & Singh, A. (2024). An integrated approach of yoga therapy and naturopathy for the treatment of hypothyroidism–An experimental single case report. Advances in Integrative Medicine, 11(4), 247-253.`,
];

const publications2023 = [
  `KUMAR, C., Gautam, A. K., Kushwaha, D. K., & Choudhary, C. (2022). Removal of Phenylamine Using Advanced Oxidation Process by UV/Peroxy Disulphate from Waste Water.`,
  `Pravalika, B., Yamuna, U., & Saoji, A. A. (2022). Effect of Yoga on musculoskeletal pain and discomfort, perceived stress, and quality of sleep in industrial workers: Study protocol for a randomized controlled trial. Advances in Integrative Medicine, 9(4), 224-229.`,
  `Mishra P., Greenfield S. M., Harris T., Hamer M., Lewis S. A., Singh K. et al. (2023). Yoga Programme for Type 2 Diabetes Prevention (YOGA-DP): A Qualitative Study Exploring the Trial Team's Facilitators and Challenges in Conducting a Feasibility Trial in India. Diabetes Therapy, 14(10), 1695-1709.`,
  `Upadhyay, J., Shetty, S., Saoji, A. A., & Yadav, S. S. (2023). Effects of Nadishodhana and Bhramari Pranayama on heart rate variability, auditory reaction time, and blood pressure: A randomized clinical trial in hypertensive patients. Journal of Ayurveda and Integrative Medicine, 14(4), 100774.`,
  `Kishore, D. M., Divya, B. R., & Manjunath, N. K. (2023). Exploring the Deeper Insights of Vrikshasana. Journal of Applied Consciousness Studies, 11(1), 60-66.`,
  `Chattopadhyay, K., Mishra, P., Singh, K., Singh, K., Harris, T., Hamer, M., ... & YOGA-DP Study Team. (2023). Correction to: Yoga Programme for Type 2 Diabetes Prevention (YOGA-DP) Among High-Risk People in India: A Multicenter Feasibility Randomized Controlled Trial. Diabetes Therapy, 14(7), 1155.`,
  `Manjunath, N. K. (2023). The Transformative Impact of the International Day of Yoga. International Journal of Yoga, 16(1), 1-4.`,
  `Chattopadhyay, K., Mishra, P., Singh, K., Singh, K., Harris, T., Hamer, M., ... & YOGA-DP Study Team. (2023). Yoga programme for type 2 diabetes prevention (YOGA-DP) among high-risk people in India: a multicenter feasibility randomized controlled trial. Diabetes Therapy, 14(7), 1137-1154.`,
  `Shrivastava, A., Singh, B. K., Krishna, D., Krishna, P., Singh, D., Singh, B., & Dwivedi, K. (2023). Effect of Heartfulness meditation among long-term, short-term and non-meditators on prefrontal cortex activity of brain using machine learning classification: a cross-sectional study. Cureus, 15(2).`,
  `Kaligal, C., Kanthi, A., Vidyashree, M., Krishna, D., Raghuram, N., Hongasandra Ramarao, N., & Deepeshwar, S. (2023). Prefrontal oxygenation and working memory in patients with type 2 diabetes mellitus following integrated yoga: a randomized controlled trial. Acta Diabetologica, 60(7), 951-961.`,
  `Chidananda, K., Singh, D., Amit, K., Mahadevappa, V., & Krishna, D. (2023). Yoga Practice Facilitates Prefrontal Oxygenation and Working Memory in Type 2 Diabetes Mellitus Patients: A Pilot Study.`,
  `Amit, K., Singh, D., Kaligal, C., Mahadevappa, V., & Krishna, D. (2023). Changes in Heart Rate Variability and Executive Functions Following Yoga Practice in Type 2 Diabetes Patients: A Pilot Study. Advances in Mind-body Medicine, 37(1), 4-10.`,
  `Nilkantham, S., Majumdar, V., & Singh, A. (2023). Scientific yoga module for hypothyroidism: A study protocol for tele-yoga RCT. Contemporary Clinical Trials Communications, 33, 101157.`,
  `Singh, J., Metri, K., Tekur, P., Mohanty, S., Singh, A., & Raghuram, N. (2023). Tele-yoga in the management of ankylosing spondylitis amidst COVID pandemic: A prospective randomized controlled trial. Complementary therapies in clinical practice, 50, 101672.`,
  `Kishore, D. M., Bindu, S., & Manjunath, N. K. (2022). Smart yoga instructor for guiding and correcting yoga postures in real time. International Journal of Yoga, 15(3), 254-261.`,
  `Nilkantham, S., Kn, H., & Singh, A. (2023). Knowledge, Attitude, and Practice of Yoga for Thyroid Dysfunction: A Cross-sectional Survey Using a Tableau Approach. Advances in Mind-body Medicine, 37(3), 23-32.`,
  `Yamuna, U., Madle, K., Majumdar, V., & Saoji, A. A. (2023). Designing and validation of Yoga module for workers with prolonged standing. Journal of Ayurveda and Integrative Medicine, 14(5), 100788.`,
  `Pravalika, B., Yamuna, U., & Saoji, A. A. (2023). Yoga for musculoskeletal pain, discomfort, perceived stress, and quality of sleep in industry workers: a randomized controlled trial. International archives of occupational and environmental health, 96(10), 1349-1360.`,
  `Malviya, S., Saoji, A. A., & Pravalika, B. (2023). Yoga nidra for mental health: A systematic review of current evidence. Journal of Spirituality in Mental Health, 1-27.`,
  `Wen, X., Saoji, A. A., Metri, K., Mohanty, S., & Vijayakumar, V. (2023). Immediate effect of a meditation technique on blood glucose, state anxiety and relaxation in patients with type 2 diabetes: a pilot randomized crossover study. Journal of Complementary and Integrative Medicine, 20(3), 650-655.`,
  `Maurya, S., Kumar, I. R., Singh, A., Mohanty, S., & Nagaratna, R. (2023). Evaluating the effect of yoga as an adjunct therapy in type 1 diabetes care: Study protocol for randomised control trial. Advances in Integrative Medicine, 10(1), 34-39.`,
  `Singh, A. K., Buttagat, V., & Divya, B. R. (2023). Exploring the Bioenergy Pathways Affecting the Low Back Pain–A Review. Journal of Applied Consciousness Studies, 11(1), 67-76.`,
  `Solanki, V. K., Mahajan, G., Jogdand, R. P., Ghosh, K. B., Nibedita, K. S., Singh, A., & Nagarathna, R. (2023). Impact of Mind Sound Resonance Technique (MSRT) as an add on to Integrated Approach of Yoga Therapy (IAYT) in stress-induced insomnia: A single case report.`,
  `Kishore, D. M., & Kurian, J. (2022). An Insight into the Biomechanics and Other Details of Vrikshāsanā, One of the Standing Yoga Āsanās. Asian J. Adv. Res. Rep, 16(12), 93-99.`,
  `Majumdar, V., Manjunath, N. K., Snigdha, A., Chakraborty, P., & Majumdar, R. (2023). Study protocol on effectiveness of yoga practice on composite biomarker age predictors (yBioAge) in an elderly Indian cohort-two-armed open label randomized controlled trial. BMC geriatrics, 23(1), 864.`,
  `Some, P., Majumdar, V., NK, M., Shetty, K., & Snigdha, A. (2023). A Longitudinal Two-Armed Randomized Controlled Trial Protocol to Evaluate the Efficacy of Yoga on Progression of Disease in Early Parkinson's Disease. Annals of Neurosciences, 09727531231198298.`,
  `Manjunath, N. K. (2023). Meditation is an Integral Part of Yoga. International Journal of Yoga, 16(3), 153-155.`,
  `Patil, S. S., Singh, A., Nagarathna, R., & Nagendra, H. R. (2023). Development and Validation of Unmada Symptom Checklist. Indian Journal of Ayurveda and Integrative Medicine KLEU, 4(1), 5-9.`,
  `Shrimal, P. J., Maharana, S., Dave, A., Nagarathna, R., & Shrimal, S. (2023). Immediate Impact of Tele Yoga Intervention on Physiological and Psychological Variables of COVID-19 Mild Symptomatic Patients: Two Groups Randomized Controlled Cross Over Study. J Indian Med Assoc, 121(12), 41-6.`,
  `Singphow, C., Purohit, S. P., Tekur, P., Bista, S., Panigrahy, S. N., Pradhan, B., & Raghuram, N. (2023). Effect of Yoga and Mindfulness Meditation on Quality of Life in Computer Users with Chronic Low Back Pain: A Prospective Randomized Active Control Trial. Journal of Applied Consciousness Studies, 11(1), 3-11.`,
  `Metri, K. G., Raghuram, N., Narayan, M., Sravan, K., Sekar, S., Bhargav, H., ... & Revankar, R. (2023). Impact of workplace yoga on pain measures, mental health, sleep quality, and quality of life in female teachers with chronic musculoskeletal pain: A randomized controlled study. Work, 76(2), 521-531.`,
  `Jain Shrimal, P., Maharana, S., Dave, A., Raghuram, N., & Thulasi, A. (2023). Efficacy of integrated tele-yoga intervention on physiological and psychological variables in asymptomatic COVID-19 positive patients: A confirmatory randomized control trial. Complementary Medicine Research, 30(2), 151-160.`,
  `Vijayakumar, V., Mavathur, R., Kannan, S., Sharma, M., Raguram, N., & Kuppusamy, M. (2023). Effect of yoga on reducing glycaemic variability in individuals with type 2 diabetes: a randomised controlled trial. Diabetes & Metabolism, 101457-101457.`,
  `Sharma, V., Vidyashree, M., Singh, D., Krishnamurthy, M., Kaligal, C., Kanthi, A., ... & Bathla, L. (2023). Cerebral hemodynamic changes after yoga intervention in patients with type-2 diabetes mellitus–A randomized control trial. Journal of the Neurological Sciences, 455.`,
  `Majumdar, V., Manjunath, N. K., Nagarathna, R., Panigrahi, S., Kanchi, M., Sahoo, S., ... & Nayak, R. (2023). Adjunct tele-yoga on clinical status at 14 days in hospitalized patients with mild and moderate COVID-19: A randomized control trial. Frontiers in Public Health, 11, 1054207.`,
  `Mishra, P., Harris, T., Greenfield, S. M., Hamer, M., Lewis, S. A., Singh, K., Nair, R., Mukherjee, S., Manjunath, N.K., Tandon, N., Kinra, S., Prabhakaran, D., & Chattopadhyay, K. (2023) Yoga Program for Type 2 Diabetes Prevention (YOGA-DP): a qualitative study exploring trial team's facilitators and challenges in conducting a feasibility trial in India. Diabetes Therapy, In Press.`,
  `Sujatha, K.J., Manjunath, N.K., Ahalya, P.G. (2023) Ayurveda, yoga, and acupuncture therapies in alleviating the symptom score among patients with spinal cord injury – A systematic review, Journal of Ayurveda and Integrative Medicine, 14, (4), 100749.`,
  `Majumdar, V., & Manjunath, N. K. (2023). New insights into yoga and mental health. Frontiers in Human Neuroscience, 17, 1239411.`,
  `Nadholta P., Kumar K., Saha P. K., Suri V., Singh A., Anand A. (2023) Mind-body practice as a primer to maintain psychological health among pregnant women-YOGESTA-a randomized controlled trial. Frontiers in Public Health, 12;11;1201371.`,
];

const publications2022 = [
  `Chobe, M. P., Nanjundaiah, R. M., & Chobe, S. (2022). Effect of Yoga on Sleep, Self-Esteem and Wellbeing Among Overweight and Obese–A Randomized Controlled Trial. Indian Journal of Science and Technology, 15(43), 2297-2302.`,
  `Sujatha, K. J., & Manjunath, N. K. (2024). Effectiveness of hyper and hypothermic application revulsively on range of motion, symptom score and quality of life in patients with cervical spondylosis: a randomized controlled trial. Advances in Traditional Medicine, 24(1), 171-177.`,
  `Kishore, D. M., Bindu, S., & Manjunath, N. K. (2022). Smart yoga instructor for guiding and correcting yoga postures in real time. International Journal of Yoga, 15(3), 254-261.`,
  `Krishna, D., Prasanna, K., Angadi, B., Singh, B. K., Anurag, S., & Deepeshwar, S. (2022). Heartfulness meditation alters electroencephalogram oscillations: An electroencephalogram study. International Journal of Yoga, 15(3), 205-214.`,
  `Singh, S. K., Singh, R., Rai, P. K., & Singh, A. K. (2022). The deadly duo of hypertension and diabetes in India: further affirmation from a new epidemiological study. J Assoc Physicians India, 70(1), 11-12.`,
  `Vaidya, V., Mavathur, D. R., & Basavapatna, D. B. R. (2022). Yoga as a life style prescription for the prakriti specific individuals to prevent disorders, lead healthy and happy life – A conceptual study. Journal of Ayurveda and Holistic Medicine (JAHM), 10(3).`,
  `Nagarathna, R., Sharma, M. N., Ilavarasu, J., Kulkarni, R., Anand, A., Majumdar, V., ... & Nagendra, H. R. (2022). Coping strategy, life style and health status during phase 3 of Indian national lockdown for COVID-19 pandemic—A pan-India survey. Frontiers in Public Health, 10, 814328.`,
  `Budhi, B. R., Deepeshwar, S., & Angadi, B. (2022). Comparative Cross-sectional Study on Phasic Heart Rate Variability and Working Memory Among Young Adults. Advances in Mind-body Medicine, 36(4), 12-19.`,
  `Kishore, D. M., Bindu, S., & Manjunath, N. K. (2022). Estimation of yoga postures using machine learning techniques. International Journal of Yoga, 15(2), 137.`,
  `Dhansoia, V., Majumdar, V., Manjunath, N. K., Gaharwar, U. S., & Singh, D. (2022). Breathing-Focused Yoga Intervention on Respiratory Decline in Chronically Pesticide-Exposed Farmers: A Randomized Controlled Trial. Frontiers in medicine, 9.`,
  `Ganesh, H. R. S., Subramanya, P., Rao, R. M., Vadiraj, H. S., & Udupa, V. (2022). Effects of an Integrated Yoga Program on Quality of Life, Spinal Flexibility, and Strength in Older Adults: A Randomized Control Trial. Advances in Mind-body Medicine, 36(1), 22-28.`,
  `Ganesh, H. S., Subramanya, P., Rao, M. R., Vadhiraj, H. S., & Udupa, V. (2022). Impact of yoga therapy in improving perceived stress, depression, and quality of life in elderly population: A randomized controlled trial. Journal of Applied Consciousness Studies, 10(1), 62.`,
  `Deepeshwar S., Budhi B.R., (2022). Slow yoga breathing improves mental load in working memory performance and cardiac activity among yoga practitioners. Frontiers in Psychology, 13:968858.`,
  `Verma, K., Deepeshwar, S., & Srivastava, A. (2022). The Impact of Complementary and Alternative Medicine on Insomnia: A Systematic Review. Cureus, 14(8):e28425.`,
  `Putchavayala, C. K., Deepeshwar S., & Sashidharan, R. K. (2022). A perspective of yoga on smartphone addiction: A narrative review. Journal of Family Medicine and Primary Care, 11(6), 2284-2291.`,
  `Putchavayala, C. K., Rajesh, S. K., & Deepeshwar S. (2022). Development, Content Validation, and Feasibility of Yoga Module for Smartphone Addiction. Advances in Mind-body Medicine, 36(2), 14-22.`,
];

const yearSections = [
  { year: "The Year 2024", publications: publications2024 },
  { year: "The Year 2023", publications: publications2023 },
  { year: "The Year 2022", publications: publications2022 },
];

export default function DivisionYogaLifeSciences() {
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

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-white/60 text-xs z-10 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/research" className="hover:text-white transition-colors">Research</Link>
          <span>/</span>
          <Link to="/research/publications" className="hover:text-white transition-colors">Research Repository</Link>
          <span>/</span>
          <span className="text-white/40">Division of Yoga and Life Sciences</span>
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
            Division of Yoga and Life Sciences
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
              Division of Yoga and Life Sciences
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
