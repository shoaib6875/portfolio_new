import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { journey } from '../data/portfolioData'

export default function Journey() {
  return (
    <section id="journey" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Path</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>My Engineering Journey</h2>
          <p className="mx-auto mt-3 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            From foundations to building scalable full-stack applications.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-xl">
          {journey.map((step, i) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative flex flex-col items-center"
            >
              <div className="card w-full px-5 py-4 text-center">
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{step.stage}</p>
                <p className="mt-1 text-xs" style={{ color: 'var(--text-dim)' }}>{step.description}</p>
              </div>
              {i < journey.length - 1 && (
                <div className="flex flex-col items-center py-1.5">
                  <div className="h-5 w-px" style={{ background: 'linear-gradient(to bottom, var(--accent), var(--border))' }} />
                  <ArrowDown size={13} style={{ color: 'var(--text-dim)' }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
