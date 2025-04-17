import './flip.css'
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
        style={{
          lineHeight: '12px',
        }}
            >
        {/* The wrapper is responsible for padding */}
            {/* padding will work as border width */}
            <div  className={`button-wraper py-1 px-1 ${className}`}>
            <div className={`button-cnt ${contCN}`} >
                
            {children}
            </div>
        </div>
      </a>
    </a>
  );
}
