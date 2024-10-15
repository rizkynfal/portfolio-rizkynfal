"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "../../components/home/About";
import Hero from "../../components/home/Hero";
import Experience from "../../components/home/Experience";

const Dashboard = () => {
  return (
    <section className="mx-auto px-2 sm:px-4 lg:pX-8 xl:px-16 2xl:px-22">
      <div className="px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 ">
        <Hero />
      </div>
      <div className="px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 my-60">
        <About />
      </div>
      <div className=" px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 my-40">
        <Experience />
      </div>
    </section>
  );
};

export default Dashboard;