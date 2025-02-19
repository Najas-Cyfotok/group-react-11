import React from 'react'
import foot1 from '../assets/Shoe/Shoe1.webp'
import foot2 from '../assets/Shoe/Shoe2.webp'
import foot3 from '../assets/Shoe/Shoe3.webp'
import foot4 from '../assets/Shoe/Shoe4.webp'
import foot5 from '../assets/Shoe/Shoe5.webp'

const Footwear = () => {
  return (
    <section className="mt-14">
                  <h2 className=" mb-14 ml-5 font-bold text-2xl max-sm:text-lg text-wrap max-sm:text-center" >T R E N D I N G <span className="ml-3"> I N </span> <span className="ml-3"> F O O T W E A R </span> </h2>
                  <div  className=" lg:grid lg:grid-cols-5 lg:mr-16 lg:ml-8 max-sm:mx-10  items-center">
                    <img src={foot1} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                    <img src={foot2} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                    <img src={foot3} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                    <img src={foot4} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                    <img src={foot5} alt="..." className='lg:w-[255px] lg:h-[335px]' />
                   
                  </div>
                </section>
  )
}

export default Footwear