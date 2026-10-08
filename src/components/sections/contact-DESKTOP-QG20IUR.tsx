"use client";

import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F6E4CF] rounded-t-[25px] relative z-10 py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#321C04] leading-[1.2] mb-8">
          Let's work together
        </h2>
        
        <p className="text-[#321C04]/80 text-base md:text-lg mb-12 max-w-lg mx-auto">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
        </p>

        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-3 bg-[#321C04] text-[#FFF9F2] rounded-full px-8 py-4 hover:bg-[#1F1003] transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#321C04]" />
          </div>
          <span className="uppercase tracking-wide font-medium">Say hello</span>
        </a>
      </div>
    </section>
  );
}
