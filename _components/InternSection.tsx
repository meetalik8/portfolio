"use client";

import React, { useState, useRef } from "react";
import InternCard from "./InternCard";


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
    <div className="bg-[rgb(237,255,146)] h-screen">
      <div className=" flex justify-between  px-[60px] pt-[40px] pb-[20px]">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily: hovered
              ? "'Yatra One', cursive"
              : "'Playfair Display', serif",
            WebkitTextStrokeWidth: hovered ? "0.5px" : "1px",
            WebkitTextStrokeColor: hovered ? "#666666" : "#666",
          }}
          className="text-[#23AD7E] text-8xl  tracking-[-3px] font-semibold transition-all duration-300"
        >
          {hovered ? "इंटर्नशिपs" : "INTERNSHIPS"}
        </div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "inline-block",
            transition: "transform 0.3s ease",
            transform: hovered ? "rotate(40deg)" : "rotate(0deg)",
          }}
        >
          <a href="https://www.linkedin.com/in/meetalikapse/">
            <img src="greenarrow.png" alt="an arrow" />
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
          className="flex gap-6 overflow-x-auto scrollbar-hide px-10 py-5 scroll-smooth"
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
