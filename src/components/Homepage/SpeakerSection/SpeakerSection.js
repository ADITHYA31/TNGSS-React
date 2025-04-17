import React, { useState } from 'react';
import speaker1 from '../../../assets/image1.png';
import speaker2 from '../../../assets/image2.png';
import speaker3 from '../../../assets/image3.png';

const speakers = [
  { name: 'Speaker A', img: speaker1 },
  { name: 'Speaker B', img: speaker2 },
  { name: 'Speaker C', img: speaker3 }
];

export default function SpeakerCarousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < speakers.length - 1) {  // Don't go beyond last speaker
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {  // Don't go below the first speaker
      setIndex(index - 1);
    }
  };

  return (
    <section className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="flex w-full max-w-screen-xl items-center justify-between px-8 relative">
        {/* Left Speaker Info with smooth transition */}
        <div className="flex-1 text-white relative">
          <h1
            className="text-4xl font-bold absolute top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: 1,  // Always make the speaker name visible
              transition: 'opacity 0.7s ease-in-out',
            }}
          >
            {speakers[index].name}
          </h1>
        </div>

        {/* Right Carousel */}
        <div className="relative w-full sm:w-2/3 h-screen overflow-hidden"> {/* Adjusted height here */}
          <div
           className="absolute top-1/2 transform -translate-y-1/2 flex transition-all duration-700 gap-x-4"
            style={{
              transform: `translateX(-${index * 50}%)`, // Slide the images left
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
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-40">
              <button
                onClick={handlePrev}
                className="text-white bg-gray-800 px-4 py-2 rounded-l-xl"
              >
                ◀
              </button>
            </div>
          )}

          {/* Right Arrow */}
          {index < speakers.length - 1 && (  // Adjust for showing 2 images
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-40">
              <button
                onClick={handleNext}
                className="text-white bg-gray-800 px-4 py-2 rounded-r-xl"
              >
                ▶
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
