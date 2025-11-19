import { motion } from 'framer-motion'

export default function Beta() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-white shadow-[0_20px_120px_rgba(99,102,241,0.25)]"
          aria-labelledby="beta-title"
        >
          <h3 id="beta-title" className="text-2xl font-bold">Beta prístup</h3>
          <p className="mt-2 text-slate-300/90">Pridaj sa do uzavretej bety a pomôž nám doladiť detaily. Pošli krátku správu na e‑mail a pošleme ti pozvánku.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:podpora@matur.sk?subject=Matur%20Beta%20%2D%20Záujem"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-[0_10px_40px_rgba(56,189,248,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Požiadať o prístup
            </a>
            <span className="text-sm text-slate-300/80">alebo napíš na podpora@matur.sk</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
