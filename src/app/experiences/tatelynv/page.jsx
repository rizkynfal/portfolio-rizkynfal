import { sliderTatelyNv } from "@/components/utils/dummy";
import CarouselSlider from "@/components/utils/Slider";
export default function ExperienceTatelyNv() {
  return (
    <>
      <section id="altimeda-be-dev" className="my-12 ">
        <h1 className="text-4xl my-4 font-bold ">Tately NV</h1>
        <CarouselSlider sliderData={sliderTatelyNv} imageWidth={"w-60"} imageHeight={"h-1/3"} />
        <div>
          <ul className="text-warmWhite list-disc ml-5 mt-4 text-sm lg:text-lg ">
            {sliderTatelyNv.descDetail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
