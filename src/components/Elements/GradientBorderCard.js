import React from 'react';

export default function GradientBdrCard({ className = '', children, bdrwidth = '4px' }) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        border: '4px solid',
        borderImage: 'linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)',
        borderImageSlice: 1,
        borderRadius: '3px', // or any background behind the border
      }}
    >
      <div className="card-content w-full h-full overflow-hidden rounded-[inherit]">
        {children}
      </div>
    </div>
  );
}
