'use client'

import React, { useState } from 'react'
import { PiInstagramLogoFill } from "react-icons/pi"
import { FaFacebook, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { CgMail } from "react-icons/cg"
import { HiSparkles, HiCheckCircle } from "react-icons/hi"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setIsSubmitted(false), 3000)
        }, 1000)
    }

    const socialLinks = [
        { icon: PiInstagramLogoFill, href: "#", label: "Instagram", color: "from-pink-500 to-rose-500", borderColor: "border-pink-500", textColor: "text-pink-600 dark:text-pink-400" },
        { icon: FaFacebook, href: "#", label: "Facebook", color: "from-blue-600 to-blue-700", borderColor: "border-blue-600", textColor: "text-blue-600 dark:text-blue-400" },
        { icon: FaXTwitter, href: "https://x.com/_kartik_patil", label: "X (Twitter)", color: "from-gray-900 to-gray-800", borderColor: "border-gray-900 dark:border-gray-700", textColor: "text-gray-900 dark:text-gray-300" },
        { icon: FaGithub, href: "https://github.com/Kartikp12", label: "GitHub", color: "from-gray-700 to-gray-800", borderColor: "border-gray-700", textColor: "text-gray-700 dark:text-gray-300" },
        { icon: FaLinkedin, href: "http://linkedin.com/in/kartik-patil-6808121b6/", label: "LinkedIn", color: "from-blue-700 to-blue-800", borderColor: "border-blue-700", textColor: "text-blue-700 dark:text-blue-400" },
        { icon: CgMail, href: "mailto:kartikpatil1006@gmail.com", label: "Email", color: "from-red-500 to-red-600", borderColor: "border-red-500", textColor: "text-red-600 dark:text-red-400" },
    ]

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full border border-blue-200 dark:border-blue-800">
                        <HiSparkles className="text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Get In Touch</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Reach Me by Filling This Form
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form Section */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                                <FaPaperPlane className="text-blue-600 dark:text-blue-400" />
                                Send a Message
                            </h2>
                            
                            <form action="https://formspree.io/f/mvgrlvev" method="post" onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-400"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-400"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder-gray-400 resize-none"
                                        placeholder="Your message here..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : isSubmitted ? (
                                        <>
                                            <HiCheckCircle className="text-xl" />
                                            <span>Message Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            <span>Send</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Social Links Section */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 h-full">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                                <HiSparkles className="text-indigo-600 dark:text-indigo-400" />
                                Reach Me On
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Follow me on social platforms or reach out directly via email. I&apos;m always open to discussing new projects and opportunities.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target={social.href.startsWith('http') || social.href.startsWith('mailto') ? '_blank' : undefined}
                                            rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className={`group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${social.color} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 ${social.borderColor} overflow-hidden`}
                                        >
                                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <Icon className={`text-2xl ${social.textColor} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                                            <span className="font-semibold text-white relative z-10">{social.label}</span>
                                        </a>
                                    )
                                })}
                            </div>

                            {/* OR Separator */}
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">OR</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
