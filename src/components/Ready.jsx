import React, { useEffect, useState } from 'react'

const Ready = () => {
     const [rotate, setRotate] = useState(0);


     useEffect(()=>{
          window.addEventListener("mousemove", (e)=>{
               let mouseX = e.clientX;
               let mouseY = e.clientY;
               let deltaX = mouseX - window.innerWidth / 2;
               let deltaY = mouseY - window.innerHeight / 2;

               var angle = Math.atan2(deltaY , deltaX) * (180/Math.PI);
               setRotate(angle-180);
          })
     })
     return (
          <div className='relative w-full h-[150vh] bg-[#CDEA68]'>

               <div className="content">
               <h1 className='text-[180px] text-center pt-[140px] font-semibold text-black uppercase tracking-[-15px] leading-none'>Ready</h1>
               <h1 className='text-[180px] text-center font-semibold text-black uppercase tracking-[-15px] leading-none'>To Start</h1>
               <h1 className='text-[180px] text-center font-semibold text-black uppercase tracking-[-15px] leading-none'>The Project <span>?</span></h1>
               <button className='flex items-center ml-[40%] gap-10 px-10 py-4 mt-10 bg-zinc-900 rounded-full text-white uppercase'>start the project
                    <div className='w-2 h-2 bg-white rounded-full'></div>
               </button>
               <p className='text-black text-2xl pt-4 uppercase text-center'>or</p>
               <button className='flex items-center ml-[40%] gap-10 px-10 py-4 mt-10 border-[1px] border-zinc-700 rounded-full text-black uppercase'>hello@ochi.design
                    <div className='w-2 h-2 bg-black rounded-full'></div>
               </button>
               </div>

               <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overlay w-1/2 h-1/2">
               <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center'>
                    <div className='relative w-[10vw] h-[10vw] bg-black rounded-full'>
                         <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                              <div className='w-8 h-8 bg-white rounded-full'></div>
                         </div>
                    </div>
               </div>
               <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-[15vw] h-[15vw] bg-white rounded-full flex items-center justify-center'>
                    <div className=' relative w-[10vw] h-[10vw] bg-black rounded-full'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                              <div className='w-8 h-8 bg-white rounded-full'></div>
                         </div>
                    </div>
               </div>
               </div>

          </div>
     )
}

export default Ready