import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

function RotatingRoles({ roles }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [roles.length])

  return (
    <div className="relative h-8 overflow-hidden sm:h-9">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          initial={false}
          animate={{ y: i === index ? 0 : i < index ? -36 : 36, opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 text-lg font-semibold sm:text-xl"
          style={{ color: 'var(--accent)' }}
        >
          {role}
        </motion.span>
      ))}
    </div>
  )
}

function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="code-window">
        <div className="code-window-header">
          <div className="dot dot-red" />
          <div className="dot dot-yellow" />
          <div className="dot dot-green" />
          <span className="ml-3 font-mono text-xs text-slate-500">Shoaib.java</span>
        </div>
        <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed text-slate-300 sm:text-sm">
          <p><span className="text-violet-400">public class</span> <span className="text-cyan-300">Developer</span> {'{'}</p>
          <p className="pl-4"><span className="text-violet-400">String</span> name = <span className="text-emerald-400">"Shoaib Akhtar"</span>;</p>
          <p className="pl-4"><span className="text-violet-400">String</span> role = <span className="text-emerald-400">"Backend Engineer"</span>;</p>
          <p className="pl-4"><span className="text-violet-400">String[]</span> stack = {'{'}</p>
          <p className="pl-8 text-emerald-400">"Java", "Spring Boot", "React",</p>
          <p className="pl-8 text-emerald-400">"PostgreSQL", "AWS", "Docker"</p>
          <p className="pl-4">{'};'}</p>
          <p className="pl-4"><span className="text-violet-400">boolean</span> openToWork = <span className="text-orange-400">true</span>;</p>
          <p>{'}'}<span className="cursor-blink ml-0.5 inline-block h-4 w-1.5 bg-cyan-400 align-middle" /></p>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-2 -top-3 rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg sm:-right-5"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
      >
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'var(--success)' }} />
        Spring Boot
      </motion.div>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -bottom-2 -left-1 rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg sm:-left-3"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
      >
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
        AWS · Docker
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium"
            style={{ border: '1px solid var(--accent)', background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" style={{ background: 'var(--accent)' }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
            </span>
            Open to Internships & Full-time Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.15]"
            style={{ color: 'var(--text)' }}
          >
            Hi, I'm <span className="text-gradient">Shoaib Akhtar</span>
            <span style={{ color: 'var(--accent)' }}>.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.18 }} className="mt-4">
            <RotatingRoles roles={personalInfo.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="mt-5 text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
        initial={{ opacity: 0, y: 16 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.45 }}
  className="mb-5 flex w-full items-center justify-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium sm:inline-flex sm:w-auto sm:justify-start"
  style={{ border: '1px solid var(--accent)', background: 'var(--accent-soft)', color: 'var(--accent)' }}
>
       <span className="relative flex h-2 w-2">
       <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" style={{ background: 'var(--accent)' }} />
       <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
       </span>
      🙋🏻‍♂️
    </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 transition-colors" style={{ color: 'var(--text-dim)' }} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 transition-colors" style={{ color: 'var(--text-dim)' }} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block"><CodeWindow /></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-md px-5 pb-12 lg:hidden"><CodeWindow /></div>
    </section>
  )
}
