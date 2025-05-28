import React from "react";
import LinksSection from "./LinksSection";

function HeaderSection() {
  return (
    <div className="h-screen flex flex-col">
      <div className="header-bg flex flex-col md:flex-row justify-center items-center px-6 md:px-15 py-8 md:py-[80px] md:gap-20 md:mt-[50px] mt-[80px]">
        <div className="flex flex-col justify-center items-start text-center md:text-left ">
          <h1 className="header-title">Hello!</h1>
          <h1 className="header-title">I'm Meetali Kapse</h1>
          <div className="header-description leading-relaxed">
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
        <div className="relative flex justify-center mt-10 md:mt-0">
          <img
            src="pinkSparks.svg"
            alt="decorative svg"
            className="absolute top-[-15px] left-[-35px] w-24 h-24"
          />
          <div className=" h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="pfp.JPG"
              alt="my picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <LinksSection />
    </div>
  );
}

export default HeaderSection;
