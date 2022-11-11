import React from "react"

export default function Navbar() {
    return (
      <nav className="nav--container">
        <h1 className="nav--title">Hanson Nguyen</h1>
        <ul className="nav--list">
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    )
  }