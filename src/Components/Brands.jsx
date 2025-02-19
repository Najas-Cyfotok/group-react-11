import React from 'react'
import bds1 from '../assets/Brands/Brand1.webp'
import bds2 from '../assets/Brands/Brand2.webp'
import bds3 from '../assets/Brands/Brand3.webp'
import bds4 from '../assets/Brands/Brand4.webp'
import bds5 from '../assets/Brands/Brand5.webp'

const Brands = () => {
  return (
    <section className="mt-14">
              <h2 className=" mb-14 ml-5 font-bold text-2xl max-sm:text-lg text-wrap max-sm:text-center">E X P L O R E <span className="ml-3">T O P</span> <span className='ml-3'>B R A N D S</span> </h2>
              <div  className=" lg:grid lg:grid-cols-5 lg:mr-16 lg:ml-8 max-sm:mx-10  items-center">
                <img src={bds1} alt='...' className='lg:w-[243px] lg:h-[373px]' />
                <img src={bds2} alt='...' className='lg:w-[243px] lg:h-[373px]' />
                <img src={bds3} alt='...' className='lg:w-[243px] lg:h-[373px]' />
                <img src={bds4} alt='...' className='lg:w-[243px] lg:h-[373px]' />
                <img src={bds5} alt='...' className='lg:w-[243px] lg:h-[373px]' />
            
              </div>
            </section>
  )
}

export default Brands