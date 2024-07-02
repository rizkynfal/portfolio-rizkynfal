import Cards from "../Card";

export default function Projects() {
  return (
    <section id="projects" className="py-32 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 py-24">
        <div className="grid grid-rows-1 grid-flow-row justify-items-center justify-center ">
          <h1 className="text-warmWhite text-4xl font-bold pb-8">Projects</h1>
          <div className="mb-8">
            <Cards></Cards>
          </div>{" "}
          <div className="mb-8">
            <Cards></Cards>
          </div>
        </div>
      </div>
    </section>
  );
}
