"use client";

import { sliderPei } from "@/components/utils/dummy";
import CarouselSlider from "@/components/utils/Slider";

export default function ExpAltimedaPei() {
  return (
    <>
      <section id="exp-altimeda-pei" className="py-12">
        <div className="flex flex-initial justify-items-center">
          <div className=" mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div id="header">
              <h1 className="flex flex-wrap mx-auto text-2xl pb-4 font-bold">
                &nbsp;IOT
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-zinc-700 ">
                  &nbsp;RMA
                </span>
              </h1>
              <h1 className="list-disc text-warmWhite">
                {sliderPei.period}&nbsp;|&nbsp;
                {sliderPei.role}
              </h1>
            </div>
            <div className="my-4">
              <CarouselSlider
                sliderData={sliderPei}
                imageWidth={"w-60"}
                carouselWmax={"max-w-screen-lg"}
              />
            </div>
            <div>
              <p className="text-warmWhite">{sliderPei.desc}</p>
              <ul className="text-warmWhite list-disc ml-5 mt-4 text-sm lg:text-lg">
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
