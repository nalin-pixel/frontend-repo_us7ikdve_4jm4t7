import { motion } from 'framer-motion'
import { BadgeCheck, BookOpen, ChartLine, Gauge } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Maturitné okruhy',
    desc: 'Kompletné témy a príklady navrhnuté pre maturitu.'
  },
  {
    icon: Gauge,
    title: 'Adaptívne lekcie',
    desc: 'Systém sa prispôsobí tvojej úrovni – žiadne zbytočné zdržovanie.'
  },
  {
    icon: ChartLine,
    title: 'Sledovanie progresu',
    desc: 'Prehľadné grafy a štatistiky – rast, ktorý uvidíš.'
  },
  {
    icon: BadgeCheck,
    title: 'Odznaky a výzvy',
    desc: 'Motivácia cez achievementy a týždenné výzvy.'
  }
]

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Čo získaš</h2>
          <p className="mt-4 text-slate-300/90">Interaktívny tréning s moderným dizajnom.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, rotate: -0.25 }}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6 text-white overflow-hidden"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-violet-600/10" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 grid place-items-center shadow-lg shadow-cyan-500/30">
                  <f.icon aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
