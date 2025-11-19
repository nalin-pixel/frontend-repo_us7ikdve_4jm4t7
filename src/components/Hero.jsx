import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl') ||
      (window.WebGLRenderingContext && canvas instanceof HTMLCanvasElement)
    )
  } catch {
    return false
  }
}

function getQueryFlag(key) {
  try {
    const url = new URL(window.location.href)
    const v = url.searchParams.get(key)
    if (!v) return false
    return ['1', 'true', 'yes', 'on'].includes(v.toLowerCase())
  } catch {
    return false
  }
}

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5])
  const y = useTransform(scrollY, [0, 400], [0, -40])

  const [webgl, setWebgl] = useState(true)
  useEffect(() => {
    setWebgl(isWebGLAvailable())
  }, [])

  const disableSpline = useMemo(() => {
    const env = String(import.meta.env.VITE_DISABLE_SPLINE || '').toLowerCase() === 'true'
    const q = getQueryFlag('no3d')
    return env || q
  }, [])

  const [SplineComp, setSplineComp] = useState(null)
  const [splineReady, setSplineReady] = useState(false)
  const [splineVisible, setSplineVisible] = useState(false)
  const [splineFailed, setSplineFailed] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    let mounted = true

    if (disableSpline || !webgl) return

    import('@splinetool/react-spline')
      .then((m) => {
        if (!mounted) return
        setSplineComp(() => m.default)
        timeoutRef.current = window.setTimeout(() => {
          if (!splineReady) {
            setSplineFailed(true)
            setSplineVisible(false)
          }
        }, 4000)
      })
      .catch(() => {
        if (!mounted) return
        setSplineFailed(true)
        setSplineVisible(false)
      })

    return () => {
      mounted = false
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [disableSpline, splineReady, webgl])

  useEffect(() => {
    if (splineReady) {
      setSplineVisible(true)
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [splineReady])

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Starfield canvas fallback: always-on, vivid so there's never a grey screen */}
      <CanvasStars />

      {/* Gradient nebula + grid overlay for depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(1200px_600px_at_-10%_-20%,rgba(30,64,175,0.45),transparent),radial-gradient(900px_500px_at_120%_10%,rgba(139,92,246,0.35),transparent),radial-gradient(800px_600px_at_50%_120%,rgba(56,189,248,0.35),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] mix-blend-overlay" />
      </div>

      {/* Spline layer: loaded lazily; hidden unless ready */}
      {!disableSpline && webgl && SplineComp && !splineFailed && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${splineVisible ? 'opacity-100' : 'opacity-0'}`}>
          <SplineComp
            scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setSplineReady(true)}
            onError={() => {
              setSplineFailed(true)
              setSplineVisible(false)
            }}
            aria-label="Interaktívne 3D pozadie"
          />
        </div>
      )}

      {/* Top vignette to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/40 to-slate-950" />

      <motion.div style={{ opacity, y }} className="relative z-10 w-full px-6 md:px-10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <p className="sr-only">{splineReady ? '3D pozadie je načítané' : 'Načítavam pozadie'}</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-[0_6px_40px_rgba(99,102,241,0.45)]">
              Zmaturuj s ľahkosťou
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-200/90">
              Android preview je pripravené. Začni trénovať na maturitu ešte dnes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://release.matur.sk/matur-preview-0.5.2.apk"
                className="pointer-events-auto group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-[0_10px_40px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span className="relative">
                  <span className="absolute -inset-2 rounded-2xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
                  Stiahnuť preview (APK)
                </span>
              </a>
              <a
                href="#ukazka"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Pozri ukážku
              </a>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[520px]">
            <div className="absolute inset-0 rounded-[28px] bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-[0_20px_120px_rgba(88,28,255,0.25)]">
              <div className="absolute -inset-40 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(139,92,246,0.18),transparent_40%)] animate-pulse" />
              <div className="relative z-10 h-full w-full grid place-items-center">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div aria-label="Ukážka aplikácie" className="relative scale-95">
      <div className="mx-auto w-[240px] h-[480px] rounded-[36px] border-2 border-white/20 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_40px_140px_rgba(56,189,248,0.25)] overflow-hidden">
        <div className="h-6 bg-black/60" />
        <div className="h-full relative">
          <Stars parallax={6} />
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-center text-white">
              <p className="text-sm opacity-80">Matur • Android preview</p>
              <p className="text-xs opacity-60 mt-1">Interaktívny tréning, otázky, progres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stars({ parallax = 4 }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, parallax * -10])
  return (
    <motion.div style={{ y }} className="absolute inset-0">
      <svg viewBox="0 0 400 800" className="w-full h-full opacity-70" aria-hidden="true">
        {Array.from({ length: 90 }).map((_, i) => {
          const cx = Math.random() * 400
          const cy = Math.random() * 800
          const r = Math.random() * 1.2 + 0.2
          const o = Math.random() * 0.7 + 0.3
          return <circle key={i} cx={cx} cy={cy} r={r} fill={`rgba(185,225,255,${o})`} />
        })}
      </svg>
    </motion.div>
  )
}

function CanvasStars() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const stars = Array.from({ length: 160 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      a: Math.random() * Math.PI * 2,
      s: Math.random() * 0.02 + 0.005,
      c: `hsla(${200 + Math.random() * 60}, 90%, ${65 + Math.random() * 20}%, 0.85)`
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // soft space glow
      const grad = ctx.createRadialGradient(w * 0.2, h * 0.1, 0, w * 0.2, h * 0.1, Math.max(w, h))
      grad.addColorStop(0, 'rgba(56,189,248,0.10)')
      grad.addColorStop(0.5, 'rgba(99,102,241,0.08)')
      grad.addColorStop(1, 'rgba(2,6,23,0.0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      for (const star of stars) {
        star.a += star.s
        const tw = (Math.sin(star.a) + 1) / 2 // 0..1
        ctx.beginPath()
        ctx.shadowBlur = 12
        ctx.shadowColor = star.c
        ctx.fillStyle = star.c
        ctx.arc(star.x, star.y, star.r + tw * 0.8, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
