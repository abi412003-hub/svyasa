import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const publications2024 = [
  `Sathiyavathi, G., Swathi, P. S., Bhavana, M., Ritesh, C., & Saoji, A. A. (2024). Effect of Yoga on Psychological and Emotion Regulation among Women Prisoners: A Pilot, Randomized Controlled Trial. Journal of Applied Consciousness Studies, 12(1), 17-23.`,
  `Yamuna, U., Pravalika, B., Madle, K., Majumdar, V., & Saoji, A. A. (2024). Effect of yoga in industrial workers with chronic venous insufficiency: A randomized controlled trial. Journal of Integrative and Complementary Medicine, 30(9), 886-896.`,
  `Yadav, S. S., Saoji, A. A., Somanadhapai, S., lal Yadav, N., Upadhyay, J., Rishi, N. N., & Thapa, R. (2024). Effect of Yoga-based breathing practices on depression, anxiety, stress, and fear of COVID-19 positive hospitalized patients: A randomized controlled trial. Journal of Ayurveda and integrative medicine, 15(2), 100897.`,
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
  `Saoji, A. A., Swathi, P. S., Bhat, R., Bansal, B., Mohanty, S., & Raj Lakshmi, R. R. (2024). Exploring the effect of Trataka (A yogic cleansing technique) and cold eye pack on eye strain during COVID-19 pandemic: A randomized three-arm trial. Journal of Integrative and Complementary Medicine, 30(4), 345-351.`,
  `Zaidi, S. Z. H., Mithila, M. V., Mavathur, R. N., Nagarathna, R., Thulasi, A., Ramsahaye, A. Y., ... & Shukla, H. A. (2023). Yoga Module Development and Validation for Sickle Cell Disease. International Journal of Yoga, 16(3), 219-225.`,
  `Kanthi, A., Deepeshwar, S., Chidananda, K., Vidyashree, M., & Krishna, D. (2024). Event-Related Potential Changes Following 12-week Yoga Practice in T2DM Patients: A Randomized Controlled Trial. Clinical EEG and Neuroscience, 15500594241249511.`,
  `Vidyashree, M., Kaligal, C., Kanthi, A., Krishna, D., & Deepeshwar, S. (2024). Long-Term Yoga Practise Regulates Worry and Quality of Sleep in Type 2 Diabetes Mellitus. Sleep and Vigilance, 8(1), 139-149.`,
  `Vidyashree, M., Deepeshwar, S., Kaligal, C., Kanthi, A., Krishna, D., Raghuram, N., ... & Dwivedi, K. (2024). Cerebral Haemodynamic Changes in Type 2 Diabetes Mellitus Following a Three-Month Yoga Intervention: A Randomized Controlled Trial. Cureus, 16(1).`,
  `Yamuna, U., Pravalika, B., Madle, K., Majumdar, V., & Saoji, A. A. (2024). Effect of yoga in industrial workers with chronic venous insufficiency: A randomized controlled trial. Journal of Integrative and Complementary Medicine, 30(9), 886-896.`,
  `Singh, M., & Majumdar, V. (2024). Design and Rationale of a Two-Armed Randomized Controlled Trial on Yoga/Brisk Walking-Based Lifestyle Modification on Dementia Risk Reduction, and Influence of ApoE Genotypes on the Intervention. The Journal of Aging Research & Lifestyle, 13, 33-42.`,
  `Snigdha, A., Majumdar, V., Manjunath, N. K., & Jose, A. (2024). Yoga-based lifestyle intervention for healthy ageing in older adults: a two-armed, waitlist randomized controlled trial with multiple primary outcomes. GeroScience, 46(6), 6039-6054.`,
  `Maity, K., Lal, P., Jyoti, S., Bali, P., Thakur, U. K., Singh, G., ... & Anand, A. (2024). Humanistic and Holistic Strategies for Combating Mental Health Sequelae in the Elderly During the Post-COVID Era. Annals of Neurosciences, 31(4), 292-299.`,
  `Zaidi, S. Z. H., Mithila, M. V., Mavathur, R. N., Nagarathna, R., Thulasi, A., Ramsahaye, A. Y., ... & Shukla, H. A. (2023). Yoga Module Development and Validation for Sickle Cell Disease. International Journal of Yoga, 16(3), 219-225.`,
  `Ranisha, K., Kumari, S., & Dwivedi, U. (2024). Human development model based on yogic wisdom for well-being and self-actualization: A conceptual framework. Journal of Human Values, 30(2), 202-213.`,
  `Jain, M. J., Krishna, C. S., & Purohit, S. (2024). Study on Pranic Energization Technique and Similar Model of Energisation.`,
  `Vidyashree, M., Deepeshwar, S., Kaligal, C., Kanthi, A., Krishna, D., Raghuram, N., ... & Dwivedi, K. (2024). Cerebral Haemodynamic Changes in Type 2 Diabetes Mellitus Following a Three-Month Yoga Intervention: A Randomized Controlled Trial. Cureus, 16(1).`,
  `Manjunath, N. K. (2024). Yogic Feats: An Exception or a Miracle?. International Journal of Yoga, 17(1), 1-2.`,
  `Majumdar, V., Manjunath, N. K., Nagarathna, R., Panigrahi, S., Kanchi, M., Sahoo, S., ... & Nayak, R. (2024). Adjunct tele-yoga on clinical status at days in hospitalized patients with mild and moderate COVID-trial: A randomized control. Physical Activity, Health Equity and Health-Related Outcomes, Volume II, 68.`,
  `Sujatha, K. J., & Shetty, P. (2024). Integrated Yoga and Naturopathy Interventions to Modify Functional Disability in Patients With Spinal Cord Injury: A Randomized Controlled Trial. Cureus, 16(4).`,
  `Snigdha, A., Majumdar, V., Manjunath, N. K., & Jose, A. (2024). Yoga-based lifestyle intervention for healthy ageing in older adults: a two-armed, waitlist randomized controlled trial with multiple primary outcomes. GeroScience, 46(6), 6039-6054.`,
  `Manjunath, N. K. (2024). Safety and Prevention of Injuries in Yoga. International Journal of Yoga, 17(2), 65-66.`,
  `Budhi, R. B., Singh, D., Goswami, J., Manjunath, N. K., & Vinchurkar, S. (2024). Influence of High-frequency Yoga Breathing (Kapalabhati) on States Changes in Gamma Oscillation. International Journal of Yoga, 17(2), 106-115.`,
  `Gupta, K., Sinha, G. R., Bhat, R., Saoji, A. A., & Manjunath, N. K. (2024). Multi-resolution assessment of heart rate variability signals during yogic and normal breathing using machine learning modules. Applied Soft Computing, 164, 112020.`,
  `Maharana, S., Nagarathna, R., Patra, S., Venkataram, P., Nagendra, H. R., & Maity, K. (2024). Integrated yoga changes attention, motor, and mental function in expecting mothers: A randomized controlled trial. Yoga Mimamsa, 56(1), 33-40.`,
  `Trivedi, G. Y., Kathirvel, S., Nagendra, H. R., Trivedi, R. G., Saboo, B., & Ramani, H. (2024). Effect of Lifestyle Choices on Cerebrospinal Fluid Pulsations. Journal of Applied Consciousness Studies, 12(1), 58-64.`,
  `Kanthi, A., Singh, D., Manjunath, N. K., & Nagarathna, R. (2024). Changes in Electrical Activities of the Brain Associated with Cognitive Functions in Type 2 Diabetes Mellitus: A Systematic Review. Clinical EEG and Neuroscience, 55(1), 130-142.`,
  `Maharana, S., Nagarathna, R., Patra, S., Venkataram, P., Nagendra, H. R., & Maity, K. (2024). Integrated yoga changes attention, motor, and mental function in expecting mothers: A randomized controlled trial. Yoga Mimamsa, 56(1), 33-40.`,
  `Vidyashree, M., Deepeshwar, S., Kaligal, C., Kanthi, A., Krishna, D., Raghuram, N., ... & Dwivedi, K. (2024). Cerebral Haemodynamic Changes in Type 2 Diabetes Mellitus Following a Three-Month Yoga Intervention: A Randomized Controlled Trial. Cureus, 16(1).`,
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
  `Upadhyay, J., Shetty, S., Saoji, A. A., & Yadav, S. S. (2023). Effects of Nadishodhana and Bhramari Pranayama on heart rate variability, auditory reaction time, and blood pressure: A randomized clinical trial in hypertensive patients. Journal of Ayurveda and Integrative Medicine, 14(4), 100774.`,
  `Yamuna, U., Madle, K., Majumdar, V., & Saoji, A. A. (2023). Designing and validation of Yoga module for workers with prolonged standing. Journal of Ayurveda and Integrative Medicine, 14(5), 100788.`,
  `Pravalika, B., Yamuna, U., & Saoji, A. A. (2023). Yoga for musculoskeletal pain, discomfort, perceived stress, and quality of sleep in industry workers: a randomized controlled trial. International archives of occupational and environmental health, 96(10), 1349-1360.`,
  `Malviya, S., Saoji, A. A., & Pravalika, B. (2023). Yoga nidra for mental health: A systematic review of current evidence. Journal of Spirituality in Mental Health, 1-27.`,
  `Wen, X., Saoji, A. A., Metri, K., Mohanty, S., & Vijayakumar, V. (2023). Immediate effect of a meditation technique on blood glucose, state anxiety and relaxation in patients with type 2 diabetes: a pilot randomized crossover study. Journal of Complementary and Integrative Medicine, 20(3), 650-655.`,
  `Nilkantham, S., Kn, H., & Singh, A. (2023). Knowledge, Attitude, and Practice of Yoga for Thyroid Dysfunction: A Cross-sectional Survey Using a Tableau Approach. Advances in Mind-body Medicine, 37(3), 23-32.`,
  `Nilkantham, S., Majumdar, V., & Singh, A. (2023). Scientific yoga module for hypothyroidism: A study protocol for tele-yoga RCT. Contemporary Clinical Trials Communications, 33, 101157.`,
  `Maurya, S., Kumar, I. R., Singh, A., Mohanty, S., & Nagaratna, R. (2023). Evaluating the effect of yoga as an adjunct therapy in type 1 diabetes care: Study protocol for randomised control trial. Advances in Integrative Medicine, 10(1), 34-39.`,
  `Singh, A. K., Buttagat, V., & Divya, B. R. (2023). Exploring the Bioenergy Pathways Affecting the Low Back Pain–A Review. Journal of Applied Consciousness Studies, 11(1), 67-76.`,
  `Singh, J., Metri, K., Tekur, P., Mohanty, S., Singh, A., & Raghuram, N. (2023). Tele-yoga in the management of ankylosing spondylitis amidst COVID pandemic: A prospective randomized controlled trial. Complementary therapies in clinical practice, 50, 101672.`,
  `Solanki, V. K., Mahajan, G., Jogdand, R. P., Ghosh, K. B., Nibedita, K. S., Singh, A., & Nagarathna, R. (2023). Impact of Mind Sound Resonance Technique (MSRT) as an add on to Integrated Approach of Yoga Therapy (IAYT) in stress-induced insomnia: A single case report.`,
  `Kishore, D. M., & Kurian, J. (2022). An Insight into the Biomechanics and Other Details of Vrikshāsanā, One of the Standing Yoga Āsanās. Asian J. Adv. Res. Rep, 16(12), 93-99.`,
  `Amit, K., Singh, D., Kaligal, C., Mahadevappa, V., & Krishna, D. (2023). Changes in Heart Rate Variability and Executive Functions Following Yoga Practice in Type 2 Diabetes Patients: A Pilot Study. Advances in Mind-body Medicine, 37(1), 4-10.`,
  `Nilkantham, S., Majumdar, V., & Singh, A. (2023). Scientific yoga module for hypothyroidism: A study protocol for tele-yoga RCT. Contemporary Clinical Trials Communications, 33, 101157.`,
  `Yamuna, U., Madle, K., Majumdar, V., & Saoji, A. A. (2023). Designing and validation of Yoga module for workers with prolonged standing. Journal of Ayurveda and Integrative Medicine, 14(5), 100788.`,
  `Majumdar, V., Manjunath, N. K., Snigdha, A., Chakraborty, P., & Majumdar, R. (2023). Study protocol on effectiveness of yoga practice on composite biomarker age predictors (yBioAge) in an elderly Indian cohort-two-armed open label randomized controlled trial. BMC geriatrics, 23(1), 864.`,
  `Some, P., Majumdar, V., NK, M., Shetty, K., & Snigdha, A. (2023). A Longitudinal Two-Armed Randomized Controlled Trial Protocol to Evaluate the Efficacy of Yoga on Progression of Disease in Early Parkinson's Disease. Annals of Neurosciences, 09727531231198298.`,
  `Manjunath, N. K. (2023). Meditation is an Integral Part of Yoga. International Journal of Yoga, 16(3), 153-155.`,
  `Some, P., Majumdar, V., NK, M., Shetty, K., & Snigdha, A. (2023). A Longitudinal Two-Armed Randomized Controlled Trial Protocol to Evaluate the Efficacy of Yoga on Progression of Disease in Early Parkinson's Disease. Annals of Neurosciences, 09727531231198298.`,
  `Kaligal, C., Kanthi, A., Vidyashree, M., Krishna, D., Raghuram, N., Hongasandra Ramarao, N., & Deepeshwar, S. (2023). Prefrontal oxygenation and working memory in patients with type 2 diabetes mellitus following integrated yoga: a randomized controlled trial. Acta Diabetologica, 60(7), 951-961.`,
  `Patil, S. S., Singh, A., Nagarathna, R., & Nagendra, H. R. (2023). Development and Validation of Unmada Symptom Checklist. Indian Journal of Ayurveda and Integrative Medicine KLEU, 4(1), 5-9.`,
  `Shrimal, P. J., Maharana, S., Dave, A., Nagarathna, R., & Shrimal, S. (2023). Immediate Impact of Tele Yoga Intervention on Physiological and Psychological Variables of COVID-19 Mild Symptomatic Patients: Two Groups Randomized Controlled Cross Over Study. J Indian Med Assoc, 121(12), 41-6.`,
  `Singphow, C., Purohit, S. P., Tekur, P., Bista, S., Panigrahy, S. N., Pradhan, B., & Raghuram, N. (2023). Effect of Yoga and Mindfulness Meditation on Quality of Life in Computer Users with Chronic Low Back Pain: A Prospective Randomized Active Control Trial. Journal of Applied Consciousness Studies, 11(1), 3-11.`,
  `Metri, K. G., Raghuram, N., Narayan, M., Sravan, K., Sekar, S., Bhargav, H., ... & Revankar, R. (2023). Impact of workplace yoga on pain measures, mental health, sleep quality, and quality of life in female teachers with chronic musculoskeletal pain: A randomized controlled study. Work, 76(2), 521-531.`,
  `Singh, J., Metri, K., Tekur, P., Mohanty, S., Singh, A., & Raghuram, N. (2023). Tele-yoga in the management of ankylosing spondylitis amidst COVID pandemic: A prospective randomized controlled trial. Complementary therapies in clinical practice, 50, 101672.`,
  `Maurya, S., Kumar, I. R., Singh, A., Mohanty, S., & Nagaratna, R. (2023). Evaluating the effect of yoga as an adjunct therapy in type 1 diabetes care: Study protocol for randomised control trial. Advances in Integrative Medicine, 10(1), 34-39.`,
  `Jain Shrimal, P., Maharana, S., Dave, A., Raghuram, N., & Thulasi, A. (2023). Efficacy of integrated tele-yoga intervention on physiological and psychological variables in asymptomatic COVID-19 positive patients: A confirmatory randomized control trial. Complementary Medicine Research, 30(2), 151-160.`,
  `Vijayakumar, V., Mavathur, R., Kannan, S., Sharma, M., Raguram, N., & Kuppusamy, M. (2023). Effect of yoga on reducing glycaemic variability in individuals with type 2 diabetes: a randomised controlled trial. Diabetes & Metabolism, 101457-101457.`,
  `Sharma, V., Vidyashree, M., Singh, D., Krishnamurthy, M., Kaligal, C., Kanthi, A., ... & Bathla, L. (2023). Cerebral hemodynamic changes after yoga intervention in patients with type-2 diabetes mellitus–A randomized control trial. Journal of the Neurological Sciences, 455.`,
  `Vijayakumar, V., Mavathur, R., Kannan, S., Sharma, M., Raguram, N., & Kuppusamy, M. (2023). Effect of yoga on reducing glycaemic variability in individuals with type 2 diabetes: a randomised controlled trial. Diabetes & Metabolism, 101457-101457.`,
  `Majumdar, V., Manjunath, N. K., Nagarathna, R., Panigrahi, S., Kanchi, M., Sahoo, S., ... & Nayak, R. (2023). Adjunct tele-yoga on clinical status at 14 days in hospitalized patients with mild and moderate COVID-19: A randomized control trial. Frontiers in Public Health, 11, 1054207.`,
  `Mishra, P., Harris, T., Greenfield, S. M., Hamer, M., Lewis, S. A., Singh, K., Nair, R., Mukherjee, S., Manjunath, N.K., Tandon, N., Kinra, S., Prabhakaran, D., & Chattopadhyay, K. (2023) Yoga Program for Type 2 Diabetes Prevention (YOGA-DP): a qualitative study exploring trial team's facilitators and challenges in conducting a feasibility trial in India. Diabetes Therapy, In Press.`,
  `Sujatha, K.J., Manjunath, N.K., Ahalya, P.G. (2023) Ayurveda, yoga, and acupuncture therapies in alleviating the symptom score among patients with spinal cord injury – A systematic review, Journal of Ayurveda and Integrative Medicine, 14, (4), 100749.`,
  `Manjunath, N. K. (2023). The Transformative Impact of the International Day of Yoga. International Journal of Yoga, 16(1), 1-4.`,
  `Majumdar, V., & Manjunath, N. K. (2023). New insights into yoga and mental health. Frontiers in Human Neuroscience, 17, 1239411.`,
  `R., & Rakshitha, N. (2023) Adjunct Tele-Yoga on Clinical Status at 14 Days in Hospitalized Mild and Moderate COVID-19 Patients: A Randomized Control Trial. Frontiers in Public Health, 11, 582.`,
  `Manjunath, N.K. (2023) Promoting personalised medicine through a Yoga-based lifestyle. International Journal of Yoga, 15, 173-174.`,
  `Nadholta P., Kumar K., Saha P. K., Suri V., Singh A., Anand A. (2023) Mind-body practice as a primer to maintain psychological health among pregnant women-YOGESTA-a randomized controlled trial. Frontiers in Public Health, 12;11;1201371.`,
  `Kishore, D.M., Divya, B. R., Manjunath, N. K. (2023) Exploring the deeper insights of vrikshasana. Journal of Applied Consciousness Studies, 11(1), 60-66.`,
  `Kishore, D. M., Bindu, S., & Manjunath, N.K. (2023) Smart Yoga instructor for guiding and correcting Yoga postures in real-time. International Journal of Yoga, 15, 254-261.`,
];

