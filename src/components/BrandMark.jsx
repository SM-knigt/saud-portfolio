import { useId } from 'react'

export default function BrandMark({ className = 'h-9 w-9', title = 'Saud Bin Samhan', decorative = false }) {
  const raw = useId()
  const gid = `bm-${raw.replace(/:/g, '')}`
  const hide = decorative || !title

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={hide ? 'presentation' : 'img'}
      aria-hidden={hide ? true : undefined}
    >
      {!hide ? <title>{title}</title> : null}
      <rect width="40" height="40" rx="10" className="fill-zinc-900" stroke={`url(#${gid})`} strokeWidth="1" />
      <path
        d="M12 26V14h5.2c2.9 0 4.8 1.4 4.8 3.9 0 1.25-.55 2.2-1.55 2.75 1.35.55 2.15 1.75 2.15 3.35 0 2.75-2.2 4-5.05 4H12Zm5.1-7.1c1.35 0 2.1-.55 2.1-1.65 0-1-.7-1.55-2-1.55H15.2v3.2h1.9Zm.35 7c1.55 0 2.45-.65 2.45-2 0-1.2-.85-1.85-2.45-1.85h-2.4v3.85h2.4Z"
        className="fill-cyan-400"
      />
      <defs>
        <linearGradient id={gid} x1="8" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" stopOpacity="0.55" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  )
}
