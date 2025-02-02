'use client'


import React from 'react'
import { Hero } from './component/Hero'
import BentoSection from './component/BentoSection'
import About from './component/About'
import Navbar from './component/NavBar'
import Work from './component/Work'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './component/Contact'
import Blog from './component/Blog'
import Services from './component/Services'


const page = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BentoSection />
          </>
        } />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default page