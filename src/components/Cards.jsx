import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-white flex items-center px-16 gap-5'>
     <div className="cardcontainer w-1/2 h-[60vh]">
          <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
               <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
               <button className='absolute px-5 py-1 border-2 border-[#CDEA68] rounded-full left-10 bottom-10 text-[#CDEA68]'>&copy;2019-2022</button>
          </div>
     </div>
     <div className="cardcontainer w-1/2 h-[60vh] flex gap-5">
          <div className="card relative w-1/2 h-full rounded-xl bg-black flex items-center justify-center">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-5 py-1 border-2 tracking-tighter rounded-full left-10 bottom-10 uppercase'>rating 5.0 on clutch</button>

          </div>
          <div className="card relative w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-5 py-1 border-2 tracking-tighter rounded-full left-10 bottom-10 uppercase'>business bootcamp allumni</button>


          </div>
     </div>
    </div>
  )
}

export default Cards