import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Elements/Footer/Footer'
import NavBar from '../../components/Elements/NavBar';
import TestCanvas from '../../components/TestCanvas';
import StackingSections from '../../components/Homepage/FirstSections/StackingSections';
import PreFooter from '../../components/Homepage/Prefooter/PreFooter';
import CurtainSection from '../../components/Homepage/CurtainSection/CurtainSection';
import ShowcaseSection from '../../components/Homepage/showcase_section/ShowcaseSection';
import SponsSection from '../../components/Homepage/SponsSection';
import SpeakerSection from '../../components/Homepage/SpeakerSection/SpeakerSection'
import Rocket from '../../components/Rocket/Rocket';
import PastEngagements from '../../components/Homepage/past_engagements';


const Home = () => {

  return (
    <div className="h-screen scrollbar-hide scroll-smooth bg-black text-white font-urbanist">
      {/* <Rocket /> */}
<NavBar/>
<StackingSections/>
    {/* <div className='h-screen w-full bg-black isolate'/> */}
    <CurtainSection/>
    <SpeakerSection/>
    {/* <div className='h-screen w-full bg-black isolate'/> */}
    <ShowcaseSection/>
    <PastEngagements/>
    {/* <div className='h-screen w-full bg-purple-950/30 isolate'/> */}
    <SponsSection/>

    <PreFooter/>
    <Footer/>



      {/* <NavBar/>
      <TestCanvas/>
      <Footer/> */}
      {/* <Header/>
      <Main/>
      <Footer/> */}
    </div>
  );
};


export default Home;
