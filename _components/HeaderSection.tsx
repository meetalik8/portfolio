import React from "react";
import LinksSection from "@/_components/LinksSection";

function HeaderSection() {
  return (
    <div className="h-screen flex flex-col overflow-x-hidden md:overflow-y-hidden overflow-y-auto">
      <div className="header-bg flex-grow flex flex-col md:flex-row justify-center items-center px-6 md:px-15 py-8 md:py-[80px] md:gap-20 md:mt-[50px] mt-[80px]">
        <div className="flex flex-col justify-center items-start text-center md:text-left ">
          <h1 className="header-title">Hello!</h1>
          <h1 className="header-title">I'm Meetali Kapse</h1>
          <div className="header-description leading-relaxed md:text-left">
            <span className="text-primary">A </span>
            <span className="text-accent-purple">design</span>
            <span className="text-primary">-minded front-end web </span>
            <span className="text-accent-green">developer</span>
            <span className="text-primary"> and </span>
            <span className="text-accent-yellow">software engineer</span>
            <span className="text-primary">
              {" "}
              focused on building beautiful interfaces & experiences.
            </span>
          </div>
        </div>

        <div className="relative flex justify-center mt-10 md:mt-0 ">
          <img
            src="pinkSparks.svg"
            alt="decorative svg"
            className="absolute top-[-15px] left-[-35px] w-24 h-24"
          />
          <div className=" h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="pfp.JPG"
              alt="my picture"
              className="w-full h-full object-cover pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#C73694] py-2 flex justify-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="text-white text-[20px] sm:text-[28px] tracking-[-1px] whitespace-nowrap text-center sm:text-left w-full sm:w-auto">
            Tech Stack:
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
            {[
              "ReactJS",
              "React Native",
              "TypeScript",
              "JavaScript",
              "Flask",
              "Firebase",
              "Tailwind",
              "Figma",
            ].map((tech, i) => (
              <span
                key={i}
                className="text-white text-base sm:text-lg font-medium tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <LinksSection />
    </div>
  );
}

export default HeaderSection;
