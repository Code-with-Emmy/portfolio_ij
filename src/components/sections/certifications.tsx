"use client";

import React from "react";
import { CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      date: "Nov 2024",
      id: "PL-300-88392",
      icon: "💻"
    },
    {
      title: "Google Advanced Data Analytics Professional Certificate",
      issuer: "Google",
      date: "Aug 2023",
      id: "G-AD-991823",
      icon: "🔍"
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "May 2024",
      id: "TDS-882736",
      icon: "📊"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Feb 2025",
      id: "AWS-CP-119283",
      icon: "☁️"
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "Jan 2023",
      id: "IBM-DS-774829",
      icon: "🧠"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Credentials</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Industry verified data expertise
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 glass rounded-2xl border border-card-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between hover:shadow-md"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <h3 className="font-bold text-sm mb-2 text-foreground leading-snug">{cert.title}</h3>
                <p className="text-xs text-muted-text font-medium">{cert.issuer}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-card-border/40 flex items-center justify-between">
                <div className="text-xxs font-mono text-muted-text">
                  <div>Issued: {cert.date}</div>
                  <div>ID: {cert.id}</div>
                </div>
                
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Opening verification credentials link for ${cert.title}`);
                  }}
                  className="flex items-center gap-1 text-xxs font-bold text-primary hover:text-primary-hover hover:underline"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
