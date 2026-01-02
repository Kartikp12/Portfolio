import React from 'react'
import Link from 'next/link'
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800 dark:border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HiSparkles className="text-blue-400" />
              Contact Information
            </h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <MdEmail className="text-lg text-blue-400" />
                <a href="mailto:kartikpatil1006@gmail.com" className="underline hover:no-underline">
                  kartikpatil1006@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <FaPhoneAlt className="text-sm text-blue-400" />
                <a href="tel:9370341258" className="underline hover:no-underline">
                  +919370341258
                </a>
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pune 412101,<br />
              Maharashtra, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Kartik. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
