"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toogleHumberger = () => {
    setOpen(!open);
  };
  return (
    <header>
      <nav className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-center backdrop-blur-xl lg:flex-wrap lg:justify-start lg:py-4 ">
        <button
          onClick={toogleHumberger}
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden items-start"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className={`${
            open ? "visible" : "hidden"
          } flex w-full flex-wrap items-center justify-center px-3 mx-auto `}
        >
          <div
            className={`flex-grow basis-[100%] items-start lg:!flex lg:basis-auto text-start`}
            id="navbarSupportedContent1"
            data-twe-collapse-item
          >
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ms-48 ">
              <a
                className="items-start text-transparent bg-warmWhite bg-clip-text text-2xl font-bold text-start"
                href="/"
              >
                rizkynfal
              </a>
            </div>
            {[
              { name: "Discover", url: "/" },
              { name: "About", url: "/about" },
              { name: "Experience", url: "/experiences" },
            ].map((val, index) => (
              <ul key={index} className="space-y-2 font-medium ">
                <li
                  key={index}
                  className="mb-4 lg:mb-0 lg:pe-2"
                  data-twe-nav-item-ref
                >
                  <a
                    href={val.url}
                    className="rounded-md px-3 py-2 text-transparent bg-warmWhite bg-clip-text text-lg font-medium transition duration-200  hover:ease-in-out motion-reduce:transition-none"
                    data-twe-nav-link-ref
                  >
                    {val.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
