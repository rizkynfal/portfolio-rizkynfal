// Single source of truth for portfolio content (based on the latest CV).

export const profile = {
  name: "Rizky Naufal Alghifary",
  shortName: "Rizky Naufal",
  handle: "rizkynfal",
  role: "Software Engineer",
  focus: "Backend · Gen AI · Mobile",
  location: "Jakarta, Indonesia",
  photo: "/assets/img/foto-hero.png",
  photoAlt: "/assets/img/foto-ai.png",
  cv: "/assets/static/Rizky_Naufal_Alghifary-resume.pdf",
  summary:
    "Software Engineer with a strong focus on backend systems — building high-throughput microservices in Go and NestJS with gRPC/Protobuf, optimizing database performance, and integrating enterprise ERP platforms. I ship production Gen AI features such as RAG pipelines with semantic search and LLM-powered document automation, and extend that foundation into Flutter mobile apps and modern Next.js interfaces.",
  about: [
    "I work at the intersection of reliable backend engineering and practical AI. Most of my days are spent designing APIs, untangling slow queries, and connecting enterprise systems so that teams can trust their data.",
    "I collaborate directly with stakeholders across Indonesia and Australia in cross-timezone delivery, translating business requirements into features that hold up under production load.",
  ],
  socials: {
    email: "naufalrizky79@gmail.com",
    linkedin: "https://www.linkedin.com/in/rizkynfal/",
    github: "https://github.com/rizkynfal",
    whatsapp: "https://wa.me/6281224906145",
  },
};

export const stats = [
  {
    value: 75,
    suffix: "%",
    label: "Faster ERP API response",
    note: "20s → 5s",
  },
  {
    value: 624,
    suffix: "K+",
    label: "ERP records in pipelines",
    note: "Real-time forecasting",
  },
  {
    value: 80,
    suffix: "+",
    label: "REST APIs designed",
    note: "~500ms avg. response",
  },
  {
    value: 34,
    suffix: "K",
    label: "Lines of Flutter shipped",
    note: "35-screen app, solo",
  },
];

export const services = [
  {
    icon: "server",
    title: "Backend & Microservices",
    desc: "High-throughput services in Go, NestJS and Node.js with gRPC/Protobuf, CQRS and clean REST contracts.",
    tags: ["Go", "NestJS", "gRPC", "CQRS"],
  },
  {
    icon: "sparkles",
    title: "Gen AI Engineering",
    desc: "RAG pipelines with pgvector semantic search, LLM-powered document processing and AI-driven workflow automation.",
    tags: ["RAG", "pgvector", "OpenAI", "LLM"],
  },
  {
    icon: "database",
    title: "Data & ERP Integration",
    desc: "Query optimization, ETL and ERP integrations with Microsoft Graph, Azure AD and BuildSmart for finance & ops teams.",
    tags: ["PostgreSQL", "MSSQL", "ETL", "MS Graph"],
  },
  {
    icon: "smartphone",
    title: "Mobile & Web Apps",
    desc: "Flutter apps with BLoC architecture and responsive Next.js / React interfaces — from first screen to store release.",
    tags: ["Flutter", "BLoC", "Next.js", "React"],
  },
];

