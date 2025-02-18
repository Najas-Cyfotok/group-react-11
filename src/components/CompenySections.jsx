import React from 'react'
import photo1 from '../assets/image2/compeny-head.jpg'

import photo2 from '../assets/image2/compeny-1.webp'
import photo3 from '../assets/image2/compeny-2.webp'
import photo4 from '../assets/image2/compeny-3.webp'
import photo5 from '../assets/image2/compeny-4.webp'
import photo6 from '../assets/image2/compeny-5.webp'

const CompenySections = () => {
  return (
    <section className='h-[450px] max-md:h-[600px] '>
        <div className='mx-[60px]'>
            <img src={photo1} alt="compeney-head" className='max-md:w-full max-md:h-20 max-sm:h-16'/>
        </div>
        <div className='grid grid-cols-5 gap-4  px-[40px] ml-10 max-md:grid-cols-2 max-sm:grid-cols-2 '>
        <img src={photo2} alt="compeney-1" className='hover:scale-110 transition-all max-sm:w-[200px]'/>
        <img src={photo3} alt="compeney-2" className='hover:scale-110 transition-all max-sm:w-[200px]' />
        <img src={photo4} alt="compeney-3"  className='hover:scale-110 transition-all max-sm:w-[200px]'/>
        <img src={photo5} alt="compeney-4" className='hover:scale-110 transition-all max-sm:w-[200px]'/>
        <img src={photo6} alt="compeney-5" className='hover:scale-110 transition-all max-sm:w-[200px] '/>
        </div>
    </section>
  )
}

export default CompenySections