const publications2022 = [
  `Chobe, M. P., Nanjundaiah, R. M., & Chobe, S. (2022). Effect of Yoga on Sleep, Self-Esteem and Wellbeing Among Overweight and Obese–A Randomized Controlled Trial. Indian Journal of Science and Technology, 15(43), 2297-2302.`,
  `Sujatha, K. J., & Manjunath, N. K. (2024). Effectiveness of hyper and hypothermic application revulsively on range of motion, symptom score and quality of life in patients with cervical spondylosis: a randomized controlled trial. Advances in Traditional Medicine, 24(1), 171-177.`,
  `Kishore, D. M., Bindu, S., & Manjunath, N. K. (2022). Smart yoga instructor for guiding and correcting yoga postures in real time. International Journal of Yoga, 15(3), 254-261.`,
  `Krishna, D., Prasanna, K., Angadi, B., Singh, B. K., Anurag, S., & Deepeshwar, S. (2022). Heartfulness meditation alters electroencephalogram oscillations: An electroencephalogram study. International Journal of Yoga, 15(3), 205-214.`,
  `Singh, S. K., Singh, R., Rai, P. K., & Singh, A. K. (2022). The deadly duo of hypertension and diabetes in India: further affirmation from a new epidemiological study. J Assoc Physicians India, 70(1), 11-12.`,
  `Vaidya, V., Mavathur, D. R., & Basavapatna, D. B. R. (2022). Yoga as a life style prescription for the prakriti specific individuals to prevent disorders, lead healthy and happy life – A conceptual study. Journal of Ayurveda and Holistic Medicine (JAHM), 10(3).`,
  `Dines, V R Bharathi D, Kumaravelu R. (2022). Effect of yoga on wellbeing on children in shelter homes. International Journal of Creative Research Thoughts, 10, a868-a881.`,
  `Daga P, VR Bharathi D. (2022). A pilot study on the effect of mind sound resonance technique (MSRT) on cognitive functions in working population ranging between 30-60 years of age. International Journal of Creative Research Thoughts, 10, e264-e268.`,
  `Nagarathna, R., Sharma, M. N., Ilavarasu, J., Kulkarni, R., Anand, A., Majumdar, V., ... & Nagendra, H. R. (2022). Coping strategy, life style and health status during phase 3 of Indian national lockdown for COVID-19 pandemic—A pan-India survey. Frontiers in Public Health, 10, 814328.`,
  `Krishna D., Deepeshwar S., Prasanna K. (2022). Heartfulness meditation alters EEG Oscillations: an EEG study. International Journal of Yoga, 15(3), 205.`,
  `Budhi, B. R., Deepeshwar, S., & Angadi, B. (2022). Comparative Cross-sectional Study on Phasic Heart Rate Variability and Working Memory Among Young Adults. Advances in Mind-body Medicine, 36(4), 12-19.`,
  `Kishore, D. M., Divya BR., & Manjunath, N. K. (2022). Smart Yoga Instructor for Guiding and Correcting Yoga Postures in Real-Time. Journal of Applied Consciousness Studies, [In Press].`,
  `Kishore, D. M., Bindu, S., & Manjunath, N. K. (2022). Estimation of yoga postures using machine learning techniques. International Journal of Yoga, 15(2), 137.`,
  `Dhansoia, V., Majumdar, V., Manjunath, N. K., Gaharwar, U. S., & Singh, D. (2022). Breathing-Focused Yoga Intervention on Respiratory Decline in Chronically Pesticide- Exposed Farmers: A Randomized Controlled Trial. Frontiers in medicine, 9.`,
  `Ganesh, H. R. S., Subramanya, P., Rao, R. M., Vadiraj, H. S., & Udupa, V. (2022). Effects of an Integrated Yoga Program on Quality of Life, Spinal Flexibility, and Strength in Older Adults: A Randomized Control Trial. Advances in Mind-body Medicine, 36(1), 22-28.`,
  `Ganesh, H. S., Subramanya, P., Rao, M. R., Vadhiraj, H. S., & Udupa, V. (2022). Impact of yoga therapy in improving perceived stress, depression, and quality of life in elderly population: A randomized controlled trial. Journal of Applied Consciousness Studies, 10(1), 62.`,
  `Jintu Kurian, Ramesh Mavathur N (2022). Impact of improved sleep quality and mood on acute and sustained phases of insulin release among pre-diabetes: An observation from Yoga and Walking based RCT. Journal of Neurology and Clinical Neuroscience. [In Press].`,
  `Kurian, J., & Nanjundaiah, R. M. Assessing Risk and High Risk for Type 2 Diabetes Using Indian Diabetes Risk Score among Adults of Bengaluru: An Observation from A Sector Based Survey Study Conducted in Bengaluru. Int Clinc Med Case Rep Jour. 2022; 1 (8): 1-10.`,
  `Dwivedi Krishna, Deepeshwar Singh, Krishna Prasanna (2022). Association between impulsiveness and quality of life among heartfulness meditators: A cross-sectional study. Indian Journal of Mental Health. [Accepted]`,
  `Deepeshwar S., Budhi B.R., (2022). Slow yoga breathing improves mental load in working memory performance and cardiac activity among yoga practitioners. Frontiers in Psychology, 13:968858.`,
  `Verma, K., Deepeshwar, S., & Srivastava, A. (2022). The Impact of Complementary and Alternative Medicine on Insomnia: A Systematic Review. Cureus, 14(8):e28425. doi: 10.7759/cureus.28425.`,
  `Verma, K., Deepeshwar, S., & Srivastava, A. (2022). Sleep Disorders and its Consequences on Biopsychosocial Health: A Narrative Review. Yoga Mimansa [In Press].`,
  `Putchavayala, C. K., Deepeshwar S., & Sashidharan, R. K. (2022). Correlation between excessive smartphone usage, basic psychological needs, and mental health of university students. Journal of Mental Health and Human Behaviour, [In Press]`,
  `Putchavayala, C. K., Deepeshwar S., & Sashidharan, R. K. (2022). A perspective of yoga on smartphone addiction: A narrative review. Journal of Family Medicine and Primary Care, 11(6), 2284-2291.`,
  `Putchavayala, C. K., Rajesh, S. K., & Deepeshwar S. (2022). Development, Content Validation, and Feasibility of Yoga Module for Smartphone Addiction. Advances in Mind-body Medicine, 36(2), 14-22.`,
  `Vaidya, V., Mavathur, D. R., & Basavapatna, D. B. R. (2022). Yoga As A Lifestyle Prescription For The Prakrti Specific Individuals To Prevent Disorders, Lead Healthy And Happy Life-A Conceptual Study. Journal of Ayurveda and Holistic Medicine (JAHM), 10(3).`,
  `Basu-Ray, I., Metri, K., Khanra, D., Revankar, R., Chinnaiyan, K. M., Raghuram, N., Mishra, M. C., Patwardhan, B., Manjunath, N.K, Basavaraddi, I. V., Anand, A., Reddy, S., Deepak, K. K., Levy, M., Theus, S., Levine, G. N., Cramer, H., Fricchione, G. L., & Hongasandra, N. R. (2022). A narrative review on yoga: a potential intervention for augmenting immunomodulation and mental health in COVID-19. BMC complementary medicine and therapies, 22(1), 191. https://doi.org/10.1186/s12906-022-03666-2.`,
  `Krishna D., Deepeshwar S., Krishna P. (2022). Efficacy of yoga practices on emotion regulation and mindfulness in type 2 diabetes mellitus patients. Yoga Mīmāṃsā 24-30.`,
  `Amit K., Deepeshwar S., Chidananda K. (2022). A cross-sectional study on impulsiveness, mindfulness, and World Health Organization quality of life in heartfulness meditators. Yoga Mīmāṃsā 12-17.`,
  `Kanthi, A., Deepeshwar S., Manjunath, N. K., & Nagarathna, R. (2022). Changes in Electrical Activities of the Brain Associated with Cognitive Functions in Type 2 Diabetes Mellitus: A Systematic Review. Clinical EEG and Neuroscience, 15500594221089106.`,
  `Sujatha, K. J., & Manjunath, N. K. (2022). A Review on Hydrotherapy Practices in Ancient India. Journal of Complementary and Alternative Medical Research, 17(1), 22-29. https://doi.org/10.9734/jocamr/2022/v17i130323`,
  `Vidyashree, M., Deepeshwar, S., Nagarathna, R., Manjunath, N. K., Kaligal, C., Kanthi, A., ... & Sharma, V. K. (2022). Transcranial doppler studies in type 2 diabetes mellitus: a systematic review. Diabetes Research and Clinical Practice, 186, 109808.`,
  `Dhansoia, V., Majumdar, V., Manjunath, N. K., Gaharwar, U. S., & Deepeshwar S. (2022). Breathing-Focused Yoga Intervention on Respiratory Decline in Chronically Pesticide- Exposed Farmers: A Randomized Controlled Trial. Frontiers in medicine, 9.`,
  `Deepeshwar, S., & Kumar, D. (2022). Beneficial Effect of Yoga-based Lifestyle Intervention on Anxiety and Depression in Young adults: Non-randomized Controlled Study. International Journal of Medicine and Public Health, 12(1).`,
  `Nagarathna, R., Sharma, M. N., Ilavarasu, J., Kulkarni, R., Anand, A., Majumdar, V., ... & Nagendra, H. R. (2022). Coping Strategy, LifeStyle and Health Status During Phase 3 of Indian National Lockdown for COVID-19 Pandemic—A Pan-India Survey. Frontiers in Public Health, 10.`,
  `Yamuna, U., Majumdar, V., & Saoji, A. A. (2022). Effect of Yoga on homocysteine level, symptomatology and quality of life in industrial workers with Chronic Venous Insufficiency: Study protocol for a randomized controlled trial. Advances in Integrative Medicine.`,
];

