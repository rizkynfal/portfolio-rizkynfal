export default function Navbar() {
  // const toogleHumberger = () => {
  //   let toggleMenu = document.querySelector("#toggleMenu");

  //   toggleMenu.onclick = () => {
  //     toggleMenu.classNameList.toggle("hamburger-toggle");
  //   };
  // };
  return (
    <header>
      <nav className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-center  backdrop-blur-xl lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-center px-3 mx-auto">
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
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
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto "
            id="navbarSupportedContent1"
            data-twe-collapse-item
          >
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ms-28">
              <a
                className=" items-center text-transparent bg-warmWhite bg-clip-text text-2xl font-bold "
                href="#"
              >
                rizkynfal
              </a>
            </div>

            <ul
              className="list-style-none me-28 flex flex-col ps-0 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  href="#projects"
                  className="rounded-md px-3 py-2 text-transparent bg-warmWhite bg-clip-text text-lg font-medium transition duration-200  hover:ease-in-out motion-reduce:transition-none"
                  data-twe-nav-link-ref
                >
                  Projects
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  href="#about"
                  className="rounded-md px-3 py-2 text-transparent bg-warmWhite bg-clip-text text-lg font-medium transition duration-200  hover:ease-in-out motion-reduce:transition-none"
                  data-twe-nav-link-ref
                >
                  About
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  href="https://github.com/rizkynfal/"
                  className="rounded-md px-3 py-2 text-transparent bg-warmWhite bg-clip-text text-lg font-medium transition duration-200  hover:ease-in-out motion-reduce:transition-none"
                  data-twe-nav-link-ref
                >
                  Github
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  href="https://linkedin.com/in/rizkynfal/"
                  className="rounded-md px-3 py-2 text-transparent bg-warmWhite bg-clip-text text-lg font-medium transition duration-200  hover:ease-in-out motion-reduce:transition-none"
                  data-twe-nav-link-ref
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
