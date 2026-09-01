import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, FileText, Sun, Moon } from 'lucide-react'
import { navLinks, personalInfo } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="group flex items-center gap-2.5"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                color: theme === 'dark' ? '#05070c' : '#fff',
              }}
            >
              SA
            </div>
            <span className="hidden text-sm font-semibold tracking-tight sm:block" style={{ color: 'var(--text)' }}>
              Shoaib<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors"
                  style={{ color: active ? 'var(--text)' : 'var(--text-muted)' }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'var(--accent-soft)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-1.5 md:flex">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--accent-soft)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors"
              style={{ color: 'var(--text-muted)' }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition-colors"
              style={{ color: 'var(--text-muted)' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all"
              style={{
                border: '1px solid var(--accent)',
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
              }}
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2"
              style={{ color: 'var(--text)' }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} onClick={() => setMobileOpen(false)} />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-[280px] p-6 pt-20 shadow-2xl"
              style={{ background: 'var(--bg-elevated)', borderLeft: '1px solid var(--border)' }}
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = activeSection === link.href.slice(1)
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="rounded-xl px-4 py-3 text-base font-medium"
                      style={{
                        background: active ? 'var(--accent-soft)' : 'transparent',
                        color: active ? 'var(--accent)' : 'var(--text-muted)',
                      }}
                    >
                      {link.name}
                    </motion.a>
                  )
                })}
              </div>
              <div className="mt-8 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                  <Github size={18} /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium"
                  style={{ border: '1px solid var(--accent)', background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  <FileText size={15} /> Resume
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
