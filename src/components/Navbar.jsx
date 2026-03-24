import { useEffect, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup, useScroll, useSpring } from 'framer-motion'
import SBSLogo from './SBSLogo'
import { useActiveSection } from '../hooks/useActiveSection'
import { SITE } from '../config'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#currently', label: 'Currently' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 32, restDelta: 0.0008 })

  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color,box-shadow,backdrop-filter] duration-500 ease-out ${
        scrolled
          ? 'border-white/[0.1] bg-zinc-950/[0.92] shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55)] backdrop-blur-2xl backdrop-saturate-150'
          : 'border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl'
      }`}
    >
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 opacity-90"
        style={{ scaleX: smoothProgress }}
      />

      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-[padding] duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <motion.a
          href="#hero"
          onClick={close}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 420, damping: 24 }}
          className="group relative flex items-center gap-3 rounded-2xl outline-offset-4"
        >
          <span className="relative flex shrink-0">
            <span
              className="absolute -inset-1 rounded-[14px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/25 to-indigo-500/0 opacity-0 blur-md transition duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <span
              className="absolute -inset-px rounded-[13px] bg-gradient-to-br from-cyan-400/30 via-transparent to-indigo-500/20 opacity-0 transition duration-400 group-hover:opacity-100"
              aria-hidden
            />
            <motion.span
              className="relative rounded-xl ring-1 ring-white/[0.08] transition duration-300 group-hover:ring-cyan-400/35"
              whileHover={{ rotate: [0, -2.5, 2.5, 0] }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            >
              <SBSLogo className="h-9 w-9 sm:h-10 sm:w-10" decorative />
            </motion.span>
          </span>
          <span className="flex min-w-0 flex-col text-left leading-tight">
            <span className="font-display text-sm font-semibold tracking-tight text-white transition group-hover:text-cyan-50">
              {SITE.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition group-hover:text-zinc-400">
              AI and product
            </span>
          </span>
        </motion.a>

        <LayoutGroup id="main-nav">
          <ul className="hidden items-center gap-0.5 md:flex">
            {links.map(({ href, label }) => {
              const id = href.slice(1)
              const isActive = active === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative rounded-xl px-3 py-2 text-sm transition duration-300 ${
                      isActive
                        ? 'text-cyan-100'
                        : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.08] shadow-[0_0_24px_-8px_rgba(34,211,238,0.35)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    ) : null}
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </LayoutGroup>

        <div className="hidden items-center gap-1 md:flex">
          <motion.a
            href={SITE.github}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl p-2 text-zinc-500 transition hover:bg-zinc-800/60 hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl p-2 text-zinc-500 transition hover:bg-zinc-800/60 hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={SITE.cvPath}
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ml-1 rounded-xl border border-cyan-500/45 bg-gradient-to-b from-cyan-500/15 to-cyan-500/5 px-3 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_20px_-10px_rgba(34,211,238,0.5)] transition hover:border-cyan-400/60 hover:from-cyan-500/25"
          >
            CV
          </motion.a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/40 p-2 text-zinc-300 transition hover:border-zinc-600 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-zinc-800/80 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map(({ href, label }) => {
                const id = href.slice(1)
                const isActive = active === id
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={close}
                      className={`block rounded-xl px-3 py-3 text-sm transition ${
                        isActive ? 'bg-cyan-500/10 text-cyan-200' : 'text-zinc-300 hover:bg-zinc-800/60'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
              <li className="mt-2 flex flex-wrap gap-2 border-t border-zinc-800 pt-4">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 py-2.5 text-sm transition hover:border-zinc-600"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 py-2.5 text-sm transition hover:border-zinc-600"
                >
                  <LinkedInIcon className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={SITE.cvPath}
                  download
                  onClick={close}
                  className="w-full rounded-xl border border-cyan-500/40 bg-cyan-500/10 py-2.5 text-center text-sm font-medium text-cyan-200 transition hover:border-cyan-400/50 hover:bg-cyan-500/15"
                >
                  CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
