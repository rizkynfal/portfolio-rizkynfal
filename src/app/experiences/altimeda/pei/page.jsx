"use client";

export default function ExpAltimedaPei() {
  return (
    <>
      <section id="exp-altimeda-pei">
        <div className="flex flex-initial justify-items-center">
          <div className=" mx-auto px-2 sm:px-32 lg:px-32 xl:px-32 2xl:px-32">
            <div className=" bg-sidebarColor p-10 rounded-md ">
              <div>
                <h1 className="flex flex-wrap mx-auto">
                  {`IOT`}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
                    &nbsp;RMA
                  </span>
                </h1>

                <div className="bg-white rounded-md p-4">
                  <img
                    src="/assets/img/pei-logo.png"
                    className="w-50 h-50 mx-auto"
                    alt="pei-logo"
                  />
                </div>

                <ul className="text-warmWhite list-disc">
                  <li>
                    Migrated the existing mobile app to Flutter, enhancing
                    performance and stability.
                  </li>
                  <li>
                    Implemented Bloc state management, improving code
                    maintainability and scalability.
                  </li>
                  <li>
                    Optimized and maintained the existing product, ensuring
                    smooth operation and user experience improvements.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
