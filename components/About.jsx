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
                    <p>As a second-year <strong>Computer Engineering</strong> student at UC Davis with a minor in Technology Management, I am constantly seeking opportunities to apply the knowledge and skills I am acquiring in the classroom to real-world projects. I am a proactive problem-solver, always eager to learn and grow as a coder, engineer, and individual.</p>
                    <p>I am currently working with <strong>AggieWorks</strong> to build a roommate matching app using <strong>React Native</strong>, <strong>TypeScript</strong>, and <strong>Supabase</strong>.</p>
                </motion.div>
            </div>
        </section>
    )
}