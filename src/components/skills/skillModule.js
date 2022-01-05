import React, { useEffect, useState } from "react"
import { NavBar } from '../navBar/navbar'

export const SkillModule = () => {
    const HTMLobj = {
        name: "HTML",
        img: "https://image.pngaaa.com/949/4178949-middle.png"
    }
    const CSSobj = {
        name: "CSS",
        img: "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
    }
    const JavaScriptobj = {
        name: "JavaScript",
        img: "https://www.clipartmax.com/png/middle/147-1474351_javascript-icon.png"
    }
    const Reactobj = {
        name: "React",
        img: "https://i.stack.imgur.com/kyKz5.png"
    }
    const Pythonobj = {
        name: "Python",
        img: "https://www.pngfind.com/pngs/m/62-626208_python-logo-png-transparent-background-python-logo-png.png"
    }
    const Djangoobj = {
        name: "Django",
        img: "https://w7.pngwing.com/pngs/159/366/png-transparent-django-python-computer-icons-logo-python-text-label-rectangle.png"
    }
    const GitHubobj = {
        name: "GitHub",
        img: "https://img.favpng.com/22/23/23/social-media-github-computer-icons-logo-png-favpng-ari7E0gHBmTSMg57C3wKYxCMb.jpg"
    }
    const SQLobj = {
        name: "SQL",
        img: "https://e7.pngegg.com/pngimages/1013/99/png-clipart-sql-computer-icons-document-file-format-world-wide-web-blue-angle.png"
    }

    const skillsArray = [
        HTMLobj,
        CSSobj, 
        JavaScriptobj, 
        Reactobj, 
        Pythonobj, 
        Djangoobj, 
        GitHubobj, 
        SQLobj
    ]

    return (
        <>
            <h1 className="title">Skills</h1>
            <section className="skills">
               { skillsArray.map((skill) => {
                    return <div className="skillObj"><img src="{skill.img}"></img>{skill.name}</div>
                }) }
            </section>
        </>
    )
}