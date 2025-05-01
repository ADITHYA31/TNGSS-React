import React from 'react';
import bgImage from '../../assets/img/plain-background-image.png';
import CTAButton from '../Elements/CTAButton';
import vector from '../../assets/Vector.svg?url';
import innerImage from '../../assets/img/abstract-background-with-low-poly-design.png';
import outerImage from '../../assets/img/image 120.png';

const HeroSection = ({ className = '', title }) => {
  return (
    <section
      className={`w-screen h-screen bg-cover bg-center flex items-center justify-center relative ${className}`}
      id="hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-screen-xl w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Column */}
        <div className="flex flex-col text-white md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-light leading-[1.8] md:leading-[2] font-urbanist">
            <span className="font-light">The Ultimate</span><br />
            <span className="font-semibold">Global <br />
            Gathering for <br /> </span>
            <span className="font-light">Founders</span>
          </h1>

          <CTAButton
            src="https://event.startuptn.in/"
            className="rounded-2xl w-full"
          >
            <div className="w-50 h-9 px-5  flex items-center justify-center">REGISTER NOW</div>
          </CTAButton>
        </div>

        {/* Right Column - Images */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center">
          {/* Outer Image */}
          <img
            src={outerImage}
            alt="Event Crowd"
            className="rounded-[20px] shadow-lg w-[80%] md:w-[75%]"
            id="outer-img"
          />

          {/* Inner Image */}
          <img
            src={innerImage}
            alt="Digital Abstract"
            className="absolute rounded-[20px] shadow-xl"
            style={{
              height: '60%',
              top: '50%',
              left: '0%',
              // transform: 'translateY(-50%)',
              transform: 'translateY(-50%) translateX(-30%)',
            }}
          />
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
