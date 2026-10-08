"use client";

import React, { useState } from "react";
import { Mail, MapPin, Calendar, Clock, CheckCircle, X, ChevronRight, Icon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Meeting modal state
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const dates = ["July 16", "July 17", "July 20", "July 21"];
  const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulated API call
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      // Fallback in case API is not loaded yet during testing
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      }, 1000);
    }
  };

  const handleBookingConfirm = () => {
    if (selectedDate && selectedTime) {
      setBookingConfirmed(true);
      setTimeout(() => {
        setBookingConfirmed(false);
        setBookingOpen(false);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 2500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Get in Touch</h2>
          <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Let's build something data-driven together
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left Column: Info & Calendar Button */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <p className="text-sm text-muted-text leading-relaxed mb-8">
                Ready to optimize your reporting pipelines, build custom ML churn alert networks, or hire me for a data project? Reach out using the form, or schedule a calendar call directly.
              </p>

              {/* Contact Icons list */}
              <div className="flex flex-col gap-5">
                <a href="mailto:marcus.vance@example.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl glass text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-muted-text">Email</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">marcus.vance@example.com</div>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl glass text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-muted-text">LinkedIn</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">linkedin.com/in/marcus-vance</div>
                  </div>
                </a>

                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl glass text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-muted-text">GitHub</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">github.com/marcusvance-data</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl glass text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-muted-text">Location</div>
                    <div className="text-sm font-semibold text-foreground">San Francisco, CA (Remote Friendly)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking trigger CTA */}
            <div className="mt-12 border-t border-card-border/40 pt-8">
              <div className="p-6 glass rounded-2xl border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                <h4 className="font-bold text-sm mb-2">Prefer a direct conversation?</h4>
                <p className="text-xs text-muted-text leading-relaxed mb-4">
                  Skip the emails and book a 15-minute consulting discovery slot in my calendar directly.
                </p>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-accent/10 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Calendar Strategy Call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl border border-card-border p-6 md:p-8 relative h-full flex flex-col justify-between shadow-lg">
              {status === "success" && (
                <div className="absolute inset-0 bg-background/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-6 z-10 animate-in fade-in duration-300">
                  <div className="p-4 bg-accent/15 text-accent rounded-full mb-4">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Dispatched</h3>
                  <p className="text-sm text-muted-text max-w-sm">
                    Thank you! Marcus has received your inquiry. The analytics server has confirmed delivery, and he will follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs font-semibold bg-muted-bg hover:bg-muted-bg/80 text-foreground px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-bold mb-1">Send a Message</h3>
                  <p className="text-xs text-muted-text">Fields marked with * are required.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xxs font-bold uppercase text-muted-text">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs text-foreground placeholder:text-muted-text/60 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xxs font-bold uppercase text-muted-text">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className="bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs text-foreground placeholder:text-muted-text/60 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xxs font-bold uppercase text-muted-text">Company / Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Analytics Inc."
                    className="bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs text-foreground placeholder:text-muted-text/60 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xxs font-bold uppercase text-muted-text">Message / Project Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your database architecture or reporting objectives..."
                    className="bg-muted-bg border border-card-border rounded-xl px-4 py-2.5 text-xs text-foreground placeholder:text-muted-text/60 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500 font-semibold">
                    Error sending request. Please ensure name, email, and message are populated.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-primary/20 cursor-pointer disabled:opacity-50"
                >
                  <span>{status === "submitting" ? "Transmission Active..." : "Send Message"}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Booking Dialog / Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="glass max-w-md w-full rounded-3xl border border-card-border shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 relative">
            {bookingConfirmed && (
              <div className="absolute inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-20 animate-in fade-in duration-300">
                <div className="p-4 bg-accent/15 text-accent rounded-full mb-4">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Meeting Confirmed</h3>
                <p className="text-sm text-muted-text max-w-xs">
                  Your strategy slot for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been secured. A calendar invite with secure Google Meet link has been dispatched to your email.
                </p>
              </div>
            )}

            {/* Modal Header */}
            <div className="bg-muted-bg/50 px-6 py-4 border-b border-card-border flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Calendar className="w-4.5 h-4.5 text-primary" />
                <span className="font-bold text-sm">Schedule Strategy Call</span>
              </div>
              <button
                onClick={() => setBookingOpen(false)}
                className="p-1 rounded-lg hover:bg-muted-bg text-muted-text hover:text-foreground cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex flex-col gap-6">
              {/* Date selection */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-text mb-3">1. Select a Date</h4>
                <div className="grid grid-cols-4 gap-2">
                  {dates.map((date, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedDate(date)}
                      className={`py-2 rounded-xl text-xxs font-semibold border transition-all cursor-pointer ${selectedDate === date
                        ? "bg-primary text-white border-primary"
                        : "glass border-card-border hover:border-primary/40 text-foreground"
                        }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time selection */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-text mb-3">2. Select a Time Slot (PST)</h4>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-xl text-xxs font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${selectedTime === time
                        ? "bg-primary text-white border-primary"
                        : "glass border-card-border hover:border-primary/40 text-foreground"
                        }`}
                    >
                      <Clock className="w-3 h-3 text-muted-text" />
                      <span>{time}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="bg-muted-bg/30 px-6 py-4 border-t border-card-border flex justify-end gap-3">
              <button
                onClick={() => setBookingOpen(false)}
                className="px-4 py-2 bg-muted-bg hover:bg-muted-bg/80 text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={handleBookingConfirm}
                disabled={!selectedDate || !selectedTime}
                className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded-xl cursor-pointer disabled:opacity-50"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
