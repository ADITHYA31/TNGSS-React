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
          textAlign : 'center',
          display: 'inline-block'
        }}
            >
        {/* The wrapper is responsible for padding */}
            {/* padding will work as border width */}
            <div  className={`button-wraper p-[2px] ${className}`}>
            <div className={`button-cnt ${contCN}`} >
                
            {children}
            </div>
        </div>
      </a>
    </a>
  );
}