const publications2021 = [
  `Nair, R. G., Vasudev, M. M., & Mavathur, R. (2021). Role of Yoga and Its Plausible Mechanism in the Mitigation of DNA Damage in Type-2 Diabetes: A Randomized Clinical Trial. Annals of Behavioral Medicine.`,
  `Swathi, P. S., Bhat, R., & Saoji, A. A. (2021). Effect of trataka (Yogic Visual Concentration) on the performance in the corsi-block tapping task: A repeated measures study. Frontiers in Psychology, 12.`,
  `Mooventhan, A., Bharti, S., Nivethitha, L., & Manjunath, N. K. (2021). Effect of ice massage to head and spine on blood pressure and heart rate variability in patients with hypertension: A pilot study. International Journal of Therapeutic Massage & Bodywork, 14(3), 22.`,
  `Majumdar, V., Snigdha, A., Manjunath, N. K., Nagarathna, R., Mavathur, R., Singh, A., ... & Nagendra, H. R. (2021). Study protocol for yoga-based lifestyle intervention for healthy ageing phenotype in the older adults (yHAP): a two-armed, waitlist randomised controlled trial with multiple primary outcomes. BMJ open, 11(9), e051209.`,
  `Patil, S. S., Singh, A., Nagarathna, R., & Nagendra, H. R. (2021). Development and validation of vikrti measuring scale–A pilot study. INDIAN JOURNAL OF AYURVEDA & INTEGRATIVE MEDICINE KLEU, 2(2), 78.`,
  `Kaur, N., Majumdar, V., Nagarathna, R., Malik, N., Anand, A., & Nagendra, H. R. (2021). Diabetic yoga protocol improves glycemic, anthropometric and lipid levels in high risk individuals for diabetes: a randomized controlled trial from Northern India. Diabetology & Metabolic Syndrome, 13(1), 1-10.`,
  `Saoji, A. A., Swathi, P. S., & Raghavendra, B. R. (2021). The role of trataka in ameliorating visual strain and promoting psychological well-being during prolonged use of digital displays: A randomized controlled trial. Work, (Preprint), 1-7.`,
  `Patil, S. S., Raghuram, N., Singh, A., Rajesh, S. K., Ahmed, S., & Hongasandra, N. (2021). A Prospective Study on Type-2 Diabetic Complications and Efficacy of Integrated Yoga: A Pan India 2017. Annals of Neurosciences, 28(1-2), 21-28.`,
  `Gaihre, A., Sasidharan, R. K., Bista, S., Poudel, L., Khadka, R., Rajbhandari, B. (2021). Impact of Yoga and Physical Exercise on psychological Wellbeing among Substance Abusers: A Randomized Controlled Trial. Journal of Complementary and Integrative Medicine.`,
  `Gaihre, A., Sasidharan, R. K., Bista, S., Khadka, R., Poudel, L. (2021). Stress and Sleep in Addictive Behaviour and Application of Yoga-based Interventions. One Health Journal of Nepal, [In Press].`,
  `Bista S., Jasti N., Bhargav H., Sinha S., Gupta S., Prahlada R., Chaturvedi SK., Gangadhar BN. (2021). Yoga based lifestyle intervention for type 2 diabetes: a prospective single blind randomized controlled study. Frontiers Public Health, [In Press].`,
  `Bista S., Jasti N., Bhargav H., Sinha S., Gupta S., Chaturvedi SK., Gangadhar BN. (2021). Medical Application of Gas Discharge Visualization Imaging in Health and Disease: A Systematic review of Literature. Alternative Therapies in Health and Medicine, [In Press].`,
  `Maity, K., Majumdar, V., Singh, A., & Anand, A. (2020). A recipe for Policy research in AYUSH educational and research programs. J Integr Med Case Rep, 2(1), 1-3.`,
  `Jogdand, R. P., Sunuwar, S. M., Singh, A., & Nagrathna, R. Integrated Approach of Yoga Therapy towards Chronic Low Back Pain: A Case Report. Physiotherapy, 13, 14.`,
  `Tripathi, S., Metri, K. G., Sharma, P., Singh, A., & Sharma, A. (2021). Ayurveda and Yoga Therapy for Allergy and Asthma. In the Textbook of Allergy for the Clinician (pp. 376–380). CRC Press.`,
  `Anusuya, U. S., Mohanty, S., & Saoji, A. A. (2021). Effect of Mind Sound Resonance Technique (MSRT–A yoga-based relaxation technique) on psychological variables and cognition in school children: A randomized controlled trial. Complementary Therapies in Medicine, 56, 102606.`,
  `Swathi, P. S., Raghavendra, B. R., & Saoji, A. A. (2021). Health and therapeutic benefits of Shatkarma: A narrative review of scientific studies. Journal of Ayurveda and Integrative Medicine.`,
  `Dhargave, P., Nalini, A., Nagarathna, R., Sendhilkumar, R., James, T. T., Raju, T. R., & Sathyaprabha, T. N. (2021). Effect of yoga and physiotherapy on pulmonary functions in children with Duchenne muscular dystrophy–A comparative study. International Journal of Yoga, 14(2), 133.`,
  `Sharma, K., Battu, P., Anand, A., Nagarathna, R., Kaur, N., Malik, N., ... & Nagendra, H. R. (2020). Management of Type II Diabetes by Modulating the Modifiable Risk Factors: A Future Roadmap for Prevention of Cerebrovascular Complications. Annals of Neurosciences, 27(3-4), 266-272.`,
  `Nagarathna, R., Madhava, M., Patil, S. S., Singh, A., Perumal, K., Ningombam, G., & Nagendra, A. H. R. (2021). Cost of Management of Diabetes Mellitus: A Pan India Study. Annals of Neurosciences, 0972753121998496.`,
  `Patil, S. S., Nagarathna, R., & Nagendra, H. R. (2021). A self-rating scale to measure states of tridosha in children. Indian Journal of Ayurveda & Integrative Medicine KLEU, 2(1), 3.`,
  `Nagarathna Raghuram, V. R., Vijaya Majumdar, R. S., Amit S., S. P., Akshay Anand, I. J., & Srikanta Bhaskara, J. R. B. (2021). Effectiveness of a yoga-based lifestyle protocol (YLP) in preventing diabetes in a high-risk Indian cohort: a multicenter cluster-randomized controlled trial (NMB-trial). Frontiers in Endocrinology, 12.`,
  `Maity, K., Nagarathna, R., Anand, A., Patil, S. S., Singh, A., Rajesh, S. K., ... & Nagendra, H. R. (2020). Sleep Disorders in Individuals With High Risk for Diabetes in Indian Population. Annals of Neurosciences, 27(3-4), 183-189.`,
  `Mehra, P., Anand, A., Nagarathna, R., Kaur, N., Malik, N., Singh, A., ... & Nagendra, H.`,
  `Mehra, P., Anand, A., Nagarathna, R., Kaur, N., Malik, N., Singh, A., ... & Nagendra, H. R. (2021). Role of Mind–Body Intervention on Lipid Profile: A Cross-sectional Study. International Journal of Yoga, 14(2), 168-172.`,
  `Venkatrao, M., Nagarathna, R., Majumdar, V., Patil, S. S., Rathi, S., & Nagendra, H. (2021). Prevalence of Obesity in India and Its Neurological Implications: A Multifactor Analysis of a Nationwide Cross-Sectional Study. Annals of Neurosciences, 0972753120987465.`,
  `Mohanty, S., Nagarathna, R., Metri, K., Patil, S., Kumar, S., Singh, A., & Nagendra, H. R. (2021). Trends of Hypertension and Neurological Diseases in India: A Nationwide Survey Reporting the Distribution Across Geographical Areas. Annals of Neurosciences, 0972753120987457.`,
  `Nagarathna, R., Kumar, S., Anand, A., Acharya, I. N., Singh, A. K., Patil, S. S., ... & Nagendra, H. R. (2021). Effectiveness of Yoga Lifestyle on Lipid Metabolism in a Vulnerable Population—A Community Based Multicenter Randomized Controlled Trial. Medicines, 8(7), 37.`,
  `Nagarathna, R., Anand, A., Nanda, S., Patil, S. S., Singh, A., Rajesh, S. K., & Nagendra, H. R. (2020). Is the Indian dietary pattern associated with type 2 diabetes? A Pan-India randomized cluster sample study. Annals of Neurosciences, 27(3-4), 175-182.`,
  `Chatterjee, S., Mondal, S., & Deepeshwar, S. (2021). Effect of 12 Weeks of Yogic Training on Neurocognitive Variables: A Quasi-Experimental Study. Indian Journal of Community Medicine, 46(1), 112–116.`,
  `Sivapuram, M. S., Srivastava, V., Kaur, N., Anand, A., Nagarathna, R., Patil, S., ... & Nagendra, H. R. (2021). Ayurveda Body–Mind Constitutional Types and Role of Yoga Intervention Among Type 2 Diabetes Mellitus Population of Chandigarh and Panchkula Regions. Annals of Neurosciences, 09727531211000040.`,
  `Manjunath, N. K., Majumdar, V., Rozzi, A., Huiru, W., Mishra, A., Kimura, K., ... & Nagendra, H. R. (2021). Health Perceptions and Adopted Lifestyle Behaviors During the COVID-19 Pandemic: Cross-National Survey. JMIR Formative Research, 5(6), e23630.`,
  `Majumdar, V., Snigdha, A., Manjunath, N. K., Nagarathna, R., Mavathur, R., Singh, A., ... & Nagendra, H. R. (2021). Study protocol for yoga-based lifestyle intervention for healthy ageing phenotype in the older adults (yHAP): a two-armed, waitlist randomised controlled trial with multiple primary outcomes. BMJ Open, 11(9), e051209.`,
  `Nagarathna, R., Kurian, J., Vijayakumar, V., Nagendra, H. R., & Mavathur, R. N. (2021). 1160-P: Does Yoga Reduce the Risk of Conversion from Prediabetes to Diabetes by Improving Acute Phase Insulin Release? An Observation from an RCT. Diabetes.`,
  `Kurian, J., Vijayakumar, V., Mooventhan, A., & Mavathur, R. (2021). Effect of yoga on plasma glucose, lipid profile, blood pressure and insulin requirement in a patient with type 1 diabetes mellitus. Journal of Complementary and Integrative Medicine.`,
  `Manjunath, N. K., Majumdar, V., Rozzi, A., Huiru, W., Misra, A., Kimura, K., Nagarathna, R., & Nagendra, H. R. (2021). A Cross-National Survey on Health Perceptions and Adopted Lifestyle-Related Behavior during the COVID-19 Pandemic. JMIR Formative Research, 5(6):e23630.`,
  `Nivethitha, L., Mooventhan, A., & Manjunath, N. K. (2021). Evaluation of cardiovascular functions during the practice of different types of yogic breathing techniques. International Journal of Yoga, 14(2), 158.`,
  `Acharya, R., Mahapatra, G. P., & Acharya, K. (2021). Yoga and Wellness—Key Insights from the Study on General Yoga Programme. NHRD Network Journal, 14(1), 51-63.`,
  `Surendra Singh Sankhala, Nagendra, H. R., & Deepeshwar, S. (2021). Changes in Bioenergy Field of Children with Autism Following Non-pharmacological Interventions: A Randomized Controlled Study. International Journal of Medicine and Public Health, 11(1):57-62.`,
];

const publications2020 = [
  `Chobe, S., Chobe, M., Metri, K., Patra, S. K., & Nagaratna, R. (2020). Impact of Yoga on cognition and mental health among elderly: A systematic review. Complementary Therapies in Medicine, 52, 102421.`,
  `Vegaraju, P., Hankey, A., & Mavathur, R. (2020). Variations in microbial growth rates explained by traditional knowledge. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 8(1), 33.`,
  `Arumugam, G., Nagarathna, R., Majumdar, V. et al. (2020). Yoga-based lifestyle treatment and composite treatment goals in Type 2 Diabetes in a rural South Indian setup- retrospectivity. Scientific Reports, 10, 6402. https://doi.org/10.1038/s41598-020-63133-1`,
  `Mishra, S. K., H. S., Nagarathna, R., Anand, A., Bhutan, P., Sivapuram, P., Singh, S., & Nagendra, H. R. (2020). Knowledge, Attitude, and Practice of Yoga in Rural and Urban India, KAPY 2017: A Nationwide Cluster Sample Survey. Medicines, 7(2), 8. https://doi.org/10.3390/medicines7020008`,
  `Mishra, A., Podder, V., Modgil, S., Khosla, R., Anand, A., Nagarathna, R., ... & Nagendra, H. R. (2020). Perceived stress and depression in prediabetes and diabetes in an Indian population—A call for a mindfulness-based intervention. General Hospital Psychiatry, 64, 127-128.`,
  `Mishra, A., Chawathey, S. A., Mehra, P., Nagarathna, R., Anand, A., Rajesh, S. K., ... & Nagendra, H. R. (2020). Perceptions of benefits and barriers to Yoga practice across rural and urban India: Implications for workplace Yoga. Work, 65(4), 721-732.`,
  `Mishra, A., Podder, V., Modgil, S., Khosla, R., Anand, A., Nagarathna, R., Malhotra, R., & Nagendra, H. R. (2020). Higher Perceived Stress and Poor Glycemic Changes in Prediabetics and Diabetics Among Indian Population. Journal of Medicine and Life, 13(2).`,
  `Sharma, K. S., Pailoor, S., Choudhary, N. R., Bhat, P., & Shrestha, S. (2020). Integrated Yoga Practice in Cardiac Rehabilitation Program: A Randomized Control Trial. The Journal of Alternative and Complementary Medicine.`,
  `Mohanty, S., Singh, A., & Avti, P. (2020). Integrative Medicine as a Panpharmacon for COVID-19 Pandemic: A Call for Global Advocacy. Annals of Neurosciences, 1-3.`,
  `Nadholta, P., Bali, P., Singh, A., & Anand, A. (2020). Potential benefits of yoga in pregnancy-related complications during the COVID-19 pandemic and implications for working women. Work, (Preprint), 1-11.`,
  `Kishore, D. M., Manjunath, N. K., Metri, K., Babu, N., & Basavaraj, A. (2020). Depression, Anxiety and Stress among Nurses Working in a Tertiary Care Centre in Southern India. Asian Journal of Medicine and Health, 18(9), 147-152.`,
  `Papillon, P., & Rajesh, S. K. (2020). Relationship between Spiritual Health, Mindfulness and Emotion Regulation among French Emerging Adults. Cellmed, 10(1), 3-1.`,
  `Chauhan, R. S., & Rajesh, S. K. (2020). The Role of Yoga Intervention in the Treatment of Allergic Rhinitis: A Narrative Review and Proposed Model. Cellmed, 10(3), 25-1.`,
  `Jasti, N., Bhargav, H., Babu, H., & Nagarathna, R. (2020). Challenging Case in Clinical Practice: Yoga Therapy for Parkinson's disease. Alternative and Complementary Therapies, 26(2), 57-60.`,
  `Hamza, A., Jagannathan, A., Hegde, S., Katla, N., Bhide, S. R. U., Thirthallli, J., & Nagendra, H. R. (2020). Development and testing of an audio-visual self-help yoga manual for Indian caregivers of persons with schizophrenia living in the community: A single-blind randomized controlled trial. International Journal of Yoga, 13(1), 62.`,
  `Nagarathna, R., Bali, P., Anand, A., Srivastava, V., Patil, S., Sharma, G., ... & Nagendra, H. R. (2020). Prevalence of diabetes and its determinants in the young adults Indian population-call for yoga intervention. Frontiers in Endocrinology, 11, 507064.`,
  `Mishra, A., Podder, V., Modgil, S., Khosla, R., Anand, A., Nagarathna, R., ... & Nagendra, H. R. (2020). Perceived stress and depression in prediabetes and diabetes in an Indian population—A call for a mindfulness-based intervention. General Hospital Psychiatry, 64, 127-128.`,
  `Mishra, A. S., H. S., V., Nagarathna, R., Anand, A., Bhutani, H., Sivapuram, M. S., & Nagendra, H. R. (2020). Knowledge, Attitude, and Practice of Yoga in Rural and Urban India, KAPY 2017: A Nationwide Cluster Sample Survey. Medicines, 7(2), 8.`,
  `Nagarathna, R., Tyagi, R., Battu, P., Singh, A., Anand, A., & Nagendra, H. R. (2020). Assessment of risk of diabetes by using Indian Diabetic risk score (IDRS) in the Indian population. Diabetes Research and Clinical Practice, 162, 108088.`,
  `Mishra, A., Podder, V., Modgil, S., Khosla, R., Anand, A., Nagarathna, R., ... & Nagendra, H. R. (2020). Higher perceived stress and poor glycemic changes in prediabetics and diabetics among Indian population. Journal of Medicine and Life, 13(2), 132.`,
  `Nagendra, H. R. (2020). Yoga for COVID-19. International Journal of Yoga, 13(2), 87–88.`,
  `Nagendra, H. R. (2020). Mind: The Source of Wellness and Illness. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 8(2), 39.`,
  `Podder, V., Srivastava, V., Kumar, S., Nagarathna, R., Sivapuram, M. S., Kaur, N., & Nagendra, H. R. (2020). Erratum: Prevalence and Awareness of Stroke and Other Comorbidities Associated with Diabetes in Northwest India. Journal of Neurosciences in Rural Practice, 11(3), e1.`,
  `Nagarathna, R., Kaur, N., Anand, A., Sharma, K., Dada, R., Sridhar, P., ... & Nagendra, H. R. (2020). Distribution of glycated haemoglobin and its determinants in Indian young adults. Diabetes Research and Clinical Practice, 159, 107982.`,
  `Mishra, A., Chawathey, S. A., Mehra, P., Nagarathna, R., Anand, A., Rajesh, S. K., & Nagendra, H. R. (2020). Perceptions of benefits and barriers to Yoga practice across rural and urban India: Implications for workplace Yoga. Work, 65(4), 721-732.`,
  `Krishna, D., Deepeshwar, S., & Devi, B. (2020). Yoga-Based Relaxation Technique Facilitates Sustained Attention in Patients with Low Back Pain: A Pilot Study. Advances in Mind-body Medicine, 34(3), 11-17.`,
  `Arumugam, G., Nagarathna, R., Majumdar, V., Singh, M., Srinivasalu, R., Sanjival, R., & Nagendra, H. R. (2020). Yoga-based lifestyle treatment and composite treatment goals in type 2 Diabetes in a rural South Indian setup-a retrospective study. Scientific Reports, 10(1), 1-10.`,
  `Nagarathna, R., Nagendra, H. R., & Majumdar, V. (2020). A perspective on yoga as a preventive strategy for coronavirus disease 2019. International Journal of Yoga, 13(2), 89.`,
  `Venkatrao, M., Nagarathna, R., Patil, S. S., Singh, A., Rajesh, S. K., & Nagendra, H. (2020). A composite of BMI and waist circumference may be a better obesity metric in Indians with high risk for type 2 diabetes: an analysis of NMB-2017, a nationwide cross-sectional study. Diabetes Research and Clinical Practice, 161, 108037.`,
  `Vegaraju, P., Hankey, A., & Ramesh, M. N. (2020). Variations in microbial growth rates explained by traditional knowledge. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 8(1), 33.`,
  `Chobe, M. P., Nanjundaiah, R. M., & Chobe, S. (2020). Designing and validation of a yoga-based module for obesity with metabolic comorbidities. Journal of Complementary & Integrative Medicine, [Ahead of Print].`,
  `Venugopal, V., Ramesh, M. N., Nagarathna, R., Ranjani, H., Anjana, R. M., & Mohan, V. (2020). Potential role of yoga in management of the ominous octet: Adding a new facet to type 2 diabetes management and prevention. Journal of Diabetology, 12(1), 10.`,
  `Chattopadhyay, K., Mishra, P., Manjunath, N. K., Harris, T., Hamer, M., Greenfield, S., & Kinra, S. (2020). Development of a Yoga programme for type-2 diabetes prevention (YOGA-DP) among high-risk people in India. Frontiers in Public Health, 8, 688.`,
  `Balakrishnan, R., Nanjundaiah, R. M., Nirwan, M., Sharma, M. K., Ganju, L., Saha, M., & Ramarao, N. H. (2020). Design and validation of integrated yoga therapy module for antarctic expeditioners. Journal of Ayurveda and Integrative Medicine, 11(2), 97-100.`,
  `Chattopadhyay, K., Mishra, P., Singh, K., Harris, T., Hamer, M., Greenfield, S. M., ... & Prabhakaran, D. (2020). Yoga programme for type-2 diabetes prevention (YOGA-DP) among high risk people in India: a multicentre feasibility randomised controlled trial protocol. BMJ Open, 10(9), e036277.`,
  `Sankhala, S. S., Deepeshwar, S., Kotikalapudi, S., & Chatterjee, S. (2020). Determining bioenergy field of autistic and normal healthy children: an electrophotonic imaging study. International Journal of Community Medicine and Public Health, 7(4), 1547.`,
];

