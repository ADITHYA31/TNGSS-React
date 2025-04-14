 
import { useState } from 'react';



export default function GradientBdrCard({ className = "", children,}) {
    // const [bdrwidth, setBdrwidth] = useState(bdrwidthi);

    return(
        <div className={`gradient-wraper-card ${className}`}>
            
            <div className={`card-content w-full h-full overflow-hidden`}>
            {children}
            </div>

        </div>
    );

}  