import React from 'react'

import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Project = () => {
  return(
    <div>
      <Navbar/>
      <HeroImg2 heading= "Projects" text= "A collection of enterprise solutions"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
