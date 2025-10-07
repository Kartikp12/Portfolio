import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">


      <div className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="text-2xl font-bold text-blue-600">Hello, I am Kartik</span> <br />
          — a recent B.Tech graduate in Computer Science (2025) and a passionate Web Developer specializing in <span className="font-semibold">React.js</span> and <span className="font-semibold">Next.js</span>. I focus on building responsive, high-performance web applications and continuously strive to expand my skill set. I am particularly enthusiastic about emerging technologies such as <span className="font-semibold">Blockchain</span>, <span className="font-semibold">Artificial Intelligence</span>, and more — always eager to learn, build, and grow in the tech space.
        </p>
      </div>

      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Skills</h1>
        <ul className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
          <li>Front-end Web Development</li>
          <li>HTML, CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
        </ul>
      </div>

   
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Here are my Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          

          <div className="border border-blue-300 rounded-lg p-5 shadow hover:shadow-lg transition duration-300">
            <a href="https://github.com/Kartikp12/Block-Explorer" className="flex flex-col items-center">
              <Image
                src="/block-explorer-logo.png"
                alt="Block Explorer Logo"
                width={100}
                height={100}
                className="mb-4 rounded"
              />
              <p className="text-sm text-gray-600 font-medium"/>
                <span className="font-semibold text-blue-600">Block-Explorer</span>Explore latest Ethereum Blocks with transactions as well as wallet transactions by address.
            </a>
          </div>

       
          <div className="border border-blue-300 rounded-lg p-5 shadow hover:shadow-lg transition duration-300">
            <a href="https://github.com/Kartikp12/backroads-project_?tab=readme-ov-file" className="flex flex-col items-center">
              <Image
                src="/backroad-logo.svg"
                alt="Backroads Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-sm text-gray-600 font-medium">
                <span className="font-semibold text-blue-600">Backroads:</span> This is a cloned website
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
