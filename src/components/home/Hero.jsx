"use client";
import React, { useEffect, useRef, useState } from "react";
import { scrolling, useIsVisible } from "../ScrollDetected";
import { Parallax, useParallax } from "react-scroll-parallax";
import { Provider } from "../ParallaxProvider";
import { isMobile, isTablet } from "../utils/WebScale";

export default function Hero() {
  useEffect(() => {});
  return (
    <section id="hero-dashboard" className="">
      <div className="mx-auto">
        <div className="flex flex-wrap justify-items-end justify-end items-end">
          <h1 className="flex-1 text-warmWhite text-5xl font-bold py-2">
            Halo,<br></br> I'm Rizky Naufal Alghifary.
          </h1>
        </div>
        <p className="text-warmWhite text-xxxxs sm:text-xxs pe-12 mx-auto md:text-base 2xl:text-lg  font-medium  pb-2">
          I’m passionate about building web applications with modern
          technologies and love solving complex problems. I have strong
          experience in Flutter, Node.js, and Express.js.
        </p>
        <button
          className={`transition-all ease-out duration-8000  text-xxxs sm:text-xxs lg:text-sm xl:text-sm backdrop-blur-glassBackdrop bg-gradient-to-br from-white/5 to-white/0 border-1 border-zinc-800 px-2 py-2 sm:px-4 sm:py-4 rounded-xl hover:bg-transparent hover:shadow-btnShadow hover:transition-shadow max-w-20 sm:max-w-40 text-warmWhite hover:text-mainPurple hover:scale-110`}
        >
          <a href="/assets/static/Rizky_Naufal_Alghifari.pdf" className="text-xxxs sm:text-xxs lg:text-sm xl:text-sm font-medium">
            Here's My CV
          </a>
        </button>
        <div className="my-8">
          <h2 className="text-3xl font-bold text-warmWhite">Skills</h2>
          <ul className="list-disc ml-5 mt-4 text-white text-base md:text-lg">
            <li>Flutter</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>Microsoft Graph API</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
