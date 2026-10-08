"use client";

import React from "react";
import { Database, Filter, Sliders, TrendingUp, PlayCircle } from "lucide-react";

export default function About() {
  const industries = [
    { name: "FinTech & Banking", desc: "Built predictive default models, audit-compliant ledger queries, and customer wallet share analysis.", icon: "💳" },
    { name: "E-Commerce", desc: "Optimized marketing attribution pipelines, cart abandonment analysis, and lifetime value modeling.", icon: "🛍️" },
    { name: "Healthcare & Biotech", desc: "Structured patient trial metrics, clinical scheduling KPIs, and compliance reporting datasets.", icon: "🧬" },
    { name: "SaaS & B2B", desc: "Designed customer churn cohorts, product utilization scores, and MRR/ARR retention dashboards.", icon: "📊" }
  ];

  const philosophy = [
    { title: "1. Extract & Ingest", desc: "Connecting to diverse CRM, ERP, and API databases securely without disrupting operational speed.", icon: Database },
    { title: "2. Clean & Normalize", desc: "Writing robust SQL transformations to remove noise, deduplicate, and standardize variables.", icon: Filter },
    { title: "3. Model & Architect", desc: "Designing star schemas and Kimball-model data warehouses to form single-sources of truth.", icon: Sliders },
    { title: "4. Visualize & Deliver", desc: "Structuring crisp, low-cognitive-load dashboards that highlight leaks and opportunities.", icon: TrendingUp },
    { title: "5. Drive Business Action", desc: "Providing executive summaries and recommendations that directly cut waste or boost margin.", icon: PlayCircle }
  ];

  return (
    <section id="about" className="py-20 bg-muted-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">About Me</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Bridging the gap between raw data and executive strategy
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="text-xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-text leading-relaxed mb-4">
              I began my career in corporate finance, where I realized that spreadsheets alone were insufficient for solving complex operational bottlenecks. This realization pushed me to master SQL, Python, and modern business intelligence tools.
            </p>
            <p className="text-muted-text leading-relaxed mb-4">
              Today, I specialize in consulting with organizations to turn high-volume, disparate data into cohesive, automated reporting architectures. I look past standard metrics to answer the *why* behind numbers: why a marketing campaign failed, why customers churned, or where supply chains leaked margin.
            </p>
            <p className="text-muted-text leading-relaxed">
              My philosophy is simple: **Data is only as valuable as the decisions it enables.** I build interfaces that business leaders actually want to use, converting complex SQL queries into clear paths to profitability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Key Industries I Partner With</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind, index) => (
                <div key={index} className="p-5 glass rounded-xl border border-card-border hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl mb-3">{ind.icon}</div>
                  <h4 className="font-bold text-base mb-1">{ind.name}</h4>
                  <p className="text-xs text-muted-text leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Pipeline Visual */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-10">My Analytics Pipeline Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {philosophy.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative flex flex-col items-center text-center p-6 glass rounded-2xl border border-card-border hover:shadow-lg transition-all duration-300">
                  {/* Arrow Indicator for Large Screens */}
                  {idx < 4 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-primary font-bold text-lg">
                      &rarr;
                    </div>
                  )}
                  <div className="p-3 bg-primary/10 text-primary rounded-xl mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-muted-text leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
