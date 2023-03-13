import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    React.useEffect(() => {
        document.title = "Hanson Nguyen's Portfolio"
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
