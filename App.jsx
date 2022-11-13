import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import Card from "./components/Card"

export default function App() {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
    )
  }