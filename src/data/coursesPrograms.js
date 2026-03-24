/**
 * Courses and bootcamps with certificate PDFs under /public/programs/Certificates/
 * summary: one line under partners (always visible)
 * detailParagraphs + detailBullets: shown when expanded
 */
export const COURSES_PROGRAMS = [
  {
    id: 'backend-misk-mcit',
    title: 'Back End Development',
    partners: 'Misk Skills and MCIT',
    logos: ['/programs/misk-skills.png', '/programs/mcit.png'],
    certificate: '/programs/Certificates/back-end-misk-mcit.pdf',
    summary:
      'Immersive back end developer track with Misk Skills and the Ministry of Communications and Information Technology: forty hours of intensive, practice heavy training.',
    detailParagraphs: [
      'The program mirrors a real delivery mindset: designing and reasoning about server side systems you can ship and maintain, not only syntax drills.',
      'It sits alongside the same immersive family of programs where I later built HopeHub: clear scope, fast feedback loops, and outcomes you can show in code and documentation.',
    ],
  },
  {
    id: 'power-bi-mcit',
    title: 'Data Visualisation with Power BI',
    partners: 'MCIT',
    logos: ['/programs/mcit.png'],
    certificate: '/programs/Certificates/power-bi-mcit.pdf',
    summary:
      'MCIT led data visualisation with Power BI, plus the full integrated Power BI learning path: from modeling to dashboards decision makers actually use.',
    detailParagraphs: [
      'I focused on turning raw inputs into clear stories: interactive dashboards, disciplined modeling, and reporting that matches how leaders ask questions, not only how tables are shaped.',
    ],
    detailBullets: [
      'Interactive dashboards and stronger visual hierarchy',
      'Data prep and shaping with Power Query',
      'Custom KPIs and performance measures',
      'Report design aligned to stakeholder decisions',
    ],
  },
  {
    id: 'ai-data-samsung-misk',
    title: 'AI and data science training',
    partners: 'Samsung Innovation Campus and Misk Skills',
    logos: ['/programs/samsung-innovation-campus.png', '/programs/misk-skills.png'],
    certificate: '/programs/Certificates/ai-data-science-samsung-misk.pdf',
    summary:
      'Opening chapter of Samsung Innovation Campus with Misk Skills: a nine week intensive that pairs foundations with applied AI and data science work.',
    detailParagraphs: [
      'The arc moved from core math and statistics for AI into Python data work, visualization, machine learning and deep learning, SQL, and a capstone where ideas had to land in a real project.',
      'What stood out was the structure: theory never floated on its own, it always tied back to labs and milestones, which made the pace demanding but coherent.',
    ],
    detailBullets: [
      'Math, statistics, and probability as they show up in ML',
      'Analysis in Python with Pandas and NumPy',
      'Visualization with Matplotlib and Seaborn',
      'ML and deep learning projects with increasing depth',
      'Databases and SQL in the analysis workflow',
      'Capstone that integrates the full stack of skills',
    ],
  },
  {
    id: 'intro-ai-groq',
    title: 'Introduction to AI engineering with Groq',
    partners: 'Tuwaiq Academy and Groq',
    logos: ['/programs/tuwaiq-academy.png', '/programs/groq.png'],
    certificate: '/programs/Certificates/intro-ai-engineering-tuwaiq-groq.pdf',
    summary:
      'Tuwaiq Academy program on AI engineering with Groq: concepts, playground workflows, and project style work on top of Groq’s high speed inference stack.',
    detailParagraphs: [
      'We moved from shared language around models and evaluation into hands on use of the Groq Playground, then into practical builds and use cases that stress speed and iteration.',
      'A clear personal highlight was experiencing how fast Groq class hardware runs LLaMA family models, which directly informed how I approached PlanMate style assistants.',
    ],
  },
  {
    id: 'robotics-ai-ksu',
    title: 'Smart Robotics Bootcamp',
    partners: 'AI Center of Advanced Studies and King Saud University',
    logos: ['/programs/ai-center-advanced-studies.png', '/programs/king-saud-university.png'],
    certificate: '/programs/Certificates/smart-robotics-ai-center-ksu.pdf',
    summary:
      'Smart Robotics Bootcamp hosted by the AI Center of Advanced Studies at King Saud University: sensors, control, and embedded programming with a look toward perception.',
    detailParagraphs: [
      'The week blended hardware intuition with software: reading sensors, tightening control loops, and programming microcontrollers, with introductions to computer vision and fusing multiple data sources.',
      'It rounded out my picture of how physical systems and intelligent software meet, beyond pure cloud or notebook workflows.',
    ],
  },
  {
    id: 'elements-of-ai',
    title: 'Elements of AI',
    partners: 'University of Helsinki with support from Google.org',
    logos: ['/programs/university-helsinki.png', '/programs/google-org.png'],
    certificate: '/programs/Certificates/elements-of-ai-helsinki-google.pdf',
    summary:
      'Foundational, widely recognized introduction to what AI is, how it is built, and how to think critically about impact and limitations.',
    detailParagraphs: [
      'A concise, policy and literacy friendly lens on AI: definitions, common techniques at a high level, and the gap between marketing claims and what systems can reliably do.',
      'The material moves from how learning systems are trained and evaluated into questions of fairness, deployment, and everyday use cases, which helped me separate durable concepts from buzzwords before the more hands on engineering programs that followed.',
    ],
  },
]
