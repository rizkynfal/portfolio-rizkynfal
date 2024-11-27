"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselSlider({
  sliderData,
  carouselWmax,
  imageWidth,
  imageHeight,
}) {
  const items = sliderData;
  return (
    <div className="">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className={`flex flex-1 rounded-md ${
          items.bgColor
        } justify-center items-center ${carouselWmax ?? "max-w-screen-2xl"} `}
        interval={5000}
      >
        {items.photo.map((item) => (
          <div key={items.id} className="p-4 ">
            <div
              className={`rounded-md ${
                imageWidth ?? "w-fit"
              } justify-center items-center mx-auto`}
            >
              <img
                src={item}
                alt={items.company}
                className={` ${
                  imageHeight ?? "h-full"
                } w-fit rounded-md backdrop-blur-glassBackdrop transition-transform duration-300 hover:scale-110 mx-auto relative`}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
