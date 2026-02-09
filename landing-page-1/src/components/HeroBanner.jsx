import React from 'react';

const HeroBanner = ()=>{
return(

<section className="max-w-[1400px] mx-auto p-4">


<div className="uppercase rounded-sm relative h-[400px] bg-indigo-600  flex items-center justify-center">

<div className="flex flex-col items-start z-10">
          
          <h2 className="text-white font-bold leading-tight mb-6">
            <span className="text-5xl block mb-2">UP TO 50% OFF</span>
            <span className="text-2xl lowercase first-letter:uppercase text-indigo-100">
              Winter Electronics
            </span>
          </h2>

          <button className="bg-white text-indigo-600 rounded font-bold px-8 py-3 text-lg hover:scale-105 transition-transform">
            SHOP NOW
          </button>
          
        </div>



   <div className="absolute right-[-20px] bottom-[-50px] text-[300px] opacity-20 pointer-events-none">
          🎧
        </div>






</div>





</section>

);

}


export default HeroBanner;