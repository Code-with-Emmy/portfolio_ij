"use client";

import React, { useState, useEffect } from "react";
import { Play, Database, Maximize2, X, BarChart3, LineChart, PieChart } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart as ReLineChart,
  Line,
  CartesianGrid
} from "recharts";

// Preset datasets for the SQL Sandbox
const queryPresets = [
  {
    id: "regional",
    name: "regional_leakages.sql",
    query: "SELECT region, gross_revenue, leak_amount FROM sales_pipeline WHERE status = 'Closed';",
    description: "Evaluates regional sales revenue vs detected billing leakage.",
    headers: ["Region", "Gross Revenue", "Leak Amount", "Accuracy"],
    rows: [
      { region: "North America", gross_revenue: 1200000, leak_amount: 140000, accuracy: "88.3%" },
      { region: "Europe", gross_revenue: 950000, leak_amount: 85000, accuracy: "91.0%" },
      { region: "Asia-Pacific", gross_revenue: 820000, leak_amount: 110000, accuracy: "86.5%" },
      { region: "Latin America", gross_revenue: 450000, leak_amount: 32000, accuracy: "92.8%" }
    ],
    chartType: "bar",
    chartData: [
      { name: "N. America", Revenue: 1200000, Leak: 140000 },
      { name: "Europe", Revenue: 950000, Leak: 85000 },
      { name: "APAC", Revenue: 820000, Leak: 110000 },
      { name: "LatAm", Revenue: 450000, Leak: 32000 }
    ]
  },
  {
    id: "retention",
    name: "retention_cohorts.sql",
    query: "SELECT month, retention_rate, churn_rate FROM user_metrics ORDER BY month_index ASC;",
    description: "Tracks active churn trends and user retention rates over time.",
    headers: ["Cohort Month", "Active Users", "Retention Rate", "Churn Rate"],
    rows: [
      { month: "January", active_users: "12,400", retention_rate: "97.0%", churn_rate: "3.0%" },
      { month: "February", active_users: "13,200", retention_rate: "95.5%", churn_rate: "4.5%" },
      { month: "March", active_users: "13,850", retention_rate: "94.2%", churn_rate: "5.8%" },
      { month: "April", active_users: "14,500", retention_rate: "92.4%", churn_rate: "7.6%" }
    ],
    chartType: "line",
    chartData: [
      { name: "Jan", Retention: 97.0, Churn: 3.0 },
      { name: "Feb", Retention: 95.5, Churn: 4.5 },
      { name: "Mar", Retention: 94.2, Churn: 5.8 },
      { name: "Apr", Retention: 92.4, Churn: 7.6 }
    ]
  },
  {
    id: "marketing",
    name: "marketing_roi.sql",
    query: "SELECT channel, ad_spend, attribution_revenue, roi_percent FROM marketing_campaigns;",
    description: "Compares ad expenditure against generated pipeline revenue by channel.",
    headers: ["Channel", "Ad Spend", "Attributed Revenue", "ROI %"],
    rows: [
      { channel: "Google Search", ad_spend: "$120,000", attributed_revenue: "$480,000", roi_percent: "300%" },
      { channel: "LinkedIn Ads", ad_spend: "$85,000", attributed_revenue: "$212,500", roi_percent: "150%" },
      { channel: "Meta Retargeting", ad_spend: "$60,000", attributed_revenue: "$240,000", roi_percent: "300%" },
      { channel: "YouTube Brand", ad_spend: "$40,000", attributed_revenue: "$60,000", roi_percent: "50%" }
    ],
    chartType: "bar-roi",
    chartData: [
      { name: "Google", Spend: 120, Revenue: 480 },
      { name: "LinkedIn", Spend: 85, Revenue: 212 },
      { name: "Meta", Spend: 60, Revenue: 240 },
      { name: "YouTube", Spend: 40, Revenue: 60 }
    ]
  }
];

// static dashboard gallery templates
const dashboardItems = [
  {
    title: "Global Sales Performance BI Suite",
    tool: "Power BI",
    description: "An executive level suite incorporating cross-filtering, incremental refresh, and row-level security. Shows overall margins, sales-force productivity, and discount attribution schemas.",
    kpi: "Profit Margin: +4.2%",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "SaaS Attrition Cohort Analytics",
    tool: "Tableau",
    description: "LOD intensive Tableau workbook containing monthly cohort curves, churn triggers, and renewal probability metrics. Integrated with Salesforce writeback capabilities.",
    kpi: "LTV:CAC Ratio: 4.8x",
    color: "from-teal-600 to-emerald-600"
  },
  {
    title: "Supply Chain Transit Audit Ledger",
    tool: "Excel Dashboard",
    description: "A highly complex, index-match heavy workbook tracking shipping container transit speeds, demurrage fees, and tariff optimizations. Saves warehousing operations 12 hours weekly.",
    kpi: "Demurrage Fees: -28%",
    color: "from-amber-600 to-orange-600"
  }
];

