'use client'
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';
import AB from '../Assets/What-is-a-Project-1-scaled.jpg'
import AS from '../Assets/unlockImg-4.jpg'
import AC from '../Assets/noun-project.jpg'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='mt-32 rounded-full '>
       <Slider  
       autoplay
       speed={1000}
       >
        
        <div className="slide  "><Image src={AB}  className='w-full h-full rounded-3xl shadow-2xl shadow-zinc-800'  alt='slider'/>
        
        </div>
        <div className="slide  ">
            <Image src={AC} className=' w-full h-full rounded-3xl shadow-inner shadow-zinc-800' alt='slider'/>
        </div>
     
    </Slider>
    </div>
  )
}

export default Banner
