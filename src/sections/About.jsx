import { motion } from 'framer-motion'
import CoursesPrograms from '../components/CoursesPrograms'
import { SITE } from '../config'

const stats = [
  { value: '10+', label: 'AI agents shipped in orchestration work' },
  { value: 'Production', label: 'Systems built for real users and SLAs' },
  { value: 'Real time', label: 'ML paths tuned for latency and reliability' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/[0.06] bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">About</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-500/80">Background</p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">{SITE.summary}</p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            From training through deployment, I care about data, evaluation, shipping, and what the numbers mean once users are in the loop.
          </p>
        </motion.div>

        <CoursesPrograms />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <motion.li
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 380, damping: 26 },
                },
              }}
              className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/50 to-zinc-950/80 p-5 text-center shadow-lg shadow-black/25 backdrop-blur-md sm:text-left"
            >
              <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-sm leading-snug text-zinc-500">{s.label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
