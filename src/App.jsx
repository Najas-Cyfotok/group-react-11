import React from 'react'
import Navbar from './sections/Navbar'
import HeroSections from './components/HeroSections'
import CardSections from './components/CardSections'
import CompenySections from './components/CompenySections'
import Footer from './components/Footer'

const App = () => {
  return (
   <header>
   <Navbar />
    <section className='py-20 '>
      <HeroSections />
    </section>
    <section>
      <CardSections />
    </section>
    <section>
    <CompenySections />
    </section>
    <footer >
      <Footer />
    </footer>
   </header>
  )
}

export default App