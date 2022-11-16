import React from 'react'

import "./WorkCardStyles.css";
import { IoLogoGithub } from 'react-icons/io';
import { GoLogoGithub } from 'react-icons/go';

const WorkCard = (props) => {
    return(
        <div className= "project-card">
            
                    <img src= { props.imgsrc } alt="project-img"/>
                    <h2 className= "project-title">{ props.title }</h2>

                    <div className= "project-details">
                        <p>{ props.text }</p>

                        <div className= "project-btns">
                            <a href= { props.view } className= "btn"><IoLogoGithub size={35}/><GoLogoGithub size={35}/></a>
                        </div>
                    </div>
                </div>
    );
}

export default WorkCard
