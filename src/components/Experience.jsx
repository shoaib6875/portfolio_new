import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }}>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Experience</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>Professional experience</h2>
        </motion.div>

        <div className="relative mt-11">
          <div className="absolute left-4 top-2 bottom-2 w-px sm:left-6" style={{ background: 'linear-gradient(to bottom, var(--accent), var(--border))' }} />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={i}
              className="relative mb-9 pl-12 last:mb-0 sm:pl-16"
            >
              <div
                className="absolute left-2.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full sm:left-4 sm:h-5 sm:w-5"
                style={{ border: '2px solid var(--accent)', background: 'var(--bg)' }}
              >
                <div className="h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2" style={{ background: 'var(--accent)' }} />
              </div>

              <div className="card p-6 sm:p-7">
                <div className="mb-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                    <Briefcase size={11} /> {exp.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  {exp.company}{exp.location && <span style={{ color: 'var(--text-dim)' }}> · {exp.location}</span>}
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{exp.description}</p>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-dim)' }}>
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
