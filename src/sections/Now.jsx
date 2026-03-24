import { motion } from 'framer-motion'

const rows = [
  {
    label: 'Building',
    text: 'At Velents.ai: prompt engineering with reliable prompts, structured evals of model output, and reusable patterns teams can adopt day to day. Alongside that I practice AI products building: framing features, success criteria, and how model work shows up in the full experience.',
  },
  {
    label: 'Learning',
    text: 'Deep dives in PyTorch, FastAPI and Flask backends, and shipping UIs that make models usable. I am also building business analysis skills: clear requirements, stakeholder communication, and tying technical choices to outcomes. Always tightening how I evaluate and ship.',
  },
  {
    label: 'Exploring',
    text: 'Clearer narratives around technical work: documentation and product framing that help people decide, align, and ship with confidence.',
  },
]

export default function Now() {
  return (
    <section id="currently" className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="mb-10 space-y-6"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Currently</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              Bachelor&apos;s in Computer Science, <span className="text-zinc-400">IMSIU &apos;26</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 320, damping: 26, delay: 0.04 }}
            className="flex w-full flex-col gap-4 rounded-2xl border border-white/[0.1] bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-zinc-950 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_24px_60px_-28px_rgba(0,0,0,0.75)] backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-6 md:p-7"
          >
            <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white shadow-inner shadow-black/10 sm:h-[5.25rem] sm:w-[5.25rem]">
              <img
                src="/programs/velents.png"
                alt=""
                width={72}
                height={72}
                loading="lazy"
                decoding="async"
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">Cooperative internship</p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl md:text-2xl">
                Prompt engineering at Velents.ai
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500">
                Prompts, evals, and patterns teams can reuse in production.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <ul className="grid gap-4 sm:grid-cols-3">
          {rows.map((row, i) => (
            <motion.li
              key={row.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 340, damping: 26, delay: i * 0.06 }}
              className="rounded-2xl border border-white/[0.07] bg-zinc-900/30 p-5 shadow-inner shadow-black/20 backdrop-blur-md"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400/85">{row.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{row.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
