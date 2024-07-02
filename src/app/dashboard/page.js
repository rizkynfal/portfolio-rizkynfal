import About from "../../components/home/About";
import Hero from "../../components/home/Hero";
import Projects from "../../components/home/Projects";

const Dashboard = () => {
  return (
    <>
      <section className="">
        <div className="my-auto">
          <Hero />
        </div>
        <div className=" my-auto">
          <About />
        </div>
        <div className=" my-auto">
          <Projects />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
