"use client";

import React from "react";

interface RightPageProps {
  duration: string;
  images: string[];
  limit?: number;
}

export default function DesignRightPage({
  duration,
  images,
  limit,
}: RightPageProps) {
  const displayedImages = images.slice(0, limit);

  const getGridStyles = (count: number) => {
    switch (count) {
      case 1:
        return {
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          width: "75%",
          height: "auto",
          gap: "4px",
        };
      case 2:
        // Two rows, each 50% height
        return {
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr 1fr",
          height: "50%",
          width: "auto",
          gap: "4px",
        };
      case 3:
        // Two columns and two rows, bottom image spans 2 columns, top two images side by side
        return {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          width: "100%",
          maxHeight: "100%",
          gap: "4px",
        };
      case 4:
        // 2x2 grid, equal parts
        return {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          width: "100%",
          maxHeight: "100%",
          gap: "4px",
        };
      default:
        // fallback: 2 column grid with auto rows
        return {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridAutoRows: "1fr",
          width: "100%",
          maxHeight: "100%",
          gap: "4px",
        };
    }
  };

  return (
    // <div className="w-full h-full flex flex-col">
    <div
      className="w-full h-full bg-[#FCFCFC] md:rounded-tr-[30px] md:rounded-br-[30px] 
      px-6 py-4 flex flex-col justify-between min-h-[500px]
      rounded-xl
        md:flex-col
        sm:rounded-none
        sm:px-4 sm:py-3"
    >
      <div className="text-sm pt-2.5 md:text-3xl md:pt-2.5 text-end">
        {duration}
        <hr className="border-black mt-2" />
      </div>

      <div
        style={getGridStyles(displayedImages.length)}
        className="flex-grow min-h-0 
            gap-1
            sm:gap-2
            sm:grid
            sm:grid-cols-1
            md:grid-cols-2
            md:grid-rows-2"
      >
        {displayedImages.map((src, index) => {
          const style: React.CSSProperties = {
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "0.375rem",
          };

          // For 3 images, make the last image span both columns
          if (displayedImages.length === 3 && index === 2) {
            style.gridColumn = "1 / span 2";
            style.gridRow = "2 / span 1";
          }

          return (
            <img
              key={index}
              src={src}
              alt={`Design preview ${index + 1}`}
              style={style}
              className="shadow-md"
            />
          );
        })}
      </div>
    </div>
    // </div>
  );
}