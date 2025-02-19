import React from 'react'
import { Carousel } from 'react-bootstrap'
import photo1 from '../assets/Courosel/img1.webp'
import photo2 from '../assets/Courosel/img2.webp'
import photo3 from '../assets/Courosel/img3.webp'
import photo4 from '../assets/Courosel/img4.webp'
import photo5 from '../assets/Courosel/img5.webp'


const Hero = () => {
  return (
        <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={photo1} alt=""/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={photo2} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={photo3} alt="" />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={photo4} alt="" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={photo5} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}

export default Hero