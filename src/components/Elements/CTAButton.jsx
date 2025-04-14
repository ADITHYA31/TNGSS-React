import Link from "next/link";

export default function CTAButton({children=[],className='',contCN='',src='/'}) {

    return(
        <Link href={src} className=" inline-flex overflow-hidden">
            {/* padding will work as border width */}
        <div  className={`button-wraper p-[3px] ${className}`}>
            <div className={`button-cnt ${contCN}`} >
                
            {children}
            </div>
        </div>
        </Link>
    );
}