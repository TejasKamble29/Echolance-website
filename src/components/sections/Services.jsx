import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { services } from '../../data/index.js'
import ServiceModal from '../ServiceModal.jsx'
import '../../styles/Services.css'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const renderIcon = (iconName, size = 28) => {
    const Icon = Icons[iconName]
    return Icon ? <Icon size={size} /> : null
  }

  const handleCTA = (href) => {
    setSelectedService(null)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
  }

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">
            <span className="section-label-dot" />
            Our Services
          </span>
          <div className="services-header-row">
            <h2>
              Everything you need,{' '}
              <span className="text-gradient">built with care.</span>
            </h2>
            <p>
              From concept to launch, we offer a complete suite of creative and technical services designed to bring your digital vision to life.
            </p>
          </div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="service-card-bg" />

              <div className="service-card-inner">
                <div className="service-top-row">
                  <span className="service-num">0{service.id}</span>
                  <span className="service-category">{service.category}</span>
                </div>

                <div className="service-icon-wrap">
                  <div className="service-icon">
                    {renderIcon(service.icon)}
                  </div>
                  <div className="service-icon-glow" />
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-short">{service.shortDesc}</p>

                <ul className="service-features-preview">
                  {service.features.slice(0, 3).map((f, idx) => (
                    <li key={idx}>
                      <Icons.Check size={14} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="service-expand-btn"
                  onClick={() => setSelectedService(service)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>View Details</span>
                  <Icons.ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onCTA={handleCTA}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services
