import { useId } from 'react'

/**
 * SBS mark for navbar (optional animated conic border), footer, etc.
 * @param {{ className?: string, decorative?: boolean, animated?: boolean }} props
 */
export default function SBSLogo({ className = 'h-10 w-10', decorative = false, animated = false }) {
  const raw = useId()
  const gid = `sbs-${raw.replace(/:/g, '')}`
  const hide = decorative

  if (animated) {
    return (
      <div
        className={`relative grid place-items-center overflow-hidden rounded-[13px] p-[2px] ${className}`}
        role={hide ? 'presentation' : 'img'}
        aria-hidden={hide ? true : undefined}
      >
        {!hide ? <span className="sr-only">SBS, Saud Bin Samhan</span> : null}
        <div
          aria-hidden
          className="col-start-1 row-start-1 h-[220%] w-[220%] bg-[conic-gradient(from_0deg,#22d3ee,#6366f1,#2dd4bf,#38bdf8,#22d3ee)] motion-safe:animate-[spin_5.5s_linear_infinite] motion-reduce:animate-none motion-reduce:opacity-[0.75]"
        />
        <div className="col-start-1 row-start-1 z-[1] flex h-[calc(100%-4px)] w-[calc(100%-4px)] items-center justify-center rounded-[11px] bg-zinc-950">
          <span
            className="font-display text-[13px] font-bold tracking-[-0.08em] text-white sm:text-[14px]"
            style={{ fontFamily: 'Outfit, system-ui, sans-serif' }}
          >
            SBS
          </span>
        </div>
      </div>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={hide ? 'presentation' : 'img'}
      aria-hidden={hide ? true : undefined}
    >
      {!hide ? <title>SBS, Saud Bin Samhan</title> : null}
      <defs>
        <linearGradient id={gid} x1="10" y1="6" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#67e8f9" stopOpacity="0.55" />
          <stop offset="1" stopColor="#818cf8" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="42" height="42" rx="12" className="fill-zinc-950" stroke={`url(#${gid})`} strokeWidth="1.25" />
      <text
        x="22"
        y="29"
        textAnchor="middle"
        className="fill-white font-display text-[15px] font-bold tracking-[-0.06em]"
        style={{ fontFamily: 'Outfit, system-ui, sans-serif' }}
      >
        SBS
      </text>
    </svg>
  )
}
