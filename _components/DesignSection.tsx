"use client";

import React, { useState } from "react";
import DesignLeftPage from "./DesignLeftPage";
import DesignRightPage from "./DesignRightPage";

const designData = [
  {
    number: "1",
    company: "The Hobby Tribe",
    role: "I worked as an UI & UX Design Intern where I re-designed their platform to make it intuitive, modern and visually appealing. The old design had several issues affecting user trust as it appeared misaligned, un-aesthetic, and gave an untrustworthy impression. My goal was to make the platform more inviting and engaging by addressing both visual and functional issues, ultimately creating a seamless and trustworthy user-experience.",
    label: ["New Homepage:"],
    images: ["maya.png","aiandwater.png", "workwave.png"],
    duration: "Jan 2025 - Apr 2025",
    color: "#CCEBFF",
  },
  {
    number: "2",
    company: "Orrin Advisors",
    role: "...",
    label: ["Dashboard Revamp:"],
    images: ["maya.png"],
    duration: "Feb 2025 - May 2025",
    color: "#E5FAB5",
  },
  {
    number: "3",
    company: "Company Three",
    role: "...",
    label: ["Feature X:"],
    images: ["maya.png"],
    duration: "May 2025 - Aug 2025",
    color: "#DAFFDE",
  },
  {
    number: "4",
    company: "Company Four",
    role: "...",
    label: ["Project Y:"],
    images: ["maya.png"],
    duration: "Jun 2025 - Sep 2025",
    color: "#EC88CE",
  },
  {
    number: "5",
    company: "Company Five",
    role: "...",
    label: ["Final Project:"],
    images: ["maya.png"],
    duration: "Sep 2025 - Dec 2025",
    color: "#FFF6D7",
  },
];
const tabColors = ["#CCEBFF", "#E5FAB5", "#DAFFDE", "#EC88CE", "#FFF6D7"];


export default function DesignSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [mobilePage, setMobilePage] = useState<"left" | "right">("left");

  return (
    <div className="bg-[#9F79B4] min-h-screen px-4 sm:px-6 md:px-2 py-6">
      <div className=" flex justify-between  px-[60px] pt-[40px] pb-[10px]">
        <div className="flex flex-col gap-3">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              fontFamily: hovered ? "'Amita', cursive" : "'Inter', serif",
            }}
            className="text-[#F4E0FF] text-3xl md:text-6xl sm:tracking-[-5px] md:tracking-[-5px] font-semibold transition-all duration-300"
            id="design"
          >
            {hovered ? "डिझाइनs" : "Design Work*"}
          </div>
          <p className="text-white ">(* more on my Behance!)</p>
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
          <a href="https://www.behance.net/meetalikapse">
            <img
              src="purple.svg"
              alt="an arrow"
              className="h-15 sm:h-10 md:h-20"
            />
          </a>
        </div>
      </div>

      <div className="md:hidden flex flex-wrap justify-center gap-2 mb-4 ">
        {designData.map((data, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-3 py-1 rounded-md shadow-md transition-all duration-300 cursor-pointer text-sm font-medium ${
              activeTab === idx ? "bg-black text-white" : "bg-white text-black"
            }`}
            style={{ backgroundColor: tabColors[idx] }}
          >
            {data.company}
          </button>
        ))}
      </div>

      <div className="md:hidden flex justify-center gap-4 mb-4">
        <button
          onClick={() => setMobilePage("left")}
          className={`px-4 py-2 rounded-md font-semibold ${
            mobilePage === "left"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          style={{ backgroundColor: mobilePage === "left" ? "#000" : "#fff" }}
        >
          Left Page
        </button>
        <button
          onClick={() => setMobilePage("right")}
          className={`px-4 py-2 rounded-md font-semibold ${
            mobilePage === "right"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          style={{ backgroundColor: mobilePage === "right" ? "#000" : "#fff" }}
        >
          Right Page
        </button>
      </div>

      <div className="flex relative px-4 sm:px-6 md:px-10 box-border max-w-full">
        <div className="flex flex-col md:flex-row w-full min-h-[80vh]">
          <div className="w-full md:w-1/2 flex">
            <div className="md:block hidden">
              {/* Desktop: show left page */}
              <DesignLeftPage
                number={designData[activeTab].number}
                company={designData[activeTab].company}
                role={designData[activeTab].role}
                label={designData[activeTab].label}
                images={designData[activeTab].images}
                limit={1}
              />
            </div>
            <div className="md:hidden">
              {/* Mobile: show left page only if selected */}
              {mobilePage === "left" && (
                <DesignLeftPage
                  number={designData[activeTab].number}
                  company={designData[activeTab].company}
                  role={designData[activeTab].role}
                  label={designData[activeTab].label}
                  images={designData[activeTab].images}
                  limit={1}
                />
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex">
            <div className="md:block hidden">
              {/* Desktop: show right page */}
              <DesignRightPage
                duration={designData[activeTab].duration}
                images={designData[activeTab].images}
              />
            </div>

            <div className="md:hidden">
              {/* Mobile: show right page only if selected */}
              {mobilePage === "right" && (
                <DesignRightPage
                  duration={designData[activeTab].duration}
                  images={designData[activeTab].images}
                />
              )}
            </div>
            <div className="hidden md:flex md:absolute md:right-[40px] md:top-[50px] md:z-10">
              <div className="flex flex-col items-end">
                {designData.map((data, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-[120px] h-[40px] rounded-bl-md rounded-br-md transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer`}
                    style={{
                      backgroundColor: tabColors[idx],
                      color: "black",
                      marginTop: idx !== 0 ? "80px" : "0px",
                      zIndex: designData.length - idx,
                      transform: "rotate(-90deg)",
                      transformOrigin: "top right",
                    }}
                  >
                    {data.company}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
