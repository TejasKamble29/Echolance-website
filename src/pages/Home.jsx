import React from 'react'
import Hero from '../components/sections/Hero.jsx'
import Stats from '../components/sections/Stats.jsx'
import About from '../components/sections/About.jsx'
import Services from '../components/sections/Services.jsx'
import Work from '../components/sections/Work.jsx'
import Process from '../components/sections/Process.jsx'
import Contact from '../components/sections/Contact.jsx'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.4 }}
    >
      <Hero />
      <Stats />
      <About />
      <Services />
      <Work />
      <Process />
      <Contact />
    </motion.div>
  )
}

export default Home
