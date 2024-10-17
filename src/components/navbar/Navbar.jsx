"use client";
import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  ContactMailOutlined,
  EmailRounded,
  GitHub,
  Home,
  Face,
  LinkedIn,
  Work,
  Explore,
  Badge,
  WhatsApp,
} from "@mui/icons-material";
import { isMobile } from "../utils/WebScale";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [mobileDevice, setMobileDevice] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  const setMobile = (mobileScreen) => {
    setMobileDevice(mobileScreen);
  };
  useEffect(() => {
    const handleResize = () => {
      const mobileScreen = isMobile(window.innerWidth);
      setMobile(mobileScreen);
    };

    // Set the initial value
    handleResize();

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mobileDevice ? (
    <MobileNavbar />
  ) : (
    <nav
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 ${
        open ? "w-64" : "w-20"
      } h-screen transition-transform -translate-x-full sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-sidebarColor">
        <div className="">
          <div className="flex flex-1 xl:px-4">
            {open ? (
              <div className="flex me-auto">
                <a href="/">
                  <img
                    src="/assets/img/foto-hero.png"
                    className=" shadow-glassShadow w-12 h-12 rounded-full object-cover "
                  />
                </a>
                <span className="flex-1 justify-end ms-6">
                  <p className="text-md text-warmWhite">Rizky Naufal A</p>
                  <p className="text-zinc-400">Developer</p>
                </span>
              </div>
            ) : (
              <a href="/">
                <span className="flex flex-1">
                  <img
                    src="/assets/img/foto-hero.png"
                    className="shadow-glassShadow w-8 h-8 rounded-full object-cover me-auto"
                  />
                </span>
              </a>
            )}
          </div>
          <button
            onClick={handleDrawer}
            className={`text-neutral-500 fixed top-4 transition-all ease-linear duration-100 bg-sidebarColor border-4 border-zinc-800 rounded-full ${
              open ? "left-60" : "left-16"
            } `}
          >
            <div className="flex ms-auto ">
              {!open ? (
                <ChevronRightIcon className="w-4 h-4" />
              ) : (
                <ChevronLeftIcon />
              )}
            </div>
          </button>
        </div>
        <Divider className="bg-sidebarColor py-4" />
        {[
          { name: "Discover", url: "/" },
          { name: "About", url: "/about" },
          { name: "Experience", url: "/experience" },
        ].map((val, index) => (
          <ul key={index} className="space-y-2 font-medium ">
            <li key={val.name}>
              <div className={`${open ? "mx-0" : "mx-auto"}`}>
                <a
                  href={val.url}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {index === 0 ? (
                    <Explore />
                  ) : index === 1 ? (
                    <Badge />
                  ) : (
                    <Work />
                  )}

                  <span className={`${open ? "visible" : "hidden"} ms-3`}>
                    {val.name}
                  </span>
                </a>
              </div>
            </li>
          </ul>
        ))}
        <Divider className="bg-sidebarColor py-2" />
        <br></br>
        <h1 className="px-4 text-white pb-2">{open ? "Contact" : ""}</h1>
        {[
          { name: "Gmail", url: "mailto:naufalrizky79@gmail" },
          { name: "LinkedIn", url: "https://linkedin.com/in/rizkynfal" },
          { name: "Github", url: "https://github.com/rizkynfal" },
          { name: "Whatsapp", url: "https://wa.me/6281224906145" },
        ].map((val, index) => (
          <ul key={index} className="space-y-2 font-medium">
            <li key={val.name}>
              <div className={`${open ? "mx-0" : "mx-auto"}`}>
                <a
                  href={val.url}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {index === 0 ? (
                    <EmailRounded />
                  ) : index === 1 ? (
                    <LinkedIn />
                  ) : index === 2 ? (
                    <GitHub />
                  ) : (
                    <WhatsApp />
                  )}
                  <span className={`${open ? "visible" : "hidden"} ms-3`}>
                    {val.name}
                  </span>
                </a>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
}