const publications2019 = [
  `Vegaraju, P., Hankey, A., & Mavathur, R. (2019). Understanding Jyotisha astrology I: Theoretical aspects as a holistic spiritual science. International Journal of Jyotish Research, 4(2), 19-24.`,
  `Vegaraju, P., Hankey, A., & Mavathur, R. (2019). Influence of eclipses on microbiological growth rates. International Journal of Jyotish Research, 4(2), 15-18.`,
  `Khadka, R., Bista, S., Baskota, S., Poudel, L., & Gurung, M. (2019). Sleep Quality among College Students in Kathmandu Valley, Nepal. Nepal Medical Journal, 2(2), 1–4.`,
  `Jasti, N., Bista, S., Bhargav, H., Sinha, S., Gupta, S., Chaturvedi, S. K., Gangadhar, B. N. (2019). Medical applications of Infrared thermography: A narrative review. Journal of Stem Cells, 14(1), 35-53.`,
  `Bista, S., Jasti, N., Bhargav, H. (2019). "How to Interpret Integral Area Variable of Gas Discharge Visualization?" – Response to the Letter to Editor. International Journal of Yoga - Philosophy Psychology and Parapsychology, 7, 24-25.`,
  `Sharma, K. S., Choudhary, N. R., & Subramanya, P. (2019). Evidence base of yoga studies on cardiovascular health: A bibliometric analysis. International Journal of Yoga, 12(2), 162.`,
  `Sharma, S., Pailoor, S., Ram, N. C., & Shrestha, S. (2019). Development of a yoga module targeting cardiovascular health for patients with post-myocardial left ventricular dysfunction in India. Complementary Therapies in Medicine, 42, 170-177.`,
  `Kurian, J., Raghvendra Bhat. (2019). Impact of State Anxiety, Mindfulness on Cardiac Autonomic Variables in Healthy Adults: A Correlational Study. Journal of Heart Health, 5(2), 1-4.`,
  `Shambhu, D. S., Rajesh, S. K., & Subramanya, P. (2018). Relation between Mindfulness and Depression among Adolescent Orphans. Journal of Clinical & Diagnostic Research, 12(11), VC01-VC04.`,
  `Pradnya, D., Nalini, A., Nagarathna, R., Raju, T. R., Sendhilkumar, R., Meghana, A., & Sathyaprabha, T. N. (2019). Effect of yoga as an add-on therapy in the modulation of heart rate variability in children with duchenne muscular dystrophy. International Journal of Yoga, 12(1), 55.`,
  `179. Goyal, A. K., Bhadada, S., Malik, N., Anand, A., Kumar, R., Bammidi, S., & Pal, i. D. K. (2019). Guinness world record attempt as a method to pivot the role of Yoga in Diabetes management. Annals of Neurosciences, 26(1):21-24.`,
  `Milbury, K., Liao, Z., Shannon, V., Mallaiah, S., Nagarathna, R., Li, Y., ... & Cohen, L. (2019). Dyadic yoga program for patients undergoing thoracic radiotherapy and their family caregivers: results of a pilot randomized controlled trial. Psycho‐Oncology, 28(3), 615-621.`,
  `Nagendra, H. R. (2018). Insights from vedic wisdom for future research in yoga. Journal of Applied Consciousness Studies, 6(2), 59-60.`,
  `Nagendra, H. R. (2019). Seeing the truth: Yoga for health and harmony. Journal of Applied Consciousness Studies, 7(1), 1-2.`,
  `Nagendra, H. R., & Anand, A. (2019). Indian PM's evidence-based wellness approach inspires politico-scientific activism. Annals of Neurosciences, 26(1), 3-3.`,
  `Vasudha, M. S., Manjunath, N. K., & Nagendra, H. R. (2019). Lifestyle-A common denominator for the onset and management of migraine headache: Complementing traditional approaches with scientific evidence. International Journal of Yoga, 12(2), 146.`,
  `Singh, A. K., Kaur, N., Kaushal, S., Tyagi, R., Mathur, D., Sivapuram, M. S., & Khosla, R. (2019). Partitioning of radiological, stress and biochemical changes in pre-diabetic women subjected to Diabetic Yoga Protocol. Diabetes & Metabolic Syndrome: Clinical Research & Reviews, 13(4), 2705-2713.`,
  `Nagendra, H. R. (2019). Exploration of Prana: The future of yoga research. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 7(2), 27-28.`,
  `Nagarathna, R., Rajesh, S. K., Amit, S., Patil, S., Anand, A., & Nagendra, H. R. (2019). Methodology of Niyantrita Madhumeha Bharata Abhiyaan-2017, a nationwide multicentric trial on the effect of a validated culturally acceptable lifestyle intervention for primary prevention of diabetes: Part 2. International Journal of Yoga, 12(3), 193-205.`,
  `Nagendra, H. R., Nagarathna, R., Rajesh, S. K., Amit, S., Telles, S., & Hankey, A. (2019). Niyantrita Madhumeha Bharata 2017, methodology for a nationwide diabetes prevalence estimate: Part 1. International Journal of Yoga, 12(3), 179.`,
  `Kumar, P. V. G., Deshpande, S., & Nagendra, H. R. (2019). Traditional practices and recent advances in NadiPariksha: a comprehensive review. Journal of Ayurveda and Integrative Medicine, 10(4), 308-315.`,
  `Nagarathna, R., Tyagi, R., Kaur, G., Vendan, V., Acharya, I. N., Anand, A., & Nagendra, H. R. (2019). Efficacy of a validated yoga protocol on dyslipidemia in diabetes patients: NMB-2017 India trial. Medicines, 6(4), 100.`,
  `De, A., Mondal, S., & Deepeshwar, S. (2019). Single Bout of Yoga Practices (Asana) Effect on Low Frequency (LF) of Heart Rate Variability–A Pilot Study. International Journal of Medicine and Public Health, 9(4), 160-163.`,
  `Arumugam, G., Raghuram, N., Majumdar, V., Singh, M., Ram, V. S., & Hongasandra Ramarao, N. (2019). Effectiveness of Yoga-Based Lifestyle Treatment in Achieving Composite Treatment Goals for Type 2 Diabetes in a Rural Set Up of South India-A Retrospective Study.`,
  `Nagarathna, R., Ram, C. V. S., Rajesh, S. K., Singh, A., Majumdar, V., Patil, S., & Nagendra, H. R. (2019). 129-OR: Diabetes Prevention through Yoga-Based Lifestyle: A Pan-India Randomized Controlled Trial. American Diabetes Association.`,
  `Rathi, S., & Nagaratna, R. (2019). Feasibility study of integrated yoga module in overweight & obese adolescents. International Journal of Complementary and Alternative Medicine, 12(4), 129-133.`,
  `Vegaraju, P., Hankey, A., & Ramesh, M. N. (2019). Understanding Jyotisha astrology I: Theoretical aspects as a holistic spiritual science. International Journal of Jyotish Research, 4(2), 19-24.`,
  `Vhavle, S. P., Rao, R. M., & Manjunath, N. K. (2019). Comparison of yoga versus physical exercise on executive function, attention, and working memory in adolescent schoolchildren: A randomized controlled trial. International Journal of Yoga, 12(2), 172.`,
  `Venugopal, V., Ramesh, M. N., Manjunath, N. K., & Kannan, S. (2019). Reduced glycemic variability with yoga in patients with type 2 diabetes mellitus: results of a pilot study. Journal of Diabetes Science and Technology, 13(4), 803-804.`,
  `Vyas, S. C., Mooventhan, A., & Manjunath, N. K. (2019). Effect of hot arm and foot bath on heart rate variability and blood pressure in healthy volunteers. Journal of Complementary and Integrative Medicine, 17(1), 20180181.`,
  `Loganathan, N., Aruchunan, M., & Manjunath, N. K. (2019). Effects of yoga for cardiovascular and respiratory functions: a pilot study. Integrative Medicine Research, 8(3), 180.`,
  `Monali, M., Srinivasan, T. M., Ebnezar, J., Mohanty, P. P., Deepeshwar, S., & Pradhan, B. (2019). Efficacy of Yoga as an add-on to Physiotherapy in the management of Patients with Paraplegia: Randomized Controlled Trial. Journal of Clinical and Diagnostic Research, 13(3), KC01-KC06.`,
  `Chandra, B. H., Ramesh, M. N., & Nagendra, H. R. (2019). Effect of yoga on immune parameters, cognitive functions, and quality of life among HIV-positive children/adolescents: A pilot study. International Journal of Yoga, 12(2), 132.`,
  `Harichandra, B. P., Ramesh, M.N., & Nagendra, H. R. (2019). Human immunodeficiency virus/acquired immune deficiency syndrome: A relook into the challenge from an integrated, yogic perspective. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 7(1), 3.`,
  `Venugopal, V., Ramesh, M. N., Manjunath, N. K., & Nagaratna, R. (2019). Yoga as a safer form of physical activity in type 2 diabetes mellitus: The bidirectional property of yoga in establishing glucose homeostasis. International Journal of Yoga, 12(2), 174.`,
  `Deepeshwar, S., Nagendra, H.R., & Rana, B. B. (2019). Evolution from four mental states to the highest state of consciousness: A neurophysiologic basis of meditation as defined in yoga texts. Progress in Brain Research, 244, 31-83.`,
  `Telles, S., Deepeshwar, S., Naveen, K. V., Pailoor, S., Singh, N., & Pathak, S. (2019). P300 and Heart Rate Variability Recorded Simultaneously in Meditation. Clinical EEG and Neuroscience, 50(3), 161-171.`,
  `Budhi, R. B., Payghan, S., & Deepeshwar, S. (2019). Changes in lung function measures following Bhastrika Pranayama (bellows breath) and running in healthy individuals. International Journal of Yoga, 12(3), 233.`,
  `Nagarathna, R., Venkat, Ram., Vijaya, Majumdar., Rajesh, Sasidharan Kusala, Amit Singh, Suchitra Patil, Akshay Anand, Judu Ilavarasu, Srikanta Bhaskara, & Nagendra, H. R. Primary Prevention of Diabetes through Yoga Lifestyle: A Multicenter Parallel Randomized Controlled Trial in India. Diabetes Care. Impact Factor 13.`,
  `Arumugam, G., Nagaratna, R., Majumdar, V., Singh, M., Ram, V. S., & Nagendra, H. R. (2019). Effectiveness of Yoga-Based Lifestyle Treatment in Achieving Composite Treatment Goals for Type 2 Diabetes in a Rural Set Up of South India-A Retrospective Study.`,
  `Saoji, A. A., Raghavendra, B. R., & Manjunath, N. K. (2019). Effects of yogic breath regulation: A narrative review of scientific evidence. Journal of Ayurveda and Integrative Medicine, 10(1), 50-58.`,
];

