"use client";

import React from "react";
import { ArrowUp, Mail, BarChart3 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="glass border-t border-card-border py-12 px-6 md:px-12 mt-20 relative">
      {/* Scroll to Top Trigger */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="p-3 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#hero" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="p-1 bg-primary text-white rounded-md">
              <BarChart3 className="w-4 h-4" />
            </div>
            <span>
              Marcus<span className="text-primary">Vance.</span>
            </span>
          </a>
          <p className="text-xs text-muted-text mt-1 text-center md:text-left max-w-sm">
            Translating complex enterprise data pipelines into actionable executive intelligence to drive growth.
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="text-sm text-muted-text text-center md:text-left">
          &copy; {new Date().getFullYear()} Marcus Vance. All rights reserved.
        </div>

        {/* Right Side: Social links */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass hover:text-primary transition-colors text-muted-text"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl glass hover:text-primary transition-colors text-muted-text"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href="mailto:marcus.vance@example.com"
            className="p-2.5 rounded-xl glass hover:text-primary transition-colors text-muted-text"
            aria-label="Email"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
