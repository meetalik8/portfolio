"use client";
import { useState } from "react";
import Image from "next/image";
import NavButton from "./NavButton";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-dvw px-[50px] py-[15px] bg-white backdrop-blur-[50px] fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="container inline-flex justify-between items-center h-full">
        <a href="#">
          <Image
            src="/mine-01.png"
            alt="MK in handwritten"
            width={40}
            height={50}
          />
        </a>

        <button
          className="block md:hidden p-5 text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div
          id="nav-buttons"
          className={`absolute md:static top-[100px] left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center backdrop-blur-[50px]`}
        >
          <ul className="flex flex-col md:flex-row md:gap-[15px] gap-y-4 text-center pb-5 pt-5 top-0">
            <li>
              <a href="#">
                <NavButton
                  logo="/sparkles.svg"
                  text="About Me"
                  bgColor="bg-[#e0f2ff]"
                  textColor="text-[#70aaf3]"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <NavButton
                  logo="/briefcase-business.svg"
                  text="Internships"
                  bgColor="bg-[#e5fab5]"
                  textColor="text-[#82b123]"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <NavButton
                  logo="/laptop.svg"
                  text="Development"
                  bgColor="bg-[#daffde]"
                  textColor="text-[#2cbd85]"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <NavButton
                  logo="/palette.svg"
                  text="Design"
                  bgColor="bg-[#f3e0ff]"
                  textColor="text-[#bb8ad7]"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <NavButton
                  logo="/file.svg"
                  text="Resume"
                  bgColor="bg-[#fff5d7]"
                  textColor="text-[#fccc2d]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
