
'use client'

import React from 'react'
import {
  FaArrowRight,
  FaBrain,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaLinkedin,
  FaNetworkWired,
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const projects = [
  {
    number: '01',
    title: 'AI Research Agent',
    category: 'APPLIED AI',
    description:
      'A research workflow project exploring query planning, web search, evidence extraction, and citation-based answers.',
    tags: ['LLMs', 'Web Search', 'AI Agents'],
    icon: <FaBrain />,
    accent: 'blue',
    github: 'https://github.com/Kartikp12/AI-Research-Agent',
    demo: '',
  },
  {
    number: '02',
    title: 'AI Wallet Analyst',
    category: 'AI + BLOCKCHAIN',
    description:
      'An AI-powered wallet intelligence project focused on on-chain activity, transaction analysis, and natural-language insights.',
    tags: ['Next.js', 'Ollama', 'Blockchain'],
    icon: <FaNetworkWired />,
    accent: 'violet',
    github: 'https://github.com/Kartikp12/ai-wallet-analyst',
    demo: '',
  },
  {
    number: '03',
    title: 'MediGuide AI',
    category: 'AI APPLICATION',
    description:
      'A healthcare assistant prototype designed around helpful conversations and safety-aware handling of medical questions.',
    tags: ['AI Safety', 'Next.js', 'Voice UX'],
    icon: <FaBrain />,
    accent: 'cyan',
    github: 'https://github.com/Kartikp12/MediGuide-AI',
    demo: '',
  },
  {
    number: '04',
    title: 'Bubblemaps XDC',
    category: 'BLOCKCHAIN ANALYTICS',
    description:
      'An interactive blockchain analytics project for exploring token holders, wallet relationships, and transaction connections.',
    tags: ['XDC', 'Cytoscape.js', 'APIs'],
    icon: <FaNetworkWired />,
    accent: 'emerald',
    github: '',
    demo: 'https://bubblemaps-xdc.vercel.app/',
  },
]

const skillGroups = [
  {
    icon: <FaBrain />,
    title: 'Applied AI',
    description: 'LLM applications, AI agents, prompt design, local models',
    items: ['Ollama', 'Qwen', 'RAG concepts', 'Tool Calling'],
  },
  {
    icon: <FaCode />,
    title: 'Web Engineering',
    description: 'Building interactive web applications and APIs',
    items: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    icon: <FaNetworkWired />,
    title: 'Blockchain & Data',
    description: 'On-chain data, wallet analytics, and visual exploration',
    items: ['Ethereum', 'XDC', 'Dune Analytics', 'SQL', 'Blockchain APIs'],
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
      <span className="h-px w-7 bg-current" />
      {children}
    </div>
  )
}

function AnimatedAIVisual() {
  return (
    <div className="ai-visual reveal-visual">
      <div className="ai-ambient-glow" />

      <div className="ai-orbit ai-orbit-one">
        <span className="orbit-node orbit-node-one" />
      </div>
      <div className="ai-orbit ai-orbit-two">
        <span className="orbit-node orbit-node-two" />
      </div>
      <div className="ai-orbit ai-orbit-three">
        <span className="orbit-node orbit-node-three" />
      </div>

      <div className="ai-crosshair ai-crosshair-horizontal" />
      <div className="ai-crosshair ai-crosshair-vertical" />

      <div className="ai-core-halo" />

      <div className="ai-core">
        <div className="ai-core-inner">
          <FaBrain className="ai-brain-icon" />
          <span className="ai-core-caption">INTELLIGENCE</span>
        </div>
      </div>

      <div className="ai-floating-card ai-card-top">
        <span className="ai-card-icon ai-blue-icon">
          <FaCode />
        </span>
        <span>
          <strong>AI ENGINEERING</strong>
          <small>Build intelligent systems</small>
        </span>
      </div>

      <div className="ai-floating-card ai-card-right">
        <span className="ai-card-icon ai-purple-icon">
          <FaNetworkWired />
        </span>
        <span>
          <strong>CONNECTED DATA</strong>
          <small>Find meaningful patterns</small>
        </span>
      </div>

      <div className="ai-floating-card ai-card-bottom">
        <span className="ai-card-icon ai-green-icon">
          <HiSparkles />
        </span>
        <span>
          <strong>IDEAS → INSIGHTS</strong>
          <small>Experiment. Learn. Improve.</small>
        </span>
      </div>

      <div className="ai-status-pill">
        <span className="ai-status-dot" />
        EXPLORING WHAT&apos;S POSSIBLE
      </div>

      <span className="ai-spark ai-spark-one">✦</span>
      <span className="ai-spark ai-spark-two">✧</span>
      <span className="ai-spark ai-spark-three">✳</span>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900 dark:bg-[#070B14] dark:text-slate-100">
      {/* Hero */}
      <section className="home-hero relative isolate overflow-hidden text-white">
        <div aria-hidden="true" className="hero-grid" />
        <div aria-hidden="true" className="hero-orb hero-orb-blue" />
        <div aria-hidden="true" className="hero-orb hero-orb-purple" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:px-12 lg:py-24">
          {/* Left: animated circular visual */}
          <div className="order-2 flex justify-center lg:order-1">
            <AnimatedAIVisual />
          </div>

          {/* Right: introduction */}
          <div className="hero-copy reveal-copy order-1 lg:order-2">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-4 py-2 text-sm text-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <HiSparkles className="text-base" />
              Software Engineer · Applied AI
            </div>

            <p className="mb-4 text-sm font-medium tracking-wide text-slate-400">
              Hi, I&apos;m Kartik Patil.
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Building useful products with{' '}
              <span className="gradient-text">AI and data.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I build web applications, explore AI-powered workflows, and
              work with blockchain data. I&apos;m focused on turning practical
              ideas into useful, well-engineered software.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Explore my work
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:kartikpatil1006@gmail.com"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
              >
                <FaEnvelope />
                Get in touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <a
                href="https://github.com/Kartikp12"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <FaGithub className="text-lg" />
                GitHub
                <FaExternalLinkAlt className="text-[10px]" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
                <FaExternalLinkAlt className="text-[10px]" />
              </a>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span>India · Open to learning and collaboration</span>
            </div>
          </div>
        </div>

        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 transition hover:text-white sm:block"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <FaArrowRight className="mx-auto mt-2 rotate-90" />
        </a>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Projects built to explore{' '}
                <span className="text-blue-600 dark:text-blue-400">
                  real problems.
                </span>
              </h2>
            </div>

            <a
              href="https://github.com/Kartikp12"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              More on GitHub <FaArrowRight />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`project-card accent-${project.accent} group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-950/10 dark:border-white/[0.09] dark:bg-[#0D1320] dark:hover:shadow-black/30 sm:p-8`}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-600 transition duration-300 group-hover:scale-110 dark:text-blue-400">
                    {project.icon}
                  </div>
                  <span className="font-mono text-sm text-slate-400 dark:text-slate-500">
                    /{project.number}
                  </span>
                </div>

                <p className="mb-2 text-xs font-bold tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl flex-1 leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-5 border-t border-slate-200 pt-4 dark:border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      <FaGithub className="text-base" />
                      Source code
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      Live project
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-slate-200 bg-slate-50 px-5 py-24 dark:border-white/[0.06] dark:bg-[#0A101C] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What I work with</SectionLabel>

          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              A growing toolkit for building{' '}
              <span className="text-blue-600 dark:text-blue-400">
                intelligent software.
              </span>
            </h2>

            <p className="max-w-md leading-7 text-slate-600 dark:text-slate-400">
              My focus is on combining software engineering fundamentals
              with practical AI and data-driven projects.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 dark:border-white/[0.08] dark:bg-[#0D1320] dark:hover:border-blue-400/30 sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-600 dark:text-blue-400">
                  {group.icon}
                </div>

                <h3 className="text-lg font-bold">{group.title}</h3>

                <p className="mt-2 min-h-[52px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionLabel>A little about me</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Curious by nature.
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                Practical by design.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-400">
            <p>
              I&apos;m Kartik, a software engineer from India interested in
              Applied AI, blockchain systems, and data-driven applications.
              My work combines interactive web development with experiments
              in AI-powered workflows and on-chain analytics.
            </p>

            <p>
              I enjoy understanding how systems work, connecting APIs and
              models, and improving projects through hands-on testing. I&apos;m
              currently deepening my understanding of LLM applications,
              evidence-grounded research, and AI agent workflows.
            </p>

            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10">
                <FaLayerGroup className="mb-3 text-xl text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Build with purpose</h3>
                <p className="mt-2 text-sm leading-6">
                  Focus on useful features, clear architecture, and a good
                  user experience.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5 dark:border-white/10">
                <FaCode className="mb-3 text-xl text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Learn by building</h3>
                <p className="mt-2 text-sm leading-6">
                  Explore new ideas through working prototypes, iteration,
                  and practical experiments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0B1220] px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-9 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Get in touch</SectionLabel>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Have an interesting problem to solve?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                I&apos;m interested in thoughtful engineering, useful AI
                applications, and opportunities to learn through building.
                Let&apos;s connect.
              </p>
            </div>

            <a
              href="mailto:kartikpatil1006@gmail.com"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
            >
              Say hello
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
