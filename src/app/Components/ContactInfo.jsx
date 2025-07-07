import React from "react";

export default function ContactInfo({ icon, title, data }) {
  return (
    <>
      <ul className="xl:grid xl:grid-cols-1 sm:mt-9 xxs:mt-5">
        <li className=" flex ">
          <div className="h-12 w-12 inset-shadow-icon inset-shadow-neutral-700 rounded-2xl shadow-icon flex items-center justify-center">
            {icon}
          </div>
          <div className="ml-4 mt-1  w-44 truncate text-neutral-400 font-Roboto text-xs">
            {title}
            <p className="text-white text-[16px] truncate">{data}</p>
          </div>
        </li>
      </ul>
    </>
  );
}
