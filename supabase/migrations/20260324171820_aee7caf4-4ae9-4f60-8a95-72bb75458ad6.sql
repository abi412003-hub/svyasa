
UPDATE courses SET
  learning_journey = '[
    {"semester":"Semester 1","subjects":["Management Fundamentals","Managerial Economics","Organizational Behaviour","Business Accounting","Business Statistics","Advanced Excel for Business","Business Communication","Essence of Yoga Principles and Practical Applications"]},
    {"semester":"Semester 2","subjects":["Legal Aspects of Business","Business Research Methods","Management Information System","Total Quality Management","Marketing Management","Financial Management for Business","International Business Environment and Management","Exploring Yogic Philosophy, Happiness & Human Values"]},
    {"semester":"Semester 3","subjects":["Introduction to Hospital and Medical Tourism","Hospital Planning and Administration","Clinical and Diagnostic Services","Quality Management in Healthcare","Elective (choose 1): Medical Insurance & Health Law / Patient Service & Experience Management / Disaster and Emergency Preparedness in Healthcare / Global Healthcare System","Indian Ethos & Leadership","Summer Internship"]},
    {"semester":"Semester 4","subjects":["Healthcare Analytics","Ayurveda, Yoga & Integrative Health Systems","Financial Management in Healthcare","Legal and Ethical Issues in Medical Tourism","Healthcare Startups & MedTech","Project Work"]}
  ]'::jsonb,
  brochure_link = 'https://www.svyasa.edu.in/img/pdf/MBA-Brochure.pdf',
  banner_image = 'https://www.svyasa.edu.in/img/banner/MBA-PRO-Hospital-Administration-with-Medical-Tourism.jpg'
WHERE slug = 'mba-hospital-administration-medical-tourism';

UPDATE courses SET
  learning_journey = '[
    {"semester":"Semester 1","subjects":["Management Fundamentals","Managerial Economics","Organizational Behaviour","Business Accounting","Business Statistics","Advanced Excel for Business","Business Communication","Essence of Yoga Principles and Practical Applications"]},
    {"semester":"Semester 2","subjects":["Legal Aspects of Business","Business Research Methods","Management Information System","Total Quality Management","Marketing Management","Financial Management for Business","International Business Environment and Management","Exploring Yogic Philosophy, Happiness & Human Values"]},
    {"semester":"Semester 3","subjects":["Supply Chain and Logistics Fundamentals","Total Quality Management and Six Sigma","Inventory & Warehouse Management","Enterprise Resource Planning","Elective (choose 1): Humanitarian & Disaster Logistics / Circular & Sustainable Supply Chains / Green & Sustainable Logistics / Warehouse Automation & Robotics in SCM","Indian Ethos & Leadership","Summer Internship"]},
    {"semester":"Semester 4","subjects":["Supply Chain Analytics","Risk Management in Supply Chain","Demand Forecasting & Route Optimization","Retail Supply Chain Management","Global Supply Chain Management","Project Work"]}
  ]'::jsonb,
  brochure_link = 'https://www.svyasa.edu.in/img/pdf/MBA-Brochure.pdf',
  banner_image = 'https://www.svyasa.edu.in/img/banner/MBA-PRO-Logistics-and-Supply-Chain-Management.jpg'
WHERE slug = 'mba-logistics-supply-chain-management';
