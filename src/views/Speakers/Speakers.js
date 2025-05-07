import React, { useState, useEffect, useRef } from 'react';
import logo from "../../assets/Nav_logo.png";
import NavBar from '../../components/Elements/NavBar';
import Footer from '../../components/Elements/Footer/Footer';
import HeroSection from '../../components/About/HeroSection';
import Frame1 from "../../assets/investorcrd.png";
import Frame2 from "../../assets/corporatecrd.png";
import Frame3 from "../../assets/aspirantcrd.png";
import Frame4 from "../../assets/startupcrd.png";
import Frame5 from "../../assets/ecosyscard.jpg";
import FlippingCardNarrow from '../../components/Elements/FlippingCardNarrow';
import GradientBdrCard from '../../components/Elements/GradientBorderCard';
import bgImage from '../../assets/img/image.png';
import axios from 'axios'
import '../Speakers/speakers.css';

const Speakers = () => {
  const cardsRef = useRef([]);
  const [speakers, setSpeakers] = useState([]);
  const [error, setError] = useState(null);

  const fetchSpeakers = async () => {
     // or append any path if needed
    try {
      const response = await axios.get(
        'https://tngss.startuptn.in/event-service/v1/speakers/find-all',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      setSpeakers(response.data.data.speakers_management
      );
    } catch (err) {
      setError(err);
      console.error('Error fetching speakers:', err);
    }
  };

  useEffect(() => {
    fetchSpeakers();
  }, []);

  const data = [
      {
        img: Frame3,
        title: "Startups",
        des: "Starting, building, or scaling your Startup? The Tamil Nadu Global Startup Summit 2025 is your launchpad to success.",
        foot: "Scale faster, network smarter, and fund your startup.",
      },
      {
        img: Frame1,
        title: "Investors",
        des: "Discover high-potential startups and game-changing innovations at Tamil Nadu Global Startup Summit 2025.",
        foot: "Discover, connect, and invest in the next big startup.",
      },
      {
        img: Frame4,
        title: "Aspirants",
        des: "Whether you're a student, aspiring entrepreneur, or young innovator, this is your chance to gain knowledge, find opportunities, and take the first step toward building something extraordinary.",
        foot: "Your future starts here : network, learn, and grow.",
      },
      {
        img: Frame2,
        title: "Corporates",
        des: "Explore emerging innovations, engage with future-ready startups and collaborate for strategic growth opportunities.",
        foot: "Collaborate and Transform",
      },
          {
        img: Frame5,
        title: "Ecosystem Enablers",
        des: "Connect with global stakeholders, discover high-impact startups, and collaborate to strengthen the innovation ecosystem.",
        foot: "",
      },
    ];
  return (
    <div style={{ backgroundColor: 'black' }}>
    <NavBar />
  
        <div
  className="bg-cover bg-center flex flex-col w-screen h-screen justify-center items-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="w-full max-w-7xl px-4">
    <div className="flex flex-col gap-5 animate-fadeInLeft mb-5 font-urbanist">
    <h1 className="text-5xl md:text-8xl sm:text-2xl  bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent animate-wave bg-[length:200%_100%]">
   Speakers
</h1>

      <p className="text-white text-2xl animate-fadeInLeft delay-200">
      Be the Voice of Innovation at TNGSS'25
      </p>
    </div>
  </div>
</div>

{/* Card Section */}
<div className="relative z-10 bg-black -mt-32 pt-32">
  <div className="container mx-auto px-4 py-20">
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 sm:px-6">
        {speakers.map((item, index) => (
          <div key={index} className="relative">
            <div ref={(el) => (cardsRef.current[index] = el)} className="will-change-transform">
              <FlippingCardNarrow flipinvert className="rounded-2xl">
                {/* Front of Card */}
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden mt-36">
                  <img
                    src={item.profile_image}
                    className="w-full h-full object-cover object-center absolute inset-0 radius-2xl gradient-border"
                    alt={item.title}
                  
                  />
                  <div className="self-end z-10">
                    <p className="text-2xl font-semibold text-white absolute bottom-7 left-5">
                      {item.name}
                    </p>
                    <p className="text-white absolute bottom-1 left-5">
                      {item.designation}
                    </p>
                  </div>
                </div>

                {/* Back of Card */}
                <GradientBdrCard className="text-left w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black  mt-36">
  <div className="flex flex-col w-80 h-96 p-6 text-white">
    <div className="relative pb-6 ">
      <h3 className="text-l sm:text-l leading-tight">
        Unlock the future of
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">
          innovation
        </span>{' '}
        at <span className="text-l sm:text-l font-bold">Tamil Nadu Global Startup Summit 2025.</span>
      </h3>
    </div>
    <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] mb-5 pr-4">
      {/* Chrome, Safari and Opera */}
      <style jsx>{`
        .flex-1::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <h4 className="text-xl sm:text-2xl font-semibold mb-3">{item.name}</h4>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
        {item.bio}
      </p>
    </div>
  </div>
</GradientBdrCard>
              </FlippingCardNarrow>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  
    
  </div>
  
  );
};
export default Speakers;
