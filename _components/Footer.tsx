"use client";
import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#D3A204] px-4 sm:px-6 md:px-10 py-8">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 bg-[#fdf5e6] rounded-xl p-6 shadow-lg">
        {/* About Me */}
        <div className="w-full md:w-1/2 border rounded-lg p-4">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-[#D3A204] mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            ABOUT ME:
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-black">
            As a developer, I have built things for the web with some awesome
            people. I have interned at four incredible organizations — Orim
            Advisors, The Hobby Tribe, Augenblick Consulting, and SimPPL.
            <br />
            <br />
            As a designer, I enjoy bridging the gap between technology and human
            interactions by combining my technical knowledge with my keen eye
            for design to create beautiful products. My goal is to always build
            creative solutions for real-world problems that are inclusive and
            accessible.
            <br />
            <br />
            When I’m not in front of a computer screen, I’m probably crocheting,
            volunteering, or{" "}
            <a href="https://www.duolingo.com/profile/meets88">
              <span className="font-bold underline">learning Spanish</span>!
            </a>
          </p>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/2 border rounded-lg p-4 flex flex-col justify-between">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-[#D3A204] mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            CONTACT:
          </h2>
          <div className="flex flex-col gap-4 text-black text-sm md:text-base">
            <div className="flex items-center gap-3">
              <img src="linkedin.svg" className="text-black" />
              <a
                href="https://linkedin.com/in/meetalikapse"
                target="_blank"
                rel="noopener noreferrer"
              >
                /meetalikapse
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img src="twitter.svg" className="text-black" />
              <a
                href="https://twitter.com/meetsshutup"
                target="_blank"
                rel="noopener noreferrer"
              >
                @meetsshutup
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
