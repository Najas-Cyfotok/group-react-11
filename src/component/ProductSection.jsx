
import img1 from '../images/cardimage/img1.webp'
import img2 from '../images/cardimage/img2.webp'
import img3 from '../images/cardimage/img3.webp'
import img4 from '../images/cardimage/img4.webp'
import img5 from '../images/cardimage/img5.webp'
import img6 from '../images/cardimage/img6.webp'
const Category = () => {
  
  return (
      <div className="tracking-widest text-gray-900 text-2xl font-bold mt-10">
      GRAND GLOBAL BRANDS
      
     <div className='flex flex-row mt-10'>
         <div>
              <img src={img1}/>
         </div>
         <div>
         <img src={img2}/>
          </div>
          <div>
          <img src={img3}/>
          </div>
          <div>
          <img src={img4}/>
          </div>
          <div>
          <img src={img5}/>
          </div>
          <div>
          <img src={img6}/>
          </div>
     </div>
      </div>


    
  )
}

export default Category