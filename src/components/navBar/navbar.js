import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const NavBar = () => {
    const history = useHistory()
    return (
        <>
            <section className="navBar">
                <section className="iconContainer">
                    <div className="icon" onClick={() => { history.push(`/`) }}><span class="material-icons">home</span></div>
                    <div className="icon" onClick={() => { history.push(`/projects`) }}><span class="material-icons">folder</span></div>
                    <div className="icon">@</div>
                    <div className="icon">@</div>
                    <div className="icon">@</div>
                </section>
            </section>
        </>
    )
}