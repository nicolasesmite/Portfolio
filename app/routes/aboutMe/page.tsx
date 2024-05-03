import React from "react";
import { languagesAndFrameworks } from "../../../data";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="w-2/3">
        <p className="text-xl">
          Soy un desarrollador frontend con enfoque en React, actualmente en
          busca de mi primera oportunidad en el mundo de la tecnología. Durante
          dos años he estado inmerso en el desarrollo y sus herramientas. En mi
          último trabajo, lideré un equipo del que fui miembro en el pasado. Me
          considero alguien con facilidad de aprendizaje, capaz de seguir
          instrucciones y fomentar un buen ambiente y relaciones internas.
        </p>
        <div>
          {languagesAndFrameworks.map((element) => (
            <div key={element.id}>
              <Link href={element.path}>{element.logo}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
