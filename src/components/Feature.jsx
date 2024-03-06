import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

const Feature = () => {

  const cards = [useAnimation(), useAnimation()];


  const handleHover = (index)=>{
  cards[index].start({y: "0"})
} 


  const handleHoverEnd = (index)=>{
  cards[index].start({y: "100%"})
} 


  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
        <h1 className='text-6xl font-["Neue_Montreal"]'>Featured projects</h1>
      </div>


      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">


          <motion.div
           onHoverStart={()=>handleHover(1)}
           onHoverEnd={()=>handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]">
                <div className="card1 absolute left-[85%] -translate-x-/2 top-1/2 -translate-y-1/2 z-[9]">
                <h1 className='absolute flex left-[85%] -translate-x-/2 top-1/2 -translate-y-1/2 z-[9] overflow-hidden text-8xl leading-none text-[#CDEA68] tracking-tighter'>
  {"FIDE".split('').map((item, index) => (
    <motion.span key={index} initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.76, 0, 0.24, 1], delay: index*.01}} className='inline-block'>
      {item}
    </motion.span>
  ))}
</h1>

                </div>
               


                 <div className='card2 w-full h-full overflow-hidden rounded-xl bg-slate-700'>
              <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                 </div>

          </motion.div>


          <motion.div 
          onHoverStart={()=>handleHover(0)}
          onHoverEnd={()=>handleHoverEnd(0)}
          className="cardcontainer2 relative w-1/2 h-[75vh]">
           

            <div className="card1 absolute right-[85%] -translate-x-/2 top-1/2 -translate-y-1/2 z-[9]">
            <h1 className='absolute flex right-[85%] translate-x-/2 top-1/2 -translate-y-1/2 z-[9] overflow-hidden text-8xl leading-none text-[#CDEA68] tracking-tighter'>
              {"VISE".split('').map((item, index) =>  <motion.span key={index} initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.76, 0, 0.24, 1], delay: index*.01}} className='inline-block'>
      {item}
    </motion.span>)}
            </h1>
                </div>

            <div className='w-full h-full overflow-hidden rounded-xl bg-slate-700'>
              <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
}

export default Feature;
