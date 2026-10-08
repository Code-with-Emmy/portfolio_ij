"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Timeline from "@/components/sections/timeline";
import Certifications from "@/components/sections/certifications";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects />

        {/* 5. Experience Timeline */}
        <Timeline />

        {/* 6. Certifications */}
        <Certifications />

        {/* 7. Interactive Dashboard Gallery & SQL Sandbox */}
        <Gallery />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Blog & Insights */}
        <Blog />

        {/* 10. Contact & Strategy Booking */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
