import React, { useRef, useEffect, useState } from 'react';

const focusItems = [
  { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-1.png'), borderColor: '#2f80ed' },
  { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-2.png'), borderColor: '#f2994a' },
  { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-3.png'), borderColor: '#56ccf2' },
  { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-1.png'), borderColor: '#2f80ed' },
  { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-2.png'), borderColor: '#f2994a' },
];

const FocusAreasSection = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const section = scrollRef.current;

    const handleWheel = (e) => {
        const inSection =
          window.scrollY + window.innerHeight > section.offsetTop &&
          window.scrollY < section.offsetTop + section.offsetHeight;
  
        if (!inSection) return;
  
        const scrollContainer = container;
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const atStart = scrollContainer.scrollLeft <= 0;
        const atEnd = scrollContainer.scrollLeft >= maxScrollLeft - 1;
  
        // If we are not at edges, prevent vertical scroll
        if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
          e.preventDefault();
          scrollContainer.scrollBy({
            left: e.deltaY,
            behavior: 'smooth',
          });
        }
      };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [locked]);

  const sectionStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '4rem 0',
    fontFamily: 'Urbanist, sans-serif',
    overflow: 'hidden',
  };

  const cardStyle = (borderColor) => ({
    minWidth: '300px',
    marginRight: '1.5rem',
    flex: '0 0 auto',
    border: `2px solid ${borderColor}`,
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '1.5rem',
    cursor: 'pointer',
  });

  const overlayStyle = {
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    borderRadius: '20px',
  };

  const scrollContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
  };

  return (
    <div style={sectionStyle} ref={containerRef}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Key Areas to Focus</h2>
        <div ref={scrollRef} style={scrollContainerStyle}>
          {focusItems.map((item, index) => (
            <div key={index} style={{
              ...cardStyle(item.borderColor),
              backgroundImage: `url(${item.image})`,
              minWidth: index === focusItems.length - 1 ? '300px' : 'calc(100% / 3)',
            }}>
              <div style={overlayStyle}></div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h5 className="fw-bold">{item.title}</h5>
                <p style={{ fontSize: '0.9rem' }}>{item.description}</p>
                <a href="#" className="text-white fw-semibold">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusAreasSection;