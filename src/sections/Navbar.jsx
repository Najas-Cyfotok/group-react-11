import React from 'react'

const Navbar = () => {
  return (
    <section className=' w-full h-[80px] border shadow-md fixed bg-white z-50 '>
        <div className='flex flex-cols '>
            <div className='relative top-5 px-[52px]'>
                <img src="public/Myntra-icon-logo.svg" alt="logo" width={52} height={50} className='cursor-pointer min' />
            </div>
            <div className='absolute top-[29px] pl-4 max-sm:hidden max-md:hidden'>
                <ul className='flex justify-start items-center px-[100px] '>
                    <li className='px-[18px] font-bold text-[14px] text-slate-800 cursor-pointer hover:border-b-4 pb-6 border-[#fa073c]' >MEN</li>
                    <li className='px-[18px] font-bold text-[14px] text-slate-800 cursor-pointer hover:border-b-4 pb-6 border-[#fa07da]'>WOMEN</li>
                    <li className='px-[18px] font-bold text-[14px] text-slate-800 cursor-pointer hover:border-b-4 pb-6 border-[#fa6807]'>KIDS</li>
                    <li className='px-[18px] font-bold text-[14px] text-slate-800 cursor-pointer hover:border-b-4 pb-6 border-[#fae607]'>HOME & LIVING</li>
                    <li className='px-[18px] font-bold text-[14px] text-slate-800 cursor-pointer hover:border-b-4 pb-6 border-[#038c81]'>BEAUTY</li>
                    <li className='px-[18px] font-bold text-[14px] text-slate-800 cursor-pointer hover:border-b-4 pb-6 border-red-600'>STUDIO</li>
                </ul>
            </div>
            <div className=' absolute top-[20px] right-[210px] max-sm:right-24'>
                <input type="text" placeholder='Search for Products, brands and more' className='pl-[50px] w-[360px] h-[40px] text-[14px] max-md:w-[300px] max-sm:w-[270px] font-light outline-none rounded bg-gray-100' />
                <img src="public/search.svg" alt="search-icon" className='absolute top-[14px] mx-4 w-[14px] cursor-pointer' />
            </div>
            <div className='absolute right-5 top-6 flex   '>
                <div className='cursor-pointer hover:border-b-4 pb-3 border-red-600 px-3 '>
                <img src="public/user.svg" alt="user" width={20} className='ml-1' />
                <p className='text-center text-[12px] font-bold '>Profile</p>
                </div>
                <div className='px-3 max-sm:hidden'>
                <img src="public/heart.svg" alt="user" width={20} className='ml-3 ' />
                <p className='text-center text-[12px] font-bold'>Wishlist</p>
                </div>
                <div className='px-3 max-sm:hidden'>
                <img src="public/shopping-bag.svg" alt="user" width={20} className=''/>
                <p className='text-center text-[12px] font-bold'>Bag</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Navbar

const list = ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO" ]