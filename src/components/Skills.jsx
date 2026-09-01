import { motion } from 'framer-motion'
import {
  Coffee, Leaf, Server, Zap, Network, Shield,
  Atom, FileCode, Code2, Palette, Wind,
  Database, Cloud, HardDrive, Box, GitBranch,
  RefreshCw, Activity, Github, Code, Send,
} from 'lucide-react'
import { skills } from '../data/portfolioData'

const iconMap = {
  Coffee, Leaf, Server, Zap, Network, Shield,
  Atom, FileCode, Code2, Palette, Wind,
  Database, Cloud, HardDrive, Box, GitBranch,
  RefreshCw, Activity, Github, Code, Send,
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }}>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Skills</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>Technologies I work with</h2>
          <p className="mt-3 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            A focused stack centered around Java backend systems, modern frontend, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="mt-11 space-y-9">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }}>
              <motion.h3 variants={fadeUp} custom={0} className="mb-3.5 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>
                {category}
              </motion.h3>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill, i) => {
                  const Icon = iconMap[skill.icon] || Code
                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeUp}
                      custom={i + 1}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="pill cursor-default"
                    >
                      <Icon size={14} style={{ color: 'var(--accent)', opacity: 0.85 }} />
                      {skill.name}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
