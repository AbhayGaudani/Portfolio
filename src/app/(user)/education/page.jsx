"use client";

import Title from "@/app/Components/Title";
import { BookOpen } from "lucide-react";
import React, { useState } from "react";

export default function page() {
  // const [isOpen, setIsOpen] = useState(false);
  const education = [
    {
      title: "Gujarat Technological University",
      period: "2022 — 2025",
      description: "B.Voc in Software Development",
      percentage: "CGPA: 9.41/10 (overall)",
      coursework:
        "Web Development, Database Management, Operating System, Data Science, Mobile Application Development",
      img: "/assets/eduClg.png.webp",
    },
    {
      title: "Higher Secondary Certificate",
      period: "2020 — 2022",
      description: "Gujarat Higher Secondary Education Board",
      percentage: "Percentage: 76%",
      coursework: "Accountancy, Economics, Statistics, Business Stdies",
      img: "/assets/HscSchoolimg.avif",
    },
    {
      title: "Secondary School Certificate",
      period: "2020",
      description: "Gujarat Secondary Education Board",
      percentage: "Percentage: 55%",
      coursework:
        "Mathematics, Physics, Chemistry, Biology, Business Studies, Economics",
      img: "/assets/sscschoolimg.jpeg",
    },
  ];
  const skills = [
    {
      programming: "JavaScript, Java, Programing in C, Python",
      technologies:
        "React JS, Next JS, Git, GitHub, Shopify, Tailwind CSS, HTML, CSS",
      softSkill: "Problem-Solving, Communication, Time Management, Teamwork",
      language: "English, Hindi, Gujarati",
    },
  ];
  return (
    <>
      <div className="bg-[#1e1e1f] xs:px-5 xxs:px-1 2xl:w-226 xl:w-161 ml-118">
        <div className="animation-fadeIn">
          <Title MainTitle={"Education"} />
          <div className="resume p-[20px] xs:pt-45 xxs:pt-30">
            {/* Education */}
            <div className=" mb-[35px]">
              <div className=" flex items-center gap-[20px] mb-[25px]">
                <div className="text-[#ffdb70] h-12 w-12  inset-shadow-icon inset-shadow-neutral-700 rounded-2xl shadow-icon flex items-center justify-center">
                  <BookOpen size={18} />
                </div>
                <h3 className="text-gray-100 xs:text-[24px] xxs:text-[20px] font-bold">
                  Education
                </h3>
              </div>
              <div className="bg-[#383838] absolute md:h-117 xs:h-183 xxs:h-172 sm:h-134 w-[3px] rounded-t-full  rounded-b-full -mt-5.5 ml-5.5"></div>
              <div className="bg-[#ffdb70] absolute h-2 outline-5 outline-[#383838] w-2 rounded-t-full  rounded-b-full mt-2 ml-5"></div>
              <div className="bg-[#ffdb70] absolute h-2 outline-5 outline-[#383838] w-2 rounded-t-full  rounded-b-full md:mt-45.5 xs:mt-69 xxs:mt-66 sm:mt-51 ml-5"></div>
              <div className="bg-[#ffdb70] absolute h-2 outline-5 outline-[#383838] w-2 rounded-t-full  rounded-b-full md:mt-83 xs:mt-129.5 sm:mt-94.5 xxs:mt-123.5 ml-5"></div>
              <ol className="pl-18 ">
                {education.map((item, index) => (
                  <li key={index} className="mb-8">
                    <h4 className=" text-gray-100 xs:text-[18px] xxs:text-[16px] font-medium leading-[1.3] mb-[5px]">
                      {item.title}
                    </h4>
                    <span className="text-[#ffdb70] text-[14px] font-normal leading-[1.6]">
                      {item.period}
                    </span>
                    <p className=" text-neutral-300 xs:text-[14px] xxs:text-[12px] leading-[1.6]">
                      {item.description}
                    </p>
                    <p className="text-neutral-300 text-[14px] leading-[1.6] indent-8">
                      CourseWork: {item.coursework}
                    </p>
                    <p className="text-neutral-300 text-[14px] leading-[1.6] indent-8 mb-3">
                      {item.percentage}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className=" text-white pb-10">
            <p className="sm:text-[28px] xs:text-2xl xxs:text-xl font-bold font-Roboto  -mt-3 after:content-[''] after:absolute after:w-10 after:h-1 after:bg-[#ffdb70] sm:after:-ml-87 xxs:after:-ml-62 xs:after:-ml-75 after:rounded-2xl xxs:after:mt-10 xs:after:mt-12">
              Languages & Technologies
            </p>
            <ul className="2xl:h-50 2xl:w-195 xxs:mr-3 xl:w-145 2xl:ml-10 mt-12  px-7 py-6 inset-shadow-icon inset-shadow-neutral-700 rounded-2xl shadow-icon  items-center justify-center">
              {skills.map((skill, index) => (
                <li key={index} className=" list-none ">
                  <p className="text-neutral-300 pb-3 xxs:text-[14px] xs:text-[16px]">
                    <span className="sm:text-lg  font-semibold text-white">
                      Programming Languages:
                    </span>{" "}
                    {skill.programming}
                  </p>
                  <p className="text-neutral-300 pb-3 xxs:text-[14px] xs:text-[16px]">
                    <span className="sm:text-lg font-semibold text-white">
                      Technologies:
                    </span>{" "}
                    {skill.technologies}
                  </p>
                  <p className="text-neutral-300 pb-3 xxs:text-[14px] xs:text-[16px]">
                    <span className="sm:text-lg font-semibold text-white">
                      Soft-Skills:
                    </span>{" "}
                    {skill.softSkill}
                  </p>
                  <p className="text-neutral-300 lg:pb-3 xxs:text-[14px] xs:text-[16px]">
                    <span className="sm:text-lg  font-semibold text-white">
                      Languages:
                    </span>{" "}
                    {skill.language}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
