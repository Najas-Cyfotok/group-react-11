import React from 'react'

const HeroSections = () => {
  return (
   <section className=' min-h-screen -z-50'>
    <div className='my-6 mx-10'> 
        <img src="src/assets/image/Hero Image-1.webp" alt="Hero-Section" className='w-[96%] ml-5 mr-10 max-sm:w-[500px] max-sm:h-[150px] max-md:w-[600px] max-md:h-[180px]' />
        </div>
        <div className='my-[49px] mx-[50px] '>
          <h1 className='font-bold text-slate-700 text-3xl tracking-widest max-sm:text-2xl max-sm:text-center max-md:text-center'>NICE TO SEE YOU, COME ON IN!</h1>
        </div>
       <div className='flex mx-[60px] max-md:mx-[40px]'>
        <div className='grid grid-cols-2 gap-2 max-md:grid-cols-1 '>
          <img src="src/assets/image/product-1.jpg" alt=" Product-1" className='w-[440px] h-[400px] py-[30px] hover:scale-110 transition-all max-md:w-[340px] max-md:h-[300px] max-md:py-[15px] max-sm:w-[240px] max-sm:h-[220px]' />
          <img src="src/assets/image/product-2.jpg" alt=" Product-2"  className='w-[440px] h-[400px] py-[30px] hover:scale-110 transition-all max-md:w-[340px] max-md:h-[300px] max-md:py-[15px] max-sm:w-[240px] max-sm:h-[220px]' />
          <img src="src/assets/image/product-3.jpg" alt=" Product-3"  className='w-[440px] h-[400px] py-[30px] hover:scale-110 transition-all max-md:w-[340px] max-md:h-[300px] max-md:py-[15px] max-sm:w-[240px] max-sm:h-[220px]'/>
          <img src="src/assets/image/product-4.jpg" alt=" Product-4"  className='w-[440px] h-[400px] py-[30px]  hover:scale-110 transition-all max-md:w-[340px] max-md:h-[300px] max-md:py-[15px] max-sm:w-[240px] max-sm:h-[220px]'/>
          <img src="src/assets/image/product-5.jpg" alt=" Product-5"  className='w-[440px] h-[400px] py-[30px] hover:scale-110 transition-all max-md:w-[340px] max-md:h-[300px] max-md:py-[15px] max-sm:w-[240px] max-sm:h-[220px]'/>
          <img src="src/assets/image/product-6.jpg" alt=" Product-6"  className='w-[440px] h-[400px]  py-[30px] hover:scale-110 transition-all max-md:w-[340px] max-md:h-[300px] max-md:py-[15px] max-sm:w-[240px] max-sm:h-[220px]'/>
        </div>
       
       <aside className='absolute top-[69%] right-20 mr-[50px] z-10 text-[15px] font-light max-md:right-0 max-md:mr-0 max-md:text-[17px] max-sm:text-[13px]'>
          <div className=''>
          <h1 className='pb-3 max-md:pb-5 max-sm:pb-1'>Furnishings & Bed Linen</h1>
            <ul className=''  >
              {
                list.map((item,index) => (
                <a href="/"><li key={index} className='pt-[4px] max-md:pt-2 hover:underline cursor-pointer'>{item}</li></a>
                ))
              }
            </ul>
          </div>
          <div>
            <h1 className='py-3 max-md:py-6 max-sm:pb-1'>Bath & Bed Linen</h1>
            <ul>
                {
                    list2.map((item,index) => (
                      <a href="/"> <li key={index} className='pt-[4px] max-md:pt-2 max-sm:pt-1  hover:underline cursor-pointer'>{item}</li></a>
                    ))
                }
            </ul>
          </div>
          <div>
            <h1 className='py-3 max-md:py-6 max-sm:pb-1'>Home Decor</h1>
            <ul>
                {
                    list3.map((item,index) => (
                        <a href='/'><li key={index} className='pt-[2px] max-md:pt-2 max-sm:pt-1  hover:underline cursor-pointer' > {item}</li></a>
                    ))
                }
            </ul>
          </div>
          <div>
            <h1 className='py-3 max-md:py-6 max-sm:pb-1'>Lamps & Lighting</h1>
            <ul>
                {
                    list4.map((item,index) => (
                       <a href='/' ><li key={index} className='pt-[4px] max-md:pt-2 max-sm:pt-1  hover:underline cursor-pointer'>{item}</li></a>
                    ))
                }
            </ul>
          </div>
          <div>
            <h1 className='py-3 max-md:py-6 max-sm:pb-1'>Kitchen & Tables</h1>
            <ul>
                {
                    list5.map((item,index) => (
                      <a href="/" ><li key={index} className='pt-[2px] max-md:pt-2 max-sm:pt-1  hover:underline cursor-pointer'>{item}</li></a>
                    ))
                }
            </ul>
          </div>
          <div>
            <h1 className='py-3 max-md:py-6 max-sm:pb-1'>Stroage & Organisers</h1>
            <ul>
                {
                    list6.map((item,index) => (
                       <a href="/"> <li key={index} className='pt-[4px]  max-sm:pt-1 hover:underline cursor-pointer'>{item}</li></a>
                    ))
                }
            </ul>
          </div>
        </aside> 
        </div>
   </section>
  )
}

export default HeroSections

const list =["Bed Sheets", "Bedding Sets & Bed Covers", "Blankets, Quilts & Dohars", "Pillows & Pillow Covers", "Cuhions & Cuhion Covers", "Curtains", "Mats & Dhurries", "Carpets"]
const list2 =["Towels & Towel Sets", "Bath Robes", "Bathroom Accessories", "Shower Curtains", "Bath Rugs"]
const list3 =["Pooja Essentials", "Laptop Table", "Ottomans", "Artificial Flowers & Plants", "Candles & Candle Holders", "Clocks", "Planters & Garden Accessories", "Home Fragrances", "Mirrors", "Wall Art", "Wall Decor","Wall Shelves", " Showpieces & Vases" ]
const list4 = ["Floor Lamps", "Table Lamps", "Wall Lamps & String Lights", "Bathroom Lights & Outdoor Lamps", "Ceiling Lamps"]
const list5 = ["DinnerWare", "Cups & Mugs", "Water Bottels", "BakeWare", "Trays & Serveware", "Bar & Drinkware", "Cookware & Kitchen Tools", "Kitchen Strorage", "Table Covers & Furnishings"]
const list6 = ["Organisers", "Hooks & Hloders"]