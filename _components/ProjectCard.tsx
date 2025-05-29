"use client";

import React,{ useState} from "react";

interface Props {
  name: string;
  date: string;
  title: string;
  image: string;
  description: string;
  stack: string[];
  link?: string;
}

export default function ProjectCard({
  name,
  date,
  title,
  image,
  description,
  stack,
  link,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-white text-black rounded-xl shadow-lg w-full px-8 py-6 ">
      <div className="flex flex-col justify-start items-start flex-wrap">
        <div className="flex w-full items-center gap-3 cursor-pointer ">
          <h2 className="md:text-4xl sm:text-2xl font-bold tracking-tighter ">
            {name}
          </h2>
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
            <img src="black.svg" alt="clickable link" className="w-4 md:w-6" />
          </a>
        </div>
        <div className="w-full flex justify-between">
          <p className="text-md sm:text-sm text-black tracking-tight">
            {title}
          </p>
          <p className="text-md sm:text-sm text-black tracking-tight">{date}</p>
        </div>
      </div>

      <hr className="my-4 border-black" />

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="rounded-xl md:w-[400px] sm:w-[300px] object-cover"
          />
        </div>

        <div className="text-left">
          <p className="text-md leading-relaxed text-justify">{description}</p>
          <hr className="my-2 border-black" />
          <div className="mt-4">
            <h4 className="font-bold">Tech Stack:</h4>
            <ul className="list-disc pl-5 text-sm">
              {stack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
