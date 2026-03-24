import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Projects</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-500/80">Shipped and serious</p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Selected work across ML, APIs, and interfaces that real users touch.
          </p>
        </motion.div>
        <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
