"use client";

import React from "react";
import { FolderGit2, Play, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Sales Intelligence Dashboard",
      category: "Business Intelligence",
      problem: "Scattered Salesforce CRM and billing databases resulted in an estimated 14% revenue leakage due to misaligned renewal terms.",
      solution: "Consolidated databases via Azure Data Factory pipelines into a central warehouse, modeling a single unified sales dataset and publishing automated Power BI dashboards.",
      impact: "$1.2M in recurring revenue leaks identified and resolved; renewal cycle tracking increased from 75% to 98.4%.",
      tools: ["Power BI", "SQL Server", "Azure Data Factory", "DAX", "Star Schema"],
      demoLink: "#gallery",
      githubLink: "https://github.com",
      stats: "+$1.2M Leakage Stopped"
    },
    {
      title: "Customer Retention & Attrition Engine",
      category: "Data Science & Predictive Analytics",
      problem: "A subscription-based SaaS client experienced a churn rate increase from 3% to 7.8% over two quarters, with zero visibility on churn drivers.",
      solution: "Engineered features in Python using historical user actions, trained a random forest classification model, and linked churn likelihoods back to SQL tables visualized in Tableau.",
      impact: "Reduced customer churn by 22% within 90 days of deploying the predictive alert triggers to the customer success team.",
      tools: ["Python", "Pandas", "Scikit-Learn", "Tableau", "PostgreSQL"],
      demoLink: "#gallery",
      githubLink: "https://github.com",
      stats: "-22% Churn Reduction"
    },
    {
      title: "Supply Chain & Warehousing Optimizer",
      category: "Operations Analytics",
      problem: "Fulfillment delays caused high customer return rates and inflated warehousing holding costs by 15% due to inventory overstocking.",
      solution: "Created SQL scripts to run time-to-delivery analytics across shipping carriers, and loaded real-time inventory levels into Looker Studio dashboards.",
      impact: "Reduced carrier transit times by 18.2% and lowered warehousing holding costs by 12% via optimized restocking triggers.",
      tools: ["PostgreSQL", "Google Cloud", "BigQuery", "Looker Studio", "Excel"],
      demoLink: "#gallery",
      githubLink: "https://github.com",
      stats: "-12% Holding Costs"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Featured Projects</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Data systems engineered for tangible business results
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
              {/* Left Side: Mock Screenshot / Graphic */}
              <div className="lg:w-2/5 flex flex-col justify-between p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-card-border/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl -z-10" />
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md font-semibold">
                    {project.category}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                </div>

                {/* Big Bold Stat Callout */}
                <div className="my-8 text-center">
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
