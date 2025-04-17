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
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Home = () => {

  return (
    <div className="h-screen scrollbar-hide scroll-smooth bg-black text-white">
      <Rocket />
<NavBar/>
<StackingSections/>
    {/* <div className='h-screen w-full bg-black isolate'/> */}
    <CurtainSection/>
    <SpeakerSection/>
    {/* <div className='h-screen w-full bg-black isolate'/> */}
    {/* <ShowcaseSection/> */}
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
