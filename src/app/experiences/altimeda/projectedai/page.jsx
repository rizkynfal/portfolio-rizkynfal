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
        </h1>{" "}
        <h1>{sliderProjectedAI.role}</h1>
        <CarouselSlider sliderData={sliderProjectedAI} />
        <div className="py-6">
          {" "}
          <p>{sliderProjectedAI.desc}</p>
          <ul className="text-warmWhite list-disc ml-5 mt-4 text-sm lg:text-lg">
            {sliderProjectedAI.descDetail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>
            You can visit the website here:&nbsp;
            <span>
              <a href="https://projectedai.au/" className="text-sky-700 ">
                click here
              </a>
            </span>
          </h2>
        </div>
      </section>
    </>
  );
}
