
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiTerminal,
} from "react-icons/fi";

const skills = [
  {
    title: "AI & Intelligent Systems",
    icon: FiCpu,
    items: ["LLM Integration", "AI Agents", "Ollama", "Prompt Engineering"],
  },
  {
    title: "Web Engineering",
    icon: FiCode,
    items: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Blockchain & Analytics",
    icon: FiLayers,
    items: ["Ethereum", "Ethers.js", "Smart Contract Data", "Dune Analytics"],
  },
  {
    title: "Backend & Data",
    icon: FiDatabase,
    items: ["REST APIs", "SQL", "Firebase", "Supabase"],
  },
];

const projects = [
  {
    number: "01",
    name: "AI Research Agent",
    category: "Applied AI",
    description:
      "An AI research workflow focused on query planning, web research, evidence extraction, and source-grounded answers.",
    stack: ["AI Workflows", "LLMs", "Next.js"],
    href: "https://github.com/Kartikp12/AI-Research-Agent",
  },
  {
    number: "02",
    name: "MediGuide AI",
    category: "AI Healthcare",
    description:
      "A healthcare assistant concept with conversational interaction and safety-focused responses for health-related questions.",
    stack: ["AI", "React", "Safety Rules"],
    href: "https://github.com/Kartikp12/MediGuide-AI",
  },
  {
    number: "03",
    name: "AI Wallet Analyst",
    category: "AI + Blockchain",
    description:
      "A wallet intelligence platform concept for analyzing on-chain activity, counterparties, wallet behavior, and risk indicators.",
    stack: ["Next.js", "Blockchain", "Local LLM"],
    href: "https://github.com/Kartikp12/ai-wallet-analyst",
  },
  {
    number: "04",
    name: "Block Explorer",
    category: "Blockchain",
    description:
      "An Ethereum explorer that displays recent blocks, transaction information, and wallet activity using blockchain APIs.",
    stack: ["Next.js", "Ethereum", "APIs"],
    href: "https://github.com/Kartikp12/Block-Explorer",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-7 sm:p-12 dark:border-gray-800 dark:from-blue-950/40 dark:via-gray-900 dark:to-violet-950/30 sm:dark:bg-gray-900">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-gray-900/70 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              About Me
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I&apos;m Kartik
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                I build ideas into software.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
              I&apos;m a developer interested in Applied AI, web engineering,
              and blockchain analytics. I enjoy building practical applications
              that connect modern interfaces, APIs, data, and intelligent
              systems.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300">
              My current focus is learning how to build useful AI-powered
              products, experiment with LLMs, and turn technical ideas into
              working projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Let&apos;s Connect <FiArrowUpRight />
              </Link>

              <a
                href="https://github.com/Kartikp12"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:hover:text-blue-400"
              >
                <FiGithub /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              What I Work On
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              My technical toolkit
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Technologies I use and explore while building projects and
              strengthening my engineering skills.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{skill.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-20">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Projects I&apos;m building
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                A selection of projects exploring AI, blockchain data, and
                full-stack application development.
              </p>
            </div>

            <a
              href="https://github.com/Kartikp12?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              All repositories <FiArrowUpRight />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-400">
                    {project.number}
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold transition group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-gray-900 transition hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                >
                  View on GitHub <FiArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-20 rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900 sm:p-12">
          <FiTerminal className="mx-auto text-3xl text-blue-600 dark:text-blue-400" />
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Have an interesting idea?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
            I&apos;m open to connecting with developers, exchanging ideas, and
            exploring interesting opportunities in software and AI.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Get in touch <FiArrowUpRight />
          </Link>
        </section>
      </div>
    </main>
  );
}
