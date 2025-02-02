'use client'
import React from 'react';
import { VelocityScroll } from '@/components/ui/velocity-scroll-wrapper';

const productionHouses = [
  "Dharma Productions",
  "Balaji Telefilms",
  "BALAJI",
  "Yash Raj Films",
  "Red Chillies Entertainment",
  "EXCEL",
  "Excel Entertainment",
  "RELIANCE",
  "Reliance Entertainment",
  "UTV Motion Pictures",
  "Eros International",
  "Maitri movie",
  "Bhansali Productions",
  "Balaji Motion Pictures",
  "AMII",
  "AVM Productions",
  "Grazing Goat Pictures",
  "Trimurti Films",
  "Disney India",
  "Illuminati Films"
].join(" • ");

const ScrollText = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10" />
      <VelocityScroll
        defaultVelocity={1.5}
        numRows={2}
        className="text-4xl md:text-6xl font-bold text-white/80 tracking-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)] relative z-20"
      >
        {productionHouses}
      </VelocityScroll>
    </div>
  );
};

export default ScrollText;