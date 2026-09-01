import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="relative pb-16 pt-2 sm:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
            Education
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: 'var(--text)' }}>
            Academic background
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-6 sm:p-7"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-dim)' }}>
                    {edu.field} · <span style={{ color: 'var(--accent)' }}>{edu.status}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}