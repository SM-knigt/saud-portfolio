import { useId, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { COURSES_PROGRAMS } from '../data/coursesPrograms'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const row = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 340, damping: 28 },
  },
}

export default function CoursesPrograms() {
  const reduce = useReducedMotion()
  const [openId, setOpenId] = useState(null)
  const headingId = useId()

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 max-w-6xl"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-zinc-950 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_32px_80px_-24px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-8 md:p-10">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/[0.12] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-indigo-600/[0.1] blur-3xl" />

        <div className="relative mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-500/10 shadow-inner shadow-cyan-500/10">
                <GradCapIcon className="h-4 w-4 text-cyan-400" />
              </div>
              <motion.p
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-500/75"
              >
                Courses & Programs
              </motion.p>
            </div>
            <h3 id={headingId} className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Credentials behind the stack
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-500 md:text-right">Programs I completed and the certificates that back them.</p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="relative flex flex-col gap-3 sm:gap-4"
          aria-labelledby={headingId}
        >
          {COURSES_PROGRAMS.map((c) => {
            const isOpen = openId === c.id
            const panelId = `course-panel-${c.id}`

            return (
              <motion.li key={c.id} variants={row} className="list-none">
                <div
                  className={`group relative overflow-hidden rounded-2xl border bg-zinc-950/55 shadow-lg shadow-black/25 transition-[border-color,box-shadow] duration-300 sm:rounded-[1.35rem] ${
                    isOpen
                      ? 'border-cyan-500/25 shadow-[0_20px_56px_-28px_rgba(34,211,238,0.12)]'
                      : 'border-white/[0.07] hover:border-cyan-500/20 hover:shadow-[0_16px_48px_-28px_rgba(34,211,238,0.1)]'
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-cyan-400/[0.07] to-transparent transition-transform duration-700 group-hover:translate-x-[220%]" />
                  </div>

                  <div className="relative p-4 sm:p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                        <div className="flex shrink-0 flex-wrap items-center gap-2">
                          {c.logos.map((src) => (
                            <motion.div
                              key={src}
                              whileHover={reduce ? {} : { y: -2, scale: 1.04 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                              className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.97] p-2 shadow-inner shadow-black/10 ring-1 ring-black/[0.04] transition-shadow duration-300 group-hover:shadow-md group-hover:ring-cyan-500/20"
                            >
                              <img src={src} alt="" loading="lazy" decoding="async" className="max-h-10 max-w-full object-contain" />
                            </motion.div>
                          ))}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="font-display text-base font-semibold leading-snug text-white sm:text-lg">{c.title}</p>

                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-zinc-500">
                            <span className="inline-flex items-center gap-1.5 text-zinc-400">
                              <BuildingIcon className="h-3.5 w-3.5 shrink-0 text-cyan-500/55" aria-hidden />
                              {c.partners}
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-relaxed text-zinc-500">{c.summary}</p>
                        </div>
                      </div>

                      <div className="flex shrink-0 justify-end sm:justify-start lg:justify-end">
                        <button
                          type="button"
                          onClick={() => toggle(c.id)}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/35 bg-cyan-500/[0.06] px-4 py-2.5 text-xs font-semibold text-cyan-100/95 transition hover:border-cyan-400/50 hover:bg-cyan-500/12 sm:w-auto sm:min-w-[10.5rem]"
                        >
                          {isOpen ? 'Hide details' : 'View details'}
                          <ChevronIcon className={`h-4 w-4 text-cyan-400/90 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div
                          id={panelId}
                          role="region"
                          aria-label={`${c.title} details`}
                          aria-hidden={!isOpen}
                          className="mt-5 border-t border-white/[0.06] pt-5"
                        >
                          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-start">
                            <div className="min-w-0 space-y-4">
                              <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
                                {c.detailParagraphs.map((p, i) => (
                                  <p key={i}>{p}</p>
                                ))}
                              </div>
                              {c.detailBullets?.length ? (
                                <ul className="space-y-2 border-l-2 border-cyan-500/25 pl-4 text-sm leading-relaxed text-zinc-400">
                                  {c.detailBullets.map((item) => (
                                    <li key={item} className="flex gap-2.5">
                                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-500/50" aria-hidden />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}

                              <div className="space-y-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] px-4 py-3">
                                <p className="text-sm font-semibold text-emerald-200/90">Verified certificate</p>
                                <motion.a
                                  href={c.certificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={reduce ? {} : { scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                  aria-label="Show credential in new tab"
                                  className="group/cred interactive-shine inline-flex w-full items-center gap-2 rounded-xl border border-cyan-500/30 bg-zinc-950/90 px-4 py-3 text-sm font-medium text-zinc-100 shadow-sm transition hover:border-cyan-400/45 hover:bg-zinc-900"
                                >
                                  <span>Show credential</span>
                                  <ExternalLinkSmallIcon className="h-4 w-4 shrink-0 text-cyan-400/85 transition group-hover/cred:text-cyan-300" />
                                  <span className="flex-1" aria-hidden />
                                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-cyan-500/55 transition group-hover/cred:text-cyan-400/90" />
                                </motion.a>
                              </div>
                            </div>

                            <div className="min-w-0">
                              <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/40 shadow-inner shadow-black/30">
                                {isOpen ? (
                                  <iframe
                                    title={`${c.title} certificate PDF`}
                                    src={`${c.certificate}#toolbar=0&navpanes=0`}
                                    className="h-[min(22rem,55vh)] w-full bg-zinc-950"
                                    loading="lazy"
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400/80 via-indigo-400/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden
                  />
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </motion.div>
  )
}

function GradCapIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  )
}

function BuildingIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V8l8-4 8 4v13M9 21v-6h6v6" />
    </svg>
  )
}

function ChevronIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function ExternalLinkSmallIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}
