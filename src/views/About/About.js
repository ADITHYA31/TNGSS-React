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

const About = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <NavBar/>
        <HeroSection title={"About Us"} subtitle={"TNGSS Conversations: Where Ideas Collide"}/>
        <IntroMissionSection/>
        <WhyTamilNaduSection/>
        <FocusAreasSection/>
        <KeyFocusSection/>
        <GetInvolvedSection/>
        <Footer/>
    </div>
  );
};
export default About;
