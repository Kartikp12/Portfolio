
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";
import { FiMenu, FiX, FiGithub, FiArrowUpRight } from "react-icons/fi";

const NavBar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "Projects", href: "/#projects", active: false },
    { label: "About", href: "/about", active: pathname.startsWith("/about") },
  ];

  const linkStyle = (active: boolean) =>
    `group relative py-2 text-sm font-medium transition-colors duration-200 ${
      active
        ? "text-blue-600 dark:text-blue-400"
        : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
    }`;

  const ThemeButton = ({ compact = false }: { compact?: boolean }) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-blue-400/40 dark:hover:bg-blue-400/10 ${
        compact ? "" : ""
      }`}
    >
      {theme === "light" ? (
        <HiMoon className="text-lg" />
      ) : (
        <HiSun className="text-lg" />
      )}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 shadow-sm shadow-slate-950/[0.02] backdrop-blur-2xl transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#080D19]/90">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <div className="flex h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Kartik Dev home"
            className="group inline-flex shrink-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-blue-500/30">
              K
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              kartik<span className="text-blue-600 dark:text-blue-400">.dev</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={linkStyle(item.active)}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                    item.active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            <a
              href="https://github.com/Kartikp12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              title="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-lg text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
            >
              <FiGithub />
            </a>

            {mounted && <ThemeButton />}

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/25"
            >
              Let&apos;s Connect
              <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {mounted && <ThemeButton compact />}

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-xl text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:text-slate-200 dark:hover:text-blue-400"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="mobile-menu-enter border-t border-slate-200 py-5 dark:border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    item.active
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Let&apos;s talk <FiArrowUpRight />
              </Link>

              <a
                href="https://github.com/Kartikp12"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.05]"
              >
                <FiGithub className="text-lg" />
                GitHub profile
                <FiArrowUpRight className="ml-auto" />
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .mobile-menu-enter {
          animation: menuEnter 220ms ease-out both;
        }

        @keyframes menuEnter {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-menu-enter {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
};

export default NavBar;
