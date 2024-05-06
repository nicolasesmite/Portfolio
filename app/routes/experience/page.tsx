import React from "react";
import { experience } from "../../../data";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col w-full items-center h-screen mt-8 sm:mt-12">
      <h2 className="text-2xl sm:text-4xl mb-5 text-nowrap">Work history</h2>
      <div className="flex flex-col">
        <h3 className="text-xl sm:text-3xl">{experience.jobPosition}</h3>
        <p className="text-gray-400 text-lg sm:text-2xl mb-3">
          {experience.jobPeriod}
        </p>
        {experience.jobTasks.map((task) => (
          <p className=" text-lg sm:text-2xl" key={task}>
            {task}
          </p>
        ))}
        <div className="flex flex-col gap-2 mt-12 items-center justify-normal">
          <Link
            href="https://drive.google.com/drive/folders/1nmxKwjFd8Om6L0JSMSxD-xdlB2QPMVCG?usp=drive_link"
            className="bg-violet-500 hover:bg-violet-800 rounded-lg p-2 text-center w-2/3 hover:transition-all"
          >
            Download resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
