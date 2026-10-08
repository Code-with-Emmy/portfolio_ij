"use client";

import { Mail, Plus } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#F6E4CF] rounded-t-[25px] relative z-10 py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Area */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <p className="text-[#321C04] text-base md:text-lg leading-relaxed max-w-lg">
            Hi, I'm Ijeoma Kalu, a Data Analyst with a passion for turning data into meaningful insights that help businesses grow. I enjoy working with data to solve problems, discover trends, and support better decision-making.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="bg-[#321C04] text-[#FFF9F2] rounded-full flex items-center gap-3 px-6 py-3 hover:bg-[#1F1003] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Mail className="w-4 h-4 text-[#321C04]" />
              </div>
              <span className="uppercase tracking-wide font-medium text-sm">Say hello</span>
            </a>

            <a
              href="#projects"
              className="bg-[#D9C4AA] text-[#321C04] rounded-full flex items-center gap-3 px-6 py-3 hover:bg-[#CEBA9E] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Plus className="w-4 h-4 text-[#321C04]" />
              </div>
              <span className="uppercase tracking-wide font-medium text-sm">See work</span>
            </a>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center gap-2 mb-16">
          <div className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
          <div className="flex-1 h-[2px] bg-[#D9C4AA]" />
          <div className="w-2 h-2 rounded-full bg-[#D9C4AA]" />
        </div>

        {/* Bottom Area */}
        <div className="max-w-6xl flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Logo + Label */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 256 256"
              fill="none"
              className="mb-4"
            >
              <path
                d="M 256 256 L 178 256 C 150.386 256 128 233.614 128 206 L 128 256 L 0 256 L 0 192 C 0 156.654 28.654 128 64 128 C 99.346 128 128 156.654 128 192 L 128 128 L 256 128 Z M 78 0 C 105.614 0 128 22.386 128 50 L 128 0 L 256 0 L 256 64 C 256 99.346 227.346 128 192 128 C 156.654 128 128 99.346 128 64 L 128 128 L 0 128 L 0 0 Z"
                fill="#321C04"
              />
            </svg>
            <p className="text-xs uppercase tracking-widest font-semibold text-[#321C04]">
              Clear /<br />
              Actionable
            </p>
          </div>

          {/* Right: Large paragraph */}
          <div className="flex-1">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-normal text-[#321C04]">
              I have practical experience using Microsoft Excel, SQL, Python, Power BI, and Tableau to clean data, analyze information, and create interactive dashboards and reports. I pay close attention to detail and always aim to deliver accurate, easy-to-understand, and actionable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
