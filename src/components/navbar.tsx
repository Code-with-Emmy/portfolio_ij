"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";
import { Sun, Moon, Menu, X, BarChart3 } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section highlights
      const sections = ["hero", "about", "skills", "projects", "timeline", "certifications", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Timeline", href: "#timeline", id: "timeline" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-3 border-b border-card-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#hero" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="p-1.5 bg-primary text-white rounded-lg">
            <BarChart3 className="w-5 h-5" />
          </div>
          <span>
            Marcus<span className="text-primary">Vance.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                  activeSection === link.id
                    ? "text-primary font-semibold"
                    : "text-muted-text"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-card-border" />

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              className="text-sm font-semibold bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-primary/20"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggles */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl glass hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl glass hover:text-primary transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass border-t border-card-border absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 transition-colors ${
                activeSection === link.id ? "text-primary" : "text-muted-text"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary hover:bg-primary-hover text-white text-center py-2.5 rounded-xl text-sm font-semibold transition-colors mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
