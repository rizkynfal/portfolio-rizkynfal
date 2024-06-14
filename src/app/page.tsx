import Content from "@/components/templates/content";
import Head from "next/head";
import Navbar from "@/components/templates/navbar";
export default function App() {
  return (
    <>
      <Head>
        <title>Rizkynfal Portfolio</title>
      </Head>{" "}
      <Navbar />
      <Content />
    </>
  );
}
