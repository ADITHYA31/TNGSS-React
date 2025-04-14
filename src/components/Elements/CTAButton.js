
export default function CTAButton({
  children = [],
  className = '',
  contCN = '',
  src = '/'
}) {
  return (
    <a href={src}>
      <a 
        role="button" 
        className={`inline-flex justify-center items-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-3 transition-all duration-300 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
      >
        {/* The wrapper is responsible for padding */}
        <div className={`button-wrapper p-[3px] ${className}`}>
          <div className={`button-cnt ${contCN}`}>
            {children}
          </div>
        </div>
      </a>
    </a>
  );
}
