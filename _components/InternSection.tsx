"use client";

import React, { useState, useRef } from "react";
import InternCard from "@/_components/InternCard";


function InternSection() {
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[rgb(237,255,146)] in-h-screen px-4 sm:px-6 md:px-2 pb-10">
      <div className=" flex justify-between  px-[60px] pt-[40px] pb-[10px]">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily: hovered
              ? "'Yatra One', cursive"
              : "'Bebas Neue', serif",
            WebkitTextStrokeWidth: hovered ? "0.5px" : "0.5px",
            WebkitTextStrokeColor: hovered ? "#666666" : "#666",
          }}
          className="text-[#23AD7E] text-5xl md:text-8xl sm:tracking-[-2px] md:tracking-[-2px] transition-all duration-300"
        >
          {hovered ? "वर्क & इंटर्नशिपs" : "Work & Internships"}
        </div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "inline-block",
            transition: "transform 0.3s ease",
            transform: hovered ? "rotate(38deg)" : "rotate(0deg)",
          }}
        >
          <a href="https://www.linkedin.com/in/meetalikapse/">
            <img
              src="green.svg"
              alt="an arrow"
              className="h-15 sm:h-10 md:h-30"
            />
          </a>
        </div>
      </div>
      <div className="relative w-full px-5">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2rounded-full px-3"
        >
          <img src="left.svg" alt="Left" className="w-10 h-10" />
        </button>

        <div
          ref={scrollRef}
          className="scroll-container flex gap-6 overflow-x-auto scrollbar-hide-px-4 sm:px-10 py-5 px-4 scroll-smooth snap-x snap-mandatory"
        >
          <InternCard
            number="4"
            duration="Jan 2025 - April 2025"
            companyName="Orim Advisors"
            position="UI & UX Design Intern"
            points={[
              "Led the end-to-end design process for two new projects, from ideation and prototyping to testing and implementation using Figma.",
              "Defined brand identity and created 30+ wireframes, translating them into high-fidelity prototypes for seamless user experiences.",
              "Collaborated with the development team to refactor and modularize Python scripts related to data scraping and preprocessing.",
            ]}
            buttons={[
              {
                logo: "sparkles.svg",
                text: "Figma",
                bgColor: "bg-[#e0f2ff]",
                textColor: "text-[#4793F5]",
              },
              {
                logo: "briefcase-business.svg",
                text: "Python",
                bgColor: "bg-[#EDFF92]",
                textColor: "text-[#76A908]",
              },
              {
                logo: "laptop.svg",
                text: "Web Design",
                bgColor: "bg-[#DAFFDE]",
                textColor: "text-[#23AD7E]",
              },
            ]}
          />
          <InternCard
            number="3"
            duration="Sept 2024 – Nov 2024"
            companyName="The Hobby Tribe"
            position="UI & UX Design Intern"
            points={[
              "Led the complete redesign of the platform in collaboration with the CEO, improving user experience for 1000+ active users.",
              "Conducted user research, created 20+ wireframes, and developed high-fidelity prototypes to enhance the app’s usability and aesthetics.",
            ]}
            buttons={[
              {
                logo: "sparkles.svg",
                text: "Figma",
                bgColor: "bg-[#e0f2ff]",
                textColor: "text-[#4793F5]",
              },
              {
                logo: "briefcase-business.svg",
                text: "Web Design",
                bgColor: "bg-[#EDFF92]",
                textColor: "text-[#76A908]",
              },
            ]}
            link="https://www.behance.net/gallery/211872381/The-Hobby-Tribe-Platform-Redesign-Internship-Project"
          />
          <InternCard
            number="2"
            duration="Feb 2024 – Sept 2024"
            companyName="SimPPL"
            position="Software Engineer Research Fellow"
            points={[
              "Engineered and maintained the Kitchen Website using Next.js, showcasing 12+ organizational projects; enhanced user engagement and optimized page load by integrating it with Sanity CMS.",
              "Contributed to the Aadhar Sanstha Project by developing a Flutter Android application for pregnant and new tribal mothers.",
            ]}
            buttons={[
              {
                logo: "sparkles.svg",
                text: "ReactJS",
                bgColor: "bg-[#e0f2ff]",
                textColor: "text-[#4793F5]",
              },
              {
                logo: "briefcase-business.svg",
                text: "Flutter",
                bgColor: "bg-[#EDFF92]",
                textColor: "text-[#76A908]",
              },
              {
                logo: "laptop.svg",
                text: "Next.js",
                bgColor: "bg-[#DAFFDE]",
                textColor: "text-[#23AD7E]",
              },
            ]}
            link="https://simppl.org/"
          />
          <InternCard
            number="1"
            duration="Jun 2024 – Jul 2024"
            companyName="Augenblick Consulting"
            position="Full Stack Web Developer Intern"
            points={[
              "Engineered custom reusable components to accommodate diverse input parameters with 100+ datapointsfor statistical graphs using TypeScript, ReactJS, and D3.js, enhancing flexibility, functionality and scalability.",
              "Designed and developed a comprehensive website using Figma, Next.js and Tailwind CSS for a project focused on blockchain technology in plastic recycling.",
            ]}
            buttons={[
              {
                logo: "sparkles.svg",
                text: "TypeScript",
                bgColor: "bg-[#e0f2ff]",
                textColor: "text-[#4793F5]",
              },
              {
                logo: "briefcase-business.svg",
                text: "D3.js",
                bgColor: "bg-[#EDFF92]",
                textColor: "text-[#76A908]",
              },
              {
                logo: "laptop.svg",
                text: "ReactJS",
                bgColor: "bg-[#DAFFDE]",
                textColor: "text-[#23AD7E]",
              },
            ]}
          />
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full"
        >
          <img src="right.svg" alt="Right" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}

export default InternSection;
