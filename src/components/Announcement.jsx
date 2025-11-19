import { Megaphone } from 'lucide-react'

export default function Announcement() {
  return (
    <div className="relative z-40">
      <div className="mx-auto w-[92%] max-w-6xl mt-2">
        <div className="flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-violet-600/10 px-4 py-2 text-cyan-100 shadow-[0_8px_40px_rgba(56,189,248,0.25)] backdrop-blur">
          <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
            <Megaphone size={16} aria-hidden="true" />
          </div>
          <p className="text-sm">
            <span className="font-semibold">Matur</span> • Ultra-moderná landing page s hviezdnym pozadím je aktívna. Ak nevidíš 3D, skús verziu bez 3D: 
            <a className="underline decoration-cyan-400/60 underline-offset-4 hover:text-white ml-1" href="/?no3d=1">/?no3d=1</a>
          </p>
        </div>
      </div>
    </div>
  )
}
