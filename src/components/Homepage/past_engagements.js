import pastbg from '../../assets/pastengbg.svg?url';
import pastvd from '../../assets/pasteng.png';

export default function PastEngagements() {
  return (
    <section
      className="h-60vh relative px-6 md:px-20 py-10 w-screen min-h-screen overflow-hidden bg-black text-white flex justify-center items-start"
      style={{
        backgroundImage: `url(${pastbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full mt-10 z-10">
        {/* Heading and Text */}
        <div className="flex flex-col md:flex-row md:justify-between md:mb-16 space-y-6 md:space-y-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-left md:text-center">
            Past Engagement
          </h1>
          <p className="text-lg md:text-3xl w-full md:w-1/2">
            Nurtured young entrepreneurs with training programs, bootcamps, and mentorship initiatives to build a strong pipeline of future founders.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex justify-center items-center w-full mt-8 md:mt-0">
          <div
            className="w-full md:w-full h-fit overflow-hidden rounded-2xl"
            style={{ border: `4px solid #fff` }}
          >
            <video
              src="/past_tngss.mp4"
              width="100%"
              height="100%"
              preload="true"
              controls
              autoPlay={false}
              poster={pastvd}
              className="w-full h-auto object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
