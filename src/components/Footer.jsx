import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { footerLinks, socialLinks } from '../data/index.js'
import '../styles/Footer.css'

const Footer = () => {
  const handleNavClick = (href, e) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const renderIcon = (iconName, size = 18) => {
    const IconComponent = Icons[iconName]
    return IconComponent ? <IconComponent size={size} /> : null
  }

  return (
    <footer className="footer">
      <div className="footer-grid-bg" />

      <div className="container">
        <div className="footer-cta">
          <motion.div
            className="footer-cta-inner"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="footer-cta-left">
              <span className="section-label">
                <span className="section-label-dot" />
                Ready to Start
              </span>
              <h2>Have a project in mind?</h2>
              <p>Let's transform your ideas into powerful digital experiences.</p>
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick('#contact', e)}
              className="btn btn-primary footer-cta-btn"
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
              <Icons.ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        </div>

        <div className="footer-main">
          <div className="footer-col footer-brand-col">
            <a href="#home" className="footer-logo" onClick={(e) => handleNavClick('#home', e)}>
              <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                <path d="M30 5 L55 30 L30 55 L5 30 Z" stroke="url(#footerLogoGradient)" strokeWidth="2" fill="none" />
                <path d="M30 15 L45 30 L30 45 L15 30 Z" stroke="#22D3EE" strokeWidth="1.5" fill="none" opacity="0.5" />
                <circle cx="30" cy="30" r="4" fill="url(#footerLogoGradient)" />
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
              </svg>
              <span>ECHOLANCE</span>
            </a>
            <p className="footer-desc">
              We Build Digital Experiences That Matter. A creative web development agency crafting modern, high-performing websites and applications.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="footer-social"
                  aria-label={social.name}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  {renderIcon(social.icon, 18)}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {footerLinks.navigation.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  <a href={link.href} onClick={(e) => handleNavClick(link.href, e)}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  <a href={link.href} onClick={(e) => handleNavClick(link.href, e)}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <Icons.Mail size={16} />
                <span>hello@echolance.demo</span>
              </li>
              <li>
                <Icons.Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Icons.MapPin size={16} />
                <span>San Francisco, CA (Demo)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ECHOLANCE. All rights reserved. — Demo website for presentation purposes.</p>
          <div className="footer-bottom-links">
            <a href="#demo">Privacy Policy</a>
            <a href="#demo">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
