import { sliderGobill } from "@/components/utils/dummy";
import CarouselSlider from "@/components/utils/Slider";
export default function ExpGobill() {
  return (
    <>
      <section id="altimeda-be-dev" className="my-12 ">
        <h1 className="text-4xl my-4 font-bold bg-clip-text bg-projectedai ">
          Go
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-400 to-red-500">
            &nbsp;Billiard
          </span>
        </h1>
        <CarouselSlider sliderData={sliderGobill} />
        <div className="py-6">
          <h2>Backend Developer</h2>
          <p>{sliderGobill.desc}</p>
          <ul className="text-warmWhite list-disc ml-5 mt-4 text-sm lg:text-lg py-2">
            {sliderGobill.descDetail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>
            You can visit the website here:&nbsp;
            <span>
              <a
                href="https://gobill.ismartglobal.id/"
                className="text-sky-700 "
              >
                click here
              </a>
            </span>
          </h2>
        </div>
      </section>
    </>
  );
}
