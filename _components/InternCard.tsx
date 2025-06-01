"use client";

import React, { useState } from "react";
import NavButton from "@/_components/NavButton";

interface NavButtonProps {
  logo: string;
  text: string;
  bgColor?: string;
  textColor?: string;
}

interface InternCardProps {
  number: string;
  duration: string;
  companyName: string;
  position: string;
  points: string[];
  buttons: NavButtonProps[];
  link?:string;
}

function InternCard({
  number,
  duration,
  companyName,
  position,
  points = [],
  buttons = [],
  link,
}: InternCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="snap-start min-w-[100%] max-w-[350px] sm:min-w-[350px] md:min-w-[500px] w-full rounded-2xl bg-white pt-5 pl-5 pr-5 mt-5 "
      style={{
        outline: "1.5px solid black",
        outlineOffset: "-10px",
      }}
    >
      <div
        style={{ fontFamily: "'Yatra One', cursive" }}
        className="md:text-xl text-md flex justify-between pt-[5px]"
      >
        <p>क्र. {number}</p>
        <p>{duration}</p>
      </div>

      <hr className="border-t border-black my-2" />

      <div className="flex justify-between items-center ">
        <div className="py-4">
          <p
            style={{ fontFamily: "'Yatra One', cursive" }}
            className="text-3xl tracking-tighter leading-tight md:text-4xl"
          >
            {companyName}
          </p>
          <p
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="text-xl tracking-tighter leading-tight md:text-2xl"
          >
            {position}
          </p>
        </div>

        <a
          href={link}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "inline-block",
            transition: "transform 0.3s ease",
            transform: hovered ? "rotate(38deg)" : "rotate(0deg)",
          }}
        >
          <img
            src="black.svg"
            alt="clickable link"
            className="cursor-pointer w-6 md:w-12"
          />
        </a>
      </div>

      <div
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="text-xs space-y-1 md:text-sm text-left"
      >
        {points.map((pt, idx) => (
          <p key={idx}>
            {idx + 1}. {pt}
          </p>
        ))}
      </div>

      <div className="py-5 flex gap-2 flex-wrap">
        {buttons.map((btn, index) => (
          <NavButton
            key={index}
            logo={btn.logo}
            text={btn.text}
            bgColor={btn.bgColor}
            textColor={btn.textColor}
          />
        ))}
      </div>
    </div>
  );
}

export default InternCard;
