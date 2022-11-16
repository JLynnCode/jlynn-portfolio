import React from 'react'

import "./FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import footerimg from "../assets/footer-img.jpeg";

const Footer = () => {
    return (
        <div className= "footer">
            <div className= "footer-container">

                <div className= "left">
                    <div className= "location">
                        <FaHome size= {20} style= {{color: "#fff", marginRight: "2rem"}}/>

                        <div>
                            <p>Currently residing in Memphis, Tennessee</p>
                        </div>
                    </div>

                    <div className= "phone">
                        <h4 font-color= "#fff">
                            <FaPhone size= {20} style= {{color: "#fff", marginRight: "2rem"}}/>
                            1-234-567-8910
                        </h4>
                    </div>

                    <div className= "email">
                        <h4 font-color= "#fff">
                            <FaMailBulk size= {20} style= {{color: "#fff", marginRight: "2rem"}}/>
                            jlynnmail@gmail.com
                        </h4>
                    </div>
                </div>

                <div className= "right">
                    <h4>This page was designed with React.js</h4>
                        <a href= "https://reactjs.org/">
                            <img className= "img" src= { footerimg } alt="reactimg"></img>
                        </a>
                    <p>What can we build together?</p>
                </div>
            </div>
        </div>
    )
}

export default Footer