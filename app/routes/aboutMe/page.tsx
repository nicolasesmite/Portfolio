import React from "react";
import { languages, languagesAndFrameworks, tools } from "../../../data";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center w-full h-screen mt-8 sm:mt-12">
      <div className="flex flex-col w-2/3 gap-3">
        <p className="text-xl sm:text-2xl">
          Soy un desarrollador frontend con enfoque en React. Me considero
          alguien con facilidad de aprendizaje, capaz de seguir instrucciones y
          fomentar un buen ambiente y relaciones internas.
        </p>
        <div className="flex flex-col sm:mt-10">
          <h3 className="text-xl sm:text-3xl mb-2">Lenguajes y Frameworks</h3>
          <div className="flex gap-3 mb-6">
            {languagesAndFrameworks.map((element) => (
              <Link href={element.path} key={element.id}>
                {element.logo}
              </Link>
            ))}
          </div>
          <h3 className="text-xl sm:text-3xl mb-2">Herramientas</h3>
          <div className="flex gap-3 mb-6">
            {tools.map((element) => (
              <Link href={element.path} key={element.id}>
                {element.logo}
              </Link>
            ))}
          </div>
          <h3 className="text-xl sm:text-3xl mb-2">Idiomas</h3>
          <div className="flex flex-col mb-6 ">
            {languages.map((language) => (
              <div key={language.id} className="flex flex-wrap gap-1">
                <h4 className="text-lg sm:text-2xl">{language.language}</h4>
                <p className="text-gray-400 text-lg sm:text-2xl">
                  {language.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
