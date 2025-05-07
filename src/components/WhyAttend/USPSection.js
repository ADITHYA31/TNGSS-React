import { useRef } from "react";
// import ParallelScroll from "./ParallelScroll";
// import { useDoomScroll } from "../../../hooks/useDoomScroll";
import backgroundImage from '../../assets/img/usp-background.png';
import { useDoomScroll } from "../../hooks/useDoomScroll";
import ParallelScroll from "./ParallelScroll";

export default function USPSection() {
    const circleRef = useRef(null);
    const mainRef = useRef(null);

    useDoomScroll(mainRef, circleRef);
    return (
        <div className="overflow-x-clip" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // This makes the background fixed
            minHeight: '80vh',
        }}>

            <div ref={mainRef} className="relative flex justify-center">
                <div className="relative flex justify-start items-start h-[60vh] w-screen h-30vh ">
                    <p className="text-white sticky top-10 text-4xl text-center md:text-8xl font-bold md:mb-36 md-10 md:ml-12 mt-5 pl-4">TNGSS USP</p>
                </div>
            </div>

            <div>
                <ParallelScroll />
            </div>

        </div>
    );
}
// "use client"

// import { useRef, useState } from "react"
// import { ChevronRight } from "lucide-react"
// import { useEffect } from "react"
// import { FaArrowRight } from "react-icons/fa"
// import networking from '../../assets/img/networking.png';
// import mobileApp from '../../assets/img/mobileApp.png';
// import meetingspace from '../../assets/img/meeting-space.png';
// import backgroundImage from '../../assets/img/usp-background.png';
// export default function USPSection() {
//   const circleRef = useRef(null)
//   const mainRef = useRef(null)
//   const [activeSlide, setActiveSlide] = useState(0)
//   const totalSlides = 5

//   const uspItems = [
//     {
//       title: "Networking",
//       image: networking,

//     },
//     {
//       title: "Mobile App",
//       image: mobileApp,

//     },
//     {
//       title: "Meeting Spaces",
//       image: meetingspace,
     
//     },
//     {
//       title: "Cloud Services",
//       image: networking,

//     },
//     {
//       title: "Security",
//       image:mobileApp,
//     },
//   ]

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
//   }

//   const goToSlide = (index) => {
//     setActiveSlide(index)
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide()
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="overflow-x-clip bg-black text-white min-h-screen relative">
//       {/* Hero Section */}
//       <div ref={mainRef} className="relative flex justify-center">
//         <div className="relative flex justify-start items-center h-[40vh] w-screen">
//           <h1 className="text-white sticky top-10 text-4xl text-center md:text-7xl font-bold md:ml-12 mt-4">TNGSS USP</h1>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="relative px-4 py-12 focus-slide-animation
//        "
//        key={activeSlide}
//        style={{
//                     backgroundImage: `url(${backgroundImage})`,
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center',
//                     backgroundAttachment: 'fixed', // This makes the background fixed
//                     minHeight: '80vh',
//                 }}
//        >
//         <div className="flex items-end justify-end gap-6 overflow-hidden">
//           {/* Visible cards - show 3 on desktop, 1 on mobile */}
//           <div className="hidden md:block">
//             {activeSlide > 0 ? (
//               <Card item={uspItems[activeSlide - 1]} />
//             ) : (
//               <Card item={uspItems[uspItems.length - 1]} />
//             )}
//           </div>

//           <Card item={uspItems[activeSlide]} isActive={true} />

//           <div className="hidden md:block">
//             {activeSlide < uspItems.length - 1 ? (
//               <Card item={uspItems[activeSlide + 1]} />
//             ) : (
//               <Card item={uspItems[0]} />
//             )}
//           </div>

//           {/* Next Button */}
//           <button 
//             className="absolute right-0  -translate-y-1/2 translate-x-1/2 
//               w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center
//               transition-all duration-300 hover:bg-orange-600 hover:scale-110 custom-arrow-button right-con-2 "
//             onClick={nextSlide}
//           >
//             <FaArrowRight className="text-white text-lg" />
//           </button>
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-end mb-8 space-x-2 md:justify-end">
//           {uspItems.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                 activeSlide === index ? "bg-[#18BFDB] scale-110" : "bg-gray-500"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// function Card({ item, isActive = false }) {
//   return (
//     <div
//       className={`relative rounded-3xl overflow-hidden transition-all duration-500  image-width ${
//         isActive ? "scale-105 z-10" : "scale-90 opacity-80"
//       }`}
//          >
//       {/* Gradient Border */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl p-[2px]`}>
//         <div className="absolute inset-[1px] bg-black rounded-3xl">
//           {/* Content */}
//        <div className="relative h-full w-full overflow-hidden rounded-3xl flex items-center justify-center bg-black">
//   <img
//     src={item.image || "/placeholder.svg"}
//     alt={item.title}
//     className="max-h-full max-w-full object-contain"
//   />

//   {/* Title */}
//   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
//     <h3 className="text-2xl font-bold text-white">{item.title}</h3>
//   </div>
// </div>
//         </div>
//       </div>
//     </div>
//   )
// }