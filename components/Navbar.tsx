import React from "react";
import { menuItems } from "../data";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full">
          {menuItems.map((item) => (
            <div key={item.id}>
              <Link href={""}>{item.logo}</Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
