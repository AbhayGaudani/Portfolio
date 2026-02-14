"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ContactInfo from "./ContactInfo";
import {
  Calendar,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";
import { useRouter } from "next/navigation";
import useBelowXl from "./useBelowXl";

export default function MainContent({ children }) {
  const router = useRouter();
  const isBelowXl = useBelowXl();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    if (isBelowXl) {
      setIsOpen((prev) => !prev);
    }
  };
  if (!mounted) return null; // Or a loading skeleton/placeholder
  return (
    <div className=" pb-[39px] bg-[#121212] flex sm:flex-col xs:flex-col xxs:flex-col xl:flex-row text-white lg:px-40 md:px-15 sm:px-10 xs:px-4 xxs:px-3 pt-10 xl:justify-center xxs:items-center xl:items-start">
      {/* LEFT SIDEBAR */}
      <div className="xl:w-fit lg:w-176 md:w-162 sm:w-140 xs:w-95 xxs:w-84 border-1  border-[#383838]  h-fit xl:sticky xl:top-10 bg-[#1e1e1f] rounded-2xl justify-center animation-In">
        <button
          onClick={toggleOpen}
          className="sm:h-10 sm:w-40 text-[#ffdb70] cursor-pointer sm:text-sm xs:text-[14px] xxs:h-10 xxs:w-30 xxs:text-[14px] rounded-2xl shadow-icon inset-shadow-showContact flex items-center justify-center sm:ml-100 lg:ml-136 md:ml-122 xs:ml-65 xxs:ml-54 rounded-tl-none rounded-br-none xl:hidden"
        >
          Show Contacts
        </button>
        {/* IMAGE */}
        <div className="lg:flex lg:mt-5 md:flex md:mt-5 sm:mt-5 sm:flex xl:flex-col xl:mt-0 duration-700">
          <div className="h-40 w-40 overflow-hidden xl:mt-15 xl:mx-14 lg:ml-26 md:ml-20 sm:ml-15 sm:mx-5 xs:mx-27 lg:mx-14 xs:mt-5 xxs:mt-5 xxs:mx-22  sm:mt-0 rounded-2xl">
            <img
              src="/assets/myimg.jpg"
              alt=""
              className="object-cover xl:-mt-17 lg:-mt-10 xs:-mt-10 xxs:-mt-10 hover:scale-105 hover:duration-500 hover:ease-out hover:transition-all"
            />
          </div>
          <h1 className="xs:flex xs:justify-center sm:text-center xxs:text-center xl:mt-3 lg:mt-8 sm:mt-8 xs:mt-2 xs:ml-0 sm:ml-0 text-[30px] sm:w-68 xs:w-95  xxs:w-84 font-bold font-Roboto text-white">
            Abhay Gaudani
          </h1>
        </div>{" "}
        <div className="bg-[#383838] w-50 text-center xl:mx-9 xl:mt-3 lg:-mt-18 lg:ml-87 md:-mt-18 md:ml-72 sm:-mt-18 sm:ml-67 xs:ml-23 xxs:ml-17 py-0.5 rounded-2xl font-paraBtn text-md">
          <h1 className="text-white">Full-Stack Developer</h1>
        </div>
        <div className="bg-[#383838] h-0.5 xl:w-50 xl:mt-8 lg:mt-15 md:mt-15 sm:mt-15 xxs:mt-5 rounded-full mx-9"></div>
        {/* CONTACT INFO */}
        {(isBelowXl && isOpen) || !isBelowXl ? (
          <div className="xl:px-4 lg:ml-25 md:ml-20 sm:ml-15 xxs:ml-9 xl:ml-0 lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-2 xl:grid-cols-1 ">
            <ContactInfo
              icon={<Mail className="text-[#ffdb70]" />}
              title={"EMAIL"}
              data={"abhaygaudani9@gmail.com"}
            />
            <ContactInfo
              icon={<Smartphone className="text-[#ffdb70]" />}
              title={"PHONE"}
              data={"+91 91069 65452"}
            />
            <ContactInfo
              icon={<Calendar className="text-[#ffdb70]" />}
              title={"BIRTHDAY"}
              data={"November 24, 2004"}
            />
            <ContactInfo
              icon={<MapPin className="text-[#ffdb70]" />}
              title={"LOCATION"}
              data={"Gujarat, India"}
            />
          </div>
        ) : null}
        {/* LINK ICONS */}
        <div className=" w-20 xl:mx-24 lg:mx-76 lg:pb-5 md:mx-70 sm:pb-3 sm:ml-59 xxs:pb-4 xs:ml-37 xxs:ml-32  justify-around overflow-hidden flex sm:mt-6 xxs:mt-4 xl:mb-5">
          <Instagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/abhay._.1011/profilecard/?igsh=MWZsZ3NqZXJpcGhzMA==",
                "_blank",
              )
            }
            className="text-neutral-400 h-5 cursor-pointer"
          />
          <Facebook
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/1BZDQT44dm/",
                "_blank",
              )
            }
            className="text-neutral-400 h-5 cursor-pointer"
          />
          <Github
            onClick={() =>
              window.open("https://github.com/AbhayGaudani", "_blank")
            }
            className="text-neutral-400 h-5 cursor-pointer"
          />
        </div>
      </div>
      {/* RIGHT SIDEBAR */}
      <div className="2xl:w-228 xl:w-162 lg:w-176 xxs:w-84 sm:w-140 xs:w-95 xxs:mt-10 overflow-hidden bg-[#1e1e1f] xl:ml-10 lg:mt-10 sm:mt-10 md:mt-10 md:w-162 xl:mt-0 xs:mt-10 rounded-2xl border-1 border-[#383838]">
        {/* NAVBAR */}
        <div className="flex 2xl:ml-[45px] xl:-ml-[208px] md:ml-18 sm:ml-8 w-fit">
          <Navbar />
        </div>
        <div className="-ml-115 2xl:-mt-25 xl:-mt-15 lg:-mt-12 md:-mt-10 sm:-mt-10 xs:-mt-16">
          {children}
        </div>
      </div>
    </div>
  );
}
