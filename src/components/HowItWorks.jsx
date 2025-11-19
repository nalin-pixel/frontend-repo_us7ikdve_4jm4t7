import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Target, Sparkles, Trophy } from 'lucide-react'

const steps = [
  {
    icon: Brain,
    title: 'Vyber tému',
    desc: 'Maturita, literatúra, gramatika – všetko na jednom mieste.'
  },
  {
    icon: Target,
    title: 'Trénuj adaptívne',
    desc: 'Otázky sa prispôsobujú tvojej úrovni – rýchle napredovanie.'
  },
  {
    icon: Sparkles,
    title: 'Mini ukážky',
    desc: 'Krátke interaktívne demá pre rýchle pochopenie.'
  },
  {
    icon: Trophy,
    title: 'Zbieraj odznaky',
    desc: 'Motivácia cez progres a odmeny.'
  }
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ukazka" className="relative py-28">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(139,92,246,0.15),transparent_40%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Ako funguje</h2>
          <p className="mt-4 text-slate-300/90">3–4 kroky a si pripravený.</p>
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.1 * i, type: 'spring', stiffness: 120 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white overflow-hidden"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-violet-600/10" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 grid place-items-center shadow-lg shadow-cyan-500/30">
                  <s.icon aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
