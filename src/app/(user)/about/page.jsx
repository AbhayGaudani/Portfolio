"use client";

import Title from "@/app/Components/Title";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <>
      <div className="z-10  pb-8 2xl:w-226 xl:w-160 bg-[#1e1e1f]  ml-118 lg:px-5 md:px-4 sm:px-4 xs:px-2.5 xxs:pr-1.5">
        <div className="animation-fadeIn">
          <Title MainTitle={"About Me"} />
          {/* DETAILS */}
          <div className=" text-neutral-300 2xl:w-210 sm:pt-42 xs:pt-40 xxs:pt-25 xxs:text-[12px] xs:text-[16px] h-68 -z-10">
            <p className="pt-2">
              I'm Abhay Gaudani, a passionate full-stack developers dedicated to
              building seamless and efficient web applications. With expertise
              in frontend technologies like React/Next and backend frameworks
              such as Node.js and Express, I craft user-friendly interfaces and
              robust server-side architectures. I thrive on solving complex
              problems, integrating databases like MongoDB, and ensuring
              scalable, responsive designs.
            </p>
            <p className="pt-5">
              A Full-Stack Development with a love for building a Website. As a
              fresher in the field of Full-Stack development, i specialize in
              problem solving and creating efficient, user-friendly Website.
            </p>
            <p className="pt-5">
              I have a On job Training experience during College, Completed
              various projects during academic tenure, showcasing
              problem-solving and data analysis capabilities. Participated in
              team-based projects, developing software solutions and enhancing
              collaborative skill.
            </p>
            <div className="2xl:ml-64 xl:ml-35 lg:ml-40 md:ml-35 sm:ml-30">
              <p className="pt-7 ">
                <span className="font-bold"> Name</span>
                <span className="sm:ml-25 xs:ml-[88px] mr-2">:</span>Abhay
                Gaudani
              </p>
              <p className="pt-2">
                <span className="font-bold"> Age</span>
                <span className="sm:ml-[115px] xs:ml-[104px] mr-2">:</span>20
              </p>
              <p className="pt-2">
                <span className="font-bold"> Mobile Number</span>
                <span className="sm:ml-[26px] xs:ml-[15px] mr-2">:</span>+91
                91069 65452
              </p>
              <p className="pt-2">
                <span className="font-bold"> Email</span>
                <span className="sm:ml-[105px] xs:ml-[94px] mr-2">:</span>
                abhaygaudani9@gmail.com
              </p>
            </div>
          </div>
          <div className="2xl:ml-75 2xl:mt-82 xl:mt-106 xl:ml-45 lg:mt-90 lg:ml-50 md:mt-105 md:ml-45 sm:mt-105 sm:ml-40 xs:mt-150 xs:ml-15 xxs:mt-78 xxs:ml-10 animation-fadeIn">
            <img src="/assets/AboutdecoImg.png" alt="" className="h-23" />
          </div>
          {/* LANGUAGES */}

          <div className=" text-white">
            <p className="sm:text-[28px] xs:text-2xl font-bold font-Roboto  mt-5 after:content-[''] after:absolute after:w-10 after:h-1 after:bg-[#ffdb70] after:ml-0 after:rounded-2xl after:mt-4">
              My Skills
              <Activity className="xs:-mt-9 sm:ml-35 xs:ml-30 xxs:ml-19 xxs:h-5 xxs:-mt-5.5 xs:h-9 xs:w-9" />
            </p>
            <div className="2xl:h-80 2xl:w-195 2xl:ml-10 md:mr-3 sm:mr-2 xxs:mr-2 lg:mr-4 lg:h-80 lg:pt-5 md:pt-4 sm:pb-5 sm:pt-3 xxs:pt-3 xxs:pb-5 mt-12 md:pb-5 lg:pb-0 2xl:px-7 2xl:py-5 2xl:pb-0  inset-shadow-icon inset-shadow-neutral-700 rounded-2xl shadow-icon  items-center justify-center">
              <motion.div
                initial={{ opacity: 0, translateY: "50%" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 1.3 }}
              >
                <p className="pl-5 pt-0 sm:text-[17px] xxs:text-[12px] xs:text-sm">
                  Html{" "}
                  <span className="2xl:ml-152 xl:ml-117 lg:ml-132 md:ml-118 sm:ml-96 xs:ml-60 xxs:ml-55">
                    90%
                  </span>
                </p>
                <div className="2xl:w-170 xl:w-135 lg:w-150 md:w-136 sm:w-115 xs:w-75 xxs:w-68 xxs:h-1 rounded-full ml-5 sm:h-2 xs:h-1.5  bg-gradient-to-r from-[#ffd558] from-90% to-neutral-600 to-0% "></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: "50%" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.2 }}
              >
                <p className="pl-5 lg:pt-5 md:pt-3 sm:pt-0 xxs:pt-1  sm:text-[17px] xxs:text-[12px] xs:text-sm">
                  Css{" "}
                  <span className="2xl:ml-155 xl:ml-120 lg:ml-135 md:ml-121 sm:ml-99 xs:ml-62 xxs:ml-57">
                    80%
                  </span>
                </p>
                <div className="2xl:w-170 xl:w-135 lg:w-150 md:w-136 sm:w-115 xs:w-75 xxs:w-68 xxs:h-1 rounded-full mt-1 ml-5 sm:h-2 xs:h-1.5  bg-gradient-to-r from-[#ffd558] from-80% to-neutral-600 to-0%"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: "50%" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.4 }}
              >
                <p className="pl-5 lg:pt-5 md:pt-3 sm:pt-0 xxs:pt-1 sm:text-[17px] xxs:text-[12px] xs:text-sm ">
                  Next Js{" "}
                  <span className="2xl:ml-148 xl:ml-113 lg:ml-128 md:ml-114 sm:ml-92 xs:ml-56.5 xxs:ml-52">
                    60%
                  </span>
                </p>
                <div className="2xl:w-170 xl:w-135 lg:w-150 md:w-136 sm:w-115 xs:w-75 xxs:w-68 xxs:h-1 rounded-full ml-5 sm:h-2 xs:h-1.5 mt-1 bg-gradient-to-r from-[#ffd558] from-60% to-neutral-600 to-0%"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: "50%" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.6 }}
              >
                <p className="pl-5 lg:pt-5 md:pt-3 sm:pt-0 xxs:pt-1 sm:text-[17px] xxs:text-[12px] xs:text-sm ">
                  JavaScript{" "}
                  <span className="2xl:ml-143 xl:ml-108 lg:ml-123 md:ml-109 sm:ml-87 xs:ml-52 xxs:ml-48.5">
                    70%
                  </span>
                </p>
                <div className="2xl:w-170 xl:w-135 lg:w-150 md:w-136 sm:w-115 xs:w-75 xxs:w-68 xxs:h-1 rounded-full ml-5 sm:h-2 xs:h-1.5 mt-1 bg-gradient-to-r from-[#ffd558] from-70% to-neutral-600 to-0%"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: "50%" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.8 }}
              >
                <p className="pl-5 lg:pt-5 md:pt-3 sm:pt-0 xxs:pt-1 sm:text-[17px] xxs:text-[12px] xs:text-sm">
                  Tailwind Css{" "}
                  <span className="2xl:ml-139 xl:ml-104 lg:ml-119 md:ml-105 sm:ml-83 xs:ml-49 xxs:ml-46">
                    80%
                  </span>
                </p>
                <div className="2xl:w-170 xl:w-135 lg:w-150 md:w-136 sm:w-115 xs:w-75 xxs:w-68 xxs:h-1 rounded-full ml-5 sm:h-2 xs:h-1.5 mt-1 bg-gradient-to-r from-[#ffd558] from-80% to-neutral-600 to-0%"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
