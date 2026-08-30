const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const profile = {
  initials: "MAK",
  fullName: "Mohammed Affaan Khan",
  firstName: "MOHAMMED",
  lastName: "AFFAAN KHAN",
  title:
    "Agentic AI Engineer · GenAI & LLM Systems · Conversational Voice AI · RAG & Vector Search",
  location: "Bangalore, India",
  email: "affaan.tech.dev@gmail.com",
  phone: "+91 77956 22468",
  linkedinLabel: "linkedin.com/in/mohammed-affaan-khan",
  linkedinUrl: "https://www.linkedin.com/in/mohammed-affaan-khan-048954174",
  resumeHref: publicAsset("Mohammed_Affaan_Khan_Resume.pdf"),
  hero: {
    intro: "Hello! I'm",
    eyebrow: "GenAI &",
    primary: "Agentic AI",
    secondary: "Voice AI",
  },
  loadingRoles: [
    "Agentic AI Engineer",
    "GenAI & LLM Systems",
    "Conversational Voice AI",
    "RAG & Vector Search",
  ],
  about:
    "I am an Agentic AI Engineer with 3+ years across agentic AI, generative AI, conversational voice AI, and machine learning, and 14+ systems taken from architecture to live deployment. I build multi-agent orchestration, RAG pipelines, real-time voice agents, and MCP tool servers, and own the full lifecycle from AI architecture and prompt engineering through evaluation, microservices deployment, and MLOps on AWS Bedrock, Azure OpenAI, and Google Vertex AI.",
  education: [
    "B.Tech Mechanical Engineering, Reva University, Bangalore - 2023",
    "AI/ML electives: Computer Vision, Data Structures, Computational Mechanics",
    "Capstone: YOLOv5 infection detection system - 95% detection accuracy",
  ],
  languages: "English (Native), Hindi (Native), Urdu (Conversational)",
};

export const stats = [
  { value: "3+ yrs", label: "In agentic AI, GenAI & voice AI" },
  { value: "14+", label: "Systems shipped to production" },
  { value: "<500 ms", label: "STT to LLM to TTS voice latency" },
  { value: "10,000+", label: "Concurrent calls at 99.9% uptime" },
  { value: "85%", label: "Faster clinical reporting" },
  { value: "45%", label: "Lower client operating cost" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    shortLabel: "mohammed-affaan-khan",
    href: profile.linkedinUrl,
  },
  {
    label: "Email",
    shortLabel: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Resume",
    shortLabel: "Mohammed_Affaan_Khan_Resume.pdf",
    href: profile.resumeHref,
  },
];

export const whatIDo = [
  {
    title: "AGENTS & VOICE",
    subtitle: "Multi-Agent Orchestration & Real-Time Voice",
    body:
      "I design multi-agent systems with LangGraph supervisors, MCP tool servers, human-in-the-loop gates, and cost governance, plus sub-500 ms voice agents that reason, remember, and call live tools mid-conversation.",
    tags: [
      "LangGraph",
      "MCP",
      "LangChain",
      "CrewAI",
      "Millis.ai",
      "Whisper STT",
      "ElevenLabs",
      "n8n",
    ],
  },
  {
    title: "RAG & PRODUCT AI",
    subtitle: "Retrieval, ML Systems & Full-Stack Delivery",
    body:
      "I build retrieval, multimodal, and ML-backed platforms end to end, from chunking, embeddings, and hybrid search with re-ranking to FastAPI microservices, React workflows, MLOps, and multi-cloud deployment.",
    tags: [
      "Pinecone",
      "pgvector",
      "FAISS",
      "LlamaIndex",
      "FastAPI",
      "PostgreSQL",
      "Kubernetes",
      "Vertex AI",
    ],
  },
];

