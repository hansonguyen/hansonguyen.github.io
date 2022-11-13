import React from "react"
import Card from "./Card"
import projects from "../data/projects"

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
            <h1 className="title">Projects</h1>
            <div className="cards">
                {cards}
            </div>
        </section>
    )
}