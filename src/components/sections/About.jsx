import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { aboutCards } from '../../data/index.js'
import '../../styles/About.css'

const About = () => {
  const renderIcon = (iconName) => {
    const Icon = Icons[iconName]
    return Icon ? <Icon size={28} /> : null
  }

  return (
    <section id="about" className="section about-section">
      <div className="about-bg-grid" />
      <div className="container">
        <div className="about-layout">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">
              <span className="section-label-dot" />
              About ECHOLANCE
            </span>

            <h2 className="about-heading">
              WE TURN IDEAS INTO{' '}
              <span className="text-gradient">DIGITAL EXPERIENCES.</span>
            </h2>

            <p className="about-lead">
              ECHOLANCE is a creative web development agency focused on building modern, responsive, and engaging digital experiences for businesses and brands.
            </p>
          </motion.div>

          <div className="about-two-col">
            <motion.div
              className="about-col about-left"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div className="about-block">
                <div className="about-block-icon">
                  <Icons.Compass size={22} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To craft digital experiences that blend beautiful design with powerful technology — helping brands connect, engage, and grow in meaningful ways.
                </p>
              </div>

              <div className="about-block">
                <div className="about-block-icon vision">
                  <Icons.Eye size={22} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a trusted creative partner known for thoughtful design, clean engineering, and a human-centered approach to every digital product we build.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="about-col about-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="about-highlight">
                <h4>Why Choose Echolance</h4>
                <ul className="about-highlight-list">
                  <li>
                    <Icons.CheckCircle2 size={18} />
                    <span>End-to-end design & development under one roof.</span>
                  </li>
                  <li>
                    <Icons.CheckCircle2 size={18} />
                    <span>Modern tech stack with performance-first mindset.</span>
                  </li>
                  <li>
                    <Icons.CheckCircle2 size={18} />
                    <span>Clear communication & transparent process.</span>
                  </li>
                  <li>
                    <Icons.CheckCircle2 size={18} />
                    <span>Pixel-perfect interfaces & accessible interactions.</span>
                  </li>
                  <li>
                    <Icons.CheckCircle2 size={18} />
                    <span>Dedicated support through launch and beyond.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="about-cards-grid">
            {aboutCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="about-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="about-card-glow" />
                <div className="about-card-inner">
                  <div className="about-card-icon">
                    {renderIcon(card.icon)}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="about-card-arrow">
                    <Icons.ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
