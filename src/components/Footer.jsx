import { Github, Linkedin, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm" style={{ color: 'var(--text-dim)' }}>© 2026 {personalInfo.name}</p>
        <div className="flex items-center gap-2">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2" style={{ color: 'var(--text-dim)' }} aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2" style={{ color: 'var(--text-dim)' }} aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <button
            onClick={scrollTop}
            className="ml-1 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            aria-label="Back to top"
          >
            <ArrowUp size={13} /> Top
          </button>
        </div>
      </div>
    </footer>
  )
}
