'use client'


import React from 'react'
import { Hero } from './component/Hero'
import BentoSection from './component/BentoSection'
import About from './component/About'
import Navbar from './component/NavBar'
import Work from './component/Work'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const page = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <BentoSection/>
    </Router>
  );
}

export default page