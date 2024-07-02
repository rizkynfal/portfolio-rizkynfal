import { Inter } from "next/font/google";
import "./globals.css";
import Dashboard from "./dashboard/page";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rizkynfal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rizky Portfolio</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className="bg-mainBlack">
        <Navbar />
        <section className="w-screen mx-auto mt-16">
          {children ?? <Dashboard />}
        </section>
        <Footer />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>{}</script>
      </body>
    </html>
  );
}
