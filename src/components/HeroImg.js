import React from 'react';

import { Link } from "react-router-dom";

import "./HeroImgStyles.css";
import IntroImg from "../assets/hero-bg.jpg";

const HeroImg = () => {
    return (
        <div className= "hero">

            <div className= "mask">
                <img className= "intro-img" src= {IntroImg} alt="IntroImg"/>
            </div>
            
            <div className= "content">
                <h1>Vision to Reality</h1>
                <p>Solving problems. Writing code. Always learning.</p>
                <div className= "hero-btns">
                    <Link to= "/projects" className= "btn btn-light">Projects</Link>
                    <Link to= "/about" className= "btn btn-light">About Me</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg
