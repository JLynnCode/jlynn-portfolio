import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import "./AboutContentStyles.css";
import about1 from "../assets/about-img1.avif";
import about2 from "../assets/about-img2.avif";

const AboutContent = () => {
    
      const [githubData, setGithubData] = useState([]);
     
      const fetchData = () => {
    
        return fetch(`https://api.github.com/users/JLynnCode`)
          .then((response) => response.json())
          .then((data) => setGithubData(data));
      }
    
      useEffect(() => {
        fetchData()
      }, []);

    return(
        <div className= "about">
            <div className= "left">
                <div className= "biopic">
                    <img className = "img" src = {githubData.avatar_url} alt= "bio-pic"></img>
                    <p>{githubData.bio}</p>
                </div>
                <p className= "aboutme">
                Jeremy Lynn is an adept associate software developer whose divergent thinking, assiduous work ethic, and scrupulous adaptability are beneficial contributions for any organization.
                <br/><br/> He is a graduate of the FastTrack Java Developer program, with a background in management and customer relations. With a lifelong interest in tech, Jeremy’s self-education provided him with experience developing, maintaining, and troubleshooting applications.
                <br/><br/> Gaining experience with Java frameworks such as Spring Web and Spring Data JPA, as well as JavaScript’s React framework, has strengthened his ever-evolving knowledge base and skill set.
                <br/><br/> Jeremy’s enduring positivity, compassionate altruism, and ardent dedication are a boon to any team he joins.
                </p>
                <Link to= "/contact">
                    <button className= "btn">Contact</button>
                </Link>
            </div>

            <div className= "right">
                <div className = "img-container">
                    <div className= "img-stack top">
                        <img src= { about1 } className= "img" alt= "about-img"/>
                    </div>
                    <div className= "img-stack bottom">
                        <img src= { about2 } className= "img" alt= "about-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent