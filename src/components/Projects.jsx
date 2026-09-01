import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolioData'

const badgeClass = {
  emerald: 'badge-live',
  blue: 'badge-done',
  amber: 'badge-wip',
  violet: 'badge-build',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] } }),
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className={`card group flex flex-col overflow-hidden ${project.featured ? 'card-featured' : ''}`}
    >
      {project.featured && (
        <div className="h-[3px] w-full opacity-70" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-3.5 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold sm:text-xl" style={{ color: 'var(--text)' }}>
              {project.shortName || project.name}
            </h3>
            {project.shortName && project.shortName !== project.name && (
              <p className="mt-0.5 text-xs" style={{ color: 'var(--text-dim)' }}>{project.name}</p>
            )}
          </div>
          <span className={`badge shrink-0 ${badgeClass[project.statusColor] || 'badge-done'}`}>
            {project.status}
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{project.description}</p>

        {project.note && (
          <p className="mb-4 rounded-lg px-3 py-2 text-xs" style={{ border: '1px solid rgba(251,191,36,0.25)', background: 'rgba(251,191,36,0.06)', color: '#fbbf24' }}>
            {project.note}
          </p>
        )}

        {project.features?.length > 0 && (
          <ul className="mb-5 grid gap-1.5 sm:grid-cols-2">
            {project.features.slice(0, 6).map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-dim)' }}>
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md px-2 py-0.5 text-[11px] font-medium" style={{ background: 'var(--bg)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}>
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2.5">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-3.5 !py-2 !text-xs">
              Live Demo <ExternalLink size={12} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-3.5 !py-2 !text-xs">
              <Github size={12} /> Code
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="text-xs" style={{ color: 'var(--text-dim)' }}>Links coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }}>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Projects</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>Things I've built</h2>
          <p className="mt-3 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            Projects that showcase backend systems, full-stack products, and practical engineering.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </motion.div>

        {others.length > 0 && (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="mt-5 grid gap-5 md:grid-cols-2">
            {others.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </motion.div>
        )}
      </div>
    </section>
  )
}
