// import useWebAnimations from "@wellyshen/use-web-animations";
// import React,{useRef, useEffect} from 'react'
// import home from './img/bg.png'
// import logo from './img/logo.png'
// import man from './img/man.gif'
// import anima from './img/bg-5.png'
// import girl from './img/girl.png'
// // import table from './img/Table.png'
// import bag from './img/Bag.png'
// import Home from './components/Home'
// import About from './components/About'
// function App(){

  
//   return (
//     <div className="div">
// {/* <Home /> */}
//       {/* <About /> */}
//     </div>
//   );
// };

// export default App


import React from 'react'
import HomeSec from './components/Home/HomeSec'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


export default function App() {
  return (
    <div className="background">
      <HomeSec/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio />
      <Achievements />
      <Contact/>
      <Footer/>
    </div>
  )
}
