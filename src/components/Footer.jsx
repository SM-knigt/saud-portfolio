import { motion } from 'framer-motion'
import SBSLogo from './SBSLogo'
import { SITE } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="border-t border-white/[0.06] bg-zinc-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <SBSLogo decorative animated className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <p className="text-center text-sm text-zinc-500 sm:text-left">
            © {year} {SITE.name}.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.a
            href={SITE.github}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ y: -2 }}
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            GitHub
          </motion.a>
          <span className="text-zinc-700" aria-hidden>
            /
          </span>
          <motion.a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ y: -2 }}
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            LinkedIn
          </motion.a>
          <span className="text-zinc-700" aria-hidden>
            /
          </span>
          <motion.a
            href={`mailto:${SITE.email}`}
            whileHover={{ y: -2 }}
            className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Email
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}
