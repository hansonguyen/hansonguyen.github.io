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
                    <p>I am currently a second-year at UC Davis pursuing a Bachelor's Degree in Computer Engineering with a minor in Technology Management. I am interested in using code to develop new things and I am always eager to learn and step outside of my comfort zone. In my spare time, I enjoy spending time with those close to me, working out, and cooking new recipes.</p>
                </motion.div>
            </div>
        </section>
    )
}