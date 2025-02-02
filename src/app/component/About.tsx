'use client'

import React from 'react'
import Image from 'next/image'
import about from '../../../public/about.png'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'

const About = () => {
  return (
    <div className="relative bg-black text-white min-h-screen py-20">
      {/* Add AnimatedGridPattern */}
      <AnimatedGridPattern 
        className="absolute inset-0 opacity-50"
        width={40}
        height={40}
        strokeDasharray="4 4"
        numSquares={50}
        maxOpacity={0.6}
        duration={2.5}
        repeatDelay={0.2}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[800px] w-full rounded-lg overflow-hidden">
            <Image
              src={about}
              alt="Prashant Jhadav"
              fill
              className="object-contain md:object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold text-white">
                Prashant Jhadav
              </h2>
              <p className="text-xl text-white">Choreographer & Director</p>
            </div>

            <div className="space-y-6 text-white">
              <p className="border-l-4 border-purple-500 pl-4">
                Prashant Jhadav is a passionate and experienced Choreographer & Director with over 12 years 
                in the Bollywood industry. Having worked as an assistant choreographer with the legendary 
                Ganesh Acharya for a decade, he has mastered various dance forms, including Bollywood, 
                Hip-Hop, Old School, New School, Folk, Semi-Classical, and more.
              </p>

              <p>
                With a deep understanding of choreography, movement, and performance, Prashant has brought 
                his creative vision to life across films, music videos, and commercial advertisements. 
                His ability to express emotions through dance has made him a sought-after name in the industry.
              </p>

              <p>
                As a Director & Choreographer, he has worked on projects like <span className="text-purple-400">Velle (Ajay Devgn Films), 
                Kabza, Harshil, Halgi</span>, and numerous Bollywood and Marathi music videos. His portfolio 
                includes collaborations with top production houses like <span className="text-purple-400">Dharma Productions, Yash Raj Films, 
                Balaji Telefilms, Red Chillies Entertainment, Reliance Entertainment</span>, and many more.
              </p>

              <p className="border-r-4 border-purple-500 pr-4 text-right">
                With an unwavering commitment to innovation in dance and storytelling, Prashant Jhadav 
                continues to redefine choreography in Indian cinema.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-purple-900">
              <div>
                <h3 className="text-4xl font-bold text-white">12+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white">100+</h3>
                <p className="text-gray-400">Projects</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white">50+</h3>
                <p className="text-gray-400">Music Videos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About