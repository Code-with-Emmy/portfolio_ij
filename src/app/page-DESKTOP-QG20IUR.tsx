"use client";

import React from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section (Sticky Layout) */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects />

        {/* 5. Contact Section */}
        <Contact />
      </main>
    </>
  );
}
