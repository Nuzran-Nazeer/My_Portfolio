export const profile = {
  name: 'Nuzran Nazeer', initials: 'NN', role: 'Full-stack & mobile developer', email: 'm.nuzrannazeer@gmail.com',
  github: 'https://github.com/Nuzran-Nazeer', linkedin: 'https://www.linkedin.com/in/nuzran-nazeer/',
  about: 'I am an aspiring software developer building responsive web applications and offline-first mobile experiences. I am currently seeking a software engineering internship where I can contribute to impactful projects and grow as a developer.',
  approach: 'My work ranges from confidential review workflows to reliable transaction scheduling and on-device AI. I enjoy solving complex problems, learning emerging technologies, and helping a team deliver together.',
  skills: ['React', 'React Native', 'Angular', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'Python', 'Java', 'MongoDB', 'MySQL', 'WatermelonDB', 'llama.cpp', 'REST APIs', 'JWT', 'Git', 'GitHub', 'VS Code', 'Playwright', 'Vercel', 'Netlify', 'Render', 'AWS', 'DevOps', 'Cloud Computing', 'OOP', 'Agile', 'Jira'],
  education: [
    { title: 'BSc (Hons) Computer Science', institution: 'University of Staffordshire (APIIT)', period: '2026 - Present' },
    { title: 'Diploma in IT', institution: 'British Computer Society (HEQ)', period: '2023 - 2025' },
    { title: 'Trainee Full Stack Developer', institution: 'University of Moratuwa (CODL)', period: '2022 - 2024' },
  ],
}
export const projects = [
  {
    title: 'Performance & Development Tracker', shortTitle: 'PDT', category: 'Confidential appraisal workflows', visual: 'orbit', role: 'Full Stack Developer',
    tags: ['React', 'Express', 'MongoDB', 'Playwright'], description: 'An appraisal system with confidential 360-degree feedback, built for a client scenario in a four-person Agile team.',
    highlights: [
      'Designed a layered architecture connecting the dated organisation model, supervision, visibility, and reviewer eligibility.',
      'Built most of the server side of the review cycle, including reviewer identity removal, HR coverage, result publication, identity reveal, and an append-only audit trail.',
      'Enforced access rules on the server, limiting HR officers to the units they cover and logging sensitive actions for the Head of HR.',
      'Replaced open account creation with an invitation and activation flow, preventing unauthenticated requests from creating accounts or assigning roles.',
      'Designed rating normalisation that compares supervisor ratings with their usual leniency and peer feedback, prompting replacement, justification, or escalation of outliers to HR.',
      'Deployed the client and API to Vercel with separate development, test, and live databases on MongoDB Atlas.',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Yup', 'Playwright', 'Vercel', 'Jira'],
    metrics: ['4-person Agile team', 'Server-enforced access', 'Audited review workflows'], url: 'https://project-pdt.vercel.app', repo: '',
  },
  {
    title: 'ExpenseTracker', shortTitle: 'ExpenseTracker', category: 'Offline-first personal finance', visual: 'forma', role: 'Mobile App Developer',
    tags: ['React Native', 'WatermelonDB', 'On-device AI'], description: 'A fully on-device, offline-first personal finance application for monitoring spending, planning budgets, automating recurring transactions, and importing bank transactions from SMS using on-device AI.',
    highlights: [
      'Architected scheduled transactions with multiple recurrence patterns, custom intervals, end dates, and occurrence limits.',
      'Built scheduling logic for instance rescheduling, flexible skips, bulk overdue payments, and pause/resume.',
      'Redesigned the scheduling engine with timezone-safe dates and a single source of truth for instance state, resolving more than 10 calendar and state bugs.',
      'Protected payment integrity against duplicate taps and crashes, keeping payments and schedules in sync.',
      'Built automatic SMS transaction import using on-device AI so financial data stays on the phone.',
      'Optimised inference with grammar-constrained output, prompt caching, and a regex pre-filter, and designed a two-phase background import with deduplication.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'WatermelonDB', 'llama.cpp'], metrics: ['Fully on-device', '10+ bugs resolved', 'AI-powered SMS import'], url: '', repo: '',
  },
  {
    title: 'Drug Prevention & Management System', shortTitle: 'Case management', category: 'Secure stakeholder collaboration', visual: 'terrain', role: 'Full Stack Developer',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'], description: 'A web application for drug-related case management and collaboration among police, prevention authorities, courts, and rehabilitation centers.',
    highlights: ['Designed centralized case management with role-based access control.', 'Implemented JWT authentication and anonymous public reporting.', 'Built a responsive frontend and REST API supporting the application workflows.'],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'], url: '', repo: '',
  },
  {
    title: 'KeepUp', shortTitle: 'KeepUp', category: 'Habit tracking & challenges', visual: 'forma', role: 'Full Stack Developer', tags: ['MERN', 'JWT', 'Tailwind CSS'],
    description: 'A habit tracking application with personalized challenges and real-time progress tracking.',
    highlights: ['Developed a MERN architecture with role-based access and JWT authentication.', 'Built streak tracking, daily check-ins, a calendar view, and celebration prompts.', 'Created a responsive dashboard with theme switching and admin tools for challenges, templates, and users.'],
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'bcryptjs'], url: '', repo: '',
  },
  {
    title: 'School Route Management', shortTitle: 'School routes', category: 'School transportation platform', visual: 'terrain', role: 'Full Stack Developer', tags: ['React', 'Node.js', 'MongoDB', 'Twilio'],
    description: 'A transportation management platform for route planning, driver assignments, and stakeholder communication.',
    highlights: ['Extended backend APIs and frontend components within the existing architecture.', 'Implemented additional CRUD operations and corresponding interfaces.', 'Integrated document management and WhatsApp notifications.'],
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Twilio WhatsApp API'], url: '', repo: '',
  },
]
