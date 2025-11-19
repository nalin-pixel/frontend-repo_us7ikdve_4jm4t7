import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        aria-label="Hlavná navigácia"
        className="mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)] text-slate-200"
      >
        <div className="px-5 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-[0_0_24px_rgba(59,130,246,0.45)]">
              <Rocket size={18} aria-hidden="true" />
            </div>
            <span className="text-white font-semibold tracking-tight">Matur</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-1">Domov</a>
            <a href="#cookies" className="hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-1">Cookies</a>
            <a href="mailto:podpora@matur.sk" className="hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-1">Kontakt</a>
            <a
              href="https://release.matur.sk/matur-preview-0.5.2.apk"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-4 py-2 font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Stiahnuť preview (APK)
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 px-5 pb-4 pt-2">
            <div className="flex flex-col gap-2">
              <a href="#home" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-white/10">Domov</a>
              <a href="#cookies" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-white/10">Cookies</a>
              <a href="mailto:podpora@matur.sk" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-white/10">Kontakt</a>
              <a
                href="https://release.matur.sk/matur-preview-0.5.2.apk"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-4 py-3 font-medium text-white shadow-lg shadow-cyan-500/20"
              >
                Stiahnuť preview (APK)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
