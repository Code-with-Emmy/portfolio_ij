"use client";

import React, { useEffect, useState, useRef } from "react";

export default function Skills() {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const features = [
    {
      title: "Data Cleaning & Preparation",
      description: "I clean, organize, and prepare raw data for analysis. Using Excel, SQL, and Python, I ensure data accuracy and reliability before any analysis begins.",
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4"
    },
    {
      title: "Interactive Dashboards",
      description: "I create interactive dashboards using Power BI, Tableau, and Microsoft Excel. These visualizations help identify trends, patterns, and opportunities in business data.",
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4"
    },
    {
      title: "SQL & Python Analysis",
      description: "I write SQL queries to retrieve, filter, and analyze data from databases. I also use Python for data cleaning, analysis, and visualization to deliver actionable insights.",
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4"
    }
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      // Active detection observer
      const activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
              setActiveCard(index);
            }
          });
        },
        { threshold: 0.6 }
      );

      // Reveal animation observer
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              card.classList.remove('translate-x-16', 'opacity-0');
              card.classList.add('translate-x-0', 'opacity-100');
            }
          });
        },
        { threshold: 0.15 }
      );

      activeObserver.observe(card);
      revealObserver.observe(card);

      observers.push(activeObserver, revealObserver);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="skills" className="relative px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85')"
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[460px_1fr] xl:gap-48 gap-24">
        {/* Left Column - Sticky */}
        <div className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:justify-between lg:py-32">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal mb-12">
              What I can do with data
            </h2>

            {/* Feature Nav Buttons */}
            <div className="flex flex-col gap-2">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`text-left px-4 py-3 rounded-lg transition-all ${
                    activeCard === index
                      ? 'bg-black/20 text-white'
                      : 'bg-black/20 text-white/40 hover:text-white/60'
                  }`}
                >
                  {feature.title}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div>
            <p className="text-white/80 text-sm mb-4">
              No complexity. Just clear insights.
            </p>
            <a
              href="#projects"
              className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors inline-block"
            >
              See my work
            </a>
          </div>
        </div>

        {/* Right Column - Scrolling Cards */}
        <div className="flex flex-col gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 translate-x-16 opacity-0 transition-all duration-700 ease-out"
            >
              {/* SVG Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 256 256"
                fill="none"
                className="mb-6"
              >
                <path
                  d="M 256 256 L 178 256 C 150.386 256 128 233.614 128 206 L 128 256 L 0 256 L 0 192 C 0 156.654 28.654 128 64 128 C 99.346 128 128 156.654 128 192 L 128 128 L 256 128 Z M 78 0 C 105.614 0 128 22.386 128 50 L 128 0 L 256 0 L 256 64 C 256 99.346 227.346 128 192 128 C 156.654 128 128 99.346 128 64 L 128 128 L 0 128 L 0 0 Z"
                  fill="rgba(255,255,255,0.8)"
                />
              </svg>

              {/* Title */}
              <h3 className="text-white text-xl md:text-2xl font-medium mb-6">
                {feature.title}
              </h3>

              {/* Video */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-black/30 mb-6">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={feature.video} type="video/mp4" />
                </video>
              </div>

              {/* Description */}
              <p className="text-white/60 font-medium text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
