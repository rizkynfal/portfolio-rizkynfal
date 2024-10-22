"use client";

import { expForSlider } from "@/components/utils/dummy";
import Slider from "@/components/utils/Slider";

export default function ExpAltimedaPei() {
  return (
    <>
      <section id="exp-altimeda-pei" className="py-12">
        <div className="flex flex-initial justify-items-center">
          <div className=" mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div>
              <h1 className="flex flex-wrap mx-auto text-2xl pb-4 font-bold">
                {`IOT`}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-zinc-700 ">
                  &nbsp;RMA
                </span>
              </h1>
              <div className="my-4">
                {expForSlider.data.map((val, index) => {
                  if (val.id === "2") {
                    return <Slider listImages={val.photo} />;
                  }
                })}
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
                  Optimized and maintained the existing product, ensuring smooth
                  operation and user experience improvements.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
