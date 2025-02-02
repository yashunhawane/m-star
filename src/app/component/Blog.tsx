'use client'

import React from 'react'
import Image from 'next/image'
import image1 from "../../../public/image1.jpeg"

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center mb-12 mt-20">
          Bollywood Dance and Choreography: A Journey
        </h1>
        
        {/* Hero Image with overlay */}
        <div className="relative w-full h-[500px] mb-12 rounded-xl overflow-hidden 
                        shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform 
                        hover:scale-[1.02] duration-300">
          <Image
            src={image1}
            alt="Bollywood dancers performing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert lg:prose-xl max-w-none">
          {/* Section with border */}
          <div className="border border-white/10 bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              The Connection Between Dance and the Film Industry
            </h2>
            <p className="text-gray-300">
              Bollywood and dance are deeply intertwined. From Ajay Devgn's films to Shraddha Kapoor's dance moves, 
              every artist strives to perfect their performance, often feeling the pressure to excel.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Mumbai: The Hub of Dance and Bollywood
            </h2>
            <p className="text-gray-300">
              Mumbai, the heart of Bollywood, is a major attraction for dance enthusiasts. Top choreographers 
              like Ganesh Acharya train assistants to master technical skills, which are essential for building 
              a career in dance.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Respect and Hard Work in Dance
            </h2>
            <p className="text-gray-300">
              In the dance world, respecting mentors and choreographers is crucial. Both Marathi and Hindi cinema 
              hold dance in high regard, requiring technical expertise and dedication.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              The Journey of an Assistant Choreographer
            </h2>
            <p className="text-gray-300">
              Becoming an assistant choreographer is both exciting and challenging. Discipline, hard work, and an 
              understanding of technical aspects such as contracts and production details are key to success.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              The Key to Success in Bollywood
            </h2>
            <p className="text-gray-300">
              For aspiring dancers, discipline and consistent practice are essential. Learning from experienced 
              mentors and staying dedicated to the craft are crucial steps toward success.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Future Prospects in Dance
            </h2>
            <p className="text-gray-300">
              Opportunities in the dance industry are abundant. With dedication, proper guidance, and relentless 
              effort, one can achieve great heights in Bollywood dance and choreography.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Conclusion
            </h2>
            <p className="text-gray-300">
              Dance has been an integral part of Bollywood for years. Whether new or experienced, every artist 
              must work hard to establish their identity. With perseverance and the right opportunities, anyone 
              can make a mark in the industry.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Blog