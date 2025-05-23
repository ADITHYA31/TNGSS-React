import React from "react";
import CM from "../../../assets/CM.svg?url";
import CMbg from "../../../assets/CMbg.svg?url";

export default function CMSection() {
  return (
    <div
      style={{
        background:
          "linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)",
        borderRadius: "0.75rem",
      }}
      className="sticky overflow-hidden top-0 w-full h-screen z-10 p-2 h-60vh"
    >
      <section
        className="sticky top-0 h-full w-full bg-white z-20 flex  flex-col-reverse md:flex-row rounded items-center justify-center overflow-hidden text-black px-4 h-60vh"
        style={{
          backgroundImage: `url(${CMbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0.75rem",
        }}
      >
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 space-y-4 px-4 md:px-6 text-left mb-4 md:mb-0">
          <p className="text-base md:text-4xl">
            “The government is focusing on{" "}
            <b>Integrated Industrial Development</b> in the State, and the
            contribution of StartupTN to this effort is significant. StartupTN’s
            activities align perfectly with the State Government’s initiatives to
            make <b>Tamil Nadu</b> the{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-200 text-black px-2 py-0.5 rounded-md">
              Number One State
            </span>{" "}
            in all fields.”
          </p>
          <span className="font-semibold text-lg md:text-3xl">
            - Thiru. M.K. Stalin
          </span>
          <span className="text-sm md:text-xl">
            Hon'ble Chief Minister of Tamil Nadu
          </span>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
          <img
            alt="Chief Minister"
            src={CM}
            className="h-[30%] max-w-3xl max-h-72 md:max-h-full object-contain object-center z-10"
          />
        </div>
      </section>
    </div>
  );
}
