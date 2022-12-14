import React from 'react'

import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
    return(
        <div className= "work-container">
            <h1 className= "project-heading">Collected Works</h1>
            <p className= "project-subhead">Under continual development to implement planned improvements.</p>
            <div className= "project-container">
                { WorkCardData.map((value, index) => {
                    return(
                        <WorkCard 
                            key= {index}
                            imgsrc= {value.imgsrc}
                            title= {value.title}
                            text= {value.text}
                            view= {value.view}
                            source= {value.source}
                        />
                    );
                }) }
            </div>
        </div>
    );
}

export default Work;
