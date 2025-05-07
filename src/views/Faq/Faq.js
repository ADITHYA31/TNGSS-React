import React, { useState } from 'react';
import NavBar from '../../components/Elements/NavBar';
import Footer from '../../components/Elements/Footer/Footer';
import bgImage from '../../assets/img/image.png';
import GradientBdrCard from '../../components/Elements/GradientBorderCard';



const Faq = () => {
  const [selectedOption, setSelectedOption] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: ''
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };


  
  const faqSections = [
    {
      sectionNumber: "01",
      title: "GENERAL",
      items: [
        {
          id: "general1",
          title: "General",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
          initialExpanded: true,
        },
        {
          id: "general2",
          title: "Registration",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "general3",
          title: "App",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "general4",
          title: "Startups",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
      ],
    },
    {
      sectionNumber: "02",
      title: "REGISTRATION",
      items: [
        {
          id: "registration1",
          title: "General",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "registration2",
          title: "Registration",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "registration3",
          title: "App",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "registration4",
          title: "Startups",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
      ],
    },
    {
      sectionNumber: "03",
      title: "APP",
      items: [
        {
          id: "app1",
          title: "General",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "app2",
          title: "Registration",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "app3",
          title: "App",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "app4",
          title: "Startups",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
      ],
    },
    {
      sectionNumber: "04",
      title: "STARTUPS",
      items: [
        {
          id: "startups1",
          title: "General",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "startups2",
          title: "Registration",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "startups3",
          title: "App",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "startups4",
          title: "Startups",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
      ],
    },
    {
      sectionNumber: "05",
      title: "INVESTORS",
      items: [
        {
          id: "investors1",
          title: "General",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "investors2",
          title: "Registration",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "investors3",
          title: "App",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "investors4",
          title: "Startups",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
      ],
    },
    {
      sectionNumber: "06",
      title: "CORPORATES",
      items: [
        {
          id: "corporates1",
          title: "General",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "corporates2",
          title: "Registration",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "corporates3",
          title: "App",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
        {
          id: "corporates4",
          title: "Startups",
          content: "Here you'll find answers to the most common questions about our platform. We cover everything from basic functionality to advanced features.",
        },
      ],
    },
  ];
  

  return (
    <div className="bg-black font-urbanist">
      <NavBar />
      <div
        className="bg-cover bg-center flex flex-col w-full h-screen justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full max-w-7xl px-4 pt-32 mt-5">
          <div className="flex flex-col gap-5 mb-5 font-urbanist">
            <h1 className="text-4xl md:text-8xl bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              FAQ
            </h1>
            <p className="text-white text-xl md:text-2xl">
            Frequently asked questions on TNGSS 2025
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-10 px-5 bg-black w-full">
        {faqSections.map((section, index) => (
          <FaqSection
            key={index}
            sectionNumber={section.sectionNumber}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
      <div className="min-h-screen w-full flex gap-5 items-center justify-center ">
      <div className="w-full  flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/3 p-6 md:p-10 md:ml-16">
          <h1 className="text-4xl md:text-5xl font-light mb-10 get-text mr-2">Get In Touch</h1>

          <div className="space-y-6">
            {/* Phone Option */}
            <div className="flex items-center">
              <div
                className={`w-5 h-5 border-2 flex items-center justify-center mr-3 cursor-pointer transition-colors ${
                  selectedOption === 'phone' ? 'border-orange-500 bg-orange-500' : 'border-white'
                }`}
                onClick={() => handleOptionChange('phone')}
              >
                {selectedOption === 'phone' && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-white">Phone No</span>
            </div>

            {/* Email Option (Default) */}
            <div className="flex items-center">
              <div
                className={`w-5 h-5 border-2 flex items-center justify-center mr-3 cursor-pointer transition-colors ${
                  selectedOption === 'email' ? 'border-orange-500 bg-orange-500' : 'border-white'
                }`}
                onClick={() => handleOptionChange('email')}
              >
                {selectedOption === 'email' && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-white">Email Address</span>
            </div>

            {/* Address Option */}
            <div className="flex items-center">
              <div
                className={`w-5 h-5 border-2 flex items-center justify-center mr-3 cursor-pointer transition-colors ${
                  selectedOption === 'address' ? 'border-orange-500 bg-orange-500' : 'border-white'
                }`}
                onClick={() => handleOptionChange('address')}
              >
                {selectedOption === 'address' && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-white">Address</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className=" md:w-2/3 signup-bg rounded-lg p-8 md:p-12 min-w-screen">
          <h2 className="text-white text-3xl font-light mb-4">Sign Up</h2>
          <p className="text-gray-300 mb-8">Drop your email and we will keep you updated!</p>

          <form onSubmit={handleSubmit}>
            {/* Show email field only when email is selected */}
            {selectedOption === 'email' && (
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">
                  Email Address<span className="text-white-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-length p-3 bg-white rounded focus:border-orange-500 focus:outline-none w-full"
                  required
                />
              </div>
            )}

            {/* Show phone field only when phone is selected */}
            {selectedOption === 'phone' && (
              <div className="mb-6">
                <label htmlFor="phone" className="block text-white mb-2">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white rounded focus:border-orange-500 focus:outline-none input-length"
                  required
                />
              </div>
            )}

            {/* Show address field only when address is selected */}
            {selectedOption === 'address' && (
              <div className="mb-6">
                <label htmlFor="address" className="block text-white mb-2">
                  Address<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full input-length p-3 bg-white rounded focus:border-orange-500 focus:outline-none min-h-[100px]"
                  required
                />
              </div>
            )}

            <div className="flex justify-start">
              <button
                type="submit"
                className="relative px-10 py-3 uppercase font-medium text-white rounded-full overflow-hidden"
                style={{
                  background: 'transparent',
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(90deg, #0070f3, #ff4d4d)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    
    </div>
  );
};

const FaqSection = ({ sectionNumber, title, items }) => {
  return (
    <section className=" my-5 bg-black  rounded-3xl md:rounded-[50px] w-full  gradient-border m-3"
    >
      <div className='gradient-inner p-6 md:p-10'>
      <header className="flex items-center mb-5 ">
        <h2 className="mr-4 text-4xl md:text-5xl sm:text-3xl font-bold text-[#0099ff] text-gradient">{sectionNumber}</h2>
        <h2 className="text-3xl md:text-5xl sm:text-3xl font-bold text-[#0099ff] text-gradient">{title}</h2>
      </header>
      <h3 className="mb-5 text-2xl md:text-4xl font-light text-white ml-4">FAQs</h3>
      <div className="flex flex-col ">
        {items.map((item) => (
          <FaqItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            initialExpanded={item.initialExpanded}
          />
        ))}
      </div>
      </div>
   
    </section>
  //   <GradientBdrCard className=" my-5 w-full max-w-7xl rounded-3xl md:rounded-[50px] bg-black">
  //   <header className="flex items-center flex-wrap mb-5 p-6 md:p-">
  //     <h2 className="mr-4 text-4xl sm:text-3xl md:text-5xl font-bold text-[#0099ff] text-gradient">
  //       {sectionNumber}
  //     </h2>
  //     <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-[#0099ff] text-gradient">
  //       {title}
  //     </h2>
  //   </header>

  //   <h3 className="mb-5 text-2xl md:text-4xl font-light text-white ml-1 md:ml-4">
  //     FAQs
  //   </h3>

  //   <div className="flex flex-col space-y-4">
  //     {items.map((item) => (
  //       <FaqItem
  //         key={item.id}
  //         id={item.id}
  //         title={item.title}
  //         content={item.content}
  //         initialExpanded={item.initialExpanded}
  //       />
  //     ))}
  //   </div>
  // </GradientBdrCard>
  );
};

const FaqItem = ({ title, content, id, initialExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center border-b-2 border-gray-900  p-4 w-full text-xl  md:text-2xl font-light text-white  hover:bg-gray-900 transition-all"
        onClick={toggleExpansion}
        aria-expanded={isExpanded}
        aria-controls={`faq-content-${id}`}
      >
        {title}
  <div className="orange-circle">
          <span className="text-white text-xl font-bold">
            {isExpanded ? "-" : "+"}
          </span>
        </div>
      </button>
      {isExpanded && (
        <div
          id={`faq-content-${id}`}
          className="px-4 py-2 text-white text-base md:text-xl border-l-2 border-blue-500 "
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Faq;