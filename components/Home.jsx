import React from "react";
import profilepic from "../assets/profile-pic.jpg";
import { motion } from "framer-motion"

export default function Home() {
    return (
        <section id="home" className="section--home">
            <motion.h2 className="home--subtitle" 
                initial={{opacity: 0, scale: 0, y: 400}} 
                whileInView={{opacity: 1}}
                animate={{scale: [0, 5, 1], y: 0}}
                transition={{ease: "easeOut", duration: 1, times: [0, 0.9, 1]}}
            >
                Hello! I'm
            </motion.h2>
            <motion.h1 className="home--title"
                initial={{x: 1500}} 
                whileInView={{opacity: 1}}
                animate={{x: [1500, -400, 0], scale: [1, 2, 1], y: [0, -100, 0]}}
                transition={{ease: "easeIn", duration: 3, delay: 1, times:[0, 0.2, 1]}}
            >
                Hanson
            </motion.h1>
            <motion.h1 className="home--title"
                initial={{x: -1500}} 
                whileInView={{opacity: 1}}
                animate={{x: [-1500, 400, 0], scale: [1, 2, 1], y: [0, -50, 0]}}
                transition={{ease: "easeIn", duration: 3, delay: 1.5, times:[0, 0.2, 1]}}
            >
                Nguyen
            </motion.h1>
            <div className="home--container">
                <motion.img src={profilepic} 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ease: "easeIn", duration: 2, delay: 2.5}}
                />
            </div>
        </section>
    )
}