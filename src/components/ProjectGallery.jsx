import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Horizontal strip + optional desktop dock (portaled into `dockHost`) + lightbox.
 */
export default function ProjectGallery({ images, title, dockHost = null, dockOnWide = false }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const list = [...new Set(images ?? [])]
  const count = list.length
  const go = useCallback(
    (delta) => {
      if (!count) return
      setIndex((i) => (i + delta + count) % count)
    },
    [count],
  )

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, count - 1)))
  }, [count])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, go])

  if (!count) return null

  const openAt = (i) => {
    setIndex(i)
    setOpen(true)
  }

  const thumbBtn = (src, i, compact) => (
    <button
      key={`${src}-${i}-${compact ? 'c' : 'w'}`}
      type="button"
      onClick={() => openAt(i)}
      className={
        compact
          ? 'group relative w-full shrink-0 overflow-hidden rounded-lg border border-white/[0.12] bg-zinc-950/80 outline-none ring-cyan-500/0 backdrop-blur-sm transition hover:border-cyan-500/45 hover:ring-1 hover:ring-cyan-500/30 focus-visible:ring-2 focus-visible:ring-cyan-500/50'
          : 'group relative shrink-0 snap-start overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/50 outline-none ring-cyan-500/0 transition hover:border-cyan-500/35 hover:ring-2 hover:ring-cyan-500/20 focus-visible:ring-2 focus-visible:ring-cyan-500/50'
      }
      aria-label={`View image ${i + 1} of ${count} for ${title}`}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className={
          compact
            ? 'aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.05]'
            : 'h-28 w-44 object-cover transition duration-300 group-hover:scale-[1.04] sm:h-32 sm:w-52'
        }
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 transition group-hover:opacity-100" />
    </button>
  )

  const dock =
    dockOnWide && dockHost
      ? createPortal(
          <div className="pointer-events-auto absolute inset-y-3 right-3 z-20 flex w-[4.25rem] flex-col gap-2 overflow-y-auto overflow-x-hidden pr-0.5 pt-1 [scrollbar-width:thin]">
            {list.map((src, i) => thumbBtn(src, i, true))}
          </div>,
          dockHost,
        )
      : null

  const stripHiddenOnLg = dockOnWide ? 'lg:hidden' : ''

  return (
    <>
      {dock}

      <div className={`border-t border-white/[0.06] bg-zinc-950/40 px-4 py-4 sm:px-5 ${stripHiddenOnLg}`}>
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Screens and moments</p>
          <span className="text-[10px] text-zinc-600">
            {count} photo{count === 1 ? '' : 's'}
          </span>
        </div>
        <div className="gallery-scroll flex gap-3 overflow-x-auto pb-1 pt-0.5 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory">
          {list.map((src, i) => thumbBtn(src, i, false))}
        </div>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-zinc-500">
          Tap for full screen. Arrows to browse. Esc to close.
        </p>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[200] flex flex-col bg-zinc-950/95 backdrop-blur-md"
                role="dialog"
                aria-modal="true"
                aria-label={`${title} gallery`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] px-4 py-3 sm:px-6">
                  <p className="min-w-0 truncate font-display text-sm font-medium text-white">{title}</p>
                  <p className="shrink-0 text-xs tabular-nums text-zinc-500">
                    {index + 1} / {count}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
                  >
                    Close
                  </button>
                </div>
                <div className="relative flex flex-1 items-center justify-center p-4 sm:p-8">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-zinc-900/80 p-3 text-white backdrop-blur-md transition hover:border-cyan-500/40 sm:left-4 sm:block"
                    aria-label="Previous image"
                  >
                    <Chevron className="rotate-180" />
                  </button>
                  <motion.img
                    key={list[index]}
                    src={list[index]}
                    alt=""
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-[min(78vh,calc(100dvh-8rem))] max-w-full rounded-lg object-contain shadow-2xl shadow-black/50"
                  />
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/10 bg-zinc-900/80 p-3 text-white backdrop-blur-md transition hover:border-cyan-500/40 sm:right-4 sm:block"
                    aria-label="Next image"
                  >
                    <Chevron />
                  </button>
                </div>
                <div className="gallery-scroll flex gap-2 overflow-x-auto border-t border-white/[0.06] px-4 py-3 sm:px-6">
                  {list.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`shrink-0 overflow-hidden rounded-lg border-2 transition ${
                        i === index ? 'border-cyan-400/70' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    >
                      <img src={src} alt="" className="h-14 w-24 object-cover sm:h-16 sm:w-28" loading="lazy" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )}
    </>
  )
}

function Chevron({ className = '' }) {
  return (
    <svg className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
