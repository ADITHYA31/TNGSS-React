import { useState } from 'react';

export default function GradientBdrCard({ className = "", children, bdrwidth = "4px" }) {
    return (
        <div className={`gradient-wraper-card ${className} relative p-[${bdrwidth}] bg-gradient-to-r from-blue-500 to-purple-500`}>
            
            <div className={`card-content w-full h-full overflow-hidden bg-white`}>
                {children}
            </div>
        </div>
    );
}