export const skills = [
  {
    group: "Agentic AI & Orchestration",
    items:
      "AI Agent Development, Multi-Agent Systems, LangChain, LangGraph, CrewAI, AutoGen, Model Context Protocol (MCP), MCP Server Development, Tool / Function Calling, ReAct & Planner-Executor Patterns, Human-in-the-Loop Approval, Agent Memory & State, Guardrails",
  },
  {
    group: "LLMs & Prompt Engineering",
    items:
      "GPT-4o, Claude (Sonnet / Opus), Llama 3, Gemini, Prompt Engineering, Context Engineering, Structured Outputs, Chain-of-Thought Design, Fine-Tuning, RLHF, LLM Routing & Fallback, Token & Cost Governance",
  },
  {
    group: "RAG & Vector Databases",
    items:
      "Retrieval-Augmented Generation, Pinecone, pgvector, AlloyDB (ScaNN), FAISS, Weaviate, Qdrant, LlamaIndex, Hybrid Search, Re-Ranking, Chunking Strategies, BGE Embeddings, Semantic Search, Self-Updating Knowledge Pipelines",
  },
  {
    group: "Conversational & Voice AI",
    items:
      "Millis.ai, ElevenLabs, Whisper STT, Google TTS, WebRTC, SIP / VoIP, Real-Time Streaming, Barge-In & Turn-Taking, Voice Cloning, Emotion-Adaptive TTS, Intent Classification, NLU",
  },
  {
    group: "Cloud, MLOps & Evaluation",
    items:
      "AWS (Bedrock, Lambda, EC2, S3), Azure (Azure OpenAI, Entra ID, AKS), Google Cloud (Vertex AI, BigQuery, AlloyDB), NVIDIA NIM, OpenRouter, Kubernetes, Docker, Harness CI/CD, GitHub Actions, Model Registry, LLM Tracing & Observability, Evaluation Harnesses, A/B Testing, INT8 Quantization",
  },
  {
    group: "Backend & Frontend",
    items:
      "Python, FastAPI, Node.js, Express, Microservices, Event-Driven Architecture, REST APIs, WebSockets / Socket.IO, PostgreSQL, Redis, BullMQ, Supabase, Alembic, Multi-Tenant SaaS, RBAC, Stripe, React, Vite, TypeScript, Tailwind CSS, i18next (RTL / LTR)",
  },
  {
    group: "ML & Computer Vision",
    items:
      "PyTorch, TensorFlow, HuggingFace Transformers, Scikit-learn, XGBoost, U-Net, YOLOv5, GRU, GANs, OpenCV, VTK, SimpleITK, DICOM, 3D / MPR Rendering",
  },
];

export const career = [
  {
    role: "AI Developer",
    company: "Maskan Technologies",
    period: "2025+",
    description:
      "End-to-end ownership of AI solution design through production delivery as the firm's primary AI engineer - agentic GTM platforms, real-time voice AI, RAG systems, and ML services for MedTech, FinTech, MarTech, and hospitality clients across India, the UK, and the GCC.",
  },
  {
    role: "Independent AI Engineer",
    company: "Applied AI Development",
    period: "23-25",
    description:
      "Built AI systems independently across the modern stack while transitioning from mechanical engineering into applied AI - LLM integration, RAG and vector database architecture, multi-agent orchestration, and real-time voice pipeline engineering. Completed the J.P. Morgan Chase and Accenture job simulations in this period.",
  },
  {
    role: "Business Development Associate",
    company: "BYJU'S",
    period: "2023",
    description:
      "Engaged 500+ prospective clients, surfacing product requirements that directly informed EdTech AI feature-roadmap prioritisation.",
  },
  {
    role: "B.Tech Mechanical Engineering",
    company: "Reva University",
    period: "2023",
    description:
      "AI/ML electives in computer vision, data structures, and computational mechanics. Capstone: a YOLOv5 infection detection system at 95% defect detection accuracy, internally published at Reva University.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  provider: string;
  date: string;
  summary: string;
  skills: string[];
  href: string;
};

export const certifications: Certification[] = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "J.P. Morgan Chase & Co.",
    provider: "Forage",
    date: "Feb 2024",
    summary:
      "Interfaced with a live stock price data feed, repaired broken repository files to restore correct web-application output, and integrated Perspective, JPMorgan Chase's open-source visualisation library, to render a real-time trader-facing graph.",
    skills: ["Python", "TypeScript", "React", "Git", "Data Visualisation"],
    href: publicAsset(
      "certificates/JPMorgan_Chase_Software_Engineering_Job_Simulation.pdf"
    ),
  },
  {
    title: "Data Analytics & Visualization Job Simulation",
    issuer: "Accenture North America",
    provider: "Forage",
    date: "Feb 2025",
    summary:
      "Cleaned, modelled, and analysed a client dataset, built the supporting visualisations, and packaged the findings into a client-ready deck with a recorded stakeholder readout.",
    skills: [
      "Data Modelling",
      "Data Visualisation",
      "Storytelling",
      "Strategy",
      "Stakeholder Communication",
    ],
    href: publicAsset(
      "certificates/Accenture_Data_Analytics_and_Visualization_Job_Simulation.pdf"
    ),
  },
];

