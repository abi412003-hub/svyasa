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

const yearSections = [
  { year: "The Year 2024", publications: publications2024 },
  { year: "The Year 2023", publications: publications2023 },
  { year: "The Year 2022", publications: publications2022 },
  { year: "The Year 2021", publications: publications2021 },
  { year: "The Year 2020", publications: publications2020 },
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
