import Image from "next/image";
import profile from "./public/profile.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 sm:p-10 gap-5">
        <div className="bg-violet-500 justify-center items-center rounded-full">
          <Image
            width={200}
            height={200}
            alt="photo"
            src={profile}
            className=" justify-center"
          />
        </div>

        <h2 className="text-2xl sm:text-4xl mb-5 text-nowrap">
          ¡Hello, it's Nicolas!
        </h2>
        <p className="text-xl text-center sm:text-2xl">
          I am a frontend developer trying to enter the IT World. ¿Want to know
          more about me? Let's navigate my Portfolio.
        </p>

        <MdKeyboardDoubleArrowDown size={50} className="animate-bounce" />
      </div>
    </main>
  );
}
