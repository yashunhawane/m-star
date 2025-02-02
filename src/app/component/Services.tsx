'use client'
import React from 'react'
import { ShineBorder } from '@/components/ui/shine-border'

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">Our Services</h1>
        
        {/* Main Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ShineBorder color={["#3b82f6", "#8b5cf6"]} className="w-full" borderRadius={12}>
            <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl hover:bg-zinc-800 transition duration-300 w-full">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-4">Stage Shows</h3>
              <h4 className="text-xl text-gray-300 mb-4">Unforgettable Performances for Any Occasion</h4>
              <p className="text-gray-400 mb-6">From corporate events to grand festivals, our expertly crafted stage shows captivate audiences with high-energy performances, ensuring a lasting impression.</p>
              <div className="space-y-2">
                <h5 className="text-lg font-semibold mb-2">📌 What We Offer:</h5>
                <p className="text-gray-300">✔ Professional artists & choreographers</p>
                <p className="text-gray-300">✔ Customized themes & scripts</p>
                <p className="text-gray-300">✔ High-quality sound & lighting</p>
              </div>
            </div>
          </ShineBorder>

          <ShineBorder color={["#8b5cf6", "#ec4899"]} className="w-full" borderRadius={12}>
            <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl hover:bg-zinc-800 transition duration-300 w-full">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold mb-4">Live Performances</h3>
              <h4 className="text-xl text-gray-300 mb-4">Feel the Energy of Live Entertainment</h4>
              <p className="text-gray-400 mb-6">Experience world-class music, dance, and theatrical performances tailored for weddings, concerts, private parties, and more.</p>
              <div className="space-y-2">
                <h5 className="text-lg font-semibold mb-2">🎶 Our Expertise:</h5>
                <p className="text-gray-300">✔ Live bands & solo artists</p>
                <p className="text-gray-300">✔ Dance troupes & cultural acts</p>
                <p className="text-gray-300">✔ Interactive and immersive experiences</p>
              </div>
            </div>
          </ShineBorder>

          <ShineBorder color={["#ec4899", "#f43f5e"]} className="w-full" borderRadius={12}>
            <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl hover:bg-zinc-800 transition duration-300 w-full">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4">Social Events</h3>
              <h4 className="text-xl text-gray-300 mb-4">Make Every Gathering Unforgettable</h4>
              <p className="text-gray-400 mb-6">
  Whether it&apos;s a corporate party, community meetup, or private celebration, we create seamless and memorable experiences.
</p>
              <div className="space-y-2">
                <h5 className="text-lg font-semibold mb-2">🥂 Why Choose Us?</h5>
                <p className="text-gray-300">✔ Personalized event planning</p>
                <p className="text-gray-300">✔ Unique themes & decor</p>
                <p className="text-gray-300">✔ Hassle-free execution</p>
              </div>
            </div>
          </ShineBorder>
        </div>

        {/* Additional Services Section */}
        <h2 className="text-4xl font-bold text-center mb-12">Additional Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🎨",
              title: "Concept Development",
              subtitle: "Transforming Ideas into Spectacular Events",
              description: "We conceptualize and design unique experiences tailored to your vision, ensuring originality and impact.",
              list: {
                title: "📝 Our Process:",
                items: [
                  "Creative brainstorming sessions",
                  "Theme & storytelling development",
                  "Detailed event blueprint"
                ]
              }
            },
            {
              icon: "🎭",
              title: "Casting & Artist Management",
              subtitle: "Top-Tier Talent for Your Event",
              description: "We curate and manage professional artists, ensuring the perfect match for your event's theme and audience.",
              list: {
                title: "🌟 Our Network Includes:",
                items: [
                  "Musicians & DJs",
                  "Dancers & choreographers",
                  "Actors, comedians & hosts"
                ]
              }
            },
            {
              icon: "🎬",
              title: "Video & Post-Production",
              subtitle: "Capture & Enhance Your Event's Essence",
              description: "From high-quality event coverage to cinematic edits, we ensure every moment is preserved in stunning detail.",
              list: {
                title: "🎥 Our Services:",
                items: [
                  "Multi-camera setup & live streaming",
                  "Professional editing & special effects",
                  "Highlight reels & promotional content"
                ]
              }
            },
            {
              icon: "📍",
              title: "Location & Line Production",
              subtitle: "Flawless Execution from Start to Finish",
              description: "We handle venue selection, logistics, and production management, ensuring a seamless event experience.",
              list: {
                title: "🏛 Key Services:",
                items: [
                  "Venue scouting & bookings",
                  "Set design & on-site coordination",
                  "Equipment rental & technical support"
                ]
              }
            }
          ].map((service, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-xl shadow-xl hover:bg-zinc-800 transition duration-300">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <h4 className="text-md text-gray-300 mb-3">{service.subtitle}</h4>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="space-y-2">
                <h5 className="text-md font-semibold mb-2">{service.list.title}</h5>
                {service.list.items.map((item, i) => (
                  <p key={i} className="text-gray-300">✔ {item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services