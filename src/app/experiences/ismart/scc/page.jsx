"use client";
import { sliderSCC } from "@/components/utils/dummy";
import CarouselSlider from "@/components/utils/Slider";

export default function ExpIsmartFe() {
  return (
    <>
      <section id="exp-altimeda-pei" className="py-12">
        <div className="flex flex-initial justify-items-center">
          <div className=" mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <h1 className="flex flex-wrap mx-auto text-2xl pb-4 font-bold">
              Ismart I
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                nter&nbsp;Global
              </span>
            </h1>
            <div className="my-4">
              <CarouselSlider sliderData={sliderSCC} />
            </div>
            <div>
              <ul className="text-warmWhite list-disc ml-5 mt-4 text-base md:text-lg">
                {sliderSCC.descDetail.map((item) => (
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
