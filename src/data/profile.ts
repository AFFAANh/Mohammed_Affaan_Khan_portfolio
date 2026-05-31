const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const profile = {
  initials: "MAK",
  fullName: "Mohammed Affaan Khan",
  firstName: "MOHAMMED",
  lastName: "AFFAAN KHAN",
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
    "GenAI Engineer",
    "Agentic AI Engineer",
    "Voice Intelligence",
    "RAG Systems",
  ],
  about:
    "I am a GenAI and Agentic AI Engineer building production voice agents, RAG knowledge systems, multimodal AI platforms, and full-stack automation. My work spans voice intelligence, clinical workflow AI, SaaS platforms, and ML systems, with a focus on turning ambitious prototypes into reliable products.",
  education: [
    "B.Tech Mechanical Engineering, Reva University, Bangalore - 2023",
    "AI/ML electives: Computer Vision, Data Structures, Computational Mechanics",
  ],
};

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
];

export const whatIDo = [
  {
    title: "VOICE & AGENTS",
    subtitle: "Real-Time Conversational Intelligence",
    body:
      "I design low-latency voice agents with speech ingestion, LLM reasoning, memory, tool use, orchestration, and human-quality TTS.",
    tags: [
      "Millis.ai",
      "Whisper STT",
      "GPT-4o",
      "LangChain",
      "ElevenLabs",
      "WebRTC",
      "n8n",
    ],
  },
  {
    title: "RAG & PRODUCT AI",
    subtitle: "Full-Stack AI Systems",
    body:
      "I build retrieval, multimodal, and ML-backed platforms end to end, from embeddings and APIs to React workflows, MLOps, and cloud deployment.",
    tags: [
      "Pinecone",
      "pgvector",
      "FAISS",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Kubernetes",
    ],
  },
];

export const career = [
  {
    role: "AI Developer",
    company: "Maskan Technologies",
    period: "2025+",
    description:
      "Building production AI systems across conversational voice agents, RAG avatars, clinical workflow automation, restaurant SaaS, agentic video generation, and website chatbot/estimation platforms.",
  },
  {
    role: "Software Engineer Intern",
    company: "JP Morgan Chase & Co.",
    period: "2023-24",
    description:
      "Built production web applications with FastAPI and React, developed Python data pipelines with Pandas and NumPy, and contributed to MLOps workflows including model versioning, retraining, and A/B testing.",
  },
  {
    role: "Business Development Associate",
    company: "BYJU'S",
    period: "2023",
    description:
      "Worked with 500+ prospective clients, translated customer needs into product insights, and strengthened stakeholder communication for EdTech product decisions.",
  },
  {
    role: "B.Tech Mechanical Engineering",
    company: "Reva University",
    period: "2023",
    description:
      "Completed AI/ML-focused electives and built a YOLOv5 infection detection capstone with 95% defect detection accuracy.",
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
    title: "Conversational AI Voice Agent Platform",
    category: "Production-scale real-time voice intelligence",
    tools:
      "Millis.ai, Whisper STT, GPT-4o, LangChain, ElevenLabs, Kubernetes",
    image: publicAsset("images/project-voice-ai.svg"),
  },
  {
    title: "Real-Time AI Avatar with RAG",
    category: "Multimodal digital human with retrieval grounding",
    tools: "Pinecone, GPT-4o, LlamaIndex, ElevenLabs TTS, facial animation",
    image: publicAsset("images/project-rag-avatar.svg"),
  },
  {
    title: "NHS AI Clinical Workflow System",
    category: "Computer vision and clinical reporting automation",
    tools: "U-Net, PyTorch, VTK, FastAPI, PostgreSQL, React, DICOM",
    image: publicAsset("images/project-clinical-ai.svg"),
  },
  {
    title: "Maskanza Restaurant Management SaaS",
    category: "Multi-tenant POS, QR ordering, KDS, inventory, and analytics",
    tools: "Node.js, Express, PostgreSQL, React, Socket.IO, Stripe, i18next",
    image: publicAsset("images/project-maskanza.svg"),
  },
  {
    title: "OpenMontage Agentic Video System",
    category: "Instruction-driven AI video production pipeline",
    tools: "LangChain, GPT-4o, ElevenLabs, Remotion, Pinecone, FAISS",
    image: publicAsset("images/project-openmontage.svg"),
  },
  {
    title: "SiteChat & Estimate256",
    category: "RAG chatbot builder and ML estimation engine",
    tools: "FAISS, OpenRouter, FastAPI, XGBoost, Scikit-learn, Alembic, React",
    image: publicAsset("images/project-sitechat-estimate.svg"),
  },
];
