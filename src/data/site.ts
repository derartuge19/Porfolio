export const profile = {
  name: "Derartu Nigatu Tuge",
  shortName: "Derartu",
  role: "Software Engineer · Backend-heavy",
  tagline:
    "Full-stack oriented, backend-first — APIs, Redis, gateways, Docker, and RAG systems from architecture through deploy.",
  location: "Addis Ababa, Ethiopia",
  email: "derartuge@gmail.com",
  phone: "+251 93 222 0014",
  github: "https://github.com/derartuge19",
  resumeUrl: "/assets/resume.pdf",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
] as const;

export const about = {
  paragraphs: [
    "Hi — I'm Derartu, a software engineer with 2–3 years of hands-on experience. I'm full-stack oriented, but backend-heavy: most of my depth is in APIs, data, and infrastructure. At SKYKIN I owned backend systems end to end — API gateway design, Redis caching and performance tuning, rate limiting, and Telebirr payment integration — then containerized services with Docker so releases stayed repeatable.",
    "I care a lot about system design: reverse proxies and Nginx, API gateways, caching strategies, rate limiting, and how services stay fast and protected under load. I can still ship the UI when needed (Next.js, React), but my home base is Django, NestJS, Node, and the systems around them — including RAG with LLMs, vector search, and local models.",
    "Based in Addis Ababa. Outside of code you'll usually find me sketching architectures, refining infra I already shipped, or exploring how local LLMs can run without cloud APIs.",
  ],
};

export const experience = [
  {
    company: "SKYKIN",
    companyUrl: undefined as string | undefined,
    title: "Full Stack Developer",
    range: "Jan 2026 — Aug 2026",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Architected RESTful APIs with Django and DRF so Next.js and React frontends shared one consistent API layer.",
      "Designed and built API gateway components — object storage, caching strategy, and rate limiting — to protect services from overload while keeping responses fast.",
      "Tuned backend performance with Redis caching to cut repeated database reads; containerized services with Docker for consistent deploys across environments.",
      "Applied system-design patterns for traffic control and edge concerns (rate limiting, caching, gateway routing) alongside authentication and input validation.",
      "Integrated Telebirr payments (SOAP + REST) and shipped across Node.js, NestJS, Django REST Framework, Next.js, and React — from API design to UI.",
    ],
    tech: [
      "Django",
      "DRF",
      "NestJS",
      "Node.js",
      "Next.js",
      "React",
      "Redis",
      "Docker",
      "API Gateway",
      "Rate Limiting",
      "Telebirr",
    ],
  },
];

export const skillGroups = [
  {
    title: "System design & DevOps",
    items: [
      "Docker",
      "Nginx",
      "Reverse proxy",
      "API gateway",
      "Redis",
      "Caching strategies",
      "Rate limiting",
      "Microservices",
      "Object storage",
      "CI-friendly deploys",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Django",
      "DRF",
      "NestJS",
      "Node.js",
      "Express",
      "REST",
      "GraphQL",
      "SOAP & REST integration",
    ],
  },
  {
    title: "AI & data",
    items: [
      "RAG",
      "LLMs",
      "Embeddings",
      "pgvector",
      "Ollama",
      "Groq",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    title: "Frontend & languages",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Go",
      "Kotlin",
      "Tailwind CSS",
    ],
  },
];

export const projects = [
  {
    title: "AI Chatbot with PDF RAG",
    description:
      "Multi-user chatbot with PDF-grounded Q&A. Solo-built RAG pipeline: parsing, chunking, Gemini embeddings, cosine retrieval via Postgres, plus RLS isolation and Groq streaming answers.",
    tech: ["Next.js", "Supabase", "pgvector", "Groq", "Gemini"],
    href: "https://spidey-chi.vercel.app",
    repo: "https://github.com/derartuge19/support-bot",
    image: "/assets/projects/rag-chatbot.jpg",
    badge: "Live",
  },
  {
    title: "Sniply",
    description:
      "Subscription link shortener SaaS — Free and Pro plans with Redis-backed usage metering, Stripe webhooks, click analytics, QR codes, and Dockerized deploys with managed Postgres and Redis.",
    tech: ["Django", "React", "Stripe", "Redis", "Docker"],
    href: "https://sniply-ksfa.onrender.com",
    repo: "https://github.com/derartuge19/sniply",
    image: "/assets/projects/sniply.jpg",
    badge: "Live API",
  },
  {
    title: "Local LLM RAG System",
    description:
      "Fully local RAG app with Qwen via Ollama for answers and MiniLM for embeddings — zero external API calls. In progress.",
    tech: ["Ollama", "Qwen", "MiniLM"],
    href: undefined,
    repo: undefined,
    image: "/assets/projects/local-rag.jpg",
    badge: "In progress",
  },
  {
    title: "Zemenay Blog System",
    description:
      "Plug-and-play blog platform with auth, posts, users, and tags — JWT, RBAC, rate limiting, and Swagger docs.",
    tech: ["Next.js", "NestJS", "Rate Limiting", "JWT"],
    href: undefined,
    repo: "https://github.com/derartuge19/Zemenay-Blog",
    image: "/assets/projects/zemenay.jpg",
    badge: undefined,
  },
  {
    title: "BookHaven",
    description:
      "Book e-commerce covering browse, search, and purchase, with Google Books API for catalog data.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    href: undefined,
    repo: "https://github.com/derartuge19/bookhaven",
    image: "/assets/projects/bookhaven.jpg",
    badge: undefined,
  },
  {
    title: "Flipstar",
    description:
      "Instagram-style social platform — feeds, posts, media sharing, and interactions — as a Django/React web app and React Native mobile client with PWA features.",
    tech: ["Django", "React", "React Native"],
    href: undefined,
    repo: undefined,
    image: "/assets/projects/flipstar.jpg",
    badge: undefined,
  },
];
