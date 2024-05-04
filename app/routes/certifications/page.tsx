import React from "react";
import { education } from "../../data";

const page = () => {
  return (
    <div>
      <div>
        <h3 className="text-xl sm:text-3xl mb-2">Educación</h3>
        <div>
          {education.map((element) => (
            <div key={element.id}>
              <h4 className="text-lg sm:text-2xl">{element.info}</h4>
              <p className="text-gray-400 text-lg sm:text-2xl">
                {element.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
