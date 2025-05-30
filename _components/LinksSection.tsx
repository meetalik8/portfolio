import React from "react";
import NavButton from "@/_components/NavButton";


function LinksSection() {
  return (
    <div className="bg-[#5F202A] flex flex-wrap justify-center items-center gap-4 flex-col sm:flex-row py-2">
      <div className="text-[#fff] text-[20px] sm:text-[28px] tracking-[-1px]">
        Quick Links
      </div>
      <a href="http://github.com/meetalik8">
        <NavButton
          logo="/mail.png"
          text="Github"
          bgColor="bg-[#EA6250]"
          textColor="text-[#FFF2DC]"
        />
      </a>
      <a href="https://www.linkedin.com/in/meetalikapse">
        <NavButton
          logo="/mail.png"
          text="Linkedin"
          bgColor="bg-[#EA6250]"
          textColor="text-[#FFF2DC]"
        />
      </a>
      <a href="https://www.behance.net/meetalikapse">
        <NavButton
          logo="/mail.png"
          text="Behance"
          bgColor="bg-[#EA6250]"
          textColor="text-[#FFF2DC]"
        />
      </a>
    </div>
  );
}
  

export default LinksSection;
