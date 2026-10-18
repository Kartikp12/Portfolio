
import {
    FiArrowUpRight,
    FiCheckCircle,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiMessageCircle,
  } from "react-icons/fi";
  import { FaXTwitter } from "react-icons/fa6";
  
  const socialLinks = [
    {
      name: "GitHub",
      detail: "Explore my code",
      href: "https://github.com/Kartikp12",
      icon: FiGithub,
    },
    {
      name: "LinkedIn",
      detail: "Connect professionally",
      href: "https://www.linkedin.com/in/kartik-patil-6808121b6/",
      icon: FiLinkedin,
    },
    {
      name: "X / Twitter",
      detail: "Follow my updates",
      href: "https://x.com/_kartik_patil",
      icon: FaXTwitter,
    },
  ];
  
  export default function Contact() {
    return (
      <main className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          {/* Page heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
              <FiMessageCircle />
              Get in touch
            </span>
  
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Let&apos;s make something
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                meaningful together.
              </span>
            </h1>
  
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
              Have a project idea, an opportunity, or just want to talk about
              technology? Send me a message. I&apos;d be happy to hear from you.
            </p>
          </div>
  
          {/* Contact layout */}
          <div className="grid overflow-hidden rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/30 dark:border-gray-800 dark:shadow-black/20 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left panel */}
            <aside className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-violet-900 p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
  
              <div className="relative">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Contact information
                </span>
  
                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  Let&apos;s start a conversation.
                </h2>
  
                <p className="mt-5 leading-7 text-blue-100">
                  Whether it&apos;s software development, AI, blockchain, or a
                  potential collaboration, feel free to reach out.
                </p>
  
                <div className="mt-10 space-y-5">
                  <a
                    href="mailto:kartikpatil1006@gmail.com"
                    className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                      <FiMail />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-blue-200">Email</span>
                      <span className="mt-1 block break-all font-medium">
                        kartikpatil1006@gmail.com
                      </span>
                    </span>
                    <FiArrowUpRight className="ml-auto shrink-0 opacity-70 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
  
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                      <FiMapPin />
                    </span>
                    <span>
                      <span className="block text-sm text-blue-200">
                        Location
                      </span>
                      <span className="mt-1 block font-medium">
                        Maharashtra, India
                      </span>
                    </span>
                  </div>
                </div>
  
                <div className="mt-10 border-t border-white/15 pt-7">
                  <h3 className="font-semibold">Find me online</h3>
  
                  <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
  
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.name}
                          title={social.name}
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-xl transition hover:-translate-y-1 hover:bg-white/15"
                        >
                          <Icon />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
  
            {/* Right panel / real form submission */}
            <section className="bg-white p-7 dark:bg-gray-900 sm:p-10 lg:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Send me a message</h2>
                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Fill in the details below and I&apos;ll receive your message
                  through the configured contact form.
                </p>
              </div>
  
              <form
                action="https://formspree.io/f/mvgrlvev"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New message from Kartik's Portfolio"
                />
  
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      required
                      maxLength={100}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-500"
                    />
                  </div>
  
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Email address <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="john@example.com"
                      required
                      maxLength={254}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-500"
                    />
                  </div>
                </div>
  
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Subject <span className="text-blue-600">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    required
                    maxLength={150}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-500"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your message <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me a little about your idea, project, or opportunity..."
                    required
                    minLength={10}
                    maxLength={5000}
                    className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-500"
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Please include at least 10 characters in your message.
                  </p>
                </div>
  
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30 focus:outline-none focus:ring-4 focus:ring-blue-500/30 sm:w-auto"
                >
                  Send Message
                  <FiArrowUpRight className="text-lg transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
  
                <p className="flex items-start gap-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-green-600" />
                  Your message is submitted to Formspree. Successful delivery
                  depends on your Formspree form being active and configured.
                </p>
              </form>
            </section>
          </div>
  
          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            Prefer email?{" "}
            <a
              href="mailto:kartikpatil1006@gmail.com"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              Write to me directly
            </a>
          </p>
        </div>
      </main>
    );
  }
  