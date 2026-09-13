import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { contactInfo, socialLinks } from '../../data/index.js'
import '../../styles/Contact.css'

const initialForm = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: '',
}

const projectTypes = [
  'Website Development',
  'Web Application',
  'Mobile App',
  'UI/UX Design',
  'Landing Page',
  'Website Redesign',
  'Other / Not Sure',
]

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const validate = useCallback((data) => {
    const e = {}
    if (!data.name.trim()) e.name = 'Please enter your name.'
    else if (data.name.trim().length < 2) e.name = 'Name must be at least 2 characters.'

    if (!data.email.trim()) e.email = 'Please enter your email.'
    else if (!validateEmail(data.email)) e.email = 'Please enter a valid email address.'

    if (!data.projectType) e.projectType = 'Please select a project type.'

    if (!data.message.trim()) e.message = 'Please enter a project message.'
    else if (data.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'

    return e
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstErrorField = document.querySelector('[data-has-error="true"]')
      firstErrorField?.focus?.()
      return
    }

    setSubmitting(true)
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('echolance_contacts') || '[]')
        existing.push({ ...form, submittedAt: new Date().toISOString() })
        localStorage.setItem('echolance_contacts', JSON.stringify(existing))
      } catch (_err) { /* ignore storage errors */ }

      setSubmitting(false)
      setSuccess(true)
      setForm(initialForm)
      setErrors({})
      setTimeout(() => setSuccess(false), 6000)
    }, 1200)
  }

  const renderIcon = (name, size = 20) => {
    const Icon = Icons[name]
    return Icon ? <Icon size={size} /> : null
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg" />
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">
            <span className="section-label-dot" />
            Get in Touch
          </span>
          <h2>
            <span className="text-gradient">LET&apos;S CREATE</span>
            <br />
            SOMETHING EXTRAORDINARY.
          </h2>
          <p className="contact-intro">
            Ready to bring your idea to life? Tell us about your project and we&apos;ll get back to you within 24 hours with next steps.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.aside
            className="contact-info-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p className="contact-info-sub">
                Demo contact details — for presentation purposes only.
              </p>
              <ul className="contact-info-list">
                {contactInfo.map((item, i) => (
                  <li key={item.label}>
                    <div className="contact-info-icon">
                      {renderIcon(item.icon)}
                    </div>
                    <div>
                      <span className="contact-info-label">{item.label}</span>
                      <span className="contact-info-value">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="contact-social-list">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="contact-social-item"
                      aria-label={`${social.name} (demo link)`}
                      whileHover={{ y: -3 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      {renderIcon(social.icon, 18)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <div className="contact-hours-icon">
                <Icons.Clock size={20} />
              </div>
              <div>
                <h4>Response Time</h4>
                <p>Within 24 hours on business days.</p>
              </div>
            </div>
          </motion.aside>

          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <AnimatePresence>
                {success && (
                  <motion.div
                    className="contact-success"
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    role="status"
                    aria-live="polite"
                  >
                    <div className="contact-success-icon">
                      <Icons.CheckCircle2 size={22} />
                    </div>
                    <div>
                      <h4>Message Received — Demo Confirmation</h4>
                      <p>
                        Thanks! Your submission has been saved locally. This is a front-end demo and no email was sent.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name <span className="req">*</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    data-has-error={!!errors.name}
                    className={errors.name ? 'has-error' : ''}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span
                        className="form-error"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <Icons.AlertCircle size={14} />
                        {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address <span className="req">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    data-has-error={!!errors.email}
                    className={errors.email ? 'has-error' : ''}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.span
                        className="form-error"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <Icons.AlertCircle size={14} />
                        {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your Company"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="projectType">Project Type <span className="req">*</span></label>
                  <div className={`select-wrap ${errors.projectType ? 'has-error' : ''}`}>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      data-has-error={!!errors.projectType}
                      className={errors.projectType ? 'has-error' : ''}
                    >
                      <option value="">Select a project type...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <Icons.ChevronDown size={16} className="select-arrow" />
                  </div>
                  <AnimatePresence>
                    {errors.projectType && (
                      <motion.span
                        className="form-error"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <Icons.AlertCircle size={14} />
                        {errors.projectType}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Project Details <span className="req">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, goals, timeline, and any requirements..."
                  value={form.message}
                  onChange={handleChange}
                  data-has-error={!!errors.message}
                  className={errors.message ? 'has-error' : ''}
                />
                <div className="form-counter">
                  {form.message.length} characters
                </div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.span
                      className="form-error"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <Icons.AlertCircle size={14} />
                      {errors.message}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div className="form-footer">
                <p className="form-note">
                  <Icons.Info size={14} />
                  This is a demo form. Submissions are saved locally in your browser.
                </p>

                <motion.button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={submitting}
                  whileHover={!submitting ? { x: 6, boxShadow: '0 24px 48px -16px rgba(139, 92, 246, 0.55)' } : {}}
                  whileTap={!submitting ? { scale: 0.97 } : {}}
                >
                  {submitting ? (
                    <>
                      <Icons.Loader2 size={18} className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Icons.Send size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
