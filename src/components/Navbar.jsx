import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data/index.js'
import '../styles/Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 48px) 48px)',
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 48px) 48px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
      >
        <div className="navbar-container">
          <motion.a
            href="#home"
            className="navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 5 L55 30 L30 55 L5 30 Z" stroke="url(#navLogoGradient)" strokeWidth="2" fill="none" />
              <path d="M30 15 L45 30 L30 45 L15 30 Z" stroke="#22D3EE" strokeWidth="1.5" fill="none" opacity="0.6" />
              <circle cx="30" cy="30" r="4" fill="url(#navLogoGradient)" />
              <defs>
                <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
            </svg>
            <span>ECHOLANCE</span>
          </motion.a>

          <nav className="navbar-links">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'nav-link-active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 2.7 + i * 0.05 }}
              >
                <span className="nav-link-num">0{i + 1}</span>
                {link.name}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 3 }}
            whileHover={{ x: 4 }}
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </motion.a>

          <button
            className="navbar-burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-menu-inner">
              <div className="mobile-menu-links">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="mobile-link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.08 }}
                  >
                    <span className="mobile-link-num">0{i + 1}</span>
                    <span className="mobile-link-text">{link.name}</span>
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#contact"
                className="mobile-cta"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              >
                Let's Build Something
                <ArrowUpRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
