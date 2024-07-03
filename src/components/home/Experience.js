import Cards from "../Card";

export default function Experience() {
  return (
    <section id="experiences" className="py-32 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 py-24">
        <div className="grid grid-rows-1 grid-flow-row justify-items-start justify-start ">
          <h1 className="text-warmWhite text-8xl  font-bold pb-8 ">
            Experiences
          </h1>
          <div className="mb-8 animate-pulse ">
            <Cards>
              <div className="grid grid-cols-2 grid-flow-col gap-2 px-4 py-2">
                <div className=" py-4">Frontend Developer Jan 2024-present</div>
                <div className=" py-4">Ismart Inter Global - flutter</div>
              </div>
              <div className="grid grid-rows-2 grid-flow-col">
                <div className=" py-4">Frontend Developer</div>
                <a className="ms-auto" href="/experiences/ismart">
                  See Detail About This Experience
                </a>
              </div>
            </Cards>
          </div>
          <div className="mb-8">
            <Cards></Cards>
          </div>
        </div>
      </div>
    </section>
  );
}
