export default function Navbar() {
  const toogleHumberger = () => {
    let toggleMenu = document.querySelector("#toggleMenu") as HTMLElement;

    toggleMenu.onclick = () => {
      toggleMenu.classList.toggle("hamburger-toggle");
    };
  };
  return (
    <nav className="bg-white shadow-md ">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-22 pb-4">
        <div className="relative flex h-16 items-end justify-between">
          <div
            id="toggleMenu"
            className="absolute inset-y-0 left-0 flex items-center md:hidden"
          >
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="true"
            >
              <span className="absolute -inset-0.5"></span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center me-auto">
              <a
                className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-2xl font-bold "
                href="/"
              >
                rizkynfal
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block xl:visible">
              <div className="flex space-x-4">
                <a
                  href="/dashboard"
                  className="rounded-md px-3 py-2 text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-lg font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <a
                  href="https://github.com/rizkynfal/"
                  className="rounded-md px-3 py-2 text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-lg font-medium"
                >
                  Github
                </a>
                <a
                  href="/projects"
                  className="rounded-md px-3 py-2 text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-lg font-medium"
                >
                  Projects
                </a>
                <a
                  href="/contact"
                  className="rounded-md px-3 py-2 text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-lg font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3"></div>
          </div>
        </div>
      </div>

      <div className="visibile md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
