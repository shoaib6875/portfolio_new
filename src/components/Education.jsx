import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="relative pb-16 pt-2 sm:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45 }}
          className="card p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
              <GraduationCap size={22} />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>Education</p>
              <h3 className="mt-1 text-xl font-semibold" style={{ color: 'var(--text)' }}>{education.degree}</h3>
              <p className="mt-1" style={{ color: 'var(--text-muted)' }}>{education.institution}</p>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-dim)' }}>
                {education.field} · <span style={{ color: 'var(--accent)' }}>{education.status}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
