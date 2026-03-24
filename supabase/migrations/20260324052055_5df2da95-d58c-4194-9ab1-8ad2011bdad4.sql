UPDATE public.faculty_profiles SET
  qualifications = 'MSc, PhD (Neurochemistry)',
  achievements = E'DBT-BioCare Women Scientist-2013\nFENS-IBRO/PERC travel grant for FENS Forum 2016, Copenhagen\nMSc Gold Medal-2003, School of Biotechnology, BHU\nQualified GATE 2003 — 99.3 percentile, 24th All India Rank\nQualified CSIR-NET for Junior Research Fellowship 2003\nCo-authored the ADA''s Vivian Fonseca and Nagendran Family Diabetes Research Award abstract',
  area_of_expertise = '["Molecular biology", "Gene expression studies", "Mammalian cell culture", "Healthy aging and biological ageing"]'::jsonb,
  research = E'Research experience at NIMHANS with deep understanding of basic and clinical neuroscience. Primary research interest in establishing the role of Yoga in human system''s biology concerning aging. Ongoing DST-SATYAM funded project exploring yoga effectiveness for biological age phenotypes using ageing hallmarks.',
  publications = E'Yoga-based lifestyle intervention for healthy ageing in older adults (Geroscience, 2024)\nStudy protocol for yHAP (BMJ Open, 2021)\nEffectiveness of yoga on composite biomarker age predictors (BMC Geriatrics, 2023)\nAssociation of KL-VS variant of Klotho gene with early-onset ischemic stroke (BBRC, 2010)'
WHERE slug = 'vijaya-majumdar';

UPDATE public.faculty_profiles SET
  qualifications = 'M.Sc., Ph.D. (Biochemistry)',
  area_of_expertise = '["Clinical research in Yoga and Diabetes", "Molecular mechanisms in NCDs", "Metabolic syndrome", "Yogic breathing", "Oxidative stress", "Migraine", "Nutrition"]'::jsonb,
  research = E'Present projects: Clinical trial on Yoga-based lifestyle enabling sustained remission in Type-2 Diabetes; 12-week yogic breathing for CVD risk factors; yoga on migraine outcomes. Presently guiding 6 PhD scholars. Completed: Research on yoga''s effect on oxidative DNA damage and repair in Type-2 Diabetes patients.',
  publications = E'Nair, Vasudev & Mavathur. Role of Yoga in Mitigation of DNA Damage in Type-2 Diabetes (Annals of Behavioral Medicine, 2021)\nZaidi, Mithila et al. Yoga Module Development for Sickle Cell Disease (IJY, 2023)\nMithila & Khanum. Comparison of quinoa and amaranth supplemented diets (J Food Sci Tech, 2015)'
WHERE slug = 'mithila-mv';

UPDATE public.faculty_profiles SET
  qualifications = 'MS, PhD (Yoga)',
  achievements = E'Best scientific article award\nBest thesis award',
  area_of_expertise = '["Application research of Yoga for human wellbeing", "Lifestyle modification", "Philosophical texts"]'::jsonb,
  research = E'Present project: Molecular basis of the effect of yoga on chronic kidney disease. Completed: Role of yoga and its mechanism in Type 2 Diabetes Mellitus related DNA damage — DNA damage reduced by 16% in yoga group. Supervising MD (2), M.Sc. (8), PhD (2) students.',
  publications = E'Nair, Vasudev & Mavathur. Role of Yoga in Mitigation of DNA Damage in Type-2 Diabetes (Annals of Behavioral Medicine, 2021)'
WHERE slug = 'rajesh-nair';

