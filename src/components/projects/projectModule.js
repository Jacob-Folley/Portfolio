import React, { useEffect, useState } from "react"
import { NavBar } from '../navBar/navbar'

export const ProjectModule = () => {
    return (
        <>
            <h1 className="title">Projects</h1>
            <section className="project">
                <div className="projectPage">
                    <img src="https://maxcdn.bootstrapcdn.com/bootstrap/"></img>
                    SlideShow
                </div> 
                <div className="projectInfo">
                    This is where I will talk about the project. Description, followed by why I decided to make it. 
                </div>
            </section>

            <section className="project">
                <div className="projectInfo1">
                    This is where I will talk about the project. Description, followed by why I decided to make it. 
                </div>
                <div className="projectPage">
                    <img src="https://maxcdn.bootstrapcdn.com/bootstrap/"></img>
                    SlideShow
                </div> 
            </section>


            <section className="project">
                <div className="projectPage">
                    <img src="https://maxcdn.bootstrapcdn.com/bootstrap/"></img>
                    SlideShow
                </div> 
                <div className="projectInfo">
                    This is where I will talk about the project. Description, followed by why I decided to make it. 
                </div>
            </section>
        </>
    )
}