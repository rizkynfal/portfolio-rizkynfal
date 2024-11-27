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
        <link
          rel="icon"
          href="/vercel.ico"
          type="image/x-icon"
          sizes="16x16"
        />
      </head>
      <body className="bg-mainBlack ">
        <Navbar />
        <section className="mx-auto px-2 sm:px-24 sm:ms-48 lg:ps-60 lg:ms-32 ">
          {children ?? <Dashboard />}
        </section>
        <Footer />
      </body>
    </html>
  );
}
