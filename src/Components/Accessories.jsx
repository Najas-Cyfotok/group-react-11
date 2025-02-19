import React from 'react'
import watch1 from '../assets/Watches/Watch1.webp'
import watch2 from '../assets/Watches/Watch2.webp'
import watch3 from '../assets/Watches/Watch3.webp'
import watch4 from '../assets/Watches/Watch4.webp'
import watch5 from '../assets/Watches/Watch5.webp'

const Accessories = () => {
  return (
    <section className="mt-14">
                      <h2 className=" mb-14 ml-5 font-bold text-2xl max-sm:text-lg text-wrap max-sm:text-center" >T R E N D I N G <span className="ml-3"> I N </span> <span className="ml-3"> A C C E S S O R I E S </span> </h2>
                      <div  className=" lg:grid lg:grid-cols-5 lg:mr-16 lg:ml-8 max-sm:mx-10  items-center">
                        <img src={watch1} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                        <img src={watch2} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                        <img src={watch3} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                        <img src={watch4} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                        <img src={watch5} alt="..." className='lg:w-[255px] lg:h-[335px]' />     
                      </div>
                    </section>
  )
}

export default Accessories