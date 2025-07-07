"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const menu = [
    { name: "About", href: "/", active: "/", pathname: "/" },
    { name: "Education", href: "/education", pathname: "/education" },
    { name: "Projects", href: "/projects", pathname: "/projects" },
    { name: "Contact", href: "/contact", pathname: "/contact" },
  ];

  return (
    <nav className=" sm:w-124 xs:w-95 xxs:w-84 pt-10 rounded-2xl 2xl:ml-92 sm:-mt-10 xxs:-mt-10 z-10 xl:ml-90 lg:ml-8">
      <ul className="bg-[#2b2b2cbf] border-1 border-[#383838] justify-around xs:px-10 sm:px-0 flex h-15 items-center sm:rounded-bl-2xl xl:rounded-tr-2xl sm:rounded-br-2xl xl:rounded-br-none font-paraBtn sm:text-lg xxs:text-md text-neutral-400 z-100">
        {menu.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={
              pathname === link.pathname ? "text-[#ffdb70]" : "hover:opacity-70"
            }
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
