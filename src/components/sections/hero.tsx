"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, BarChart2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../icons";

// Count-up helper component for stats
function Counter({ value, duration = 1.5, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10 animate-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-accent/5 blur-3xl -z-10 animate-glow" style={{ animationDelay: "4s" }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.25] -z-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-card-border text-xs font-semibold text-primary mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
            <span>Available for Enterprise Consulting & Full-time Roles</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Decoding Complexity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Delivering Growth.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-text max-w-xl mb-8 leading-relaxed"
          >
            I am <strong className="text-foreground font-semibold">Marcus Vance</strong>, a Principal Data Analyst. 
            I transform raw multi-source databases into automated executive dashboards that save costs and maximize revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#contact"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 glass hover:bg-muted-bg/50 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Me</span>
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered (Mock: resume.pdf)");
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-dashed border-card-border hover:border-primary/50 hover:bg-primary/5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              <Download className="w-4 h-4 text-muted-text" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 border-t border-card-border pt-6 w-full max-w-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-text">Connect:</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-muted-text hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-muted-text hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:marcus.vance@example.com"
              className="p-2 rounded-lg glass text-muted-text hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Abstract Data Visual Portrait */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 rounded-3xl overflow-hidden glass shadow-2xl p-4 flex flex-col justify-between"
          >
            {/* Visual Header */}
            <div className="flex justify-between items-center pb-2 border-b border-card-border">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <span className="text-xxs font-mono text-muted-text opacity-70">data-pipeline.py</span>
            </div>

            {/* Glowing Center Graphic (Sleek Data Visualization Node) */}
            <div className="flex-1 flex items-center justify-center relative my-4">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-primary/20"
              />

              {/* Inner rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-dotted border-accent/30"
              />

              {/* Central Graph node */}
              <div className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full w-40 h-40 border border-card-border shadow-inner">
                <BarChart2 className="w-14 h-14 text-primary animate-pulse" />
                <span className="text-[10px] font-mono text-accent font-semibold tracking-widest mt-2 uppercase">
                  pipeline active
                </span>
              </div>

              {/* Orbiting data points */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/10 left-1/4 px-2 py-1 rounded-md glass border-card-border text-[9px] font-mono text-primary font-bold shadow-sm"
              >
                SQL queries: 0.12s
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/8 right-1/4 px-2 py-1 rounded-md glass border-card-border text-[9px] font-mono text-accent font-bold shadow-sm"
              >
                Accuracy: 99.8%
              </motion.div>
            </div>

            {/* Visual Footer (Simulation of queries compiled) */}
            <div className="border-t border-card-border pt-2 text-[10px] font-mono text-muted-text opacity-85 flex justify-between">
              <span>DB: PostgreSQL</span>
              <span className="text-primary font-semibold">Ready to deploy</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* KPI Counters Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 glass rounded-2xl border border-card-border shadow-xl">
          <div className="text-center md:text-left border-r border-card-border/60 last:border-0 md:pr-4">
            <div className="text-3xl md:text-4xl font-extrabold text-primary">
              <Counter value={5} suffix="+" />
            </div>
            <div className="text-xs md:text-sm text-muted-text mt-1 font-medium">Years Experience</div>
          </div>

          <div className="text-center md:text-left md:border-r border-card-border/60 last:border-0 md:px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-accent">
              <Counter value={40} suffix="+" />
            </div>
            <div className="text-xs md:text-sm text-muted-text mt-1 font-medium">Dashboards Delivered</div>
          </div>

          <div className="text-center md:text-left border-r border-card-border/60 last:border-0 md:px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-primary">
              <Counter value={10} suffix="M+" />
            </div>
            <div className="text-xs md:text-sm text-muted-text mt-1 font-medium">Rows of Data Analyzed</div>
          </div>

          <div className="text-center md:text-left last:border-0 md:pl-4">
            <div className="text-3xl md:text-4xl font-extrabold text-accent">
              <Counter value={98} suffix="%" />
            </div>
            <div className="text-xs md:text-sm text-muted-text mt-1 font-medium">BI Reporting Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
}
