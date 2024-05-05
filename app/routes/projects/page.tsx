import Link from "next/link";
import React from "react";
import { projects } from "../../../data";

const page = () => {
  return (
    <div className="flex flex-col items-center w-full  h-full sm:h-2/3 mt-8 sm:mt-6">
      <h3 className="text-xl w-full sm:text-3xl text-center">
        Proyectos y Challenges
      </h3>
      <div className="flex flex-wrap place-content-center w-full gap-1 p-3 sm:mt-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center w-2/3 gap-2 sm:w-1/3 bg-violet-700 rounded-md p-2 sm:gap-3 "
          >
            {project.image}

            <div className="flex flex-col w-full gap-1">
              <Link
                href={project.linkGit}
                className="bg-violet-500 rounded-lg text-center w-full"
              >
                GitHub
              </Link>
              <Link
                href={project.linkDeploy}
                className="bg-violet-500 rounded-lg text-center w-full"
              >
                Deploy
              </Link>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
