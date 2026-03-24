import { motion } from 'framer-motion'
import { SKILLS } from '../config'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/[0.06] bg-zinc-950/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Skills</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-500/80">Toolkit</p>
          <p className="mt-4 text-zinc-400">
            OCR, custom models, RAG, discovery, and UI, with reliability treated as part of the product.
          </p>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="flex flex-wrap gap-3"
        >
          {SKILLS.map((skill, idx) => (
            <motion.li
              key={`${skill}-${idx}`}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 400, damping: 22 },
                },
              }}
              className="rounded-xl border border-white/[0.08] bg-zinc-900/40 px-4 py-2 text-sm font-medium text-zinc-300 shadow-sm backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-cyan-500/20 hover:shadow-[0_12px_32px_-16px_rgba(34,211,238,0.12)]"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
