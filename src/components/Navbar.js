import React, {useState} from 'react'
import { Link } from "react-router-dom";

import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiSunPriest } from "react-icons/gi";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [bgColor, setBgColor] = useState(false);
    const changeColor = () => {

        if(window.scrollY >= 100){
            setBgColor(true);
        }else{
            setBgColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return (

      <div className= {bgColor ? "header header-bg" : "header"}>

        <Link to= "/">
            <h1>Jeremy Lynn<GiSunPriest/></h1>
        </Link>

        <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to= "/">Home</Link>
            </li>
            <li>
                <Link to= "/about">About</Link>
            </li>
            <li>
                <Link to= "/projects">Projects</Link>
            </li>
            <li>
                <Link to= "/contact">Contact</Link>
            </li>
        </ul>

        <div className= "hamburger" onClick= {handleClick}>

            {click ? (<FaTimes size= {20} style= {{color: "#DEF6FF" }}/>) :
                    (<FaBars size= {20} style= {{color: "#DEF6FF" }}/>)}
        </div>
      </div>
  )
}

export default Navbar
