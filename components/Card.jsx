import React from "react"

export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--image" src={props.imgURL}/>
            <h3 className="card--title">{props.title}</h3>
            <p className="card--description">{props.description}</p>
            <a target="_blank" href={props.link} className="card--link">
                <button className="card--button">See more</button>
            </a>
        </div>
    )
}