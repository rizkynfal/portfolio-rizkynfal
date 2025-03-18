export default function About() {
  return (
    <>
      <section id="about" className="">
        <div className="mx-auto">
          <div className="grid grid-rows-1 grid-flow-row lg:grid-cols-2 lg:grid-flow-row justify-items-center justify-center items-center">
            <div
              id="about-desc"
              className={`me-auto xl:text-sm transition-all ease-in duration-700 `}
            >
              <div className="text-warmWhite text-base font-bold pb-8 md:text-5xl lg:text-8xl mx-auto">
                About Me
              </div>
              <div className="text-warmWhite text-xxxs sm:text-xxs md:text-lg 2xl:text-3xl font-bold ">
                Rizky Naufal Alghifary
              </div>
              <div
                className="text-xxxs sm:text-xxs md:text-base 2xl:text-lg text-warmWhite font-medium mb-4"
                id="desc-about-me"
              >
                Versatile IT Developer with expertise in backend, frontend, and
                mobile application development. Proficient in Node.js, Flutter,
                TypeScript, and modern frontend frameworks, with a strong
                background in RESTful API development, microservices
                architecture, and AI-driven solutions. Passionate about
                optimizing system performance, building scalable applications,
                and integrating intelligent automation. Adept at working in
                cross functional teams to deliver high-quality software
                solutions
              </div>
            </div>
            <div className="mx-auto md:ms-auto rounded-xl justify-items-center justify-center max-h-40 sm:max-h-56 lg:max-h-fit  ">
              <div
                className={`rounded-xl backdrop-blur-glassBackdrop bg-gradient-to-br from-white/5 to-white/0 border-1 border-zinc-800 shadow-cardShadow hover:bg-transparent hover:shadow-inherit hover:transition-shadow transition-all ease-in duration-700 `}
              >
                <img
                  className="w-40 sm:w-56  lg:w-fit mx-auto sm:mt-4 lg:mt-24 "
                  src="/assets/img/foto-ai.png"
                  alt="foto-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
