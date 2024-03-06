import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className=' w-full h-screen pt-1'>
     <motion.div initial={{x:0, opacity:0}} animate={{x:20, opacity:1}} transition={{ease:"easeIn",delay:2, duration:.5}} className='textstruc mt-44 px-20'>
      {["We Create", "Eye-Opening", "Presentations"].map((item,index)=>{
        return  <div className='masker '>
          
               <div className='w-fit flex'>
                {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], delay:3, duration:.5}} className='mr-5 w-[8vw] rounded-md h-[4.5vw] bg-cover bg-center bg-[url("https://assets.awwwards.com/awards/images/2022/09/ochi-cover.jpg")] bg-red-500'></motion.div>)}
               <h1 className="flex items-center uppercase text-[7vw] h-full tracking-tighter leading-[7.1vw] font-['Founders_Grotesk'] font-md">{item}</h1>
               </div>
          </div>
      })}
         
     </motion.div>
     <motion.div initial={{y:0, opacity:0}} animate={{y:-20, opacity:1}} transition={{ease:"easeIn",delay:4, duration:.5}} className='flex items-center justify-between border-t-[1px] border-zinc-700 mt-12 py-5 px-20'>
      {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
        return <motion.p initial={{y:0, opacity:0}} animate={{y:-5, opacity:1}} transition={{ease:"easeIn",delay:5, duration:.5}} className='text-md font-light leading-none'>{item}</motion.p>
      })}
       <div className='start flex items-center gap-5'>
        <motion.div initial={{y:0, opacity:0}} animate={{y:-5, opacity:1}} transition={{ease:"easeIn",delay:6, duration:.5}} className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>start the project</motion.div>
        <motion.div initial={{y:0, opacity:0}} animate={{y:-5, opacity:1}} transition={{ease:"easeIn",delay:7, duration:.5}} className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500 text-white'>
        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
        </motion.div>
       </div>
     </motion.div>
    </div>
  )
}

export default Landing