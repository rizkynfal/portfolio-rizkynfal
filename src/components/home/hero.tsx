export default function Hero() {
  return (
    <>
      <section id="hero-dashboard">
        <div className="mx-auto max-w-7xl bg-warmWhite px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 my-8 grid grid-cols-2 grid-flow-row justify-items-center justify-center py-3">
          <div className="md:container mx-auto max-w-96 px-4 py-4 xl:text-sm">
            <div className="text-mainBlack text-xxs lg:text-lg 2xl:text-3xl font-bold">
              Rizky Naufal Alghifary
            </div>
            <div className="text-mainPurple text-xxs lg:text-base 2xl:text-2xl py-4 font-medium">
              Full-stack Developer
            </div>
            <div className="text-xxs lg:text-base 2xl:text-lg text-black pb-4 font-medium">
              I am a fresh graduate in Software Engineering from Telkom
              University, driven by a fervent passion for Mobile and Backend
              Development. Proficient in Flutter for mobile app development and
              equipped with a strong foundation in back-end development using
              Node.js and Express.js. My commitment to continuous learning
              underscores my dedication to the dynamic fields of back-end and
              mobile development.
            </div>
            <button className="text-xxs lg:text-sm xl:text-sm bg-mainPurple  px-4 py-4 rounded-xl shadow-btnShadow hover:bg-btnHoverColor">
              <p className="text-xxs lg:text-sm xl:text-sm text-white font-medium">
                Here's My CV
              </p>
            </button>
          </div>

          <div className="">
            <img
              className="w-40 xl:w-96"
              src="/assets/img/foto-hero.png"
              alt="foto-hero"
            />
          </div>
        </div>
      </section>
    </>
  );
}
