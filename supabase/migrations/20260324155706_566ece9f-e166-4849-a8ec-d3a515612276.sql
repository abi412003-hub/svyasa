-- Update highlights for 5 BCA courses (shared content from original site)
UPDATE courses SET highlights = '[
  {"number":"01","icon":"book-open","title":"Specialisation Curriculum","description":"Well-rounded curriculum covering Programming Fundamentals, Data Structures, Algorithms, DBMS, Computer Networks, Software Engineering and Web Development with six specialisation tracks."},
  {"number":"02","icon":"lightbulb","title":"Innovative Pedagogical Practices","description":"Integrating technology, management and wellness programmes such as Yoga. Modern teaching methods, experiential learning and practical experience ensure a comprehensive educational journey."},
  {"number":"03","icon":"award","title":"Industry-Relevant Skills & Certifications","description":"Latest tools and methodologies used by IT professionals today ensuring graduates are ready to thrive in the fast-paced tech industry with industry-recognized certifications."},
  {"number":"04","icon":"handshake","title":"Industry & Academia Collaboration","description":"Robust industry-academic collaborations with insights from IITs, IIMs, NITs and international universities. Experts from Fortune 500 companies like Google, Amazon and Accenture oversee the programme."},
  {"number":"05","icon":"heart","title":"Holistic Development","description":"Enhances vital soft skills such as teamwork, communication and ethical conduct while extending beyond technical expertise with yoga and wellness practices for overall well-being."}
]'::jsonb
WHERE slug IN (
  'bca-cloud-computing-cybersecurity-ethical-hacking',
  'bca-artificial-intelligence-machine-learning-robotics',
  'bca-artificial-intelligence-cloud-computing-devops',
  'bca-data-science-artificial-intelligence-big-data-analytics',
  'bca-artificial-intelligence-robotics-internet-of-things'
);

-- Update programme outcomes (careers) for ALL 6 BCA courses
UPDATE courses SET careers = '[
  {"icon":"cpu","title":"Technical Proficiency","description":"Understanding of fundamental computer science and IT concepts including programming languages, database management, data structures, algorithms, networking and software engineering.","demand":"high"},
  {"icon":"puzzle","title":"Problem-Solving Skills","description":"Analyse complex problems, identify requirements and develop effective solutions using appropriate computational techniques and tools.","demand":"high"},
  {"icon":"code","title":"Software Development","description":"Adequate skill in designing, developing and testing software applications including web-based, desktop and mobile applications adhering to industry best practices.","demand":"high"},
  {"icon":"database","title":"Database Management","description":"Proficient in designing, implementing and managing databases including data modeling, querying and administration tasks.","demand":"high"},
  {"icon":"shield","title":"Information Security","description":"Implement security measures to protect data and systems from unauthorised access, attacks and breaches using principles of information security.","demand":"high"},
  {"icon":"message-circle","title":"Communication Skills","description":"Communicate effectively with technical and non-technical stakeholders including the ability to document and present technical information clearly and concisely.","demand":"growing"},
  {"icon":"users","title":"Teamwork & Collaboration","description":"Work effectively as part of a team collaborating with colleagues from diverse backgrounds to achieve common goals.","demand":"growing"},
  {"icon":"trending-up","title":"Continuous Learning","description":"Commitment to lifelong learning and professional development staying abreast of emerging technologies and industry trends to adapt to evolving requirements.","demand":"growing"},
  {"icon":"rocket","title":"Entrepreneurial & Innovation Skills","description":"Develop the mindset and skills to identify opportunities, innovate and contribute to the development of new technologies and solutions.","demand":"growing"}
]'::jsonb
WHERE slug LIKE 'bca-%';