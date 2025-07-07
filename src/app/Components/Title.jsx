import React from "react";

export default function Title({ MainTitle }) {
  return (
    <div className="absolute after:content-[''] after:absolute after:w-10 after:h-1 after:bg-[#ffdb70] after:rounded-2xl after:mt-2.5 xs:mt-22 xxs:mt-7 font-bold">
      <h1 className="text-white sm:text-[32px] xs:text-[28px] xxs:text-[24px]  font-Roboto">
        {MainTitle}
      </h1>
    </div>
  );
}