const publications2018 = [
  `Patel, N. K., Nivethitha, L., & Mooventhan, A. (2018). Effect of a yoga based meditation technique on emotional regulation, self-compassion and mindfulness in college students. Explore, 14(6), 443-447.`,
  `Nagarathna, R., & Chaku, R. (2018). Based Applied Psychophysiology: Yoga for Women's Health. In Research-Based Perspectives on the Psychophysiology of Yoga (pp. 121-150). IGI Global.`,
  `Vineetha, V., Vinutha, S., Karthiyanee, K., Kumar, A., Nagendra, H. R., & Ganpat, T. S. (2018). Yoga therapy for sustained attention. Archives of Medicine and Health Sciences, 6(1), 70-72.`,
  `Suchitra, S. P., Nagarathna, R., & Nagendra, H. R. (2018). Measuring Tridoshas in Cancer Patients-A Pilot Study. Journal of Cancer Biology, 6(2), 1118.`,
  `Nagarathna, R., Bhargav, H., & Nagendra, H. R. (2018). Yoga based lifestyle for type 2 diabetes: need for a nationwide movement to control type 2 diabetes. Journal of Diabetes & Metabolic Disorders & Control, 5(5), 188-193.`,
  `Chhugani, K. J., Metri, K., Babu, N., & Nagendra, H. R. (2018). Effects of Integrated Yoga Intervention on Psychopathologies and Sleep Quality among Professional Caregivers of Older Adults with Alzheimer's disease: A Controlled Pilot Study. Advances in Mind-Body Medicine, 32(3), 18-22.`,
  `Tembe, B. L., Choudhary, P., & Nagendra, H. R. (2018). A statistical model for quantification of Panchakośas of large collective entities. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 6(2), 74-93.`,
  `Rathi, S. S., Joshi, R. R., Tekur, P., Nagarathna, R., & Nagendra, H. R. (2018). Effect of the Yoga on Anthropometric and Physical Assessments in Adolescent Obesity. A Case Report. Endocrinol Metab Syndr, 7(292), 2161-1017.`,
  `Rathi, S. S., Nagaratna, R., Tekur, P., Joshi, R. R., & Ramarao, N. H. (2018). Development and validation of integrated yoga module for obesity in adolescents. International Journal of Yoga, 11(3), 231-238.`,
  `Venugopal, V., Ramesh, M. N., Aruchunan, M., & Manjunath, N. K. (2018). Moving beyond HbA1c and plasma glucose levels to understand glycemic status in type 2 diabetes. Journal of Diabetes, 10(7), 609-610.`,
  `Vijayakumar, V., Shankar, N. R., Ramesh, M. N., Mooventhan, A., Anju, S., & Manjunath, N. K. (2018). Diet enriched with fresh coconut decreases blood glucose levels and body weight in normal adults. Journal of Complementary and Integrative Medicine, 15(3).`,
  `Das, S. V., Mooventhan, A., & Manjunath, N. K. (2018). A Study on Immediate Effect of Cold Abdominal Pack on Blood Glucose Level and Cardiovascular Functions in Patients with Type 2 Diabetes Mellitus. Journal of Clinical & Diagnostic Research, 12(3).`,
  `Jogdand, R., Mooventhan, A., & Manjunath, N. K. (2018). Effect of mud pack to eyes on psychological variables in healthy volunteers: a pilot randomized controlled trial. Journal of Complementary and Integrative Medicine, 16(1).`,
  `Manjuladevi, T., Mooventhan, A., & Manjunath, N. K. (2018). Immediate effect of hot chest pack on cardio-respiratory functions in healthy volunteers: A randomized cross-over study. Advances in Integrative Medicine, 5(2), 63-68.`,
  `Nandini, B., Mooventhan, A., & Manjunath, N. K. (2018). Add-on Effect of Hot Sand Fomentation to Yoga on Pain, Disability, and Quality of Life in Chronic Neck Pain Patients. Explore, 14(5), 373-378.`,
  `Goley, A., Mooventhan, A., & Manjunath, N. K. (2018). Comparative study on effect of neutral spinal bath and neutral spinal spray on blood pressure, heart rate and heart rate variability in healthy volunteers. Journal of Complementary and Integrative Medicine, 16(2).`,
  `Satish, V., Rao, R. M., Manjunath, N. K., Amritanshu, R., Vivek, U., Shreeganesh, H. R., & Deepashree, S. (2020). Yoga versus physical exercise for cardio-respiratory fitness in adolescent school children: a randomized controlled trial. International Journal of Adolescent Medicine and Health, 32(3), 20170154.`,
  `Saoji, A. A., Raghavendra, B. R., Madle, K., & Manjunath, N. K. (2018). Additional Practice of Yoga Breathing with Intermittent Breath Holding Enhances Psychological Functions in Yoga Practitioners: A Randomized Controlled Trial. Explore, 14(5), 379-384.`,
  `Saoji, A. A., Raghavendra, B. R., Rajesh, S. K., & Manjunath, N. K. (2018). Immediate Effects of Yoga Breathing with Intermittent Breath Holding on Response Inhibition amongst Healthy Volunteers. International Journal of Yoga, 11(2), 99-104.`,
  `Govindaraj, R., Naik, S., Manjunath, N. K., Mehta, U. M., Gangadhar, B. N., & Varambally, S. (2018). Add-on yoga therapy for social cognition in schizophrenia: A pilot study. International Journal of Yoga, 11(3), 242-244.`,
  `Singh, A., Tekur, P., Nagaratna, R., & Nagendra, H. R. (2018). Impact of Yoga on Blood Glucose Level among Patients with Type 2 Diabetes Mellitus: A Multicentre Controlled Trial. Journal of Stem Cells, 13(1), 49-55.`,
  `Singh, A., Tekur, P., Metri, K., Nagarathna, R., & Nagendra, H. R. (2018). Yoga in Type 2 Diabetes Mellitus. Journal of Stem Cells; Hauppauge, 13(3), 149-155.`,
  `Madhusmita, M., Srinivasan, T. M., Ebnezar, J., Nagendra, H. R., & Mohanty, P. P. (2018). Effect of Integrated Yoga as an Add-On to Physiotherapy on Walking Index, ESR, Pain, and Spasticity among Subjects with Traumatic Spinal Cord Injury: A Randomized Control Study. Journal of Stem Cells, 13(1).`,
  `Madhusmita, M., Ebnezar, J., Srinivasan, T. M., Metri, K. G., & Mohanty, P. P. (2018). Integrating Yoga in Rehabilitation of Spinal Cord Injury to Improve Benefits of Stem Cell Therapies. Journal of Stem Cells, 13(4), 203-212.`,
  `Venugopal, V., Ramesh, M. N., Mooventhan, A., & Manjunath, N. K. (2018). Moving beyond HbA1C and plasma glucose levels to understand the glycemic status in type 2 diabetes mellitus. Journal of Diabetes, 10(7), 609-610.`,
  `Eraballi, A., Raghuram, N., Ramarao, N. H., Pradhan, B., & Rao, P. V. (2018). Yoga Based Lifestyle Program in Improving Quality of Life after Coronary Artery Bypass Graft Surgery: A Randomised Controlled Trial. Journal of Clinical & Diagnostic Research, 12(3).`,
  `Vasudha, M. S., Manjunath, N. K., & Nagendra, H. R. (2018). Changes in MIDAS, Perceived Stress, Frontalis Muscle Activity and Non-Steroidal Anti-Inflammatory Drugs Usage in Patients with Migraine Headache without Aura following Ayurveda and Yoga Compared to Controls: An Open Labeled Non-Randomized Study. Annals of Neurosciences, 25(4), 250-260.`,
  `Sharma, V. M., Manjunath, N. K., Nagendra, H. R., & Ertsey, C. (2018). Combination of Ayurveda and Yoga therapy reduces pain intensity and improves quality of life in patients with migraine headache. Complementary Therapies in Clinical Practice, 32, 85-91.`,
  `Balakrishnan, R., Ramesh, M. N., & Manjunath, N. K. (2018). Voluntarily induced vomiting–A yoga technique to enhance pulmonary functions in healthy humans. Journal of Ayurveda and Integrative Medicine, 9(3), 213-216.`,
  `Raghavendra Swamy, B., Ramesh, M. N., & Krishnamurthy, M. N. (2018). Design and Validation of Integrated Yoga Therapy module for Antarctic Expeditioners. Journal of Ayurveda and Integrative Medicine, 11(2), 97-100.`,
  `Varghese, M. P., Balakrishnan, R., & Pailoor, S. (2018). Association between a guided meditation practice, sleep and psychological well-being in type 2 diabetes mellitus patients. Journal of Complementary and Integrative Medicine, 15(4).`,
  `Saoji, A. A., Raghavendra, B. R., & Manjunath, N. K. (2018). Immediate Effects of Yoga Breathing with Intermittent Breath Retention on the Autonomic and Cardiovascular Variables amongst Healthy Volunteers. Indian Journal of Physiology and Pharmacology, 62(1), 41-50.`,
  `Saoji, A. A., Raghavendra, B. R., Rajesh, S. K., & Manjunath, N. K. (2018). Immediate effects of yoga breathing with intermittent breath holding on response inhibition among healthy volunteers. International Journal of Yoga, 11(2), 99-104.`,
  `Nalgirkar, S. P., Vinchurkar, S. A., Saoji, A. A., & Mohanty, S. (2018). Yoga as a Therapeutic Intervention in the Management of Dysfunctional Uterine Bleeding: A Controlled Pilot Study. Journal of Mid-Life Health, 9(1), 8-13.`,
  `Patil, N. J., Nagaratna, R., Tekur, P., Manohar, P. V., Bhargav, H., & Patil, D. (2018). A randomized trial comparing effect of yoga and exercises on quality of life in among nursing population with chronic low back pain. International Journal of Yoga, 11(3), 208-214.`,
  `Metri, K. G., Pradhan, B., Singh, A., & Nagendra, H. R. (2018). Effect of 1-week yoga-based residential program on cardiovascular variables of hypertensive patients: A Comparative Study. International Journal of Yoga, 11(2), 170-174.`,
  `Nagendra, H. R. (2018). Cancer: Prevention and rehabilitation through yoga. International Journal of Yoga, 11(1), 1-2.`,
  `Vijayakumar, V., Mooventhan, A., & Nagaratna, R. (2018). Influence of Time of Yoga Practice and Gender Differences on Blood Glucose Levels in Type 2 Diabetes Mellitus and Normal Healthy Adults. Explore, 14(4), 283-288.`,
  `Verma, M., Bhargav, H., Varambally, S., Raghuram, N., & Gangadhar, B. N. (2018). Effect of integrated yoga on anti-psychotic induced side effects and cognitive functions in patients suffering from schizophrenia. Journal of Complementary and Integrative Medicine, 16(1).`,
  `Amaravathi, E., Ramarao, N. H., Nagaratna, R., & Pradhan, B. (2018). Yoga-based postoperative cardiac rehabilitation program for improving quality of life and stress levels: Fifth-year follow-up through a randomized controlled trial. International Journal of Yoga, 11(1), 44-52.`,
  `Wang, Y., Metri, K. G., Singh, A., & Raghuram, N. (2018). Immediate effect of mind sound resonance technique (MSRT - a yoga-based relaxation technique) on blood pressure, heart rate, and state anxiety in individuals with hypertension: a pilot study. Journal of Complementary & Integrative Medicine, 17(2).`,
  `Venugopal, V., Balakundi, M., & Metri, K. G. (2019). Challenges faced in diabetes risk prediction among an indigenous South Asian population in India using the Indian Diabetes Risk Score. Public Health, 176, 114-117.`,
  `Deepeshwar, S., Tanwar, M., Kavuri, V., Budhi, R. B. (2018). Effect of Yoga Based Lifestyle Intervention on Patients with Knee Osteoarthritis: A Randomized Controlled Trial. Frontiers in Psychiatry, 9, 180.`,
  `Nivethitha, L., Mooventhan, A., Manjunath, N. K., Bathala, L., Sharma, V. K. (2018). Cerebrovascular Hemodynamics during the Practice of Bhramari Pranayama, Kapalbhati and Bahir-Kumbhaka: An Exploratory Study. Applied Psychophysiology and Biofeedback, 43(1), 87-92.`,
];

const publications2017 = [
  `Suman, B., Praerna, B., Kashinath, M., & Hemant, B. (2017). Insomnia in patients suffering from chronic medical illnesses: prevalence and impact of IAYT. Open Journal of Endocrine and Metabolic Diseases, 7(10), 191.`,
  `Bhargav, H., Srinivasan, T., Bista, S., Mooventhan, A., Suresh, V., Hankey, A., & Nagendra, H. (2017). Acute effects of mobile phone radiations on subtle energy levels of teenagers using electrophotonic imaging technique: A randomized controlled study. International Journal of Yoga, 10(1), 16.`,
  `Rshikesan, P. B., Subramanya, P., & Deepeshwar, S. (2017). Sleep quality and body composition variations in obese male adults after 14 weeks of yoga intervention: A randomized controlled trial. International Journal of Yoga, 10(3), 128-137.`,
  `Raghunandan, K. G. M., Promila, C., Nagarana, R., & Nagendra, H. R. (2017). Effect of a tailor-made yoga based breathing practice for enhancement of sleep in IT professionals with sleep problems: A randomized control trial. Accepted in Advances in Mind Body Interventions.`,
  `Kakde, N., Metri, K. G., Varambally, S., Nagaratna, R., & Nagendra, H. R. (2017). Development and validation of a yoga module for Parkinson disease. Journal of Complementary and Integrative Medicine, 14(3).`,
  `Rao, J., Metri, K. G., Singh, A., & Nagaratna, R. (2016). Effect of integrated approach of Yoga therapy on chronic constipation. Voice of Research, 5, 23-26.`,
  `Rani, Satyapriya M., Kashianth G. M., & Nagaratna, R. Impact of yoga on mental health among women with hypothyroidism. Accepted for publication in the Journal of Complementary and Integrative Medicine.`,
  `Karpakam, Satyapriya M., & Kashinath G. M. Impact of Yoga on psychopathologies & sleep quality among mothers of children with intellectual disability: A pilot study. Accepted for Publication in African Journal of Traditional, Complementary and Alternative Medicine.`,
  `Hegde, A., Metri, K., Chwadhary, P., Babu, N., & Nagendra, H. R. (2017). Effects Of Yoga On Cardiac Health, Sleep Quality, Mental Health And Quality Of Life Of Elderly Individuals With Chronic Ailments: A Single Arm Pilot Study. Voice Research, 6(1), 22-26.`,
  `Kuloor, A., Kumari, S., & Metri, K. (2019). Impact of yoga on psychopathologies and quality of life in persons with HIV: a randomized controlled study. Journal of Bodywork and Movement Therapies, 23(2), 278-283.`,
  `Kirti, Kashinath, & Natesh, Nagendra. Efficacy of yoga on mental health and sleep quality of professional caregivers of patients with Alzheimer's disease. Accepted for publication in Journal of Advances in Mind Body Medicine.`,
  `Bhat, R. K., Ramesh, M. N., & Srinivasan, T. M. (2017). Diabetes mellitus type 2 and yoga: Electro photonic imaging perspective. International Journal of Yoga, 10(3), 152.`,
  `Nivethitha, L., Manjunath, N. K., & Mooventhan, A. (2017). Heart rate variability changes during and after the practice of bhramari pranayama. International Journal of Yoga, 10(2), 99-102.`,
  `Nagashree, R. S., Manjunath, N. K., Indu M., Ramesh, M. N., & Venugopal, V. (2017). Effect of a diet enriched with fresh coconut saturated fats on plasma lipids and erythrocyte fatty acid composition in normal adults. Journal of the American College of Nutrition, 36(5), 330-334.`,
  `Kumar, R., Mooventhan, A., & Manjunath, N. K. (2017). Immediate effect of needling at CV-12 (Zhongwan) acupuncture point on blood glucose level in patients with type 2 diabetes mellitus: A pilot randomized placebo-controlled trial. Journal of Acupuncture and Meridian Studies, 10(4), 240-244.`,
  `Nagasukeerthi, P., Mooventhan, A., & Manjunath, N. K. (2017). Short-term effect of add on bell pepper (Capsicum annuum var. grossum) juice with integrated approach of yoga therapy on blood glucose levels and cardiovascular functions in patients with type 2 diabetes mellitus: A randomized controlled study. Complementary Therapies in Medicine, 34, 42-45.`,
  `Vhavle, S., Rao, M. R., Manjunath, N. K., & Ram, A. R. (2017). Effects of a Yoga Program on Health, Behavior and Learning Ability in School Children: A Single Arm Observational Study. International Journal of Complementary & Alternative Medicine, 5(1), 00138.`,
  `Karmani, S., & Govindaraj, R. (2017). SU105. Mechanisms of Yoga in Schizophrenia: Focus on Mirror Neuron Activity. Schizophrenia Bulletin, 43(Suppl 1), S199.`,
  `Singh, A., Tekur, P., Metri, K., Bhargav, H., Raghuram, N., & Hongasandra Ramarao, N. (2017). Effect of a Residential integrated yoga program on blood glucose levels, physiological variables, and anti-diabetic medication score of patients with type 2 diabetes mellitus: a retrospective study. Integrative Medicine International, 4(3-4), 181-186.`,
  `Hari Chandra, B. P., & Ramesh, M. N. (2017). "Paṁcakośas and Gaṇapati – Annamayakośa and its role in managing the immune system with special reference to HIV/AIDS". International Journal of Research – Grantālayāh, 5(7), 262-269.`,
  `Vijayakumar, V., Ramesh, M. N., & Sharma, M. (2018). Ethnic Disparity and Increased Prevalence of Type 2 Diabetes among South Asians: Aetiology and Future Implications for Diabetes Prevention and Management. Current Diabetes Reviews, 14(6), 518–522.`,
  `Ragavendrasamy, B., Ramesh, M. N., & Manjunath, N. K. (2017). Nāsadiya Sūktam: The earliest cosmology on origins of life. International Journal of Yoga-Philosophy, Psychology and Parapsychology, 5(1), 24-25.`,
  `Minhas, G., Mathur, D., Ragavendrasamy, B., Sharma, N. K., Paanu, V., & Anand, A. (2017). Hypoxia in CNS pathologies: emerging role of miRNA-based Neurotherapeutics and yoga based alternative therapies. Frontiers in Neuroscience, 11, 386, 1-15.`,
  `Hakked, C. S., Balakrishnan, R., & Krishnamurthy, M. N. (2017). Yogic breathing practices improve lung functions of competitive young swimmers. Journal of Ayurveda and Integrative Medicine, 8(2), 99-104.`,
  `Saoji, A., Mohanty, S., & Vinchurkar, S. A. (2017). Effect of a single session of a yogic meditation technique on cognitive performance in medical students: A randomized crossover trial. Journal of Religion and Health, 56(1), 141-148.`,
  `Patil, N. J., Patil, D., Tekur, P., Venkatarathnamma, P. N., & Manohar, P. V. (2017). Sciatica (Gridhrasi) - An Ayurveda Perspective. Journal of Ayurveda and Integrated Medical Sciences, 2(5), 102-112.`,
  `Angadi, P., Jagannathan, A., Thulasi, A., Kumar, V., Umamaheshwar, K., & Raghuram, N. (2017). Adherence to yoga and its resultant effects on blood glucose in type 2 diabetes: a community-based follow-up study. International Journal of Yoga, 10(1), 29-36.`,
  `Shetty, B., Shetty, G. B., Manjunath, N. K., & Shantaram, M. (2017). Effect of Integrated Yoga Practices on Anthropometric Measures, Serum Lipid Profile and Oxidative Stress Status in Obese Adults. Indian Journal of Applied Research, 7(1), 37-39.`,
  `Nivethitha, L., Mooventhan, A., Manjunath, N. K., Bathala, L., & Sharma, V. K. (2017). Cerebrovascular hemodynamics during pranayama techniques. Journal of Neurosciences in Rural Practice, 8(1), 60-63.`,
  `Mooventhan, A., & Nivethitha, L. (2017). Evidence based effects of yoga practice on various health related problems of elderly people: A review. Journal of Bodywork and Movement Therapies, 21(4), 1028-1032.`,
  `Nivethitha, L., Mooventhan, A., & Manjunath, N. K. (2017). A Pilot Study on Evaluating Cardiovascular Functions during the Practice of Bahir Kumbhaka (External Breath Retention). Advances in Integrative Medicine, 4(1), 7-9.`,
  `Milbury, K., Kavanagh, A., Meng, Z., Chen, Z., Chandwani, K. D., Garcia, K., ... & Cohen, L. (2017). Depressive symptoms and positive affect in Chinese and United States breast cancer survivors: a cross-cultural comparison. Supportive Care in Cancer, 25, 2103-2109.`,
  `Shastri, V., Hankey, A., Sharma, B., & Patra, S. (2017). Investigation of yoga pranayama and vedic mathematics on mindfulness, aggression and emotion regulation. International Journal of Yoga, 10(3), 138–144.`,
  `Shastri, V., Hankey, A., Sharma, B., & Patra, S. (2017). Impact of pranayama and vedic mathematics on math anxiety and cognitive skills. Yoga Mimamsa, 49(2), 53–62.`,
  `John, J. M., Navneetham, J., & Nagendra, H. R. (2017). Development of a Trans-disciplinary Intervention Module for Adolescent Girls on Self-awareness. Journal of Clinical and Diagnostic Research, 11(8), VC07-VC10.`,
  `Rao, R. M., Vadiraja, H. S., Nagarathna, R., Gopinath, K. S., Patil, S., Diwakar, R. B., & Nagendra, H. R. (2017). Effect of yoga on sleep quality and neuroendocrine immune response in metastatic breast cancer patients. Indian Journal of Palliative Care, 23(3), 253-260.`,
  `Vadiraja, H. S., Rao, R. M., Nagarathna, R., Nagendra, H. R., Patil, S., Diwakar, R. B., & Ajaikumar, B. S. (2017). Effects of yoga in managing fatigue in breast cancer patients: A randomized controlled trial. Indian Journal of Palliative Care, 23(3), 247-252.`,
  `Rao, R. M., Raghuram, N., Nagendra, H. R., Kodaganur, G. S., Bilimagga, R. S., Shashidhara, H. P., & Rao, N. (2017). Effects of a yoga program on mood states, quality of life, and toxicity in breast cancer patients receiving conventional treatment: A randomized controlled trial. Indian Journal of Palliative Care, 23(3), 237-246.`,
  `Nagendra, H. R. (2017). Integrating yoga in cancer care: Scope and challenges. Indian Journal of Palliative Care, 23(3), 223-224.`,
  `Eraballi, A., & Pradhan, B. (2017). Quality of life improvement with rehabilitation according to the constitution of the World Health Organization for coronary artery bypass graft surgery patients: A descriptive review. An International Quarterly Journal of Research in Ayurveda, 38(3-4), 102-107.`,
];

