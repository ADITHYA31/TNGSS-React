import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
// import './index.css';
import bgImage from '../../assets/img/image.png';


// FilterDropdown Component
const FilterDropdown = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="w-full flex items-center justify-between bg-gray-800 text-white rounded-md px-4 py-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <ChevronDown 
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg">
          <ul className="py-1">
            {options.map((option) => (
              <li key={option}>
                <button
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 ${
                    selected === option ? 'text-cyan-500' : 'text-white'
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// FilterSection Component
const FilterSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-gray-400 text-sm mb-2 text-xl">Select Hall</h3>
        <FilterDropdown 
          options={['ALL']} 
          selected="ALL" 
          onChange={() => {}} 
          className="filter-dropdown-toggle"
        />
      </div>
      
      <div>
        <h3 className="text-gray-400 text-sm mb-2 text-xl">Location</h3>
        <FilterDropdown 
          options={['ALL']} 
          selected="ALL" 
          onChange={() => {}} 
        />
      </div>
      
      <div>
        <h3 className="text-gray-400 text-sm mb-2 text-xl">Format</h3>
        <FilterDropdown 
          options={['ALL']} 
          selected="ALL" 
          onChange={() => {}} 
        />
      </div>
      
      <div>
        <h3 className="text-gray-400 text-sm mb-2 text-xl">Tags</h3>
        <FilterDropdown 
          options={['ALL']} 
          selected="ALL" 
          onChange={() => {}} 
        />
      </div>
      
      <div>
        <h3 className="text-gray-400 text-sm mb-2 text-xl">Timeslot</h3>
        <FilterDropdown 
          options={['ALL']} 
          selected="ALL" 
          onChange={() => {}} 
        />
      </div>
      
      <button className="reset-text transition text-sm font-medium">
        RESET FILTERS
      </button>
    </div>
  );
};

// DateSelector Component
const DateSelector = ({ activeDay, setActiveDay }) => {
  const dates = [
    { day: 'WED', date: '28' },
    { day: 'THU', date: '29' },
    { day: 'FRI', date: '30' }
  ];

  return (
    <div className="flex space-x-2">
      {dates.map((date) => (
        <button
          key={date.day}
          className={`w-16 h-16 rounded-md flex flex-col items-center justify-center transition-all ${
            activeDay === date.day 
              ? 'bg-cyan-500 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setActiveDay(date.day)}
        >
          <span className="text-sm font-medium">{date.day}</span>
          <span className="text-xl font-bold">{date.date}</span>
        </button>
      ))}
    </div>
  );
};

// EventCard Component
const EventCard = ({ event }) => {
  return (
    // <div className="relative">
    //   <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full mt-1"></div>
      
    //   <div className="ml-8">
    //     <div className="flex items-center mb-2">
    //       <div className="text-gray-300 font-medium mr-4">{event.time}</div>
    //       <div className="bg-cyan-500 text-xs font-medium px-3 py-1 rounded-full mr-4">
    //         Completed
    //       </div>
    //       <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-md">
    //         {event.type}
    //       </div>
    //     </div>
        
    //     <div className="bg-gray-900 border border-gray-800 rounded-md overflow-hidden">
    //       <div className="p-4">
    //         <h3 className="text-xl font-medium mb-1">{event.title}</h3>
    //         <p className="text-gray-400 text-sm">
    //           {event.time} - {event.endTime} • {event.location}
    //         </p>
    //       </div>
          
    //       <div className="border-t border-gray-800 p-4">
    //         <h4 className="text-cyan-500 text-sm font-medium mb-3">SPEAKERS</h4>
    //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    //           {event.speakers.map((speaker, index) => (
    //             <div key={index} className="text-sm">
    //               <p className="font-medium">{speaker.name}</p>
    //               <p className="text-gray-400">{speaker.title}</p>
    //               <p className="text-gray-400">{speaker.organization}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
          
    //       <div className="border-t border-gray-800 p-4">
    //         <h4 className="text-cyan-500 text-sm font-medium mb-3">SESSION HOST</h4>
    //         <div className="text-sm">
    //           <p className="font-medium">{event.host.name}</p>
    //           <p className="text-gray-400">{event.host.title}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
<div className="relative pl-10">
  <div className="flex flex-row items-start space-x-4">
    {/* Time + Completed */}
    <div className="flex flex-col items-start space-y-2">
      <div className="text-white font-semibold">{event.time}</div>
      <span className=" text-white text-xs px-3 py-1 rounded-full com-button">
        Completed
      </span>
    </div>

    {/* Orange Dot + Line */}
    <div className="flex flex-col items-center mt-1">
      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
      <div className="w-px h-10 bg-gray-600"></div>
    </div>

    {/* Type Button + Below Card */}
    <div className="flex flex-col space-y-4">
      <div>
      <span className="type-button rounded-xl py-2 px-3 
      "
   >
        {event.type}
      </span>
      </div>
    

      {/* Event Content Card */}
      <div className="bg-[#1A1A1A]/90 border border-gray-800 rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
          <p className="text-gray-400 text-sm">
            {event.time} - {event.endTime} • {event.location}
          </p>
        </div>

        {/* Speakers */}
        <div className="border-t border-gray-800 p-4">
          <h4 className="sub-text text-sm font-semibold mb-2">SPEAKERS</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.speakers.map((speaker, index) => (
              <div key={index} className="text-sm">
                <p className="text-white font-medium">{speaker.name}</p>
                <p className="text-gray-400">{speaker.title}</p>
                <p className="text-gray-400">{speaker.organization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Host */}
        <div className="border-t border-gray-800 p-4">
          <h4 className="sub-text  text-sm font-semibold mb-2">SESSION HOST</h4>
          <div className="text-sm text-white">
            <p className="font-medium">{event.host.name}</p>
            <p className="text-gray-400">{event.host.title}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

// EventList Component
const EventList = ({ events }) => {
  return (
    <div className="space-y-8">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

// Main App Component
function App() {
  const [activeDay, setActiveDay] = useState('WED');
  const [showPartnerEvents, setShowPartnerEvents] = useState(false);
  
  const events = [
    {
      id: 1,
      time: '10:00 AM',
      endTime: '10:40 AM',
      title: 'Integrating Open Source: Adoption & Collaboration',
      location: 'Hall 204A&B - Codissia',
      type: 'Opening Session',
      completed: true,
      speakers: [
        {
          name: 'Shri. Dammu Ravi',
          title: 'Secretary (Economic Relations)',
          organization: 'Ministry of External Affairs, Government of India'
        },
        {
          name: 'Mr. Kris Gopalakrishnan',
          title: 'Chair TNGSB2025',
          organization: 'Co'
        }
      ],
      host: {
        name: 'Mr. Yashraj Erande',
        title: 'Managing Director & Partner, Global Head of Fintech and India Head of FI, Boston Consulting Group (BCG)'
      }
    },
    {
      id: 2,
      time: '10:00 AM',
      endTime: '10:40 AM',
      title: 'Smart App vs. Super App: The Ultimate Showdown',
      location: 'Hall 204A&B - Codissia',
      type: 'Opening Session',
      completed: true,
      speakers: [
        {
          name: 'Shri. Dammu Ravi',
          title: 'Secretary (Economic Relations)',
          organization: 'Ministry of External Affairs, Government of India'
        },
        {
          name: 'Mr. Kris Gopalakrishnan',
          title: 'Chair TNGSB2025',
          organization: 'Co'
        }
      ],
      host: {
        name: 'Mr. Yashraj Erande',
        title: 'Managing Director & Partner, Global Head of Fintech and India Head of FI, Boston Consulting Group (BCG)'
      }
    },
    {
      id: 3,
      time: '10:00 AM',
      endTime: '10:40 AM',
      title: 'Seamless Transactions: The Digital Shift in Commercial Payments',
      location: 'Hall 204A&B - Codissia',
      type: 'Opening Session',
      completed: true,
      speakers: [
        {
          name: 'Shri. Dammu Ravi',
          title: 'Secretary (Economic Relations)',
          organization: 'Ministry of External Affairs, Government of India'
        },
        {
          name: 'Mr. Kris Gopalakrishnan',
          title: 'Chair TNGSB2025',
          organization: 'Co'
        }
      ],
      host: {
        name: 'Mr. Yashraj Erande',
        title: 'Managing Director & Partner, Global Head of Fintech and India Head of FI, Boston Consulting Group (BCG)'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
                <div
  className="bg-cover bg-center flex flex-col w-screen h-screen justify-center items-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="w-full max-w-7xl px-4 pt-32 mt-5">
    <div className="flex flex-col gap-5 animate-fadeInLeft mb-5 font-urbanist text-white">
    <h1 className="text-6xl md:text-8xl sm:text-2xl  ">
Programs
</h1>

      <p className="text-white text-2xl animate-fadeInLeft delay-200">
     Exploring the Core of TNGSS'25
      </p>
    </div>
  </div>
</div>
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        {/* Top navigation row */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0 bg-gray-600 pl-3 pr-3 p-2 ">
          <DateSelector 
            activeDay={activeDay} 
            setActiveDay={setActiveDay} 
          />
<div className="rounded-full bg-white  p-1 inline-flex">
  <button 
    className={`px-4 py-1 text-sm rounded-full transition 
      ${!showPartnerEvents ? 'btn-active' : 'btn-inactive'}`}
    onClick={() => setShowPartnerEvents(false)}
  >
    Main events
  </button>

  <button 
    className={`px-4 py-1 text-sm rounded-full transition 
      ${showPartnerEvents ? 'btn-active' : 'btn-inactive'}`}
    onClick={() => setShowPartnerEvents(true)}
  >
    Partner events
  </button>
</div>

        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left sidebar */}
          <div className="lg:col-span-1">
            <FilterSection />
          </div>
          
          {/* Main content area */}
          <div className="lg:col-span-3">
            <div className=" rounded-md p-4 mb-8 bg-gradient-blur">
              <div className="flex items-center text-lg font-medium justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>28th August 2024</span>
              </div>
            </div>
            
            <EventList events={events} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;