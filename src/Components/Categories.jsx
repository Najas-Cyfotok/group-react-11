import React from 'react'
import part1 from '../assets/Catogories/Cat1.webp'
import part2 from '../assets/Catogories/Cat2.webp'
import part3 from '../assets/Catogories/Cat3.webp'
import part4 from '../assets/Catogories/Cat4.webp'
import part5 from '../assets/Catogories/Cat5.webp'
import part6 from '../assets/Catogories/Cat6.webp'
const Categories = () => {
  return (
    <section className="mt-14">
          <h2 className=" mb-14 ml-5 font-bold text-2xl max-sm:text-lg text-wrap max-sm:text-center">C A T E G O R I E S <span className="ml-3">T O </span> <span className="ml-3">B A G</span></h2>
          <div  className=" lg:grid lg:grid-cols-6 lg:mr-16 lg:ml-8 max-sm:mx-10  items-center">
            <img src={part1} alt="..." className='lg:w-[208px] lg:h-[250px]' />
            <img src={part2} alt="..." className='lg:w-[208px] lg:h-[250px]' />
            <img src={part3} alt="..." className='lg:w-[208px] lg:h-[250px]' />
            <img src={part4} alt="..." className='lg:w-[208px] lg:h-[250px]' />
            <img src={part5} alt="..." className='lg:w-[208px] lg:h-[250px]' />
            <img src={part6} alt="..." className='lg:w-[208px] lg:h-[250px]' /> 
          </div>
        </section>
  )
}

export default Categories