import React from 'react'
import tahoe from '../assets/tahoe.jpg'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="section--about">
            <motion.h1
                className="title about--title"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
            >
                About
            </motion.h1>
            <div className="about--container">
                <motion.img
                    src={tahoe}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                />
                <motion.div
                    className="about--background"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <p>
                        Passionate and driven software engineering student with
                        a focus on full-stack and software development, seeking
                        opportunities to contribute to innovative projects.
                        Currently pursuing a Bachelor of Science degree in
                        Computer Engineering with a minor in Technology
                        Management at the University of California, Davis,
                        projected to graduate in June 2025. Throughout my
                        academic journey, I have gained hands-on experience with
                        various programming languages such as Python, C++, and
                        JavaScript/TypeScript. Working with popular technologies
                        and frameworks like React, Node.js, Express, MongoDB,
                        and Git, I have honed my skills in optimizing systems,
                        enhancing efficiency, and thriving in agile work
                        environments.
                    </p>
                    <p>
                        This summer, I am interning at{' '}
                        <a
                            href="https://www.symmetrylaser.com/"
                            target="_blank"
                        >
                            <strong>Symmetry Laser</strong>
                        </a>{' '}
                        where I'll be using{' '}
                        <a href="https://www.python.org/" target="_blank">
                            <strong>Python</strong>
                        </a>{' '}
                        to create applications and automate tasks.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
