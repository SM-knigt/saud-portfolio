/**
 * Hero-only mark: terminal / builder vibe — distinct from navbar SBS wordmark.
 */
export default function HeroPromptMark({ className = 'h-11 w-11 sm:h-12 sm:w-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="1" y="1" width="46" height="46" rx="13" className="fill-zinc-950" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
      <path
        d="M12 12v5M12 12h5M36 36v-5M36 36h-5"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M17 28.5l4-4-4-4"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <rect x="25" y="23" width="2" height="10" rx="0.5" className="fill-cyan-400 hero-prompt-cursor" />
      <path d="M30 28h9" stroke="rgba(113,113,122,0.45)" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}
