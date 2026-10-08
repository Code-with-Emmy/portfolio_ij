"use client";

import React from "react";
import { FolderGit2, Play, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      category: "Business Intelligence",
      problem: "The sales team needed better visibility into monthly performance metrics. Data was scattered across multiple Excel files and manual reports were time-consuming to update.",
      solution: "Created an interactive Power BI dashboard that consolidates sales data from multiple sources. Built automated data refresh using Excel and SQL to ensure real-time accuracy.",
      impact: "Sales team now tracks KPIs in real-time, reducing reporting time by 50% and enabling faster decision-making.",
      tools: ["Power BI", "Excel", "SQL", "Pivot Tables"],
      demoLink: "#gallery",
      githubLink: "https://github.com",
      stats: "-50% Reporting Time"
    },
    {
      title: "Customer Data Analysis",
      category: "Data Analysis",
      problem: "The marketing team wanted to understand customer behavior patterns but lacked a systematic way to analyze customer data across different segments.",
      solution: "Used SQL to extract and filter customer data from the database, then analyzed it using Python and Excel to identify trends and patterns. Created visual reports in Tableau.",
      impact: "Marketing team gained actionable insights into customer preferences, leading to more targeted campaigns.",
      tools: ["SQL", "Python", "Excel", "Tableau"],
      demoLink: "#gallery",
      githubLink: "https://github.com",
      stats: "Actionable Insights"
    },
    {
      title: "KPI Tracking System",
      category: "Performance Reporting",
      problem: "Management needed a consolidated view of key business performance indicators across departments, but data was siloed and difficult to compare.",
      solution: "Built a comprehensive KPI dashboard using Power BI and Excel. Created automated data cleaning processes using Python to ensure data accuracy and consistency.",
      impact: "Management now has a single source of truth for business performance, enabling data-driven strategic decisions.",
      tools: ["Power BI", "Excel", "Python", "SQL"],
      demoLink: "#gallery",
      githubLink: "https://github.com",
      stats: "Data-Driven Decisions"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Featured Projects</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Real data problems I've solved
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass rounded-3xl border border-card-border p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch hover:shadow-xl transition-all duration-300 group"
            >
              {/* Left Side: Animated Data Visualization */}
              <div className="lg:w-2/5 flex flex-col justify-between p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-card-border/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl -z-10" />
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md font-semibold">
                    {project.category}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                </div>

                {/* Animated Chart Visualization */}
                <div className="flex-1 flex items-center justify-center my-4">
                  <div className="w-full h-32 flex items-end justify-center gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-full bg-gradient-to-t from-primary/60 to-accent/60 rounded-t-sm"
                        style={{
                          height: `${30 + Math.random() * 70}%`,
                          animation: `barPulse 2s ease-in-out infinite ${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Big Bold Stat Callout */}
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-muted-text font-bold mb-1">Measured Impact</div>
                  <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {project.stats}
                  </div>
                </div>

                <div className="border-t border-card-border/60 pt-4 flex justify-between items-center text-xxs font-mono text-muted-text">
                  <span>Target: ROI optimization</span>
                  <span>Interactive Available</span>
                </div>
              </div>

              {/* Right Side: Information */}
              <div className="lg:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Problem/Solution/Impact breakdown */}
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex gap-3">
                      <div className="mt-0.5 text-red-500 flex-shrink-0">
                        <AlertCircle className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-foreground">Problem:</strong>
                        <p className="text-sm text-muted-text mt-0.5">{project.problem}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-0.5 text-primary flex-shrink-0">
                        <CheckCircle2 className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-foreground">Solution:</strong>
                        <p className="text-sm text-muted-text mt-0.5">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-0.5 text-accent flex-shrink-0">
                        <TrendingUp className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-foreground">Business Impact:</strong>
                        <p className="text-sm text-muted-text mt-0.5 font-medium">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tool Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.map((tool, toolIdx) => (
                      <span
                        key={toolIdx}
                        className="text-xs bg-muted-bg text-foreground px-3 py-1.5 rounded-lg border border-card-border/60 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 border-t border-card-border/40 pt-6">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-primary/10"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Interactive Demo</span>
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-muted-bg/50 transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>View SQL/Python Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
