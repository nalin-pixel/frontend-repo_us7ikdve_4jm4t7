import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const items = [
  { date: '01/2025', text: 'Android preview' },
  { date: '02/2025', text: 'Adaptívne lekcie' },
  { date: '03/2025', text: 'Progres & odznaky' },
  { date: '04/2025', text: 'iOS beta' },
  { date: '05/2025', text: 'Kompletný obsah' },
]

export default function Roadmap() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.6])

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ opacity: glow }} className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_40%)]" />
      </div>
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Roadmap</h2>
          <p className="mt-4 text-slate-300/90">Čo chystáme najbližšie.</p>
        </div>

        <div className="mt-10 overflow-x-auto hide-scrollbar" aria-label="Roadmap slider">
          <div className="flex gap-4 min-w-max">
            {items.map((it, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur-xl shadow-[0_10px_40px_rgba(56,189,248,0.15)]"
              >
                <span className="text-xs font-mono text-cyan-300/90">{it.date}</span>
                <span className="text-sm opacity-90">{it.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
