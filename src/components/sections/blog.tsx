"use client";

import React from "react";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title: "Optimizing SQL Window Queries: How I Cut Dashboard Compilation Times by 40%",
      excerpt: "Standard CTEs and complex join logic can quickly stall production databases. Learn three indexing and partition strategies that speed up dashboard refreshes.",
      category: "SQL & Databases",
      date: "Jun 12, 2026",
      readTime: "6 min read",
      color: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Reducing Cognitive Load: The UI/UX Principles of Executive Dashboards",
      excerpt: "Avoid dashboard fatigue by removing cluttered charts. This article details why grids, limited colors, and strong visual hierarchies lead to higher dashboard usage.",
      category: "Dashboard Design",
      date: "May 28, 2026",
      readTime: "5 min read",
      color: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "Bridging SQL and Scikit-Learn: Building an End-to-End Retention Pipeline",
      excerpt: "A practical guide to extracting warehouse cohorts using SQL, predicting attrition risk in Python, and piping results directly back to executive teams.",
      category: "Predictive Analytics",
      date: "Apr 15, 2026",
      readTime: "8 min read",
      color: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Blog & Insights</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Sharing data knowledge and best practices
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="glass rounded-2xl border border-card-border overflow-hidden hover:border-primary/20 transition-all duration-300 flex flex-col justify-between hover:shadow-md group"
            >
              <div>
                {/* Decorative Category Banner */}
                <div className={`h-24 bg-gradient-to-r ${art.color} p-4 flex items-center justify-between border-b border-card-border/40`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-background border border-card-border px-2 py-0.5 rounded-md shadow-xs">
                    {art.category}
                  </span>
                  <BookOpen className="w-4 h-4 text-primary/60" />
                </div>

                <div className="p-6">
                  {/* Article Metadata */}
                  <div className="flex gap-4 items-center text-xxs text-muted-text font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm mb-3 group-hover:text-primary transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-card-border/20 mt-4 flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Opening article: "${art.title}" (Mock blog page)`);
                  }}
                  className="flex items-center gap-1.5 text-xxs font-bold text-primary group-hover:text-primary-hover transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
