"use client";

import React, { useState } from "react";
import DesignLeftPage from "./DesignLeftPage";
import DesignRightPage from "./DesignRightPage";
import { link } from "fs";

const designData = [
  {
    number: "1",
    company: "Orim Advisors",
    role: "I worked as a UI/UX Design Intern where I designed for a cloud platform from ideation and planning to creating accessible interfaces that catered to both novice and experienced users. I also designed two financial platforms focused on stocks, trading, and mutual funds, ensuring clarity and ease of use for a wide range of users.",
    label: ["Cloud Platform (Root) and Financial Projects (Salt) :"],
    images: ["cl1.svg", "cl2.svg", "fin1.svg", "fin2.svg"],
    duration: "Jan 2025 - Apr 2025",
    color: "#E5FAB5",
    limit: 1,
    link: "https://www.figma.com/proto/GZBhwjEHE0l1kJQ9YvRWgu/Orim-Cloud-%E2%98%81?node-id=2077-2066&scaling=scale-down-width&content-scaling=fixed&t=t80i0tLhTCu6ypLy-1",
  },
  {
    number: "2",
    company: "The Hobby Tribe",
    role: "I worked as an UI & UX Design Intern where I re-designed their platform to make it intuitive, modern and visually appealing. The old design had several issues affecting user trust as it appeared misaligned, un-aesthetic, and gave an untrustworthy impression. My goal was to make the platform more inviting and engaging by addressing both visual and functional issues, ultimately creating a seamless and trustworthy user-experience.",
    label: ["New Homepage:"],
    images: ["tht1.svg", "tht2.svg"],
    duration: "Oct 2024 - Nov 2024",
    color: "#CCEBFF",
    limit: 1,
    link: "https://www.behance.net/gallery/211872381/The-Hobby-Tribe-Platform-Redesign-Internship-Project",
  },
  {
    number: "3",
    company: "IT'25 Yearbook",
    role: "A passion project of mine, I took the initiative to create a yearbook for my college department to commemorate our four-year undergraduate journey. I conceptualized and designed all sections of the book, aiming to make them as creative, meaningful, and enjoyable as possible for everyone to look back on for years to come.",
    label: ["Cover and some snippets:"],
    images: ["y1.svg", "y2.svg", "y3.svg"],
    duration: "April 2025 - May 2025",
    color: "#DAFFDE",
    limit: 1,
    link: "https://heyzine.com/flip-book/4b31097232.html",
  },
  {
    number: "4",
    company: "IETE-TSEC",
    role: "I led the Design Team in 2023 to 2024 and was responsible for managing a team of six designers while overseeing the visual identity for two of our college’s biggest events, Elan and Oscillation. I ensured that all designs, from posters and social media posts to banners and certificates, matched the event themes and met high creative standards.",
    label: ["Designs I made for their social media:"],
    images: ["i1.svg", "i3.svg", "i4.svg"],
    duration: "Mar 2022 - Mar 2024",
    color: "#EC88CE",
    limit: 1,
    link: "https://www.behance.net/gallery/188562679/Infogram",
  },
  {
    number: "5",
    company: "Ideathons",
    role: "I created this case study for a hackathon where we aimed to increase engagement among college students for a popular food delivery app. My teammate and I focused on building features that aligned with student lifestyles, such as a campus leaderboard, subscription plans, virtual dining experiences, and social sharing options.",
    label: ["Designs for a food ordering app:"],
    images: ["e1.svg", "e2.svg", "e3.svg"],
    duration: "Oct 2024 - Dec 2024",
    color: "#FFF6D7",
    limit: 1,
    link: "https://www.behance.net/gallery/211682325/Campus-Eats-Food-Delivery-for-College-Students",
  },
];

const tabColors = ["#CCEBFF", "#E5FAB5", "#DAFFDE", "#EC88CE", "#FFF6D7"];

export default function DesignSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [mobilePage, setMobilePage] = useState<"left" | "right">("left");

  return (
    <div className="bg-[#9F79B4] min-h-screen px-4 sm:px-6 md:px-2 py-6">
      <div className="flex justify-between px-[60px] pt-[40px] pb-[10px]">
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
          <p className="text-white">(* more on my Behance!)</p>
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

      {/* MOBILE TABS */}
      <div className="md:hidden flex flex-wrap justify-center gap-2 mb-4">
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

      {/* MOBILE PAGE TOGGLE */}
      <div className="md:hidden flex justify-center gap-4 mb-4">
        <button
          onClick={() => setMobilePage("left")}
          className={`px-4 py-2 rounded-md font-semibold ${
            mobilePage === "left"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
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
        >
          Right Page
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex relative px-4 sm:px-6 md:px-10 box-border max-w-full">
        <div className="flex flex-col md:flex-row w-full min-h-[80vh] relative">
          {/* LEFT PAGE */}
          <div className="w-full md:w-1/2 flex">
            <div className="md:block hidden">
              <DesignLeftPage
                number={designData[activeTab].number}
                company={designData[activeTab].company}
                role={designData[activeTab].role}
                label={designData[activeTab].label}
                images={designData[activeTab].images}
                limit={1}
                link={designData[activeTab].link}
              />
            </div>
            <div className="md:hidden">
              {mobilePage === "left" && (
                <DesignLeftPage
                  number={designData[activeTab].number}
                  company={designData[activeTab].company}
                  role={designData[activeTab].role}
                  label={designData[activeTab].label}
                  images={designData[activeTab].images}
                  limit={1}
                  link={designData[activeTab].link}
                />
              )}
            </div>
          </div>

          {/* RIGHT PAGE */}
          <div className="w-full md:w-1/2 flex">
            <div className="md:block hidden">
              <DesignRightPage
                duration={designData[activeTab].duration}
                images={designData[activeTab].images.slice(
                  designData[activeTab].limit
                )}
              />
            </div>
            <div className="md:hidden">
              {mobilePage === "right" && (
                <DesignRightPage
                  duration={designData[activeTab].duration}
                  images={designData[activeTab].images.slice(
                    designData[activeTab].limit
                  )}
                />
              )}
            </div>
          </div>

          <div className="hidden md:flex absolute inset-y-0 right-0 w-1/2 pointer-events-none">
            <div className="relative h-full w-full">
              <div className="absolute top-10 right-0 flex flex-col items-end pointer-events-auto">
                {designData.map((data, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className="w-[120px] h-[40px] rounded-bl-md rounded-br-md transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer"
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
