import React from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '../../data/index.js'
import * as Icons from 'lucide-react'
import '../../styles/Process.css'

const stepIcons = ['Search', 'PenTool', 'Code2', 'Sliders', 'Send']

const Process = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">
            <span className="section-label-dot" />
            Our Process
          </span>
          <div className="process-header-row">
            <h2>
              <span className="text-gradient">FROM IDEA TO IMPACT.</span>
              <br />
              A proven path to great digital work.
            </h2>
            <p>
              Every project follows a thoughtful, collaborative process designed to ensure clarity, quality, and measurable results from day one.
            </p>
          </div>
        </motion.div>

        <div className="process-timeline">
          <div className="process-line" aria-hidden="true">
            <motion.div
              className="process-line-progress"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {processSteps.map((step, i) => {
            const Icon = Icons[stepIcons[i]]
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={step.step}
                className={`process-step ${isLeft ? 'is-left' : 'is-right'}`}
                initial={{ opacity: 0, y: 60, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <div className="process-step-node" aria-hidden="true">
                  <div className="process-step-node-inner">
                    {Icon && <Icon size={18} />}
                  </div>
                  <div className="process-step-pulse" />
                </div>

                <div className="process-step-card">
                  <div className="process-step-card-bg" />
                  <div className="process-step-card-inner">
                    <div className="process-step-head">
                      <span className="process-step-num">{step.step}</span>
                      <h3>{step.title}</h3>
                    </div>
                    <p className="process-step-desc">{step.description}</p>
                    <ul className="process-step-details">
                      {step.details.map((d, idx) => (
                        <li key={idx}>
                          <Icons.ChevronRight size={14} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}

          <motion.div
            className="process-final-node"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Icons.Rocket size={20} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Process
