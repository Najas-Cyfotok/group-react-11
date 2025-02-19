import React from 'react'
import Hero from './Components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import Specialoffers from './Components/Specialoffers';
import Categories from './Components/Categories';
import Brands from './Components/Brands';
import Luxe from './Components/Luxe';
import Traditional from './Components/Traditional';
import Sports from './Components/Sports';
import Footwear from './Components/Footwear';
import Accessories from './Components/Accessories';






const App = () => {
  return (
    <main>
      {/* hero section  */}
      <Hero/>
      <Specialoffers />
      <Categories/>
      <Brands/>
      <Luxe/>
      <Traditional/>
      <Sports/>
      <Footwear/>
      <Accessories/>
      </main>

    
    


  )
}

export default App