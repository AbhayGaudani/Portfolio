"use client";

import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProjectContet({ img, name, info, url }) {
  const router = useRouter();
  return (
    <>
      <div className="pt-10 w-full  2xl:grid 2xl:grid-cols-2 px-0 xl:grid xl:grid-cols-1">
        <div className="sm:h-106 sm:w-100 xs:h-80 xs:w-70 xxs:w-70 xxs:h-80 rounded-2xl border-1 border-[#383838]  overflow-hidden animation-fadeIn">
          <img src={img} alt="" className="rounded-2xl" />
          <h1 className="flex pt-3 justify-center sm:text-3xl xxs:text-2xl text-white font-Roboto ">
            {name}
          </h1>
          <p className="px-3 text-justify sm:pt-3 xxs:pt-2 text-neutral-300 xxs:text-[12px] sm:text-[16px] ">
            {info}
          </p>
          <div className=" rounded-2xl sm:-mt-101 xs:-mt-75 px-0 pt-0 -ml-[1px] opacity-0 hover:opacity-100 hover:duration-300 transition-all">
            <div className="bg-[#00000066] sm:w-100 sm:h-106 xs:h-80 xs:w-70 absolute    rounded-2xl flex justify-center items-center">
              <div className="absolute sm:h-15 sm:w-15 xs:h-10 xs:w-10 inset-shadow-icon bg-[#383838] opacity-95  inset-shadow-neutral-700 rounded-2xl shadow-icon flex items-center justify-center">
                <Eye
                  onClick={() => router.push(url)}
                  className="sm:h-7 sm:w-7 xs:h-5 xs:w-5 text-[#ffdb70] cursor-pointer hover:opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
