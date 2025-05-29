import React from "react";

interface Props {
  tabs: string[];
  selected: number;
  onSelect: (index: number) => void;
}

export default function ProjectFolderTabs({ tabs, selected, onSelect }: Props) {
  
  return (
    <>
      <div className="relative w-full md:w-[500px] h-[320px] rounded-t-[40px] rounded-b-[25px] bg-gradient-to-b from-[#60C0FF] to-[#4797F0] px-4 sm:px-5 pt-4 sm:pt-5 shadow-[inset_0_-30px_0_0_rgba(0,0,0,0.15)]">
        <div className="mb-6">
          <p className="text-white font-semibold text-lg sm:text-xl leading-tight">
            Dev Projects
          </p>
          <p className="text-white text-xs sm:text-sm tracking-wide">
            Hackathons & Personal Projects
          </p>
        </div>

        <div className="space-y-2 mt-3 ">
          {tabs.map((tab, i) => (
            <div className="pb-1">
              <div
                key={i}
                onClick={() => onSelect(i)}
                className={`cursor-pointer px-3 py-[6px] text-xs rounded-t-md w-fit font-mono transition-all duration-200 ease-in-out shadow-md
              ${
                selected === i
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }
            `}
                style={{
                  transform: `translateX(${i * 10}px)`,
                  marginTop: `${i === 0 ? 0 : -8}px`,
                  zIndex: 10 - i,
                  position: "relative",
                }}
              >
                {tab}
              </div>
              <hr className="border-white"/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

