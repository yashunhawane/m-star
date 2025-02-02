'use client'
import React from 'react'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { CodeIcon, PersonIcon, LayersIcon, RocketIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import image1 from "../../../public/coorimage1.jpeg"
import studio from "../../../public/matar.jpeg"

const BentoSection = () => {
  return (
    <section className="w-full px-4 py-24 bg-gradient-to-b from-[#1a1a1a] via-black to-[#1a1a1a]">
      <BentoGrid className="max-w-6xl mx-auto">
        
        {/* About Card */}
        <BentoCard
          name="The Studio"
          description="Where creativity meets technology. Our workspace is designed to inspire innovation."
          className="col-span-1"
          background={
            <div className="absolute inset-0">
              <Image
                src={studio}
                alt="Studio Background"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black opacity-70" />
            </div>
          }
          Icon={RocketIcon}
          href="/studio"
          cta="Explore our studio"
        />

        {/* Studio Card */}
        <BentoCard
          name="About Us"
          description="The Morning Star Studio is a creative powerhouse dedicated to transforming ideas into digital masterpieces."
          className="md:col-span-2"
          background={
            <div className="absolute inset-0">
              <Image
                src={image1}
                alt="About Us Background"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black opacity-70" />
            </div>
          }
          Icon={PersonIcon}
          href="/about"
          cta="Learn more about us"
        />

        {/* Services Card */}
        <BentoCard
          name="Services"
          description="From web development to digital marketing, we offer comprehensive solutions for your digital needs."
          className="md:col-span-2"
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black" />
          }
          Icon={LayersIcon}
          href="/services"
          cta="View our services"
        />

        {/* Work Card */}
        <BentoCard
          name="Our Work"
          description="Discover our portfolio of successful projects and client collaborations."
          className="md:col-span-1"
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black" />
          }
          Icon={CodeIcon}
          href="/work"
          cta="See our projects"
        />
      </BentoGrid>
    </section>
  )
}

export default BentoSection
