import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'
import '../../styles/Hero.css'

const Hero = () => {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-bg-grad hero-bg-grad-1" />
        <div className="hero-bg-grad hero-bg-grad-2" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </div>

      <div className="hero-visual">
        <motion.div
          className="hero-orb hero-orb-main"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 2.8 }}
        >
          <div className="hero-orb-glow" />
        </motion.div>

        <motion.div
          className="hero-orb hero-orb-secondary"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 3 }}
        />

        <motion.div
          className="hero-ring"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear', delay: 3 }}
          style={{ animationDelay: '3s' }}
        >
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
            <circle cx="200" cy="200" r="150" stroke="url(#ringGrad)" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.25" />
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="hero-ring hero-ring-2"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear', delay: 3 }}
        >
          <svg viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="230" stroke="#8B5CF6" strokeWidth="0.5" strokeDasharray="1 10" opacity="0.2" />
          </svg>
        </motion.div>

        <motion.div
          className="hero-interface"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 3.4 }}
        >
          <div className="hero-interface-header">
            <div className="hero-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-interface-title">echolance.studio</div>
          </div>
          <div className="hero-interface-body">
            <div className="hero-bar" style={{ '--delay': '0s', '--width': '85%' }} />
            <div className="hero-bar" style={{ '--delay': '0.2s', '--width': '62%' }} />
            <div className="hero-bar" style={{ '--delay': '0.4s', '--width': '91%' }} />
            <div className="hero-bar" style={{ '--delay': '0.6s', '--width': '47%' }} />
            <div className="hero-stats-row">
              <div className="hero-stat-mini">
                <span className="hero-stat-value">98%</span>
                <span className="hero-stat-label">Perf.</span>
              </div>
              <div className="hero-stat-mini">
                <span className="hero-stat-value">A+</span>
                <span className="hero-stat-label">Lighthouse</span>
              </div>
              <div className="hero-stat-mini">
                <span className="hero-stat-value">4.9s</span>
                <span className="hero-stat-label">Load</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="hero-badge-dot" />
            CREATIVE WEB DEVELOPMENT AGENCY
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            <span className="hero-title-line">
              <span className="hero-title-text">WE BUILD</span>
            </span>
            <span className="hero-title-line">
              <span className="hero-title-text text-gradient">DIGITAL EXPERIENCES</span>
            </span>
            <span className="hero-title-line">
              <span className="hero-title-text">THAT MATTER.</span>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            From bold ideas to powerful digital experiences, Echolance helps businesses turn their vision into modern, high-performing websites and applications.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-ctas">
            <motion.button
              className="btn btn-primary hero-cta-primary"
              onClick={() => handleScroll('#work')}
              whileHover={{ x: 6, boxShadow: '0 24px 48px -16px rgba(139, 92, 246, 0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Work
              <ArrowUpRight size={18} />
            </motion.button>

            <motion.button
              className="btn btn-outline hero-cta-secondary"
              onClick={() => handleScroll('#contact')}
              whileHover={{ x: 6, borderColor: '#8B5CF6' }}
              whileTap={{ scale: 0.97 }}
            >
              <Play size={14} fill="#8B5CF6" />
              Let's Build Something
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-num">50+</span>
              <span className="hero-meta-label">Demo Concepts</span>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <span className="hero-meta-num">6</span>
              <span className="hero-meta-label">Core Services</span>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <span className="hero-meta-num">100%</span>
              <span className="hero-meta-label">Responsive Design</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.button
          className="hero-scroll"
          onClick={() => handleScroll('#about')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          whileHover={{ y: 4 }}
        >
          <span>Scroll</span>
          <div className="hero-scroll-line">
            <motion.div
              className="hero-scroll-dot"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <ArrowDown size={14} />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
