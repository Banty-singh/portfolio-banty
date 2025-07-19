import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/herosec/Hero'
import Body from './components/body/Body'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Achievement from './components/Achievments/Achievement'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Body />
    <Education />
    <Experience />
    <Projects />
    <Achievement />
    <Contact />
    <Footer />
    </>
  )
}

export default App