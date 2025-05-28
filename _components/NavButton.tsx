import React from "react";
import Image from "next/image";

interface NavButtonProps {
  logo: string;
  text: string;
  bgColor?: string;
  textColor?: string; 
}

function NavButton({
  logo,
  text,
  bgColor = "bg-gray-100",
  textColor = "text-black",
}: NavButtonProps) {
  return (
    <div className={`${bgColor} px-[15px] py-[5px] p-1 rounded-[5px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.10)] inline-flex justify-start items-center gap-[5px]`}>
      <Image
        src={logo}
        width={20}
        height={20}
        alt="icon"
        />
        <p className={`justify-start ${textColor} text-[15px] font-medium font-['Inter']`}>{text}</p>
    </div>
  );
}

export default NavButton;
