import { motion } from 'framer-motion'
import { SITE } from '../config'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/70 to-zinc-950/95 p-8 shadow-xl shadow-black/30 backdrop-blur-md sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Contact</h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-500/80">Let&apos;s build</p>
            <p className="mt-6 text-lg text-zinc-400">
              Open to collaborations on enterprise AI, agents, and product led technical work. Reach out by email or LinkedIn.
            </p>
            <p className="mt-6">
              <motion.a
                href={`mailto:${SITE.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 font-display text-lg font-medium text-cyan-400 transition hover:text-cyan-300 sm:text-xl"
              >
                <MailIcon className="h-5 w-5 shrink-0 opacity-90" />
                {SITE.email}
              </motion.a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="interactive-shine relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
              >
                <span className="relative z-[1]">LinkedIn</span>
              </motion.a>
              <motion.a
                href={SITE.github}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-500/35 hover:bg-zinc-800/40"
              >
                GitHub
              </motion.a>
              <motion.a
                href={SITE.cvPath}
                download
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-500/40 hover:bg-zinc-800/50"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}
