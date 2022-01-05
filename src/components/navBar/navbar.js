import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const NavBar = () => {
    const history = useHistory()
    return (
        <>
            <section className="navBar">
                <section className="iconContainer">
                    <div className="icon" ><a href="#homeAnchor">bio</a></div>
                    <div className="icon" ><a href="#projectAnchor">projects</a></div>
                    <div className="icon"><a href="#skillsAnchor">skills</a></div>
                    <div className="icon"><a href="#contactAnchor">contact</a></div>
                </section>
            <div className="socials">
                <div className="social"><a href="https://github.com/Jacob-Folley" target="_blank">Github</a></div>
                <div className="social"><a href="https://www.linkedin.com/in/jacobfolley/" target="_blank">LinkedIn</a></div>
                <div className="social"><a> Resume</a></div>
            </div>
            </section>
        </>
    )
}