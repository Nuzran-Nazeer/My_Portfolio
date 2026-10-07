export const profile = {
  name: 'Nuzran Nazeer', initials: 'NN', role: 'Full-stack & mobile developer', email: 'm.nuzrannazeer@gmail.com',
  github: 'https://github.com/Nuzran-Nazeer', linkedin: 'https://www.linkedin.com/in/nuzran-nazeer/',
  about: 'I build full-stack web applications and offline-first mobile experiences, with a focus on server-side access controls, reliable data flows, and interfaces that are clear to use.',
  approach: 'My work ranges from confidential review workflows to recurring transaction scheduling. I enjoy turning complex requirements into working systems, testing the details, and helping a team deliver together.',
  skills: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'WatermelonDB', 'Playwright', 'Git', 'Vercel', 'Jira'],
  education: [
    { title: 'BSc (Hons) Computer Science', institution: 'University of Staffordshire (APIIT)', period: '2026 - Present' },
    { title: 'Diploma in IT', institution: 'British Computer Society (HEQ)', period: '2023 - 2025' },
    { title: 'Trainee Full Stack Developer', institution: 'University of Moratuwa (CODL)', period: '2022 - 2024' },
  ],
}
export const projects = [
  {
    title: 'Performance & Development Tracker', shortTitle: 'PDT', category: 'Confidential appraisal workflows', visual: 'orbit', role: 'Scrum Master, then Developer', period: 'Jul 2026 - Sep 2026',
    tags: ['React', 'Express', 'MongoDB', 'Playwright'], description: 'An appraisal system with confidential 360-degree feedback, built for a client scenario in a four-person Agile team.',
    highlights: [
      'Built most of the server side of the review cycle: reviewer identity removal, HR coverage, access limited to each user\'s own people, result publication, identity reveal, and an append-only audit trail.',
      'Enforced access rules on the server, limiting HR officers to the units they cover and logging sensitive actions for the Head of HR.',
      'Wrote 18 automated check scripts with 719 checks against a real MongoDB database, and set up a Playwright browser test suite.',
      'Deployed the client and API to Vercel with separate development, test, and live databases on MongoDB Atlas.',
      'Ran sprint events in Jira and made acceptance criteria a condition of estimation. Delivery rose from 58% of committed points in Sprint 1 to 86% in Sprint 2.',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Yup', 'Playwright', 'Vercel', 'Jira'],
    metrics: ['719 automated checks', '4-person Agile team', '58% to 86% sprint delivery'], url: 'https://project-pdt.vercel.app', repo: '',
  },
  {
    title: 'ExpenseTracker', shortTitle: 'ExpenseTracker', category: 'Offline-first personal finance', visual: 'forma', role: 'Mobile App Developer',
    tags: ['React Native', 'TypeScript', 'WatermelonDB'], description: 'An offline-first expense tracking application for monitoring spending, planning budgets, and scheduling recurring transactions.',
    highlights: ['Architected scheduled transactions with multiple recurrence patterns, custom intervals, end dates, and occurrence limits.', 'Contributed to offline-first data modeling, WatermelonDB schema design, state management, and scheduling algorithms.', 'Implemented local persistence and real-time updates using WatermelonDB.', 'Built scheduling logic for rescheduling instances, flexible skip operations, and overdue management.'],
    stack: ['React Native', 'Expo', 'TypeScript', 'WatermelonDB', 'MongoDB'], url: '', repo: '',
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
  {
    title: 'KICKS', shortTitle: 'KICKS', category: 'E-commerce & order management', visual: 'orbit', role: 'Full Stack Developer', tags: ['React', 'Node.js', 'MongoDB'],
    description: 'An e-commerce application with product browsing, user management, and order workflows.',
    highlights: ['Developed product catalog, product details, and content management interfaces.', 'Built order management, tracking, and order history features.', 'Created an admin dashboard for order processing and status updates.'],
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'], url: '', repo: '',
  },
]
