import React from "react"
import { motion } from "framer-motion"

export default function Navbar() {

    return (
      <nav className="nav--container">
        <motion.a className="nav--links" href="#about"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 1.5}}
        >
          About
        </motion.a>
        <motion.a className="nav--links" href="#experience"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 1.75}}
        >
          Experience
        </motion.a>
        <motion.a className="nav--links" href="#projects"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 2}}
        >
          Projects
        </motion.a>
        <motion.a className="nav--links" href="#contact"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 2.25}}
        >
          Contact
        </motion.a>
      </nav>
    )
  }