UPDATE public.faculty_profiles SET
  qualifications = 'M.Sc., Ph.D. (Biotechnology), Postdoc',
  achievements = E'Women Scientist Award (₹23,10,000) from DST, 2012\nInternational Travel Grant to EAACI Congress Barcelona, 2008\nSenior Research Fellowship from CSIR and ICMR, 2008\nSenior Research Fellowship from DST, 2006\nPostdoc at St John''s Research Institute, Bangalore',
  research = E'Exploring fundamental biological mechanisms underlying therapeutic benefits of Yoga. Current project: "Is NAD+-SIRT1 Axis a key regulator for DNA Repair and metabolic regulation following Yoga?" Supervising Ph.D (5), M.Sc (4) students.',
  publications = E'Srivastava et al. Identification of glutathionylated proteins in CSF in MS patients (Anal Biochem, 2019)\nMitra, Muralidharan, Srivastava et al. Assessment of Cysteine Reactivity of Human Hemoglobin (Hemoglobin, 2017)'
WHERE slug = 'deepshikha-srivastava';

UPDATE public.faculty_profiles SET
  qualifications = 'M.Sc., Ph.D. (Yoga), S-VYASA',
  area_of_expertise = '["Neurophysiology", "Cognitive Sciences", "Psychophysiology", "Mental health"]'::jsonb,
  research = E'Working on conscious inhalation on attention process. Investigating how Bhastrika Pranayama facilitates executive functions. Guiding two PhD students (Co-supervisor) and 10 postgraduate students.',
  publications = E'Krishna & Deepeshwar. Relationships between impulsivity and frontal EEG oscillation in meditators (Alt Therapies Health Med, 2024)\nKrishna & Kanthi. Neurobiology Correlates of Breathing Practices on Cognitive Functions (Biospectra, 2024)\nMohanty, Deepeshwar, Singh, Krishna et al. Improving Prefrontal Oxygenation Following Meditation: fNIRS Study (Cureus, 2024)'
WHERE slug = 'krishna-dwivedi';

UPDATE public.faculty_profiles SET
  qualifications = 'BNYS, M.D (Yoga), PhD',
  achievements = E'Developed a Mobile Yoga App (AVISHADA Yoga App) with validated E-module, patent submitted',
  area_of_expertise = '["E-Yoga protocols for mental health", "Yoga Nidra effects on cognition", "Genetic changes induced by yoga", "Magnetotherapy and chromotherapy"]'::jsonb,
  research = E'Completed DST-SATYAM funded projects on structured yoga intervention for anxiety/depression and validation of E-Module yoga protocol. Studied stress, anxiety, sleep quality among medical students during COVID-19 and HRV in individuals with depression symptoms.',
  publications = E'Dhamodhini et al. Development and Validation of Yoga Protocol for Depression (Annals of Neurosciences, 2023)\nPadmavathi, Kumar, Dhamodhini et al. Role of Yoga in Stress Management and Major Depressive Disorder (J Ayurveda Integr Med, 2023)\nJeyashree, Dilara, Maruthi, Dhamodhini. Arterial Stiffness using Photo Pulse Plethysmography (J Clin Diagn Res, 2024)'
WHERE slug = 'ks-dhamodhini';

UPDATE public.faculty_profiles SET
  qualifications = 'PhD (Yoga/Neuroscience)',
  research = 'Working on meditation neuroscience, investigating neural correlates of different meditation practices.'
WHERE name LIKE '%Amit%Kanthi%';

UPDATE public.faculty_profiles SET
  qualifications = 'Ph.D (Biochemistry)',
  achievements = E'SERB National Post-Doctoral Fellowship from SERB (2019)\nCSIR-SRF award from Govt. of India (2012)',
  area_of_expertise = '["Diabetes", "Cardiovascular Diseases", "Molecular Nutrition", "Food Biochemistry", "Yoga"]'::jsonb,
  research = E'Present: Role of Yoga Based Lifestyle Intervention in Enabling Sustained Remission of Type 2 Diabetes. Previous: Redox regulation of ischemic heart diseases.',
  publications = E'Pradeep et al. Functional role of Pellino-1 following myocardial infarction (BBA Mol Basis Disease, 2024)\nThirunavukkarasu, Pradeep et al. Role of Pellino-1 in Inflammation Following Severe Sepsis (Cells, 2023)\nGhatak, Khanna, Roy, Thirunavukkarasu, Pradeep et al. Driving adult tissue repair (Molecular Therapy, 2022)'
WHERE name LIKE '%Pradeep%';