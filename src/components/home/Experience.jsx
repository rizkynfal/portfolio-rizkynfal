import { expData, expData2 } from "../utils/dummy";

export default function Experience() {
  return (
    <section id="experiences" className="">
      <div className="mx-auto">
        <div className="flex flex-wrap justify-items-start justify-start ">
          <h1 className="text-warmWhite md:text-5xl text-8xl font-bold mb-10">
            Experiences
          </h1>
          <div className="grid grid-cols-2 grid-flow-row-dense gap-20 ">
            {expData.data.map((e) => {
              return (
                <div
                  className="flex flex-col h-min rounded-xl backdrop-blur-glassBackdrop bg-sidebarColor border-1 border-zinc-800 hover:shadow-btnShadow hover:transition-shadow"
                  key={e.id}
                >
                  <div
                    className={`w-full h-60 rounded-md ${e.bgColor} p-8 justify-center items-center`}
                  >
                    <img
                      src={e.photo}
                      alt={e.company}
                      className="w-fit h-full rounded-md p-2 backdrop-blur-glassBackdrop transition-transform duration-300 hover:scale-110 mx-auto"
                    />
                  </div>
                  <div className="pt-6 ps-4 pe-4 pb-2 ">
                    <div className="pb-3">
                      <h3 className="text-lg font-bold mt-2 text-warmWhite ">
                        {e.company}
                        <span className="text-neutral-400 text-sm">
                          {` (${e.role})`}
                        </span>
                      </h3>
                      <p className="text-neutral-400 text-md">{e.period}<br></br>{e.proLang}</p>
                      <p className="text-warmWhite mt-2 mb-2 text-start">
                        {e.desc}
                      </p>
                    </div>
                    <div className="pb-2 ">
                      <a
                        href={e.urlDetail}
                        className="p-2 border-1 border-zinc-800 rounded-xl  text-xxxs sm:text-xxs lg:text-sm xl:text-sm font-medium text-warmWhite hover:text-mainPurple  "
                      >
                        See Detail
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
