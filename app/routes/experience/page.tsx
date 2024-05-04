import React from "react";
import { experience, education } from "../../../data";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-4xl mb-5 text-nowrap">Experiencia</h2>
      <div>
        <h3 className="text-xl sm:text-3xl">{experience.jobPosition}</h3>
        <p className="text-gray-400 text-lg sm:text-2xl mb-3">
          {experience.jobPeriod}
        </p>
        {experience.jobTasks.map((task) => (
          <p className=" text-lg sm:text-2xl" key={task}>
            {task}
          </p>
        ))}
      </div>
      <button>Descargar cv</button>
    </div>
  );
};

export default page;
