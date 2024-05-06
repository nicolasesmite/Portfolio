import React from "react";
import { education, certifications } from "../../../data";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center mt-8 sm:mt-12 gap-5">
      <h3 className="text-xl sm:text-3xl mb-2 text-center">Education</h3>
      <div className="flex flex-col items-center w-full sm:w-2/3 gap-2 ">
        {education.map((element) => (
          <div key={element.id}>
            <h4 className="text-sm sm:text-xl">{element.info}</h4>
            <p className="text-gray-400 text-sm sm:text-xl">{element.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center w-full sm:w-2/3 gap-2">
        <h3 className="text-xl sm:text-3xl mb-2 text-center">Certificates</h3>
        {certifications.map((certificate) => (
          <Link
            key={certificate.name}
            href={certificate.path}
            className="w-2/3 bg-violet-500  hover:bg-violet-800 rounded-lg text-center hover:transition-all"
          >
            {certificate.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
