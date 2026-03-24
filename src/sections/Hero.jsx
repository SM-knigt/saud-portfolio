import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import HeroRotatingBadge from '../components/HeroRotatingBadge'
import SBSLogo from '../components/SBSLogo'
import { SITE } from '../config'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.04 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const portraitParallax = useTransform(scrollY, [0, 480], [0, reduceMotion ? 0 : 64])

  return (
    <section
      id="hero"
      className="hero-aurora relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-24 sm:pb-16"
    >
      <div className="hero-blob hero-blob-a pointer-events-none absolute" />
      <div className="hero-blob hero-blob-b pointer-events-none absolute" />
      <div className="hero-blob hero-blob-c pointer-events-none absolute" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(34,211,238,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.7)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-[0.4] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_42%,#000,transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,52rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:col-span-7 lg:text-left"
        >
          <motion.div variants={item} className="mb-5 flex flex-col items-center gap-4 sm:mb-6 lg:items-start">
            <SBSLogo className="h-11 w-11 sm:h-12 sm:w-12" decorative />
            <HeroRotatingBadge />
          </motion.div>

          <motion.p
            variants={item}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90"
          >
            {SITE.name}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {SITE.headline}
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0"
          >
            {SITE.summary}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="interactive-shine relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              <span className="relative z-[1]">View projects</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition duration-300 hover:border-cyan-500/40 hover:bg-white/[0.08] hover:shadow-[0_0_28px_-12px_rgba(34,211,238,0.2)]"
            >
              Contact me
            </motion.a>
            <motion.a
              href={SITE.cvPath}
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium text-zinc-500 transition-colors hover:text-cyan-200/90"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:col-span-5 lg:justify-end"
        >
          <motion.div
            style={{ y: portraitParallax }}
            className="relative w-full max-w-[280px] will-change-transform sm:max-w-xs"
          >
            <div
              className={`hero-portrait-ground pointer-events-none absolute -bottom-3 left-1/2 z-0 h-11 w-[82%] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-cyan-500/35 via-indigo-500/25 to-cyan-500/30 blur-2xl ${reduceMotion ? 'opacity-50' : ''}`}
              aria-hidden
            />
            <div className={reduceMotion ? 'relative z-[1]' : 'hero-portrait-float relative z-[1]'}>
              <div
                className={`pointer-events-none absolute -inset-10 rounded-[2.25rem] bg-gradient-to-br from-cyan-500/25 via-indigo-500/15 to-cyan-500/10 ${reduceMotion ? '' : 'hero-portrait-halo'}`}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-zinc-900/50 shadow-[0_28px_70px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.06)_inset,0_0_40px_-12px_rgba(34,211,238,0.12)] ring-1 ring-cyan-500/15 backdrop-blur-sm aspect-[4/5] transition-shadow duration-500 hover:shadow-[0_32px_80px_-18px_rgba(0,0,0,0.55),0_0_50px_-10px_rgba(34,211,238,0.2)]">
                {SITE.profileImage ? (
                  <img src={SITE.profileImage} alt={SITE.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-8">
                    <span className="font-display text-5xl font-bold tracking-tight text-cyan-400/95 sm:text-6xl">
                      {SITE.monogram}
                    </span>
                    <span className="text-center text-[10px] uppercase tracking-[0.22em] text-zinc-600">Portrait</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
