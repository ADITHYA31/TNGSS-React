import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
// import './index.css';
import bgImage from '../../assets/img/image.png';
import program from '../../assets/img/pro.png'



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


const EventCard = ({ event }) => {
  return (
    <div className="relative flex items-start">
      {/* Left Side - Time and Status */}
      <div className=" flex flex-col items-start">
        <div className="text-white font-semibold">{event.time}</div>
        <span className="bg-[#F5710C] text-white text-xs px-3 py-1 rounded-full mt-1 com-button">
          Completed
        </span>
      </div>

      {/* Center - Orange Ball (will align with vertical line) */}
      <div className="relative flex flex-col items-center w-8">
        <div className="w-6 h-6 rounded-full border-4 border-black bg-[#F5710C] z-10 orange-ball "
            />
      </div>

      {/* Right Side - Main Content */}
      <div className="flex-1  items-start pl-3"
   >
    <div className='gradient-border-wrapper'>
    <span className="inline-block bg-gray-700 text-white py-2 px-3  type-button">
          {event.type}
        </span>

    </div>
 
        <div className="bg-[#1A1A1A]/90 border border-gray-800 rounded-lg overflow-hidden shadow-md">
          <div className="p-4">
            <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
            <p className="text-white text-bold">
              {event.time} - {event.endTime} • {event.location}
            </p>
          </div>

          <div className="border-t border-gray-800 p-4">
            <h4 className="text-[#17BFDB] text-xl font-semibold mb-2 get-text">SPEAKERS</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.speakers.map((speaker, index) => (
                <div key={index} className="text-md">
                  <p className="text-white font-medium">{speaker.name}</p>
                  <p className="text-white text-bold">{speaker.title}</p>
                  <p className="text-white text-bold">{speaker.organization}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 p-4">
            <h4 className="text-[#17BFDB] text-xl font-semibold mb-2 get-text">SESSION HOST</h4>
            <div className="text-md text-white">
              <p className="font-medium">{event.host.name}</p>
              <p className="text-white text-bold">{event.host.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  const EventList = ({ events }) => {
    return (
      <div className="relative">
      {/* Vertical Line */}
      <div 
        className="absolute left-1/6 top-0 bottom-0 w-0.5 bg-gray-600 transform -translate-x-1/2 "
        style={{ marginLeft: '6.2rem' }} // Adjust this to align perfectly with the dots
      />

      {/* Event Cards */}
      <div className="space-y-10">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
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
      time: '10:40 AM',
      endTime: '11.15 AM',
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
      time: '11.15 AM',
      endTime: '12.30 PM',
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
  className="bg-cover bg-center w-screen  flex items-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="w-full max-w-7xl mx-auto px-4  mt-5 flex flex-col md:flex-row items-center justify-between">
    {/* Left Column: Text */}
    <div className="w-full md:w-1/2  md:mb-0 text-white font-urbanist animate-fadeInLeft program-text">
    <h1 className="text-6xl md:text-8xl  text-gradient animate-gradient mb-6">
  Programs
</h1>
      <p className="text-xl sm:text-2xl">
        Exploring the Core of TNGSS'25
      </p>
    </div>

    {/* Right Column: Image */}
    <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden ">
      <img
        src={program}
        alt="Programs"
        className="w-full h-auto object-cover max-h-full program-image "
      />
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 py-8 p-5">
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
            {showPartnerEvents ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="text-4xl font-bold text-gray-400 mb-4">Coming Soon</div>
                <p className="text-xl text-gray-500">Partner events will be announced shortly</p>
              </div>
            ) : (
              <EventList events={events} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

