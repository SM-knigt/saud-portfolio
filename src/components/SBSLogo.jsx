import { useId } from 'react'

/** Top-left mark: Saud Bin Samhan initials, pairs with wordmark in the navbar. */
export default function SBSLogo({ className = 'h-10 w-10', decorative = false }) {
  const raw = useId()
  const gid = `sbs-${raw.replace(/:/g, '')}`
  const hide = decorative

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
