import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'about', 'currently', 'projects', 'skills', 'contact']

function sectionScrollTop(el) {
  const rect = el.getBoundingClientRect()
  return rect.top + window.scrollY
}

/**
 * Scroll spy: active section is the last one whose top has passed the viewport offset.
 */
export function useActiveSection() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const offset = () => Math.max(96, window.innerHeight * 0.12)

    const onScroll = () => {
      const pos = window.scrollY + offset()
      let current = SECTION_IDS[0]
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i]
        const el = document.getElementById(id)
        if (!el) continue
        if (sectionScrollTop(el) <= pos) {
          current = id
          break
        }
      }
      setActive((p) => (p === current ? p : current))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return active
}
