"use client";

import React from "react";
import { Briefcase, Calendar, Award } from "lucide-react";

export default function Timeline() {
  const experiences = [
    {
      company: "Apex Enterprise Solutions",
      role: "Lead Business Intelligence Analyst",
      dates: "Jan 2024 - Present",
      achievements: [
        "Architected an enterprise-wide Snowflake data warehouse using dbt models, integrating 12 separate marketing and CRM sources.",
        "Created an executive KPI dashboard suite in Power BI used daily by the CEO and Board of Directors to make capital deployment decisions.",
        "Spearheaded a warehouse logic optimization that decreased database compute costs by 32% (saving $45,000 annually).",
        "Mentored a team of 3 junior analytics professionals and implemented agile data practices."
      ],
      tech: ["Power BI", "SQL (Snowflake)", "dbt", "Azure", "Airflow"]
    },
    {
      company: "Zenith Retail Corporation",
      role: "Senior Data Analyst",
      dates: "Mar 2021 - Dec 2023",
      achievements: [
        "Built marketing attribution models using Python (Pandas/Statsmodels) that redirected $2M in ad spend, increasing blended ROI by 14%.",
        "Developed customer cohort and survival analysis dashboards in Tableau to pinpoint retention drop-off zones.",
        "Wrote complex PostgreSQL stored procedures and window queries that cut regular reporting preparation times by 15 hours per week."
      ],
      tech: ["Python", "PostgreSQL", "Tableau", "AWS (S3/Redshift)", "Git"]
    },
    {
      company: "Nova Logistics Group",
      role: "Data Analyst",
      dates: "Aug 2019 - Feb 2021",
      achievements: [
        "Automated legacy manual Excel procedures with Python ETL scripts, removing key-man dependencies.",
        "Conducted carrier delivery time performance audits, uncovering billing inconsistencies that saved the shipping department $35,000.",
        "Collaborated with warehouse operations to map picking speed metrics, resulting in a revised layout that improved picking times by 9%."
      ],
      tech: ["Excel (VBA/PowerPivot)", "MySQL", "Looker Studio", "Python", "Jira"]
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Career Experience</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            A proven record of delivering analytical leadership
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Vertical Center Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-1.5 md:left-1/2 top-0 bottom-0 w-0.5 bg-card-border transform md:-translate-x-1/2 -z-10" />

          {/* Experience Cards */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 shadow-lg ring-4 ring-primary/20" />

                  {/* Left Spacer/Card for Desktop */}
                  <div className={`w-full md:w-1/2 md:pr-10 flex flex-col ${isEven ? "md:items-end text-left md:text-right" : "hidden md:flex opacity-0 pointer-events-none"}`}>
                    {isEven && (
                      <div className="glass p-6 rounded-2xl border border-card-border hover:border-primary/20 transition-all duration-300 w-full shadow-md">
                        <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-xs text-primary font-bold">
                            <Briefcase className="w-3.5 h-3.5" />
                            {exp.company}
                          </span>
                          <span className="hidden md:inline text-xs text-muted-text">•</span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-text">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.dates}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-3">{exp.role}</h3>
                        <ul className="text-xs text-muted-text flex flex-col gap-2.5 list-none text-left">
                          {exp.achievements.map((ach, achIdx) => (
                            <li key={achIdx} className="flex gap-2 items-start">
                              <span className="text-accent mt-0.5"><Award className="w-3.5 h-3.5 flex-shrink-0" /></span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 mt-6 justify-start md:justify-end">
                          {exp.tech.map((t, tIdx) => (
                            <span key={tIdx} className="text-xxs bg-muted-bg text-foreground px-2 py-1 rounded-md border border-card-border/50 font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Spacer/Card for Desktop */}
                  <div className={`w-full md:w-1/2 md:pl-10 flex flex-col ${!isEven ? "md:items-start text-left" : "md:hidden"}`}>
                    <div className="glass p-6 rounded-2xl border border-card-border hover:border-primary/20 transition-all duration-300 w-full shadow-md">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs text-primary font-bold">
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span className="hidden md:inline text-xs text-muted-text">•</span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-text">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.dates}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-3">{exp.role}</h3>
                      <ul className="text-xs text-muted-text flex flex-col gap-2.5 list-none">
                        {exp.achievements.map((ach, achIdx) => (
                          <li key={achIdx} className="flex gap-2 items-start">
                            <span className="text-accent mt-0.5"><Award className="w-3.5 h-3.5 flex-shrink-0" /></span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-6">
                        {exp.tech.map((t, tIdx) => (
                          <span key={tIdx} className="text-xxs bg-muted-bg text-foreground px-2 py-1 rounded-md border border-card-border/50 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
