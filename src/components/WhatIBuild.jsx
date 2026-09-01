import { motion } from 'framer-motion'
import { Server, Layers, Cloud } from 'lucide-react'
import { whatIBuild } from '../data/portfolioData'

const icons = { Server, Layers, Cloud }

export default function WhatIBuild() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }}>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Focus</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>What I like building</h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.map((item, i) => {
            const Icon = icons[item.icon] || Server
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="card p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
