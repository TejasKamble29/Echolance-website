import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Loader.css'

const Loader = () => {
  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      }}
    >
      <div className="loader-bg" />
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M30 5 L55 30 L30 55 L5 30 Z"
              stroke="url(#loaderGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, rotate: -45 }}
              animate={{ pathLength: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'center' }}
            />
            <motion.path
              d="M30 15 L45 30 L30 45 L15 30 Z"
              stroke="#22D3EE"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, scale: 0.5, opacity: 0 }}
              animate={{ pathLength: 1, scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              style={{ transformOrigin: 'center' }}
            />
            <motion.circle
              cx="30"
              cy="30"
              r="4"
              fill="url(#loaderGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            />
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.h1
          className="loader-brand"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          ECHOLANCE
        </motion.h1>

        <motion.div
          className="loader-tagline"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        >
          WE BUILD DIGITAL EXPERIENCES
        </motion.div>

        <motion.div
          className="loader-bar"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
        >
          <motion.div
            className="loader-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
