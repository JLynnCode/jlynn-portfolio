import React from 'react';

import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Languages from "../components/Languages";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Languages/>
      <Footer/>
    </div>
  )
}

export default Home
