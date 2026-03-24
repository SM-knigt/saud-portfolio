import { motion } from 'framer-motion'
import {
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiOpencv,
  SiPython,
  SiPytorch,
  SiReact,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si'
import { HiSparkles } from 'react-icons/hi2'

const MAP = {
  python: { Icon: SiPython, label: 'Python', color: '#3776AB' },
  pytorch: { Icon: SiPytorch, label: 'PyTorch', color: '#EE4C2C' },
  opencv: { Icon: SiOpencv, label: 'OpenCV', color: '#5C3EE8' },
  react: { Icon: SiReact, label: 'React', color: '#61DAFB' },
  typescript: { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  nodejs: { Icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  fastapi: { Icon: SiFastapi, label: 'FastAPI', color: '#009688' },
  flask: { Icon: SiFlask, label: 'Flask', color: '#fff' },
  supabase: { Icon: SiSupabase, label: 'Supabase', color: '#3ECF8E' },
  llm: { Icon: HiSparkles, label: 'LLMs', color: '#22d3ee' },
}

export default function TechStack({ items, className = '' }) {
  if (!items?.length) return null

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Tech stack">
      {items.map((key) => {
        const entry = MAP[key]
        if (!entry) return null
        const { Icon, label, color } = entry
        return (
          <li key={key}>
            <motion.span
              title={label}
              whileHover={{ y: -3, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 480, damping: 22 }}
              className="inline-flex h-9 w-9 cursor-default items-center justify-center rounded-xl border border-white/10 bg-zinc-950/60 text-lg text-zinc-100 shadow-inner shadow-black/20 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/40 hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.25)] group-hover:text-white"
              style={{ color }}
            >
              <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
              <span className="sr-only">{label}</span>
            </motion.span>
          </li>
        )
      })}
    </ul>
  )
}
