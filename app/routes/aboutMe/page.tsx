import React from "react";
import { languages, languagesAndFrameworks, tools } from "../../../data";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center w-screen h-screen mt-8 sm:mt-12">
      <div className="flex flex-col w-2/3 gap-3">
        <p className="text-xl sm:text-2xl">
          I am a frontend developer with focus on React . I consider myself
          someone with a knack for learning, capable of following instructions,
          and fostering a positive environment and internal relationships.
        </p>
        <div className="flex flex-col sm:mt-10">
          <h3 className="text-xl sm:text-3xl mb-2">Languages and Frameworks</h3>
          <div className="flex gap-3 mb-6">
            {languagesAndFrameworks.map((element) => (
              <Link href={element.path} key={element.id}>
                {element.logo}
              </Link>
            ))}
          </div>
          <h3 className="text-xl sm:text-3xl mb-2">Tools</h3>
          <div className="flex gap-3 mb-6">
            {tools.map((element) => (
              <Link href={element.path} key={element.id}>
                {element.logo}
              </Link>
            ))}
          </div>
          <h3 className="text-xl sm:text-3xl mb-2">Languages</h3>
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
