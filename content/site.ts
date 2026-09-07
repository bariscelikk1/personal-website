export const roles = [
  "Machine Learning Researcher",
  "Full-Stack Engineer",
  "Optimizer-from-scratch Guy",
  "Community Builder",
  "Next.js Developer",
  "Deep Learning Nerd",
];

export const tickerText =
  "✦ welcome 2 my corner of the web ✦ software engineer · ml researcher ✦ open 2 internships ✦ DermAI: 98% accuracy ✦ optimizers from scratch ✦ GDG YTÜ ✦ istanbul → the world ✦ ";

export const skills = [
  "C",
  "PYTHON",
  "JAVA",
  "NEXT.JS",
  "TENSORFLOW",
  "KERAS",
  "POSTGRESQL",
  "PRISMA",
  "SUPABASE",
  "NUMPY",
  "GIT",
  "LINUX",
  "VERILOG",
  "●",
];

export const stats = [
  { count: 98, suffix: "%", label: "Val. accuracy · DermAI" },
  { count: 10015, suffix: "+", label: "Images trained on" },
  { count: 200, suffix: "+", label: "Attendees gathered" },
  { count: 30, suffix: "+", label: "Students mentored" },
  { count: 3, suffix: "+ yrs", label: "Building & shipping" },
];

export type Project = {
  slug: "dermai" | "optimizer" | "kortly" | "airline";
  badge: string;
  badgeColor?: "pink" | "aqua";
  meta: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    slug: "dermai",
    badge: "98% ACCURACY",
    meta: "2026 · Deep Learning · Medical AI",
    title: "DermAI",
    description:
      "A 7-class dermoscopic skin-lesion classifier on HAM10000 (10,015 images) hitting 98%+ validation accuracy, with melanoma recall as the primary target. Two-stage LP→FT transfer pipeline, custom Keras callbacks, and a 58:1 class-imbalance solved with strategic oversampling.",
    stack: ["TensorFlow/Keras", "EfficientNetB0", "Transfer Learning", "Kaggle"],
    href: "https://github.com/bariscelikk1/dermai",
  },
  {
    slug: "optimizer",
    badge: "FROM SCRATCH",
    badgeColor: "pink",
    meta: "2026 · Optimization · Visualization",
    title: "Optimizer Lab",
    description:
      "Engineered Gradient Descent, SGD & Adam from scratch, no library shortcuts, then visualized and raced their convergence trajectories on a custom semantically-vectorized dataset. Math you can watch move.",
    stack: ["Python", "NumPy", "Google Colab"],
    href: "https://github.com/bariscelikk1",
  },
  {
    slug: "kortly",
    badge: "FULL-STACK · LIVE",
    badgeColor: "aqua",
    meta: "2026 · Next.js · Production",
    title: "Kortly · Reservations",
    description:
      "A full-stack sports-complex reservation platform built with a 5-person team: real payments via Iyzico, live weather via Open-Meteo, and end-to-end system design, docs & UI/UX across the whole lifecycle.",
    stack: ["Next.js 14", "PostgreSQL", "Prisma", "Supabase", "Iyzico"],
    href: "https://github.com/bariscelikk1",
  },
  {
    slug: "airline",
    badge: "OOP ENGINE",
    meta: "2025 · Java · Systems",
    title: "Airline Management System",
    description:
      "An object-oriented Java engine simulating a full airline reservation system: inheritance, polymorphism & encapsulation enforced across booking, cancellation and listing flows. Clean OOP, textbook-tight.",
    stack: ["Java", "OOP"],
    href: "https://github.com/bariscelikk1",
  },
];

export type ExperienceItem = {
  icon: "coordinator" | "coach" | "member";
  when: string;
  title: string;
  org: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    icon: "coordinator",
    when: "2025 → now",
    title: "Event Coordinator & Core Member",
    org: "GDG YTÜ · Google Developer Groups",
    description:
      "Spearheaded GDays YTÜ, a 200+ attendee flagship tech conference, directing the full speaker lineup, end-to-end logistics and live on-site operations. Drive community programming across women-in-tech talks, hackathons and datathons that connect students directly to industry.",
  },
  {
    icon: "coach",
    when: "2023 → now",
    title: "Student Coach & Mentor",
    org: "Baykuş Mentörlük",
    description:
      "Coached 30+ university-entrance candidates to exam readiness through tailored one-on-one study strategies and structured problem-solving, translating high-pressure prep into real acceptance-letter outcomes.",
  },
  {
    icon: "member",
    when: "2023 → now",
    title: "Active Member",
    org: "SKYLAB Computer Club · YTÜ",
    description:
      "Two years embedded in weekly coding nights and collaborative build sessions, shipping technical initiatives alongside the university's core developer community.",
  },
];

export type MemoryCardSkill = {
  name: string;
  category: string;
  blurb: string;
  level: number;
};

export const memoryCardSkills: MemoryCardSkill[] = [
  { name: "Python", category: "Language", blurb: "ML, data pipelines, the glue for everything.", level: 92 },
  { name: "TensorFlow / Keras", category: "Deep Learning", blurb: "Trained DermAI to 98%+ val accuracy.", level: 88 },
  { name: "NumPy", category: "Math Engine", blurb: "Optimizers from scratch: GD, SGD, Adam.", level: 86 },
  { name: "Next.js 14", category: "Full-Stack", blurb: "Shipped Kortly to production.", level: 85 },
  { name: "PostgreSQL + Prisma", category: "Database", blurb: "Schemas, migrations, real data.", level: 80 },
  { name: "Supabase", category: "Backend", blurb: "Auth, storage, realtime, done fast.", level: 78 },
  { name: "Java", category: "Language", blurb: "OOP engines & clean architecture.", level: 82 },
  { name: "C", category: "Language", blurb: "Systems & low-level, close to the metal.", level: 80 },
  { name: "Git + Linux", category: "Toolchain", blurb: "Terminal-native, daily driver.", level: 88 },
  { name: "Leadership", category: "Soft Skill", blurb: "Ran a 200+ attendee tech conference.", level: 90 },
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
