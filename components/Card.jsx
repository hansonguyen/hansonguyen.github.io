import React from 'react'

export default function Card(props) {
    const skills = props.skills.map((skill) => {
        return <p className="card--skill">{skill}</p>
    })
    return (
        <div className="card--container">
            <img className="card--image" src={props.imgURL} />
            <h3 className="card--title">{props.title}</h3>
            <div className="card--skills">{skills}</div>
            <p className="card--description">{props.description}</p>
            <a target="_blank" href={props.link} className="card--link">
                <button className="card--button">See more</button>
            </a>
        </div>
    )
}
