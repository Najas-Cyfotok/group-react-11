import React from 'react'
import sport1 from '../assets/Sports/one.webp'
import sport2 from '../assets/Sports/two.webp'
import sport3 from '../assets/Sports/three.webp'
import sport4 from '../assets/Sports/four.webp'
import sport5 from '../assets/Sports/five.webp'

const Sports = () => {
  return (
    <section className="mt-14">
              <h2 className=" mb-14 ml-5 font-bold text-2xl max-sm:text-lg text-wrap max-sm:text-center" >T R E N D I N G <span className="ml-3"> I N </span> <span className="ml-3"> S P O R T S </span> <span className="ml-3">W E A R</span></h2>
              <div  className=" lg:grid lg:grid-cols-5 lg:mr-16 lg:ml-8 max-sm:mx-10  items-center">
                <img src={sport1} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                <img src={sport2} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                <img src={sport3} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                <img src={sport4} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                <img src={sport5} alt="..." className='lg:w-[255px] lg:h-[335px]' />
              </div>
            </section>
  )
}

export default Sports