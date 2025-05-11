import React from 'react'
import Bg from './components/bg/Bg'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorksSection from './components/WorksSection'
const App = () => {
  return (
  <div className='relative h-full w-full bg-slate-950'>
    <Bg/>
      <Navbar/>
      <HeroSection/>
      <WorksSection/>

    </div>
  )
}

export default App