import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import '../styles/ServiceModal.css'

const ServiceModal = ({ service, onClose, onCTA }) => {
  const Icon = Icons[service.icon]

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
        className="modal-content service-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close service details"
        >
          <Icons.X size={20} />
        </button>

        <div className="service-modal-header">
          <div className="service-modal-icon">
            {Icon && <Icon size={32} />}
            <div className="service-modal-icon-glow" />
          </div>
          <div className="service-modal-titles">
            <span className="service-modal-num">0{service.id} — Service</span>
            <h2>{service.title}</h2>
            <p className="service-modal-short">{service.shortDesc}</p>
          </div>
        </div>

        <div className="service-modal-body">
          <div className="service-modal-desc">
            <h4>Overview</h4>
            <p>{service.description}</p>
          </div>

          <div className="service-modal-features">
            <h4>What's Included</h4>
            <ul>
              {service.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                >
                  <div className="feature-check">
                    <Icons.Check size={14} />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-modal-footer">
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
            Start This Service
            <Icons.ArrowUpRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ServiceModal
