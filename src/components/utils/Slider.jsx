import { useEffect, useState } from "react";

export default function Slider({ listImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === listImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-60">
      <div className="flex bg-white rounded-md p-4 transition-all ease-linear duration-500">
        <img
          src={listImages[currentIndex]}
          className="w-fit h-60 transition-all ease-linear duration-500 mx-auto my-auto"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
      <div className="flex justify-center mt-4">
        {listImages.map((_, index) => (
          <div
          
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
