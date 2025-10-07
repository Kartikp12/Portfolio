import React from 'react'
import { FaFileDownload } from "react-icons/fa";


const page = () => {
  return (
    <div className="p-6 md:p-12 font-poppins h-120">
      <div className="bio mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-relaxed tracking-wide">
          Hello, I am <span className="text-blue-600">Kartik</span> — a Front-End Web Developer specializing in modern JavaScript frameworks like <span className="font-bold text-gray-800">React</span> and <span className="font-bold text-gray-800">Next.js</span>. I create fast, responsive, and user-friendly web applications that deliver seamless digital experiences.
        </h1>
      </div>

      <div className="cv">
        <a
          href="/profile.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaFileDownload className="text-xl" />
          <b className="text-lg font-medium tracking-wide">Download CV</b>
        </a>
      </div>
    </div>
  )
}

export default page





