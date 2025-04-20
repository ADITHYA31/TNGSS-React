import CTAButton from '../CTAButton';
import './custom.css';
import '../../Elements/custom.css'
import facebook from '../../../assets/facebook.svg?url';
import insta from '../../../assets/insta.svg?url'
import yt from '../../../assets/yt.svg?url'
import LinkedIn from '../../../assets/LinkedIn.svg?url'
import X from '../../../assets/x.svg?url'


export default function Footer() {

    const data=[
        {
            img: facebook,
            link:'/',
        },
        {
            img : insta,
            lik:'/',
        },
        {
            img: yt,
            link:'/',
        },
        {
            img: LinkedIn,
            link:'/',
        },
        {
            img: X,
            link:'/',
        },

    ]
    return(
        <div className="bg-white isolate">
        <div className=" flex flex-col bg-[#18BFDB]  h-[60vh] md:rounded-t-[60px] overflow-hidden" style={{
                         borderRadius : "50px 23px 0px 0px"
                        }}>
        <div className=" inline-flex whitespace-nowrap w-full  animate-marking text-black font-medium text-4xl md:text-4xl space-x-16 py-3 pt-5 ">
        {Array(7).fill("3rd-4th May, 2025 . Codissia, Coimbatore").map((text, index) => (
            <div key={index} className='space-x-16'>
                <span >{text}</span>
                {index < 6 && <span>|</span>}
            </div>
        ))}



        </div>
        <div className=" z-10 bg-black h-full md:rounded-t-[70px]  overflow-hidden flex flex-col " style={{
                         borderRadius : "50px 23px 0px 0px"
                        }}>
            <div className=" safe-cont relative flex items-center justify-center h-full w-full group ">
                <div className='md:hidden flex absolute top-0 group-hover:flex flex-col items-center justify-end md:items-center md:justify-center   md:bg-black/50  w-full h-full text-9xl z-20 transition-all duration-700 rounded-t-[70px] pointer-events-none '>
                    <div className='flex w-fit space-x-4 pointer-events-auto text-lg mt-32 max-md:mb-10'>
                    <CTAButton src="/#" className=" rounded-2xl ">
            <div className="w-50 h-9 px-5 flex items-center justify-center ">   DOWNLOAD APP</div>
        </CTAButton>

        <CTAButton src="/#" className=" rounded-2xl ">
            <div className="w-50 h-9 px-5 flex items-center justify-center "> REGISTER NOW</div>
        </CTAButton>

                        
                    </div>
                </div>
                <div className=' flex w-full h-full group-hover:blur-xs justify-center items-center'>

                <p className=" text-center text-8xl md:text-9xl font-medium tracking-widest  group-hover:-rotate-6 transition-all duration-300">
                    DISRUPT TO RISE
                </p>
                </div>
            </div>

            <div className=" safe-cont flex max-md:flex-col text-xl font-medium  w-full py-2 max-md:gap-4  md:justify-between items-center">
                <div className=' max-md:order-2 px-10'><p>Contact@ <a href="mailto:contact@tngss.startuptn.in">tngss.startuptn.in</a></p> <p>All Rights reserved © 2025</p></div>
                <div className=' flex justify-around gap-2 md:gap-3'>
                {data.map((item, index) => (
                    <a key={index} href={item.a} className="relative rounded-full w-11 h-11  ">
                        <img 
                        src={item.img} 
                        fill
                        alt={`Image ${index + 1}`} 
                        quality={30}
                        className=" object-center object-contain" />
                    </a>
                ))}
                </div>
                <div className='flex gap-7 self-center order-3'><p>Terms & Conditions</p><p>Privacy Policy</p></div>

            </div>
        </div>
    </div>
    </div>
    );

}







// import CTAButton from '../CTAButton';
// import './custom.css';
// import facebook from '../../../assets/facebook.svg?url';
// import insta from '../../../assets/insta.svg?url'
// import yt from '../../../assets/yt.svg?url'
// import LinkedIn from '../../../assets/LinkedIn.svg?url'
// import X from '../../../assets/x.svg?url'


// export default function Footer() {

//     const data=[
//         {
//             img: facebook,
//             link:'/',
//         },
//         {
//             img : insta,
//             lik:'/',
//         },
//         {
//             img: yt,
//             link:'/',
//         },
//         {
//             img: LinkedIn,
//             link:'/',
//         },
//         {
//             img: X,
//             link:'/',
//         },

//     ]

//     return(
//         <div className="bg-white isolate">
//         <div className=" flex flex-col bg-[#18BFDB]  h-[60vh] rounded-t-[48px] md:rounded-t-[60px] overflow-hidden text-white">
//         <div className=" inline-flex whitespace-nowrap w-full  animate-marquee text-black font-medium text-4xl md:text-6xl space-x-16 py-3 pt-5 ">
//         {Array(7).fill("3rd-4th May, 2025 . Codissia, Coimbatore").map((text, index) => (
//             <div key={index} className='space-x-16'>
//                 <span >{text}</span>
//                 {index < 6 && <span>|</span>}
//             </div>
//         ))}



//         </div>
//         <div className=" z-10 bg-black h-full rounded-t-[48px] md:rounded-t-[70px]  overflow-hidden flex flex-col ">
//             <div className=" safe-cont relative flex items-center justify-center h-full w-full group ">
//                 <div className='md:hidden flex absolute top-0 group-hover:flex flex-col items-center justify-center md:items-center md:justify-center   md:bg-black/50  w-full h-full text-9xl z-20 transition-all duration-700 rounded-t-[70px] pointer-events-none '>
//                 <p className=" md:hidden text-center text-6xl md:text-9xl max-md:mt-9 font-medium tracking-widest  group-hover:-rotate-6 transition-all duration-300">
//                     DISRUPT TO RAISE
//                 </p>
//                     <div className='flex w-fit space-x-4 pointer-events-auto text-lg mt-7 md:mt-24 '>
//                         <CTAButton className=' rounded-full ' contCN='p-3'>
//                             DOWNLOAD APP
//                         </CTAButton>
//                         <CTAButton className=' rounded-full ' contCN='p-3'>
//                             REGISTER NOW
//                         </CTAButton>
//                     </div>
//                 </div>
//                 <div className='hidden md:flex w-full h-full group-hover:blur-xs  justify-center  items-center'>

//                 <p className=" text-center md:text-8xl lg:text-9xl max-md:mt-9 font-medium tracking-widest  group-hover:-rotate-6 transition-all duration-300">
//                     DISRUPT TO RAISE
//                 </p>
//                 </div>
//             </div>

//             <div className=" safe-cont flex max-md:flex-col text-xl font-medium  w-full py-2 max-md:gap-4  md:justify-between items-center">
//                 <div className=' max-md:order-2'><p>Contact@ <a href="mailto:contact@tngss.startuptn.in">tngss.startuptn.in</a></p> <p>All Rights reserved © 2025</p></div>
//                 <div className=' flex justify-around gap-2 md:gap-3'>
//                 {data.map((item, index) => (
//                     <a key={index} href={item.a} className="relative rounded-full w-11 h-11  ">
//                         <img 
//                         src={item.img} 
//                         fill
//                         alt={`Image ${index + 1}`} 
//                         quality={30}
//                         className=" object-center object-contain" />
//                     </a>
//                 ))}
//                 </div>
//                 <div className='flex gap-7 self-center order-3'><p>Terms & Conditions</p><p>Privacy Policy</p></div>

//             </div>
//         </div>
//     </div>
//     </div>
//     );

// }