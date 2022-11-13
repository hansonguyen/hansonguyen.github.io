import React from "react";
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"

export default function Footer() {
    return (
        <footer id="footer" className="section--footer">
            <h1>Hanson Nguyen</h1>
            <FaLinkedin 
                size="2rem"
            />
            <FaGithub 
                size="2rem"
            />
            <FaInstagram 
                size="2rem"
            />
        </footer>
    )
}