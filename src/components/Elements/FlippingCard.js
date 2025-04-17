import React from 'react';
import './flip.css'; // ensure this is imported

export default function FlippingCard({ children, className = '', flipinvert = false }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const frontContent = childrenArray[0] || 'Front';
  const backContent = childrenArray[1] || 'Back';

  return (
    <div className={`flip-card w-80 h-96 ${className}`}>
      <div className={`flip-inner ${flipinvert ? 'invert' : ''}`}>
        <div className="flip-front">
          {frontContent}
        </div>
        <div className="flip-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}
