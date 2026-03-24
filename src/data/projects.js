/**
 * Media: /public/projects/<slug>/ (Vite copies public/ to dist on build).
 * Facts aligned with your public GitHub profile README (SM-knigt/SM-knigt).
 */

const silaDir = '/projects/sila'
const planDir = '/projects/planemate-ai'
const hubDir = '/projects/hupehub'

export const PROJECTS = [
  {
    id: 'sila',
    title: 'SILA',
    tagline: 'Arabic sign language recognition',
    description:
      'Samsung Innovation Campus capstone: ~49k images across 32 Arabic sign classes, PyTorch CNN reaching 97.4% test accuracy. FastAPI inference service plus a lightweight web UI. I led the data pipeline and coordinated a six person Agile team.',
    image: `${silaDir}/ffad5796-a848-46f4-9d74-2e14057ca9e7.jpg`,
    gallery: [
      `${silaDir}/ffad5796-a848-46f4-9d74-2e14057ca9e7.jpg`,
      `${silaDir}/cover.jpg`,
      `${silaDir}/ab8e855c-b3d1-435f-a819-5c05d7d15cf2.jpg`,
      `${silaDir}/f32e86bd-ad18-4af5-9f33-d6e233936404.jpg`,
    ],
    tech: ['python', 'pytorch', 'fastapi'],
    github: 'https://github.com/SM-knigt/Sila',
    linkedin:
      'https://www.linkedin.com/posts/saudbinsamhan_samsunginnovationcampus-miskskills-artificialintelligence-activity-7373003436218286080-DbPs',
    demo: null,
    highlights: ['97.4% test accuracy', '~49k images, 32 classes', 'FastAPI and web UI'],
  },
  {
    id: 'planemate-ai',
    title: 'PlanMate AI',
    tagline: 'AI powered learning plans',
    description:
      'Tuwaiq Academy with Groq: Groq Llama 3.1 8B with FastAPI to generate structured JSON learning paths with time estimates, milestones, and direct resource links, served through a responsive web UI.',
    image: `${planDir}/530a72ef-4b85-4e46-93a9-a23d30e3b01c.jpg`,
    gallery: [
      `${planDir}/530a72ef-4b85-4e46-93a9-a23d30e3b01c.jpg`,
      `${planDir}/cover.jpg`,
      `${planDir}/a2430926-bb4f-43bc-b2be-6756b51ac9ab.jpg`,
      `${planDir}/b3bb0861-4346-4224-bbe9-b89a74c4ad54.jpg`,
      `${planDir}/d7614ca1-77ce-401e-8747-046dec63098b.jpg`,
    ],
    tech: ['python', 'fastapi', 'typescript', 'llm'],
    github: 'https://github.com/SM-knigt/PlaneMate-AI',
    linkedin:
      'https://www.linkedin.com/posts/saudbinsamhan_groq-ai-tuwaiq-activity-7375475910344474624-z-u5',
    demo: null,
    highlights: ['Groq Llama 3.1 8B', 'JSON learning paths', 'Responsive web UI'],
  },
  {
    id: 'hupehub',
    title: 'HopeHub',
    tagline: 'Charity management platform',
    description:
      'Misk Immersive Backend program: full stack Flask + Supabase with JWT and RBAC, an eight table normalized schema, fifteen REST APIs, admin dashboard with analytics, and payment integration.',
    image: `${hubDir}/cover.jpg`,
    gallery: [
      `${hubDir}/cover.jpg`,
      `${hubDir}/8796b801-afa6-4492-b5c4-06cac69d6cd6.jpg`,
      `${hubDir}/3bdc9a61-43c9-4782-a9b1-43950306d6e7.jpg`,
      `${hubDir}/954433bf-ae32-4b13-870e-4cfb95454f38.jpg`,
      `${hubDir}/cfd81270-64ba-4b97-9e1e-f5dfa391a4a2.jpg`,
      `${hubDir}/e09c2924-fe4f-43a9-a21e-660c149ace89.jpg`,
      `${hubDir}/e1767ebf-84f2-4680-b661-e567e0f43912.jpg`,
    ],
    tech: ['python', 'flask', 'supabase'],
    github: 'https://github.com/SM-knigt/HupeHub',
    linkedin:
      'https://www.linkedin.com/posts/saudbinsamhan_immersive-techforgood-webdevelopment-activity-7347931641064927232-gDMR',
    demo: null,
    highlights: ['JWT and RBAC', '8 tables, 15 APIs', 'Admin and payments'],
  },
]
