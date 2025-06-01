"use client";
import React from "react";


export default function AboutContact() {
  return (
    <footer className="bg-[#F15A28] px-4 sm:px-6 md:px-2 py-6" id="aboutme">
      <div className="flex flex-col justify-between  px-[60px] pt-[40px] pb-[10px]">
        <h1
          className="text-[#fff] text-6xl"
          style={{ fontFamily: '"Mouse Memoirs", sans-serif' }}
        >
          about me!
        </h1>
        <div className="pt-5 text-[#fff] font-medium md:text-md space-y-4 text-justify md:text-left ">
          <p>
            Hi, I’m Meetali, a curious engineer and design enthusiast who loves
            building creative solutions for real-world problems.
          </p>
          <p>
            Over the years, I’ve had the chance to build things for the web and
            work with some incredible teams at Orim Advisors, The Hobby Tribe,
            Augenblick Consulting, and SimPPL, learning and growing with every
            experience.
          </p>
          <p>
            What I love most is bridging the gap between technology and human
            interaction. I enjoy finding that sweet spot where code meets
            creativity, using my technical skills and eye for design to craft
            experiences that are inclusive, intuitive, and just a little bit
            delightful.
          </p>
          <p>
            When I’m not in front of a screen, you’ll probably find me
            crocheting, volunteering, or picking up{" "}
            <a
              href="https://www.duolingo.com/profile/meets88"
              className="underline"
            >
              new Spanish phrases
            </a>{" "}
            (¡poco a poco!).
          </p>
          <p>Thanks for stopping by!</p>
        </div>
        <div className="flex justify-start items-center gap-10 pt-7 flex-wrap">
          <h1
            className="text-[#fff] text-6xl"
            style={{ fontFamily: '"Mouse Memoirs", sans-serif' }}
          >
            contact:
          </h1>
          <a
            href="https://linkedin.com/in/meetalikapse"
            className="flex justify-center items-center gap-2"
          >
            <img
              src="link.svg"
              alt="Linkedin logo"
              className="w-10 sm:w-5 md:w-16"
            />
            <h3 className="text-[#fff]">/meetalikapse</h3>
          </a>
          <a
            href="https://twitter.com/meetsshutup"
            className="flex justify-center items-center gap-2"
          >
            <img
              src="x.svg"
              alt="Twitter (X) logo"
              className="w-10 sm:w-5 md:w-16"
            />
            <h3 className="text-[#fff]">@meetsshutup</h3>
          </a>
        </div>
      </div>
    </footer>
  );
}
