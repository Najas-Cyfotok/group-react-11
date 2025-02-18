import React from 'react'

const HeroSections = () => {
  return (
   <section className='relative min-h-screen -z-50'>
    <div className='my-6'> 
        <img src="src/assets/image/Hero Image-1.webp" alt="Hero-Section" className='w-[96%] ml-5 mr-10' />
        </div>
        <div className='my-[49px] mx-[50px]'>
          <h1 className='font-bold text-slate-700 text-3xl tracking-widest'>NICE TO SEE YOU, COME ON IN!</h1>
        </div>
       <div className='flex mx-[20px]'>
        <div className='grid grid-cols-2 gap-2  '>
          <img src="src/assets/image/product-1.jpg" alt=" Product-1" className='w-[440px] h-[340px] my-8 ' />
          <img src="src/assets/image/product-2.jpg" alt=" Product-2"  className='w-[440px] h-[340px] my-8' />
          <img src="src/assets/image/product-3.jpg" alt=" Product-3"  className='w-[440px] h-[340px] my-8'/>
          <img src="src/assets/image/product-4.jpg" alt=" Product-4"  className='w-[440px] h-[340px] my-8'/>
          <img src="src/assets/image/product-5.jpg" alt=" Product-5"  className='w-[440px] h-[340px] my-6'/>
          <img src="src/assets/image/product-6.jpg" alt=" Product-6"  className='w-[440px] h-[340px] my-6'/>
        </div>
       
       <aside className='absolute right-[90px] top-[21%] text-[15px] font-light cursor-pointer'>
          <div className=''>
          <h1 >Furnishings & Bed Linen</h1>
          <br />
            <ul className=''  >
              {
                list.map((item,index) => (
                  <li key={index} className='space-y-2 hover:underline cursor-pointer'>{item}</li>
                ))
              }
            </ul>
          </div>
          <div>
            <br />
            <h1>Bath & Bed Linen</h1>
            <br />
            <ul>
                {
                    list2.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
          </div>
          <div>
            <br />
            <h1>Home Decor</h1>
            <br />
            <ul>
                {
                    list3.map((item,index) => (
                        <li key={index} > {item}</li>
                    ))
                }
            </ul>
          </div>
          <div>
            <br />
            <h1>Lamps & Lighting</h1>
            <br />
            <ul>
                {
                    list4.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
          </div>
          <div>
            <br />
            <h1>Kitchen & Tables</h1>
            <br />
            <ul>
                {
                    list5.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
          </div>
          <div>
            <br />
            <h1>Stroage & Organisers</h1>
            <br />
            <ul>
                {
                    list6.map((item,index) => (
                        <li key={index}>{item}</li>
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