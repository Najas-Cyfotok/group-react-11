import img1 from '../images/brands/img 1.webp'
import img2 from '../images/brands/img2.webp'
import img3 from '../images/brands/img3.webp'
import img4 from '../images/brands/img4.webp'
import img5 from '../images/brands/img5.webp'
import img6 from '../images/brands/img6.webp'
const Category = () => {
  
  return (
      <div className="tracking-widest text-gray-900 text-2xl font-bold mt-10">
      MEDAL WORTHY BRANDS TO BAG 
      
      
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