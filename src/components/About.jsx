import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] text-black rounded-tl-2xl rounded-tr-2xl'>
     <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw]'>Ochi is a strategic partner for fast-growing tech <br /> businesses that need to raise funds, sell products, <br />explain complex ideas, and hire great people.</h1>
     <div className='w-full border-t-[1px] mt-20 pt-10 border-[#92a452] flex gap-5'>
          <div className='w-1/2'>
               <h1 className='text-7xl tracking-tighter'>Our approach:</h1>
               <button className='flex items-center gap-10 px-10 py-4 mt-10 bg-zinc-900 rounded-full text-white uppercase'>Read More
               <div className='w-2 h-2 bg-white rounded-full'></div>
               </button>
          </div>
          <div className='w-[90vh] h-[62vh] rounded-2xl bg-slate-600 overflow-hidden'>
               <img className='object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
          </div>
     </div>
    </div>
  )
}

export default About