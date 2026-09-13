import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../../data/index.js'
import '../../styles/Stats.css'

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const startTime = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (value - start) * eased)
      setCount(current)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, value])

  return (
    <span ref={ref} className="stats-value">
      {count}{suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stats-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <div className="stats-card-bg" />
              <div className="stats-card-inner">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <h4>{stat.label}</h4>
                <p>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
