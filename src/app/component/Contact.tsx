'use client'

import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-xl text-gray-400" />
                  <a href="mailto:your.email@example.com" className="hover:text-gray-300">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-xl text-gray-400" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-xl text-gray-400" />
                  <span>Your Location, City, Country</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
              <div className="flex space-x-6">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <p className="text-gray-400">Monday - Friday</p>
              <p className="text-gray-400">9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact