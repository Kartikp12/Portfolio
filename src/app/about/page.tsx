
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowUpRight,
  FiCpu,
  FiCode,
  FiDatabase,
  FiLayers,
  FiGithub,
  FiTerminal,
  FiZap,
  FiActivity,
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
    type: "APPLIED AI",
    description:
      "An AI research workflow focused on query planning, web research, evidence extraction, and source-grounded answers.",
    stack: "AI Workflows · LLMs · Next.js",
    href: "https://github.com/Kartikp12/AI-Research-Agent",
  },
  {
    number: "02",
    name: "MediGuide AI",
    type: "AI HEALTHCARE",
    description:
      "A healthcare assistant concept with conversational interaction and safety-focused responses.",
    stack: "AI · React · Safety Rules",
    href: "https://github.com/Kartikp12/MediGuide-AI",
  },
  {
    number: "03",
    name: "AI Wallet Analyst",
    type: "AI + BLOCKCHAIN",
    description:
      "A wallet intelligence platform concept for analyzing on-chain activity, counterparties, behavior, and risk indicators.",
    stack: "Next.js · Blockchain · Local LLM",
    href: "https://github.com/Kartikp12/ai-wallet-analyst",
  },
  {
    number: "04",
    name: "Block Explorer",
    type: "BLOCKCHAIN",
    description:
      "An Ethereum explorer for viewing recent blocks, transaction information, and wallet activity.",
    stack: "Next.js · Ethereum · APIs",
    href: "https://github.com/Kartikp12/Block-Explorer",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease },
  },
};