const publications2016 = [
  `Bhargav, H., Manjunath, N. K., Varambally, S., Mooventhan, A., Bista, S., Singh, D., Harleen, C., Venkata Subramanian, G., Srinivasan, T. M., & Nagendra, H. R. (2016). Acute effects of 3G mobile phone radiations on frontal haemodynamic during a cognitive task in teenagers and possible protective value of Om chanting. International Review of Psychiatry, 28(3), 288–298.`,
  `Bhat, S., Varambally, S., Karmani, S., Govindaraj, R., & Gangadhar, B. N. (2016). Designing and validation of a yoga-based intervention for obsessive compulsive disorder. International Review of Psychiatry, 28(3), 327-333.`,
  `Gurelman, A., Bhargav, H., Metri, K., & Nagarathna, R. (2016). Effect of yoga as a stress reduction technique for metacognition, mindfulness and psychological status in healthy women. European Journal of Integrative Medicine.`,
  `Roopa, L., & Bhargav, H. (2016). The effect of MSRT on sleep, cognition and psychological states of cancer patients undergoing chemotherapy. European Journal of Integrative Medicine.`,
  `Suresh, V., Bhargav, H., & Hankey, A. (2016). Protective value of nadi shuddhi pranayama against effects of mobile phone induced electromagnetic radiations on subtle energy levels of adolescents: a randomized cross over pilot study. International Journal of Yoga.`,
  `Shastri, V., Hankey, A., Sharma, B., & Patra, S. (2016). Efficacy of Vedic mathematics and yogic breathing in school children: A pilot study. International Journal of Yoga - Philosophy, Psychology and Parapsychology, 4(1), 16–23.`,
  `Venugopal, V., & Ragavendrasamy, B. (2016). Increased Prevalence of Type 2 Diabetes in South Asian Population - A Genetic Perspective. Journal of Diabetes, Metabolic Disorders & Control, 3(3), 68-69.`,
  `Nagashree, R. S., Manjunath, N. K., Ramesh, M. N., Venugopal, V., Sreedhar, P., Sood, A., & Nagendra, H. R. (2016). Impact of Fresh Coconut on Dietary Intake: A Randomized Comparative Trial. International Journal of Education and Research in Health Sciences, 2(4), 64-68.`,
  `Kumar, G., Jagannathan, A., & Sridhar, M. K. (2016). Importance of adherence to yoga in management of type 2 diabetes. International Journal of Diabetes in Developing Countries, 36(3), 376-377.`,
  `Saoji, A. A. (2016). Yoga: A strategy to cope up stress and enhance well being among medical students. North American Journal of Medical Sciences, 8(4), 200-202.`,
  `Chobe, S., Bhargav, H., Nagarathna, R., & Garner, C. (2016). Effect of integrated Yoga and Physical therapy on audiovisual reaction time, anxiety and depression in patients with chronic multiple sclerosis: a pilot study. Journal of Complementary and Integrative Medicine, 13(3), 301-309.`,
  `Bhargav, P., Bhargav, H., Nagarathna, R., & Garner, C. (2016). Immediate effect of two yoga-based relaxation techniques on cognitive functions in patients suffering from relapsing remitting multiple sclerosis: A comparative study. International Review of Psychiatry, 28(3), 299-308.`,
  `Ranjita, R., Hankey, A., Nagendra, H. R., & Mohanty, S. (2016). Yoga-based pulmonary rehabilitation for the management of dyspnea in coal miners with chronic obstructive pulmonary disease: A randomized controlled trial. Journal of Ayurveda and Integrative Medicine, 7(3), 158-166.`,
  `Bapat, R. A., Kumari, S., & Nagendra, H. R. (2016). The effect of one month yoga intervention on perceived stress and anxiety in pregnant women. Journal Women's Health, Issues Care, 5(4), 1-3.`,
  `Raghavendra, P., Shetty, P., Shetty, S., Manjunath, N. K., & Saoji, A. A. (2016). Effect of high-frequency yoga breathing on pulmonary functions in patients with asthma: A randomized clinical trial. Annals of Allergy, Asthma & Immunology, 117(5), 550-551.`,
  `Mohanty, S., Mooventhan, A., & Manjunath, N. K. (2016). Effect of Needling at CV-12 (Zhongwan) on Blood Glucose Levels in Healthy Volunteers: A Pilot Randomized Placebo Controlled Trial. Journal of Acupuncture and Meridian Studies, 9(6), 307-310.`,
  `Mooventhan, A., & Nivethitha, L. (2016). Effects of ice massage of the head and spine on heart rate variability in healthy volunteers. Journal of Integrative Medicine, 14(4), 306-310.`,
  `Amaranath, B., Nagendra, H. R., & Deshpande, S. (2016). Effect of integrated yoga module on personality of home guards in Bengaluru: A randomized control trial. Journal of Ayurveda and Integrative Medicine, 7(1), 44-47.`,
  `Nilakanthan, S., Metri, K., Nagarathna, R., & Nagendra, H. R. (2016). Effect of 6 months intense Yoga practice on lipid profile, thyroxine medication and serum TSH level in women suffering from hypothyroidism: A pilot study. Journal of Complementary and Integrative Medicine, 13(2), 189-193.`,
  `Ratcliff, C. G., Milbury, K., Chandwani, K. D., Chaoul, A., Perkins, G., Nagarathna, R., & Arun, B. (2016). Examining Mediators and Moderators of Yoga for Women with Breast Cancer Undergoing Radiotherapy. Integrative Cancer Therapies, 15(3), 250-262.`,
  `Naoroibam, R., Metri, K. G., Bhargav, H., Nagarathna, R., & Nagendra, H. R. (2016). Effect of Integrated Yoga (IY) on psychological states and CD4 counts of HIV-1 infected Patients: A Randomized controlled pilot study. International Journal of Yoga, 9(1), 57-61.`,
  `Lu, Q., You, J., Kavanagh, A., Warmoth, K., Meng, Z., Chen, Z., & Nagarathna, R. (2016). Differences in quality of life between American and Chinese breast cancer survivors. Supportive Care in Cancer, 24(9), 3775-3782.`,
  `Kumar, V., Jagannathan, A., Philip, M., Thulasi, A., Angadi, P., & Nagarathna, R. (2016). Role of yoga for patients with type II diabetes mellitus: A systematic review and meta-analysis. Complementary Therapies in Medicine, 25, 104-112.`,
  `Sukanya, R., Nagarathna, R., Sandhya, R., & Nagendra, H. R. (2016). Integrated yoga therapy for mastalgia. International Journal of Medical Science and Public Health, 5(2), 162.`,
  `Singh, K., Bhargav, H., & Srinivasan, T. M. (2016). Effect of uninostril yoga breathing on brain hemodynamics: A functional near-infrared spectroscopy study. International Journal of Yoga, 9(1), 12-19.`,
  `Govindaraj, R., Karmani, S., Varambally, S., & Gangadhar, B. N. (2016). Yoga and physical exercise–a review and comparison. International Review of Psychiatry, 28(3), 242-253.`,
  `Govindaraj, R., Varambally, S., Manjunath, N. K., & Gangadhar, B. N. (2016). Designing and validation of a yoga-based intervention for schizophrenia. International Review of Psychiatry, 28(3), 323-326.`,
  `Das, M., Deepeshwar, S., Subramanya, P., & Manjunath, N. K. (2016). Influence of Yoga-Based Personality Development Program on Psychomotor Performance and Self-efficacy in School Children. Frontiers in Pediatrics, 4(62), 1-8.`,
  `Shetty, P., Mooventhan, A., & Nagendra, H. R. (2016). Does short-term lemon honey juice fasting have effect on lipid profile and body composition in healthy individuals? Journal of Ayurveda and Integrative Medicine, 7(1), 11-13.`,
  `Bhargav, H., Varambally, S., Mooventhan, A., Bista, S., Singh, D., Chhabra, H., & Venkatasubramanian, G. (2016). Acute effects of 3G mobile phone radiations on frontal haemodynamics during a cognitive task in teenagers and possible protective value of Om chanting. International Review of Psychiatry, 28(3), 288-298.`,
  `Raghunath, S., Nagarathna, R., Ravi, S., Ram, N. C., & Ram, A. (2016). Effect of yoga therapy on quality of life and depression in premenopausal nursing students with mastalgia: A randomized controlled trial with 6-month follow-up. Journal of Health Research and Reviews, 3(2), 48-54.`,
  `Rshikesan, P. B., & Subramanya, P. (2016). Effect of Integrated Approach of Yoga Therapy on Male Obesity and Psychological Parameters—A Randomized Controlled Trial. Journal of Clinical and Diagnostic Research, 10(10), KC01–KC06.`,
  `Rshikesan, P. B., Subramanya, P., & Nagarathna, R. (2016). Yoga Practice for Reducing the Male Obesity and Weight Related Psychological Difficulties—A Randomized Controlled Trial. Journal of Clinical and Diagnostic Research, 10(11), OC22–OC28.`,
  `Sharma, M. K., & Bhargav, H. (2016). Yoga as an adjunct modality for promotion of healthy use of information technology. International Journal of Yoga, 9(2), 176-177.`,
  `Amaranath, B., Nagendra, H. R., & Deshpande, S. (2016). Effect of integrated Yoga module on positive and negative emotions in Home Guards in Bengaluru: A wait list randomized control trial. International Journal of Yoga, 9(1), 35-43.`,
  `Ranjita, R., Badhai, S., Hankey, A., & Nagendra, H. R. (2016). A randomized controlled study on assessment of health status, depression, and anxiety in coal miners with chronic obstructive pulmonary disease following yoga training. International Journal of Yoga, 9(2), 137-144.`,
];

const publications2015 = [
  `Govindaraj, R., Varambally, S., & Gangadhar, B. N. (2015). Yoga for schizophrenia: Patients' perspective. International Journal of Yoga, 8(2), 139-141.`,
  `Deb Kumar, Hemant Bhargav, Kashinath Metri. Immediate effect of bowl sound therapy and M.S.R.T. on state anxiety and psychosomatic performance in health volunteering. (2015). IJOYPPP.`,
  `Devi, T. M., Ganpat, T. S., Kumar, S., & Ramarao, N. H. (2015). Surya namaskara training for enhancing selective attention in orphan boys: A randomized control study. Saudi Journal of Sports Medicine, 15(1), 37.`,
  `Dushyant, S., Padmini, T., Ganpat, T. S., & Ramarao, N. H. (2015). An innovative approach in health sciences: Yoga for obesity. Archives of Medicine and Health Sciences, 3(1), 162.`,
  `Ertsey, C., Csepany, E., Manjunath, N.K., Vasudha, M.S., Nagendra, H.R., Jankovic, S.V., Pakpour, A., Srivastava, A. (2015). The comprehensive headache-related quality of life questionnaire: status report. Cephalalgia, 35, 181-182.`,
  `Tikhe, A. S., Subramanya, P., Metri, K., Ganpat, T. S., & Ramarao, N.H. (2015). Yoga: Managing overweight in mid-life T2DM. Journal of Mid-life Health, 6(2), 81-84.`,
  `Telles, S., Singh, N., Naveen, K. V., Deepeshwar, S., Subramanya, P., Manjunath, N. K., & Balkrishna, A. (2015). A fMRI Study of Stages of Yoga Meditation Described in Traditional Texts. Journal of Psychology & Psychotherapy, 5(3), 1-6.`,
  `Prashanth, S., Nagendra, H. R., Gangadhara, Varma, B. R., Subramanya, P. (2015). Effect of naturopathy and yoga intervention on patients with type II diabetes mellitus. Online International Interdisciplinary Research Journal, 5(1), 320-329.`,
  `Rao, R. M., Raghuram, N., Nagendra, H. R., Usharani, M. R., Gopinath, K. S., Diwakar, R. B., ... & Rao, N. (2015). Effects of an integrated yoga program on self-reported depression scores in breast cancer patients undergoing conventional treatment: a randomized controlled trial. Indian Journal of Palliative Care, 21(2), 174.`,
  `Amaranath, B., Nagendra, H. R., & Deshpande, S. (2015). Effect of Integrated Yoga Module on Perceived Stress, Verbal Aggression and Satisfaction with Life in Home Guards in Bangalore–A Wait List Randomized Control Trial. Journal of Ayurveda and Holistic Medicine, 3(5), 21-38.`,
  `Rakhshani, A., Nagarathna, R., Sharma, A., Singh, A., & Nagendra, H. R. (2015). A Holistic Antenatal Model Based on Yoga, Ayurveda, and Vedic Guidelines. Health Care for Women International, 36(3), 256-275.`,
  `Bhargav, H., Nagarathna, R., & Nagendra, H. R. (2015). Yoga Based Lifestyle for Prevention of Medical Emergencies. International Journal of Emergency Mental Health and Human Resilience, 17(3), 661-666.`,
  `Kavuri, V., Nagarathna, R., Malamud, A., & Selvan, S. R. (2015). Irritable Bowel Syndrome: Yoga as Remedial Therapy. Evidence-Based Complementary and Alternative Medicine, 2015, 398156.`,
  `Rakhshani, A., Nagarathna, R., Mhaskar, R., Mhaskar, A., Thomas, A., & Gunasheela, S. (2015). Effects of yoga on utero-fetal-placental circulation in high-risk pregnancy: a randomized controlled trial. Advances in Preventive Medicine, 2015.`,
  `Kavuri, V., Selvan, P., Malamud, A., Nagarathna, R., & Selvan, S. R. (2015). Remedial yoga module remarkably improves symptoms in irritable bowel syndrome patients: A 12-week randomized controlled trial. European Journal of Integrative Medicine, 7(6), 595-608.`,
  `Bhargav, H., Jagannathan, A., Nagarathna, R., Srinivasan, T. M., & Gangadhar, B. N. (2015). Schizophrenia Patient or Spiritually Advanced Personality? A Qualitative Case Analysis. Journal of Religion and Health, 54(5), 1901-1918.`,
  `Mondal, J., Balakrishnan, R., & Krishnamurthy, M. N. (2015). Regulation of autonomic functions following two high frequency yogic breathing techniques. CellMed, 5(1), 4-1.`,
  `Subramanya, P., & Telles, S. (2015). Performance in the Stroop Task and Simultaneously Recorded Heart Rate Variability before and after Meditation, Supine Rest and No-Intervention. International Journal of Brain and Cognitive Sciences, 4(1), 8-14.`,
  `Nagarathna, R., Rao, R. M., & Nagendra, H. R. (2015). Integrating Yoga in Oncology: Is the wait over? Indian Journal of Surgical Oncology, 6(4), 325.`,
  `Deepeshwar, S., Vinchurkar, S. A., Naveen, K. V., & Nagendra, H. R. (2015). Hemodynamic responses on prefrontal cortex related to meditation and attentional task. Frontiers in Systems Neuroscience, 8, 252.`,
  `Ramakrishna, B. R., Kishore, K. R., Vaidya, V., Nagaratna, R., & Nagendra, H. R. (2014). Standardization of Sushrutha Prakriti inventory–SPI an Ayurveda based personality assessment tool with scientific methods. Journal of Ayurveda and Holistic Medicine, 2.`,
  `Patil, N. J., Nagarathna, R., Tekur, P., Patil, D. N., Nagendra, H. R., & Subramanya, P. (2015). Designing, validation, and feasibility of integrated yoga therapy module for chronic low back pain. International Journal of Yoga, 8(2), 103.`,
  `Mohanty, S., Metri, K., Nagarathna, R., & Nagendra, H. R. (2015). Immediate Effect of Mind Sound Resonance Technique (MSRT - A Yogic Relaxation Technique) On Cognitive Function in Type 2 Diabetes. Voice of Research, 4(1), 44-45.`,
  `Isha, S., Deshpande, S., Ganpat, T. S., & Nagendra, H. R. (2015). Yoga module for heart disease. Journal of Mahatma Gandhi Institute of Medical Sciences, 20(2), 153-156.`,
  `Jagannathan, A., Narayanan, V. V., Kulkarni, I., Jogdand, S. P., Subramanya, P., & Nagarathna, R. (2015). Prevalence of type 2 diabetes among Yoga practitioners: A pilot cross-sectional study in two districts in India. International Journal of Yoga, 8(2), 148-153.`,
  `Dhansoia, V., Bhargav, H., & Metri, K. (2015). Immediate effect of mind sound resonance technique on state anxiety and cognitive functions in patients suffering from generalized anxiety disorder: A self-controlled pilot study. International Journal of Yoga, 8(1), 70.`,
  `More, P., & Jagannathan, A. (2015). Pathways to care in type 2 diabetes mellitus - Where does yoga find a place? International Journal of Yoga, 8(2), 164.`,
  `Talwadkar, S., Jagannathan, A., & Nagarathna, R. (2015). Response to "trataka and cognitive function". International Journal of Yoga, 8, 83.`,
];

