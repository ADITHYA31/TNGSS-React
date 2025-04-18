import pastbg from '../../assets/pastengbg.svg?url'
import pastvd from '../../assets/pasteng.png'

export default function PastEngagements() {
    return (
        <section className="relative px-20 py-10  w-screen min-h-screen overflow-hidden bg-black text-white flex justify-center items-start "
        style={{
            backgroundImage: `url(${pastbg})`,
          }}>
        
           
            {/* <img
            src= {pastbg}
            fill
            className=" object-cover"
            /> */}
            
            <div className=" w-full  mt-10 z-10">
                <div className="flex justify-between md:mb-16">

                <h1 className=' md:text-center text-4xl md:text-5xl lg:text-7xl font-semi bold mb-6 text-left  '>Past Engagement</h1>
                <p className=" text-3xl w-1/2">Nurtured young entrepreneurs with training programs, bootcamps, and mentorship initiatives to build a strong pipeline of future founders.</p>
                </div>

                <div className="flex  justify-center items-center w-full">
                <div 
                className=" w-full  h-fit overflow-hidden rounded-2xl "
                style={{
                    border: `4px solid #fff`,
                  }}>
                
                            <video
                            src="/past_tngss.mp4"
                            width="100%"
                            height="100%"
                            preload='true'
                            controls
                            autoPlay={false}
                            poster= {pastvd}
                            className=' md:w-full md:h-auto object-fill'
                    />
                </div>
                </div>
            </div>
        </section>
    );
}
