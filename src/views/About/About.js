import React, { useState, useEffect, useRef } from 'react';
import logo from "../../assets/Nav_logo.png";
import NavBar from '../../components/Elements/NavBar';
import Footer from '../../components/Elements/Footer/Footer';
import HeroSection from '../../components/About/HeroSection';
import IntroMissionSection from '../../components/About/IntroMissionSection';
import FocusAreasSection from '../../components/About/FocusAreasSection';
import WhyTamilNaduSection from '../../components/About/WhyTamilNaduSection';
import KeyFocusSection from '../../components/About/KeyFocusSection';
import GetInvolvedSection from '../../components/About/GetInvolvedSection';
import bgImage from '../../assets/img/image.png';


const About = () => {
  return (
    <div style={{backgroundColor:'black'}} >
        {/* <HeroSection title={"About Us"} subtitle={"TNGSS Conversations: Where Ideas Collide"}/> */}

      <div
  className="bg-cover bg-center flex w-full h-[80vh] items-center pl-20"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="w-full max-w-7xl px-4 flex">
    {/* Left col-6 with centered content */}
    <div className="w-full md:w-1/2 flex flex-col  gap-5 font-urbanist ">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] 2xl:text-[11rem] text-gradient animate-gradient">
        About Us
      </h1>
      <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl animate-fadeInLeft delay-200">
      TNGSS Conversations: Where Ideas Collide
      </p>
    </div>

    {/* Right col-6 empty */}
    <div className="hidden md:block w-1/2"></div>
  </div>
</div>

        <IntroMissionSection/>
        <WhyTamilNaduSection/>
        <FocusAreasSection/>
        <KeyFocusSection/>
        <GetInvolvedSection/>
    </div>
  );
};
export default About;
