import React from 'react'


import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from '../components/AboutContent';
import Footer from "../components/Footer";

const About = () => {

  return(
    <div>
      <Navbar/>
      <HeroImg2 heading= "Hi, I'm Jeremy!" text= "A junior developer with an immutable passion for coding. Always Learning, collaborating, creating — what's not to love?"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About