import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Cycles like readme-typing-svg on your GitHub profile. */
const ROLES = ['AI + Full Stack Developer', 'Prompt Engineer', 'Building Smart Solutions']

export default function HeroRotatingBadge() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.span
      className="inline-flex min-h-[2.5rem] min-w-[min(100%,20rem)] items-center justify-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 shadow-[0_0_24px_-4px_rgba(34,211,238,0.35)] backdrop-blur-md sm:min-w-[22rem]"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
      </span>
      <span className="relative flex min-h-[2.75rem] flex-1 items-center justify-center text-center font-mono text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-cyan-200/95 sm:min-h-[2.5rem] sm:text-[11px] sm:tracking-[0.14em]">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROLES[i]}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="px-1"
          >
            {ROLES[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.span>
  )
}
