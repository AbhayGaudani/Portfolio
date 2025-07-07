"use client";

import Title from "@/app/Components/Title";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    toast.success("Successfully Submitted");
  };
  return (
    <>
      <div className="bg-[#1e1e1f] sm:px-5 xs:pr-5 xs:pl-1.5 xxs:pr-3 sm:pr-10 2xl:w-226 xl:w-161 ml-118 ">
        <div className="animation-fadeIn">
          <Title MainTitle={"Contact"} />
          {/* MAP */}
          <div className="xs:pt-45 xxs:pt-28">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54593278491!2d72.7397130320819!3d21.159180120575805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1751515840057!5m2!1sen!2sin"
              width="100%"
              height="350"
              className="rounded-2xl xxs:h-80 xs:[350px]"
            ></iframe>
          </div>
          {/* FORM */}
          <div className="mt-8 ">
            <p className="text-white sm:text-[28px] xxs:text-xl font-bold font-Roboto  mt-5 after:content-[''] after:absolute sm:after:w-10 xxs:after:w-8 after:h-1 after:bg-[#ffdb70] sm:after:-ml-44 xs:after:-ml-31.5 after:rounded-2xl xxs:after:-ml-31 sm:after:mt-12 xxs:after:mt-8">
              Contact Form
            </p>
            <form
              onSubmit={handleSubmit}
              className=" mt-10 grid text-white sm:gap-8 xxs:gap-5 w-full "
            >
              <div className="lg:grid-rows-2  lg:justify-between lg:flex xxs:grid-cols-1 xxs:grid sm:gap-8 xxs:gap-4 lg:gap-0">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-1 border-[#383838] bg-transparent rounded-[14px] h-13 lg:w-[48%] xs:w-[100%] outline-none px-4 py-4  focus:border-[#ffdb70]  focus:invalid:border-[#b84c4c] focus:bg-[#1e1e1f]  disabled:border-[#383838] disabled:bg-[#1e1e1f] hover:scale-101 hover:duration-300"
                  required
                />
                <input
                  type="email"
                  name="Emailaddress"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-1 border-[#383838] bg-transparent rounded-[14px] h-13 lg:w-[48%] xxs:w-[100%] outline-none px-4 py-4  focus:border-[#ffdb70]  focus:invalid:border-[#b84c4c]  disabled:border-[#383838] disabled:bg-[#1e1e1f] hover:scale-101 hover:duration-300"
                  required
                />
              </div>
              <textarea
                name="textarea"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" resize-none border-1 border-[#383838] bg-transparent rounded-[14px] h-35 w-full outline-none px-4 py-4 focus:border-[#ffdb70]  focus:invalid:border-[#b84c4c]  disabled:border-[#383838] disabled:bg-[#1e1e1f] hover:scale-101 hover:duration-300"
                required
              ></textarea>
              <button className="flex cursor-pointer 2xl:ml-161 xl:ml-100 lg:ml-110 sm:mb-5  gap-2.5 h-15 lg:w-50 md:w-[100%]  inset-shadow-icon inset-shadow-neutral-700 rounded-[14px] shadow-icon items-center justify-center hover:scale-102 hover:duration-300">
                <Send className="h-5 text-[#ffdb70]" />
                <span className="text-[#ffdb70]">Send Message</span>
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