export default function About() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";

  return (
    <main className="futuristic-page relative min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-[#070910] dark:text-white">
      {/* Animated background */}
      <div className="futuristic-grid pointer-events-none absolute inset-0 opacity-70" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[100px] dark:bg-blue-600/20"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -75, 20, 0],
                y: [0, 65, -25, 0],
                scale: [1, 1.2, 0.92, 1],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10rem] top-[36rem] h-[25rem] w-[25rem] rounded-full bg-violet-500/15 blur-[110px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 80, 0],
                y: [0, -65, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
        {/* HERO */}
        <motion.section
          initial={initial}
          animate="visible"
          variants={reveal}
          className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-7 shadow-2xl shadow-blue-950/[0.04] dark:border-white/10 dark:from-[#10182c] dark:via-[#090c16] dark:to-[#171027] dark:shadow-black/20 sm:p-12 lg:p-16"
        >
          {/* Hero glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-[80px]"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.35, 1], opacity: [0.45, 0.8, 0.45] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <motion.div
                initial={initial}
                animate="visible"
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.1 },
                  },
                }}
                className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300 sm:text-xs"
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  animate={reduceMotion ? undefined : { opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                Developer profile / 001
              </motion.div>

              <motion.p
                initial={initial}
                animate="visible"
                variants={reveal}
                transition={{ delay: 0.15 }}
                className="mt-9 font-mono text-sm tracking-[0.2em] text-gray-500 dark:text-gray-400"
              >
                HELLO, WORLD. I&apos;M
              </motion.p>

              <h1 className="mt-4 text-6xl font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
                <motion.span
                  initial={initial}
                  animate="visible"
                  variants={reveal}
                  className="block"
                >
                  Kartik
                </motion.span>

                <motion.span
                  initial={initial}
                  animate="visible"
                  variants={reveal}
                  transition={{ delay: 0.12, duration: 1 }}
                  className="animated-gradient mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-[length:250%_auto] bg-clip-text pb-2 text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-cyan-300"
                >
                  Patil.
                </motion.span>
              </h1>

              <motion.p
                initial={initial}
                animate="visible"
                variants={reveal}
                transition={{ delay: 0.22 }}
                className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl"
              >
                I build software at the intersection of{" "}
                <span className="font-semibold text-gray-950 dark:text-white">
                  Applied AI, web engineering,
                </span>{" "}
                and{" "}
                <span className="font-semibold text-gray-950 dark:text-white">
                  blockchain analytics.
                </span>
              </motion.p>

              <motion.p
                initial={initial}
                animate="visible"
                variants={reveal}
                transition={{ delay: 0.3 }}
                className="mt-4 max-w-xl leading-7 text-gray-500 dark:text-gray-400"
              >
                I enjoy turning complex technical ideas into useful
                applications, experimenting with LLMs, and building projects
                that combine data, APIs, and intelligent systems.
              </motion.p>

              <motion.div
                initial={initial}
                animate="visible"
                variants={reveal}
                transition={{ delay: 0.4 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
                >
                  Let&apos;s connect
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <a
                  href="https://github.com/Kartikp12"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-gray-300 bg-white/70 px-5 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500 dark:border-white/15 dark:bg-white/5 dark:hover:border-blue-400"
                >
                  <FiGithub /> Explore GitHub
                </a>
              </motion.div>

              <motion.div
                initial={initial}
                animate="visible"
                variants={reveal}
                transition={{ delay: 0.5 }}
                className="mt-10 grid max-w-xl grid-cols-3 gap-3"
              >
                {[
                  ["01", "Applied AI"],
                  ["02", "Full-stack Web"],
                  ["03", "On-chain Data"],
                ].map(([num, label], index) => (
                  <motion.div
                    key={num}
                    whileHover={reduceMotion ? undefined : { y: -5, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-xl border border-gray-200 bg-white/60 p-3 dark:border-white/10 dark:bg-white/[0.04] sm:p-4"
                  >
                    <span className="font-mono text-xs text-blue-600 dark:text-blue-400">
                      /{num}
                    </span>
                    <p className="mt-2 text-xs font-semibold sm:text-sm">{label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Always-visible animated visual */}
            <div className="relative mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center">
              <motion.div
                aria-hidden="true"
                className="absolute inset-[7%] rounded-full border border-blue-400/30"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute -left-1 top-1/2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_22px_5px_rgba(34,211,238,0.6)]" />
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="absolute inset-[17%] rounded-full border border-dashed border-violet-400/40"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute right-[12%] top-[12%] h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_20px_4px_rgba(167,139,250,0.65)]" />
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="absolute inset-[26%] rounded-full border border-blue-400/20"
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.08, 1], opacity: [0.45, 1, 0.45] }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="relative flex h-[43%] w-[43%] items-center justify-center rounded-[2rem] border border-white/50 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 shadow-[0_0_80px_rgba(99,102,241,0.35)] dark:border-white/20"
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -12, 0], rotate: [0, 3, 0, -3, 0] }
                }
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={reduceMotion ? undefined : { scale: 1.08 }}
              >
                <div className="absolute inset-2 rounded-[1.5rem] border border-white/20" />
                <FiCpu className="text-6xl text-white sm:text-7xl" />
                <motion.span
                  className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-blue-600 shadow-xl dark:bg-[#111827] dark:text-cyan-300"
                  animate={reduceMotion ? undefined : { rotate: [0, 12, 0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <FiZap size={20} />
                </motion.span>
              </motion.div>

              <motion.div
                className="absolute left-[2%] top-[25%] rounded-xl border border-blue-500/20 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:bg-[#101525]/90"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiCode className="text-xl text-blue-600 dark:text-blue-300" />
              </motion.div>

              <motion.div
                className="absolute bottom-[20%] right-[1%] rounded-xl border border-violet-500/20 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:bg-[#101525]/90"
                animate={reduceMotion ? undefined : { y: [0, 9, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiActivity className="text-xl text-violet-600 dark:text-violet-300" />
              </motion.div>

              <div className="absolute bottom-[4%] rounded-full border border-gray-200 bg-white/75 px-4 py-2 font-mono text-[10px] tracking-widest text-gray-600 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:text-xs">
                BUILDING INTELLIGENT SYSTEMS
              </div>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <section className="mt-24 sm:mt-32">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              01 / Technical arsenal
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Tools behind the <span className="gradient-text">ideas.</span>
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Technologies I use and explore while building projects and
              strengthening my engineering skills.
            </p>
          </motion.div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.article
                  key={skill.title}
                  initial={initial}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  transition={{ delay: index * 0.12 }}
                  whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
                  className="futuristic-card group p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={reduceMotion ? undefined : { rotate: 12, scale: 1.15 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-600 dark:text-blue-400"
                    >
                      <Icon />
                    </motion.div>
                    <span className="font-mono text-sm text-gray-400">
                      /0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{skill.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={initial}
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0, scale: 0.85 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { delay: itemIndex * 0.06 },
                          },
                        }}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-600 dark:border-white/10 dark:bg-black/20 dark:text-gray-300"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-24 sm:mt-32">
          <motion.div
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                02 / Selected work
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Ideas in <span className="gradient-text">progress.</span>
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                A selection of projects exploring AI, blockchain data, and
                full-stack application development.
              </p>
            </div>

            <a
              href="https://github.com/Kartikp12?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 font-semibold text-blue-600 transition hover:gap-4 dark:text-blue-400"
            >
              All repositories <FiArrowUpRight />
            </a>
          </motion.div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={initial}
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                transition={{ delay: index * 0.12 }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="futuristic-card group p-6 sm:p-8"
              >
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/0 blur-3xl"
                  whileHover={{ backgroundColor: "rgba(59,130,246,0.18)" }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-sm text-gray-400">
                    /{project.number}
                  </span>
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 font-mono text-[10px] tracking-wider text-blue-700 dark:text-blue-300">
                    {project.type}
                  </span>
                </div>

                <h3 className="relative mt-8 text-2xl font-bold tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.name}
                </h3>

                <p className="relative mt-4 min-h-20 leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <p className="relative mt-5 font-mono text-xs text-gray-500 dark:text-gray-400">
                  {project.stack}
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-4"
                >
                  View source <FiArrowUpRight />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <motion.section
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="relative mt-24 overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-8 text-center dark:from-blue-950/30 dark:via-[#0b0d16] dark:to-violet-950/30 sm:mt-32 sm:p-14"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }
            }
            transition={{ duration: 6, repeat: Infinity }}
          />

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative"
          >
            <FiTerminal className="mx-auto text-3xl text-blue-600 dark:text-blue-400" />
          </motion.div>

          <p className="relative mt-5 font-mono text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Next collaboration
          </p>

          <h2 className="relative mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build what&apos;s next.
          </h2>

          <p className="relative mx-auto mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
            Open to meaningful conversations, collaboration, and interesting
            opportunities across AI and software engineering.
          </p>

          <Link
            href="/contact"
            className="relative mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Start a conversation <FiArrowUpRight />
          </Link>
        </motion.section>
      </div>
    </main>
  );
}
