import React from "react";
import tahoe from "../assets/tahoe.jpg";

export default function About() {
    return (
        <section id="about" className="section--about">
            <h1 className="title about--title">About</h1>
            <div className="about--container">
                <img src={tahoe}/>
                <div className="about--background">
                    <p>I am currently a second-year at UC Davis pursuing a Bachelor's Degree in Computer Engineering with a minor in Technology Management. I am interested in using code to develop new things and I am always eager to learn and step outside of my comfort zone. In my spare time, I enjoy spending time with those close to me, working out, and cooking new recipes.</p>
                </div>
            </div>
        </section>
    )
}