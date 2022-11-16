import React from 'react'

import "./FormStyles.css";

const Form = () => {

    const resumeLink = "https://docs.google.com/document/d/16zFEs-Zri3KnExLdQ43Vi4ph15Eb1r6s/edit?usp=share_link&ouid=106817555572372441876&rtpof=true&sd=true";

    return(
        <div className= "form">
            <form>
                <div className= "contact-btns">
                    <div className= "resumebtn">
                        <a href= { resumeLink } className= "btn">View/Download Resume</a>
                    </div>
                    <div className= "resumebtn">
                        <a href= "mailto:jlynnmail@gmail.com?subject='Response to Portfolio'" className= "btn">Email Jeremy</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form