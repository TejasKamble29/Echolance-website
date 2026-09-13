import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import '../styles/ProjectModal.css'

const ProjectModal = ({ project, onClose, onCTA }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="modal-content project-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <Icons.X size={20} />
        </button>

        <div
          className="project-modal-hero"
          style={{ background: project.gradient }}
        >
          <div className="project-modal-hero-inner">
            <div className="project-modal-hero-tags">
              <span className="project-modal-tag">{project.category}</span>
              <span className="project-modal-tag year">{project.year}</span>
            </div>
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>
          <div className="project-modal-hero-overlay" />
        </div>

        <div className="project-modal-body">
          <div className="project-modal-section">
            <span className="project-modal-section-label">Overview</span>
            <h2>About this concept</h2>
            <p>{project.fullDescription}</p>
          </div>

          <div className="project-modal-meta-grid">
            <div className="project-modal-meta">
              <span className="meta-label">Category</span>
              <span className="meta-value">{project.category}</span>
            </div>
            <div className="project-modal-meta">
              <span className="meta-label">Year</span>
              <span className="meta-value">{project.year}</span>
            </div>
            <div className="project-modal-meta">
              <span className="meta-label">Status</span>
              <span className="meta-value demo">Demo Concept</span>
            </div>
          </div>

          <div className="project-modal-section">
            <span className="project-modal-section-label">Technology</span>
            <h2>Tech stack</h2>
            <div className="project-tech-list">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="project-tech-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="project-modal-visual-placeholder">
            <div
              className="project-modal-visual-main"
              style={{ background: project.gradient }}
            >
              <div className="pv-content">
                <div className="pv-mock-bar">
                  <div className="pv-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="pv-url">{project.title.toLowerCase()}.studio/demo</span>
                </div>
                <div className="pv-hero-label">
                  <Icons.Sparkles size={16} />
                  Project Preview — Concept Design
                </div>
                <h3>{project.title} Experience</h3>
                <div className="pv-lines">
                  <div style={{ '--w': '70%' }} />
                  <div style={{ '--w': '55%' }} />
                  <div style={{ '--w': '80%' }} />
                </div>
                <div className="pv-cards">
                  <div style={{ background: project.accent, opacity: 0.2 }} />
                  <div style={{ background: project.accent, opacity: 0.35 }} />
                  <div style={{ background: project.accent, opacity: 0.25 }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-modal-footer project-modal-footer">
          <motion.button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Close
          </motion.button>
          <motion.button
            type="button"
            className="btn btn-primary"
            onClick={() => onCTA('#contact')}
            whileHover={{ scale: 1.03, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Similar Project
            <Icons.ArrowUpRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
