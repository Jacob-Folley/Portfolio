import React, { useEffect, useState } from "react"
import { NavBar } from '../navBar/navbar'

export const ContactModule = () => {


    return (
        <>
            <h1 className="title">Contact</h1>
            <section className="contact">
                <form>
                    <div className="nameEmail">
                    <input type="text" id="name" name="name" placeholder="name"></input>
                    <input type="text" id="email" name="email" placeholder="email"></input>
                    </div>
                    <div className="subject"><input type="text" id="subject" name="subject" placeholder="subject"></input></div>
                    <textarea type="text" id="message" name="message" placeholder="message"></textarea>
                    <div className="submitButton"><button type="submit">send</button></div>
                </form>
            </section>
        </>
    )
}