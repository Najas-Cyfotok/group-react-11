import React from 'react'
import trade1 from '../assets/Traditional/traditional1.webp'
import trade2 from '../assets/Traditional/traditional2.webp'
import trade3 from '../assets/Traditional/traditional3.webp'
import trade4 from '../assets/Traditional/traditional4.webp'
import trade5 from '../assets/Traditional/traditional5.webp'

const Traditional = () => {
  return (
    <section className="mt-14">
              <h2 className=" mb-14 lg:ml-5 max-sm:mx-10 font-bold lg:text-2xl max-sm:text-lg text-wrap max-sm:text-center ">T R E N D I N G <span className="ml-4"> I N </span> <span className="ml-5"> I N D I A N </span><span>  </span> <span className="ml-6"> W E A R </span></h2>
        <div  className=" lg:grid lg:grid-cols-5 lg:mr-16 lg:ml-8 max-sm:mx-10  justify-center">
            <img src={trade1} alt='' className='lg:w-[255px] lg:h-[335px]' />
            <img src={trade2} alt='' className='lg:w-[255px] lg:h-[335px]' />
            <img src={trade3} alt='' className='lg:w-[255px] lg:h-[335px]' />
            <img src={trade4} alt='' className='lg:w-[255px] lg:h-[335px]' />
            <img src={trade5} alt='' className='lg:w-[255px] lg:h-[335px]' />
            </div>
                </section>
  )
}

export default Traditional