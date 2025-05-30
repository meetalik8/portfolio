"use client";

import React, { useState } from "react";

interface LeftPageProps {
  number: string;
  label: string[];
  company: string;
  role: string;
  images: string[];
  limit: number;
}

export default function DesignLeftPage({
    number,
    label,
    company,
    role,
    images,
    limit,
  }: LeftPageProps) {
    const [hovered, setHovered] = useState(false);
  return (
    <div
      className="w-full h-full bg-[#F5F5F5] md:rounded-tl-[30px] md:rounded-bl-[30px] 
      px-6 py-4 flex flex-col justify-between
      rounded-xl
        md:flex-col
        sm:rounded-none
        sm:px-4 sm:py-3"
      style={{ minHeight: "400px" }}
    >
      <div className="text-sm pt-2.5 md:text-3xl md:pt-2.5">
        No. {number}
        <hr className="border-black pb-4 sm:pb-2" />
      </div>

      <div className="flex justify-between items-center ">
        <div className=" text-lg md:text-6xl font-semibold tracking-tight">
          {company}
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
            <img src="black.svg" alt="an arrow" className="h-8 md:h-10" />
          </a>
        </div>
      </div>

      <div className="py-2 md:py-0">
        <p className="text-md md:text-lg underline tracking-tight">My Role: </p>
        <p className="text-md tracking-tight text-left">{role}</p>
      </div>

      {label.slice(0, limit).map((text, index) => (
        <p
          key={index}
          className="text-sm md:text-md tracking-tight md:pb-0 py-1 text-black"
        >
          {text}
        </p>
      ))}

      <div className="flex flex-wrap gap-2 pb-3 max-h-[50%]">
        {images.slice(0, limit).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Design preview ${index + 1}`}
            className="max-h-[100%] max-w-full object-contain rounded-md shadow-md flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}