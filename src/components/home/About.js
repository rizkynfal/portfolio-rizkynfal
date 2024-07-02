"use client"
import { useRef } from "react";
import Cards from "../Card";
import useIsVisible from "../ScrollDetected";

export default function About() {
  const ref1 = useRef();
  const isVisible = useIsVisible(ref1);
  return (
    <>
      <section
        id="about"
        className={`py-32 transition-all ease-in duration-700 ${
          isVisible ? "translate-y-0" : "translate-y-52"
        }`}
        ref={ref1}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 ">
          <div className="grid grid-rows-1 grid-flow-row justify-items-center justify-center ">
            <div className="text-warmWhite text-4xl font-bold pb-8">About</div>
            <div className="grid grid-cols-3 grid-flow-col justify-items-center justify-center">
              <div className="me-4">
                <Cards titleCard={"im an advanture"}> </Cards>
              </div>
              <div className="me-4">
                <Cards contentCard={"not gonna lie"}> </Cards>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