export type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "PipelineIQ Autonomous GTM Agent Platform",
    category:
      "Multi-agent lead generation, publishing, and qualification with human-in-the-loop gates",
    tools:
      "LangGraph, MCP, Claude, Apify, Meta Lead Ads API, n8n, pgvector, AWS Bedrock",
    image: publicAsset("images/project-pipelineiq.svg"),
  },
  {
    title: "Conversational AI Voice Agent Platform",
    category:
      "10,000+ concurrent calls at 99.9% uptime and sub-500 ms STT to LLM to TTS latency",
    tools:
      "Millis.ai, Whisper STT, GPT-4o, LangChain, ElevenLabs, Kubernetes, Azure OpenAI",
    image: publicAsset("images/project-voice-ai.svg"),
  },
  {
    title: "Real-Time AI Avatar with RAG",
    category:
      "Multimodal digital human at 200-400 ms response latency with a self-updating knowledge pipeline",
    tools:
      "Pinecone, LlamaIndex, GPT-4o, ElevenLabs, facial animation engine",
    image: publicAsset("images/project-rag-avatar.svg"),
  },
  {
    title: "NHS AI Clinical Workflow System",
    category:
      "Lung nodule detection and reporting - 85% faster radiologist reporting",
    tools:
      "PyTorch, U-Net, VTK, FastAPI, PostgreSQL, React, DICOM, Azure AD",
    image: publicAsset("images/project-clinical-ai.svg"),
  },
  {
    title: "Xplortiv AI Recommendation & Discovery Engine",
    category:
      "GRU ranking across 9 prediction heads with sub-50 ms natural-language venue search",
    tools:
      "PyTorch, GRU, BGE Embeddings, pgvector / AlloyDB, BigQuery, Vertex AI",
    image: publicAsset("images/project-xplortiv.svg"),
  },
  {
    title: "MaskanX Multi-Tenant AI Marketing & CRM SaaS",
    category:
      "Agentic layer for lead management, campaigns, and autonomous email and voice outreach",
    tools:
      "MERN, Claude API, Redis, BullMQ, Temporal, agentic email & voice automation",
    image: publicAsset("images/project-maskanx.svg"),
  },
  {
    title: "Maskanza Restaurant Management SaaS",
    category:
      "Multi-tenant POS, KDS, QR ordering, inventory, and analytics across 132 API endpoints",
    tools:
      "Node.js, Express, PostgreSQL, React, Socket.IO, Stripe, i18next (RTL)",
    image: publicAsset("images/project-maskanza.svg"),
  },
  {
    title: "OpenMontage Agentic Video System",
    category:
      "Instruction-driven video pipeline with 11 pipeline types and a dynamic tool registry",
    tools: "LangChain, Remotion, YAML manifests, multi-provider asset generation",
    image: publicAsset("images/project-openmontage.svg"),
  },
  {
    title: "SiteChat & Estimate256",
    category: "RAG chatbot builder and ML estimation engine",
    tools: "FAISS, OpenRouter, FastAPI, GPT-4o, XGBoost, Alembic, React",
    image: publicAsset("images/project-sitechat-estimate.svg"),
  },
];
