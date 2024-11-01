import { sliderProjectedAI } from "@/components/utils/dummy";
import CarouselSlider from "@/components/utils/Slider";
export default function ExpAltimedaBeDev() {
  return (
    <>
      <section id="altimeda-be-dev" className="my-12 ">
        <h1 className="text-4xl my-4 font-bold bg-clip-text bg-projectedai ">
          <span className="bg-clip-text text-transparent bg-projectedai">
            Project
          </span>
          ed
          <span className="bg-clip-text text-transparent bg-projectedai">
            &nbsp;AI
          </span>
        </h1>
        <CarouselSlider sliderData={sliderProjectedAI} />
        <div>
          <ul className="text-warmWhite list-disc ml-5 mt-4 text-base md:text-lg ">
            {sliderProjectedAI.descDetail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
