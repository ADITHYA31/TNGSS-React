import React, { useState } from 'react';
import speaker1 from '../../../assets/image1.png';
import speaker2 from '../../../assets/image2.png';
import speaker3 from '../../../assets/image3.png';
import speakerbg from '../../../assets/speakerbg.png';
import CTAButton from '../../Elements/CTAButton';

const speakers = [
  { name: 'Tim Drapper', desc: 'American Investor', img: speaker1 },
  { name: 'Steve Nouri', desc: 'CEO, GenAI Works', img: speaker2 },
  { name: 'Steve Json ', desc: 'CEO, Abra', img: speaker3 },
  { name: 'Tim Cook', desc: 'Investor', img: speaker1 },
];

export default function SpeakerCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < speakers.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div  className="relative w-full h-screen overflow-hidden py-10"
    style={{ backgroundImage: `url(${speakerbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div
     className="absolute"
    style={{ top: '8%', left: '10%'}}>
    
    <h1 className=" text-8xl font-bold text-white mb-8">Speakers</h1>
    </div>
    <span  className="absolute py-10"
    style={{ top: '20%', left: '10%',borderBottom : '1px solid #fff',width:'23%'}}/>
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
    
      <div className="flex w-full max-w-screen-xl items-center justify-between px-8 relative">
        {/* Left Speaker Info */}
        <div className="text-white relative">
          <p
            className="block pb-10 text-4xl font-bold absolute top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: 1,
              transition: 'opacity 0.7s ease-in-out',
            }}
          >
            {speakers[index].name}
          </p>
          <span className="text-xl" style={{
            
    width: '100%',
    display: 'inline-block',
    padding: '30px 0px 30px 0px',

          }}>{speakers[index].desc}</span>
          <CTAButton src="/new" className=" rounded-2xl ">
            <div className="w-40 h-9 px-5 flex items-center justify-center ">View More</div>
        </CTAButton>
        </div>

        {/* Right Carousel */}
        <div className="relative w-full sm:w-2/3 h-screen overflow-hidden">
          <div
            className="absolute top-1/2 transform -translate-y-1/2 flex transition-all duration-700 gap-x-4"
            style={{
              transform: `translateX(-${index * 50}%)`,
            }}
          >
            {speakers.map((speaker, i) => (
              <div
                key={i}
                className="relative w-1/2 sm:w-1/2 flex-shrink-0 transition-all duration-500"
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {index > 0 && (
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-40">
    <button
      onClick={handlePrev}
      className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition transform duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  </div>
)}


          {/* Right Arrow */}
          {index < speakers.length - 1 && (
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40">
    <button
      onClick={handleNext}
      className="bg-gradient-to-l from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
)}

        </div>
      </div>
    </section>
    </div>
  );
}
