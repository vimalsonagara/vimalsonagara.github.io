'use strict';

/**
 * PORTFOLIO — CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 * This is the ONLY file you need to edit for any content changes.
 * No HTML or CSS knowledge required — just update the values below.
 */
window.PORTFOLIO_CONFIG = {

  /* ── PERSONAL INFO ────────────────────────────────────────────── */
  personal: {
    name:       'Vimal Sonagara',
    initials:   'VS',
    greeting:   "Hi! I'm Vimal Sonagara",
    role:       'Software Engineer · AI/ML · Backend · Full Stack · Founder & CEO of Divider',
    tagline:    'Building intelligent systems and scalable backends.',
    bio:        'Software Engineer with experience in AI/ML, backend systems, and full-stack development. Currently building AI agents, computer vision pipelines, and production-grade mobile + web applications. Founder of Divider — a live expense-splitting app on Google Play.',
    photo:      'asset/Vimal.jpg',
    email:      'vimalsonagara0207@gmail.com',
    phone:      '+91 6353119347',
    cvLink:     'https://drive.google.com/file/d/1fHt4684S9177k-OGbi_PKI8spC3jjUeH/view',
    available:  true,
  },

  /* ── HERO STATS ───────────────────────────────────────────────── */
  stats: [
    { value: '10+',  label: 'Projects Done'      },
    { value: '1.5+', label: 'Years Experience'   },
  ],

  /* ── SOCIAL LINKS ─────────────────────────────────────────────── */
  social: {
    github:      'https://github.com/vimalsonagara?tab=repositories',
    linkedin:    'https://www.linkedin.com/in/vimal-sonagara-102396226/',
    instagram:   'https://www.instagram.com/vimal_sonagara?igsh=MWtmMzhlZnZ6a3l5ZQ==',
    leetcode:    'https://leetcode.com/vimal_01',
    codeforces:  'https://codeforces.com/profile/vimal_sonagara',
    codechef:    'https://www.codechef.com/users/Vimal_Sonagara',
  },

  /* ── EXPERIENCE ───────────────────────────────────────────────── */
  experience: [
    {
      company:   'Divider',
      companySub: '(Founder)',
      role:      'Founder & Developer',
      type:      'Mobile Application',
      location:  'Remote',
      from:      'Jan 2026',
      to:        'Present',
      bullets: [
        'Founded and independently built Divider — a full-stack expense-splitting app, available on Google Play.',
        'Architected the Spring Boot backend with JWT auth, event-driven activity feed, multi-currency settlements, and Razorpay-powered premium subscriptions.',
        'Built the Flutter mobile app with 3-language localization (English, Hindi, Gujarati) and a freemium model with Google AdMob.',
        'Deployed on AWS EC2 with AWS RDS (PostgreSQL) and Cloudflare DNS; manages all DevOps via Docker and manual CI/CD.',
      ],
      blogs: [
        { label: '<i class="fa-brands fa-google-play"></i> Play Store', url: 'https://play.google.com/store/apps/details?id=in.divider.app' },
        { label: '<i class="fa-solid fa-globe"></i> divider.in',         url: 'https://divider.in' },
      ],
    },
    {
      company:   'Devx AI Labs',
      role:      'Software Engineer (AI/ML)',
      type:      'Full-time',
      location:  'Surat, India',
      from:      'Feb 2026',
      to:        'Present',
      bullets: [
        'Developed RESTful APIs using FastAPI and integrated cloud infrastructure for secure deployment, backend services, and scalable AI workflows.',
        'Built and optimized Python-based computer vision pipelines for stump and ball tracking, including data annotation, preprocessing, model training, and testing.',
        'Owned and optimized an existing chatbot codebase — identified performance bottlenecks and reduced response latency by 60–70%.',
        'Explored Conversational AI (CCAI), MCP architecture, and agent application interfaces for scalable AI agent workflows.',
        'Conducted benchmarking and comparative analysis of agent-building frameworks; investigated and cataloged AI agent failure scenarios.',
      ],
      blogs: [
        { label: '<i class="fa-solid fa-book-open"></i> Agent Building Frameworks', url: 'https://www.devxlabs.ai/blogs/agent-building-frameworks' },
        { label: '<i class="fa-solid fa-book-open"></i> Semantic Kernel Multi-Tool Bug', url: 'https://www.devxlabs.ai/blogs/semantic-kernel-bedrock-multi-tool-bug' },
      ],
    },
    {
      company:   'MAQ Software',
      companySub: '(Microsoft Project)',
      role:      'Software Engineer I',
      type:      'Full-time',
      location:  'Noida, India',
      from:      'Jan 2025',
      to:        'Jan 2026',
      bullets: [
        'Contributed to a full-stack web application built for Microsoft, building responsive front-end features using React and TypeScript.',
        'Developed C#/.NET APIs and backend business logic, managed SQL databases using SQL Server Management Studio (SSMS).',
        'Supported deployment and releases in an agile environment, collaborating closely with cross-functional teams.',
      ],
      blogs: [],
    },
  ],

  /* ── PROJECTS ─────────────────────────────────────────────────── */
  projects: [
    {
      title:  'Divider — Expense Splitting App',
      date:   '2026 – Present',
      image:  'asset/best_promo.png',
      desc:   'Full-stack expense-splitting platform (like Splitwise) with a Flutter mobile app and Spring Boot REST API. Supports group/friend expense tracking, multi-currency settlements, simplified debt calculation, and a Razorpay-powered freemium model with Google AdMob.',
      tags:   ['Spring Boot', 'Flutter', 'PostgreSQL', 'AWS EC2', 'Docker', 'Razorpay', 'JWT', 'Flyway'],
      links:  [
        { label: '🌐 Website', url: 'https://divider.in' },
        { label: '⚡ GitHub', url: 'https://github.com/Vimal-Sonagara' },
      ],
    },
    {
      title:  'Food Delivery System',
      date:   "Jan'24 – Feb'24",
      image:  'asset/mern project landing.png',
      desc:   'Web-based platform for ordering food online. Users can browse menus, add items to cart, complete secure checkouts, and track order history.',
      tags:   ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap', 'MUI'],
      links:  [
        { label: '🚀 Live Demo', url: 'https://food-app-4fef.onrender.com/login' },
        { label: '⚡ GitHub', url: 'https://github.com/Vimal-Sonagara' },
      ],
    },
  ],

  /* ── BLOGS ────────────────────────────────────────────────────── */
  blogs: [
    {
      source: 'Devx AI Labs',
      title:  'Comparative Analysis of Agent Building Frameworks',
      desc:   'Benchmarked leading AI agent-building frameworks, evaluating design patterns, reliability, and deployment trade-offs for production AI systems.',
      url:    'https://www.devxlabs.ai/blogs/agent-building-frameworks',
    },
    {
      source: 'Devx AI Labs',
      title:  'Semantic Kernel + Bedrock: Multi-Tool Bug Investigation',
      desc:   'Deep-dive investigation into a multi-tool calling bug in the Semantic Kernel + AWS Bedrock integration — root cause analysis and resolution.',
      url:    'https://www.devxlabs.ai/blogs/semantic-kernel-bedrock-multi-tool-bug',
    },
  ],

  /* ── SKILLS ───────────────────────────────────────────────────── */
  skills: [
    { group: 'Languages',         tags: ['Python', 'Java', 'C++', 'C', 'TypeScript', 'JavaScript', 'Dart', 'SQL'] },
    { group: 'Backend',           tags: ['Spring Boot', 'FastAPI', 'Node.js', 'C#/.NET', 'REST APIs', 'JWT'] },
    { group: 'Frontend / Mobile', tags: ['Flutter', 'React.js', 'TypeScript', 'Bootstrap', 'HTML5/CSS3'] },
    { group: 'AI / ML',           tags: ['Computer Vision', 'NLP', 'LLM Agents', 'Agent Building Framework', 'MCP', 'CCAI'] },
    { group: 'AI Tools',          tags: ['Claude', 'Claude Code', 'Microsoft Copilot', 'ChatGPT', 'OpenAI Codex', 'DeepSeek', 'Gemini Enterprise'] },
    { group: 'Cloud / DevOps',    tags: ['AWS EC2', 'AWS RDS', 'Azure', 'Docker', 'Cloudflare', 'PostgreSQL'] },
    { group: 'CS Fundamentals',   tags: ['DSA', 'OOPs', 'OS', 'DBMS', 'CN', 'HPC'] },
  ],

  /* ── COMPETITIVE PROGRAMMING ──────────────────────────────────── */
  cpProfiles: [
    { platform: 'LeetCode',        rating: '2088',  title: 'Knight · Top 1.68%', handle: '@vimal_01',          url: 'https://leetcode.com/vimal_01' },
    { platform: 'Codeforces',      rating: '1401',  title: 'Specialist',         handle: '@vimal_sonagara',    url: 'https://codeforces.com/profile/vimal_sonagara' },
    { platform: 'CodeChef',        rating: '1724',  title: '3 Star ⭐⭐⭐',       handle: '@Vimal_Sonagara',    url: 'https://www.codechef.com/users/Vimal_Sonagara' },
    { platform: 'Problems Solved', rating: '1500+', title: 'Across all platforms', handle: 'LC · CF · CC · GFG', url: '' },
  ],

  /* ── ACHIEVEMENTS ─────────────────────────────────────────────── */
  achievements: [
    { icon: '🏆', title: 'Global Rank 60',              desc: 'LeetCode Weekly Contest 450 — out of 26,806 participants' },
    { icon: '🥇', title: '5th Rank — Gujarat Board',   desc: 'ACPC 12th Standard Examination' },
    { icon: '📊', title: '99.95 Percentile — GUJCET',  desc: 'Gujarat Common Entrance Test' },
    { icon: '🎯', title: 'JEE Mains 98.88 Percentile', desc: 'Class XII Science: 99.93 Percentile' },
  ],

  /* ── EDUCATION ────────────────────────────────────────────────── */
  education: [
    {
      institute: 'Dhirubhai Ambani Institute of Information & Communication Technology (DA-IICT)',
      degree:    'B.Tech (Honours) in ICT with minor in Computational Science (ICT-CS)',
      score:     'CGPA: 7.74 · Gandhinagar, India',
      from:      '2021',
      to:        '2025',
    },
    {
      institute: 'BAPS Swaminarayan Vidyamandir, Gondal',
      degree:    'Class XII — Science',
      score:     'GUJCET 99.95 Percentile · Science 99.93 Percentile  · JEE Mains 98.88 Percentile',
      from:      '2020',
      to:        '2021',
    },
  ],

  /* ── FOOTER ───────────────────────────────────────────────────── */
  footer: {
    text: 'Built by Vimal Sonagara · Hosted on GitHub Pages',
    year: new Date().getFullYear(),
  },
};
