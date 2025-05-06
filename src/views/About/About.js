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
    <div style={{backgroundColor:'black'}} className='w-screen'>
        {/* <HeroSection title={"About Us"} subtitle={"TNGSS Conversations: Where Ideas Collide"}/> */}
        <div
  className="bg-cover bg-center flex flex-col w-screen h-screen justify-center items-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="w-full max-w-7xl px-4 pt-32 mt-5">
    <div className="flex flex-col gap-5 animate-fadeInLeft mb-5 font-urbanist">
    <h1 className="text-8xl md:text-8xl sm:text-2xl  bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent animate-wave bg-[length:200%_100%]">
    About Us
</h1>

      <p className="text-white text-2xl animate-fadeInLeft delay-200">
      TNGSS Conversations: Where Ideas Collide
      </p>
    </div>
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
