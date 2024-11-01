"use client";
import { expData } from "../../../components/utils/dummy";
import Link from "next/link";

export default function ExperienceFreelance() {
  return (
    <section id="experiences" className="py-12">
      <div className="mx-auto">
        <h1 className="text-warmWhite text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
          Freelance Experiences
        </h1>
        <div className="flex flex-wrap justify-items-start justify-start ">
          <div className="grid grid-rows-1 lg:grid-cols-2 grid-flow-row-dense gap-16 my-4 ">
            {expData.data
              .filter((item) => item.role.match("Freelancer"))
              .map((e) => {
                return (
                  <div
                    className="flex flex-col h-min rounded-xl backdrop-blur-glassBackdrop bg-sidebarColor border-1 border-zinc-800 hover:shadow-btnShadow hover:transition-shadow"
                    key={e.id}
                  >
                    <div
                      className={`w-full h-60 rounded-md ${e.bgColor} p-2 lg:p-8 justify-center items-center`}
                    >
                      <a href={e.urlDetail}>
                        <img
                          src={e.photo}
                          alt={e.company}
                          className={`${
                            e.id === "3"
                              ? "w-64 h-50 lg:w-fit lg:h-full mt-14 lg:mt-0"
                              : e.id === "2"
                              ? "w-64 h-50 lg:w-fit lg:h-full mt-10 lg:mt-0"
                              : "w-50 h-44"
                          } lg:w-fit lg:h-full rounded-md p-2 backdrop-blur-glassBackdrop transition-transform duration-300 hover:scale-110 mx-auto`}
                        />
                      </a>
                    </div>
                    <div className="pt-6 ps-4 pe-4 pb-2">
                      <div className="pb-3">
                        <h3 className="text-base font-bold mt-2 text-warmWhite ">
                          {e.company}
                          <br></br>
                          <span className="text-neutral-400 text-sm">
                            {e.role}
                          </span>
                        </h3>
                        <p className="text-neutral-400 text-sm">
                          {e.period}
                          <br></br>
                          {e.proLang}
                        </p>
                        <p className="text-warmWhite mt-2 mb-2 text-sm lg:text-base text-start">
                          {e.desc}
                        </p>
                      </div>
                      <div className="pb-2 ">
                        <a
                          href={e.urlDetail}
                          className="p-2 border-1 border-zinc-800 rounded-xl  text-xxxs sm:text-xxs lg:text-sm xl:text-sm font-medium text-warmWhite hover:text-mainPurple  "
                        >
                          See Detail
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
