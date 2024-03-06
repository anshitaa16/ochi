 import React from 'react'
 import Navb from "./components/Navb"
 import Landing from "./components/Landing"
 import Marqee from './components/Marqee'
 import About from "./components/About"
 import Eyes from './components/Eyes'
 import Feature from './components/Feature'
 import Cards from './components/Cards'
 import Ready from './components/Ready'
 import Footer from './components/Footer'
 import LocomotiveScroll from 'locomotive-scroll';
 
 const App = () => {

const locomotiveScroll = new LocomotiveScroll();

   return (
     <div className='app w-full min-h-screen text-white bg-zinc-900'>
      <Navb />
      <Landing/>
      <Marqee/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
      <Ready/>
      <Footer/>
     </div>
   )
 }
 
 export default App