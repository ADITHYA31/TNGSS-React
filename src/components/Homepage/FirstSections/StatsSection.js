import { useRef } from 'react';
import useStackingAnimation from '../../../hooks/useStackingAnimation';
import '../../Elements/custom.css';
import BG from "../../../assets/statsbg.svg?url";


export default function StatsSection({ className = '' }) {
  const contentRef = useRef(null);
  useStackingAnimation(contentRef);

  const data= [
    // {
    //   count:'',
    //   tag:'',
    // }
    { count: 10, tag: 'International Pavilions' },
    { count: 100, tag: 'Ecosystem Partners' },
    { count: 30000, tag: 'Attendees' },
    { count: 1000, tag: 'Stalls' },
    { count: 100, tag: 'Side Events' },
    { count: 100, tag: 'Investor Connects' },
    { count: 100, tag: 'Speakers' },
    { count: 75, tag: 'Incubation Participation' },
  
  ]

  return (
    <section
  ref={contentRef}
  style={{
    background:
      'linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)',
    borderRadius: '0.75rem',
  }}
  className={`sticky overflow-hidden top-0 w-full h-60vh lg:h-screen z-10 p-2 ${className} `}
  id="stats-section"
>

      <div
        className="flex flex-col lg:flex-row items-center justify-around gap-28 bg-white w-full h-full relative px-4 py-6 lg:px-10 lg:py-0  "
        style={{ borderRadius: '25px' }}
      >
        <img
        src={BG}
        fill
        priority
        className=' absolute inset-0 object-cover object-center -z-0'
        />
        {/* Mobile Header */}
        <div className="block lg:hidden text-center mb-4">
  <p className="text-black text-2xl sm:text-3xl font-semibold">
    Grow with A dynamic community
  </p>
</div>


        {/* Rotated Text: Only on large screens */}
        <div className='hidden lg:flex flex justify-center items-center relative h-full w-xs max-w-[100vh]'>
          <div className='absolute flex justify-center -rotate-90 w-[calc(100vh-1rem)] pl-14'>
            <p className='relative text-black md:text-8xl font-semibold mx-auto'>
              Grow with A dynamic community
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-2 lg:gap-x-72 lg:gap-y-20 z-10 mr-64">
  {data.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center lg:items-start text-center lg:text-left"
    >
      <p className="text-3xl sm:text-4xl lg:text-8xl font-bold gradient-text">
        {item.count}+
      </p>
      <p className="text-black text-sm sm:text-lg lg:text-3xl mt-2">
        {item.tag}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
