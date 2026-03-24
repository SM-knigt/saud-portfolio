import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'

const About = lazy(() => import('./sections/About'))
const Now = lazy(() => import('./sections/Now'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Contact = lazy(() => import('./sections/Contact'))

function SectionFallback() {
  return (
    <div
      className="flex min-h-[14rem] items-center justify-center border-t border-white/[0.04] bg-zinc-950/30"
      aria-hidden
    >
      <div className="h-1 w-24 overflow-hidden rounded-full bg-zinc-800">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-cyan-500/40" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Now />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
