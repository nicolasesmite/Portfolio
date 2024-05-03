import React from "react";
import { languagesAndFrameworks, tools } from "../../../data";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center w-full h-2/3 mt-8 sm:mt-12">
      <div className="flex flex-col w-2/3 gap-5">
        <p className="text-xl sm:text-2xl">
          Soy un desarrollador frontend con enfoque en React, actualmente en
          busqueda de mi primera oportunidad en el mundo de la tecnología. Me
          considero alguien con facilidad de aprendizaje, capaz de seguir
          instrucciones y fomentar un buen ambiente y relaciones internas.
        </p>
        <div className="flex flex-col sm:mt-10">
          <h3 className="text-xl sm:text-3xl mb-2">Lenguajes y Frameworks</h3>
          <div className="flex gap-3 mb-8">
            {languagesAndFrameworks.map((element) => (
              <Link href={element.path} key={element.id}>
                {element.logo}
              </Link>
            ))}
          </div>
          <h3 className="text-xl sm:text-3xl mb-2">Herramientas</h3>
          <div className="flex gap-3">
            {tools.map((element) => (
              <Link href={element.path} key={element.id}>
                {element.logo}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
