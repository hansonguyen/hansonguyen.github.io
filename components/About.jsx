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
                    <p>As a driven and ambitious second-year <strong>Computer Engineering</strong> student at UC Davis, complemented by a minor in Technology Management, I am consistently driven to bridge the gap between theoretical knowledge and practical applications. I enthusiastically seek out opportunities to apply the expertise and skills I am acquiring in the classroom to real-world projects. Embracing a proactive approach to problem-solving, I am fueled by a deep curiosity, perpetually motivated to expand my coding prowess, engineering acumen, and personal development.</p>
                    <p>This upcoming summer, I will be an incoming intern at <a href="https://www.symmetrylaser.com/" target="_blank"><strong>Symmetry Laser</strong></a> where I'll be using <a href="https://www.python.org/" target="_blank"><strong>Python</strong></a> for automation.</p>
                </motion.div>
            </div>
        </section>
    )
}