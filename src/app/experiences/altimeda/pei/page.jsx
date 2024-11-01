"use client";

import { sliderPei } from "@/components/utils/dummy";
import CarouselSlider from "@/components/utils/Slider";

export default function ExpAltimedaPei() {
  return (
    <>
      <section id="exp-altimeda-pei" className="py-12">
        <div className="flex flex-initial justify-items-center">
          <div className=" mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <h1 className="flex flex-wrap mx-auto text-2xl pb-4 font-bold">
              {`IOT`}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-zinc-700 ">
                &nbsp;RMA
              </span>
            </h1>
            <div className="my-4">
              <CarouselSlider
                sliderData={sliderPei}
                imageWidth={"w-60"}
                imageHeight={"h-dvh"}
              />
            </div>
            <div>
              <ul className="text-warmWhite list-disc ml-5 mt-4 text-base md:text-lg">
                {sliderPei.descDetail.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
