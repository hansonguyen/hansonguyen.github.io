import React from "react"
import Card from "./Card"
import projects from "../data/projects"
import { motion } from "framer-motion"

export default function Projects() {
    const cards = projects.map(project => {
        return (
            <Card 
                key={project.id}
                {...project}
            />
        )
    })

    return (
        <section id="projects" className="section--projects">
            <motion.h1 className="title"
                initial={{opacity: 0, scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
            >
                Projects
            </motion.h1>
            <motion.div className="cards"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
            >
                {cards}
            </motion.div>
        </section>
    )
}