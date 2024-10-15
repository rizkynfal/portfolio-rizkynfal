import { Inter } from "next/font/google";
import "./globals.css";
import Dashboard from "./dashboard/page";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rizkynfal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rizky Portfolio</title>
      </head>
      <body className="bg-mainBlack ">
        <Navbar />
        <section className="py-32 mx-auto lg:mx-32">
          {children ?? <Dashboard />}
        </section>
        <Footer />
      </body>
    </html>
  );
}