import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message is too short'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const handleChange = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }))
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }))
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>Let's Build Something Great.</h2>
          <p className="mx-auto mt-4 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            I'm always interested in discussing software engineering, backend development, full-stack projects and new opportunities.
          </p>
        </motion.div>

        <div className="mt-11 grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="flex flex-col gap-3 lg:col-span-2"
          >
            {[
              { href: `mailto:${personalInfo.email}`, icon: Mail, title: 'Email', sub: personalInfo.email },
              { href: personalInfo.linkedin, icon: Linkedin, title: 'LinkedIn', sub: 'Connect with me', external: true },
              { href: personalInfo.github, icon: Github, title: 'GitHub', sub: 'View my code', external: true },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="card flex items-center gap-4 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{item.title}</p>
                  <p className="text-xs" style={{ color: 'var(--text-dim)' }}>{item.sub}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            onSubmit={handleSubmit}
            className="card p-6 sm:p-8 lg:col-span-3"
            noValidate
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle size={36} style={{ color: 'var(--success)' }} className="mb-3" />
                <p className="text-lg font-semibold" style={{ color: 'var(--text)' }}>Message ready!</p>
                <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                  Form validated. Connect EmailJS or Formspree for real submissions.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Name</label>
                  <input id="name" type="text" value={form.name} onChange={handleChange('name')} placeholder="Your name" className="input-field" style={errors.name ? { borderColor: '#ef4444' } : {}} aria-invalid={!!errors.name} />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Email</label>
                  <input id="email" type="email" value={form.email} onChange={handleChange('email')} placeholder="you@example.com" className="input-field" style={errors.email ? { borderColor: '#ef4444' } : {}} aria-invalid={!!errors.email} />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Message</label>
                  <textarea id="message" rows={4} value={form.message} onChange={handleChange('message')} placeholder="Tell me about the opportunity or project..." className="input-field resize-none" style={errors.message ? { borderColor: '#ef4444' } : {}} aria-invalid={!!errors.message} />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send size={14} /> Send Message
                </button>
                <p className="text-xs" style={{ color: 'var(--text-dim)' }}>Client-side validated. Wire to EmailJS / Formspree for production.</p>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
