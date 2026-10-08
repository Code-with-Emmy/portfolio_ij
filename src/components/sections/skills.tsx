"use client";

import React, { useState } from "react";
import { Code2, BarChart4, Database, Cloud, Settings, Layers } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: [
        { name: "SQL", details: "Window functions, CTEs, complex Joins, query optimization, triggers" },
        { name: "Python", details: "Pandas, NumPy, Scikit-Learn, SciPy, Matplotlib, Seaborn, ETL scripts" },
        { name: "R", details: "Tidyverse, ggplot2, statistical modeling, forecasting, markdown" }
      ]
    },
    {
      title: "Visualization",
      icon: BarChart4,
      skills: [
        { name: "Power BI", details: "DAX formulas, Power Query, star schemas, row-level security (RLS)" },
        { name: "Tableau", details: "LOD expressions, calculated fields, dashboard actions, Tableau Server" },
        { name: "Excel", details: "Power Pivot, Pivot tables, VBA macros, advanced logic, index-match" },
        { name: "Looker Studio", details: "BigQuery integration, custom reports, real-time analytics sync" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL", details: "Stored procedures, relational mapping, performance indexing" },
        { name: "MySQL", details: "Configuration, database replication, subquery optimization" },
        { name: "SQL Server", details: "SSIS integration packages, SSMS, transact-SQL schemas" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: [
        { name: "Azure", details: "Synapse analytics, Azure Data Factory, Blob storage pipelines" },
        { name: "AWS", details: "S3 storage buckets, Amazon Redshift data warehouse, Glue ETL" },
        { name: "Google Cloud", details: "BigQuery warehouse, Cloud Storage integration, Looker BI" }
      ]
    },
    {
      title: "Data Operations & Methodology",
      icon: Settings,
      skills: [
        { name: "ETL Pipelines", details: "Automated cron/Airflow schedules, schema mappings, API fetches" },
        { name: "Data Cleaning", details: "Anomaly detection, outlier removal, missing-value imputations" },
        { name: "Dashboard Design", details: "High UX/UI priority, low-cognitive load, interactive action tiles" },
        { name: "Statistics & ML", details: "Regression analysis, A/B testing, cohort analysis, random forests" }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Skills & Tooling</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Advanced toolsets built to conquer data challenges
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const IconComp = category.icon;
            const isActive = activeCategory === catIdx;
            
            return (
              <div
                key={catIdx}
                className={`p-6 glass rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive ? "border-primary shadow-lg ring-1 ring-primary/20 scale-[1.01]" : "border-card-border hover:border-primary/20"
                }`}
                onMouseEnter={() => setActiveCategory(catIdx)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl ${isActive ? "bg-primary text-white" : "bg-primary/15 text-primary"}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="group relative border-b border-card-border/40 pb-3 last:border-0 last:pb-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-xs text-muted-text leading-relaxed">
                          {skill.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Visual footer details */}
                <div className="mt-6 pt-4 border-t border-card-border/40 flex justify-between items-center text-xxs font-mono text-muted-text">
                  <span>Methodology Compliant</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
