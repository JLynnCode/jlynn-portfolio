import React from 'react'

import "./FormStyles.css";

const Form = () => {

    const resumeLink = "https://docs.google.com/document/d/1XLFf1mnjzV3zroo3TmuZJLQBjkJPqaAj2-IeC4tzVJU/edit?usp=sharing";

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
