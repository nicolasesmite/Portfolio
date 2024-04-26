import React from "react";
import { menuItems } from "../data";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex items-center justify-center gap-6 px-6 py-3 rounded-full bg-green-500">
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