const publications2014 = [
  `Shetty, P., Eswar, A., Lakshmi, R. R. R., Shetty, B., Nagendra, H.R., & Vinchurkar, S. (2015). Effect of juice fasting on urine pH: A controlled study. Indian Journal of Health and Wellbeing, 6(1): 71.`,
  `Kashinath, G. M., Hemant, B., Praerna, C., Nagarathna, R., & Nagendra, H. R. (2014). Role of Yoga in Chronic Kidney Disease: A Hypothetical Review. Journal of Nephrology, 4(3), 1000167.`,
  `Jeevitaa, S., Krishna, R., Kashinath, G. M., Nagaratna, R., & Nagendra, H. R. (2014). Mindfulness and impulsivity in diabetes mellitus. The International Journal of Indian Psychology, ISSN 2348-5396, Volume 2, Issue 1.`,
  `Sankhla, H., Ganpat, T. S., Pailoor, S., Zala, K., Some, P., Ranjan, M., & Agarwal, M. (2014). Yoga for academic performance: A brain wave coherence analysis. European Journal of Psychology and Educational Studies, 1(1), 10.`,
  `Lalitha Nandini P. K., Raghavendra R. M., Amritanshu, R., Nagarathna, R., Radheshyam Naik., & Shubha, V. H. (2014). Ayurveda perspective of management of cancer chemotherapy induced nausea and vomiting. Online International Interdisciplinary Research Journal, 4:22-27.`,
  `Shashidhara, H. P., Satheesh, C. T., & Ajaikumar, B. S. (2014). Development and Standardization of Jataragni Impairment Checklist (JIC). Editorial Board, 3(8): 1.`,
  `Lalitha Nandini P.K., Raghavendra Rao M, Malur, R.Usharani., Radheshyam, Naik, Nagarathna R., Shubha, V. H., Shekhar, G. P., Diwakar, B. R., & Basavalinga, S.Ajaikumar. (2014). Role of yoga intervention and its effect on jataragni in ayurveda and CCINV-A RCT. International Journal of Multidisciplinary Educational Research, 3, 11(1): 242-256.`,
  `Ramakrishna, B. R., Kishore, K. R., Vaidya, V., Nagarathna, R., & Nagendra H. R. (2014). A Survey on the need for developing an Ayurveda based personality (Tridoshaprakrti) inventory, Journal of Ayurveda & Holistic Medicine, 2(7):8-13.`,
  `Ramakrishna, B. R., Kishore, K. R., Vaidya, V., Nagarathna R., & Nagendra H. R. (2014). Development of sushrutha prakriti inventory, an Ayurveda based personality assessment tool. Journal of Ayurveda & Holistic Medicine, 2(8):6-14.`,
  `Ramakrishna, B. R., Kishore, K. R., Vaidya, V., & Nagendra H. R. (2014). Healthy life- style prescriptions for different personality types (Tridosha Prakriti). Journal of Ayurveda & Holistic Medicine, 1(2):17-23.`,
  `Suchitra, S. P., Jagannathan, A., & Nagendra, H. R. (2014). Development and initial standardization of Ayurveda child personality inventory. Journal of Ayurveda & Integrative Medicine. 5(4): 205-208.`,
  `Suhas, A. V., Deepeshwar, S., Naveen, K. V., Nagendra, H. R., & Bhat, R. G. (2014). Concept and mechanism of cognition according to ancient Indian texts. International Journal of Literary Studies, 4(3): 55-58.`,
  `Suhas, A. V., Deepeshwar, S., Naveen, K. V., & Nagendra, H. R. (2014). Immediate effects of cyclic meditation on state mindfulness in normal healthy volunteers: A controlled study. Indian Journal of Positive Psychology, 5(4): 400-403.`,
  `Arun, K., Prithvi, A., Ganpat, T. S, Deshpande, S, Subramanya, P., and Nagendra, H. R. (2014). Suryanamaskara exercise enhances sustained attention. Saudi Journal of Sports Medicine, 14(1):31-34.`,
  `Bhargav, H., Nagendra, H. R., Gangadhar, B. N., & Nagarathna, R. (2014). Frontal Hemodynamic responses to high frequency yoga breathing in schizophrenia: a functional near-infrared spectroscopy study. Frontiers in Psychiatry, 5(29): 1-6.`,
  `Rizzo-Sierra, C. V., Deepeshwar, S., Kumar, S., Bhargav, H., Krishnamurthy, M., & Nagendra, H. R. (2013, April). Resting state functional near infrared spectroscopy. In 2013 Pan American Health Care Exchanges (pp. 1-1). IEEE.`,
  `Chandwani, K. D., Perkins, G., Nagendra, H. R., Raghuram, N. V, Spelman, A., Nagarathna, R., & Cohen, L. (2014). Randomized, controlled trial of yoga in women with breast cancer undergoing radiotherapy. Journal of Clinical Oncology, 32(10):1058-65.`,
  `Deepeshwar, S., Suhas, A. V., Naveen, K. V., & Nagendra, H. R. (2014). Measures of mindfulness and anxiety in OM meditators and non-meditators: A cross-sectional study. International Journal of Medicine and Public Health, 4(1):110-114.`,
  `Dhargave, P., Nalini, A., Abhishekh, H. A., Meghana, A., Nagarathna, R., Raju, T. R., & Sathyaprabha, T. N. (2014). Assessment of cardiac autonomic function in patients with Duchenne muscular dystrophy using short term heart rate variability measures. European Journal of Paediatric Neurology, 18(3): 317–320.`,
  `Jagannathan, A., Bishenchandra, Y. (2014). Decoding the integrated approach to Yoga therapy. International Journal of Yoga, 7(2): 166.`,
  `Jagannathan, A., Thirthalli, J., Hamza, A., Nagendra, H. R., & Gangadhar, B. N. (2014). Predictors of family caregiver burden in schizophrenia: Study from an in-patient tertiary care hospital in India. Asian Journal of Psychiatry, 8:94-8.`,
  `Maria, D. C. V., Jagannathan, A., (2014). Decoding the integrated approach to yoga therapy: Qualitative evidence based conceptual framework. International Journal of Yoga, 7: 22-31.`,
  `Raghuram, N., Parachuri, V. R., Swarnagowri, M. V., Babu, S., Chaku, R., Kulkarni, R., & Nagendra, H. R. (2014). Yoga based cardiac rehabilitation after coronary artery bypass surgery: One-year results on LVEF, lipid profile and psychological states–A randomized controlled study. Indian Heart Journal, 66(5): 490-502.`,
  `Rajesh, S. K., Illavarasu, V. J., & Srinivasan, T. M. (2014). Effect of Bhramari Pranayama on Response Inhibition: Evidence from the Stop Signal Task. International Journal of Yoga, 7(2):138-41.`,
  `Rajesh, S. K., Illavarasu, V. J., & Srinivasan, T. M., and Nagendra, H. R. (2014). Stress and its Expression According to Contemporary Science and Ancient Indian Wisdom: Perseverative Cognition and the Pancha Kosha. Mens Sana Monographs, 12(1):139-152.`,
  `Rao, Y. C., Kadam A., Jagannathan, A., Babina, N., Rao, R., & Nagendra, H.R. (2014). Efficacy of Naturopathy and Yoga in Bronchial Asthma. Indian Journal of Physiology and Pharmacology, 58(3): 232-238.`,
  `Talwadkar, S., Jagannathan, A., & Nagarathna, R. (2014). Effect of Trataka on cognitive functions in the elderly. International Journal of Yoga, 7(2):96-103.`,
  `Suhas, A. V., Deepeshwar, S., & Naveen, K. V. (2014). Self-reported measures of mindfulness in meditators and non-meditators - a cross sectional study. International Journal of Yoga, 7(2):142-6.`,
  `Telles, S., Deepeshwar, S., Naveen, K. V., & Subramanya, P. (2014). Long Latency Auditory Evoked Potentials during Meditation. Clinical EEG and Neuroscience, 46(4):299-309.`,
  `Chandrasekeran, A., Rajesh, S. K., & Srinivasan, T. M. (2014). Effect of repetitive yogic squats with specific hand position (Thoppukaranam) on selective attention and psychological states. International Journal of Yoga, 7(1):76-9.`,
  `Madhura, S., Subramanya, P., & Balaram, P. (2014). Job satisfaction, job stress and psychosomatic health problems in software professionals in India. Indian Journal of Occupational and Environmental Medicine, 18(3), 153.`,
  `Suchitra, S. P., & Nagendra, H. R. (2014). A self-rating scale to measure tridosas in children. Ancient Science of Life, 33(2):85-91.`,
  `Kashinath, M., Bhargav, H., Praerna, C., & Prasad, S. K. (2014). Ayurveda for Chemo-radiotherapy Induced Side Effects in Cancer Patients. Journal of Stem Cells, 8(2):1-15.`,
  `Mashyal, P., Bhargav, H., & Nagarathna, R. (2014). Safety and usefulness of Laghu Shankha Prakshalana (Yogic bowel cleansing) in patients with essential hypertension: A self-controlled clinical study. Journal of Ayurveda & Integrative Medicine, 5(4):227-35.`,
  `Raghavendra, B. R., & Ramamurthy, V. (2014). Changes in heart rate variability following yogic visual concentration (Trataka). Heart India, 2(1):15-18.`,
];

const publications2013 = [
  `Vaibhavi, B., Satyam, T., Sanjibkumar, P., Nagarathna, R., & Ramarao, N. H. (2013). Effect of Holistic Module of Yoga and Ayurvedic Panchakarma in Type 2 Diabetes Mellitus—A Pilot Study. Open Journal of Endocrine and Metabolic Diseases, 3: 90-98.`,
  `Deepeshwar, S., & Telles, S. (2013). Auditory Information Processing During Meditation Based on Evoked Potential Studies. Journal of Neurology and Psychology, 1(2):7.`,
  `Delgado-Pastor, L. C., Perakakis, P., Subramanya, P., Telles, S., & Vila, J. (2013). Mindfulness (Vipassana) meditation: effects on P3b event-related potential and heart rate variability. International Journal of Psychophysiology, 90(2), 207-214.`,
  `Jagannathan, A., Sekar, K., & Janardhan, R. (2013). A casework report of social anxiety disorder with anankastic personality disorder: a cognitive behavior therapy approach. Dysphrenia, 4(2):159-164.`,
  `Jayashree, R., Malini, A., Rakhshani, A., Nagendra, H. R., Gunasheela, S., & Nagarathna, R. (2013). Effect of the integrated approach of yoga therapy on platelet count and uric acid in pregnancy: a multicenter stratified randomized single-blind study. International Journal of Yoga, 6(1), 39-46.`,
  `Maharana, S., Nagarathna, R., Padmalatha, V., Nagendra, H. R., & Hankey, A. (2013). The Effect of Integrated Yoga on Labor Outcome: A Randomized Controlled Study. International Journal of Childbirth, 3(3):165-177.`,
  `Maharana, S., Nagarathna, R., Padmalatha, V., & Nagendra, H. R. (2013). Effect of integrated yoga on anxiety, depression & well being in normal pregnancy. Complementary Therapies in Clinical Practice, 19(4): 230-236.`,
  `Nagaraj, C., Manjunath, N. K., & Nataraj, H. R. (2013). Effect of integrated yoga therapy on nerve conduction velocity in type-2 diabetics: a cross-sectional clinical study. International Ayurveda Medical Journal, 1(6):119-125.`,
  `Nagendra, H. R. (2013). Integrated yoga therapy for mental illness. Indian Journal of Psychiatry, 55(7): 337-339.`,
  `Nagendra, H. R., Hankey, A., & Metri, K. (2013). Yoga and Ayurveda: Complementary systems of healing for use in integrative medicine. Light on Ayurveda Journal, 12(1):37-44.`,
  `Raghavendra, B. R., Telles, S., Manjunath, N. K., Deepak, K. K., Naveen, K. V., & Subramanya, P. (2013). Voluntary heart rate reduction following yoga using different strategies. International Journal of Yoga, 6(1):26-30.`,
  `Rajesh, S. K., Illavarasu, V. J., & Srinivasan, T. M. (2013). Dispositional Mindfulness and its Relation to Impulsivity in College Students. International Journal of Yoga - Philosophy, Psychology and Parapsychology, 1(1):49-52.`,
  `Ram, A., Banerjee, B., Hosakote, V. S., Rao, R. M., & Nagarathna, R. (2013). Comparison of lymphocyte apoptotic index and qualitative DNA damage in yoga practitioners and breast cancer patients: A pilot study. International Journal of Yoga, 6(1):20-25.`,
  `Ram, A., Nagendra, H. R., Shastry, A. S. N., Raghuram, N. V., & Nagarathna, R. (2013). A psycho-oncological model of cancer according to ancient texts of yoga. Journal of Yoga and Physical Therapies, 3(1):1-6.`,
  `Telles, S., Raghavendra, B. R., Naveen, K. V., Manjunath, N. K., Kumar, S., & Subramanya, P. (2013). Changes in autonomic variables following two meditative states described in yoga texts. Journal of Alternative and Complementary Medicine, 19(1):35-42.`,
  `Varambally, S., Vidyendaran, S., Sajjanar, M., Thirthalli, J., Hamza, A., Nagendra, H. R., & Gangadhar, B. N. (2013). Yoga-based intervention for caregivers of outpatients with psychosis: a randomized controlled pilot study. Asian Journal of Psychiatry, 36(2):141-145.`,
  `Vidyashree, H. M., Patil, P. P., Moodnur, V., & Deepeshwar, S. (2013). Evaluation and comparison of sleep quality among medical and yogic students – A questionnaire-based study. National Journal of Physiology, Pharmacy and Pharmacology, 3(1), 71.`,
  `Bhargav, H., Metri, K., Nagrathna, R., Nagendra, H. R., & Prasad, S. K. (2013). Enhancement of cancer stem cell susceptibility to conventional treatments through complementary yoga therapy: possible cellular and molecular mechanisms. Journal of Stem Cells, 7(4):261-267.`,
  `Raghavendra, B., & Telles, S. (2013). Performance in attentional tasks following meditative focusing and focusing without meditation. Ancient Science of Life, 32(1):49-53.`,
];

