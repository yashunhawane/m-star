'use client'

import { RetroGrid } from '@/components/ui/retro-grid'
import { MorphingText } from '@/components/ui/morphing-text'
import React from 'react'
import { motion } from 'framer-motion'
import { HyperText } from '@/components/ui/hyper-text'
import { PulsatingButton } from '@/components/ui/pulsating-button'
import { ShinyButton } from '@/components/ui/shiny-button'

export const Hero = () => {
  const titles = [
    "Bollywood Choreographer",
    "Dance Director",
    "Performance Artist",
    "Creative Visionary"
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <RetroGrid 
        className="opacity-30" 
        darkLineColor="white" 
        lightLineColor="white"
        angle={75}
        cellSize={40}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <HyperText
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter"
            duration={3500}
            delay={500}
            startOnView={true}
            animateOnHover={true}
          >
            PRASHANT JADHAV
          </HyperText>
          
          <div className="h-20 md:h-24 mb-4">
            <MorphingText 
              texts={titles}
              className="text-gray-300 !text-2xl md:!text-3xl lg:!text-4xl !font-semibold"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 md:gap-6 justify-center mt-2 md:mt-4"
          >
            <ShinyButton className="!rounded-full text-center px-6 md:px-8 py-2.5 md:py-3">
              View Work
            </ShinyButton>
            <PulsatingButton 
              className="px-6 md:px-8 py-2.5 md:py-3 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors bg-transparent"
              pulseColor="rgba(255, 255, 255, 0.2)"
              duration="2s"
            >
              Contact Me
            </PulsatingButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/70 space-y-3">
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-4 h-4 border-b-2 border-r-2 border-white/70 transform rotate-45"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}