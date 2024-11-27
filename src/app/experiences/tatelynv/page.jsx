import { sliderTatelyNv } from "@/components/utils/dummy";
import CarouselSlider from "@/components/utils/Slider";
export default function ExperienceTatelyNv() {
  return (
    <>
      <section id="altimeda-be-dev" className="my-12 ">
        <h1 className="text-4xl my-4 font-bold ">Tately NV</h1>
        <CarouselSlider
          sliderData={sliderTatelyNv}
          imageHeight={"h-1/3"}
          carouselWmax={"max-w-screen-xl"}
        />
        <div>
          <h2>{sliderTatelyNv.role}</h2>
          <p>{sliderTatelyNv.desc}</p>                                                                                                      
          <ul className="text-warmWhite list-disc ml-5 mt-4 text-sm lg:text-lg">
            {sliderTatelyNv.descDetail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>rerf
        </div>
      </section>
    </>
  );
}
