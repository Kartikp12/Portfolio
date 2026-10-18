'use client'

import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaChartLine, FaCoins } from "react-icons/fa"
import { HiSparkles, HiCode, HiChip, HiLightBulb } from "react-icons/hi"
import Link from 'next/link'

const About = () => {
  const projects = [
    {
      title: "BlockChain-Explorer",
      description: "Explore latest Ethereum Blocks with transactions as well as wallet transactions by address.",
      github: "https://github.com/Kartikp12/BlockChain-Explorer",
      demo: "https://block-chain-explorer-two.vercel.app/",
      icon: FaCode,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      borderColor: "border-blue-300 dark:border-blue-700",
      tags: ["Next.js", "Ethereum", "Web3", "Blockchain"]
    },
    {
      title: "Smart-Trades-Money Analytics",
      description: "Built a Smart Money Polymarket Analytics Dashboard using Next.js, Tailwind, Dune Analytics API, and Polymarket trade data. The platform tracks high-performance \"smart money\" wallets, analyzes their historical win rates, and monitors live trades in real time. Designed a responsive, modern dashboard UI with data visualization, wallet intelligence insights, trading signals, and on-chain transaction linking",
      github: "https://github.com/Kartikp12/Smart-Money-Trades-Analytics",
      demo: "https://smart-money-trades-analytics-emcx.vercel.app/",
      icon: FaChartLine,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      borderColor: "border-purple-300 dark:border-purple-700",
      tags: ["Next.js", "Dune API", "Analytics", "Real-time"]
    },
    {
      title: "Crypto Market Place",
      description: "Built a single-page Crypto Market Explorer using Next.js that enables users to search cryptocurrencies (e.g., BTC, ETH, MATIC) and instantly view real-time price data, market stats, and key metadata using live API integrations. Implemented efficient client-side fetching, responsive UI, and input validation to deliver fast, reliable results and a clean user experience. Focused on performance, accuracy, and usability while handling asynchronous data and edge cases.",
      github: "https://github.com/Kartikp12/Crypto_market_place",
      demo: "https://crypto-market-place-lake.vercel.app/",
      icon: FaCoins,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      borderColor: "border-amber-300 dark:border-amber-700",
      tags: ["Next.js", "Crypto API", "Real-time", "Market Data"]
    }
  ]

  const skills = [
    {
      category: "Blockchain & Web3",
      icon: HiChip,
      items: [
        "Strong understanding of blockchain fundamentals, decentralized systems, smart contracts, and on-chain data",
        "Experience working with blockchain explorers, wallet analytics, and trading analytics",
        "Hands-on experience fetching and processing real on-chain data (e.g., Polymarket, EVM chains)"
      ],
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      borderColor: "border-blue-300 dark:border-blue-700"
    },
    {
      category: "Front-End Development",
      icon: HiCode,
      items: [
        "Next.js, React.js, JavaScript (ES6+)",
        "REST APIs, real-time data handling, state management",
        "Responsive UI development and performance optimization"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      borderColor: "border-purple-300 dark:border-purple-700"
    },
    {
      category: "Tools & Technologies",
      icon: HiLightBulb,
      items: [
        "Ethers.js / Web3.js (if applicable to your projects)",
        "HTML5, CSS3, Tailwind / Bootstrap (if you used them)",
        "Git, GitHub, VS Code"
      ],
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      borderColor: "border-amber-300 dark:border-amber-700"
    },
    {
      category: "Other Capabilities",
      icon: HiLightBulb,
      items: [
        "Data visualization and analytics dashboards",
        "Problem-solving, product-thinking, and building production-ready Web3 interfaces"
      ],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20",
      borderColor: "border-green-300 dark:border-green-700"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full border border-blue-200 dark:border-blue-800">
            <HiSparkles className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">About Me</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Hello, I&apos;m Kartik Patil
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Front-End Developer with strong interest and practical experience in blockchain technology, specializing in on-chain data analytics, trading intelligence, and Web3 product development. Built blockchain explorers, smart trading analytics, and crypto marketplace solutions, and now seeking opportunities to work on industry-level blockchain projects.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${skill.bgGradient} rounded-2xl p-8 border-2 ${skill.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${skill.gradient} mb-6`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {skill.category}
                  </h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Here are my Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${project.bgGradient} rounded-2xl p-8 border-2 ${project.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden`}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-3xl text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Demo */}
                    <div className="mb-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold shadow hover:scale-105 hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                        >
                          <FaExternalLinkAlt className="text-base" />
                          Live at
                        </a>
                      )}
                    </div>
                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                        >
                          <FaGithub />
                          <span className="text-sm font-semibold">Code</span>
                        </Link>
                      )}
                     
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
