"use client";
import { useRef } from "react";
import useIsVisible from "../ScrollDetected";
export default function Hero() {
  const ref1 = useRef();
  const isVisible = useIsVisible(ref1);

  return (
    <>
      <section id="hero-dashboard" ref={ref1}>
        <div className="mx-14 px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 py-8 grid grid-cols-2 grid-flow-row my-16 justify-items-center justify-center ">
          <div
            className={`md:container mx-auto max-w-96 px-4 py-4 xl:text-sm transition-all ease-in duration-700 ${
              isVisible ? "translate-y-0" : "translate-y-52"
            }`}
          >
            <div className="text-warmWhite text-xxxs sm:text-xxs  md:text-lg 2xl:text-3xl font-bold ">
              Rizky Naufal Alghifary
            </div>
            <div className="text-warmWhite text-xxxs sm:text-xxs  md:text-base 2xl:text-2xl py-2 font-medium">
              Full-stack Developer
            </div>
            <div className="text-xxxs sm:text-xxs md:text-base 2xl:text-lg text-warmWhite font-medium mb-4">
              I am a fresh graduate in Software Engineering from Telkom
              University, driven by a fervent passion for Mobile and Backend
              Development. Proficient in Flutter for mobile app development and
              equipped with a strong foundation in back-end development using
              Node.js and Express.js. My commitment to continuous learning
              underscores my dedication to the dynamic fields of back-end and
              mobile development.
            </div>

            <button className="transition-all ease-out duration-8000  text-xxxs sm:text-xxs lg:text-sm xl:text-sm backdrop-blur-glassBackdrop bg-gradient-to-br from-white/5 to-white/0 border-1 border-zinc-800 px-2 py-2 sm:px-4 sm:py-4 rounded-xl hover:bg-transparent hover:shadow-btnShadow  hover:transition-shadow max-w-20 sm:max-w-40 text-warmWhite hover:text-mainPurple  hover:scale-110">
              <p className="text-xxxs sm:text-xxs lg:text-sm xl:text-sm font-medium ">
                Here's My CV
              </p>
            </button>
          </div>
          <div className="rounded-xl backdrop-blur-glassBackdrop bg-gradient-to-br from-white/5 to-white/0 border-1 border-zinc-800 justify-items-center justify-center shadow-cardShadow hover:bg-transparent hover:shadow-inherit hover:transition-shadow max-h-40 sm:max-h-56 lg:max-h-fit">
            <div className="grid grid-flow-col grid-cols-1 ">
              <img
                className="w-40 sm:w-56 lg:w-fit mx-auto "
                src="/assets/img/foto-ai.png"
                alt="foto-hero"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
