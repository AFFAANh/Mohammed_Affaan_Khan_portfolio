# Mohammed Affaan Khan Portfolio

Personal 3D portfolio for Mohammed Affaan Khan, built with React, TypeScript, Vite, Three.js, React Three Fiber, and GSAP.

The site presents agentic AI, GenAI, conversational voice AI, RAG systems, clinical workflow AI, SaaS, and full-stack AI projects, along with verifiable certificates. NDA-sensitive work has been intentionally excluded from the public portfolio content.

## Tech Stack

- React 18
- TypeScript
- Vite
- GSAP
- Three.js
- React Three Fiber
- React Three Drei
- React Three Rapier
- React Icons

## Project Structure

```text
.
├── public/
│   ├── certificates/          # Certificate PDFs linked from the site
│   ├── images/                # Portfolio and project visuals
│   └── models/                # 3D model assets
├── src/
│   ├── components/            # Portfolio sections and 3D scene
│   ├── context/               # Loading provider
│   ├── data/profile.ts        # Main portfolio content source
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Editing Portfolio Content

Most personal content is centralized in `src/data/profile.ts`, including:

- Name, title, contact links, and resume path
- About copy
- Skills and service cards
- Career timeline
- Project carousel content
- Certifications (title, issuer, summary, and certificate PDF path)

Static project visuals live in `public/images/`. Certificate PDFs and the resume live in `public/` and `public/certificates/`.
