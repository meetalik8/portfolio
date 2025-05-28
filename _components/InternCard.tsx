"use client";

import React, { useState } from "react";
import NavButton from "./NavButton";

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
}

function InternCard({
  number,
  duration,
  companyName,
  position,
  points=[],
  buttons = [],
}: InternCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-w-[500px] max-w-[350px]  rounded-2xl bg-white p-5 mt-8">
      <div
        style={{ fontFamily: "'Yatra One', cursive" }}
        className="text-xl flex justify-between"
      >
        <p>No. {number}</p>
        <p>{duration} </p>
      </div>
      <img src="Line.svg" alt="" className="p-2" />
      <div className="py-4 ">
        <p
          style={{ fontFamily: "'Yatra One', cursive" }}
          className="text-4xl tracking-tighter leading-tight"
        >
          {companyName}
        </p>
        <p
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-2xl tracking-tighter leading-tight"
        >
          {" "}
          {position}
        </p>
      </div>
      <div style={{ fontFamily: "'Poppins', sans-serif" }} className="text-sm">
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
