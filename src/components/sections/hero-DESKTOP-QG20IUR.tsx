"use client";

import React, { useState } from "react";
import { Mail, Menu, X, ArrowRight } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../icons";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="hero" className="relative h-screen overflow-hidden mb-[-25px]">
      {/* Background Image */}
      <img
        src="/profile.jpeg"
        alt="Ijeoma Kalu"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-4">
          <span className="text-lg font-bold tracking-tight text-black">Ijeoma Kalu</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-black" />
            ) : (
              <Menu className="w-5 h-5 text-black" />
            )}
          </button>
        </div>

        {/* Dropdown */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-xl p-4 w-48 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2">
            <a href="#about" className="text-sm text-black hover:bg-black/5 px-3 py-2 rounded-lg transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-black hover:bg-black/5 px-3 py-2 rounded-lg transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm text-black hover:bg-black/5 px-3 py-2 rounded-lg transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm text-black hover:bg-black/5 px-3 py-2 rounded-lg transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.1] tracking-tight mb-6">
            Own your data
            <br />
            without <em className="not-italic" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}>the noise</em>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-sm md:text-base font-medium max-w-[420px] mb-8">
            I'm a Data Analyst who turns data into meaningful insights that help businesses grow.
          </p>

          {/* CTA Bar */}
          <div className="bg-black/25 backdrop-blur-md rounded-xl flex items-center pl-6 pr-1 py-1">
            <span className="text-white text-sm font-medium hidden sm:block mr-4">
              No complexity. Just clear insights.
            </span>
            <span className="text-white text-sm font-medium sm:hidden mr-4">
              Just clear insights.
            </span>
            <a
              href="#projects"
              className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
