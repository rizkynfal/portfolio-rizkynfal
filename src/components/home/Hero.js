"use client";
import React, { useEffect, useRef } from "react";
import { scrolling, useIsVisible } from "../ScrollDetected";
import { Parallax, useParallax } from "react-scroll-parallax";
import { Provider } from "../ParallaxProvider";

export default function Hero() {
  const ref = useRef(null);

  return (
    <section id="hero-dashboard">
      <div className=" grid grid-rows-2 gap-4  px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22  pb-20 justify-items-center justify-center items-center ">
        <div className=" grid grid-cols-2 justify-items-end justify-end items-end">
          <Parallax translateX={["1000px", "-500px"]}>
            <h1 className="text-warmWhite  text-base sm:text-lg md:text-9xl 2xl:text-17xl font-bold ">
              Rizky
            </h1>
          </Parallax>

          <p className="text-warmWhite text-xxxs sm:text-xxs pe-12 mx-auto md:text-base 2xl:text-lg  font-medium ">
            Fresh graduate with a year experience <br></br>
            as Front-end Developer and Back-end Developer
          </p>
        </div>

        <div
          className={`mx-auto px-4 py-4 transition-all ease-in duration-700 `}
        >
          {" "}
          <Parallax translateX={["-400px", "800px"]}>
            <div className="text-warmWhite text-base sm:text-lg  md:text-9xl 2xl:text-17xl font-bold ms-80">
              Naufal
            </div>{" "}
          </Parallax>
        </div>
      </div>
    </section>
  );
}
