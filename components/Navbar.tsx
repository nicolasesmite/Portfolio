"use client";

import React from "react";
import { menuItems } from "../data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";

const Navbar = () => {
  const route = usePathname();
  return (
    <div className="fixed flex flex-col items-center justify-center w-full mt-auto bottom-0 sm:bottom-10">
      <nav className="flex w-full justify-center">
        <div className="flex items-center justify-center w-screen px-6 py-3 gap-8  bg-violet-950 sm:rounded-full sm:w-fit">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`${route === item.path && "opacity-30"}`}
            >
              <Link href={item.path}>{item.logo}</Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
