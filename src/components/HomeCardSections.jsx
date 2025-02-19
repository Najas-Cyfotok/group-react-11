import React from 'react'
import photo1 from '../assets/image/image-2/card-1.jpg'
import photo2 from '../assets/image/image-2/car-2.jpg'
import photo3 from '../assets/image/image-2/card-3.jpg'

const HomeCardSections = () => {
  return (
    <section className='min-h-screen bg-[#EFEDEE]'>
        <div className=''>
            <img src="src/assets/image/image-2/card-head.jpg" alt="card-head" className='max-md:w-full max-md:h-24' />
        </div>
        <div className='grid grid-cols-3 gap-2 mx-[50px] max-md:mx-[60px] max-sm:grid-cols-1 max-md:grid-cols-1'>
            <img src={photo1} alt="card-1" className='hover:scale-110 transition-all max-md:hover:scale-105 ' />
            <img src={photo2} alt="card-2" className='hover:scale-110 transition-all max-md:hover:scale-105'  />
            <img src={photo3} alt="card-3" className='hover:scale-110 transition-all max-md:hover:scale-105' />
        </div>
    </section>
  )
}


export default HomeCardSections