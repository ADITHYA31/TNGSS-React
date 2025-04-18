import React from 'react';

export default function GradientBdrCard({ className = '', children }) {
  return (
    <div className={`gradient-border ${className}`}>
      <div className="gradient-inner">
        {children}
      </div>
    </div>
  );
}
