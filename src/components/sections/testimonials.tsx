"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Marcus completely reorganized our marketing reporting pipelines. Within three weeks, he built automated attribution funnels that exposed two major ad-spend leaks. He saved us over $100k in waste in his first month of consulting.",
      name: "Sarah Jenkins",
      role: "VP of Growth Marketing",
      company: "Aura Commerce",
      rating: 5
    },
    {
      quote: "What sets Marcus apart is his ability to speak both business strategy and backend database architecture. He built our entire series-A analytics models. Our board members praised the clarity of the reporting he designed.",
      name: "David Chen",
      role: "Co-Founder & CEO",
      company: "Finflow Tech",
      rating: 5
    },
    {
      quote: "Marcus's SQL optimizations saved our warehousing system from constant timeout crashes during peak shopping seasons. His refactoring lowered database query compilation times by 40% and simplified our dbt schemas.",
      name: "Elena Rostova",
      role: "Lead Analytics Engineer",
      company: "ShipStream Logistics",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Testimonials</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Endorsed by industry leaders
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 glass rounded-2xl border border-card-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between hover:shadow-md relative"
            >
              {/* Quote bubble absolute icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <MessageSquare className="w-8 h-8 fill-current" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-4 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-muted-text leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-card-border/40 pt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold font-mono">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-foreground">{t.name}</h4>
                  <p className="text-[10px] text-muted-text font-medium">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
