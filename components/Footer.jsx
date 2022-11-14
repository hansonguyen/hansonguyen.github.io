import React from "react";
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"

export default function Footer() {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <footer id="footer" className="section--footer">
            <h1 className="footer--title">Hanson Nguyen</h1>
            <p className="footer--email">hhnnguyen@ucdavis.edu</p>
            <div className="footer--icons">
                <a target="_blank" href="https://www.linkedin.com/in/hansonnguyen/"><FaLinkedin 
                    size="2rem"
                    />
                </a>
                <a target="_blank" href="https://github.com/hansonguyen"><FaGithub 
                    size="2rem"
                    />
                </a>
                <a target="_blank" href="https://www.instagram.com/hansonguyen/"><FaInstagram 
                    size="2rem"
                    />
                </a>
            </div>
            <small className="footer--copyright">&copy; Copyright {year}, Hanson Nguyen</small>
        </footer>
    )
}