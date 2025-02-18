import React from 'react'
import Navbar from './sections/Navbar'
import HeroSections from './components/HeroSections'

const App = () => {
  return (
   <header>
   <Navbar />
    <section className='py-20 px-10'>
      <HeroSections />
    </section>
    <section className='py-20 px-10'>
      ProductSections
    </section>
    <section className='py-20 px-10 bg-gray-300'>
      CardSections
    </section>
    <section className='py-20 px-10'>
    CompenySection
    </section>
    <footer className='py-20 px-10'>
      Footer
    </footer>
   </header>
  )
}

export default App