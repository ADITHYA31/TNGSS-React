import React from "react";
import introImg from "../../assets/img/intro-mission-image.png";
import introBackground from "../../assets/img/intro-section-background.png";

const IntroMissionSection = () => {
  return (
    <div className="w-full min-h-screen p-8 md:p-16 relative">
      <style>{`
        .intro-mission-wrapper {
          background-image: url(${introBackground});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .intro-mission-image {
          border-radius: 30px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="intro-mission-wrapper w-full h-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Introduction Text */}
          <div>
            <h2 className="text-4xl font-semibold text-black mb-4">Introduction</h2>
            <p className="text-black text-base mb-4">
              Overview - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-black text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Image + Mission */}
          <div className="flex flex-col gap-6">
            <img
              src={introImg}
              alt="People working"
              className="intro-mission-image"
            />
            <div>
              <h2 className="text-4xl font-semibold text-black mb-4">Mission</h2>
              <p className="text-black text-base mb-4">
                Overview - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-black text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-black text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroMissionSection;
