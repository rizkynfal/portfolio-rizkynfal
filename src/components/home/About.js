"use client";
import { useRef } from "react";
import Cards from "../Card";
import { useIsVisible } from "../ScrollDetected";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 ">
          <div className="grid grid-rows-1 grid-flow-row justify-items-center justify-center ">
            <div className="grid grid-cols-2 grid-flow-col justify-items-center justify-center">
              <div
                id="hero-desc"
                className={`me-auto  py-4 xl:text-sm transition-all ease-in duration-700 `}
              >
                <div className="text-warmWhite text-8xl font-bold pb-8">
                  About Me
                </div>
                <div className="text-warmWhite text-xxxs sm:text-xxs  md:text-lg 2xl:text-3xl font-bold ">
                  Rizky Naufal Alghifary
                </div>
                <div className="text-warmWhite text-xxxs sm:text-xxs  md:text-base 2xl:text-2xl py-2 font-medium">
                  Full-stack Developer
                </div>
                <div className="text-xxxs sm:text-xxs md:text-base 2xl:text-lg text-warmWhite font-medium mb-4">
                  I am a fresh graduate in Software Engineering from Telkom
                  University, driven by a fervent passion for Mobile and Backend
                  Development. Proficient in Flutter for mobile app development
                  and equipped with a strong foundation in back-end development
                  using Node.js and Express.js. My commitment to continuous
                  learning underscores my dedication to the dynamic fields of
                  back-end and mobile development.
                </div>
                <button
                  className={`transition-all ease-out duration-8000  text-xxxs sm:text-xxs lg:text-sm xl:text-sm backdrop-blur-glassBackdrop bg-gradient-to-br from-white/5 to-white/0 border-1 border-zinc-800 px-2 py-2 sm:px-4 sm:py-4 rounded-xl hover:bg-transparent hover:shadow-btnShadow  hover:transition-shadow max-w-20 sm:max-w-40 text-warmWhite hover:text-mainPurple  hover:scale-110 `}
                >
                  <p className="text-xxxs sm:text-xxs lg:text-sm xl:text-sm font-medium ">
                    Here's My CV
                  </p>
                </button>
              </div>

              <div
                className={`ms-auto rounded-xl backdrop-blur-glassBackdrop bg-gradient-to-br from-white/5 to-white/0 border-1 border-zinc-800 justify-items-center justify-center shadow-cardShadow hover:bg-transparent hover:shadow-inherit hover:transition-shadow max-h-40 sm:max-h-56 lg:max-h-fit transition-all ease-in duration-700 `}
              >
                <img
                  className="w-40 sm:w-56 lg:w-fit mx-auto sm:mt-4 lg:mt-24 "
                  src="/assets/img/foto-ai.png"
                  alt="foto-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