export const experiences = [
  {
    company: "Altimeda Cipta Visitama",
    about:
      "Indonesia- and Australia-based digital transformation firm specializing in Gen AI, data lakehouse engineering, ERP systems and custom enterprise solutions.",
    logo: "/assets/img/projectedai/projectedai-logo.png",
    href: "/experiences/altimeda",
    roles: [
      {
        title: "Backend Developer",
        type: "Full-time",
        period: "Jul 2024 — Present",
        location: "Depok, Indonesia",
        current: true,
        stack: ["Go", "NestJS", "Node.js", "gRPC", "PostgreSQL", "MS Graph"],
        highlights: [
          "Reduced Cost Detail API response time from 20s to 5s (75% reduction) by eliminating N+1 query patterns and optimizing GORM/SQL joins in a production ERP system.",
          "Engineered data pipelines processing 624,000+ ERP transaction records to power real-time financial forecasting and operational reporting.",
          "Owned end-to-end delivery of 5 core ERP modules (Project Costing, Labour/Equipment Forecasting, Procurement, Reporting), integrating BuildSmart ERP with Outlook, Azure AD and Microsoft Graph.",
          "Built gRPC/Protobuf microservices for workforce and equipment management, standardizing communication across 5 downstream services.",
          "Built a Node.js RAG pipeline using PostgreSQL semantic search to power Standard Work Procedure generation and AI document processing across CVs, contracts and catalogs.",
          "Diagnosed and resolved a production memory crash caused by unbounded query fanout, redesigning queries with correlated subqueries and EXISTS clauses.",
          "Optimized a Go reporting engine (excelize) with bulk queries and null-safe output, cutting report generation time by 30%.",
          "Designed and maintained 80+ REST APIs in Go, Node.js and NestJS, sustaining ~500ms average response times under production load.",
          "Built Go/gRPC microservices for ATLAS, an AI operating engine for industrial operators, including the NEXA Evaluator and Manufacturing Inspection.",
          "Partnered with Australian stakeholders across timezones to turn business requirements into production features under aggressive sprint timelines.",
        ],
      },
      {
        title: "Mobile Developer",
        type: "Part-time",
        period: "Apr 2024 — Jun 2024",
        location: "Jakarta, Indonesia",
        stack: ["Flutter", "Dart", "BLoC"],
        highlights: [
          "Migrated a legacy mobile application to Flutter, cutting load time by 2s and establishing a scalable codebase.",
          "Implemented BLoC state management across core modules, reducing state-related bugs.",
          "Independently built and published “IoT RMA”, a fuel train monitoring app, to the Google Play Store.",
          "Diagnosed and resolved 5+ post-migration stability issues.",
        ],
      },
    ],
  },
  {
    company: "Ismart Inter Global",
    about:
      "IT solutions company specializing in Enterprise Application Integration and professional consulting services for enterprise clients.",
    logo: "/assets/img/scc/scc-logo.svg",
    href: "/experiences/ismart",
    roles: [
      {
        title: "Mobile Developer",
        type: "Freelance",
        period: "Nov 2024 — Feb 2025",
        location: "Jakarta, Indonesia",
        stack: ["Flutter", "BLoC", "Firebase", "Dio"],
        highlights: [
          "Architected a supplier digitalization app from scratch as founding developer — 35 screens and ~34,000 lines of code.",
          "Designed a server-driven dynamic form engine supporting 10+ field types, letting non-developers publish forms without app releases.",
          "Implemented QR/barcode asset scanning that auto-populates forms, and a multi-step approval workflow across supplier and admin roles.",
          "Built a centralized network layer with typed exceptions and proactive JWT refresh across all BLoC modules.",
          "Integrated Firebase Cloud Messaging and flutter_map/geolocator for geo-tagged asset tracking.",
        ],
      },
      {
        title: "Backend Developer",
        type: "Freelance",
        period: "Jun 2024 — Sep 2024",
        location: "Jakarta, Indonesia",
        stack: ["Express.js", "PostgreSQL", "Midtrans", "JWT"],
        highlights: [
          "Designed and built a RESTful backend for a billiard booking platform with admin and customer roles.",
          "Architected 6 core services using the CQRS pattern to separate query and command paths.",
          "Integrated the Midtrans payment gateway for real-time, secure booking transactions.",
          "Automated product availability tracking via scheduled cron jobs.",
        ],
      },
      {
        title: "Frontend Developer",
        type: "Part-time",
        period: "Jan 2024 — Jul 2024",
        location: "Jakarta, Indonesia",
        stack: ["Flutter", "BLoC", "REST"],
        highlights: [
          "Developed 20+ production features across enterprise Supply Chain Management applications.",
          "Implemented BLoC architecture across 20+ modules and integrated 50+ RESTful endpoints.",
          "Delivered ahead of sprint deadlines across 20+ sprint cycles.",
          "Resolved 10+ production issues and built 10+ reusable Flutter widgets.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    slug: "atlas",
    title: "ATLAS",
    category: "Industrial AI Platform",
    company: "Altimeda Cipta Visitama",
    period: "2026 — Present", // TODO: add timeline, e.g. "2025 — Present"
    role: "Backend Developer",
    href: "/experiences/altimeda/atlas",
    cover: "/assets/img/atlas/atlas-1.png",
    logo: "/assets/img/atlas/atlas-logo.png",
    gallery: [
      "/assets/img/atlas/atlas-logo.png",
      "/assets/img/atlas/atlas-1.png",
      "/assets/img/atlas/atlas-2.png",
      "/assets/img/atlas/atlas-3.png",
    ],
    accent: "from-violet-500/30 to-indigo-700/10",
    stack: ["Go", "gRPC", "Microservices", "socket.io", "Keycloak"],
    summary:
      "An AI operating engine for industrial and construction operators. It runs on top of their existing systems instead of replacing them.",
    description: [
      "Industrial and construction operators often depend on dozens of systems that don't talk to each other. ATLAS by Altimeda sits on top of their existing ERP, MES, SCADA and IoT tools instead of replacing them, and runs everything through one continuous decision loop.",
      "Applications are built on that engine, including asset health and maintenance prioritisation, manufacturing line balancing, and construction labour and site-diary management. A portal handles module subscriptions and role-based access for each tenant.",
      "The backend is made of Go microservices behind a single API gateway, which verifies Keycloak JWTs and forwards REST requests to the services over gRPC. Each service has its own PostgreSQL database. Socket.IO powers real-time collaboration on the canvas, a Python/FastAPI pipeline executes FABRIX workflows, and an MCP server lets a chatbot draft workflow canvases with read-only access.",
    ],
    loop: [
      {
        name: "FABRIX",
        text: "Connects to operational data sources and validates the data.",
      },
      {
        name: "ONTRIX",
        text: "Models how the business runs by linking machines, orders, people and events.",
      },
      {
        name: "NEXA",
        text: "Surfaces prioritised recommendations, each backed by evidence.",
        mine: "NEXA Evaluator",
      },
      {
        name: "Actions",
        text: "Approved actions trigger workflows, and their outcomes feed back to improve the next decision.",
      },
    ],
    highlights: [
      "Built backend microservices in Go that communicate over gRPC as part of the ATLAS microservice architecture.",
      "Built the NEXA Evaluator for NEXA, the part of the engine that turns modelled operational data into prioritised, evidence-backed recommendations.",
      "Built the Manufacturing Inspection module for ATLAS's manufacturing applications.",
    ],
  },
  {
    slug: "adenco",
    title: "ADENCO",
    category: "Integrated Enterprise Platform",
    company: "Altimeda Cipta Visitama",
    period: null, // TODO: add timeline, e.g. "Jul 2024 — Present"
    role: "Backend Developer",
    href: "/experiences/altimeda/adenco",
    cover: "/assets/img/adenco/adenco-1.png",
    logo: "/assets/img/adenco/adenco-logo.png",
    gallery: [
      "/assets/img/adenco/adenco-1.png",
      "/assets/img/adenco/adenco-2.png",
      "/assets/img/adenco/adenco-3.png",
    ],
    accent: "from-cyan-500/30 to-blue-700/10",
    stack: ["Go", "NestJS", "TypeScript", "gRPC", "Azure AD", "BuildSmart ERP"],
    summary:
      "An integrated enterprise platform that connects operational systems, analytics and AI-driven workflows.",
    description: [
      "ADENCO brings a business's operational systems, analytics and AI-driven workflows together on one platform. It removes the friction of isolated processes, so information and actions move smoothly between the tools a business relies on.",
      "This shared operational foundation helps teams coordinate their work around timely, data-informed decisions.",
    ],
    metrics: [
      { value: "80+", label: "REST APIs built & maintained" },
      { value: "650K+", label: "Enterprise records integrated" },
      { value: "75%", label: "Lower critical API latency" },
      { value: "80%", label: "Less manual approval work" },
    ],
    highlightGroups: [
      {
        title: "Performance & APIs",
        items: [
          "Designed, built and maintain 80+ REST APIs in Go, NestJS and TypeScript, with average response times of 250–850 ms.",
          "Cut critical API latency by 75% through query optimization, indexing and backend performance improvements.",
          "Improved backend processing performance by 60% by optimizing database queries, caching and asynchronous workflows.",
        ],
      },
      {
        title: "Data",
        items: [
          "Processed and integrated 650,000+ enterprise records from multiple business systems with high accuracy and reliability.",
          "Imported and processed 30,000+ Daily Diary records within one week while keeping data integrity intact.",
          "Designed and maintain 17+ relational tables for project costing, procurement, workforce management and other operational modules.",
        ],
      },
      {
        title: "Business modules & workflows",
        items: [
          "Built an automated project costing engine that combines ERP transactions, labour & equipment forecasting, cost forecasting and financial reporting.",
          "Delivered a production-ready Project Costing module in 3 days, in time for successful client demos under a tight deadline.",
          "Developed the procurement, inventory, transport booking, goods receipt, project setup, workforce management and daily diary modules used across business operations.",
          "Implemented approval workflows with automated Outlook email notifications, cutting manual processing time by 80%.",
        ],
      },
      {
        title: "Integrations, architecture & security",
        items: [
          "Built end-to-end integrations with BuildSmart ERP, SafetyCulture, Pipedrive, Definitive, Microsoft Outlook, Azure Active Directory and Microsoft Teams.",
          "Designed communication between microservices with gRPC and Protocol Buffers so backend services can scale.",
          "Built user management, authentication, provisioning and role-based access control on Azure Active Directory.",
        ],
      },
      {
        title: "AI automation & delivery",
        items: [
          "Worked with AI engineers on backend APIs for AI-powered business automation, including Microsoft Teams Calendar integration and automated meeting scheduling.",
          "Quickly analysed complex construction, procurement, financial forecasting and workforce management processes to ship production-ready backend solutions on aggressive timelines.",
        ],
      },
    ],
  },
  {
    slug: "projectedai",
    title: "ProjectedAI",
    category: "Gen AI Platform",
    company: "Altimeda Cipta Visitama",
    period: "Jul 2024 — Present",
    role: "Backend Developer",
    href: "/experiences/altimeda/projectedai",
    cover: "/assets/img/projectedai/projectedai-1.png",
    logo: "/assets/img/projectedai/projectedai-logo.png",
    accent: "from-sky-500/30 to-teal-500/10",
    stack: ["Node.js", "Express.js", "PostgreSQL", "pgvector", "LLM"],
    summary:
      "RAG pipeline and APIs for an AI platform that generates Standard Work Procedures and processes CVs, contracts and catalogs.",
    gallery: [
      "/assets/img/projectedai/projectedai-1.png",
      "/assets/img/projectedai/projectedai-2.png",
      "/assets/img/projectedai/projectedai-4.png",
      "/assets/img/projectedai/projectedai-3.png",
    ],
    highlights: [
      "Built a Node.js/Express.js RAG pipeline using PostgreSQL-based semantic search to retrieve reference content and prompt an LLM for structured Q&A.",
      "Powered Standard Work Procedure (SWP) generation and AI-based document processing across CVs, contracts and catalogs.",
      "Collaborated with AI engineers to align API outputs with business requirements.",
      "Implemented microservices architecture and the CQRS pattern to improve platform scalability.",
      "Automated recurring operations with cron jobs and created Outlook Calendar events from AI-generated content via Microsoft Graph.",
    ],
  },
  {
    slug: "saunders",
    title: "Saunders Forecasting",
    category: "Enterprise Web API",
    company: "Altimeda Cipta Visitama",
    period: "Jan 2025 — Feb 2025",
    role: "Backend Developer",
    href: "/experiences/altimeda/saunders",
    cover: "/assets/img/saunders/saunders-1.png",
    logo: "/assets/img/saunders/saunders-logo.png",
    accent: "from-emerald-500/30 to-green-700/10",
    stack: ["Node.js", "TypeScript", "TypeORM", "Express.js"],
    summary:
      "Forecasting APIs that help analyse market demand and predict outcomes from historical project data.",
    gallery: [
      "/assets/img/saunders/saunders-1.png",
      "/assets/img/saunders/saunders-2.png",
      "/assets/img/saunders/saunders-3.png",
      "/assets/img/saunders/saunders-4.png",
      "/assets/img/saunders/saunders-5.png",
    ],
    highlights: [
      "Developed 12 API endpoints in one week using Node.js, Express.js and TypeScript.",
      "Designed the database schema, entities and relationships with TypeORM based on forecasting requirements.",
      "Implemented endpoints for forecast approval workflow, submission, project listing and monthly / user-specific views.",
      "Mapped fact tables and forecast records for accurate reporting, with optimized queries and indexing.",
      "Ensured robust validation and error handling, and partnered with frontend developers for integration.",
    ],
  },
  {
    slug: "pei",
    title: "IoT RMA",
    category: "Mobile App · Play Store",
    company: "Altimeda Cipta Visitama",
    period: "Apr 2024 — Jun 2024",
    role: "Mobile Developer",
    href: "/experiences/altimeda/pei",
    cover: "/assets/img/pei/pei-1.jpg",
    logo: "/assets/img/pei/pei-logo.png",
    accent: "from-red-500/30 to-zinc-700/10",
    portrait: true,
    stack: ["Flutter", "Dart", "BLoC"],
    summary:
      "Fuel train monitoring app for Post Energy Indonesia — tracking fuel distribution and transaction records.",
    gallery: [
      "/assets/img/pei/pei-1.jpg",
      "/assets/img/pei/pei-2.jpg",
      "/assets/img/pei/pei-3.jpg",
    ],
    highlights: [
      "Migrated the legacy app to Flutter, cutting load time by 2s.",
      "Implemented BLoC state management to reduce state bugs and improve maintainability.",
      "Resolved 5+ stability issues after migration.",
      "Owned the release build and Google Play Store publishing end-to-end.",
    ],
  },
  {
    slug: "gobill",
    title: "Go Billiard",
    category: "Booking Platform API",
    company: "Ismart Inter Global",
    period: "Jun 2024 — Sep 2024",
    role: "Backend Developer",
    href: "/experiences/freelance/gobill",
    cover: "/assets/img/gobill/gobill-1.png",
    logo: "/assets/img/gobill/gobill-logo.png",
    accent: "from-amber-400/30 to-orange-600/10",
    stack: ["Express.js", "PostgreSQL", "Midtrans", "CQRS"],
    summary:
      "Billiard table booking platform with admin and customer roles, real-time payments and automated availability.",
    gallery: [
      "/assets/img/gobill/gobill-1.png",
      "/assets/img/gobill/gobill-2.png",
      "/assets/img/gobill/gobill-3.png",
      "/assets/img/gobill/gobill-4.png",
      "/assets/img/gobill/gobill-5.png",
      "/assets/img/gobill/gobill-6.png",
    ],
    highlights: [
      "Designed and built a RESTful backend with Express.js and PostgreSQL for admin and customer roles.",
      "Architected 6 core services using CQRS to separate query and command paths.",
      "Integrated Midtrans for real-time, secure booking transactions.",
      "Secured access with JWT authentication and automated availability updates with cron jobs.",
    ],
  },
  {
    slug: "scc",
    title: "Supply Chain Suite",
    category: "Enterprise Web App",
    company: "Ismart Inter Global",
    period: "Jan 2024 — Jul 2024",
    role: "Frontend Developer",
    href: "/experiences/ismart/scc",
    cover: "/assets/img/scc/scc-1.png",
    logo: "/assets/img/scc/scc-logo.svg",
    accent: "from-indigo-500/30 to-violet-600/10",
    stack: ["Flutter Web", "BLoC", "REST"],
    summary:
      "Responsive supply chain management apps covering procurement, inventory, supplier management and monitoring.",
    gallery: ["/assets/img/scc/scc-2.png", "/assets/img/scc/scc-1.png"],
    highlights: [
      "Developed and maintained 20+ production features across procurement, inventory and supplier workflows.",
      "Implemented BLoC architecture across 20+ modules for predictable state management.",
      "Integrated 50+ RESTful endpoints with reliable data synchronization.",
      "Built fully responsive interfaces for desktop, tablet and mobile.",
      "Resolved 10+ production issues and built 10+ reusable widgets.",
    ],
  },
  {
    slug: "hazob",
    title: "HAZOB App",
    category: "Internship · Mobile",
    company: "Tately NV",
    period: "Jun 2022 — Aug 2022",
    role: "Mobile Developer Intern",
    href: "/experiences/tatelynv",
    cover: "/assets/img/hazob/hazob-2.png",
    logo: "/assets/img/hazob/hazob-logo.png",
    accent: "from-fuchsia-500/30 to-purple-700/10",
    stack: ["Flutter", "Google Sheets API", "Google Drive API"],
    summary:
      "Digitized the Hazard Observation Card program from paper cards into a mobile app still in use today.",
    gallery: ["/assets/img/hazob/hazob-2.png", "/assets/img/hazob/hazob-3.png"],
    highlights: [
      "Worked with the Head of HSE to digitize the hazard observation program.",
      "Delivered all 6 required features, using Google Sheets for data and Google Drive for photos.",
      "Ran a 7-day user awareness campaign for employees.",
      "Applied a prototyping SDLC; the app remains in use today.",
    ],
  },
  {
    slug: "invitee",
    title: "Invitee",
    category: "Personal Project · 2026",
    company: "Personal",
    period: "2026",
    role: "Frontend Developer",
    href: null,
    cover: null,
    accent: "from-rose-400/30 to-pink-600/10",
    stack: ["Next.js", "TypeScript", "shadcn/ui", "Zustand", "Zod"],
    summary:
      "Digital wedding invitation builder with live template preview and a multi-section form architecture.",
    highlights: [
      "Live template preview with multi-section forms (Next.js, Tailwind, shadcn/ui).",
      "Dynamic validation with react-hook-form and Zod; fixed nested-form hydration issues.",
      "Photo upload/preview caching with Zustand and object URLs for image-heavy templates.",
    ],
  },
];

export const skills = {
  Languages: ["Go", "TypeScript", "JavaScript", "Dart", "SQL", "PHP"],
  Backend: [
    "Gin",
    "NestJS",
    "Node.js",
    "Express.js",
    "GORM",
    "TypeORM",
    "Prisma",
    "gRPC / Protobuf",
    "CQRS",
    "Swagger",
  ],
  "AI & Gen AI": [
    "LLM Prompting",
    "OpenAI API",
    "Semantic Search",
    "pgvector",
    "RAG",
  ],
  "Frontend & Mobile": ["Next.js", "React", "Flutter", "Tailwind CSS", "BLoC"],
  Database: ["PostgreSQL", "MSSQL", "MongoDB", "Query Optimization", "ETL"],
  "Cloud & DevOps": [
    "Docker",
    "Nginx",
    "Azure AD",
    "GCP",
    "Alibaba Cloud",
    "Linux",
    "Git",
  ],
  Integrations: [
    "Microsoft Graph",
    "Google Sheets API",
    "Google Drive API",
    "Midtrans",
    "BuildSmart",
  ],
};

export const education = {
  school: "Telkom University",
  degree: "Bachelor of Software Engineering",
  period: "Aug 2019 — Sep 2023",
  location: "Bandung, Indonesia",
  gpa: "3.55 / 4.00 · Cum Laude",
  logo: "/assets/img/telu-logo.png",
  highlights: [
    "Capstone Project Leader & Backend Developer for Cafeasy — cafe booking, monitoring and on-table ordering (5-member team).",
    "Assisted Web & Mobile Programming instruction for 30+ students.",
    "Head of Business Development, Software Engineering Student Association.",
  ],
};

export const extras = [
  {
    label: "Training",
    year: "2023",
    text: "Udemy — Mastering Node.js, Express & MongoDB",
  },
  {
    label: "Achievement",
    year: "2021",
    text: "Innovillage — Top 120, Smart Integration Farming (IoT Engineer)",
  },
  {
    label: "Languages",
    year: "",
    text: "Bahasa Indonesia (Native) · English B2 · TOEFL ITP 513",
  },
];

export const companies = {
  altimeda: {
    name: "Altimeda Cipta Visitama",
    blurb: experiences[0].about,
    projects: ["atlas", "adenco", "projectedai", "saunders", "pei"],
  },
  ismart: {
    name: "Ismart Inter Global",
    blurb: experiences[1].about,
    projects: ["scc", "gobill"],
  },
  freelance: {
    name: "Freelance",
    blurb:
      "Independent engagements delivering backend services and mobile apps end-to-end.",
    projects: ["gobill"],
  },
  tatelynv: {
    name: "Tately NV",
    blurb: "Internship digitizing the HSE hazard observation program.",
    projects: ["hazob"],
  },
};

export const getProject = (slug) => projects.find((p) => p.slug === slug);
