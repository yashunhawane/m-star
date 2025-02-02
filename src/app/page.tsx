'use client'

import React, { useEffect } from 'react'
import { Hero } from './component/Hero'
import BentoSection from './component/BentoSection'
import About from './component/About'
import Navbar from './component/NavBar'
import Work from './component/Work'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './component/Contact'
import Blog from './component/Blog'
import Services from './component/Services'
import dynamic from 'next/dynamic'

function Page() {
  useEffect(() => {
    // Move any document-related code here
    // This will only run in the browser
  }, []);

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

export default dynamic(() => Promise.resolve(Page), {
  ssr: false // This component will only render on client-side
})