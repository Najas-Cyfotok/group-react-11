import React from 'react'
import Navbar from './sections/Navbar'
import HomeHeroSections from './components/HomeHeroSections'
import HomeCardSections from './components/HomeCardSections'
import HomeCompenySections from './components/HomeCompenySections'
import HomeFooter from './components/HomeFooter'

const App = () => {
  return (
   <header>
   <Navbar />
    <section className='py-20 '>
      <HomeHeroSections />
    </section>
    <section>
      <HomeCardSections />
    </section>
    <section>
    <HomeCompenySections />
    </section>
    <footer >
      <HomeFooter />
    </footer>
   </header>
  )
}

export default App