export default function Gallery() {
  const [mounted, setMounted] = useState(false);
  const [activeQuery, setActiveQuery] = useState(queryPresets[0]);
  const [executing, setExecuting] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState<typeof dashboardItems[0] | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const runQuery = (query: typeof queryPresets[0]) => {
    setExecuting(true);
    setTimeout(() => {
      setActiveQuery(query);
      setExecuting(false);
    }, 450); // mock delay
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Interactive Gallery</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Explore live queries and analytical reports
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Part 1: Interactive SQL & Recharts Sandbox */}
        <div className="glass rounded-3xl border border-card-border overflow-hidden mb-16 shadow-xl">
          {/* Console Header */}
          <div className="bg-muted-bg/50 px-6 py-4 border-b border-card-border flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              <span className="font-bold text-sm">BI Analytics Query Editor</span>
            </div>
            <div className="flex gap-2">
              {queryPresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => runQuery(preset)}
                  disabled={executing}
                  className={`px-3 py-1.5 rounded-lg text-xxs font-semibold font-mono border transition-all cursor-pointer ${
                    activeQuery.id === preset.id
                      ? "bg-primary text-white border-primary"
                      : "glass border-card-border hover:border-primary/40 text-muted-text"
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sandbox Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-card-border">
            {/* Left Column: Query Console */}
            <div className="lg:col-span-5 bg-background p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-muted-text">SQL Script</span>
                  <span className="text-[10px] font-mono text-accent">postgres@dw_server</span>
                </div>
                <div className="p-4 bg-muted-bg rounded-xl font-mono text-xs leading-relaxed overflow-x-auto min-h-[100px] border border-card-border text-foreground select-none">
                  {activeQuery.query}
                </div>
                <p className="text-xs text-muted-text mt-3">
                  <strong>Description:</strong> {activeQuery.description}
                </p>
              </div>

              <div className="mt-8 border-t border-card-border/60 pt-4">
                <button
                  onClick={() => runQuery(activeQuery)}
                  disabled={executing}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-accent/20 cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-4.5 h-4.5 fill-current" />
                  <span>{executing ? "Compiling Query..." : "Execute Query"}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Rendering Chart */}
            <div className="lg:col-span-7 bg-background p-6 flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-muted-text mb-3 block">
                  Interactive Output
                </span>
                
                {mounted && !executing ? (
                  <div className="h-60 w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      {activeQuery.chartType === "bar" ? (
                        <BarChart data={activeQuery.chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" />
                          <XAxis dataKey="name" stroke="var(--color-muted-text)" fontSize={11} />
                          <YAxis stroke="var(--color-muted-text)" fontSize={11} />
                          <Tooltip
                            contentStyle={{
                              background: "var(--card-bg)",
                              borderColor: "var(--card-border)",
                              color: "var(--foreground)",
                              borderRadius: "12px",
                              fontSize: "12px"
                            }}
                          />
                          <Legend wrapperStyle={{ fontSize: "11px" }} />
                          <Bar dataKey="Revenue" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="Leak" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      ) : activeQuery.chartType === "line" ? (
                        <ReLineChart data={activeQuery.chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" />
                          <XAxis dataKey="name" stroke="var(--color-muted-text)" fontSize={11} />
                          <YAxis domain={[0, 100]} stroke="var(--color-muted-text)" fontSize={11} />
                          <Tooltip
                            contentStyle={{
                              background: "var(--card-bg)",
                              borderColor: "var(--card-border)",
                              color: "var(--foreground)",
                              borderRadius: "12px",
                              fontSize: "12px"
                            }}
                          />
                          <Legend wrapperStyle={{ fontSize: "11px" }} />
                          <Line type="monotone" dataKey="Retention" stroke="var(--primary)" strokeWidth={2} />
                          <Line type="monotone" dataKey="Churn" stroke="#ef4444" strokeWidth={2} />
                        </ReLineChart>
                      ) : (
                        <BarChart data={activeQuery.chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--card-border)" />
                          <XAxis dataKey="name" stroke="var(--color-muted-text)" fontSize={11} />
                          <YAxis stroke="var(--color-muted-text)" fontSize={11} />
                          <Tooltip
                            contentStyle={{
                              background: "var(--card-bg)",
                              borderColor: "var(--card-border)",
                              color: "var(--foreground)",
                              borderRadius: "12px",
                              fontSize: "12px"
                            }}
                          />
                          <Legend wrapperStyle={{ fontSize: "11px" }} />
                          <Bar dataKey="Spend" fill="var(--color-muted-text)" name="Spend ($K)" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="Revenue" fill="var(--accent)" name="Attributed Revenue ($K)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="h-60 w-full flex items-center justify-center text-xs text-muted-text font-mono">
                    {executing ? "Compiling catalog statistics..." : "Loading charting libraries..."}
                  </div>
                )}
              </div>

              {/* Table Data Preview */}
              <div className="mt-6 border-t border-card-border/60 pt-4 overflow-x-auto">
                <table className="w-full text-left text-xxs font-mono">
                  <thead>
                    <tr className="border-b border-card-border text-muted-text">
                      {activeQuery.headers.map((h, i) => (
                        <th key={i} className="pb-2 font-semibold uppercase">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {activeQuery.rows.map((row: any, i) => (
                      <tr key={i} className="border-b border-card-border/40 last:border-0">
                        {Object.values(row).map((val: any, cellI) => (
                          <td key={cellI} className="py-2 text-foreground/80">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Static Dashboards Preview Cards */}
        <h3 className="text-xl font-bold mb-8">Production Dashboard Showcases</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboardItems.map((dash, index) => (
            <div
              key={index}
              className="glass rounded-2xl border border-card-border overflow-hidden hover:border-primary/20 transition-all duration-300 shadow-md group flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className={`h-32 bg-gradient-to-br ${dash.color} p-4 flex flex-col justify-between relative`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-lg" />
                  <span className="text-[10px] font-semibold text-white bg-white/20 px-2 py-0.5 rounded-md backdrop-blur-sm self-start">
                    {dash.tool}
                  </span>
                  <div className="text-white font-bold text-sm tracking-tight truncate">
                    {dash.title}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-muted-text leading-relaxed">
                    {dash.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-card-border/20 mt-4 flex items-center justify-between">
                <span className="text-xxs font-bold text-accent">{dash.kpi}</span>
                
                <button
                  onClick={() => setSelectedDashboard(dash)}
                  className="flex items-center gap-1.5 text-xxs font-bold text-primary hover:text-primary-hover cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Inspection Overlay Modal */}
      {selectedDashboard && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="glass max-w-2xl w-full rounded-3xl border border-card-border shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="bg-muted-bg/50 px-6 py-4 border-b border-card-border flex justify-between items-center">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                {selectedDashboard.tool} Report
              </span>
              <button
                onClick={() => setSelectedDashboard(null)}
                className="p-1 rounded-lg hover:bg-muted-bg text-muted-text hover:text-foreground cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{selectedDashboard.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed mb-6">
                {selectedDashboard.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-muted-bg rounded-xl border border-card-border">
                  <div className="text-[10px] font-mono uppercase text-muted-text mb-1">Key Performance Metric</div>
                  <div className="text-lg font-bold text-accent">{selectedDashboard.kpi}</div>
                </div>
                <div className="p-4 bg-muted-bg rounded-xl border border-card-border">
                  <div className="text-[10px] font-mono uppercase text-muted-text mb-1">Architecture Level</div>
                  <div className="text-lg font-bold text-primary">Kimball Compliant</div>
                </div>
              </div>

              {/* Technical Details */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-text mb-3">Database Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xxs font-mono bg-background border border-card-border px-2.5 py-1 rounded-md text-foreground">PostgreSQL</span>
                  <span className="text-xxs font-mono bg-background border border-card-border px-2.5 py-1 rounded-md text-foreground">dbt</span>
                  <span className="text-xxs font-mono bg-background border border-card-border px-2.5 py-1 rounded-md text-foreground">Snowflake</span>
                  <span className="text-xxs font-mono bg-background border border-card-border px-2.5 py-1 rounded-md text-foreground">Git Versioned</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-muted-bg/30 px-6 py-4 border-t border-card-border flex justify-end gap-3">
              <button
                onClick={() => setSelectedDashboard(null)}
                className="px-4 py-2 bg-muted-bg hover:bg-muted-bg/80 text-xs font-bold rounded-xl cursor-pointer"
              >
                Close
              </button>
              
              <button
                onClick={() => alert(`Launching live secure workspace tunnel for ${selectedDashboard.title}`)}
                className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Launch Secure Dashboard Tunnel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
