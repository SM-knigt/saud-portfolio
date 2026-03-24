import { useCallback, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ProjectGallery from './ProjectGallery'
import TechStack from './TechStack'

export default function ProjectCard({ project, index = 0 }) {
  const { title, tagline, description, image, gallery, tech, github, linkedin, demo, highlights } = project
  const galleryUnique = useMemo(() => [...new Set(gallery ?? [])], [gallery])
  const [dockHost, setDockHost] = useState(null)
  const setMediaRef = useCallback((node) => {
    setDockHost(node)
  }, [])

  const reverse = index % 2 === 1
  const reduceMotion = useReducedMotion()
  const driftDelay = `${index * 0.42}s`

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-zinc-900/25 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] shadow-black/50 backdrop-blur-xl transition-[box-shadow,border-color] duration-500 hover:border-cyan-500/20 hover:shadow-[0_28px_80px_-16px_rgba(34,211,238,0.14)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-0">
        {/* Media */}
        <div
          className={`relative min-h-[240px] lg:min-h-[380px] lg:max-h-[min(92vh,52rem)] ${reverse ? 'lg:order-2' : ''} lg:col-span-7`}
        >
          <div className="relative h-full min-h-[inherit] overflow-hidden bg-zinc-950">
            <div
              className={`pointer-events-none absolute -bottom-1 left-1/2 z-0 h-7 w-[68%] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-cyan-500/25 via-indigo-500/15 to-cyan-500/20 blur-xl ${reduceMotion ? 'opacity-40' : 'project-media-ground'}`}
              style={reduceMotion ? undefined : { animationDelay: driftDelay }}
              aria-hidden
            />
            <div
              ref={setMediaRef}
              className={`relative h-full min-h-[inherit] w-full overflow-hidden ${reduceMotion ? '' : 'project-media-levitate'}`}
              style={reduceMotion ? undefined : { animationDelay: driftDelay }}
            >
            <img
              src={image}
              alt=""
              decoding="async"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[center_18%] contrast-[1.03] transition duration-[1.1s] ease-out will-change-transform sm:object-[center_25%] md:object-center group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-zinc-950/90 via-zinc-950/15 to-transparent to-45% md:from-zinc-950/75 md:via-zinc-950/10 md:to-zinc-950/20 lg:from-zinc-950/55 lg:via-transparent lg:to-zinc-950/35" />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-cyan-500/0 via-transparent to-indigo-600/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-500/15 group-hover:to-indigo-600/12 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 z-[2] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" aria-hidden />
            <div className="pointer-events-none absolute inset-0 z-[2] opacity-0 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.28)] transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:hidden">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/90">{tagline}</p>
              <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight text-white">{title}</h3>
            </div>
            </div>
          </div>
        </div>

        {/* Copy + actions */}
        <div
          className={`flex flex-col justify-center gap-5 border-t border-white/[0.06] bg-zinc-950/55 p-6 backdrop-blur-xl sm:p-8 lg:border-t-0 lg:border-l lg:border-white/[0.06] ${reverse ? 'lg:order-1 lg:border-l-0 lg:border-r' : ''} lg:col-span-5`}
        >
          <div className="hidden lg:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400/85">{tagline}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white">{title}</h3>
          </div>

          {description ? (
            <p className="text-sm leading-relaxed text-zinc-400 lg:text-[0.9375rem] lg:leading-[1.65]">{description}</p>
          ) : null}

          <TechStack items={tech} />

          {highlights?.length ? (
            <ul className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-lg border border-zinc-700/50 bg-zinc-900/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-400"
                >
                  {h}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-auto flex flex-wrap gap-2 pt-1">
            <motion.a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-600/80 bg-zinc-900/70 px-4 py-2.5 text-xs font-semibold text-zinc-100 shadow-sm transition hover:border-cyan-500/45 hover:bg-zinc-800/80 hover:text-white sm:flex-none sm:px-6"
            >
              <GitHubIcon className="h-4 w-4 shrink-0 opacity-80" />
              GitHub
            </motion.a>
            {linkedin ? (
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                aria-label={`${title} on LinkedIn`}
                className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-[#0A66C2]/45 bg-[#0A66C2]/10 px-4 py-2.5 text-xs font-semibold text-sky-200/95 shadow-sm transition hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/18 hover:text-white sm:flex-none sm:px-6"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0 text-[#2D9CDB]" />
                LinkedIn
              </motion.a>
            ) : null}
            {demo ? (
              <motion.a
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/35 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/15 sm:w-auto sm:px-6"
              >
                <ExternalIcon className="h-4 w-4" />
                Live demo
              </motion.a>
            ) : null}
          </div>
        </div>

        <div className="col-span-full lg:col-span-12">
          <ProjectGallery images={galleryUnique} title={title} dockHost={dockHost} dockOnWide />
        </div>
      </div>
    </motion.article>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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

function ExternalIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
