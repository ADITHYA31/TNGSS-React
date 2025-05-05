import React from "react";
import introImg from "../../assets/img/intro-mission-image.png";
import introBackground from "../../assets/img/light-background.png";

const IntroMissionSection = () => {
  return (
    // <div className="w-full min-h-screen p-8 md:p-16 relative">
    //   <style>{`
    //     .intro-mission-wrapper {
    //       background-image: url(${introBackground});
    //       background-size: cover;
    //       background-position: center;
    //       background-repeat: no-repeat;
    //     }
    //     .intro-mission-image {
    //       border-radius: 30px;
    //       box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    //     }
    //   `}</style>

    //   <div className="intro-mission-wrapper w-full h-full">
    //     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    //       {/* Introduction Text */}
    //       <div>
    //         <h2 className="text-4xl font-semibold text-black mb-4">Introduction</h2>
    //         <p className="text-black text-base mb-4">
    //           Overview - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //         <p className="text-black text-base">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //         </p>
    //       </div>

    //       {/* Image + Mission */}
    //       <div className="flex flex-col gap-6">
    //         <img
    //           src={introImg}
    //           alt="People working"
    //           className="intro-mission-image"
    //         />
    //         <div>
    //           <h2 className="text-4xl font-semibold text-black mb-4">Mission</h2>
    //           <p className="text-black text-base mb-4">
    //             Overview - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //           </p>
    //           <p className="text-black text-base mb-2">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //           </p>
    //           <p className="text-black text-base">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      className="min-h-screen px-4 md:px-16 py-10 bg-cover bg-center bg-no-repeat font-urbanist"
      style={{
        backgroundImage: `url(${introBackground})`,
      }}
    >
      {/* Overlay to make text readable */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-10 ">
        {/* Introduction */}
        <h2 className="text-4xl font-semibold text-black mb-4">Introduction</h2>
        <p className="text-gray-800 mb-3 text-base md:text-lg">
          Overview - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-800 mb-12 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Image and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={introImg}
              alt="about"
              className="  flex justify-center items-center rounded-[25px] w-full h-auto shadow-xl border-[3px] border-transparent hover:border-orange-400 transition duration-300"
            />
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-4xl font-semibold text-black mb-4">Mission</h2>
            <p className="text-gray-800 mb-3 text-base md:text-lg">
              Overview - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-800 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroMissionSection;
