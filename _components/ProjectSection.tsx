"use client";

import React, { useState } from "react";
import ProjectCard from "@/_components/ProjectCard";
import ProjectFolderTabs from "@/_components/ProjectFolderTabs";

function ProjectSection() {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(0);


  const projects = [
    {
      name: "Maya",
      date: "Mar 2025",
      title: "Final Year Engineering Project",
      image: "/maya.png",
      description:
        "Maya is an AI-powered, mobile-first language learning app designed to help users—especially tourists—learn conversational Marathi in an engaging and culturally informed way. Through speech interaction, real-time feedback, AI chatbot assistance, and a vibrant community forum, Maya creates a holistic language learning experience.",
      stack: ["React Native", "Python", "Firebase", "Flask"],
      link: "https://github.com/meetalik8/Maya_App",
    },
    {
      name: "AI & Water",
      date: "Feb 2025",
      title: "Won the Deloitte X KWK AI & Sustainability Scholarship",
      image: "/aiandwater.png",
      description:
        "How much water does the LLMS use to process your queries? An android App that allows user to write queries and choose a model to understand how much water does that LLM takes to process the query, alongside fetches news from Guardian (using their API) realted to Artificial Intelligence and Sustainability.",
      stack: ["Kotlin", "Java", "RetroFit"],
      link: "https://github.com/meetalik8/sustainAndAI",
    },
    {
      name: "Trend-Z",
      date: "Aug 2024",
      title: "Prefinalist at Myntra Hackerramp We For She’24",
      image: "/trendz.png",
      description:
        "An app designed specifically for Gen Z to keep up with the latest fashion trends.TrendZ is an innovative online shopping platform tailored for Gen Z consumers, combining personalized recommendations, interactive quizzes, and virtual try-on features to enhance the shopping experience. Users engage through FwdSnaps and virtual chatrooms, fostering community and creativity while discovering daily fashion trends. With a rewards system based on user engagement, TrendZ offers a dynamic, immersive way to shop that mirrors in-store experiences.",
      stack: ["React Native", "Python", "Firebase", "Flask"],
      link: "https://github.com/meetalik8/CodeHers_Trend-Z",
    },
    {
      name: "FireAlert",
      date: "Nov 2024",
      title: "Built as a Lab Project for Internet of Everything",
      image: "/fire.png",
      description:
        "This project is a Forest Fire Detection System that leverages a combination of hardware and software components to detect fire hazards in forest areas. The system utilizes various sensors, an ESP8266 for communication, and a React Native application for monitoring alerts.",
      stack: ["React Native", "Arduino Uno", "Flask", "Python", "ThingSpeak"],
      link: "https://github.com/meetalik8/ForestFireDetection",
    },
    {
      name: "BinSense",
      date: "Mar 2024",
      title: "Won the 1st Place at AugenBlick Hackathon'24",
      image: "/binsense.png",
      description:
        "BinSense is an AI integrated web platform which allows users to track and analyze the waste and segregate it. It allows users to upload images, or live share their waste to segregate into categories. Gamification features for children to understand how to segregate waste.",
      stack: ["ReactJS", "Python", "Flask", "JavaScript"],
      link: "https://github.com/meetalik8/BinSense",
    },
    {
      name: "WorkWave",
      date: "Sept 2023",
      title: "Won the 1st place at Technovation oraganized by GDSC MBCET",
      image: "/workwave.png",
      description:
        "WorkWave is a web-based application designed for white-collar professionals, including lawyers, IT professionals, engineers and other professionals. Clients can connect with various service providers through our platform, eliminating the need to search extensively elsewhere. Users can effortlessly engage with services directly through our platform",
      stack: ["HTML5", "JavaScript", "Flask"],
      link: "https://github.com/meetalik8/BinSense",
    },
  ];

  
  return (
    <div className="bg-[#262626] in-h-screen px-4 sm:px-6 md:px-2 pb-10">
      <div className=" flex justify-between  px-[60px] pt-[40px] pb-[10px]">
        <div className="text-[#DAFFDE] text-3xl md:text-8xl sm:tracking-[-2px] md:tracking-[-2px] transition-all duration-300">
          Development Projects
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
          <a href="http://github.com/meetalik8">
            <img
              src="dev.svg"
              alt="an arrow"
              className="h-15 sm:h-10 md:h-30"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-full w-full p-4 sm:p-6 md:p-10 gap-6 md:gap-10">
        <ProjectFolderTabs
          tabs={projects.map((p) => p.name)}
          selected={selected}
          onSelect={setSelected}
        />
        <ProjectCard {...projects[selected]} />
      </div>
    </div>
  );
}

export default ProjectSection;
