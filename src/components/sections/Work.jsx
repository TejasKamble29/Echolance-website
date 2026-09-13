import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { projects, projectFilters } from '../../data/index.js'
import ProjectModal from '../ProjectModal.jsx'
import '../../styles/Work.css'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  const handleCTA = (href) => {
    setSelectedProject(null)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 250)
  }

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="work-header-top">
            <span className="section-label">
              <span className="section-label-dot" />
              Selected Work
            </span>
            <p className="work-disclaimer">
              Demo portfolio concepts — showcasing creative direction & technical approach
            </p>
          </div>

          <div className="work-header-row">
            <h2>
              <span className="text-gradient">SELECTED WORK</span>
              <br />
              from our studio.
            </h2>

            <div className="work-filters" role="tablist" aria-label="Project categories">
              {projectFilters.map((f) => (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={activeFilter === f.key}
                  className={`work-filter-btn ${activeFilter === f.key ? 'is-active' : ''}`}
                  onClick={() => setActiveFilter(f.key)}
                  type="button"
                >
                  {f.label}
                  <span className="work-filter-count">
                    {f.key === 'all'
                      ? projects.length
                      : projects.filter((p) => p.category === f.key).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          layout
          className="work-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.06,
                }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="project-visual"
                  style={{ background: project.gradient }}
                >
                  <div className="project-visual-inner">
                    <span className="project-year">{project.year}</span>
                    <h3 className="project-visual-title">{project.title}</h3>
                    <div className="project-accent-swatch" style={{ background: project.accent }} />
                  </div>

                  <div className="project-visual-overlay">
                    <div className="project-visual-lines">
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-info-top">
                    <span className="project-category-tag">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="project-tag more">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="project-view-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Project</span>
                    <Icons.ExternalLink size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="work-empty"
          >
            <Icons.Inbox size={40} />
            <p>No projects in this category yet.</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onCTA={handleCTA}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
