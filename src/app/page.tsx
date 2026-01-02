'use client'

import React from 'react'
import { FaFileDownload, FaCode, FaRocket, FaBrain } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full border border-blue-200 dark:border-blue-800">
              <HiSparkles className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Welcome to My Portfolio</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
              Hello, I&apos;m <span className="block mt-2">Kartik</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Front-End Web Developer
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">React</span>
              <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">Next.js</span>
              <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">Web3</span>
              <span className="px-4 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-semibold">Blockchain</span>
            </div>
          </div>

          {/* Bio Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-200 dark:border-gray-700">
  <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
  Front-end developer with hands-on experience in blockchain, focused on on-chain analytics, trading intelligence, and Web3 product development. I’ve built blockchain explorers, smart-money analytics dashboards, and crypto marketplace tools, and I’m looking to work on real, production-level blockchain products.
</p>

            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <FaCode className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Clean Code</h3>
              <p className="text-gray-600 dark:text-gray-400">Well-structured, maintainable, and scalable code</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <FaRocket className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">Optimized for speed and user experience</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <FaBrain className="text-4xl text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">Cutting-edge solutions and modern tech</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="https://docs.google.com/document/d/1PMNwpby3AQYOQHQMYMsWYO8VH8VihQ_thKun1yViS5Y/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-bold text-lg"
            >
              <FaFileDownload className="text-2xl group-hover:animate-bounce" />
              <span>Download My CV</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
