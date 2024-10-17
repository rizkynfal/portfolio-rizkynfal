"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "../../components/home/About";
import Hero from "../../components/home/Hero";
import Experience from "../../components/home/Experience";

const Dashboard = () => {
  return (
    <section id="dashboard" className="mx-auto">
      <div className="px-2">
        <Hero />
      </div>
      <div className="px-2 my-60">
        <About />
      </div>
      <div className=" px-2 my-40">
        <Experience />
      </div>
    </section>
  );
};

export default Dashboard;
