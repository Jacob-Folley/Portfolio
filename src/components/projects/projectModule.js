import React, { useEffect, useState } from "react"
import { NavBar } from '../navBar/navbar'

export const ProjectModule = () => {
    return (
        <>
            <section className="homeContainer">
                <section className="homeWeb">
                    <div className="exitIcons">
                    </div>
                    <div className="webBar"></div>
                    <div className="webURL">
                        <div className="navIcons">
                            <span class="material-icons">arrow_left</span>
                            <span class="material-icons">arrow_right</span>
                            <span class="material-icons">refresh</span>
                        </div>
                        <div className="urlBar">.   https://jacob-folley.portfolio</div>
                    </div>
                    <h2>PROJECTS</h2>
                    <p id="bio">I am a Software Engineer that specializes in building functional applications that provide users with the best experience.</p>
                </section>

            </section>
            <NavBar />
        </>
    )
}