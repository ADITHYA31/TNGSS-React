import React, { useState, useEffect } from 'react';
import NavBar from '../../components/Elements/NavBar';
import Footer from '../../components/Elements/Footer/Footer';
import bgImage from '../../assets/img/image.png';

const Faq = () => {
  const [selectedOption, setSelectedOption] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: ''
  });
  const [faqSections, setFaqSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(`${process.env.STRAPI_URL}/api/faq?pLevel`)
      try {
        const response = await fetch(`${process.env.STRAPI_URL}/api/faq?pLevel`);
        const data = await response.json();
        setFaqSections(data.data.FAQs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
  };

  return (
    <div className="bg-black font-urbanist">
      <div
  className="bg-cover bg-center flex w-full h-[80vh] items-center md:pl-20"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="w-full max-w-7xl px-4 flex">
    {/* Left col-6 with centered content */}
    <div className="w-full md:w-1/2 flex flex-col  gap-5 font-urbanist ">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] 2xl:text-[11rem] text-gradient animate-gradient">
        Faq
      </h1>
      <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl animate-fadeInLeft delay-200">
        Frequently asked questions on TNGSS 2025
      </p>
    </div>

    {/* Right col-6 empty */}
    <div className="hidden md:block w-1/2"></div>
  </div>
</div>



      <div className="flex flex-col items-center py-10 px-5 bg-black w-full">
        {faqSections.map((section, index) => (
          <FaqSection
            key={index}
            sectionNumber={'0' + (index + 1)}
            title={section.category}
            items={section.questions.map(question => ({
              id: question.id,
              title: question.Title,
              content: question.Answer
            }))}
          />
        ))}
      </div>


     
    </div>
  );
};

const FaqSection = ({ sectionNumber, title, items }) => {
  const [activeItemId, setActiveItemId] = useState(
    items.find(item => item.initialExpanded)?.id || null
  );

  const handleItemClick = (itemId) => {
    setActiveItemId(prevId => (prevId === itemId ? null : itemId));
  };

  return (
    <section className="my-5 bg-black rounded-3xl md:rounded-[50px] w-full gradient-border m-3">
      <div className='gradient-inner p-6 md:p-10'>
        <header className="flex items-center mb-5">
          <h2 className="mr-4 text-4xl md:text-5xl sm:text-3xl font-bold text-[#0099ff] text-gradient-1">
            {sectionNumber}
          </h2>
          <h2 className="text-3xl md:text-5xl sm:text-3xl font-bold text-[#0099ff] text-gradient-1">
            {title}
          </h2>
        </header>
        <h3 className="mb-5 text-2xl md:text-4xl font-light text-white ml-4">FAQs</h3>
        <div className="flex flex-col">
          {items.map((item) => (
            <FaqItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              isExpanded={activeItemId === item.id}
              onToggle={() => handleItemClick(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ title, content, id, isExpanded, onToggle }) => {
  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center border-b-2 border-gray-900 p-4 w-full text-xl md:text-2xl font-light text-white hover:bg-gray-900 transition-all"
        onClick={onToggle}
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
          dangerouslySetInnerHTML={{
            __html:content.replace(/\n/g, '<br  />') || ''
          }}
        >
          {/* {content} */}
        </div>
      )}
    </div>
  );
};

export default Faq;