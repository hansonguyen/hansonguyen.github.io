import React from "react"

export default function Card(props) {
    return (
        <div className="card--container">
            <img src={props.imgURL}/>
            <h3 className="card--title">{props.title}</h3>
            <p className="card--description">{props.description}</p>
        </div>
    )
}