"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "../../components/home/About";
import Hero from "../../components/home/Hero";
import Experience from "../../components/home/Experience";

const Dashboard = () => {
  return (
    <ParallaxProvider>
      <section className="py-20  bg-mainBlack">
        <div className="my-10 ">
          <Hero />
        </div>
        <div className="my-10 ">
          <Experience />
        </div>
        <div className="my-10 ">
          <About />
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Dashboard;
