"use client";

import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Head from "next/head";

const Dashboard = () => {
  return (
    <>
      <div className=" my-auto">
        <Hero />
      </div>
      <div className=" my-auto">
        <About />
      </div>
    </>
  );
};

export default Dashboard;
