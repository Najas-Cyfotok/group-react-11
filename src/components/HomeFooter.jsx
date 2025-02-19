import React from 'react'
import photo1 from '../assets/image2/app-1.png'
import photo2 from '../assets/image2/app-2.png'


const HomeFooter = () => {
  return (
    <section className='min-h-screen bg-gray-50 py-[40px] px-[130px] max-md:px-[30px]'>
        <div className='flex gap-14 max-md:flex-col'>
        <div className='grid grid-cols-2 gap-14 max-md:grid-cols-3 max-md:gap-8 '>
            <div>
                <h1 className='text-[12px] font-bold pb-5'>ONLINE SHOPPING</h1>
                <ul>
                    {
                        list.map((item,index) => (
                            <li key={index} className='text-slate-500 text-[14px] pt-1 cursor-pointer'>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h1 className='text-[12px] font-bold pb-5'>CUSTOMER POLICIES</h1>
                <ul>
                    {
                        list3.map((item,index) => (
                            <li key={index} className='text-slate-500 text-[14px] pt-1 cursor-pointer'>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className=''>
                <h1 className='text-[12px] font-bold pb-5'>USEFUL LINKS</h1>
                <ul>
                    {
                        list2.map((item,index) => (
                            <li key={index} className='text-slate-500 text-[14px] pt-1 cursor-pointer'>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div>
            <h1 className='text-[12px] font-bold'>EXPERIENCE MYNTRA APP ON MOBILE</h1>
            <div className='flex gap-3 py-7'>
          <a href="/"> <img src={photo1} alt="playstore" className='w-[140px]' /></a>
          <a href="/"> <img src={photo2} alt="applestore" className='w-[130px] h-[42px]' /></a>
          </div>
          <h1 className='text-[12px] font-bold'>KEEP IN TOUCH</h1>
          <div className='flex gap-4 py-3 cursor-pointer '>
            <img src="src/assets/facebook.svg" alt="facebook" />
            <img src="src/assets/twitter.svg" alt="twitter" />
            <img src="src/assets/youtube.svg" alt="youtube" />
            <img src="src/assets/instagram.svg" alt="instagram" />
          </div>
        </div>
        <div className='ml-20 max-md:flex max-md:gap-4 max-md:ml-10 max-sm:flex-row max-sm:mx-1 '>
            <div className='flex w-[270px] h-[40px] gap-2 '>
                <img src="src/assets/image2/logo-1.png" alt="logo-1" className='w-[70px] h-[50px] max-sm:w-[45px] max-sm:h-[35px]' />
                <p className='text-[16px] max-sm:text-[12px] text-slate-500'><span className='text-[16px] max-sm:text-[12px] text-black font-bold'>100% ORIGNAL </span> guarantee for all products at myntra.com</p>
            </div>
            <br />
            <div className='flex w-[250px] h-[40px] gap-3'>
                <img src="src/assets/image2/logo-2.png" alt="logo-1" className='w-[80px] h-[50px]  max-sm:w-[45px] max-sm:h-[35px]' />
                <p className='text-[16px] max-sm:text-[12px] text-slate-500'><span className='text-[16px] max-sm:text-[12px] text-black font-bold'>Return within 14days </span>  of receiving your order</p>
            </div>
        </div>
        </div>
        <div className=''>
            <h1 className='text-[12px] font-bold text-slate-800 my-5 max-md:text-[15px] max-md:py-3'>POPULAR SEARCHES  </h1>
            <p className='text-slate-500 text-[16px] w-[1150px] px-2 max-md:w-[600px] max-md:text-center max-sm:w-[430px] max-sm:text-center cursor-pointer'>Pillow | Towels And Towel Sets | Bath Robes | Bathroom Accessories | Bathroom Rugs | Blankets | Cushions | Candles | Photo Frame | Wall Art | Home Decor | Windchimes | Wall Shelves | Wall Stickers & Decals | Candle Holder | Bed Covers | Coasters | Home Furnishing | Clock | Plants & Planters | Scented Candles | Mirrors | Wall Decor | Fountains | Vases | Showpieces | Wall Lamps | Table Lamps | Tableware | Bar & Drinkware | Kitchen Storage | Curtains | Carpets | Bed Sheets | Doormats | Diwans | Face Towels  Hand Towels | Laundry Bags | Key Holders | Aroma Oil Diffusers | Bedding Sets | Bins | Hooks & Holders | Cushion Covers | Pillow Covers | Table Placemats | Table Covers | Runners | Water Bottle</p>
        </div> 
        <div className='px-3 py-10 flex gap-48 cursor-pointer max-md:flex-col max-md:text-center max-md:gap-6 max-md:py-5'>
            <p className='text-[16px] text-slate-600'>In case of any concern, <span className='font-bold text-blue-700'> Contact Us </span></p>
            <p className='text-[16px] text-slate-600'>© 2025 www.myntra.com. All rights reserved.</p>
            <p className='text-[16px] text-slate-600' >A Flipkart company</p>
        </div>
    </section>
   
  )
}

export default HomeFooter

const list = ["Men", "Women", "Kids", "Home & Living", "Beauty", "Gift Cards", "Myntra Insider"]
const list2 = ["Blog", "Careers", "Site Map", "Corporate Information", "Whitehat", "Cleartrip"]
const list3 = ["Contact Us", "FAQ", "T&C", "Terms Of Use", "Track Orders", "Shipping", "Cancellation", "Returns", "Privacy policy", "Grievance Redressal"]















