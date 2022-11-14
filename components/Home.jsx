import React from "react"

export default function Home() {
    return (
        <section id="home" className="section--home">
            <h2 className="home--subtitle">Hello! I'm</h2>
            <h1 className="home--title">Hanson</h1>
            <h1 className="home--title">Nguyen</h1>
            <div className="home--container">
                <img src="./assets/profile-pic.jpg" />
            </div>
        </section>
    )
}