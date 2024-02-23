import Image from 'next/image'
import React from 'react'
import AC from '../Assets/noun-project.jpg'
import BS from '../Assets/hand.jpg'


const HomeBanner = () => {
  return (
    <div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 m-20 gap-20'>
        <div className='flex flex-col items-center justify-center h-screen '>

          {/* Typhografy */}
          <h1 className='text-7xl'> Web <span className='text-yellow-500'>Artist</span> </h1>
          
        </div>
         <div>
        <div className='bg-zinc-200 flex items-center justify-center md:h-10 lg:h-1/2 mt-32  shadow-inner shadow-zinc-900 '>
          {/* pic */}

          
        <Image src={BS} className=' w-11/12' alt='pic'/>
       
        </div>

        <Image src={AC} className=' top-20 flex items-center justify-center   h-[5px]' alt='pic'/>
        <a href='/ABUBAKAR_...._2.pdf' target='_blank'>
            <button className='text-3xl mt-20 bg-yellow-300 p-2 rounded-xl shadow-2xl shadow-zinc-400 font-mono hover:font-semibold hover:bg-zinc-200 hover:shadow-inner hover:shadow-yellow-500 duration-200'>Hire me</button>
          </a>
         </div>
        
      </div>
    </div>
  )
}

export default HomeBanner
