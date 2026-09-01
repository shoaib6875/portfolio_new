import { motion } from 'framer-motion'
import { about } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>About Me</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>Building with purpose</h2>
        </motion.div>

        <div className="mt-11 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} className="space-y-5 lg:col-span-3">
            <motion.p variants={fadeUp} custom={0} className="text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-muted)' }}>{about.intro}</motion.p>
            <motion.p variants={fadeUp} custom={1} className="text-base leading-relaxed" style={{ color: 'var(--text-dim)' }}>{about.body}</motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-base leading-relaxed" style={{ color: 'var(--text-dim)' }}>{about.closing}</motion.p>
            <motion.div variants={fadeUp} custom={3} className="pt-3">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>Currently Exploring</h3>
              <div className="flex flex-wrap gap-2">
                {about.currentlyExploring.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} className="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-1">
            {about.stats.map((stat, i) => (
              <motion.div key={stat.label} variants={fadeUp} custom={i} className="card p-5">
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>{stat.label}</p>
                <p className="mt-1.5 text-lg font-semibold" style={{ color: 'var(--text)' }}>{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
