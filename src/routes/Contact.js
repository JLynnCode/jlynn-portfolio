import React from 'react'

import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Form from '../components/Form';
import Footer from "../components/Footer";


const Contact = () => {
  return(
    <div>
      <Navbar/>
      <HeroImg2 heading= "Contact Me" text= "I would love to hear more about you, your project, and how I can help!" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
