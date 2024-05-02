import Image from "next/image";
import profile from "./public/images/profile.jpg";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center w-1/2">
        {/* <Image
          width={300}
          height={300}
          alt="photo"
          src={profile}
          className="rotate-90"
        /> */}

        <h2 className="text-4xl mb-10 text-nowrap">
          Hola, mi nombre es Nicolás!
        </h2>
        <p className="text-center text-2xl">
          Soy un desarrollador frontend que está buscando ingresar al mundo IT.
          ¿Queres saber más sobre mi? Te invito a navegar en mi Portfolio
        </p>
      </div>
    </main>
  );
}
