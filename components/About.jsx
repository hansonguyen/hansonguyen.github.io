import React from "react";
import tahoe from "../assets/tahoe.jpg";
import { motion } from "framer-motion"

export default function About() {
    return (
        <section id="about" className="section--about">
            <motion.h1 className="title about--title"
                initial={{opacity: 0, scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
            >
                About
            </motion.h1>
            <div className="about--container">
                <motion.img src={tahoe}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                />
                <motion.div className="about--background"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                >
                    <p>As a second-year computer engineering student at UC Davis with a minor in technology management, I am constantly seeking opportunities to apply the knowledge and skills I am acquiring in the classroom to real-world projects. I am a proactive problem-solver, always eager to learn and grow as a coder, engineer, and individual.</p>
                    <p>In my spare time, I enjoy spending time with my loved ones, working out, and experimenting with new cooking recipes.</p>
                </motion.div>
            </div>
        </section>
    )
}