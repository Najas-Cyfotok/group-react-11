import React from 'react'
import lax1 from '../assets/Laxe/Laxe1.webp'
import lax2 from '../assets/Laxe/Laxe2.webp'
import lax3 from '../assets/Laxe/Laxe3.webp'
import lax4 from '../assets/Laxe/Laxe4.webp'
import lax5 from '../assets/Laxe/Laxe5.webp'
import lax6 from '../assets/Laxe/Laxe6.webp'

const Luxe = () => {
  return (
    <section className="mt-14">
    <h2 className=" mb-14 ml-5 font-bold text-2xl max-sm:text-lg text-wrap max-sm:text-center">M Y N T R A <span className="ml-3">L U X E</span></h2>
    <div  className=" lg:grid lg:grid-cols-6 lg:mr-16 lg:ml-8 max-sm:mx-10  justify-center">
        <img src={lax1} alt='' className='lg:w-[208px] lg:h-[273px]' />
        <img src={lax2} alt='' className='lg:w-[208px] lg:h-[273px]' />
        <img src={lax3} alt='' className='lg:w-[208px] lg:h-[273px]' />
        <img src={lax4} alt='' className='lg:w-[208px] lg:h-[273px]' />
        <img src={lax5} alt='' className='lg:w-[208px] lg:h-[273px]' />
        <img src={lax6} alt='' className='lg:w-[208px] lg:h-[273px]' />

        </div>
            </section>
  )
}

export default Luxe