const publications2012 = [
  `Baspure, S., Jagannathan, A., Kumar, S., Varambally, S., Thirthalli, J., Venkatasubramanain, G., Nagendra, H. R., & Gangadhar, B. N. (2012). Barriers to yoga therapy as an add-on treatment for schizophrenia in India. International Journal of Yoga, 5(1):70-73.`,
  `Ganpat, T. S., Dash, S., & Nagendra, H. R. (2012). Yoga therapy for promoting emotional sensitivity in university students. Journal of Education and Health Promotion,5 (3):45.`,
  `Bhargav, H. (2012). Regenerative potential of meditation: An integrated module for enhancement of regeneration process towards the future of regenerative medicine. Journal of Stem Cell Research & Therapy, 2(5):69.`,
  `Chaya, M. S., Nagendra, H., Selvam, S., Kurpad, A., & Srinivasan, K. (2012). Effect of yoga on cognitive abilities in schoolchildren from a socioeconomically disadvantaged background: a randomized controlled study. Journal of Alternative and Complementory Medicine, 18(12):1161-67.`,
  `Ebnezar, J., Nagarathna, R., Yogitha, B., & Nagendra, H. R. (2012). Effect of integrated yoga therapy on pain, morning stiffness and anxiety in osteoarthritis of the knee joint: A randomized control study. International Journal of Yoga, 5(1):28-36.`,
  `Gundu, H. R. Rao., & Nagendra, H. R. (2012). Holistic approach for prevention of heart disease and diabetes. Journal of Preventive Cardiology, 2(1):231-238.`,
  `Jagannathan, A. (2012). Kundalini yoga meditation for complex psychiatric disorders. International Journal of Yoga, 5(2), 161.`,
  `Jagannathan, A., Hamza, A., Thirthalli, J., Nagendra, H. R., Kare, M., Yadav, M., & Gangadhar, B. N. (2012). Efficacy of yoga and psychosocial training programme for caregivers of persons with schizophrenia. National Journal of Professional Social Work, 13(1-2), 3-15.`,
  `Jagannathan, A., Hamza, A., Thirthalli, J., Nagendra, H.R., Nagarathna, R., and Gangadhar, B.N. (2012). Development and feasibility of need based yoga program for family caregivers of in-patients with schizophrenia in India. International Journal Yoga, 5(1):42-7.`,
  `Kumaran, V. S., Raghavendra, B. R., & Manjunath, N. K. (2012). Influence of early rising on performance in tasks requiring attention and memory. Indian Journal of Physiology and Pharmacology, 56(4):43-50.`,
  `Metri, G. K. (2014). First Direct Experimental Evidence Correlating Ayurveda based Tridosha Prakriti with Body Mass Composition and Western Constitutional Psychology Somatotypes.`,
  `Nagarathna, R. (2012). Response to "Yoga is not an intervention but may be yogopathy is". International Journal of Yoga, 5(2), 158-159.`,
  `Nagarathna, R., Usharani, M. R., A. Raghavendra, Rao., Chaku, R., Kulkarni, R.,& Nagendra, H. R. (2012). Efficacy of yoga based life style modification program on medication score and lipid profile in type 2 diabetes-a randomized control study. International Journal of Diabetes in Developing Countries, 32(3):122-130.`,
  `Nagaveni V, Jagannathan, A., (2012). Decoding Beliefs and Obsessions. Journal of School Social Work, 9(7): 1-6.`,
  `Nidhi, R., Padmalatha, V., Nagarathna, R., &Ram, A. (2012). Effects of a Holistic Yoga Program on Endocrine Parameters in Adolescents with Polycystic Ovarian Syndrome: A Randomized Controlled Trial. Journal of Alternative and Complementary Medicine, 19(2):153-60.`,
  `Nidhi, R., Padmalatha, V., Nagarathna, R., & Ram, A. (2012). Effect of holistic yoga program on anxiety symptoms in adolescent girls with polycystic ovarian syndrome: A randomized control trial. International Journal of Yoga, 5(2):112-117.`,
  `Nidhi, R., Padmalatha, V., Nagarathna, R., & Ram, A. (2012). Effect of a yoga program on glucose metabolism and blood lipid levels in adolescent girls with polycystic ovary syndrome. International Journal of Gynecology and Obstetrics, 118(1):37-41.`,
  `Nidhi, R., Padmalatha, V., Nagarathna, R., & Ram, A. (2012). Effect of Yoga Program on Quality of Life in Adolescent Polycystic Ovarian Syndrome: A Randomized Control Trial. Springer Science, 8(3):373-83.`,
  `Parag, J., & Manjunath, N. K. (2012). Effect of Surya Namaskar on Sustained Attention in School Children. Journal of Yoga and Physical Therapies, 2:110.`,
  `Patil, N. J., Nagaratna, R., Garner, C., Raghuram, N.V., &Crisan, R. (2012). Effect of integrated Yoga on neurogenic bladder dysfunction in patients with multiple sclerosis—A prospective observational case series. Complementary Therapies in Medicine, 20(6): 424- 430.`,
  `Raghavendra, B. R., Telles, S., & Nagendra, H. R. (2012). Self-rated ability to follow instructions for four mental states described in yoga texts. TANG: International Journal of Genuine Traditional Medicine,2(3):28.1-28.4`,
  `Rajesh, S. K., Illavarasu, V. J., & Srinivasan, T. M. (2012). The relationship between dispositional mindfulness and well-being in a sample of college students. Indian Journal of Positive Psychology, 3(3): 299-301.`,
  `Rakhshani, A., Nagrathna, R., Mhaskar, R., Mhaskar, A., Thomas, A.,& Gunasheela, S. (2012). The Effects of Yoga in Prevention of Pregnancy Complications in High-Risk Pregnancies: A Randomized Controlled Trial. Journal of Preventive Medicine, 55(4):333- 40.`,
  `Sendhilkumar, R., Gupta, A., Nagarathna, R., &Taly, A.B. (2012). Effect of pranayama and meditation as an add-on therapy in rehabilitation of patients with Guillain-Barré syndrome-a randomized control pilot study. Disability and Rehabilitation, 35(1):57-62.`,
  `Suchitra, S. P., & Nagendra, H. R. (2012). Effects of yoga on prakrti in children – a pilot study. International Society for Scientific Interdisciplinary Yoga Research, 2 (2), 293-198.`,
  `Tekur, P., Nagarathna, R., Chametcha, S., Hankey, A., & Nagendra, H. R. (2012). A comprehensive yoga programs improves pain, anxiety and depression in chronic low back pain patients more than exercise: An RCT.Complementary Therapies in Medicine, 20(3):107-18.`,
  `Telles, S., Raghavendra, B. R., Naveen, K. V., Manjunath, N. K., & Subramanya, P. (2012). Mid-latency auditory evoked potentials in 2 meditative States. Clinical EEG and Neuroscience, 43(2):154-60.`,
  `Tripathi, S., Nagarathna, R., & Nagendra, H. R. (2012).Validation of an integrated ayurveda-yoga module for residential treatment of patients with type 2 diabetes mellitus - a compilation from traditional literature. International Journal of Ayurvedic and Herbal Medicine, 2(5):921:934.`,
  `Varambally, S., Gangadhar, B. N., Thirthalli, J., Jagannathan, A., Kumar, S., Venkatasubramanian, G., Muralidhar, D., Subbakrishna, D. K., & Nagendra, H. R. (2012). Therapeutic efficacy of add-on yogasana intervention in stabilized outpatient schizophrenia: Randomized controlled comparison with exercise and waitlist. Indian Journal of Psychiatry, 54 (3): 227-232.`,
  `Yogitha, B., John, E., Nagarathna, R., &Rangaji, R. (2012). Role of integrated approach of yoga therapy in the management of osteoporosis. International Journal of Ayurvedic and Herbal Medicine, 2(1):149-152.`,
  `Bhargav, H., Huilgol, V., Metri, K., Sundell, I. B., Tripathi, S., Ramagouda, N., Jadhav, M., Raghuram, N., Ramarao, N. H., & Koka, P. S. (2012). Evidence for extended age dependent maternal immunity in infected children: mother to child transmission of HIV infection and potential interventions including sulfatides of the human fetal adnexa and complementary or alternative medicines.Journal of Stem Cells, 7(3):127-53.`,
  `Ram, A, Nagarathna, R., Rao, R. M., Bhargav, H., Koka, P. S., Tripati, S., Raghuram,V., Gopinath, S. K., & Nagendra, H. R. (2012). Development and validation of a need-based integrated yoga program for cancer patients: a retrospective study. Journal of Stem Cells, 7(4):269-282.`,
];

const publications2011 = [
  `Arpitha, J., Crystal, D. D., Sumithra, S. A., Chaya, M. S., & Krishnamachari, S. (2011). Aerobic Fitness and Cognitive Functions in Economically Underprivileged Children Aged 7-9 Years: A preliminary Study from South India. International Journal of Biomedical Science, 7(1): 51-54.`,
  `Behere, R. V., Arasappa, R., Jagannathan, A., Varambally, S., Venkatasubramanian, G., Thirthalli, J., Subbakrishna, D. K., Nagendra, H. R., & Gangadhar, B. N. (2011). Effect of yoga therapy on facial emotion recognition deficits, symptoms and functioning in patients with schizophrenia. Acta PsychiatricaScandinavica, 123(2):147-53.`,
  `Ebnezar, J., Nagarathna, R., Bali, Y., & Nagendra, H. R. (2011). Effect of an integrated approach of yoga therapy on quality of life in osteoarthritis of the knee joint: A randomized control study. International Journal of Yoga, 4(2): 55-63.`,
  `Jagannathan, A., & Sekar, K., (2011). Use of strengths perspective to treat persons suffering from mental illness in India. The Indian Journal of Social Work, 72(3), 27-42.`,
  `Jagannathan, A., Hamza, A., Thirthalli, J., Nagendra, H. R., & Gangadhar, B. N. (2011). Development and feasibility of need-based psychosocial training programme for family caregivers of in-patients with schizophrenia in India. Asian Journal of Psychiatry, 4(2):113-118.`,
  `Jagannathan, A., Thirthalli, J., Hamza, A., Hariprasad, V. R., Nagendra, H. R., & Gangadhar, B. N. (2011). A qualitative study on the needs of caregivers of inpatients with schizophrenia in India. International Journal Social Psychiatry, 57(2): 180-94.`,
  `Nidhi, R., Padmalatha, V., Nagarathna, R., &Amritanshu, R. (2011). Prevalence of polycystic ovarian syndrome in Indian adolescents. Journal of Pediatric and Adolescent Gynecology, 24(4):223-227.`,
  `Oswal, P., Nagarathna, R., Ebnezar, J., & Nagendra, H. R. (2011). The effect of add-on yogic prana energization technique (YPET) on healing of fresh fractures: a randomized control study. Journal of Alternative and Complementary Medicine, 17(3):253-258.`,
  `Telles, S., & Raghavendra, B. R. (2011) Neurophysiological Changes in Meditation Correlated with Descriptions from the Ancient Texts. Biofeedback, 39(2):56-59.`,
];

const publications2010 = [
  `Yogitha, B., Nagarathna, R., Ebnezar, J., & Nagendra, H. R. (2010). Complimentary effect of yogic sound resonance relaxation technique in patients with common neck pain. International Journal of Yoga, 3(1): 18–25.`,
  `Bhargav, H., Nagarathna, R., Rao, N. H., Tekur, P., & Koka, P. S. (2010). Potential yoga modules for treatment of hematopoietic inhibition in HIV-1 infection. Journal of Stem Cells, 5(3): 129–148.`,
  `Chandwani, K. D., Thornton, B., Perkins, G. H., Arun, B., Raghuram, N. V., Nagendra, H. R., Wei, Q., & Cohen, L. (2010). Yoga improves quality of life and benefit finding in women undergoing radiotherapy for breast cancer. Journal of the Society for Integrative Oncology, 8(2): 43–55.`,
  `Hyorim, A. N., Kulkarni, R., Nagarathna, R., & Nagendra, H. R. (2010). Measures of heart rate variability in women following a meditation technique. International Journal of Yoga, 3(1): 6–9.`,
  `Kumar, G. R., & Rajesh, S. K. (2010). Vaidyamadham Cheriya Narayanan Namboodiri. Journal of Ayurveda and Integrative Medicine, 1(2), 136.`,
  `Kumar, S., Nagendra, H. R., Naveen, K. V., Manjunath, N. K., & Telles, S. (2010). Brainstem auditory-evoked potentials in two meditative mental states. International Journal of Yoga, 3(2): 37–41.`,
  `Mallick, T., & Kulkarni, R. (2010). The effect of trataka, a yogic visual concentration practice, on critical flicker fusion. Journal of Alternative and Complementary Medicine, 16(12): 1265–1267.`,
  `Patra, S., & Telles, S. (2010). Heart rate variability during sleep following the practice of cyclic meditation and supine rest. Applied Psychophysiology and Biofeedback, 35(2): 135–140.`,
  `Radhakrishna, S. (2010). Application of integrated yoga therapy to increase imitation skills in children with autism spectrum disorder. International Journal of Yoga, 3(1): 26–30.`,
  `Radhakrishna, S., Nagarathna, R., & Nagendra, H. R. (2010). Integrated approach to yoga therapy and autism spectrum disorders. Journal of Ayurveda and Integrative Medicine, 1(2): 120–124.`,
  `Rakhshani, A., Maharana, S., Nagarathna, R., Nagendra, H. R., & Venkatram, P. (2010). Effects of integrated yoga on quality of life and interpersonal relationship of pregnant women. Quality of Life Research, 19(10): 1447–1455.`,
  `Srinivasan, T. M. (2010). Energy medicine. International Journal of Yoga, 3(1): 1.`,
  `Srinivasan, T. M. (2010). Psychiatric disorders and holistic therapies. International Journal of Yoga, 3(2): 35–36.`,
  `Suchitra, S. P., Devika, H. S., Gangadhar, B. N., Nagarathna, R., Nagendra, H. R., & Kulkarni, R. (2010). Measuring the tridosha symptoms of unmāda (psychosis): a preliminary study. Journal of Alternative and Complementary Medicine, 16(4): 457–462.`,
  `Tekur, P., Chametcha, S., Nagendra, H. R., & Nagarathna, R. (2010). Effect of Yoga on Quality of Life in Chronic Low Back Pain – A randomized control study. International Journal of Yoga, 3(1): 10–17.`,
];

const yearSections = [
  { year: "The Year 2024", publications: publications2024 },
  { year: "The Year 2023", publications: publications2023 },
  { year: "The Year 2022", publications: publications2022 },
  { year: "The Year 2021", publications: publications2021 },
  { year: "The Year 2020", publications: publications2020 },
  { year: "The Year 2019", publications: publications2019 },
  { year: "The Year 2018", publications: publications2018 },
  { year: "The Year 2017", publications: publications2017 },
  { year: "The Year 2016", publications: publications2016 },
  { year: "The Year 2015", publications: publications2015 },
  { year: "The Year 2014", publications: publications2014 },
  { year: "The Year 2013", publications: publications2013 },
  { year: "The Year 2012", publications: publications2012 },
  { year: "The Year 2011", publications: publications2011 },
  { year: "The Year 2010", publications: publications2010 },
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
