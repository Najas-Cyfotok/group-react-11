import container from './component/container'
import Navbar from "./component/Navbar"
import Category from "./component/Category"
import ProductSection from "./component/ProductSection"
import Hero from './component/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './component/Card'


const App = () => {
  return (
  <container>
    <main className="bg-white text-black">
      <Navbar />
      <Hero/>
      <Category />
      <ProductSection />
      <Card />
    </main>
  </container>


  )
}

export default App