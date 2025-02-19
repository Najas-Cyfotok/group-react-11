
import {Carousel} from 'react-bootstrap';
import photo0 from '../assets/carousel/topp.jpeg'
import photo1 from '../assets/carousel/firstimage.jpeg'
import photo2 from '../assets/carousel/secondimage.jpeg'
import photo3 from '../assets/carousel/threeimage.jpeg'
import photo4 from '../assets/carousel/fourimage.jpeg'

const Hero = () => {
  return (
       
      <Carousel>
        <div className=''>
        <img  src={photo0} alt='' className='px-20 mt-40'/>
        </div>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={photo1} alt='' className='mt-12'/>
        
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={photo2} alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={photo3} alt=''/>
       
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={photo4} alt=''/>
        
      </Carousel.Item>
    </Carousel>
  );
}


export default Hero