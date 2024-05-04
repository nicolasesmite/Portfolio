import Image from "next/image";
import profile from "./public/images/profile.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-1/2 sm:p-10 gap-8">
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
          ¡Hola, mi nombre es Nicolás!
        </h2>
        <p className="text-xl text-center sm:text-2xl">
          Soy un desarrollador frontend que está buscando ingresar al mundo IT.
          ¿Queres saber más sobre mi? Te invito a navegar en mi Portfolio
        </p>

        <MdKeyboardDoubleArrowDown size={50} className="animate-bounce" />
      </div>
    </main>
  );
}
